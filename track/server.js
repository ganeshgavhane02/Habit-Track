const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
const DB_FILE = path.join(__dirname, 'database.json');

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Serve static frontend files
app.use(express.static(__dirname));

// Optional MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
let useMongoDB = false;

// If MONGODB_URI is provided, connect to MongoDB
if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB successfully!");
            useMongoDB = true;
        })
        .catch(err => {
            console.error("Failed to connect to MongoDB, falling back to local file database:", err);
        });
}

// Define Mongoose Schema if MongoDB is connected
const AppDataSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    data: mongoose.Schema.Types.Mixed,
    updatedAt: { type: Date, default: Date.now }
});
const AppData = mongoose.model('AppData', AppDataSchema);

// Helper to read local file database
function readLocalDB() {
    if (!fs.existsSync(DB_FILE)) {
        return {};
    }
    try {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error("Error reading database.json:", err);
        return {};
    }
}

// Helper to write local file database
function writeLocalDB(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 4), 'utf8');
    } catch (err) {
        console.error("Error writing database.json:", err);
    }
}

// ==========================================
// ============= API ENDPOINTS ==============
// ==========================================

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', database: useMongoDB ? 'MongoDB' : 'local file' });
});

// GET endpoint to load synced appData
app.get('/api/sync', async (req, res) => {
    const { key } = req.query;
    if (!key) {
        return res.status(400).json({ error: "Missing 'key' parameter" });
    }

    if (useMongoDB) {
        try {
            const doc = await AppData.findOne({ key });
            return res.json({ appData: doc ? doc.data : null });
        } catch (err) {
            console.error("MongoDB Read error, falling back to local DB:", err);
        }
    }

    // Local file fallback
    const db = readLocalDB();
    res.json({ appData: db[key] || null });
});

// POST endpoint to save synced appData
app.post('/api/sync', async (req, res) => {
    const { key, data } = req.body;
    if (!key || !data) {
        return res.status(400).json({ error: "Missing 'key' or 'data' parameters" });
    }

    if (useMongoDB) {
        try {
            await AppData.findOneAndUpdate(
                { key },
                { data, updatedAt: new Date() },
                { upsert: true, new: true }
            );
            return res.json({ success: true, database: 'MongoDB' });
        } catch (err) {
            console.error("MongoDB Write error, falling back to local DB:", err);
        }
    }

    // Local file fallback
    const db = readLocalDB();
    db[key] = data;
    writeLocalDB(db);
    res.json({ success: true, database: 'local file' });
});

// POST endpoint to validate passcode for journal (removes client-side passcode exposure)
app.post('/api/auth/validate-journal', (req, res) => {
    const { pass } = req.body;
    const SECURE_PASS = "143"; // Secret is stored on the server side
    
    if (pass === SECURE_PASS) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: "Invalid passcode" });
    }
});

// Catch-all to serve index.html for UI navigation
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 Warrior Protocol Server running on http://localhost:${PORT}`);
    console.log(`📦 Database mode: ${useMongoDB ? 'MongoDB' : 'local file (database.json)'}`);
    console.log(`==================================================`);
});
