const studentData = {
    JELWIN: {
      EVS: ["Lesson 1 - Family & Friends", "Lesson 2 - Going to the Mela", "Lesson 3 - Celebrating Festivals"],
      HINDI: ["Lesson 1 - Chitra Katha", "Lesson 2 - Thithaly", "Lesson 3 - Sher Ka Aasan"],
      MALAYALAM: ["Lesson 1 - വിട്ടയയ്ക്കുക", "Lesson 2 - സന്തോഷവാനായ രാജകുമാരൻ", "Lesson 3 - ഓണക്കാഴ്ച"],
      IT: ["Lesson 1 - Understanding Computers", "Lesson 5 - Let Us Paint"],
      ENGLISH: ["Lesson 1 - Fun With Friends", "Lesson 2 - Colours", "Lesson 3 - Badal & Moti", "Lesson 4 - Best Friends", "Grammar 1 - Noun & Types of Noun", "Grammar 2 - Singular & Plural" ],
      MATHEMATICS: ["Lesson 1 - What's in a Name", "Lesson 2 - Toy Joy", "Lesson 3 - Double Century"]
    },
    JEWEL: {
      MATHEMATICS: ["Lesson 1 - Integers", "Lesson 2 - Large Numbers", "Lesson 3 - Arithmetic Expressions"],
      HINDI: ["Lesson 1 - Desh Hamara Pyara Pyara", "Lesson 2 - Onam Ka Tyohar", "Lesson 3 - Dadi Maa Ka Ashirvad"],
      IT: ["Lesson 1 - Introduction to Number System", "Lesson 2 - Cyber Security", "Lesson 7 - Creating Animations With Canva"],
      ENGLISH: ["Lesson 1 - Three Questions", "Lesson 2 - The Squirrel", "Lesson 3 - A Gift of Chappals", "Lesson 4 - The Rebel", "Lesson 1 (Supplementary Reader)"],
      MALAYALAM: ["Lesson 1 - ഇത് ആരുടെ ഭൂമി?", "Lesson 2 - കുട്ടിക്കാലം"],
      SOCIAL_SCIENCE: ["Lesson 1 - Tracing Changes (H)", "Lesson 2 - New Kings & Kingdoms (H)", "Lesson 1 - Environment (G)", "Lesson 2 - Inside Our Earth (G)", "Lesson 1 - On Equality (P)", "Lesson 2 - Role of the Government in Health (P)"],
      GENERAL_SCIENCE: ["Lesson 1 - The Ever Evolving World of Science", "Lesson 2 - Exploring Substances - Basic, Acidic & Neutral"],
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
    "Lesson 1 - Family & Friends",
    "Lesson 2 - Going to the Mela", 
    "Lesson 3 - Celebrating Festivals"
  ]);

  markLessonsAsDone("JELWIN", "HINDI", [
    "Lesson 3 - Sher Ka Aasan",
    "Lesson 2 - Thithaly",
    "Lesson 1 - Chitra Katha" 
  ]);

  markLessonsAsDone("JELWIN", "MATHEMATICS", [
    "Lesson 3 - Double Century", 
    "Lesson 2 - Toy Joy",
    "Lesson 1 - What's in a Name"
  ]);

  markLessonsAsDone("JELWIN", "MALAYALAM", [
    "Lesson 1 - വിട്ടയയ്ക്കുക", 
    "Lesson 2 - സന്തോഷവാനായ രാജകുമാരൻ",
    "Lesson 3 - ഓണക്കാഴ്ച"
  ]);
  
  markLessonsAsDone("JELWIN", "ENGLISH", [
    "Lesson 1 - Fun With Friends", 
    "Lesson 2 - Colours", 
    "Lesson 3 - Badal & Moti", 
    "Lesson 4 - Best Friends", 
    "Grammar 1 - Noun & Types of Noun",
    "Grammar 2 - Singular & Plural"
  ]);


  markLessonsAsDone("JEWEL", "GENERAL_SCIENCE", [
    "Lesson 1 - The Ever Evolving World of Science", 
    "Lesson 2 - Exploring Substances - Basic, Acidic & Neutral"
  ]);

  markLessonsAsDone("JEWEL", "HINDI", [
    "Lesson 1 - Desh Hamara Pyara Pyara",
    "Lesson 3 - Dadi Maa Ka Ashirvad",
    "Lesson 2 - Onam Ka Tyohar"
  ]);

  markLessonsAsDone("JEWEL", "MATHEMATICS", [
    "Lesson 2 - Large Numbers",
    "Lesson 3 - Arithmetic Expressions",
    "Lesson 1 - Integers"
  ]);

  markLessonsAsDone("JEWEL", "IT", [
    "Lesson 2 - Cyber Security", 
    "Lesson 7 - Creating Animations With Canva",
    "Lesson 1 - Introduction to Number System"
  ]);

  markLessonsAsDone("JEWEL", "MALAYALAM", [
    "Lesson 1 - ഇത് ആരുടെ ഭൂമി?",
    "Lesson 2 - കുട്ടിക്കാലം"
  ]);

  markLessonsAsDone("JEWEL", "ENGLISH", [
    "Lesson 1 - Three Questions", 
    "Lesson 2 - The Squirrel", 
    "Lesson 3 - A Gift of Chappals",
    "Lesson 4 - The Rebel",
    // "Lesson 1 (Supplementary Reader)"
  ]);

  markLessonsAsDone("JEWEL", "SOCIAL_SCIENCE", [
    "Lesson 1 - Environment (G)",  
    "Lesson 2 - Role of the Government in Health (P)",
    "Lesson 1 - Tracing Changes (H)", 
    "Lesson 2 - Inside Our Earth (G)",
    "Lesson 1 - On Equality (P)",
    // "Lesson 2 - New Kings & Kingdoms (H)",
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
  
    const percent = Math.round((done / total) * 100);
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
  
