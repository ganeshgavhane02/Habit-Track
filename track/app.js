
    const SECRET_PASS = "143"; 
    
    const gitaShlokas = [
        {
            sanskrit: "अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि।<br>ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि॥",
            meaning: "If you do not fight this righteous war (do your duty), you will lose your honor, abandon your Dharma, and incur sin. (BG 2.33)"
        },
        {
            sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।<br>अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
            meaning: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy. (BG 6.6)"
        },
        {
            sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।<br>शरीरयात्रापि च ते न प्रसिद्ध्येत् अकर्मणः॥",
            meaning: "Perform your prescribed duty, for doing so is better than not working. One cannot even maintain one's physical body without work. (BG 3.8)"
        }
    ];

    const gitaDashboardData = [
        { 
            chapter: "Chapter 2, Verse 47", theme: "Duty & Detachment",
            sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br>मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
            meaning: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
            marathi: "तुझा अधिकार केवळ कर्म करण्यात आहे, त्याच्या फळावर नाही. फळाच्या इच्छेने कर्म करू नकोस आणि कर्म न करण्याकडेही तुझी प्रवृत्ती नसावी."
        },
        { 
            chapter: "Chapter 6, Verse 5", theme: "Self-Mastery",
            sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।<br>आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
            meaning: "One must elevate himself by his own mind, not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well.",
            marathi: "माणसाने स्वतःच्या प्रयत्नांनी आपला उद्धार करावा, स्वतःला अधोगतीला नेऊ नये. कारण आपले मनच आपला मित्र आणि आपले मनच आपला शत्रू आहे."
        },
        { 
            chapter: "Chapter 2, Verse 14", theme: "Resilience",
            sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।<br>आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
            meaning: "O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.",
            marathi: "हे कुंतीपुत्र, इंद्रियांचा विषयांशी संपर्क झाल्याने हिवाळा आणि उन्हाळा यांसारखे सुख-दुःख निर्माण होतात. ते क्षणभंगुर आणि अनित्य आहेत. म्हणून हे भरतवंशीय अर्जुना, तू ते सहन करायला शिक."
        },
        { 
            chapter: "Chapter 3, Verse 19", theme: "Unattached Action",
            sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।<br>असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
            meaning: "Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment one attains the Supreme.",
            marathi: "म्हणून आसक्ती न ठेवता नेहमी आपले विहित कर्तव्य करत राहा. कारण अनासक्त भावनेने कर्म करणारा मनुष्य परमेश्वराला प्राप्त होतो."
        }
    ];

    const warriorQuotes = [
        { t: "Suffer the pain of discipline or suffer the pain of regret.", a: "Warrior Ethos" },
        { t: "मंजिलें क्या हैं, रास्ता क्या है? हौसला हो तो फासला क्या है!", a: "Hindi Motivation" },
        { t: "थांबला तो संपला. (He who stops, is finished.)", a: "Marathi Proverb" },
        { t: "Do not pray for an easy life, pray for the strength to endure a difficult one.", a: "Bruce Lee" },
        { t: "Discipline equals freedom.", a: "Jocko Willink" }
    ];

    const masterHolidayRoutineData = [
        { start: "06:00", end: "06:04", name: "🌅 Wake Up", water: "--", rule: "Wake up 6 am to 6:04 am", goal: 30, freq: [0,1,2,3,4,5,6] },
        { start: "06:04", end: "06:35", name: "🧼 Fresh Up & Planning", water: "--", rule: "Fresh Up and some planning today works proper or", goal: 30, freq: [0,1,2,3,4,5,6] },
        { start: "06:35", end: "07:00", name: "🏃 Exercise", water: "--", rule: "exercise", goal: 30, freq: [0,1,2,3,4,5,6] },
        { start: "07:00", end: "07:25", name: "🚿 Shower", water: "--", rule: "Shower", goal: 30, freq: [0,1,2,3,4,5,6] },
        { start: "07:25", end: "07:30", name: "🧹 Room Clean & Bed Sheets", water: "--", rule: "anything room fresh and clean BEDSHEET until all work finish with", goal: 30, freq: [0,1,2,3,4,5,6] },
        { start: "07:30", end: "09:30", name: "📵 Mobile 0 Screen Time", water: "--", rule: "Mobile 0 screen time", goal: 30, freq: [0,1,2,3,4,5,6] },
        { start: "07:30", end: "09:30", name: "🧠 DSA Basic+ BACK REVISION", water: "--", rule: "DSA Basic+ BACK REVISION", goal: 30, freq: [0,1,2,3,4,5,6] },
        { start: "09:30", end: "10:00", name: "🍳 Breakfast / Nasta & Break", water: "--", rule: "9:30 to after Nasta then some time break after", goal: 30, freq: [0,1,2,3,4,5,6] }
    ];

    function getActivityBadge(name) {
        const lower = name.toLowerCase();
        let label = "Routine";
        let colorClass = "tag-routine";
        let icon = "📋";
        
        if (lower.includes("dsa") || lower.includes("study") || lower.includes("revision") || lower.includes("planning")) {
            label = "Study/DSA";
            colorClass = "tag-study";
            icon = "🧠";
        } else if (lower.includes("dev") || lower.includes("work")) {
            label = "Dev/Work";
            colorClass = "tag-work";
            icon = "💻";
        } else if (lower.includes("gym") || lower.includes("exercise") || lower.includes("workout") || lower.includes("shoes") || lower.includes("outdoor") || lower.includes("cardio")) {
            label = "Fitness";
            colorClass = "tag-fitness";
            icon = "🏋️";
        } else if (lower.includes("college") || lower.includes("class")) {
            label = "College";
            colorClass = "tag-college";
            icon = "🏫";
        } else if (lower.includes("wake") || lower.includes("sleep") || lower.includes("nap")) {
            label = "Sleep/Health";
            colorClass = "tag-health";
            icon = "🛌";
        } else if (lower.includes("fresh") || lower.includes("shower") || lower.includes("clean") || lower.includes("walk") || lower.includes("movie") || lower.includes("free") || lower.includes("lunch") || lower.includes("breakfast") || lower.includes("dinner") || lower.includes("nasta") || lower.includes("tea")) {
            label = "Life/Break";
            colorClass = "tag-personal";
            icon = "🌱";
        }
        
        return `<span class="activity-badge ${colorClass}">${icon} ${label}</span>`;
    }

    const masterRoutineData = [
        { start: "05:00", end: "05:20", name: "🌅 Wake Up", water: "Start Bottle 1 (300ml)", rule: "Toilet. Brush Teeth. Drink 300ml.", goal: 30, freq: [1,2,3,4,5] },
        { start: "05:20", end: "05:21", name: "👟 Shoes On", water: "--", rule: "Get out the door.", goal: 30, freq: [1,2,3,4,5] },
        { start: "05:21", end: "06:31", name: "🏋️ Gym (Pull)", water: "Sip Bottle 1", rule: "Back/Biceps.", goal: 30, freq: [1,2,3,4,5] },
        { start: "06:31", end: "06:55", name: "🚿 Shower", water: "Finish Bottle 1", rule: "Cold Shower. Get Dressed.", goal: 30, freq: [1,2,3,4,5] },
        { start: "06:55", end: "08:00", name: "🧠 DSA Study", water: "--", rule: "Top K Frequent Elements (LC 347). Skip Product of Array if hard.", goal: 30, freq: [1,2,3,4,5] },
        { start: "08:00", end: "08:20", name: "🍳 Breakfast", water: "--", rule: "Eat well. Watch Tech News.", goal: 30, freq: [1,2,3,4,5] },
        { start: "08:20", end: "08:45", name: "🚌 Commute", water: "--", rule: "English: Shadowing Podcast.", goal: 30, freq: [1,2,3,4,5] },
        { start: "08:45", end: "10:45", name: "🎓 College Pt 1", water: "Start Bottle 2", rule: "Keep bottle on desk.", goal: 30, freq: [1,2,3,4,5] },
        { start: "10:45", end: "11:30", name: "🥪 Break 1", water: "Finish Bottle 2", rule: "Toilet Break. Refill Bottle. Eat Snack.", goal: 30, freq: [1,2,3,4,5] },
        { start: "11:30", end: "13:30", name: "🎓 College Pt 2", water: "Start Bottle 3", rule: "Sip slowly.", goal: 30, freq: [1,2,3,4,5] },
        { start: "13:30", end: "13:45", name: "🚶 Break 2", water: "Drink 50% Bottle 3", rule: "Toilet Break. Check Urine Color.", goal: 30, freq: [1,2,3,4,5] },
        { start: "13:45", end: "15:45", name: "🎓 College Pt 3", water: "Finish Bottle 3", rule: "Finish before leaving.", goal: 30, freq: [1,2,3,4,5] },
        { start: "15:45", end: "16:30", name: "🏠 Commute Home", water: "--", rule: "Relax. Music.", goal: 30, freq: [1,2,3,4,5] },
        { start: "16:30", end: "17:15", name: "⚡ Power Nap", water: "--", rule: "Strict 45 mins. Alarm set.", goal: 30, freq: [1,2,3,4,5] },
        { start: "17:15", end: "18:45", name: "💻 Dev Work", water: "Start Bottle 4", rule: "Topic: Box Model. Git commit -m 'Day 3: Box Model'", goal: 30, freq: [1,2,3,4,5] },
        { start: "18:45", end: "19:15", name: "🛁 Fresh Up", water: "--", rule: "Wash Face. Stretch Legs.", goal: 30, freq: [1,2,3,4,5] },
        { start: "19:15", end: "20:00", name: "🍽️ Dinner", water: "FINISH BOTTLE 4", rule: "DEADLINE: Drink with food. Eat Light.", goal: 30, freq: [1,2,3,4,5] },
        { start: "20:00", end: "20:30", name: "🚶 Walk / Family", water: "--", rule: "Digest food. Chat with parents.", goal: 30, freq: [1,2,3,4,5] },
        { start: "20:30", end: "21:15", name: "🔄 Revision", water: "SIP ONLY", rule: "Explain 'Prefix Product' logic.", goal: 30, freq: [1,2,3,4,5] },
        { start: "21:15", end: "21:30", name: "🎒 Pack Bag", water: "--", rule: "Checklist: Charger, Notebook, ID Card.", goal: 30, freq: [1,2,3,4,5] },
        { start: "21:30", end: "--", name: "😴 Sleep", water: "--", rule: "Toilet. Lights out.", goal: 30, freq: [1,2,3,4,5] },

        { start: "05:00", end: "05:20", name: "🌅 Wake Up (Sat)", water: "Start Bottle 1", rule: "Same routine.", goal: 30, freq: [6] },
        { start: "05:21", end: "06:31", name: "🏋️ Gym (Sat)", water: "Sip Bottle 1", rule: "Light Cardio.", goal: 30, freq: [6] },
        { start: "06:31", end: "07:30", name: "🚿 Ready/Break", water: "Finish Bottle 1", rule: "Breakfast.", goal: 30, freq: [6] },
        { start: "08:30", end: "11:00", name: "💻 Dev Marathon", water: "Start Bottle 2", rule: "Portfolio Polish.", goal: 30, freq: [6] },
        { start: "11:00", end: "12:00", name: "🧹 Clean Up", water: "Finish Bottle 2", rule: "Clean room.", goal: 30, freq: [6] },
        { start: "12:00", end: "13:00", name: "🥪 Lunch", water: "Start Bottle 3", rule: "Eat well.", goal: 30, freq: [6] },
        { start: "14:00", end: "15:30", name: "🧠 DSA Test", water: "Drink 50%", rule: "Binary Search.", goal: 30, freq: [6] },
        { start: "16:00", end: "18:30", name: "🚶 Outdoor", water: "Finish Bottle 3", rule: "No screens.", goal: 30, freq: [6] },
        { start: "20:30", end: "22:00", name: "🎬 Movie", water: "Finish Bottle 4", rule: "Social Network.", goal: 30, freq: [6] },

        { start: "07:30", end: "08:00", name: "🛌 Wake Up (Sun)", water: "Start Bottle 1", rule: "No alarm.", goal: 30, freq: [0] },
        { start: "08:00", end: "09:00", name: "☕ Morning Tea", water: "Sip Bottle 1", rule: "Sit outside.", goal: 30, freq: [0] },
        { start: "10:00", end: "11:30", name: "🧠 Maintenance", water: "Start Bottle 2", rule: "GitHub Check.", goal: 30, freq: [0] },
        { start: "11:30", end: "13:00", name: "🎮 Free Time", water: "Sip Bottle 2", rule: "Gaming.", goal: 30, freq: [0] },
        { start: "14:00", end: "16:00", name: "😴 Nap", water: "Start Bottle 3", rule: "Muscle recovery.", goal: 30, freq: [0] },
        { start: "16:00", end: "18:30", name: "🏏 Outdoor", water: "Finish Bottle 3", rule: "Go out.", goal: 30, freq: [0] },
        { start: "20:30", end: "21:00", name: "🎒 Mon Prep", water: "Finish Bottle 4", rule: "Iron clothes.", goal: 30, freq: [0] },
        { start: "21:30", end: "--", name: "😴 Sleep (Sun)", water: "--", rule: "Ready for Week 2.", goal: 30, freq: [0] }
    ];

    const roadmapData = [
        {w:"W1", dsa:"Arrays & Hashing: Hash Maps, ASCII.", prob:"Contains Duplicate, Valid Anagram", dev:"HTML5 & Git: Semantic Tags.", proj:"Personal Profile Page (Static)"},
        {w:"W2", dsa:"Two Pointers & Stack: LIFO.", prob:"Valid Palindrome, Min Stack", dev:"CSS Mastery: Box Model, Units.", proj:"Style Profile Page"},
        {w:"W3", dsa:"Sliding Window: Fixed/Dynamic.", prob:"Best Time to Buy Stock", dev:"Responsive UI: Flexbox/Grid.", proj:"Photo Gallery Grid"},
        {w:"W4", dsa:"Binary Search: Divide & Conquer.", prob:"Binary Search, 2D Matrix", dev:"CSS Frameworks: Tailwind.", proj:"Rebuild Gallery w/ Tailwind"},
        {w:"W5", dsa:"Linked List: Pointers.", prob:"Reverse List, Merge Lists", dev:"JS Basics: Loops, Functions.", proj:"Counter App"},
        {w:"W6", dsa:"Trees: Recursion, Depth.", prob:"Invert Tree, Max Depth", dev:"DOM Manipulation: Events.", proj:"Interactive To-Do List"},
        {w:"W7", dsa:"Trees: DFS/BFS Traversal.", prob:"Level Order, Diameter", dev:"Advanced JS: Fetch API.", proj:"Weather App (Live Data)"},
        {w:"W8", dsa:"Tries & Heap: Priority Queue.", prob:"Kth Largest, Word Search", dev:"React Basics: JSX, Props.", proj:"Port To-Do List to React"},
        {w:"W9", dsa:"Backtracking: Permutations.", prob:"Subsets, Combination Sum", dev:"React Hooks: useState.", proj:"Digital Stopwatch"},
        {w:"W10", dsa:"Graphs: Basics, Matrix.", prob:"Number of Islands", dev:"Routing: React Router.", proj:"Multi-Page Portfolio"},
        {w:"W11", dsa:"Graphs: Advanced.", prob:"Course Schedule", dev:"Backend: Node/Express.", proj:"Simple Joke API"},
        {w:"W12", dsa:"1D DP: Climbing Stairs.", prob:"Climbing Stairs, Robber", dev:"Database: MongoDB.", proj:"Connect API to Mongo"},
        {w:"W13", dsa:"2D DP: Grid Paths.", prob:"Unique Paths, LCS", dev:"Auth: JWT, Hashing.", proj:"Add Login to Portfolio"},
        {w:"W14", dsa:"Greedy: Optimization.", prob:"Jump Game, Gas Station", dev:"Full Stack 1: Integration.", proj:"Blog App: Backend"},
        {w:"W15", dsa:"Intervals/Math.", prob:"Merge Intervals", dev:"Full Stack 2: Real-time.", proj:"Blog App: Frontend"},
        {w:"W16", dsa:"Bit Manip / Hard.", prob:"Single Number, Reverse Bits", dev:"Deployment: Vercel/AWS.", proj:"DEPLOY EVERYTHING LIVE"}
    ];

    const dailyTopics = {
        9: { dsa: "Big O Notation", dev: "HTML5 Semantics" },
        10: { dsa: "Array Memory", dev: "CSS Basics" },
        11: { dsa: "Linear Search", dev: "Box Model" },
        12: { dsa: "Insert/Delete", dev: "Flexbox Intro" },
        13: { dsa: "Min/Max Algo", dev: "LinkTree Clone" },
        14: { dsa: "Weekly Test", dev: "Portfolio Polish" }, 
        15: { dsa: "Maintenance", dev: "GitHub Check" } 
    };

    let appData = {}; let viewMode = 'regular'; let selectedHolidayDay = 1; let selectedSecretDay = 1; let currentEditTaskIndex = -1; let currentEditTaskType = 'regular';
    let currentRenderedDay = new Date().getDate(); 
    let quoteIndex = 0;
    let selectedDay = new Date().getDate();
    let lastActiveTaskName = null;

    const monthSelect = document.getElementById('monthSelect');
    const todayDate = new Date();
    monthSelect.value = `${todayDate.getFullYear()}-${String(todayDate.getMonth()+1).padStart(2,'0')}`;
    monthSelect.addEventListener('change', loadData);

    setInterval(() => {
        const now = new Date();
        document.getElementById('liveClock').innerText = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        if (now.getSeconds() === 0) {
            renderDailyRoutine(); 
            checkForTaskTransitions(); // Transition Alert check every minute
            if (now.getDate() !== currentRenderedDay) {
                currentRenderedDay = now.getDate();
                renderAll(); 
            }
        }
    }, 1000);

    function checkForTaskTransitions() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const dayOfWeek = now.getDay();
        const today = now.getDate();
        
        const isHolidayToday = appData.dayModes && appData.dayModes[today] === 'holiday';
        let activeTask = null;
        
        const parseTime = (timeStr) => {
            if(!timeStr || timeStr === "--") return null; 
            const pts = timeStr.split(':');
            return (parseInt(pts[0]) * 60) + parseInt(pts[1]);
        };
        
        if (isHolidayToday) {
            const list = appData.holidayDays[today] || [];
            for (let i = 0; i < list.length; i++) {
                const t = list[i];
                const sMins = parseTime(t.start);
                let eMins = parseTime(t.end);
                if (sMins !== null && eMins !== null) {
                    if (eMins < sMins) eMins += 24 * 60;
                    if (currentMinutes >= sMins && currentMinutes < eMins) {
                        activeTask = t.name;
                        break;
                    }
                }
            }
        } else {
            const list = appData.habitsRegular || [];
            for (let i = 0; i < list.length; i++) {
                const h = list[i];
                if (!h.freq || h.freq.includes(dayOfWeek)) {
                    const sMins = parseTime(h.start);
                    let eMins = parseTime(h.end);
                    if (sMins !== null && eMins !== null) {
                        if (eMins < sMins) eMins += 24 * 60;
                        if (currentMinutes >= sMins && currentMinutes < eMins) {
                            activeTask = h.name;
                            break;
                        }
                    }
                }
            }
        }
        
        if (activeTask !== lastActiveTaskName) {
            if (lastActiveTaskName !== null && activeTask !== null) {
                // Task has transitioned! Trigger alert
                showTaskTransitionAlert(lastActiveTaskName, activeTask);
            }
            lastActiveTaskName = activeTask;
        }
    }

    function showTaskTransitionAlert(oldTask, newTask) {
        // 1. Play subtle chime
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); 
            gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.15);
        } catch(e) {}
        
        // 2. Custom Glowing Toast
        const container = document.getElementById('toastContainer');
        if (container) {
            const toast = document.createElement('div');
            toast.className = 'toast-alert animate-toast';
            toast.innerHTML = `
                <div class="toast-header">⏰ Task Schedule Transition</div>
                <div class="toast-body">
                    <b>"${oldTask}"</b> has ended.<br>
                    <b>"${newTask}"</b> is starting now! <br>
                    <span style="color:#00e5ff; font-weight:bold; font-size:0.8rem; display:block; margin-top:4px;">Focus on the new task!</span>
                </div>
            `;
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('toast-fadeout');
                setTimeout(() => toast.remove(), 500);
            }, 8000);
        }
        
        // 3. Browser native alert fallback
        setTimeout(() => {
            alert(`⚠️ Task Alert:\n"${oldTask}" has ended.\n"${newTask}" is starting now!\n\nFocus on the new task.`);
        }, 100);
    }

    function init() { 
        if(localStorage.getItem('warrior_dark_mode') === 'true') {
            document.body.classList.add('dark-mode');
        }
        loadData(); 
        loadFromBackend();
        rotateDailyZen();
        setInterval(rotateQuote, 8000);
        
        const sleepDayEl = document.getElementById('sleepLogDay');
        if(sleepDayEl) sleepDayEl.value = new Date().getDate();

        // Run Initial AI Analysis Silently
        setTimeout(() => runAIAnalysis(true), 1000);
    }

    // --- AI ANALYSIS ENGINE ---
    function runAIAnalysis(silent = false) {
        if(!silent) document.getElementById('aiOutput').innerHTML = `<div style="color:#b2ebf2;">Scanning matrix algorithms & cross-referencing execution loops...</div>`;
        
        setTimeout(() => {
            let totalTasks = 0; 
            let totalMisses = 0; 
            let weakestTask = { name: "None", misses: -1, total: 0 };
            
            // Loop through the data to find execution bottlenecks
            appData.habitsRegular.forEach(h => {
                let taskMisses = 0;
                let taskTotal = 0;
                for(let d=1; d<=currentRenderedDay; d++) {
                    const wd = getWeekdayIndex(d);
                    if(appData.dayModes[d] === 'regular' && wd !== -1 && (!h.freq || h.freq.includes(wd))) {
                        totalTasks++;
                        taskTotal++;
                        if(h.days[d] === 2 || h.days[d] === 0) { 
                            taskMisses++; 
                            totalMisses++; 
                        }
                    }
                }
                if(taskMisses > weakestTask.misses && taskTotal > 0) { 
                    weakestTask.name = h.name; 
                    weakestTask.misses = taskMisses;
                    weakestTask.total = taskTotal;
                }
            });

            const completionRate = totalTasks > 0 ? Math.max(0, Math.round(100 - ((totalMisses / totalTasks) * 100))) : 100;
            let advice = "";

            if(completionRate > 85) advice = `High execution probability detected. System optimization stable. Keep scaling LeetCode difficulty.`;
            else if (completionRate > 50) advice = `Momentum stalling. <span class="ai-warning">${weakestTask.name}</span> is failing repeatedly (${weakestTask.misses}/${weakestTask.total} missed). Recommendation: Reduce scope or shift time block for this task.`;
            else advice = `System critical. Matrix collapse imminent. Reset expectations and focus solely on minimum viable habits today. Pay off pending penalties.`;

            document.getElementById('aiOutput').innerHTML = `
                <div class="ai-stat">
                    <h4>Execution Rate</h4>
                    <div class="ai-value ${completionRate >= 70 ? 'ai-success' : 'ai-warning'}">${completionRate}%</div>
                </div>
                <div class="ai-stat">
                    <h4>Highest Friction Point</h4>
                    <div class="ai-value" style="color:#ffb74d;">${weakestTask.name}</div>
                </div>
                <div class="ai-stat" style="flex: 100%;">
                    <h4>AI Tactical Directive</h4>
                    <div class="ai-value" style="font-size:1rem; font-weight:normal; line-height:1.4;">${advice}</div>
                </div>
            `;
        }, silent ? 0 : 800);
    }
    
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('warrior_dark_mode', document.body.classList.contains('dark-mode'));
        renderMasteryCards();
    }
    
    function toggleSideMenu() { document.getElementById('sideMenu').classList.toggle('open'); document.getElementById('sideOverlay').classList.toggle('show'); }
    function getKey() { return `tracker_pro_v48_${monthSelect.value}`; }

    function loadData() {
        const stored = localStorage.getItem(getKey());
        appData = stored ? JSON.parse(stored) : getFreshData();
        
        if(appData.habitsRegular) {
            let needsMigration = false;
            appData.habitsRegular = appData.habitsRegular.map((h, i) => {
                if(!h.freq) { h.freq = [1,2,3,4,5]; needsMigration = true; } 
                let syncData = masterRoutineData.find(m => m.name === h.name);
                if(syncData && !stored) {
                    return { ...h, start: syncData.start, end: syncData.end, water: syncData.water, rule: syncData.rule, freq: syncData.freq };
                }
                return h;
            });
            
            if (needsMigration && appData.habitsRegular.length < 25) {
                 const satSunTasks = masterRoutineData.filter(m => m.freq.includes(0) || m.freq.includes(6));
                 satSunTasks.forEach(st => {
                     appData.habitsRegular.push({
                         name: st.name, start: st.start, end: st.end, water: st.water, rule: st.rule, goal: st.goal, freq: st.freq, days: new Array(32).fill(0)
                     });
                 });
                 localStorage.setItem(getKey(), JSON.stringify(appData));
            }
        }
        
        if(!appData.roadmapProgress) appData.roadmapProgress = {}; 
        if(!appData.roadmapText) appData.roadmapText = {}; 
        if(!appData.roadmapMeta) appData.roadmapMeta = {};
        if(!appData.holidayItinerary) appData.holidayItinerary = {}; 
        if(!appData.secretJournal) appData.secretJournal = {}; 
        if(appData.warriorExp === undefined) appData.warriorExp = 0; 
        if(!appData.penalties) appData.penalties = []; 
        if(!appData.sleep) appData.sleep = new Array(32).fill(0);
        if(!appData.sleepMeta) appData.sleepMeta = {};
        if(!appData.logs) appData.logs = {};
        if(!appData.habitsHoliday || appData.habitsHoliday.length < 8) {
            appData.habitsHoliday = masterHolidayRoutineData.map(h => ({
                name: h.name, start: h.start, end: h.end, water: h.water, rule: h.rule, goal: h.goal, freq: h.freq, days: new Array(32).fill(0)
            }));
            localStorage.setItem(getKey(), JSON.stringify(appData));
        }
        if(!appData.deepNotes) appData.deepNotes = [];
        if(!appData.deepNotesFolders) appData.deepNotesFolders = ["All Notes", "DSA Notes", "Journal", "Ideas"];
        if(!appData.missedTaskReasons) appData.missedTaskReasons = {};
        if(!appData.holidayDays) appData.holidayDays = {};
        for(let d=1; d<=32; d++) {
            if(!appData.holidayDays[d]) appData.holidayDays[d] = [];
        }
        
        // Auto-migrate user custom schedule to Day 2 as template if empty
        if(appData.holidayDays[2].length === 0) {
            appData.holidayDays[2] = userSampleHolidaySchedule.map(h => ({
                name: h.name, start: h.start, end: h.end, rule: h.rule || "--", status: 0
            }));
        }

        const monthParts = monthSelect.value.split('-');
        const daysInMonth = new Date(parseInt(monthParts[0]), parseInt(monthParts[1]), 0).getDate();
        selectedHolidayDay = Math.min(Math.max(1, selectedHolidayDay || 1), daysInMonth);
        
        renderLevelBadge();
        renderAll();
    }

    function getFreshData() {
        return {
            warriorExp: 0, penalties: [],
            habitsRegular: masterRoutineData.map(h => ({ 
                name: h.name, start: h.start, end: h.end, water: h.water, rule: h.rule, goal: h.goal, freq: h.freq, days: new Array(32).fill(0) 
            })),
            habitsHoliday: masterHolidayRoutineData.map(h => ({ 
                name: h.name, start: h.start, end: h.end, water: h.water, rule: h.rule, goal: h.goal, freq: h.freq, days: new Array(32).fill(0) 
            })),
            dayModes: new Array(32).fill('regular'),
            holidayItinerary: {}, secretJournal: {}, roadmapProgress: {}, roadmapText: {}, roadmapMeta: {}, 
            sleep: new Array(32).fill(0), sleepMeta: {}, logs: {}, missedTaskReasons: {},
            deepNotes: [], deepNotesFolders: ["All Notes", "DSA Notes", "Journal", "Ideas"],
            holidayDays: (() => { const map = {}; for(let d=1; d<=32; d++) map[d] = []; return map; })()
        };
    }
    
    function loadMasterRoutine() {
        if(confirm("⚠ WARNING: This will reset your habit list to the Unified Master Routine (Includes Sat/Sun). Continue?")) {
            appData.habitsRegular = masterRoutineData.map(h => ({ 
                name: h.name, start: h.start, end: h.end, water: h.water, rule: h.rule, goal: h.goal, freq: h.freq, days: new Array(32).fill(0) 
            }));
            saveData();
            renderRegularTable();
        }
    }

    const userSampleHolidaySchedule = [
        { start: "07:35", end: "09:35", name: "🧠 DSA", rule: "Solve LeetCode DSA practice", status: 0 },
        { start: "09:35", end: "10:15", name: "☕ BREAK", rule: "Rest & tea break", status: 0 },
        { start: "10:16", end: "11:27", name: "🏫 Go to Pawan room to study DM", rule: "Discrete Mathematics concepts prep", status: 0 },
        { start: "11:27", end: "12:27", name: "🍕 BREAK 1HR", rule: "Lunch / Refresh break", status: 0 },
        { start: "12:30", end: "14:00", name: "💻 Web development", rule: "React / Frontend styling coding", status: 0 },
        { start: "14:00", end: "16:00", name: "🛌 Sleep", rule: "Muscle recovery & sleep nap", status: 0 },
        { start: "16:00", end: "16:30", name: "🚿 FRESH", rule: "Face wash & cold shower splash", status: 0 },
        { start: "16:30", end: "17:30", name: "🔄 REVISION todays task", rule: "Double check all logs and summary", status: 0 }
    ];

    function loadMasterHolidayRoutine() {
        if(confirm(`⚠ WARNING: This will reset Day ${selectedDay}'s Holiday Itinerary to the Master Holiday Routine. Continue?`)) {
            appData.holidayDays[selectedDay] = userSampleHolidaySchedule.map(h => ({
                name: h.name, start: h.start, end: h.end, rule: h.rule, status: 0
            }));
            saveData();
            renderHolidayItinerary();
        }
    }

    function saveData() { 
        localStorage.setItem(getKey(), JSON.stringify(appData)); 
        updateGraph(); 
        renderSleepGraph(); 
        renderTimingTable();
        renderMasteryCards(); 
        renderOverallWave(); 
        syncWithBackend();
    }

    function toggleWidget(contentId, headerElement) {
        const content = document.getElementById(contentId);
        if (!content) return;
        const arrow = headerElement.querySelector('.collapse-arrow');
        if (content.style.display === 'none') {
            content.style.display = '';
            if (arrow) arrow.innerText = '▼';
        } else {
            content.style.display = 'none';
            if (arrow) arrow.innerText = '▶';
        }
    }

    function renderLevelBadge() {
        const exp = appData.warriorExp || 0;
        const level = Math.floor(Math.sqrt(exp / 25)) + 1; 
        document.getElementById('warriorBadge').innerHTML = `Lvl ${level} 🛡️ <span class="exp-text">${exp} XP</span>`;
        renderLevelProgress();
    }

    function renderLevelProgress() {
        const exp = appData.warriorExp || 0;
        const level = Math.floor(Math.sqrt(exp / 25)) + 1;
        const expMin = 25 * Math.pow(level - 1, 2);
        const expMax = 25 * Math.pow(level, 2);
        const levelRange = expMax - expMin;
        const currentExpInLevel = exp - expMin;
        const pct = levelRange ? Math.min(100, Math.max(0, Math.round((currentExpInLevel / levelRange) * 100))) : 0;
        
        const bar = document.getElementById('levelProgressBar');
        if (bar) {
            bar.style.width = `${pct}%`;
        }
    }

    function renderSleepStats() {
        let loggedDays = 0;
        let totalSleep = 0;
        let perfectDays = 0;
        for (let d = 1; d <= 31; d++) {
            const val = appData.sleep[d] || 0;
            if (val > 0) {
                loggedDays++;
                totalSleep += val;
                if (val >= 7 && val <= 9) {
                    perfectDays++;
                }
            }
        }
        const avgSleep = loggedDays ? (totalSleep / loggedDays).toFixed(1) : "0.0";
        const consistency = loggedDays ? Math.round((perfectDays / loggedDays) * 100) : 0;
        
        const avgEl = document.getElementById('sleepAvgDuration');
        const consistencyEl = document.getElementById('sleepConsistencyScore');
        const perfectEl = document.getElementById('sleepPerfectDays');
        
        if (avgEl) avgEl.innerText = `${avgSleep} hrs`;
        if (consistencyEl) consistencyEl.innerText = `${consistency}%`;
        if (perfectEl) perfectEl.innerText = `${perfectDays} days`;
    }

    function rotateQuote() {
        const textEl = document.getElementById('quoteText');
        const authorEl = document.getElementById('quoteAuthor');
        if(!textEl || !authorEl) return;
        textEl.style.opacity = 0;
        authorEl.style.opacity = 0;
        setTimeout(() => {
            quoteIndex = (quoteIndex + 1) % warriorQuotes.length;
            textEl.innerText = `"${warriorQuotes[quoteIndex].t}"`;
            authorEl.innerText = `- ${warriorQuotes[quoteIndex].a} -`;
            textEl.style.opacity = 1;
            authorEl.style.opacity = 1;
        }, 600);
    }

    function rotateDailyZen() {
        const randomShloka = gitaDashboardData[Math.floor(Math.random() * gitaDashboardData.length)];
        const sanskritEl = document.getElementById('zenSanskrit');
        const meaningEl = document.getElementById('zenMeaning');
        const marathiEl = document.getElementById('zenMarathi');
        
        if (sanskritEl && meaningEl && marathiEl) {
            sanskritEl.innerHTML = randomShloka.sanskrit;
            meaningEl.innerText = `"${randomShloka.meaning}"`;
            marathiEl.innerText = `"${randomShloka.marathi}"`;
        }
    }

    function formatTime(timeStr) {
        if (!timeStr || timeStr === "--" || timeStr === "Not Logged") return "Not Logged";
        if (timeStr.includes("AM") || timeStr.includes("PM")) return timeStr;
        const [hours, minutes] = timeStr.split(':').map(Number);
        if (isNaN(hours)) return timeStr; 
        const suffix = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12; 
        const minutesStr = minutes.toString().padStart(2, '0');
        return `${String(hours12).padStart(2, '0')}:${minutesStr} ${suffix}`;
    }

    function getWeekdayIndex(day) {
        const parts = monthSelect.value.split('-'); 
        const date = new Date(parseInt(parts[0]), parseInt(parts[1])-1, day);
        if (date.getMonth() !== parseInt(parts[1])-1) return -1; 
        return date.getDay(); 
    }

    function showTaskDetails(index, type = 'regular') {
        const list = type === 'holiday' ? appData.habitsHoliday : appData.habitsRegular;
        const task = list[index];
        if (task) {
            currentEditTaskIndex = index;
            currentEditTaskType = type;
            document.getElementById('tmTitle').innerText = task.name;
            document.getElementById('tmTime').innerText = `${formatTime(task.start)} - ${formatTime(task.end)}`;
            document.getElementById('tmWater').innerText = task.water || "No specific strategy";
            document.getElementById('tmRule').innerText = task.rule || "Just do it.";
            
            document.getElementById('tmViewMode').style.display = 'block';
            document.getElementById('tmEditMode').style.display = 'none';
            document.getElementById('taskDetailModal').style.display = 'flex';
        }
    }

    function toggleTaskEditMode() {
        const list = currentEditTaskType === 'holiday' ? appData.habitsHoliday : appData.habitsRegular;
        const task = list[currentEditTaskIndex];
        
        document.getElementById('etName').value = task.name;
        document.getElementById('etStart').value = task.start !== "--" ? task.start : "";
        document.getElementById('etEnd').value = task.end !== "--" ? task.end : "";
        document.getElementById('etWater').value = task.water !== "--" ? task.water : "";
        document.getElementById('etRule').value = task.rule || "";

        const freq = task.freq || [0,1,2,3,4,5,6];
        [0,1,2,3,4,5,6].forEach(d => {
            document.getElementById(`f${d}`).checked = freq.includes(d);
        });

        document.getElementById('tmViewMode').style.display = 'none';
        document.getElementById('tmEditMode').style.display = 'block';
    }

    function saveTaskEdit() {
        if (currentEditTaskIndex < 0) return;
        const startVal = document.getElementById('etStart').value || "--";
        const endVal = document.getElementById('etEnd').value || "--";
        
        const list = currentEditTaskType === 'holiday' ? appData.habitsHoliday : appData.habitsRegular;
        
        list[currentEditTaskIndex].name = document.getElementById('etName').value;
        list[currentEditTaskIndex].start = startVal;
        list[currentEditTaskIndex].end = endVal;
        list[currentEditTaskIndex].water = document.getElementById('etWater').value || "--";
        list[currentEditTaskIndex].rule = document.getElementById('etRule').value;
        
        const freq = [];
        [0,1,2,3,4,5,6].forEach(d => {
            if(document.getElementById(`f${d}`).checked) freq.push(d);
        });
        if(freq.length === 0) freq.push(1); 
        list[currentEditTaskIndex].freq = freq;
        
        saveData();
        if (currentEditTaskType === 'holiday') renderHolidayItinerary();
        else renderRegularTable();
        
        renderDailyRoutine(); 
        closeTaskModal();
    }
    
    function deleteCurrentTask() {
        if(confirm("Are you sure you want to permanently delete this task?")) {
            const list = currentEditTaskType === 'holiday' ? appData.habitsHoliday : appData.habitsRegular;
            list.splice(currentEditTaskIndex, 1);
            saveData(); 
            if (currentEditTaskType === 'holiday') renderHolidayItinerary();
            else renderRegularTable();
            
            renderDailyRoutine(); closeTaskModal();
        }
    }

    function closeTaskModal() {
        document.getElementById('taskDetailModal').style.display = 'none';
        currentEditTaskIndex = -1;
    }

    function openRoadmap() {
        document.getElementById('roadmapModal').style.display = 'block';
        const tbody = document.getElementById('roadmapBody');
        tbody.innerHTML = "";
        
        const formatDate = (date) => {
            const d = new Date(date);
            let month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        };

        const baseDate = new Date(2026, 1, 9);
        const today = new Date();
        const todayStr = formatDate(today);

        let totalWeeks = roadmapData.length;
        let completedWeeks = 0;

        roadmapData.forEach((r, idx) => {
            const isChecked = appData.roadmapProgress[idx] ? 'checked' : '';
            if(appData.roadmapProgress[idx]) completedWeeks++;

            const custom = appData.roadmapText[idx] || {};
            const meta = appData.roadmapMeta[idx] || {};

            const dsaText = custom.dsa || r.dsa;
            const probText = custom.prob || r.prob;
            const devText = custom.dev || r.dev;
            const projText = custom.proj || r.proj;
            
            const weekStart = new Date(baseDate);
            weekStart.setDate(baseDate.getDate() + (idx * 7));
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);

            const startDate = meta.start || formatDate(weekStart);
            const endDate = meta.end || formatDate(weekEnd);
            const tagVal = meta.tag || "study";
            const tagClass = `tag-${tagVal}`;

            let rowClass = "";
            if (todayStr >= startDate && todayStr <= endDate) rowClass = "current-week-row";

            const row = document.createElement('tr');
            row.className = rowClass;
            row.innerHTML = `
                <td><span class="rm-week">${r.w}</span></td>
                <td>
                    <select class="rm-select ${tagClass}" onchange="saveRoadmapMeta(${idx}, 'tag', this)">
                        <option value="study" ${tagVal==='study'?'selected':''}>Study</option>
                        <option value="personal" ${tagVal==='personal'?'selected':''}>Personal</option>
                        <option value="college" ${tagVal==='college'?'selected':''}>College</option>
                        <option value="work" ${tagVal==='work'?'selected':''}>Work</option>
                    </select>
                </td>
                <td><input type="date" class="rm-date" value="${startDate}" onchange="saveRoadmapMeta(${idx}, 'start', this)"></td>
                <td><input type="date" class="rm-date" value="${endDate}" onchange="saveRoadmapMeta(${idx}, 'end', this)"></td>
                <td contenteditable="true" class="editable-cell" onblur="saveRoadmapText(${idx}, 'dsa', this)"><b>${dsaText}</b></td>
                <td contenteditable="true" class="editable-cell" onblur="saveRoadmapText(${idx}, 'prob', this)"><span style="color:#d84315;">${probText}</span></td>
                <td contenteditable="true" class="editable-cell" onblur="saveRoadmapText(${idx}, 'dev', this)"><b>${devText}</b></td>
                <td contenteditable="true" class="editable-cell" onblur="saveRoadmapText(${idx}, 'proj', this)"><span style="color:#0277bd;">${projText}</span></td>
                <td style="text-align:center;"><input type="checkbox" class="rm-check" ${isChecked} onchange="toggleRoadmap(${idx})"></td>
            `;
            tbody.appendChild(row);
        });

        const pct = Math.round((completedWeeks / totalWeeks) * 100);
        document.getElementById('rmProgressBar').style.width = `${pct}%`;
        document.getElementById('rmProgressText').innerText = `${pct}% Completed`;
    }

    function saveRoadmapText(idx, field, element) {
        if(!appData.roadmapText) appData.roadmapText = {};
        if(!appData.roadmapText[idx]) appData.roadmapText[idx] = {};
        appData.roadmapText[idx][field] = element.innerText;
        saveData();
    }
    
    function saveRoadmapMeta(idx, field, element) {
        if(!appData.roadmapMeta) appData.roadmapMeta = {};
        if(!appData.roadmapMeta[idx]) appData.roadmapMeta[idx] = {};
        appData.roadmapMeta[idx][field] = element.value;
        saveData();
        if(field === 'tag') openRoadmap();
    }
    
    function closeRoadmap() { document.getElementById('roadmapModal').style.display = 'none'; }
    
    function toggleRoadmap(idx) {
        appData.roadmapProgress[idx] = !appData.roadmapProgress[idx];
        saveData(); openRoadmap();
    }

    function downloadBackup() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "warrior_backup_" + monthSelect.value + ".json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    function restoreBackup(input) {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                if (confirm("This will OVERWRITE your current data with the backup. Are you sure?")) {
                    appData = importedData;
                    saveData(); renderAll();
                    alert("Backup restored successfully!");
                }
            } catch (err) {
                alert("Invalid Backup File");
            }
        };
        reader.readAsText(file);
    }

    function exportToExcel() {
        const wb = XLSX.utils.book_new();
        const wsHabits = XLSX.utils.aoa_to_sheet([]);
        const header = ["Start", "End", "Activity", "Goal", ...Array.from({length:31},(_,i)=>i+1), "Total %", "Streak"];
        XLSX.utils.sheet_add_aoa(wsHabits, [header], {origin: "A1"});

        const styleGreen = { fill: { fgColor: { rgb: "66BB6A" } }, font: { color: { rgb: "FFFFFF" } } };
        const styleRed = { fill: { fgColor: { rgb: "EF5350" } }, font: { color: { rgb: "FFFFFF" } } };
        const styleGrey = { fill: { fgColor: { rgb: "E0E0E0" } } }; 
        const styleHeader = { fill: { fgColor: { rgb: "DCEDC8" } }, font: { bold: true } };

        for(let c=0; c<=35; c++) {
            const cellRef = XLSX.utils.encode_cell({r:0, c:c});
            if(wsHabits[cellRef]) wsHabits[cellRef].s = styleHeader;
        }

        let rowIndex = 1;
        appData.habitsRegular.forEach(h => {
            const sTime = formatTime(h.start || "");
            const eTime = formatTime(h.end || "");
            const row = [sTime, eTime, h.name, h.goal];
            let completed = 0, totalDays = 0, cs = 0;
            
            for(let d=1; d<=31; d++) {
                const wd = getWeekdayIndex(d);
                if(wd !== -1 && appData.dayModes[d] === 'regular' && (!h.freq || h.freq.includes(wd))) {
                    totalDays++; 
                    if(h.days[d] === 1) completed++; 
                }
            }
            
            let chainEnd = -1;
            for(let d=31; d>=1; d--) { 
                const wd = getWeekdayIndex(d);
                if(wd !== -1 && appData.dayModes[d]==='regular' && (!h.freq || h.freq.includes(wd))) { 
                    if(h.days[d]===1) { chainEnd = d; break; } 
                } 
            }
            if(chainEnd !== -1) {
                for(let d=chainEnd; d>=1; d--) { 
                    const wd = getWeekdayIndex(d);
                    if(wd !== -1 && appData.dayModes[d]==='regular' && (!h.freq || h.freq.includes(wd))) { 
                        if(h.days[d]===1) cs++; else break; 
                    } 
                }
            }

            for(let d=1; d<=31; d++) {
                const wd = getWeekdayIndex(d);
                const applies = !h.freq || h.freq.includes(wd);
                if(appData.dayModes[d] === 'holiday') row.push("HOL");
                else if (!applies && wd !== -1) row.push("-");
                else if(h.days[d]===1) row.push("DONE");
                else if(h.days[d]===2) row.push("MISS");
                else row.push("");
            }
            const pct = totalDays ? Math.round((completed/totalDays)*100) : 0;
            row.push(pct + "%", cs);
            
            XLSX.utils.sheet_add_aoa(wsHabits, [row], {origin: -1});

            for(let c=4; c<=34; c++) {
                const cellRef = XLSX.utils.encode_cell({r:rowIndex, c:c});
                const cellVal = row[c];
                if(cellVal === "DONE") wsHabits[cellRef].s = styleGreen;
                if(cellVal === "MISS") wsHabits[cellRef].s = styleRed;
                if(cellVal === "HOL" || cellVal === "-") wsHabits[cellRef].s = styleGrey;
            }
            rowIndex++;
        });
        XLSX.utils.book_append_sheet(wb, wsHabits, "Master Routine");
        XLSX.writeFile(wb, `Warrior_Protocol_${monthSelect.value}.xlsx`);
    }

    function getWeekday(day) {
        const parts = monthSelect.value.split('-'); 
        const date = new Date(parseInt(parts[0]), parseInt(parts[1])-1, day);
        if (date.getMonth() !== parseInt(parts[1])-1) return ""; 
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    }

    function renderAll() {
        renderStrip(); renderHeaders(); renderRegularTable(); renderHolidayItinerary();  
        renderSleepGraph(); renderTimingTable(); renderMasteryCards(); renderLogs(); renderPenalties(); updateGraph(); renderOverallWave();
        renderDailyRoutine(); 
        renderLevelProgress();
        renderSleepStats();
    }

    function renderDailyRoutine() {
        const container = document.getElementById('dailyScheduleList');
        container.innerHTML = '';
        
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const dayOfWeek = now.getDay(); 
        
        const isHolidayToday = appData.dayModes && appData.dayModes[now.getDate()] === 'holiday';
        let routineToRender = [];
        
        if (isHolidayToday) {
            const list = appData.holidayDays[now.getDate()] || [];
            routineToRender = list.map((task, originalIndex) => ({
                hRef: task,
                originalIndex: originalIndex,
                t: `${formatTime(task.start)} - ${formatTime(task.end)}`,
                a: task.name,
                w: "--",
                d: task.rule,
                rawStart: task.start,
                rawEnd: task.end,
                status: task.status
            }));
        } else {
            routineToRender = appData.habitsRegular.map((h, originalIndex) => ({
                hRef: h,
                originalIndex: originalIndex,
                t: `${formatTime(h.start)} - ${formatTime(h.end)}`,
                a: h.name,
                w: h.water,
                d: h.rule,
                rawStart: h.start,
                rawEnd: h.end,
                status: h.days ? h.days[now.getDate()] : 0
            })).filter(slot => !slot.hRef.freq || slot.hRef.freq.includes(dayOfWeek));
        }
        
        routineToRender.sort((a, b) => {
            const parseTime = (timeStr) => {
                if(!timeStr || timeStr === "--") return 9999; 
                const pts = timeStr.split(':');
                return (parseInt(pts[0]) * 60) + parseInt(pts[1]);
            };
            return parseTime(a.rawStart) - parseTime(b.rawStart);
        });
        
        let foundLive = false;

        routineToRender.forEach((slot, index) => {
            const div = document.createElement('div');
            let isPast = false, isLive = false, isFuture = true;
            let sStr = slot.rawStart || "", eStr = slot.rawEnd || "";

            if (!sStr) { try { const p = slot.t.split('-'); sStr = p[0].trim(); eStr = p[1].trim(); } catch(e){} }

            if (sStr && eStr && sStr !== "--") {
                try {
                     const startParts = sStr.split(':'); const endParts = eStr.split(':');
                     const sMins = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
                     let eMins = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);
                     if (eMins < sMins) eMins += 24 * 60; 
                     
                     if (currentMinutes >= sMins && currentMinutes < eMins) {
                         isLive = true; isFuture = false; foundLive = true;
                     } else if (currentMinutes >= eMins) {
                         isPast = true; isFuture = false;
                     }
                } catch(e) {}
            }

            if (sStr === "--" && !foundLive) isPast = true;
            div.className = `timeline-item ${isLive ? 'live-active' : (isPast ? 'past-item' : 'future-item')}`;
            
            let actionText = slot.a;
            if (actionText.includes("DSA") && dailyTopics[now.getDate()]) actionText += `: ${dailyTopics[now.getDate()].dsa}`;
            if (actionText.includes("Dev") && dailyTopics[now.getDate()]) actionText += `: ${dailyTopics[now.getDate()].dev}`;

            let liveBadge = isLive ? `<span style="color:#d84315; font-size:0.75rem; font-weight:bold; letter-spacing:1px; animation:pulse-ring 1.5s infinite; margin-right:8px;">● LIVE</span>` : '';

            const statusVal = isHolidayToday ? slot.hRef.status : (slot.hRef.days ? slot.hRef.days[now.getDate()] : 0);
            let statusActionHtml = '';
            if (statusVal === 1) {
                statusActionHtml = `<span class="tl-status-badge tl-status-done" title="Completed Today">✔ DONE</span>`;
            } else if (statusVal === 2) {
                statusActionHtml = `<span class="tl-status-badge tl-status-miss" title="Missed Today">✕ MISSED</span>`;
            } else {
                statusActionHtml = `
                    <div class="tl-actions">
                        <button class="tl-action-btn tl-action-done" onclick="event.stopPropagation(); logTimelineTask(${slot.originalIndex}, 1)" title="Mark Done">✔</button>
                        <button class="tl-action-btn tl-action-miss" onclick="event.stopPropagation(); logTimelineTask(${slot.originalIndex}, 2)" title="Mark Missed">✕</button>
                    </div>
                `;
            }

            div.innerHTML = `
                <div class="tl-content" style="position:relative;">
                    <div class="tl-time">🕒 ${slot.t}</div>
                    <div style="position:absolute; top:12px; right:15px; display:flex; align-items:center;">
                        ${liveBadge}
                        ${statusActionHtml}
                    </div>
                    <h4 class="tl-title" style="display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin: 0 0 10px 0;">
                        ${getActivityBadge(slot.a)}
                        <span>${actionText}</span>
                    </h4>
                    <div class="tl-details">
                        ${slot.d && slot.d !== "--" ? `<span title="Specific Focus">⚡ ${slot.d}</span>` : ''}
                        ${slot.w && slot.w !== "--" ? `<span title="Hydration">💧 ${slot.w}</span>` : ''}
                    </div>
                </div>
            `;
            container.appendChild(div);

            if(isLive) {
                setTimeout(() => { 
                    const containerHeight = container.clientHeight;
                    const elemHeight = div.clientHeight;
                    const targetScroll = div.offsetTop - (containerHeight / 2) + (elemHeight / 2);
                    container.scrollTo({ top: targetScroll, behavior: 'smooth' }); 
                }, 800);
            }
        });

        if (!foundLive) document.getElementById('tlStatusText').innerText = "All tasks complete or unassigned time.";
        else document.getElementById('tlStatusText').innerText = "Live tracking active";
    }

    window.logTimelineTask = function(originalIndex, status) {
        const now = new Date();
        const today = now.getDate();
        const isHolidayToday = appData.dayModes && appData.dayModes[today] === 'holiday';
        
        if (isHolidayToday) {
            const list = appData.holidayDays[today] || [];
            const task = list[originalIndex];
            if (!task) return;
            
            task.status = status;
            if (status === 1) {
                addExp(5);
                removeMissLog(task.name, today);
            } else if (status === 2) {
                addPenalty(today, task.name);
                logMissReason(`❌ [${task.name}] Missed on Day ${today}: Quick log timeline`);
            }
        } else {
            const list = appData.habitsRegular;
            const habit = list[originalIndex];
            if (!habit) return;
            
            if (!habit.days) habit.days = new Array(32).fill(0);
            habit.days[today] = status;
            
            const hName = habit.name;
            if (status === 1) {
                addExp(5);
                removeMissLog(hName, today);
            } else if (status === 2) {
                addPenalty(today, hName);
                openMissReasonModal(originalIndex, today, 'regular');
            }
        }
        
        saveData();
        renderAll();
        runAIAnalysis(true);
    };

    function renderOverallWave() {
        let totalPossible = 0, totalDone = 0;
        appData.habitsRegular.forEach(h => {
            for(let d=1; d<=31; d++) {
                const wd = getWeekdayIndex(d);
                if(appData.dayModes[d] === 'regular' && wd !== -1) {
                    if(!h.freq || h.freq.includes(wd)) {
                        totalPossible++;
                        if(h.days[d] === 1) totalDone++;
                    }
                }
            }
        });
        const pct = totalPossible ? Math.round((totalDone / totalPossible) * 100) : 0;
        document.getElementById('waveFill').style.height = `${pct}%`;
        document.getElementById('waveText').innerText = `${pct}%`;
        document.getElementById('statRemaining').innerText = totalPossible - totalDone;

        let f7Total=0, f7Done=0, l7Total=0, l7Done=0; const today=new Date().getDate();
        appData.habitsRegular.forEach(h => {
            for(let i=1; i<=7; i++) { 
                const wd = getWeekdayIndex(i);
                if(appData.dayModes[i]==='regular' && wd !== -1 && (!h.freq || h.freq.includes(wd))){ 
                    f7Total++; if(h.days[i]===1) f7Done++; 
                } 
            }
            for(let i=Math.max(1, today-6); i<=today; i++) { 
                const wd = getWeekdayIndex(i);
                if(appData.dayModes[i]==='regular' && wd !== -1 && (!h.freq || h.freq.includes(wd))){ 
                    l7Total++; if(h.days[i]===1) l7Done++; 
                } 
            }
        });
        const f7Pct = f7Total ? (f7Done/f7Total)*100 : 0;
        const l7Pct = l7Total ? (l7Done/l7Total)*100 : 0;
        const diff = Math.round(l7Pct - f7Pct);
        const impElem = document.getElementById('statImprovement');
        if(diff > 0) impElem.innerHTML = `+${diff}% <span class="imp-up">📈</span>`;
        else if(diff < 0) impElem.innerHTML = `${diff}% <span class="imp-down">📉</span>`;
        else impElem.innerHTML = `No Change`;
    }

    function calculateSleepPreview() {
        const bedStr = document.getElementById('sleepBedTime').value;
        const wakeStr = document.getElementById('sleepWakeTime').value;
        if(bedStr && wakeStr) {
            const [bH, bM] = bedStr.split(':').map(Number);
            const [wH, wM] = wakeStr.split(':').map(Number);
            let bMins = bH * 60 + bM;
            let wMins = wH * 60 + wM;
            if (bMins > wMins) wMins += 24 * 60; // Crossed midnight
            
            const totalMins = wMins - bMins;
            const hrs = Math.floor(totalMins / 60);
            const mins = totalMins % 60;
            document.getElementById('sleepResultText').innerText = `${hrs}h ${mins}m`;
        }
    }

    function logSleep() {
        const dayStr = document.getElementById('sleepLogDay').value;
        const bedStr = document.getElementById('sleepBedTime').value;
        const wakeStr = document.getElementById('sleepWakeTime').value;

        if(!bedStr || !wakeStr || !dayStr) return alert("Please select Day, Bed Time, and Wake Time to log sleep.");
        
        const day = parseInt(dayStr);
        if(day < 1 || day > 31) return alert("Invalid Day.");

        const [bH, bM] = bedStr.split(':').map(Number);
        const [wH, wM] = wakeStr.split(':').map(Number);

        let bMins = bH * 60 + bM;
        let wMins = wH * 60 + wM;
        if (bMins > wMins) wMins += 24 * 60;

        const totalMins = wMins - bMins;
        const totalHours = totalMins / 60;

        appData.sleep[day] = totalHours;
        appData.sleepMeta[day] = { bed: bedStr, wake: wakeStr }; 
        
        const hrs = Math.floor(totalHours);
        const mins = totalMins % 60;
        document.getElementById('sleepResultText').innerText = `${hrs}h ${mins}m`;

        saveData();
    }

    function handleMatrixClick(day, hrs) {
        if (appData.sleep[day] >= Math.floor(hrs) && appData.sleep[day] < Math.floor(hrs)+1 && appData.sleep[day] !== 9) {
            appData.sleep[day] = 0; appData.sleepMeta[day] = { bed: 'Not Logged', wake: 'Not Logged' };
            document.getElementById('sleepResultText').innerText = `--`;
        } else if (hrs === 9 && appData.sleep[day] >= 9) {
             appData.sleep[day] = 0; appData.sleepMeta[day] = { bed: 'Not Logged', wake: 'Not Logged' };
             document.getElementById('sleepResultText').innerText = `--`;
        } else {
            appData.sleep[day] = hrs; appData.sleepMeta[day] = { bed: 'Not Logged', wake: 'Not Logged' };
            document.getElementById('sleepResultText').innerText = `${hrs}h 0m`;
        }
        document.getElementById('sleepLogDay').value = day;
        document.getElementById('sleepBedTime').value = '';
        document.getElementById('sleepWakeTime').value = '';
        saveData();
    }

    function renderSleepGraph() {
        const container = document.getElementById('sleepMatrixContainer');
        container.innerHTML = '';
        let tableHTML = `<table class="sleep-grid"><tr><th class="row-label">😴 Sleep Cycle</th>`;
        for(let d=1; d<=31; d++) tableHTML += `<th>${d}</th>`;
        tableHTML += `</tr>`;

        const rowsConfig = [
            { label: '9+ hrs', min: 9, max: 99, clickVal: 9 },
            { label: '8 hrs', min: 8, max: 8.99, clickVal: 8 },
            { label: '7 hrs', min: 7, max: 7.99, clickVal: 7 },
            { label: '6 hrs', min: 6, max: 6.99, clickVal: 6 },
            { label: '5 hrs', min: 5, max: 5.99, clickVal: 5 },
            { label: '4- hrs', min: 0.1, max: 4.99, clickVal: 4 } 
        ];

        rowsConfig.forEach(r => {
            tableHTML += `<tr><td class="row-label">${r.label}</td>`;
            for(let d=1; d<=31; d++) {
                let val = appData.sleep[d] || 0;
                let isActive = val >= r.min && val <= r.max;
                let meta = appData.sleepMeta && appData.sleepMeta[d] ? appData.sleepMeta[d] : null;
                
                let tooltip = '';
                if(isActive) {
                    tooltip = `Day ${d}\nDuration: ${Math.floor(val)}h ${Math.round((val%1)*60)}m`;
                    if(meta && meta.bed && meta.bed !== 'Not Logged') tooltip += `\nBed: ${formatTime(meta.bed)}\nWake: ${formatTime(meta.wake)}`;
                    else tooltip += `\nTiming: Grid Logged`;
                }

                if(isActive) tableHTML += `<td class="has-data" data-info="${tooltip}" onclick="handleMatrixClick(${d}, ${r.clickVal})"><span class="sg-block sg-filled"></span></td>`;
                else tableHTML += `<td onclick="handleMatrixClick(${d}, ${r.clickVal})"><span class="sg-block sg-empty"></span></td>`;
            }
            tableHTML += `</tr>`;
        });
        tableHTML += `</table>`;
        container.innerHTML = tableHTML;
    }

    function renderTimingTable() {
        const tbody = document.getElementById('timingTableBody');
        tbody.innerHTML = ''; let hasData = false;

        for(let d=31; d>=1; d--) {
            let val = appData.sleep[d] || 0;
            if(val > 0) {
                hasData = true;
                let meta = appData.sleepMeta && appData.sleepMeta[d] ? appData.sleepMeta[d] : { bed: 'Not Logged', wake: 'Not Logged' };
                const hrs = Math.floor(val);
                const mins = Math.round((val - hrs) * 60);
                const durationText = mins > 0 ? `${hrs}h ${mins}m` : `${hrs} hrs`;
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="font-weight:bold;">Day ${d}</td>
                    <td>${formatTime(meta.bed)}</td>
                    <td>${formatTime(meta.wake)}</td>
                    <td style="color:#5c6bc0; font-weight:bold;">${durationText}</td>
                    <td><button class="del-time-btn" onclick="clearSleepData(${d})" title="Delete entry">✕</button></td>
                `;
                tbody.appendChild(tr);
            }
        }
        if(!hasData) tbody.innerHTML = `<tr><td colspan="5" style="padding: 20px; font-style:italic; color:#888;">No sleep timing logged for this month yet.</td></tr>`;
    }

    function clearSleepData(day) {
        if(confirm(`Are you sure you want to delete sleep log for Day ${day}?`)) {
            appData.sleep[day] = 0;
            if(appData.sleepMeta) delete appData.sleepMeta[day];
            saveData();
        }
    }

    function renderMasteryCards() {
        const container = document.getElementById('newMasteryGrid');
        container.innerHTML = '';

        appData.habitsRegular.forEach((h, idx) => {
            let totalPossible = 0, totalDone = 0, streak = 0, maxStreak = 0;

            for (let d = 1; d <= 31; d++) {
                const wd = getWeekdayIndex(d);
                if (wd !== -1 && (!h.freq || h.freq.includes(wd))) {
                    totalPossible++;
                    if (h.days[d] === 1) { totalDone++; streak++; maxStreak = Math.max(maxStreak, streak); } 
                    else { streak = 0; }
                }
            }

            const pct = totalPossible ? Math.round((totalDone / totalPossible) * 100) : 0;
            
            const today = new Date().getDate();
            let currentStreak = 0;
            let streakBroken = false;
            for (let d = today; d >= 1; d--) {
                const wd = getWeekdayIndex(d);
                if (wd !== -1 && (!h.freq || h.freq.includes(wd))) {
                    if (h.days[d] === 1) {
                        if (!streakBroken) currentStreak++;
                    } else if (h.days[d] === 2 || h.days[d] === 0) {
                        if (d < today || h.days[d] === 2) {
                            streakBroken = true;
                        }
                    }
                }
            }

            let tierText = "Under Review ⚠️";
            let tierColor = "linear-gradient(90deg, #ef5350, #e53935)";
            let tierRawColor = "#e53935";
            let tierBg = "rgba(239, 83, 80, 0.04)";
            let tierBorder = "rgba(239, 83, 80, 0.15)";
            let shadowColor = "rgba(239, 83, 80, 0.06)";

            if (pct >= 90) {
                tierText = "S-Tier 👑";
                tierColor = "linear-gradient(90deg, #66bb6a, #43a047)";
                tierRawColor = "#43a047";
                tierBg = "rgba(76, 175, 80, 0.05)";
                tierBorder = "rgba(76, 175, 80, 0.2)";
                shadowColor = "rgba(76, 175, 80, 0.08)";
            } else if (pct >= 75) {
                tierText = "A-Tier ⚡";
                tierColor = "linear-gradient(90deg, #29b6f6, #0288d1)";
                tierRawColor = "#0288d1";
                tierBg = "rgba(33, 150, 243, 0.05)";
                tierBorder = "rgba(33, 150, 243, 0.2)";
                shadowColor = "rgba(33, 150, 243, 0.08)";
            } else if (pct >= 50) {
                tierText = "B-Tier 📈";
                tierColor = "#ff8f00";
                tierBg = "rgba(255, 143, 0, 0.05)";
                tierBorder = "rgba(255, 143, 0, 0.2)";
            }

            const card = document.createElement('div');
            card.className = 'mastery-card';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.alignItems = 'stretch';
            card.style.padding = '16px';
            card.style.gap = '12px';

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                    <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-main); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;" title="${h.name}">
                        ${h.name}
                    </div>
                    <span style="font-size: 0.75rem; padding: 3px 8px; border-radius: 12px; font-weight: bold; color: ${tierColor}; background: ${tierBg}; border: 1px solid ${tierBorder}; white-space: nowrap;">
                        ${tierText}
                    </span>
                </div>
                
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #777; font-weight: bold; margin-bottom: 4px;">
                        <span>Consistency</span>
                        <span style="color: ${tierColor};">${pct}%</span>
                    </div>
                    <div style="width: 100%; height: 6px; background: var(--bg-body); border-radius: 3px; overflow: hidden; border: 1px solid var(--border-color);">
                        <div style="width: ${pct}%; height: 100%; background: ${tierColor}; border-radius: 3px; transition: width 0.8s ease-out;"></div>
                    </div>
                </div>

                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-main); border-top: 1px dashed var(--border-color); padding-top: 8px; font-weight: 600;">
                    <span>Completed: <b style="color: ${tierColor};">${totalDone}/${totalPossible}</b></span>
                    <span>Current: <b style="color: #ff5722;">🔥 ${currentStreak}</b></span>
                    <span>Best: <b style="color: #ffb300;">🏆 ${maxStreak}</b></span>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function renderStrip() {
        const strip = document.getElementById('dayStrip'); 
        if(!strip) return;
        strip.innerHTML = '';
        
        for(let i=1; i<=31; i++) {
            const wd = getWeekday(i);
            if(!wd) continue;
            
            const mode = appData.dayModes[i] || 'regular';
            const isSelected = (i === selectedDay);
            const isToday = (i === new Date().getDate());
            
            const div = document.createElement('div');
            let classes = `ds-cell ${mode==='holiday'?'ds-hol':'ds-reg'}`;
            if(isSelected) classes += ' selected-day';
            if(isToday) classes += ' today-highlight';
            
            div.className = classes;
            div.innerHTML = `${i}<br><span style='font-size:0.6rem'>${wd}</span>`;
            
            div.onclick = () => {
                selectedDay = i;
                renderAll();
            };
            div.ondblclick = () => {
                toggleDayMode(i);
            };
            strip.appendChild(div);
        }
    }
    
    window.toggleSelectedDayMode = function() {
        toggleDayMode(selectedDay);
    };

    window.toggleDayMode = function(day) {
        if(confirm(`Toggle Day ${day} mode? (Regular vs Holiday)`)) {
            appData.dayModes[day] = (appData.dayModes[day] === 'regular' ? 'holiday' : 'regular');
            saveData();
            renderAll();
        }
    };

    function renderHeaders() {
        const hHead = document.getElementById('habitHead');
        const holHead = document.getElementById('holidayHead');
        let headerHTML = `<tr>
            <th style="background:var(--box-bg);color:var(--text-main);" rowspan="2">START</th>
            <th style="background:var(--box-bg);color:var(--text-main);" rowspan="2">END</th>
            <th style="background:var(--box-bg);color:var(--text-main);" rowspan="2">ACTIVITY</th>
            <th style="background:var(--box-bg);color:var(--text-main);" rowspan="2">GOAL</th>
            <th class="th-w1" colspan="7">WEEK 1</th><th class="th-w2" colspan="7">WEEK 2</th><th class="th-w3" colspan="7">WEEK 3</th><th class="th-w4" colspan="7">WEEK 4</th><th class="th-w5" colspan="3">W5</th><th style="background:var(--box-bg);color:var(--text-main);" rowspan="2">%</th><th style="background:var(--box-bg);color:var(--text-main);" rowspan="2" style="font-size:0.7rem">STREAK</th><th style="background:var(--box-bg);color:var(--text-main);" rowspan="2" style="font-size:0.7rem">BEST</th></tr><tr>`;

        for(let i=1; i<=31; i++) {
            const wd = getWeekday(i);
            const content = wd ? `${i}<span class="weekday-label">${wd}</span>` : `<span style="color:#eee;">${i}</span>`;
            let thClass = (i === new Date().getDate()) ? "today-highlight" : "";
            headerHTML += `<th class="${thClass}" style="background:var(--box-bg);color:var(--text-main); font-size:0.8rem;">${content}</th>`;
        }
        headerHTML += `</tr>`;
        if (hHead) hHead.innerHTML = headerHTML; 
        if (holHead) holHead.innerHTML = headerHTML; 
    }

    function switchView(mode) {
        viewMode = mode;
        document.getElementById('tabRegular').className = `tab tab-reg ${mode==='regular'?'active':''}`;
        document.getElementById('tabHoliday').className = `tab tab-hol ${mode==='holiday'?'active':''}`;
        document.getElementById('tabGita').className = `tab ${mode==='gita'?'active':''}`;
        document.getElementById('tabNotes').className = `tab ${mode==='notes'?'active':''}`;
        
        if(mode==='gita') document.getElementById('tabGita').style.borderBottom = "3px solid #f57f17";
        else document.getElementById('tabGita').style.borderBottom = "none";
        
        if(mode==='notes') document.getElementById('tabNotes').style.borderBottom = "3px solid #9c27b0";
        else document.getElementById('tabNotes').style.borderBottom = "none";
        
        document.getElementById('regularView').style.display = (mode==='regular') ? 'block' : 'none';
        document.getElementById('holidayView').style.display = (mode==='holiday') ? 'block' : 'none';
        document.getElementById('gitaView').style.display = (mode==='gita') ? 'block' : 'none';
        document.getElementById('notesView').style.display = (mode==='notes') ? 'block' : 'none';
        
        document.getElementById('sleepDashboardView').style.display = (mode==='regular') ? 'block' : 'none';
        document.getElementById('matrixFilterContainer').style.display = (mode==='regular') ? 'block' : 'none';

        if(mode === 'holiday') renderHolidayItinerary();
        if(mode === 'notes') renderNotes();
        renderStrip(); 
    }

    function handleDayClick(day) {
        if(confirm(`Toggle Day ${day} mode? (Regular vs Holiday)`)) {
            appData.dayModes[day] = (appData.dayModes[day] === 'regular') ? 'holiday' : 'regular';
            saveData();
            renderAll();
        }
    }

    function renderRegularTable() {
        const tbody = document.getElementById('habitBody'); tbody.innerHTML = '';
        const today = new Date().getDate();
        const todayWd = new Date().getDay();
        const filterMode = document.getElementById('matrixFilter').value;

        let sortedHabits = [...appData.habitsRegular].map((h, originalIndex) => ({...h, originalIndex}));
        sortedHabits.sort((a, b) => {
            const parseTime = (timeStr) => {
                if(!timeStr || timeStr === "--") return 9999; 
                const pts = timeStr.split(':');
                return (parseInt(pts[0]) * 60) + parseInt(pts[1]);
            };
            return parseTime(a.start) - parseTime(b.start);
        });

        sortedHabits.forEach((h) => {
            if (filterMode === 'today') { if (h.freq && !h.freq.includes(todayWd)) return; } 
            else if (filterMode !== 'all') { const targetWd = parseInt(filterMode); if (h.freq && !h.freq.includes(targetWd)) return; }

            const rIdx = h.originalIndex;
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
                <td>${formatTime(h.start)}</td>
                <td>${formatTime(h.end)}</td>
                <td style="text-align:left; padding-left:10px; font-family:'Outfit', sans-serif;">
                    <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4px;">
                        ${getActivityBadge(h.name)}
                        <span style="font-weight:600; cursor:pointer; text-decoration:none; color:var(--text-main); font-size:0.9rem;" onclick="showTaskDetails(${rIdx})">${h.name}</span>
                    </div>
                </td>
                <td style="color:#555;">${h.goal}</td>`;
            
            let applicableDays = 0, completedCount = 0, currentStreak = 0, bestStreak = 0, tempStreak = 0;
            
            for(let d=1; d<=31; d++) {
                const wd = getWeekdayIndex(d);
                if(wd !== -1 && appData.dayModes[d] === 'regular' && (!h.freq || h.freq.includes(wd))) {
                    applicableDays++;
                    if(h.days[d] === 1) { tempStreak++; completedCount++; } 
                    else { bestStreak = Math.max(bestStreak, tempStreak); tempStreak = 0; }
                }
            }
            bestStreak = Math.max(bestStreak, tempStreak);
            
            let chainEnd = -1;
            for(let d=31; d>=1; d--) { 
                const wd = getWeekdayIndex(d);
                if(wd !== -1 && appData.dayModes[d] === 'regular' && (!h.freq || h.freq.includes(wd))) {
                    if(h.days[d] === 1) { chainEnd = d; break; } 
                }
            }
            if(chainEnd !== -1) { 
                for(let d=chainEnd; d>=1; d--) { 
                    const wd = getWeekdayIndex(d);
                    if(wd !== -1 && appData.dayModes[d] === 'regular' && (!h.freq || h.freq.includes(wd))) {
                        if(h.days[d] === 1) currentStreak++; else break; 
                    }
                } 
            }
            
            for(let d=1; d<=31; d++) {
                const dayMode = appData.dayModes[d];
                const wdIndex = getWeekdayIndex(d);
                const applies = h.freq ? h.freq.includes(wdIndex) : true;
                let tdClass = (d === today) ? "today-highlight" : "";

                if (dayMode === 'holiday') { 
                    tr.innerHTML += `<td class="${tdClass}"><div class="cell cell-blocked" title="Day ${d}: Holiday"></div></td>`; 
                } else if (!applies && wdIndex !== -1) {
                    tr.innerHTML += `<td class="${tdClass}"><div class="cell cell-not-scheduled" title="Not active">―</div></td>`;
                } else {
                    const val = h.days[d]; 
                    const cellClass = (val === 0) ? 'cell-empty' : (val === 1 ? 'cell done' : 'cell miss');
                    tr.innerHTML += `<td class="${tdClass}"><div class="${cellClass}" onmousedown="handleHabitClick(event, ${rIdx}, ${d})" oncontextmenu="return false;"></div></td>`;
                }
            }
            const pct = applicableDays ? Math.round((completedCount / applicableDays) * 100) : 0; 
            tr.innerHTML += `<td style="font-weight:bold;">${pct}%</td><td style="color:#0277bd; font-weight:bold;">${currentStreak}</td><td style="color:#2e7d32; font-weight:bold;">${bestStreak}</td>`;
            tbody.appendChild(tr);
        });
    }

    function handleHabitClick(e, habitIndex, day) {
        if (e.button !== 0 && e.button !== 2) return; 
        
        let curr = appData.habitsRegular[habitIndex].days[day];
        const hName = appData.habitsRegular[habitIndex].name;
        
        if (e.button === 0) { 
            curr = (curr === 0 || curr === 2) ? 1 : 0; 
            if(curr === 1) {
                addExp(5);
                removeMissLog(hName, day);
            } else {
                removeMissLog(hName, day);
            }
        } else if (e.button === 2) { 
            curr = (curr === 0 || curr === 1) ? 2 : 0; 
            if(curr === 2) {
                addPenalty(day, hName);
                openMissReasonModal(habitIndex, day, 'regular');
            } else {
                removeMissLog(hName, day);
            }
        }
        appData.habitsRegular[habitIndex].days[day] = curr;
        saveData();
        renderRegularTable();
        renderDailyRoutine();
        renderLogs();
        
        // Trigger AI silently after modifying grid
        runAIAnalysis(true);
    }

    function getReasonTheme(reason) {
        if (reason.includes("sleep") || reason.includes("Fatigue") || reason.includes("late")) {
            return { bg: "#ffe2e2", color: "#c62828", border: "#ffcdd2" };
        }
        if (reason.includes("distraction") || reason.includes("Procrastination") || reason.includes("social")) {
            return { bg: "#f3e5f5", color: "#6a1b9a", border: "#e1bee7" };
        }
        if (reason.includes("college") || reason.includes("Exam") || reason.includes("Class") || reason.includes("assignment")) {
            return { bg: "#e3f2fd", color: "#0d47a1", border: "#bbdefb" };
        }
        if (reason.includes("health") || reason.includes("Illness") || reason.includes("pain")) {
            return { bg: "#e8f5e9", color: "#1b5e20", border: "#c8e6c9" };
        }
        if (reason.includes("weather") || reason.includes("Power") || reason.includes("Technical")) {
            return { bg: "#eceff1", color: "#37474f", border: "#cfd8dc" };
        }
        if (reason.includes("Family") || reason.includes("friends") || reason.includes("Social")) {
            return { bg: "#fff8e1", color: "#ff8f00", border: "#ffe082" };
        }
        if (reason.includes("motivation") || reason.includes("burnout") || reason.includes("Mental")) {
            return { bg: "#fce4ec", color: "#ad1457", border: "#f8bbd0" };
        }
        return { bg: "#efebe9", color: "#4e342e", border: "#d7ccc8" };
    }

    function renderLogs() {
        const grid = document.getElementById('logGrid'); 
        grid.innerHTML = '';
        
        if (!appData.missedTaskReasons) appData.missedTaskReasons = {};
        
        const keys = Object.keys(appData.missedTaskReasons);
        
        if (keys.length === 0) {
            grid.innerHTML = `
                <div style="width: 100%; text-align: center; padding: 30px 15px; color: #2e7d32; font-style: italic; background: rgba(102, 187, 106, 0.03); border: 1px dashed #66bb6a; border-radius: 6px; font-size: 0.9rem; margin-top: 10px;">
                    ✨ Perfect Execution Record! No missed tasks logged in the ledger. Keep it up!
                </div>
            `;
            return;
        }

        // Calculate statistics
        const totalMisses = keys.length;
        const taskCounts = {};
        const reasonCounts = {};
        
        keys.forEach(key => {
            const entry = appData.missedTaskReasons[key];
            taskCounts[entry.taskName] = (taskCounts[entry.taskName] || 0) + 1;
            reasonCounts[entry.reason] = (reasonCounts[entry.reason] || 0) + 1;
        });
        
        let topTask = "None";
        let maxTaskCount = 0;
        for (const t in taskCounts) {
            if (taskCounts[t] > maxTaskCount) {
                topTask = t;
                maxTaskCount = taskCounts[t];
            }
        }
        
        let topReason = "None";
        let maxReasonCount = 0;
        for (const r in reasonCounts) {
            if (reasonCounts[r] > maxReasonCount) {
                topReason = r.split(' ').slice(1).join(' ') || r; // strip emoji
                maxReasonCount = reasonCounts[r];
            }
        }

        // Sort keys by day descending
        keys.sort((a, b) => {
            const dayA = appData.missedTaskReasons[a].day;
            const dayB = appData.missedTaskReasons[b].day;
            return dayB - dayA; 
        });

        // Build stats summary html
        let statsHTML = `
            <div style="display: flex; gap: 15px; width: 100%; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 140px; background: rgba(198, 40, 40, 0.05); border: 1px solid rgba(198, 40, 40, 0.1); border-radius: 8px; padding: 12px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                    <div style="font-size: 0.75rem; text-transform: uppercase; color: #777; font-weight: bold; letter-spacing: 0.5px;">Total Misses</div>
                    <div style="font-size: 1.5rem; font-weight: 900; color: #c62828; margin-top: 3px;">${totalMisses}</div>
                </div>
                <div style="flex: 1.5; min-width: 180px; background: rgba(255, 179, 0, 0.05); border: 1px solid rgba(255, 179, 0, 0.1); border-radius: 8px; padding: 12px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                    <div style="font-size: 0.75rem; text-transform: uppercase; color: #777; font-weight: bold; letter-spacing: 0.5px;">Top Obstacle</div>
                    <div style="font-size: 1.05rem; font-weight: 800; color: #e65100; margin-top: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${topTask}">${topTask}</div>
                </div>
                <div style="flex: 2; min-width: 200px; background: rgba(92, 107, 192, 0.05); border: 1px solid rgba(92, 107, 192, 0.1); border-radius: 8px; padding: 12px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                    <div style="font-size: 0.75rem; text-transform: uppercase; color: #777; font-weight: bold; letter-spacing: 0.5px;">Primary Trigger</div>
                    <div style="font-size: 1rem; font-weight: 800; color: #283593; margin-top: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${topReason}">${topReason}</div>
                </div>
            </div>
        `;

        // Build Table HTML
        let tableRowsHTML = '';
        keys.forEach(key => {
            const entry = appData.missedTaskReasons[key];
            const day = entry.day;
            const wd = getWeekday(day);
            if (!wd) return;

            const theme = getReasonTheme(entry.reason);
            const detailText = entry.detail || '';

            tableRowsHTML += `
                <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">
                    <td style="padding: 10px; font-weight: bold; color: var(--text-main); font-family: monospace;">Day ${String(day).padStart(2, '0')} (${wd})</td>
                    <td style="padding: 10px; font-weight: 700; color: #c62828; text-align: left;">${entry.taskName}</td>
                    <td style="padding: 10px; text-align: left;">
                        <span style="display: inline-block; font-size: 0.75rem; padding: 3px 8px; border-radius: 12px; font-weight: bold; background: ${theme.bg}; color: ${theme.color}; border: 1px solid ${theme.border};">
                            ${entry.reason}
                        </span>
                    </td>
                    <td style="padding: 6px 10px; text-align: left;">
                        <textarea placeholder="Write detail/recovery plan..." onchange="saveMissDetail('${key}', this.value)" style="width: 100%; height: 32px; border: 1px dashed #ccc; border-radius: 4px; padding: 4px 6px; font-family: inherit; font-size: 0.8rem; box-sizing: border-box; background: transparent; resize: none; color: var(--text-main);">${detailText}</textarea>
                    </td>
                    <td style="padding: 10px; text-align: center;">
                        <button class="del-time-btn" onclick="resolveMissTask('${key}')" style="background: #e8f5e9; color: #2e7d32; border: 1px solid #c8e6c9; border-radius: 4px; padding: 4px 8px; font-size: 0.75rem; font-weight: bold; cursor: pointer; transition: 0.2s;">Resolved ✔</button>
                    </td>
                </tr>
            `;
        });

        const tableHTML = `
            <div style="width: 100%; overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; min-width: 800px; text-align: left; font-size: 0.85rem;">
                    <thead>
                        <tr style="background: var(--bg-body); border-bottom: 2px solid #ef5350;">
                            <th style="padding: 10px; color: var(--text-main); font-weight: 800; width: 12%;">DAY</th>
                            <th style="padding: 10px; color: var(--text-main); font-weight: 800; width: 22%;">TASK</th>
                            <th style="padding: 10px; color: var(--text-main); font-weight: 800; width: 22%;">TRIGGER REASON</th>
                            <th style="padding: 10px; color: var(--text-main); font-weight: 800; width: 34%;">ANALYSIS & RECOVERY NOTE</th>
                            <th style="padding: 10px; color: var(--text-main); font-weight: 800; width: 10%; text-align: center;">ACTION</th>
                        </tr>
                    </thead>
                    <tbody id="reasonLedgerTableBody">
                        ${tableRowsHTML}
                    </tbody>
                </table>
            </div>
        `;

        grid.innerHTML = statsHTML + tableHTML;
    }

    function saveMissDetail(key, detailText) {
        if (appData.missedTaskReasons && appData.missedTaskReasons[key]) {
            appData.missedTaskReasons[key].detail = detailText;
            saveData();
        }
    }

    function resolveMissTask(key) {
        if (confirm("Mark this missed task as resolved (completed)?")) {
            const parts = key.split('_');
            const day = parseInt(parts[0]);
            const taskName = parts.slice(1).join('_');
            
            const regHabit = appData.habitsRegular.find(h => h.name === taskName);
            if (regHabit) {
                regHabit.days[day] = 1;
            }
            const holHabit = appData.habitsHoliday.find(h => h.name === taskName);
            if (holHabit) {
                if(!holHabit.days) holHabit.days = new Array(32).fill(0);
                holHabit.days[day] = 1;
            }
            
            delete appData.missedTaskReasons[key];
            
            if (appData.logs && appData.logs[day]) {
                let lines = appData.logs[day].split('\n');
                lines = lines.filter(line => !line.includes(`[${taskName}] Missed`));
                appData.logs[day] = lines.join('\n');
                if (appData.logs[day].trim() === '') delete appData.logs[day];
            }
            
            saveData();
            renderRegularTable();
            renderHolidayItinerary();
            renderLogs();
            renderDailyRoutine();
            addExp(5);
        }
    }
    
    function clearLog(d) {
        if(confirm("Clear log for day " + d + "?")) { appData.logs[d] = ""; saveData(); renderLogs(); }
    }
    function saveLog(d, t) { appData.logs[d]=t; saveData(); renderLogs(); }
    
    function updateGraph() {
        const box = document.getElementById('barContainer'); const lCombo = document.getElementById('lineCombo');
        box.innerHTML = ''; const pts = [];
        let validDays = 0; for(let d=1; d<=31; d++) { if(getWeekday(d)) validDays++; }

        for(let d=1; d<=31; d++) {
            const wd = getWeekdayIndex(d);
            if(wd === -1) continue; 
            
            const mode = appData.dayModes[d]; let pct = 0;
            if (mode === 'regular') {
                let total = 0; let done = 0;
                if(appData.habitsRegular && appData.habitsRegular.length > 0) {
                    appData.habitsRegular.forEach(h => { 
                        if(!h.freq || h.freq.includes(wd)) {
                            total++;
                            if(h.days[d]===1) done++; 
                        }
                    });
                }
                pct = total ? Math.round((done/total)*100) : 0;
            } else {
                let total = 0; let done = 0;
                const list = appData.holidayDays[d] || [];
                list.forEach(task => {
                    total++;
                    if(task.status === 1) done++;
                });
                pct = total ? Math.round((done/total)*100) : 0;
            }
            pts.push(pct);
            const col = document.createElement('div'); col.className = 'bar-col';
            const bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = `${pct}%`;
            if(pct>=80) bar.style.backgroundColor='#66bb6a'; else if(pct>=50) bar.style.backgroundColor='#4dd0e1'; else if(pct>0) bar.style.backgroundColor='#ef5350'; else bar.style.backgroundColor='#ddd';
            bar.setAttribute('data-tooltip', `Day ${d}\nScore: ${pct}%`);
            col.appendChild(bar); box.appendChild(col);
        }
        const step = 1000/validDays; let sPoints = ""; pts.forEach((v,i) => sPoints += `${(i*step)+(step/2)},${100-v} `); lCombo.setAttribute('points', sPoints);
    }
    
    function addNewHabit() { 
        const n = prompt("Task Name?"); 
        if(n) { 
            appData.habitsRegular.push({name:n, start:"--", end:"--", rule:"--", water:"--", goal:30, freq:[1,2,3,4,5,6,0], days:new Array(32).fill(0)}); 
            saveData(); renderRegularTable(); showTaskDetails(appData.habitsRegular.length - 1); toggleTaskEditMode();
        }
    }

    function renderHolidayItinerary() {
        const container = document.getElementById('holidayListContainer');
        if(!container) return;
        container.innerHTML = '';
        
        document.getElementById('holDateTitle').innerText = `Day ${selectedDay}`;
        
        const mode = appData.dayModes[selectedDay] || 'regular';
        const badge = document.getElementById('holDayModeBadge');
        if(badge) {
            badge.innerText = mode === 'holiday' ? '🏖️ Holiday Day' : '🏢 Regular Day';
            badge.style.background = mode === 'holiday' ? '#e91e63' : '#5c6bc0';
        }
        
        if(mode === 'regular') {
            container.innerHTML = `
                <div style="text-align: center; padding: 45px 20px; color: #888; font-style: italic; background: rgba(0,0,0,0.02); border-radius: 12px; border: 1px dashed rgba(0,0,0,0.15); margin-top:10px;">
                    Day ${selectedDay} is configured as a Regular Routine Day. <br><br>
                    <button class="nav-btn" style="width:auto; display:inline-block; border-color:#5c6bc0; color:#5c6bc0; text-align:center; padding:8px 20px; border-radius:8px;" onclick="toggleSelectedDayMode()">Switch Day to Holiday Mode</button>
                </div>
            `;
            return;
        }
        
        const tasks = appData.holidayDays[selectedDay] || [];
        
        tasks.sort((a, b) => {
            const parseTime = (timeStr) => {
                if(!timeStr || timeStr === "--") return 9999; 
                const pts = timeStr.split(':');
                return (parseInt(pts[0]) * 60) + parseInt(pts[1]);
            };
            return parseTime(a.start) - parseTime(b.start);
        });
        
        if(tasks.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 45px 20px; color: #888; font-style: italic; background: rgba(0,0,0,0.01); border-radius: 12px; border: 1px dashed rgba(0,0,0,0.1); margin-top:10px;">
                    No itinerary custom tasks planned for Holiday Day ${selectedDay}. <br>Use the Quick Add Form above to schedule your routine.
                </div>
            `;
            return;
        }
        
        let html = `
            <div style="width: 100%; overflow-x: auto; margin-top: 10px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; min-width:600px;">
                    <thead>
                        <tr style="background: rgba(0,0,0,0.02); border-bottom: 2px solid #9c27b0;">
                            <th style="padding: 12px 10px; color: var(--text-main); font-weight: 800; width: 22%;">🕒 TIME SLOT</th>
                            <th style="padding: 12px 10px; color: var(--text-main); font-weight: 800; width: 45%;">📋 TASK ACTIVITY</th>
                            <th style="padding: 12px 10px; color: var(--text-main); font-weight: 800; width: 20%;">⚡ FOCUS / SPECIFIC Focus</th>
                            <th style="padding: 12px 10px; color: var(--text-main); font-weight: 800; width: 13%; text-align: center;">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        tasks.forEach((task, idx) => {
            let statusBtnClass = 'holiday-status-pending';
            let statusLabel = 'PENDING';
            if(task.status === 1) { statusBtnClass = 'holiday-status-done'; statusLabel = '✔ DONE'; }
            if(task.status === 2) { statusBtnClass = 'holiday-status-fail'; statusLabel = '✕ MISSED'; }
            
            html += `
                <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">
                    <td style="padding: 14px 10px; font-weight: bold; color: #9c27b0;">${formatTime(task.start)} - ${formatTime(task.end)}</td>
                    <td style="padding: 14px 10px; font-weight: 600; text-align: left; color: var(--text-main);">
                        <div style="display:flex; align-items:center; gap:8px;">
                            ${getActivityBadge(task.name)}
                            <span>${task.name}</span>
                        </div>
                    </td>
                    <td style="padding: 14px 10px; text-align: left; color: #777;">${task.rule || '―'}</td>
                    <td style="padding: 10px; text-align: center;">
                        <div style="display:flex; gap:6px; justify-content:center;">
                            <button class="holiday-action-btn holiday-action-done ${task.status===1?'active-done':''}" onclick="event.stopPropagation(); logSelectedDayTask(${idx}, 1)" title="Mark Done">✔</button>
                            <button class="holiday-action-btn holiday-action-fail ${task.status===2?'active-fail':''}" onclick="event.stopPropagation(); logSelectedDayTask(${idx}, 2)" title="Mark Missed">✕</button>
                            <button class="holiday-action-btn holiday-action-del" onclick="event.stopPropagation(); removeSelectedDayTask(${idx})" title="Delete Task">🗑️</button>
                        </div>
                    </td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
        
        container.innerHTML = html;
        renderHolidayMatrix();
    }

    function renderHolidayMatrix() {
        const tbody = document.getElementById('holidayBody');
        if (!tbody) return;
        tbody.innerHTML = '';
        
        const today = new Date().getDate();
        
        // 1. Gather all unique holiday task definitions from appData.holidayDays across all days (1 to 31)
        const taskMap = {}; // name -> { name, start, end, rule, goal }
        
        for (let d = 1; d <= 31; d++) {
            const list = appData.holidayDays[d] || [];
            list.forEach(task => {
                const name = task.name;
                if (!taskMap[name]) {
                    taskMap[name] = {
                        name: task.name,
                        start: task.start || "--",
                        end: task.end || "--",
                        rule: task.rule || "--",
                        goal: 30
                    };
                }
            });
        }
        
        const sortedTaskNames = Object.keys(taskMap).sort((a, b) => {
            const parseTime = (timeStr) => {
                if(!timeStr || timeStr === "--") return 9999; 
                const pts = timeStr.split(':');
                return (parseInt(pts[0]) * 60) + parseInt(pts[1]);
            };
            return parseTime(taskMap[a].start) - parseTime(taskMap[b].start);
        });
        
        if (sortedTaskNames.length === 0) {
            tbody.innerHTML = `<tr><td class="holiday-empty-row" colspan="38">No holiday tasks scheduled in this month.</td></tr>`;
            return;
        }
        
        sortedTaskNames.forEach(taskName => {
            const h = taskMap[taskName];
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
                <td>${formatTime(h.start)}</td>
                <td>${formatTime(h.end)}</td>
                <td style="text-align:left; padding-left:10px; font-family:'Outfit', sans-serif;">
                    <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4px;">
                        ${getActivityBadge(h.name)}
                        <span style="font-weight:600; text-decoration:none; color:var(--text-main); font-size:0.9rem;">${h.name}</span>
                    </div>
                </td>
                <td style="color:#555;">${h.goal}</td>
            `;
            
            let applicableDays = 0;
            let completedCount = 0;
            let currentStreak = 0;
            let bestStreak = 0;
            let tempStreak = 0;
            
            // Loop through all days to calculate stats and render cells
            for(let d=1; d<=31; d++) {
                const isHoliday = appData.dayModes[d] === 'holiday';
                const dayTasks = appData.holidayDays[d] || [];
                const dayTask = dayTasks.find(t => t.name === taskName);
                
                if (isHoliday && dayTask) {
                    applicableDays++;
                    if (dayTask.status === 1) {
                        tempStreak++;
                        completedCount++;
                    } else {
                        bestStreak = Math.max(bestStreak, tempStreak);
                        tempStreak = 0;
                    }
                }
            }
            bestStreak = Math.max(bestStreak, tempStreak);
            
            let chainEnd = -1;
            for(let d=31; d>=1; d--) {
                const isHoliday = appData.dayModes[d] === 'holiday';
                const dayTasks = appData.holidayDays[d] || [];
                const dayTask = dayTasks.find(t => t.name === taskName);
                if (isHoliday && dayTask) {
                    if (dayTask.status === 1) {
                        chainEnd = d;
                        break;
                    }
                }
            }
            if (chainEnd !== -1) {
                for(let d=chainEnd; d>=1; d--) {
                    const isHoliday = appData.dayModes[d] === 'holiday';
                    const dayTasks = appData.holidayDays[d] || [];
                    const dayTask = dayTasks.find(t => t.name === taskName);
                    if (isHoliday && dayTask) {
                        if (dayTask.status === 1) {
                            currentStreak++;
                        } else {
                            break;
                        }
                    }
                }
            }
            
            // Now render cell columns
            for(let d=1; d<=31; d++) {
                const dayMode = appData.dayModes[d];
                const isToday = (d === today);
                let tdClass = isToday ? "today-highlight" : "";
                
                if (dayMode === 'regular') {
                    tr.innerHTML += `<td class="${tdClass}"><div class="cell cell-blocked" title="Day ${d}: Regular"></div></td>`;
                } else {
                    const dayTasks = appData.holidayDays[d] || [];
                    const dayTask = dayTasks.find(t => t.name === taskName);
                    
                    if (!dayTask) {
                        // This task is not scheduled for this specific holiday day
                        tr.innerHTML += `<td class="${tdClass}"><div class="cell cell-blocked" title="Task not scheduled for Day ${d}"></div></td>`;
                    } else {
                        const val = dayTask.status || 0;
                        const cellClass = (val === 0) ? 'cell-empty' : (val === 1 ? 'cell done' : 'cell miss');
                        
                        // We can click the cell to toggle its status directly from the matrix!
                        tr.innerHTML += `
                            <td class="${tdClass}">
                                <div class="${cellClass}" onmousedown="handleHolidayMatrixClick(event, '${escapeString(taskName)}', ${d})" oncontextmenu="return false;" title="Day ${d}: ${taskName}"></div>
                            </td>
                        `;
                    }
                }
            }
            
            const pct = applicableDays ? Math.round((completedCount / applicableDays) * 100) : 0; 
            tr.innerHTML += `<td style="font-weight:bold;">${pct}%</td><td style="color:#0277bd; font-weight:bold;">${currentStreak}</td><td style="color:#2e7d32; font-weight:bold;">${bestStreak}</td>`;
            tbody.appendChild(tr);
        });
    }

    function escapeString(str) {
        return str.replace(/'/g, "\\'");
    }

    window.handleHolidayMatrixClick = function(e, taskName, day) {
        if (e.button !== 0 && e.button !== 2) return;
        
        const dayTasks = appData.holidayDays[day] || [];
        const taskIndex = dayTasks.findIndex(t => t.name === taskName);
        
        if (taskIndex === -1) {
            // Task is NOT scheduled for this day yet.
            // Click to schedule it!
            if (e.button === 0) {
                // Find template task details from any other day
                let template = null;
                for (let d = 1; d <= 31; d++) {
                    const list = appData.holidayDays[d] || [];
                    const found = list.find(t => t.name === taskName);
                    if (found) {
                        template = found;
                        break;
                    }
                }
                
                if (template) {
                    if (confirm(`Schedule "${taskName}" for Day ${day} with time ${template.start} - ${template.end}?`)) {
                        if (!appData.holidayDays[day]) appData.holidayDays[day] = [];
                        appData.holidayDays[day].push({
                            name: taskName,
                            start: template.start,
                            end: template.end,
                            rule: template.rule || "--",
                            status: 0
                        });
                        saveData();
                        renderAll();
                    }
                }
            }
            return;
        }
        
        const task = dayTasks[taskIndex];
        let curr = task.status || 0;
        
        if (e.button === 0) {
            // Left click: Toggle Done (1) or Pending (0)
            curr = (curr === 0 || curr === 2) ? 1 : 0;
            if (curr === 1) {
                addExp(5);
                removeMissLog(taskName, day);
            } else {
                removeMissLog(taskName, day);
            }
        } else if (e.button === 2) {
            // Right click: Options to mark Missed (2) or Remove task from this day
            const choice = confirm(`Select Action for "${taskName}" on Day ${day}:\n\n[OK] - Mark as MISSED\n[Cancel] - Remove task from this day's schedule`);
            if (choice) {
                curr = 2;
                addPenalty(day, taskName);
                logMissReason(`❌ [${taskName}] Missed on Day ${day}`);
            } else {
                // Remove task from this day
                dayTasks.splice(taskIndex, 1);
                saveData();
                renderAll();
                return;
            }
        }
        
        task.status = curr;
        saveData();
        renderAll();
    };
    
    window.addSelectedDayTask = function() {
        const name = document.getElementById('htName').value.trim();
        const start = document.getElementById('htStart').value;
        const end = document.getElementById('htEnd').value;
        const rule = document.getElementById('htRule').value.trim();
        
        if(!name) return alert("Please enter a Task Name.");
        if(!start || !end) return alert("Please specify start and end times.");
        
        if(!appData.holidayDays[selectedDay]) {
            appData.holidayDays[selectedDay] = [];
        }
        
        appData.holidayDays[selectedDay].push({
            name: name, start: start, end: end, rule: rule || "--", status: 0
        });
        
        document.getElementById('htName').value = '';
        document.getElementById('htStart').value = '';
        document.getElementById('htEnd').value = '';
        document.getElementById('htRule').value = '';
        
        saveData();
        renderAll();
    };

    window.removeSelectedDayTask = function(index) {
        if(confirm("Delete this holiday custom task?")) {
            appData.holidayDays[selectedDay].splice(index, 1);
            saveData();
            renderAll();
        }
    };

    window.logSelectedDayTask = function(index, status) {
        const tasks = appData.holidayDays[selectedDay] || [];
        const task = tasks[index];
        if(!task) return;
        
        task.status = (task.status === status) ? 0 : status;
        
        if(task.status === 1) {
            addExp(5);
            removeMissLog(task.name, selectedDay);
        } else if(task.status === 2) {
            addPenalty(selectedDay, task.name);
            logMissReason(`❌ [${task.name}] Missed on Day ${selectedDay}`);
        } else {
            removeMissLog(task.name, selectedDay);
        }
        
        saveData();
        renderAll();
    };

    let pendingMissHabitIndex = -1;
    let pendingMissDay = -1;
    let pendingMissType = 'regular';

    function openMissReasonModal(habitIndex, day, type) {
        pendingMissHabitIndex = habitIndex;
        pendingMissDay = day;
        pendingMissType = type;
        
        const list = type === 'holiday' ? appData.habitsHoliday : appData.habitsRegular;
        const hName = list[habitIndex].name;
        
        document.getElementById('mrmTaskInfo').innerText = `Task: ${hName} (Day ${day})`;
        document.getElementById('mrmCustomReason').value = '';
        document.getElementById('missReasonModal').style.display = 'flex';
    }

    function closeMissReasonModal() {
        document.getElementById('missReasonModal').style.display = 'none';
    }

    function selectMissReason(reasonText) {
        logMissReason(reasonText);
        closeMissReasonModal();
    }

    function submitCustomMissReason() {
        const text = document.getElementById('mrmCustomReason').value.trim();
        if (text) {
            logMissReason(text);
        } else {
            logMissReason('No reason provided');
        }
        closeMissReasonModal();
    }

    function logMissReason(reasonText) {
        if (pendingMissHabitIndex < 0 || pendingMissDay < 0) return;
        const list = pendingMissType === 'holiday' ? appData.habitsHoliday : appData.habitsRegular;
        const hName = list[pendingMissHabitIndex].name;
        const logLine = `❌ [${hName}] Missed: ${reasonText}`;
        
        if (!appData.logs[pendingMissDay]) {
            appData.logs[pendingMissDay] = logLine;
        } else {
            if (!appData.logs[pendingMissDay].includes(`[${hName}] Missed`)) {
                appData.logs[pendingMissDay] += `\n${logLine}`;
            } else {
                let lines = appData.logs[pendingMissDay].split('\n');
                lines = lines.map(line => {
                    if (line.includes(`[${hName}] Missed`)) {
                        return logLine;
                    }
                    return line;
                });
                appData.logs[pendingMissDay] = lines.join('\n');
            }
        }
        saveData();
        renderLogs();
    }

    function removeMissLog(habitName, day) {
        if (appData.logs && appData.logs[day]) {
            let lines = appData.logs[day].split('\n');
            lines = lines.filter(line => !line.includes(`[${habitName}] Missed`));
            appData.logs[day] = lines.join('\n');
            if (appData.logs[day].trim() === '') {
                delete appData.logs[day];
            }
        }
    }

    function addHolidayTask() {
        const task = prompt("Holiday Task Name?");
        if(!task) return;
        if(!appData.habitsHoliday) appData.habitsHoliday = [];
        appData.habitsHoliday.push({
            name: task, start: "--", end: "--", water: "--", rule: "--", goal: 30, freq: [0,1,2,3,4,5,6], days: new Array(32).fill(0)
        });
        saveData(); 
        renderHolidayItinerary();
        showTaskDetails(appData.habitsHoliday.length - 1, 'holiday'); toggleTaskEditMode();
    }

    function addExp(amount) {
        appData.warriorExp += amount;
        renderLevelBadge();
    }

    function addPenalty(day, taskName) {
        appData.penalties.push({ id: Date.now(), day, taskName, paid: false, escalated: false });
        saveData(); renderPenalties();
        alert(`PENALTY ADDED: You failed "${taskName}" on Day ${day}.\nGo to the Penalty Vault to pay your debt.`);
    }

    function renderPenalties() {
        const list = document.getElementById('penaltyList');
        const wrapper = document.getElementById('penaltyWrapper');
        list.innerHTML = '';
        const unpaid = appData.penalties.filter(p => !p.paid);
        
        if(unpaid.length === 0) { wrapper.style.display = 'none'; return; }
        wrapper.style.display = 'block';
        
        unpaid.forEach(p => {
            const div = document.createElement('div');
            div.className = `hol-card penalty-item ${p.escalated ? 'escalated' : ''}`;
            div.style.borderLeftColor = '#d32f2f';
            
            let extraHtml = p.escalated ? `
                <div style="margin-top:10px; border-top:1px dashed rgba(255,0,0,0.3); padding-top:10px;">
                    <div style="color:#ff5252; font-weight:bold; font-size:0.8rem; text-transform:uppercase;">ESCALATION LEVEL 1 ACTIVATED</div>
                    <div class="gita-shloka"><div class="gita-sanskrit">${gitaShlokas[0].sanskrit}</div><div class="gita-meaning">${gitaShlokas[0].meaning}</div></div>
                </div>
            ` : '';

            div.innerHTML = `
                <div class="hol-task-info" style="margin-right:15px;">
                    <h4 class="hol-task-text penalty-item-title" style="color:#c62828;">Failed: ${p.taskName} (Day ${p.day})</h4>
                    <div style="font-size:0.85rem; color:#666; margin-top:5px;">Debt: 20 Pushups + No Entertainment for 1 hour.</div>
                    ${extraHtml}
                </div>
                <div style="display:flex; flex-direction:column; gap:5px; min-width:120px;">
                    <button class="penalty-btn" onclick="payPenalty(${p.id})">Debt Paid</button>
                    ${!p.escalated ? `<button class="penalty-btn-fail" onclick="escalatePenalty(${p.id})">Refuse to Pay</button>` : ''}
                </div>
            `;
            list.appendChild(div);
        });
    }

    function payPenalty(id) { const p = appData.penalties.find(x => x.id === id); if(p) { p.paid = true; saveData(); renderPenalties(); } }
    function escalatePenalty(id) { const p = appData.penalties.find(x => x.id === id); if(p) { p.escalated = true; saveData(); renderPenalties(); } }

    function unlockSecret() {
        const p = prompt("Enter Key:");
        if(p === SECRET_PASS) { document.getElementById('secretOverlay').style.display = 'flex'; renderSecretJournal(); }
    }
    function closeSecret() { document.getElementById('secretOverlay').style.display = 'none'; }
    function renderSecretJournal() {
        document.getElementById('secretTitleDate').innerText = `Journal - Day ${currentRenderedDay}`;
        const container = document.getElementById('journalContainer');
        container.innerHTML = '';
        for(let i=1; i<=31; i++) {
            if(appData.secretJournal[i]) {
                const div = document.createElement('div'); div.className = 'journal-entry';
                div.innerHTML = `<b>Day ${i}:</b><br>${appData.secretJournal[i].replace(/\n/g, '<br>')}`;
                container.appendChild(div);
            }
        }
        document.getElementById('secretInput').value = appData.secretJournal[currentRenderedDay] || '';
    }
    function addSecretEntry() {
        appData.secretJournal[currentRenderedDay] = document.getElementById('secretInput').value;
        saveData(); renderSecretJournal();
    }

    function resetData() { if(confirm("Reset month?")) { localStorage.removeItem(getKey()); loadData(); }}

    init();

    // --- ORYZO STYLE INTERACTIVE EFFECTS ---
    document.addEventListener('DOMContentLoaded', () => {
        // 3D Tilt Effect
        const tiltElements = document.querySelectorAll('.img-card, .img-hero');
        
        tiltElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const maxRotateX = 8;
                const maxRotateY = 8;
                
                const percentX = (x - centerX) / centerX;
                const percentY = (y - centerY) / centerY;
                
                const rotateX = -percentY * maxRotateX;
                const rotateY = percentX * maxRotateY;
                
                el.style.setProperty('--rx', `${rotateX}deg`);
                el.style.setProperty('--ry', `${rotateY}deg`);
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.setProperty('--rx', '0deg');
                el.style.setProperty('--ry', '0deg');
            });
        });

        // Initialize scroll parallax tags
        const cards = document.querySelectorAll('.img-card');
        cards.forEach((card, index) => {
            if (index % 2 === 0) {
                card.classList.add('parallax-shift-up');
            } else {
                card.classList.add('parallax-shift-down');
            }
        });

        // Scroll Parallax Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;
            
            document.querySelectorAll('.parallax-shift-up').forEach((el, index) => {
                const speed = 0.03 + (index % 2) * 0.015;
                el.style.setProperty('--scroll-offset-up', `${scrolled * speed}px`);
            });
            
            document.querySelectorAll('.parallax-shift-down').forEach((el, index) => {
                const speed = -0.03 - (index % 2) * 0.015;
                el.style.setProperty('--scroll-offset-down', `${scrolled * speed}px`);
            });
        }, { passive: true });
    });

    // ==========================================
    // ============ DEEP NOTES ENGINE ============
    // ==========================================
    let activeNoteFolder = 'All Notes';
    let currentEditingNoteId = null;
    let currentPenColor = '#000000';
    let currentBrushSize = 6;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    const canvas = document.getElementById('noteDrawingCanvas');
    let ctx = null;
    if (canvas) {
        ctx = canvas.getContext('2d');
        // Register events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);
        
        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDrawing);
    }
    
    function renderFolders() {
        const list = document.getElementById('noteFoldersList');
        if (!list) return;
        list.innerHTML = '';
        
        const folders = appData.deepNotesFolders || ["All Notes", "DSA Notes", "Journal", "Ideas"];
        if (!folders.includes("All Notes")) {
            folders.unshift("All Notes");
        }
        
        folders.forEach(folder => {
            const count = folder === "All Notes" ? 
                (appData.deepNotes ? appData.deepNotes.length : 0) : 
                (appData.deepNotes ? appData.deepNotes.filter(n => n.folder === folder).length : 0);
                 
            const div = document.createElement('div');
            div.className = `folder-item ${activeNoteFolder === folder ? 'active' : ''}`;
            div.onclick = () => {
                activeNoteFolder = folder;
                renderFolders();
                renderNotes();
            };
            
            div.innerHTML = `
                <span>📁 ${folder} (${count})</span>
                ${folder !== "All Notes" ? `<span class="delete-folder-btn" onclick="event.stopPropagation(); deleteNoteFolder('${folder}')">🗑️</span>` : ''}
            `;
            list.appendChild(div);
        });
    }
    
    function addNoteFolder() {
        const name = prompt("Enter folder name:");
        if (!name || name.trim() === "") return;
        const folderName = name.trim();
        if (!appData.deepNotesFolders) appData.deepNotesFolders = ["All Notes", "DSA Notes", "Journal", "Ideas"];
        if (appData.deepNotesFolders.includes(folderName)) {
            alert("Folder already exists!");
            return;
        }
        appData.deepNotesFolders.push(folderName);
        saveData();
        renderFolders();
        updateFolderSelectOptions();
    }
    
    function deleteNoteFolder(folder) {
        if (confirm(`Are you sure you want to delete folder "${folder}"? Notes in this folder will be moved to "All Notes".`)) {
            appData.deepNotesFolders = appData.deepNotesFolders.filter(f => f !== folder);
            if (appData.deepNotes) {
                appData.deepNotes.forEach(n => {
                    if (n.folder === folder) {
                        n.folder = "All Notes";
                    }
                });
            }
            if (activeNoteFolder === folder) {
                activeNoteFolder = "All Notes";
            }
            saveData();
            renderFolders();
            renderNotes();
        }
    }
    
    function updateFolderSelectOptions() {
        const select = document.getElementById('noteFolderSelect');
        if (!select) return;
        select.innerHTML = '';
        
        const folders = appData.deepNotesFolders || ["All Notes", "DSA Notes", "Journal", "Ideas"];
        folders.forEach(f => {
            const opt = document.createElement('option');
            opt.value = f;
            opt.innerText = f;
            select.appendChild(opt);
        });
    }
    
    function renderNotes() {
        const grid = document.getElementById('notesGrid');
        if (!grid) return;
        grid.innerHTML = '';
        
        const searchInput = document.getElementById('noteSearchInput');
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
        
        let notes = appData.deepNotes || [];
        
        // Filter by folder
        if (activeNoteFolder !== 'All Notes') {
            notes = notes.filter(n => n.folder === activeNoteFolder);
        }
        
        // Filter by search query
        if (searchQuery !== '') {
            notes = notes.filter(n => 
                (n.title && n.title.toLowerCase().includes(searchQuery)) ||
                (n.content && stripHTML(n.content).toLowerCase().includes(searchQuery))
            );
        }
        
        // Sort descending by date
        notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        
        if (notes.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #888; font-style: italic;">
                    No notes found. Create your first note to get started!
                </div>
            `;
            return;
        }
        
        notes.forEach(note => {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.onclick = () => editNote(note.id);
            
            const textSnippet = stripHTML(note.content || '').substring(0, 100);
            const dateStr = new Date(note.updatedAt).toLocaleDateString(undefined, {
                month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
            });
            
            let drawingPreview = '';
            if (note.drawingData) {
                drawingPreview = `
                    <div class="note-card-preview" style="height: auto; min-height: unset; margin-top: 5px;">
                        <img class="note-card-canvas-preview" src="${note.drawingData}" alt="Sketch Preview">
                    </div>
                `;
            }
            
            card.innerHTML = `
                <div class="note-card-folder">${note.folder || 'All Notes'}</div>
                <h4 class="note-card-title">${note.title || 'Untitled Note'}</h4>
                <p class="note-card-preview">${textSnippet || '<i>No text content</i>'}</p>
                ${drawingPreview}
                <div class="note-card-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
                    <span>${dateStr}</span>
                    <span class="note-card-delete" style="cursor: pointer; color: #c62828;" onclick="deleteNoteById('${note.id}', event)">🗑️</span>
                </div>
            `;
            
            grid.appendChild(card);
        });
    }
    
    function stripHTML(html) {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    
    function createNewNote() {
        currentEditingNoteId = 'note_' + Date.now();
        const newNote = {
            id: currentEditingNoteId,
            title: '',
            content: '',
            drawingData: '',
            folder: activeNoteFolder === 'All Notes' ? 'All Notes' : activeNoteFolder,
            updatedAt: new Date().toISOString()
        };
        openNoteEditor(newNote);
    }
    
    function editNote(id) {
        const note = appData.deepNotes.find(n => n.id === id);
        if (!note) return;
        currentEditingNoteId = id;
        openNoteEditor(note);
    }
    
    function openNoteEditor(note) {
        document.getElementById('noteTitleInput').value = note.title || '';
        document.getElementById('noteContentEditor').innerHTML = note.content || '';
        
        updateFolderSelectOptions();
        document.getElementById('noteFolderSelect').value = note.folder || 'All Notes';
        
        // Setup drawing canvas size and load sketch
        const cv = document.getElementById('noteDrawingCanvas');
        if (cv) {
            ctx = cv.getContext('2d');
            
            // Set canvas resolutions
            cv.width = cv.offsetWidth || 600;
            cv.height = cv.offsetHeight || 380;
            
            ctx.clearRect(0, 0, cv.width, cv.height);
            
            if (note.drawingData) {
                let img = new Image();
                img.onload = function() {
                    ctx.drawImage(img, 0, 0);
                };
                img.src = note.drawingData;
            }
            
            // Apply current brush settings
            setCanvasColor(currentPenColor, null);
        }
        
        // Swap views
        document.getElementById('notesGridView').style.display = 'none';
        document.getElementById('noteEditorView').style.display = 'block';
        setEditorMode('text');
    }
    
    function closeNoteEditor() {
        document.getElementById('notesGridView').style.display = 'block';
        document.getElementById('noteEditorView').style.display = 'none';
        renderNotes();
        renderFolders();
    }
    
    function setEditorMode(mode) {
        document.getElementById('btnEditorTextMode').className = `toolbar-btn ${mode==='text'?'active-tool':''}`;
        document.getElementById('btnEditorDrawMode').className = `toolbar-btn ${mode==='draw'?'active-tool':''}`;
        
        document.getElementById('editorTextModeView').style.display = mode === 'text' ? 'flex' : 'none';
        document.getElementById('editorDrawModeView').style.display = mode === 'draw' ? 'block' : 'none';
        
        if (mode === 'draw') {
            // Recalculate canvas bounds
            const cv = document.getElementById('noteDrawingCanvas');
            if (cv) {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = cv.width;
                tempCanvas.height = cv.height;
                const tempCtx = tempCanvas.getContext('2d');
                tempCtx.drawImage(cv, 0, 0);
                
                cv.width = cv.offsetWidth || cv.width || 600;
                cv.height = cv.offsetHeight || cv.height || 380;
                
                ctx.drawImage(tempCanvas, 0, 0);
                
                setCanvasColor(currentPenColor, null);
            }
        }
    }
    
    function formatDoc(cmd, val = null) {
        document.execCommand(cmd, false, val);
        document.getElementById('noteContentEditor').focus();
    }
    
    function setCanvasColor(color, element) {
        currentPenColor = color;
        
        // Toggle active classes on UI color dots if passed
        if (element) {
            const dots = document.querySelectorAll('.canvas-color-dot');
            dots.forEach(d => d.classList.remove('active-color'));
            element.classList.add('active-color');
        }
        
        if (!ctx) return;
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        const sizeSelect = document.getElementById('canvasBrushSize');
        currentBrushSize = sizeSelect ? parseInt(sizeSelect.value) : 6;
        ctx.lineWidth = currentBrushSize;
        
        if (color === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = color;
        }
    }
    
    // Canvas Brush Size listener
    const sizeSelect = document.getElementById('canvasBrushSize');
    if (sizeSelect) {
        sizeSelect.addEventListener('change', () => {
            setCanvasColor(currentPenColor, null);
        });
    }
    
    function clearDrawingCanvas() {
        if (!ctx) return;
        const cv = document.getElementById('noteDrawingCanvas');
        if (confirm("Clear drawings from canvas?")) {
            ctx.clearRect(0, 0, cv.width, cv.height);
        }
    }
    
    function isCanvasBlank(cv) {
        const blank = document.createElement('canvas');
        blank.width = cv.width;
        blank.height = cv.height;
        return cv.toDataURL() === blank.toDataURL();
    }
    
    function saveCurrentNote() {
        if (!currentEditingNoteId) return;
        
        const title = document.getElementById('noteTitleInput').value.trim() || 'Untitled Note';
        const content = document.getElementById('noteContentEditor').innerHTML;
        const folder = document.getElementById('noteFolderSelect').value;
        
        const cv = document.getElementById('noteDrawingCanvas');
        let drawingData = '';
        if (cv) {
            const isBlank = isCanvasBlank(cv);
            if (!isBlank) {
                drawingData = cv.toDataURL();
            }
        }
        
        if (!appData.deepNotes) appData.deepNotes = [];
        let note = appData.deepNotes.find(n => n.id === currentEditingNoteId);
        if (!note) {
            note = { id: currentEditingNoteId };
            appData.deepNotes.push(note);
        }
        
        note.title = title;
        note.content = content;
        note.folder = folder;
        note.drawingData = drawingData;
        note.updatedAt = new Date().toISOString();
        
        saveData();
        syncWithBackend(); // Sync immediately to local database server
        closeNoteEditor();
    }
    
    function deleteCurrentNote() {
        if (!currentEditingNoteId) return;
        if (confirm("Are you sure you want to delete this note?")) {
            appData.deepNotes = appData.deepNotes.filter(n => n.id !== currentEditingNoteId);
            saveData();
            syncWithBackend();
            closeNoteEditor();
        }
    }
    
    function deleteNoteById(id, event) {
        if (event) event.stopPropagation();
        if (confirm("Are you sure you want to delete this note?")) {
            appData.deepNotes = appData.deepNotes.filter(n => n.id !== id);
            saveData();
            syncWithBackend();
            renderNotes();
            renderFolders();
        }
    }
    
    // Canvas interaction helpers
    function getEventCoords(e) {
        const cv = document.getElementById('noteDrawingCanvas');
        const rect = cv.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const x = (clientX - rect.left) * (cv.width / rect.width);
        const y = (clientY - rect.top) * (cv.height / rect.height);
        return { x, y };
    }
    let canvasHistory = [];
    function saveCanvasState() {
        if (!canvas) return;
        if (canvasHistory.length >= 25) {
            canvasHistory.shift();
        }
        canvasHistory.push(canvas.toDataURL());
    }

    function startDrawing(e) {
        saveCanvasState();
        isDrawing = true;
        const coords = getEventCoords(e);
        lastX = coords.x;
        lastY = coords.y;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
    }

    window.undoDrawing = function() {
        if (!canvas || canvasHistory.length === 0) return;
        const prevState = canvasHistory.pop();
        const img = new Image();
        img.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        };
        img.src = prevState;
    };

    window.exportDrawingPng = function() {
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = `whiteboard_sketch_${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };
    
    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault(); // Prevent touch scroll
        const coords = getEventCoords(e);
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        
        lastX = coords.x;
        lastY = coords.y;
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    // Backend API Sync handlers
    function syncWithBackend() {
        fetch('/api/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: getKey(), data: appData })
        })
        .then(res => res.json())
        .then(data => console.log("Database Sync completed:", data))
        .catch(err => console.warn("Backend server offline, saved locally.", err));
    }
    
    function loadFromBackend() {
        return fetch(`/api/sync?key=${getKey()}`)
        .then(res => {
            if (!res.ok) throw new Error("Sync failed");
            return res.json();
        })
        .then(data => {
            if (data && data.appData) {
                appData = data.appData;
                console.log("Database loaded from server.");
                localStorage.setItem(getKey(), JSON.stringify(appData));
                renderLevelBadge();
                renderAll();
            }
        })
        .catch(err => {
            console.warn("Backend server offline, fallback to localStorage.", err);
        });
    }

    // Intercept Journal unlocking password to validate via Server
    window.unlockSecret = function() {
        const pass = prompt("Enter Secret passcode:");
        if (!pass) return;
        
        // Try server validation
        fetch('/api/auth/validate-journal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pass: pass })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                openSecretJournal();
            } else {
                alert("ACCESS DENIED: Passcode invalid.");
            }
        })
        .catch(err => {
            // Offline fallback
            if (pass === SECRET_PASS) {
                openSecretJournal();
            } else {
                alert("ACCESS DENIED: Passcode invalid (Offline verification).");
            }
        });
    }
    
    function openSecretJournal() {
        document.getElementById('secretOverlay').style.display = 'flex';
        renderJournal();
    }
