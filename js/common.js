// --- TRANSLATIONS ---
const translations = {
    en: {
        siteTitle: "Marius Jomphe ‧ Photography",
        navImages: "GALLERY",
        navAbout: "ABOUT",
        navContact: "CONTACT",
        themeToggleDark: "🌓 DARK THEME",
        themeToggleLight: "🌓 LIGHT THEME",
        languageToggleText: "🌐 FRANÇAIS",
        footerRights: "All rights reserved.",
        announcementTitle: "Welcome!",
        announcementText: "This is a special announcement. Check out the latest updates or ongoing promotions here. This message appears once per session.",
        announcementClose: "Close",
        // Page specific titles (used if title tag has data-lang-key)
        pageTitleAbout: "Marius Jomphe ‧ About",
        pageTitleContact: "Marius Jomphe ‧ Contact",
        // About page content (assuming these keys are used on elements)
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
        // Contact page content
        contactHeading: "Contact",
        contactText: "For any questions, collaboration requests, acquisition, exhibition proposals, or use of the works, do not hesitate to contact the artist directly. He will be pleased to discuss with you. Thank you for your interest.",
        emailButtonText: "Write to the artist"
    },
    fr: {
        siteTitle: "Marius Jomphe ‧ Photographie",
        navImages: "GALERIE",
        navAbout: "À PROPOS",
        navContact: "CONTACT",
        themeToggleDark: "🌓 THÈME SOMBRE",
        themeToggleLight: "🌓 THÈME CLAIR",
        languageToggleText: "🌐 ENGLISH",
        footerRights: "Tous droits réservés.",
        announcementTitle: "Bienvenue !",
        announcementText: "Ceci est une annonce spéciale. Consultez les dernières mises à jour ou promotions en cours ici. Ce message apparaît une fois par session.",
        announcementClose: "Fermer",
        // Page specific titles
        pageTitleAbout: "Marius Jomphe ‧ À Propos",
        pageTitleContact: "Marius Jomphe ‧ Contact",
        // About page content
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
        perceptionText2: "En ce sens, les photographies doivent être comme des portes ouvertes où le spectateur peut entrer dans le monde des possibilités. Les images sont des objets remarquablement fuyants, chargées de multiples potentiels significatifs. Mon intention est donc d’interroger et de démontrer cette relativité de la perception afin de pointer vers quelque chose de plus grand, de plus profond que soi, et par là même, laisser entrevoir un peu du mystère du monde.",
        // Contact page content
        contactHeading: "Contact",
        contactText: "Pour toute question, demande de collaboration, acquisition, proposition d’exposition ou utilisation des œuvres, n’hésitez pas à contacter l’artiste directement. Il se fera un plaisir d’échanger avec vous. Merci pour votre intérêt.",
        emailButtonText: "Écrire à l'artiste"
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const themeToggleButton = document.getElementById('themeToggle');
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
            if (el.tagName === 'TITLE') { // Handle title tag specifically
                document.title = translations[lang][key];
            } else if (el.id === 'themeToggle') { // Handle theme toggle button text
                const darkTextSpan = el.querySelector('[data-lang-key="themeToggleDark"]');
                const lightTextSpan = el.querySelector('[data-lang-key="themeToggleLight"]');
                if (darkTextSpan) darkTextSpan.textContent = translations[lang]['themeToggleDark'];
                if (lightTextSpan) lightTextSpan.textContent = translations[lang]['themeToggleLight'];
            }
             else {
                el.textContent = translations[lang][key];
            }
        }
    });

    const languageToggleButton = document.getElementById('languageToggle');
    if (languageToggleButton) {
        languageToggleButton.textContent = translations[lang]?.languageToggleText || (lang === 'en' ? '🌐 FRANÇAIS' : '🌐 ENGLISH');
    }

    // Re-apply theme to update theme-specific elements like signature images, and theme toggle button text based on new language.
    applyTheme(currentTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link based on current URL
    document.querySelectorAll('.main-nav a').forEach(link => {
        const currentPath = window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/';
        const linkPath = link.getAttribute('href').endsWith('/') ? link.getAttribute('href') : link.getAttribute('href') + '/';

        let isActive = false;
        if (linkPath === './' || linkPath === 'index.html/') { // Handling for root/index.html
            isActive = (currentPath === '/' || currentPath === '/index.html/' || currentPath.endsWith('/index.html/'));
        } else {
            isActive = currentPath.endsWith(linkPath);
        }

        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Theme Toggle Button
    const themeToggleButton = document.getElementById('themeToggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            // applyTheme(currentTheme); // This is called by applyLanguage
            applyLanguage(currentLanguage); // Re-apply language to update texts and then theme
        });
    }

    // Language Toggle Button
    const languageToggleButton = document.getElementById('languageToggle');
    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'fr' : 'en';
            applyLanguage(newLang);
        });
    }

    // Footer Year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Initial application of language and theme to set button texts correctly
    // The FOUC script in <head> already set the initial attributes on <html>
    applyLanguage(currentLanguage);
});
