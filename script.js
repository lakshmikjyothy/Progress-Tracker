const studentData = {
    JELWIN: {
      EVS: ["Lesson 1 - Family & Friends", "Lesson 2 - Going to the Mela", "Lesson 3 - Celebrating Festivals"],
      HINDI: ["Lesson 1 - Chitra Katha", "Lesson 2 - Thithaly", "Lesson 3 - Sher Ka Aasan"],
      MALAYALAM: ["Lesson 1 - വിട്ടയയ്ക്കുക", "Lesson 2 - സന്തോഷവാനായ രാജകുമാരൻ", "Lesson 3 - ഓണക്കാഴ്ച"],
      IT: ["Lesson 1 - Understanding Computers", "Lesson 5 - Let Us Paint"],
      ENGLISH: ["Lesson 1 - Fun With Friends", "Lesson 2 - Colours", "Lesson 3 - Badal & Moti", "Lesson 2 - Best Friends", "Grammar 1 - Noun & Types of Noun", "Grammar 2 - Singular & Plural" ],
      MATHEMATICS: ["Lesson 1 - What's in a Name", "Lesson 2 - Toy Joy", "Lesson 3 - Double Century"]
    },
    JEWEL: {
      MATHEMATICS: ["Lesson 1 - Integers", "Lesson 2 - Large Numbers", "Lesson 3 - Arithmetic Expressions"],
      HINDI: ["Lesson 1 - Desh Hamara Pyara Pyara", "Lesson 2 - Onam Ka Tyohar", "Lesson 3 - Dadi Maa Ka Ashirvad"],
      IT: ["Lesson 1 - Introduction to Number System", "Lesson 2 - Cyber Security", "Lesson 7 - Creating Animations With Canva"],
      ENGLISH: ["Lesson 1 - Three Questions", "Lesson 2 - The Squirrel", "Lesson 3 - A Gift of Chappals", "Lesson 4 - The Rebel", "Lesson 1 (Supplementary Reader)"],
      MALAYALAM: ["Lesson 1", "Lesson 2", "Lesson 3"],
      SOCIAL_SCIENCE: ["Lesson 1 - Tracing Changes (H)", "Lesson 2 - New Kings & Kingdoms (H)", "Lesson 1 - Environment (G)", "Lesson 2 - Inside Our Earth (G)", "Lesson 1 - On Equality (P)", "Lesson 2 - Role of the Government in Health"],
      GENERAL_SCIENCE: ["Lesson 1 - The Ever Evolving World of Science", "Lesson 2 - Exploring Substances - Basic, Acidic & Neutral", "Lesson 3 - Electricity Circuits & Its Components"],
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
      paddingBottom: '1rem',
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
    "Lesson 3 - Double Century"
  ]);


  markLessonsAsDone("JEWEL", "GENERAL_SCIENCE", [
    "Lesson 3 - Electricity Circuits & Its Components"
  ]);

  markLessonsAsDone("JEWEL", "HINDI", [
    "Lesson 1 - Desh Hamara Pyara Pyara"
  ]);

  markLessonsAsDone("JEWEL", "MATHEMATICS", [
    "Lesson 2 - Large Numbers",
    "Lesson 3 - Arithmetic Expressions"
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
      <h3>Overall Progress: ${percent}%</h3>
      <div class="progress-bar">
        <div class="progress-fill" style="width: 0%"></div>
      </div>
    `;
    section.appendChild(progressDiv);
  
    // Animate progress fill
    setTimeout(() => {
      const bar = section.querySelector('.progress-fill');
      bar.style.width = `${percent}%`;
    }, 100);
  }
  
  // ✅ Scroll sync for cyber background movement
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY / 1000;
  document.documentElement.style.setProperty('--scroll', scrollY);
});
  
