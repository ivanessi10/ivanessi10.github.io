const languageToggleBtn = document.getElementById('language-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Языковые словари
const languages = {
    ru: {
        name: "Иван Иванов",
        sectionAbout: "Обо мне",
        about: "Я опытный веб-разработчик с навыками в HTML, CSS и JavaScript.",
        sectionExperience: "Опыт работы",
        jobTitle: "Frontend Developer",
        jobTitlePrevious: "Junior Developer",
        sectionEducation: "Образование",
        degree: "Бакалавр компьютерных наук",
        sectionPortfolio: "Мои работы",
        project1Title: "Проект 1",
        project1Description: "Описание проекта 1.",
        project2Title: "Проект 2",
        project2Description: "Описание проекта 2.",
        contact: "Контакты: email@example.com | +7 123 456-78-90",
        languageToggle: "en",
    },
    en: {
        name: "Ivan Ivanov",
        sectionAbout: "About Me",
        about: "I am an experienced web developer skilled in HTML, CSS, and JavaScript.",
        sectionExperience: "Work Experience",
        jobTitle: "Frontend Developer",
        jobTitlePrevious: "Junior Developer",
        sectionEducation: "Education",
        degree: "Bachelor of Computer Science",
        sectionPortfolio: "My Works",
        project1Title: "Project 1",
        project1Description: "Description of Project 1.",
        project2Title: "Project 2",
        project2Description: "Description of Project 2.",
        contact: "Contact: email@example.com | +1 234 567-89-00",
        languageToggle: "ru",
    }
};

// Текущий язык
let currentLanguage = 'ru';

// Функция для обновления текста на странице
function updateLanguage() {
    const lang = languages[currentLanguage];
    document.getElementById('name').textContent = lang.name;
    document.getElementById('section-about').textContent = lang.sectionAbout;
    document.getElementById('about').textContent = lang.about;
    document.getElementById('section-experience').textContent = lang.sectionExperience;
    document.getElementById('job-title').textContent = lang.jobTitle;
    document.getElementById('job-title-previous').textContent = lang.jobTitlePrevious;
    document.getElementById('section-education').textContent = lang.sectionEducation;
    document.getElementById('degree').textContent = lang.degree;
    document.getElementById('section-portfolio').textContent = lang.sectionPortfolio;
    document.getElementById('project1-title').textContent = lang.project1Title;
    document.getElementById('project1-description').textContent = lang.project1Description;
    document.getElementById('project2-title').textContent = lang.project2Title;
    document.getElementById('project2-description').textContent = lang.project2Description;
    document.getElementById('contact').textContent = lang.contact;

    // Обновление иконки флага
    updateFlagIcon();
}

// Функция для обновления иконки флага
function updateFlagIcon() {
    const flagIcon = currentLanguage === 'ru' ? 'images/us.png' : 'images/ru.png';
    const altText = currentLanguage === 'ru' ? 'RU' : 'EN';
    const languageIcon = document.getElementById('language-icon');
    languageIcon.src = flagIcon;
    languageIcon.alt = altText;
}

// Обработчик смены языка
languageToggleBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    updateLanguage();
    localStorage.setItem('preferredLanguage', currentLanguage);
});

// Обработчик смены темы
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('preferredTheme', isDark ? 'dark' : 'light');
});

// Инициализация при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    // Установка языка
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    updateLanguage();

    // Установка темы
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
});
