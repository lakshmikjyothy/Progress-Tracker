const studentData = {
    JELWIN: {
      EVS: ["Lesson 1 - Family & Friends", "Lesson 2 - Life Around Us", "Lesson 3 - Celebrating Festivals"],
      HINDI: ["Lesson 1 - Chitra Katha", "Lesson 2 - Thithaly", "Lesson 3 - Sher Ka Aasan"],
      MALAYALAM: ["Lesson 1 - വിട്ടയയ്ക്കുക", "Lesson 2 - സന്തോഷവാനായ രാജകുമാരൻ", "Lesson 3 - ഓണക്കാഴ്ച"],
      IT: ["Lesson 1 - Understanding Computers", "Lesson 5 - Let Us Paint"],
      ENGLISH: ["Lesson 1 - Fun With Friends", "Lesson 2 - Colours", "Lesson 3 - Badal & Moti", "Lesson 2 - Best Friends", "Grammar 1 - Noun & Types of Noun", "Grammar 2 - Singular & Plural" ],
      MATHEMATICS: ["Lesson 1 - What's in a Name", "Lesson 2 - Toy Joy", "Lesson 3 - Double Century"]
    },
    JEWEL: {
      MATHEMATICS: ["Lesson 1 - Integers", "Lesson 2", "Lesson 3"],
      HINDI: ["Lesson 1", "Lesson 2", "Lesson 3"],
      IT: ["Lesson 1", "Lesson 2", "Lesson 3"],
      ENGLISH: ["Lesson 1", "Lesson 2", "Lesson 3"],
      MALAYALAM: ["Lesson 1", "Lesson 2", "Lesson 3"],
      SOCIAL_SCIENCE: ["Lesson 1", "Lesson 2", "Lesson 3"],
      GENERAL_SCIENCE: ["Lesson 1 - The Ever Evolving World of Science", "Lesson 2 - Exploring Substances - Basic, Acidic & Neutral", "Lesson 3 - Electricity Circuits & Its Components"],
    },
  };
  
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
        checkbox.disabled = true; // ✅ Disable checkbox (read-only mode)
  
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
  
  
  