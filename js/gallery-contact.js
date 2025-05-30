document.addEventListener('DOMContentLoaded', () => {
    // This script assumes common.js has been loaded and executed.

    // --- CONFIGURATION FOR CONTACT PAGE GALLERY ---
    const contactPageImageFilenames = [
        'contact/contact1.jpg',
        'contact/contact2.jpg',
        'contact/contact3.jpg',
        'contact/contact4.jpg'
    ];
    const imagePath = 'images/'; // Base path for all images

    // --- ELEMENTS ---
    // Note: common.js handles common elements like theme/language toggles.
    // This script focuses on gallery-specific elements for the contact page.
    const galleryContainer = document.getElementById('imageGallery'); // Assuming same ID is used on contact page gallery
    const imageViewerOverlay = document.getElementById('imageViewerOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const viewerCloseButton = document.getElementById('viewerCloseButton');
    const viewerPrevButton = document.getElementById('viewerPrevButton');
    const viewerNextButton = document.getElementById('viewerNextButton');
    const imageViewerSpinner = document.getElementById('imageViewerSpinner');

    let currentImageIndex = 0;

    // --- GALLERY & IMAGE FUNCTIONS (Adapted for contact page) ---
    const createImageOnIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const galleryItemDiv = entry.target;
                const fullResFilename = galleryItemDiv.dataset.fullresFilename;
                const currentImagePath = galleryItemDiv.dataset.imagePath;

                if (!fullResFilename || galleryItemDiv.querySelector('img')) {
                    observer.unobserve(galleryItemDiv);
                    return;
                }

                const img = document.createElement('img');
                img.src = currentImagePath + fullResFilename;
                const altNamePart = fullResFilename.substring(0, fullResFilename.lastIndexOf('.'));
                // Alt text can be improved with translations if needed by passing `translations` and `currentLanguage`
                img.alt = `Image of ${altNamePart.replace(/[\W_]+/g," ")} - Marius Jomphe`;
                img.loading = 'lazy';
                img.decoding = 'async';
                img.addEventListener('load', () => img.classList.add('loaded'));
                if (img.complete) img.classList.add('loaded');

                galleryItemDiv.appendChild(img);
                observer.unobserve(galleryItemDiv);
            }
        });
    };

    const imageObserver = new IntersectionObserver(createImageOnIntersection, {
        rootMargin: '0px 0px 200px 0px',
        threshold: 0.01
    });

    function populateGallery() {
        if (!galleryContainer) return;
        galleryContainer.innerHTML = '';
        contactPageImageFilenames.forEach((fullResFilename, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.dataset.index = index;
            item.dataset.fullresFilename = fullResFilename;
            item.dataset.imagePath = imagePath;
            galleryContainer.appendChild(item);
            imageObserver.observe(item);
        });
    }

    // --- IMAGE VIEWER FUNCTIONS (Adapted for contact page) ---
    function loadAndShowImageInViewer(newIndex, isOpeningCallParam = false) {
        if (!imageViewerOverlay || !fullscreenImage || contactPageImageFilenames.length === 0) return;

        const proceedToLoadImage = (targetIndex) => {
            if (imageViewerSpinner) imageViewerSpinner.style.display = 'block';

            fullscreenImage.style.transition = 'none';
            fullscreenImage.style.opacity = 0;
            fullscreenImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Placeholder
            fullscreenImage.alt = "";

            const imageUrl = imagePath + contactPageImageFilenames[targetIndex];
            const altText = `Enlarged view of ${contactPageImageFilenames[targetIndex].replace(/[\W_]+/g, " ")} - Marius Jomphe`;

            const tempImg = new Image();
            tempImg.onload = () => {
                fullscreenImage.src = imageUrl;
                fullscreenImage.alt = altText;

                requestAnimationFrame(() => {
                    fullscreenImage.style.transition = 'opacity 0.5s ease-in-out';
                    fullscreenImage.style.opacity = 1;
                });

                if (imageViewerSpinner) imageViewerSpinner.style.display = 'none';
                updateNavButtons();
            };

            tempImg.onerror = () => {
                console.error("Error loading image:", imageUrl);
                fullscreenImage.alt = "Error loading image"; // Fallback alt
                if (imageViewerSpinner) imageViewerSpinner.style.display = 'none';
                updateNavButtons();
                if (isOpeningCallParam && currentImageIndex === targetIndex) {
                    setTimeout(closeImageViewer, 1500);
                }
            };
            tempImg.src = imageUrl;
        };

        if (isOpeningCallParam) {
            currentImageIndex = newIndex;
            imageViewerOverlay.classList.add('active');
            if (document.body) document.body.style.overflow = 'hidden';
            proceedToLoadImage(currentImageIndex);
        } else {
            fullscreenImage.style.transition = 'opacity 0.5s ease-in-out';
            fullscreenImage.style.opacity = 0;

            setTimeout(() => {
                if (!imageViewerOverlay.classList.contains('active')) {
                    if (imageViewerSpinner) imageViewerSpinner.style.display = 'none';
                    return;
                }
                currentImageIndex = newIndex;
                proceedToLoadImage(currentImageIndex);
            }, 500);
        }
    }

    function openImageViewer(index) {
        loadAndShowImageInViewer(index, true);
    }

    function closeImageViewer() {
        if (!imageViewerOverlay) return;
        imageViewerOverlay.classList.remove('active');
        if (imageViewerSpinner) imageViewerSpinner.style.display = 'none';
        if (document.body) document.body.style.overflow = '';
    }

    function showPrevImage() {
        if (contactPageImageFilenames.length === 0) return;
        const newIndex = (currentImageIndex - 1 + contactPageImageFilenames.length) % contactPageImageFilenames.length;
        loadAndShowImageInViewer(newIndex);
    }

    function showNextImage() {
        if (contactPageImageFilenames.length === 0) return;
        const newIndex = (currentImageIndex + 1) % contactPageImageFilenames.length;
        loadAndShowImageInViewer(newIndex);
    }

    function updateNavButtons() {
        if (!viewerPrevButton || !viewerNextButton || contactPageImageFilenames.length <= 1) {
            if(viewerPrevButton) viewerPrevButton.style.display = 'none';
            if(viewerNextButton) viewerNextButton.style.display = 'none';
            return;
        }
        if(viewerPrevButton) viewerPrevButton.style.display = 'block';
        if(viewerNextButton) viewerNextButton.style.display = 'block';
    }

    // --- INITIALIZATION & EVENT LISTENERS (Contact Page Gallery Specific) ---
    if (galleryContainer) { // Ensure this script only runs if gallery is present
        populateGallery();
        updateNavButtons();

        galleryContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                currentImageIndex = parseInt(item.dataset.index);
                openImageViewer(currentImageIndex);
            }
        });
    }

    if (viewerCloseButton) viewerCloseButton.addEventListener('click', closeImageViewer);
    if (viewerPrevButton) viewerPrevButton.addEventListener('click', showPrevImage);
    if (viewerNextButton) viewerNextButton.addEventListener('click', showNextImage);

    if (imageViewerOverlay) {
        imageViewerOverlay.addEventListener('click', (e) => {
            if (e.target === imageViewerOverlay) closeImageViewer();
        });
    }

    // Keyboard navigation for viewer (might be duplicated if common.js also adds this)
    // Consider making this conditional or ensuring common.js doesn't add it if a page-specific gallery script handles it.
    // For now, let's assume it's fine, or that common.js's one is more generic / less likely to conflict.
    // A better approach would be a single keyboard listener in common.js that calls the active gallery's methods.
    document.addEventListener('keydown', (e) => {
        if (imageViewerOverlay && imageViewerOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeImageViewer();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
});
