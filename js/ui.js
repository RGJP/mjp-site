function initializeUI() {
    // --- TRANSLATIONS ---
    const translations = {
        en: {
            siteTitle: "Marius Jomphe ‧ Photography",
            pageTitleGallery: "Gallery • Marius Jomphe Photography",
            pageTitleAbout: "About • Marius Jomphe Photography",
            pageTitleContact: "Contact • Marius Jomphe Photography",
            pageTitleBruineLivre: "Bruine (Book) • Marius Jomphe Photography",
            pageTitlePassageLivre: "Passage (Book) • Marius Jomphe Photography",
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
            contactHeading: "Contact",
            contactText: "For any questions, purchases, collaboration requests, exhibition proposals, or requests to use my work, feel free to contact me directly. I would be happy to talk with you.",
            emailButtonText: "E-mail",
            bookGalleryTitle: "Book Excerpt",
            buyButtonMainText: "Get the limited edition book",
            buyButtonPriceText: "(50 USD)",
        },
        fr: {
            siteTitle: "Marius Jomphe ‧ Photographie",
            pageTitleGallery: "Galerie • Marius Jomphe Photographie",
            pageTitleAbout: "À Propos • Marius Jomphe Photographie",
            pageTitleContact: "Contact • Marius Jomphe Photographie",
            pageTitleBruineLivre: "Bruine (Livre) • Marius Jomphe Photographie",
            pageTitlePassageLivre: "Passage (Livre) • Marius Jomphe Photographie",
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
            contactHeading: "Contact",
            contactText: "Pour toute question, achat, demande de collaboration, proposition d’exposition ou demande d’utilisation des œuvres, n’hésitez pas à me contacter directement. Je me ferai un plaisir d’échanger avec vous.",
            emailButtonText: "Courriel",
            bookGalleryTitle: "Extrait du Livre",
            buyButtonMainText: "Obtenir le livre en édition limitée",
            buyButtonPriceText: "(50 USD)",
        }
    };

    // --- ELEMENTS ---
    const themeToggleButton = document.getElementById('themeToggle');
    const languageToggleButton = document.getElementById('languageToggle');
    const galleryContainer = document.getElementById('imageGallery');
    const imageViewerOverlay = document.getElementById('imageViewerOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const viewerCloseButton = document.getElementById('viewerCloseButton');
    const viewerPrevButton = document.getElementById('viewerPrevButton');
    const viewerNextButton = document.getElementById('viewerNextButton');
    const imageViewerSpinner = document.getElementById('imageViewerSpinner');
    const currentYearSpan = document.getElementById('currentYear');
    const musicToggleButton = document.getElementById('music-toggle-button');
    const bgmPlayer = document.getElementById('bgm-player');

    // Promo Overlay Elements
    const promoOverlay = document.getElementById('promoOverlay');
    const promoCloseButton = document.getElementById('promoCloseButton');

    let currentLanguage = localStorage.getItem('language') || 'en';
    let currentTheme = localStorage.getItem('theme') || 'light';

    function applyTheme(theme) {
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
    }

    function applyLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        if (languageToggleButton) {
            languageToggleButton.textContent = translations[lang]?.languageToggleText || (lang === 'en' ? '🌐 FRANÇAIS' : '🌐 ENGLISH');
        }
        applyTheme(currentTheme);
    }

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Dropdown menu logic
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

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
            applyLanguage(currentLanguage);
        });
    }

    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'fr' : 'en';
            applyLanguage(newLang);
        });
    }

    // Music player
    if (musicToggleButton && bgmPlayer) {
        musicToggleButton.addEventListener('click', () => {
            if (bgmPlayer.paused) {
                bgmPlayer.play();
                musicToggleButton.textContent = 'Pause Music';
            } else {
                bgmPlayer.pause();
                musicToggleButton.textContent = 'Play Music';
            }
        });
    }

    // Promo Overlay
    if (promoOverlay && promoCloseButton) {
        const promoClosedDate = localStorage.getItem('promoClosedDate');
        const today = new Date().toISOString().split('T')[0];

        if (promoClosedDate !== today) {
            setTimeout(() => promoOverlay.classList.add('active'), 500);
        }

        promoCloseButton.addEventListener('click', () => {
            promoOverlay.classList.remove('active');
            localStorage.setItem('promoClosedDate', today);
        });
    }

    applyLanguage(currentLanguage);
}
