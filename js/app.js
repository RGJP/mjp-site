document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    const routes = {
        '/': 'pages/gallery.html',
        '/about': 'pages/about.html',
        '/contact': 'pages/contact.html',
        '/bruine': 'pages/bruine.html',
        '/passage': 'pages/passage.html'
    };

    async function loadContent(path) {
        const route = routes[path] || 'pages/gallery.html'; // Default to gallery
        try {
            const response = await fetch(route);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const html = await response.text();
            mainContent.innerHTML = html;
            initializeUI(); // Re-initialize UI components
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Failed to fetch page: ', error);
            mainContent.innerHTML = '<p>Error loading page. Please try again.</p>';
        }
    }

    function navigate(event) {
        event.preventDefault();
        const path = event.target.getAttribute('href');
        history.pushState({ path }, '', path);
        loadContent(path);
    }

    window.addEventListener('popstate', (event) => {
        const path = event.state ? event.state.path : '/';
        loadContent(path);
    });

    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
            const path = new URL(event.target.href).pathname;
            if (routes[path]) {
                navigate(event);
            }
        }
    });

    // Initial load
    loadContent(window.location.pathname);
});
