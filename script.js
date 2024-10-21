const languageToggleBtn = document.getElementById('language-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Языковые словари
const languages = {
    ru: {
        name: "Иван Петруша",
        sectionAbout: "Обо мне",
        about: `Я опытный веб-разработчик, специализирующийся на создании современных и отзывчивых веб-приложений.
                Моя экспертиза охватывает работу с HTML, CSS, JavaScript, а также с такими фреймворками, как React и Vue.js.
                Я стремлюсь к чистому и эффективному коду, следуя передовым практикам разработки и тестирования.
                В течение последних нескольких лет я работал над множеством проектов, как в команде, так и самостоятельно.
                Мои главные цели - это повышение качества пользовательского интерфейса и обеспечение стабильности продукта.
                Постоянно учусь новым технологиям и стремлюсь к профессиональному росту.`,
        sectionExperience: "Опыт работы",
        jobTitle: "Frontend Developer",
        jobTitlePrevious: "Junior Developer",
        sectionEducation: "Образование",
        school: "Гимназия №2 г.Салават",
        schoolDates: "(2013 - 2024)",
        degree: "Прикладной анализ данных и искусственный интеллект",
        university: "НИУ ВШЭ Санкт-Петербург",
        companyCurrent: "Практики ОМП",
        companyPrevious: "Практики ОМП",
        dateRange: "(2024 - настоящее время)",
        sectionAchievements: "Мои достижения",
        achievement1: "Закончил 11 классов с красным аттестатом",
        achievement2: "Имеется VIP статус игрока на 1win",
        sectionPortfolio: "Мои работы",
        project1Title: "Casino Slot Machine",
        project1Description: "https://ivanessi10.github.io/cas/ (картинка кликабельна)",
        project2Title: "CV Project",
        project2Description: "https://ivanessi10.github.io/ (картинка кликабельна)",
        contact: "Контакты: ivanpetrusa4@gmail.com | +7 777 777-77-77",
        sectionAddress: "Адрес",
        address: "Санкт-Петербург, Россия"
    },
    en: {
        name: "Ivan Petrusha",
        sectionAbout: "About Me",
        about: `I am an experienced web developer specializing in creating modern and responsive web applications.
                My expertise includes working with HTML, CSS, JavaScript, and frameworks such as React and Vue.js.
                I strive for clean and efficient code, adhering to best practices in development and testing.
                Over the past few years, I have worked on numerous projects, both as part of a team and individually.
                My main goals are to enhance user interface quality and ensure product stability.
                I am continuously learning new technologies and striving for professional growth.`,
        sectionExperience: "Work Experience",
        jobTitle: "Frontend Developer",
        jobTitlePrevious: "Junior Developer",
        sectionEducation: "Education",
        school: "Gymnasium №2, Salavat",
        schoolDates: "(2013 - 2024)",
        degree: "Applied Data Analysis and Artificial Intelligence",
        university: "HSE University Saint Petersburg",
        companyCurrent: "OMP Practices",
        companyPrevious: "OMP Practices",
        dateRange: "(2024 - Present)",
        sectionAchievements: "My Achievements",
        achievement1: "Graduated from high school with honors",
        achievement2: "Have VIP status as a player on 1win",
        sectionPortfolio: "My Works",
        project1Title: "Casino Slot Machine",
        project1Description: "https://ivanessi10.github.io/cas/ (Picture is clickable)",
        project2Title: "CV Project",
        project2Description: "https://ivanessi10.github.io/ (Picture is clickable)",
        contact: "Contact: ivanpetrusa4@gmail.com | +7 777 777-77-77",
        sectionAddress: "Address",
        address: "Saint Petersburg, Russia"
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
    document.getElementById('school').textContent = lang.school; // Школа
    document.getElementById('school-dates').textContent = lang.schoolDates; // Даты школы
    document.getElementById('degree').textContent = lang.degree;
    document.getElementById('university').textContent = lang.university; // Университет
    document.getElementById('company-current').textContent = lang.companyCurrent; // Текущая компания
    document.getElementById('company-previous').textContent = lang.companyPrevious; // Предыдущая компания
    document.querySelectorAll('.date-range').forEach(el => el.textContent = lang.dateRange); // Даты работы
    document.getElementById('section-achievements').textContent = lang.sectionAchievements; // Заголовок секции достижений
    document.getElementById('achievement1').textContent = lang.achievement1; // Первое достижение
    document.getElementById('achievement2').textContent = lang.achievement2; // Второе достижение
    document.getElementById('section-portfolio').textContent = lang.sectionPortfolio;
    document.getElementById('project1-title').textContent = lang.project1Title;
    document.getElementById('project1-description').textContent = lang.project1Description;
    document.getElementById('project2-title').textContent = lang.project2Title;
    document.getElementById('project2-description').textContent = lang.project2Description;
    document.getElementById('contact').textContent = lang.contact;
    document.getElementById('section-address').textContent = lang.sectionAddress;
    document.getElementById('address').textContent = lang.address;

    // Обновление иконки флага
    updateFlagIcon();
}

// Функция для обновления иконки флага
function updateFlagIcon() {
    const flagIcon = currentLanguage === 'ru'
        ? "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
    const altText = currentLanguage === 'ru' ? 'EN' : 'RU';
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
