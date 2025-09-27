
const studentData = {
    JELWIN: {
        MATHEMATICS: ["Lesson 4 - Vacation With My Nani Maa", "Lesson 5 - Fun With Shapes", "Lesson 6 - House of Hundreds - I"], 
        ENGLISH: ["Lesson 4 - Best Friends", "Lesson 5 - Out in the Garden", "Lesson 6 - Talking Toys", "Lesson 7 - Paper Boats", "Grammar 1 - Articles", "Grammar 2 - Pronoun", "Grammar 3 - Helping Verbs"],
        IT: ["Lesson 2 - Introduction to Operating System", "Lesson 3 - Files & Folders", "Lesson 4 - Net Surfing", "Lesson 5 - Let Us Paint",  "Lesson 1 - Introduction to Scratch 3.0 (C)"],
        MALAYALAM: ["Lesson 1 - വിട്ടയയ്ക്കുക", "Lesson 2 - സന്തോഷവാനായ രാജകുമാരൻ", "Lesson 3 - ഓണക്കാഴ്ച",
        "Lesson 4 - തെനാലിരാമൻ", "Lesson 5 - നങ്ങേലിയും കുട്ടിയും", "Lesson 6 - ഏഴിലമ്പാലയും കുഞ്ഞിപ്പൂവും", "Lesson 7 - വാഴക്കുല"],
        HINDI: ["Lesson 2 - Thithaly", "Lesson 3 - Sher Ka Aasan", "Lesson 4 - Koove Ka Mendak", "Lesson 5  - Kadam Badhao", "Lesson 6 - Chaalaak Machale"],
        EVS: ["Lesson 1 - Family & Friends", "Lesson 2 - Going to the Mela", "Lesson 3 - Celebrating Festivals", "Lesson 4 - Getting to know Plants", "Lesson 5 - Plants & Animals Live Together", "Lesson 6 - Living in Harmony"]
    },
    JEWEL: {
        SOCIAL_SCIENCE: ["Lesson 3 - 12th & 13th  Century (H)", "Lesson 4 - Mughal Empire (H)", "Lesson 3 - Our Changing Earth (G)", "Lesson 4 - Air (G)", "Lesson 3 - State Government Works (P)", "Lesson 4 - Girls & Boys Grow Up (P)"],
        IT: ["Lesson 1 - Introduction to Number System", "Lesson 2 - Cyber Security", "Lesson 4 - Calculations Using Spreadsheets", "Lesson 5 - Visualizing Data Using Spreadsheets", "Lesson 7 - Creating Animations With Canva"],
        GENERAL_SCIENCE: ["Lesson 2 - Exploring Substances - Basic, Acidic & Neutral", "Lesson 3 - Electricity: Circuits & Their Components", "Lesson 4 - The World of Metals & Non-metals", "Lesson 5 - Changes Around Us: Physical and Chemical", "Lesson 6 - Adolescence: A Stage of Growth & Change"],
        HINDI: ["Lesson 1 - Desh Hamara Pyara Pyara", "Lesson 2 - Onam Ka Tyohar", "Lesson 4 - Pakshiyon ki Ginthi", "Lesson 5 - Poorv ka Scotland - Shillong", "Lesson 6 - Pushp ki Abhilasha"],
        ENGLISH: ["Lesson 3 - Gopal & The Hilsa Fish", "Poem 3 - The Shed", "Lesson 4 - The Ashes That Made Trees Bloom", "Poem 4 - Chivvy", "Lesson 1 - The Tiny Teacher (SR)", "Lesson 3 - Golu Grown A Nose", "Lesson 4 - Chandni"],
        MATHEMATICS: ["Lesson 1 - Integers", "Lesson 3 - Arithmetic Expressions", "Lesson 4 - Expressions Using Letter Numbers", "Lesson 5 - Parallel & Intersecting Lines", "Lesson 8 - Working With Fractions" ],
        MALAYALAM: ["Lesson 1 - ഇത് ആരുടെ ഭൂമി?", "Lesson 2 - കുട്ടിക്കാലം", "Lesson 3 - സത്യസന്ധത", "Lesson 4 - കാറ്റേ കടലേ", "Lesson 5 - അച്ഛൻ പിറന്ന വീട്"],
    },
};

function onButtonClick() {

    document.querySelectorAll('.btn-grad').forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transition = 'transform 0.1s ease';
            button.style.transform = 'scale(0.95)';
            button.style.cursor = 'grabbing';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
            button.style.cursor = 'grab';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.cursor = 'grab';
        });
    });


    const hero = document.querySelector('.hero');

    // Reset .hero layout
    Object.assign(hero.style, {
        display: 'block',
        minHeight: 'auto',
        height: 'auto',
        justifyContent: 'initial',
        alignItems: 'initial',
        paddingTop: '2rem',
        paddingBottom: '2rem',
    });

    // Hide the <h1> element inside .hero
    const heading = hero.querySelector('h1');
    if (heading) heading.style.display = 'none';

    // Reposition buttons-wrapper
    const buttonsWrapper = document.querySelector('.buttons-wrapper');
    Object.assign(buttonsWrapper.style, {
        marginTop: '0',
        paddingTop: '0',
        display: 'flex',
        justifyContent: 'center'
    });
}



function markLessonsAsDone(student, subject, lessons) {
    const saved = JSON.parse(localStorage.getItem(student) || '{}');
    if (!saved[subject]) saved[subject] = {};
    lessons.forEach(lesson => {
        saved[subject][lesson] = true;
    });
    localStorage.setItem(student, JSON.stringify(saved));
}


localStorage.clear(); // ⚠️ Clears everything in localStorage

markLessonsAsDone("JELWIN", "EVS", [
    // "Lesson 1 - Family & Friends",
    // "Lesson 2 - Going to the Mela",
    // "Lesson 3 - Celebrating Festivals"
]);

markLessonsAsDone("JELWIN", "HINDI", [
    // "Lesson 3 - Sher Ka Aasan",
    // "Lesson 2 - Thithaly",
    // "Lesson 1 - Chitra Katha"
]);

markLessonsAsDone("JELWIN", "MATHEMATICS", [
    // "Lesson 3 - Double Century",
    // "Lesson 2 - Toy Joy",
    // "Lesson 1 - What's in a Name"
     "Lesson 4 - Vacation With My Nani Maa",
    // "Lesson 5 - Fun With Shapes",
]);

markLessonsAsDone("JELWIN", "MALAYALAM", [
    // "Lesson 1 - വിട്ടയയ്ക്കുക",
    // "Lesson 2 - സന്തോഷവാനായ രാജകുമാരൻ",
    // "Lesson 3 - ഓണക്കാഴ്ച"
]);

markLessonsAsDone("JELWIN", "ENGLISH", [
    "Lesson 4 - Best Friends", 
    "Lesson 5 - Out in the Garden", 
    "Lesson 6 - Talking Toys", 
    "Lesson 7 - Paper Boats", 
    "Grammar 1 - Articles", 
    "Grammar 2 - Pronoun", 
    "Grammar 3 - Helping Verbs"
]);

markLessonsAsDone("JELWIN", "IT", [
    // "Lesson 1 - Understanding Computers",
    // "Lesson 5 - Let Us Paint"
]);

markLessonsAsDone("JEWEL", "GENERAL_SCIENCE", [
    // "Lesson 1 - The Ever Evolving World of Science",
    // "Lesson 2 - Exploring Substances - Basic, Acidic & Neutral"
]);

markLessonsAsDone("JEWEL", "HINDI", [
    // "Lesson 1 - Desh Hamara Pyara Pyara",
    // "Lesson 3 - Dadi Maa Ka Ashirvad",
    // "Lesson 2 - Onam Ka Tyohar"
]);

markLessonsAsDone("JEWEL", "MATHEMATICS", [
    // "Lesson 2 - Large Numbers",
    // "Lesson 3 - Arithmetic Expressions",
    // "Lesson 1 - Integers"
]);

markLessonsAsDone("JEWEL", "IT", [
    // "Lesson 2 - Cyber Security",
    // "Lesson 7 - Creating Animations With Canva",
    // "Lesson 1 - Introduction to Number System"
]);

markLessonsAsDone("JEWEL", "MALAYALAM", [
    // "Lesson 1 - ഇത് ആരുടെ ഭൂമി?",
    // "Lesson 2 - കുട്ടിക്കാലം"
]);

markLessonsAsDone("JEWEL", "ENGLISH", [
    // "Lesson 1 - Three Questions",
    // "Lesson 2 - The Squirrel",
    // "Lesson 3 - A Gift of Chappals",
    // "Lesson 4 - The Rebel",
    // "Lesson 1 (Supplementary Reader)"
]);

markLessonsAsDone("JEWEL", "SOCIAL_SCIENCE", [
    "Lesson 3 - Our Changing Earth (G)",
]);


function selectStudent(student) {
    const section = document.getElementById('progress-section');
    section.innerHTML = '';

    const saved = JSON.parse(localStorage.getItem(student) || '{}');
    const subjects = studentData[student];
    let total = 0, done = 0;

    for (const subject in subjects) {
        const card = document.createElement('div');
        card.className = 'subject';

        const title = document.createElement('h3');
        title.textContent = subject.replace(/_/g, ' ');
        card.appendChild(title);

        subjects[subject].forEach(lesson => {
            const checked = saved?.[subject]?.[lesson] || false;

            const label = document.createElement('label');
            label.style.display = 'block';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = checked;
            checkbox.addEventListener('click', (e) => e.preventDefault()); // ✅ fake readonly

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + lesson));
            card.appendChild(label);

            total++;
            if (checked) done++;
        });

        section.appendChild(card);
    }

    const percent = done === 0 ? 0 : Math.floor((done / total) * 100);
    const progressDiv = document.createElement('div');
    progressDiv.className = 'progress-container';
    progressDiv.innerHTML = `
      <h3 id="progress-text">Overall Progress: 0%</h3>
      <div class="progress-bar">
        <div class="progress-fill" style="width: 0%"></div>
      </div>
    `;
    section.insertBefore(progressDiv, section.firstChild);

    // Animate progress fill
    setTimeout(() => {
        const bar = section.querySelector('.progress-fill');
        bar.style.width = `${percent}%`;
    }, 100);

    // Animate number count from 0 to percent synced with bar (1s total)
    if (percent === 0) {
        progressText.textContent = `Overall Progress: 0%`;
        return;
    }

    let current = 0;
    const progressText = document.getElementById('progress-text');
    const duration = 1000; // match progress bar's CSS transition duration
    const stepTime = percent > 0 ? duration / percent : duration;

    const interval = setInterval(() => {
        current++;
        progressText.textContent = `Overall Progress: ${current}%`;
        if (current >= percent) clearInterval(interval);
    }, stepTime);


}

// ✅ Scroll sync for cyber background movement
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY / 1000;
    document.documentElement.style.setProperty('--scroll', scrollY);
});
