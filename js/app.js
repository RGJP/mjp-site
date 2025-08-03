document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURATION ---
    const routes = {
        '/': 'pages/home.html',
        '/about': 'pages/about.html',
        '/bruine': 'pages/bruine.html',
        '/contact': 'pages/contact.html',
        '/passage': 'pages/passage.html',
    };

    const imageFilenames = {
        '/': [
            'Galerie-1.jpg',   'Galerie-2.jpg',   'Galerie-3.jpg',   'Galerie-4.jpg',   'Galerie-5.jpg',
            'Galerie-6.jpg',   'Galerie-7.jpg',   'Galerie-8.jpg',   'Galerie-9.jpg',   'Galerie-10.jpg',
            'Galerie-11.jpg',  'Galerie-12.jpg',  'Galerie-13.jpg',  'Galerie-14.jpg',  'Galerie-15.jpg',
            'Galerie-16.jpg',  'Galerie-17.jpg',  'Galerie-18.jpg',  'Galerie-19.jpg',  'Galerie-20.jpg',
            'Galerie-21.jpg',  'Galerie-22.jpg',  'Galerie-23.jpg',  'Galerie-24.jpg',  'Galerie-25.jpg',
            'Galerie-26.jpg',  'Galerie-27.jpg',  'Galerie-28.jpg',  'Galerie-29.jpg',  'Galerie-30.jpg',
            'Galerie-31.jpg',  'Galerie-32.jpg',  'Galerie-33.jpg',  'Galerie-34.jpg',  'Galerie-35.jpg',
            'Galerie-36.jpg',  'Galerie-37.jpg',  'Galerie-38.jpg',  'Galerie-39.jpg',  'Galerie-40.jpg',
            'Galerie-41.jpg',  'Galerie-42.jpg',  'Galerie-43.jpg',  'Galerie-44.jpg',  'Galerie-45.jpg',
            'Galerie-46.jpg',  'Galerie-47.jpg',  'Galerie-48.jpg',  'Galerie-49.jpg',  'Galerie-50.jpg',
            'Galerie-51.jpg',  'Galerie-52.jpg',  'Galerie-53.jpg',  'Galerie-54.jpg',  'Galerie-55.jpg',
            'Galerie-56.jpg',  'Galerie-57.jpg',  'Galerie-58.jpg',  'Galerie-59.jpg',  'Galerie-60.jpg',
            'Galerie-61.jpg',  'Galerie-62.jpg',  'Galerie-63.jpg',  'Galerie-64.jpg',  'Galerie-65.jpg',
            'Galerie-66.jpg',  'Galerie-67.jpg',  'Galerie-68.jpg',  'Galerie-69.jpg',  'Galerie-70.jpg',
            'Galerie-71.jpg',  'Galerie-72.jpg',  'Galerie-73.jpg',  'Galerie-74.jpg',  'Galerie-75.jpg',
            'Galerie-76.jpg',  'Galerie-77.jpg',  'Galerie-78.jpg',  'Galerie-79.jpg',  'Galerie-80.jpg',
            'Galerie-81.jpg',  'Galerie-82.jpg',  'Galerie-83.jpg',  'Galerie-84.jpg',  'Galerie-85.jpg',
            'Galerie-86.jpg',  'Galerie-87.jpg',  'Galerie-88.jpg',  'Galerie-89.jpg',  'Galerie-90.jpg',
            'Galerie-91.jpg',  'Galerie-92.jpg',  'Galerie-93.jpg',  'Galerie-94.jpg',  'Galerie-95.jpg',
            'Galerie-96.jpg',  'Galerie-97.jpg',  'Galerie-98.jpg',  'Galerie-99.jpg',  'Galerie-100.jpg',
            'Galerie-101.jpg', 'Galerie-102.jpg', 'Galerie-103.jpg', 'Galerie-104.jpg', 'Galerie-105.jpg',
            'Galerie-106.jpg', 'Galerie-107.jpg', 'Galerie-108.jpg', 'Galerie-109.jpg', 'Galerie-110.jpg',
            'Galerie-111.jpg', 'Galerie-112.jpg', 'Galerie-113.jpg', 'Galerie-114.jpg', 'Galerie-115.jpg',
            'Galerie-116.jpg', 'Galerie-117.jpg', 'Galerie-118.jpg', 'Galerie-119.jpg', 'Galerie-120.jpg',
            'Galerie-121.jpg', 'Galerie-122.jpg', 'Galerie-123.jpg', 'Galerie-124.jpg', 'Galerie-125.jpg',
            'Galerie-126.jpg', 'Galerie-127.jpg', 'Galerie-128.jpg', 'Galerie-129.jpg', 'Galerie-130.jpg',
            'Galerie-131.jpg', 'Galerie-132.jpg', 'Galerie-133.jpg', 'Galerie-134.jpg', 'Galerie-135.jpg',
            'Galerie-136.jpg', 'Galerie-137.jpg', 'Galerie-138.jpg', 'Galerie-139.jpg', 'Galerie-140.jpg',
            'Galerie-141.jpg', 'Galerie-142.jpg', 'Galerie-143.jpg', 'Galerie-144.jpg', 'Galerie-145.jpg'
        ],
        '/bruine': [
            '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
            '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
            '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '29.jpg', '30.jpg',
            '31.jpg', '32.jpg', '33.jpg', '34.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
            '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
            '51.jpg', '54.jpg', '55.jpg', '56.jpg', '57.jpg', '58.jpg', '59.jpg', '60.jpg', '61.jpg', '62.jpg',
            '63.jpg', '64.jpg', '65.jpg', '66.jpg', '67.jpg', '68.jpg', '69.jpg', '70.jpg', '71.jpg', '72.jpg',
            '73.jpg', '74.jpg', '75.jpg', '76.jpg', '77.jpg', '78.jpg', '80.jpg', '81.jpg', '82.jpg', '83.jpg',
            '84.jpg', '85.jpg', '86.jpg', '87.jpg', '88.jpg', '89.jpg', '90.jpg', '91.jpg', '92.jpg', '93.jpg',
            '94.jpg', '95.jpg', '96.jpg', '97.jpg', '98.jpg', '99.jpg', '100.jpg', '101.jpg', '102.jpg', '103.jpg',
            '104.jpg', '105.jpg', '106.jpg', '107.jpg', '108.jpg', '109.jpg', '110.jpg', '111.jpg', '112.jpg', '113.jpg',
            '114.jpg', '115.jpg', '116.jpg', '117.jpg'
        ],
        '/passage': [
            'Photos Passage-1.jpg', 'Photos Passage-2.jpg', 'Photos Passage-3.jpg',
            'Photos Passage-4.jpg', 'Photos Passage-5.jpg', 'Photos Passage-6.jpg',
            'Photos Passage-7.jpg', 'Photos Passage-8.jpg', 'Photos Passage-9.jpg',
            'Photos Passage-10.jpg', 'Photos Passage-11.jpg', 'Photos Passage-12.jpg',
            'Photos Passage-13.jpg', 'Photos Passage-14.jpg'
        ],
        '/contact': [
            'contact/contact1.jpg',
            'contact/contact2.jpg',
            'contact/contact3.jpg',
            'contact/contact4.jpg'
        ]
    };

    const thumbPath = {
        '/': 'images/thumbs/',
        '/bruine': 'images/bruine/thumbs/',
        '/passage': 'images/passage/thumbs/',
        '/contact': 'images/'
    };

    const fullsizePath = {
        '/': 'images/fullsize/',
        '/bruine': 'images/bruine/fullsize/',
        '/passage': 'images/passage/fullsize/',
        '/contact': 'images/'
    };

    const translations = {
        en: {
            siteTitle: "Marius Jomphe ‧ Photography",
            pageTitleGallery: "Gallery • Marius Jomphe Photography",
            pageTitleAbout: "About • Marius Jomphe Photography",
            pageTitleBruineLivre: "Bruine (Book) • Marius Jomphe Photography",
            pageTitlePassageLivre: "Passage (Book) • Marius Jomphe Photography",
            pageTitleContact: "Contact • Marius Jomphe Photography",
            navImages: "GALLERY",
            navProjects: "PROJECTS",
            projectSonde: "SONDE",
            projectBruine: "BRUINE",
            projectPassage: "PASSAGE",
            navAbout: "ABOUT",
            navContact: "CONTACT",
            exploreText: "Explore",
            themeToggleDark: "THEME",
            themeToggleLight: "THEME",
            languageToggleText: "🌐 FR/EN",
            footerRights: "All rights reserved.",
            aboutHeading: "About the Artist",
            biographyTitle: "Biography",
            bioParagraph1: "Marius Jomphe was born in Havre St-Pierre, on the North Shore of Quebec.",
            bioParagraph2: "He obtained his Bachelor of Arts from the Université du Québec à Montréal in 1976. He then taught for thirty years at the Cégep de la Gaspésie et des Îles while regularly exhibiting his work.",
            bioParagraph3: "Since 1990, he has dedicated himself exclusively to photography. His interest in science (astrobiology, neurosciences) influences his photographic practice, which includes the territories of the Gaspé Peninsula as well as the Rivière-au-Tonnerre region on the North Shore.",
            bioParagraph4: "He lives and works in Gaspé.",
            artistStatementTitle: "The enigma of reality",
            heisenbergQuote: `"We must remember that what we observe is not nature in itself, but nature subjected to our method of questioning."`,
            heisenbergAttribution: "Werner Heisenberg",
            perceptionText1: "Perception, rather than being a passive recording of a supposed objective external reality, appears more as an active process of interpretation, developed by the brain for effective adaptive interaction with the world around us. Through photography, we can therefore question the nature of the visible. By forcing us to consider the profound complexity of what is seen, it can consequently open us to a whole new experience of the world.",
            perceptionText2: "In this sense, photographs should be like open doors where the viewer can enter a world of possibilities. Images are remarkably elusive objects, charged with multiple significant potentials. My intention is therefore to question and demonstrate this relativity of perception in order to point towards something greater, something deeper than oneself, and thereby offer a glimpse into some of the mystery of the world.",
            photoCredit: " ",
            bookGalleryTitle: "Book Excerpt",
            contactHeading: "Contact",
            contactText: "For any questions, purchases, collaboration requests, exhibition proposals, or requests to use my work, feel free to contact me directly. I would be happy to talk with you.",
            emailButtonText: "E-mail",
            buyButtonMainText: "Get the limited edition book",
            buyButtonPriceText: "50 USD ‧ 65 CAD",
        },
        fr: {
            siteTitle: "Marius Jomphe ‧ Photographie",
            pageTitleGallery: "Galerie • Marius Jomphe Photographie",
            pageTitleAbout: "À Propos • Marius Jomphe Photographie",
            pageTitleBruineLivre: "Bruine (Livre) • Marius Jomphe Photographie",
            pageTitlePassageLivre: "Passage (Livre) • Marius Jomphe Photographie",
            pageTitleContact: "Contact • Marius Jomphe Photographie",
            navImages: "GALERIE",
            navProjects: "PROJETS",
            projectSonde: "SONDE",
            projectBruine: "BRUINE",
            projectPassage: "PASSAGE",
            navAbout: "À PROPOS",
            navContact: "CONTACT",
            exploreText: "Explorer",
            themeToggleDark: "THÈME",
            themeToggleLight: "THÈME",
            languageToggleText: "🌐 FR/EN",
            footerRights: "Tous droits réservés.",
            aboutHeading: "À Propos de l'Artiste",
            biographyTitle: "Biographie",
            bioParagraph1: "Marius Jomphe est né à Havre St-Pierre, sur la Côte-Nord au Québec.",
            bioParagraph2: "Il obtient son Baccalauréat ès Arts de l’Université du Québec à Montréal en 1976. Il enseigne ensuite durant trente ans au Cégep de la Gaspésie et des Îles tout en exposant régulièrement son travail.",
            bioParagraph3: "Depuis 1990, il se consacre exclusivement à la photographie. Son intérêt pour la science (astrobiologie, neurosciences) marque sa pratique photographique qui comprend les territoires de la Pointe de la Gaspésie de même que la région de Rivière-au-Tonnerre sur la Côte-Nord.",
            bioParagraph4: "Il vit et travaille à Gaspé.",
            artistStatementTitle: "L'énigme du réel",
            heisenbergQuote: `"Nous devons nous souvenir que ce que nous observons n’est pas la nature en elle-même, mais la nature soumise à notre méthode de questionnement."`,
            heisenbergAttribution: "Werner Heisenberg",
            perceptionText1: "La perception, au lieu d’être l’enregistrement passif d’une supposée réalité extérieure objective, apparaît davantage comme un processus actif d’interprétation, élaboré par le cerveau, en vue d’une interaction adaptative efficace au monde qui nous entoure. Au moyen de la photographie, nous pouvons donc nous interroger sur la nature du visible. En nous obligeant à considérer la profonde complexité de ce qui est vu, celle-ci peut par conséquent nous ouvrir à une toute nouvelle expérience du monde.",
            perceptionText2: "En ce sens, les photographies devraient être comme des portes ouvertes où le spectateur peut entrer dans un monde de possibilités. Les images sont des objets remarquablement insaisissables, chargés de multiples potentiels significatifs. Mon intention est donc de questionner et de démontrer cette relativité de la perception afin de pointer vers quelque chose de plus grand, de plus profond que soi, et d’offrir ainsi un aperçu d’une partie du mystère du monde.",
            photoCredit: " ",
            bookGalleryTitle: "Extrait du Livre",
            contactHeading: "Contact",
            contactText: "Pour toute question, achat, demande de collaboration, proposition d’exposition ou demande d’utilisation des œuvres, n’hésitez pas à me contacter directement. Je me ferai un plaisir d’échanger avec vous.",
            emailButtonText: "Courriel",
            buyButtonMainText: "Obtenir le livre en édition limitée",
            buyButtonPriceText: "50 USD ‧ 65 CAD",
        }
    };

    const appRoot = document.getElementById('app-root');
    const themeToggleButton = document.getElementById('themeToggle');
    const languageToggleButton = document.getElementById('languageToggle');
    const musicToggleButton = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('background-music');
    const currentYearSpan = document.getElementById('currentYear');

    let currentLanguage = localStorage.getItem('language') || 'en';
    let currentTheme = localStorage.getItem('theme') || 'light';

    const router = async (e) => {
        e.preventDefault();
        const path = e.target.pathname;
        window.history.pushState({}, "", path);
        await loadContent(path);
    };

    const loadContent = async (path) => {
        const route = routes[path] || routes['/'];
        const response = await fetch(route);
        const html = await response.text();
        appRoot.innerHTML = html;
        setActiveLink(path);
        applyLanguage(currentLanguage);
        initPage(path);
    };

    const setActiveLink = (path) => {
        document.querySelectorAll('.main-nav a').forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    const applyLanguage = (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        if (languageToggleButton) {
            languageToggleButton.textContent = translations[lang]?.languageToggleText || (lang === 'en' ? '🌐 FRANÇAIS' : '🌐 ENGLISH');
        }
        applyTheme(currentTheme);
    };

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (themeToggleButton) {
            const toggleDarkText = themeToggleButton.querySelector('[data-lang-key="themeToggleDark"]');
            const toggleLightText = themeToggleButton.querySelector('[data-lang-key="themeToggleLight"]');
            if (toggleDarkText && toggleLightText) {
                if (theme === 'dark') {
                    toggleDarkText.style.display = 'none';
                    toggleLightText.style.display = 'inline';
                } else {
                    toggleDarkText.style.display = 'inline';
                    toggleLightText.style.display = 'none';
                }
            }
        }
    };

    let currentImageIndex = 0;
    let viewerImageSources = [];

    const randomImageViewerPaths = [
        'images/bruine/fullsize/1.jpg', 'images/bruine/fullsize/10.jpg', 'images/bruine/fullsize/100.jpg', 'images/bruine/fullsize/101.jpg', 'images/bruine/fullsize/102.jpg', 'images/bruine/fullsize/103.jpg', 'images/bruine/fullsize/104.jpg', 'images/bruine/fullsize/105.jpg', 'images/bruine/fullsize/106.jpg', 'images/bruine/fullsize/107.jpg', 'images/bruine/fullsize/108.jpg', 'images/bruine/fullsize/109.jpg', 'images/bruine/fullsize/11.jpg', 'images/bruine/fullsize/110.jpg', 'images/bruine/fullsize/111.jpg', 'images/bruine/fullsize/112.jpg', 'images/bruine/fullsize/113.jpg', 'images/bruine/fullsize/114.jpg', 'images/bruine/fullsize/115.jpg', 'images/bruine/fullsize/116.jpg', 'images/bruine/fullsize/117.jpg', 'images/bruine/fullsize/12.jpg', 'images/bruine/fullsize/13.jpg', 'images/bruine/fullsize/14.jpg', 'images/bruine/fullsize/15.jpg', 'images/bruine/fullsize/16.jpg', 'images/bruine/fullsize/17.jpg', 'images/bruine/fullsize/18.jpg', 'images/bruine/fullsize/19.jpg', 'images/bruine/fullsize/2.jpg', 'images/bruine/fullsize/20.jpg', 'images/bruine/fullsize/21.jpg', 'images/bruine/fullsize/22.jpg', 'images/bruine/fullsize/23.jpg', 'images/bruine/fullsize/24.jpg', 'images/bruine/fullsize/25.jpg', 'images/bruine/fullsize/26.jpg', 'images/bruine/fullsize/27.jpg', 'images/bruine/fullsize/29.jpg', 'images/bruine/fullsize/3.jpg', 'images/bruine/fullsize/30.jpg', 'images/bruine/fullsize/31.jpg', 'images/bruine/fullsize/32.jpg', 'images/bruine/fullsize/33.jpg', 'images/bruine/fullsize/34.jpg', 'images/bruine/fullsize/36.jpg', 'images/bruine/fullsize/37.jpg', 'images/bruine/fullsize/38.jpg', 'images/bruine/fullsize/39.jpg', 'images/bruine/fullsize/4.jpg', 'images/bruine/fullsize/40.jpg', 'images/bruine/fullsize/41.jpg', 'images/bruine/fullsize/42.jpg', 'images/bruine/fullsize/43.jpg', 'images/bruine/fullsize/44.jpg', 'images/bruine/fullsize/45.jpg', 'images/bruine/fullsize/46.jpg', 'images/bruine/fullsize/47.jpg', 'images/bruine/fullsize/48.jpg', 'images/bruine/fullsize/49.jpg', 'images/bruine/fullsize/5.jpg', 'images/bruine/fullsize/50.jpg', 'images/bruine/fullsize/51.jpg', 'images/bruine/fullsize/54.jpg', 'images/bruine/fullsize/55.jpg', 'images/bruine/fullsize/56.jpg', 'images/bruine/fullsize/57.jpg', 'images/bruine/fullsize/58.jpg', 'images/bruine/fullsize/59.jpg', 'images/bruine/fullsize/6.jpg', 'images/bruine/fullsize/60.jpg', 'images/bruine/fullsize/61.jpg', 'images/bruine/fullsize/62.jpg', 'images/bruine/fullsize/63.jpg', 'images/bruine/fullsize/64.jpg', 'images/bruine/fullsize/65.jpg', 'images/bruine/fullsize/66.jpg', 'images/bruine/fullsize/67.jpg', 'images/bruine/fullsize/68.jpg', 'images/bruine/fullsize/69.jpg', 'images/bruine/fullsize/7.jpg', 'images/bruine/fullsize/70.jpg', 'images/bruine/fullsize/71.jpg', 'images/bruine/fullsize/72.jpg', 'images/bruine/fullsize/73.jpg', 'images/bruine/fullsize/74.jpg', 'images/bruine/fullsize/75.jpg', 'images/bruine/fullsize/76.jpg', 'images/bruine/fullsize/77.jpg', 'images/bruine/fullsize/78.jpg', 'images/bruine/fullsize/8.jpg', 'images/bruine/fullsize/80.jpg', 'images/bruine/fullsize/81.jpg', 'images/bruine/fullsize/82.jpg', 'images/bruine/fullsize/83.jpg', 'images/bruine/fullsize/84.jpg', 'images/bruine/fullsize/85.jpg', 'images/bruine/fullsize/86.jpg', 'images/bruine/fullsize/87.jpg', 'images/bruine/fullsize/88.jpg', 'images/bruine/fullsize/89.jpg', 'images/bruine/fullsize/9.jpg', 'images/bruine/fullsize/90.jpg', 'images/bruine/fullsize/91.jpg', 'images/bruine/fullsize/92.jpg', 'images/bruine/fullsize/93.jpg', 'images/bruine/fullsize/94.jpg', 'images/bruine/fullsize/95.jpg', 'images/bruine/fullsize/96.jpg', 'images/bruine/fullsize/97.jpg', 'images/bruine/fullsize/98.jpg', 'images/bruine/fullsize/99.jpg',
        'images/fullsize/Galerie-1.jpg', 'images/fullsize/Galerie-10.jpg', 'images/fullsize/Galerie-100.jpg', 'images/fullsize/Galerie-101.jpg', 'images/fullsize/Galerie-102.jpg', 'images/fullsize/Galerie-103.jpg', 'images/fullsize/Galerie-104.jpg', 'images/fullsize/Galerie-105.jpg', 'images/fullsize/Galerie-106.jpg', 'images/fullsize/Galerie-107.jpg', 'images/fullsize/Galerie-108.jpg', 'images/fullsize/Galerie-109.jpg', 'images/fullsize/Galerie-11.jpg', 'images/fullsize/Galerie-110.jpg', 'images/fullsize/Galerie-111.jpg', 'images/fullsize/Galerie-112.jpg', 'images/fullsize/Galerie-113.jpg', 'images/fullsize/Galerie-114.jpg', 'images/fullsize/Galerie-115.jpg', 'images/fullsize/Galerie-116.jpg', 'images/fullsize/Galerie-117.jpg', 'images/fullsize/Galerie-118.jpg', 'images/fullsize/Galerie-119.jpg', 'images/fullsize/Galerie-12.jpg', 'images/fullsize/Galerie-120.jpg', 'images/fullsize/Galerie-121.jpg', 'images/fullsize/Galerie-122.jpg', 'images/fullsize/Galerie-123.jpg', 'images/fullsize/Galerie-124.jpg', 'images/fullsize/Galerie-125.jpg', 'images/fullsize/Galerie-126.jpg', 'images/fullsize/Galerie-127.jpg', 'images/fullsize/Galerie-128.jpg', 'images/fullsize/Galerie-129.jpg', 'images/fullsize/Galerie-13.jpg', 'images/fullsize/Galerie-130.jpg', 'images/fullsize/Galerie-131.jpg', 'images/fullsize/Galerie-132.jpg', 'images/fullsize/Galerie-133.jpg', 'images/fullsize/Galerie-134.jpg', 'images/fullsize/Galerie-135.jpg', 'images/fullsize/Galerie-136.jpg', 'images/fullsize/Galerie-137.jpg', 'images/fullsize/Galerie-138.jpg', 'images/fullsize/Galerie-139.jpg', 'images/fullsize/Galerie-14.jpg', 'images/fullsize/Galerie-140.jpg', 'images/fullsize/Galerie-141.jpg', 'images/fullsize/Galerie-142.jpg', 'images/fullsize/Galerie-143.jpg', 'images/fullsize/Galerie-144.jpg', 'images/fullsize/Galerie-145.jpg', 'images/fullsize/Galerie-15.jpg', 'images/fullsize/Galerie-16.jpg', 'images/fullsize/Galerie-17.jpg', 'images/fullsize/Galerie-18.jpg', 'images/fullsize/Galerie-19.jpg', 'images/fullsize/Galerie-2.jpg', 'images/fullsize/Galerie-20.jpg', 'images/fullsize/Galerie-21.jpg', 'images/fullsize/Galerie-22.jpg', 'images/fullsize/Galerie-23.jpg', 'images/fullsize/Galerie-24.jpg', 'images/fullsize/Galerie-25.jpg', 'images/fullsize/Galerie-26.jpg', 'images/fullsize/Galerie-27.jpg', 'images/fullsize/Galerie-28.jpg', 'images/fullsize/Galerie-29.jpg', 'images/fullsize/Galerie-3.jpg', 'images/fullsize/Galerie-30.jpg', 'images/fullsize/Galerie-31.jpg', 'images/fullsize/Galerie-32.jpg', 'images/fullsize/Galerie-33.jpg', 'images/fullsize/Galerie-34.jpg', 'images/fullsize/Galerie-35.jpg', 'images/fullsize/Galerie-36.jpg', 'images/fullsize/Galerie-37.jpg', 'images/fullsize/Galerie-38.jpg', 'images/fullsize/Galerie-39.jpg', 'images/fullsize/Galerie-4.jpg', 'images/fullsize/Galerie-40.jpg', 'images/fullsize/Galerie-41.jpg', 'images/fullsize/Galerie-42.jpg', 'images/fullsize/Galerie-43.jpg', 'images/fullsize/Galerie-44.jpg', 'images/fullsize/Galerie-45.jpg', 'images/fullsize/Galerie-46.jpg', 'images/fullsize/Galerie-47.jpg', 'images/fullsize/Galerie-48.jpg', 'images/fullsize/Galerie-49.jpg', 'images/fullsize/Galerie-5.jpg', 'images/fullsize/Galerie-50.jpg', 'images/fullsize/Galerie-51.jpg', 'images/fullsize/Galerie-52.jpg', 'images/fullsize/Galerie-53.jpg', 'images/fullsize/Galerie-54.jpg', 'images/fullsize/Galerie-55.jpg', 'images/fullsize/Galerie-56.jpg', 'images/fullsize/Galerie-57.jpg', 'images/fullsize/Galerie-58.jpg', 'images/fullsize/Galerie-59.jpg', 'images/fullsize/Galerie-6.jpg', 'images/fullsize/Galerie-60.jpg', 'images/fullsize/Galerie-61.jpg', 'images/fullsize/Galerie-62.jpg', 'images/fullsize/Galerie-63.jpg', 'images/fullsize/Galerie-64.jpg', 'images/fullsize/Galerie-65.jpg', 'images/fullsize/Galerie-66.jpg', 'images/fullsize/Galerie-67.jpg', 'images/fullsize/Galerie-68.jpg', 'images/fullsize/Galerie-69.jpg', 'images/fullsize/Galerie-7.jpg', 'images/fullsize/Galerie-70.jpg', 'images/fullsize/Galerie-71.jpg', 'images/fullsize/Galerie-72.jpg', 'images/fullsize/Galerie-73.jpg', 'images/fullsize/Galerie-74.jpg', 'images/fullsize/Galerie-75.jpg', 'images/fullsize/Galerie-76.jpg', 'images/fullsize/Galerie-77.jpg', 'images/fullsize/Galerie-78.jpg', 'images/fullsize/Galerie-79.jpg', 'images/fullsize/Galerie-8.jpg', 'images/fullsize/Galerie-80.jpg', 'images/fullsize/Galerie-81.jpg', 'images/fullsize/Galerie-82.jpg', 'images/fullsize/Galerie-83.jpg', 'images/fullsize/Galerie-84.jpg', 'images/fullsize/Galerie-85.jpg', 'images/fullsize/Galerie-86.jpg', 'images/fullsize/Galerie-87.jpg', 'images/fullsize/Galerie-88.jpg', 'images/fullsize/Galerie-89.jpg', 'images/fullsize/Galerie-9.jpg', 'images/fullsize/Galerie-90.jpg', 'images/fullsize/Galerie-91.jpg', 'images/fullsize/Galerie-92.jpg', 'images/fullsize/Galerie-93.jpg', 'images/fullsize/Galerie-94.jpg', 'images/fullsize/Galerie-95.jpg', 'images/fullsize/Galerie-96.jpg', 'images/fullsize/Galerie-97.jpg', 'images/fullsize/Galerie-98.jpg', 'images/fullsize/Galerie-99.jpg',
        'images/passage/fullsize/Photos Passage-1.jpg', 'images/passage/fullsize/Photos Passage-10.jpg', 'images/passage/fullsize/Photos Passage-11.jpg', 'images/passage/fullsize/Photos Passage-12.jpg', 'images/passage/fullsize/Photos Passage-13.jpg', 'images/passage/fullsize/Photos Passage-14.jpg', 'images/passage/fullsize/Photos Passage-2.jpg', 'images/passage/fullsize/Photos Passage-3.jpg', 'images/passage/fullsize/Photos Passage-4.jpg', 'images/passage/fullsize/Photos Passage-5.jpg', 'images/passage/fullsize/Photos Passage-6.jpg', 'images/passage/fullsize/Photos Passage-7.jpg', 'images/passage/fullsize/Photos Passage-8.jpg', 'images/passage/fullsize/Photos Passage-9.jpg'
    ];
    const exploreButton = document.getElementById('exploreButton');

    const imageViewerOverlay = document.getElementById('imageViewerOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const viewerCloseButton = document.getElementById('viewerCloseButton');
    const viewerPrevButton = document.getElementById('viewerPrevButton');
    const viewerNextButton = document.getElementById('viewerNextButton');
    const imageViewerSpinner = document.getElementById('imageViewerSpinner');

    const initPage = (path) => {
        if (path === '/') {
            initHomePage();
        } else if (path === '/about') {
            initAboutPage();
        } else if (path === '/bruine' || path === '/passage' || path === '/contact') {
            initProjectPage(path);
        }
    };

    const initHomePage = () => {
        populateGallery('/');
        initPromoOverlay();
        initImageViewer('/');
    };

    const initAboutPage = () => {
        initAboutVideo();
    };

    const initProjectPage = (path) => {
        populateGallery(path);
        initImageViewer(path);
    };

    const initPromoOverlay = () => {
        const promoOverlay = document.getElementById('promoOverlay');
        const promoCloseButton = document.getElementById('promoCloseButton');
        const promoVideo = document.getElementById('promoVideo');
        const videoPlayButton = document.getElementById('videoPlayButton');
        const fullscreenVideoOverlay = document.getElementById('fullscreenVideoOverlay');
        const fullscreenVideo = document.getElementById('fullscreenVideo');
        const closeVideoButton = document.getElementById('closeVideoButton');

        if (promoOverlay) {
            const promoClosedDate = localStorage.getItem('promoClosedDate');
            const today = new Date().toISOString().split('T')[0];

            if (promoClosedDate !== today) {
                setTimeout(() => promoOverlay.classList.add('active'), 500);
            }
        }

        if(promoCloseButton) promoCloseButton.addEventListener('click', () => promoOverlay.classList.remove('active'));
        if(videoPlayButton) videoPlayButton.addEventListener('click', () => {
            fullscreenVideo.src = promoVideo.querySelector('source').src;
            fullscreenVideoOverlay.style.display = 'flex';
            fullscreenVideo.play();
        });
        if(closeVideoButton) closeVideoButton.addEventListener('click', () => {
            fullscreenVideoOverlay.style.display = 'none';
            fullscreenVideo.pause();
        });
    };

    const initAboutVideo = () => {
        const artistVideoElement = document.getElementById('artistVideoElement');
        const videoSpinnerElement = document.getElementById('videoSpinner');
        if (artistVideoElement && videoSpinnerElement) {
            let videoHasLoaded = false;
            const onVideoReady = () => {
                if (videoHasLoaded) return;
                videoHasLoaded = true;
                videoSpinnerElement.style.display = 'none';
                artistVideoElement.style.opacity = '1';
            };
            artistVideoElement.addEventListener('canplaythrough', onVideoReady);
            if (artistVideoElement.readyState >= 4) {
                onVideoReady();
            }
            artistVideoElement.play().catch(error => {
                console.log("Video autoplay was prevented by the browser.");
            });
        }
    };

    const initImageViewer = (path) => {
        const galleryContainer = document.getElementById('imageGallery');
        if (!galleryContainer) return;

        viewerImageSources = (imageFilenames[path] || []).map(filename => (fullsizePath[path] || '') + filename);

        galleryContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                currentImageIndex = parseInt(item.dataset.index);
                openImageViewer(currentImageIndex);
            }
        });
    };

    const openImageViewer = (index) => {
        if (!imageViewerOverlay) return;
        currentImageIndex = index;
        imageViewerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        loadAndShowImageInViewer(index);
    };

    const closeImageViewer = () => {
        if (!imageViewerOverlay) return;
        imageViewerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    const showPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + viewerImageSources.length) % viewerImageSources.length;
        loadAndShowImageInViewer(currentImageIndex);
    };

    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % viewerImageSources.length;
        loadAndShowImageInViewer(currentImageIndex);
    };

    const loadAndShowImageInViewer = (index) => {
        if (!fullscreenImage || !imageViewerSpinner) return;
        imageViewerSpinner.style.display = 'block';
        fullscreenImage.style.opacity = 0;

        const imageUrl = viewerImageSources[index];
        const tempImg = new Image();
        tempImg.onload = () => {
            fullscreenImage.src = imageUrl;
            fullscreenImage.style.opacity = 1;
            imageViewerSpinner.style.display = 'none';
            preloadAdjacentImages(index);
        };
        tempImg.onerror = () => {
            console.error("Error loading image:", imageUrl);
            imageViewerSpinner.style.display = 'none';
        };
        tempImg.src = imageUrl;
    };

    const preloadAdjacentImages = (index) => {
        const nextIndex = (index + 1) % viewerImageSources.length;
        const prevIndex = (index - 1 + viewerImageSources.length) % viewerImageSources.length;
        new Image().src = viewerImageSources[nextIndex];
        new Image().src = viewerImageSources[prevIndex];
    };

    const openRandomImageViewer = () => {
        if (!imageViewerOverlay) return;
        const randomIndex = Math.floor(Math.random() * randomImageViewerPaths.length);
        const randomImageUrl = randomImageViewerPaths[randomIndex];

        imageViewerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        viewerImageSources = randomImageViewerPaths;
        currentImageIndex = randomIndex;

        loadAndShowImageInViewer(currentImageIndex);
    };

    if(exploreButton) exploreButton.addEventListener('click', openRandomImageViewer);
    if(viewerCloseButton) viewerCloseButton.addEventListener('click', closeImageViewer);
    if(viewerPrevButton) viewerPrevButton.addEventListener('click', showPrevImage);
    if(viewerNextButton) viewerNextButton.addEventListener('click', showNextImage);
    if(imageViewerOverlay) imageViewerOverlay.addEventListener('click', (e) => {
        if (e.target === imageViewerOverlay) closeImageViewer();
    });
    document.addEventListener('keydown', (e) => {
        if (imageViewerOverlay && imageViewerOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeImageViewer();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });

    const populateGallery = (path) => {
        const galleryContainer = document.getElementById('imageGallery');
        if (!galleryContainer) return;
        const fragment = document.createDocumentFragment();
        const images = imageFilenames[path] || [];
        const thumbs = thumbPath[path] || '';
        images.forEach((filename, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.dataset.index = index;
            item.dataset.filename = filename;
            const img = document.createElement('img');
            img.src = thumbs + filename;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.addEventListener('load', () => img.classList.add('loaded'));
            item.appendChild(img);
            fragment.appendChild(item);
        });
        galleryContainer.innerHTML = '';
        galleryContainer.appendChild(fragment);
    };

    // --- EVENT LISTENERS ---
    themeToggleButton.addEventListener('click', () => {
        currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    languageToggleButton.addEventListener('click', () => {
        const newLang = currentLanguage === 'en' ? 'fr' : 'en';
        applyLanguage(newLang);
    });

    let isMusicStarted = false;
    musicToggleButton.addEventListener('click', () => {
        const musicIcon = musicToggleButton.querySelector('i');

        const playMusic = () => {
            backgroundMusic.volume = 0;
            const playPromise = backgroundMusic.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    let fade = setInterval(() => {
                        if (backgroundMusic.volume < 1.0) {
                            backgroundMusic.volume = Math.min(1.0, backgroundMusic.volume + 0.1);
                        } else {
                            clearInterval(fade);
                        }
                    }, 200);
                    musicIcon.classList.remove('fa-headphones');
                    musicIcon.classList.add('fa-volume-high');
                }).catch(error => {
                    console.error("Audio play failed:", error);
                });
            }
        };

        if (backgroundMusic.paused) {
            if (!isMusicStarted) {
                if (isFinite(backgroundMusic.duration)) {
                    backgroundMusic.currentTime = Math.random() * backgroundMusic.duration;
                    isMusicStarted = true;
                    playMusic();
                } else {
                    backgroundMusic.addEventListener('loadedmetadata', () => {
                        backgroundMusic.currentTime = Math.random() * backgroundMusic.duration;
                        isMusicStarted = true;
                        playMusic();
                    }, { once: true });
                }
            } else {
                playMusic();
            }
        } else {
            backgroundMusic.pause();
            musicIcon.classList.remove('fa-volume-high');
            musicIcon.classList.add('fa-headphones');
        }
    });

    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', router);
    });

    window.addEventListener('popstate', () => {
        loadContent(window.location.pathname);
    });

    const dropdownToggles = document.querySelectorAll('.main-nav .dropdown > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            document.querySelectorAll('.main-nav .dropdown-menu.show').forEach(openMenu => {
                if (openMenu !== dropdownMenu) {
                    openMenu.classList.remove('show');
                    const otherToggle = openMenu.previousElementSibling;
                    if (otherToggle) {
                        otherToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });

            dropdownMenu.classList.toggle('show');
            this.setAttribute('aria-expanded', String(!isExpanded));
        });
    });

    document.addEventListener('click', function(event) {
        const openDropdowns = document.querySelectorAll('.main-nav .dropdown');
        openDropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('a[aria-expanded="true"]');
            const menu = dropdown.querySelector('.dropdown-menu.show');
            if (menu && toggle && !dropdown.contains(event.target)) {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // --- INITIAL LOAD ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    loadContent(window.location.pathname);
});
