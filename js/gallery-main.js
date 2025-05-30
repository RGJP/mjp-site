document.addEventListener('DOMContentLoaded', () => {
    // This script assumes common.js has been loaded and executed,
    // particularly for `translations` and `applyLanguage` if needed for dynamic content here.

    // --- CONFIGURATION ---
    const imageFilenames = [
        'Site-1.webp', 'Site-2.webp', 'Site-3.webp', 'Site-4.webp', 'Site-5.webp',
        'Site-6.webp', 'Site-7.webp', 'Site-8.webp', 'Site-9.webp', 'Site-10.webp',
        'Site-11.webp', 'Site-12.webp', 'Site-13.webp', 'Site-14.webp', 'Site-15.webp',
        'Site-16.webp', 'Site-17.webp', 'Site-18.webp', 'Site-19.webp', 'Site-20.webp',
        'Site-21.webp', 'Site-22.webp', 'Site-23.webp', 'Site-24.webp', 'Site-25.webp',
        'Site-26.webp', 'Site-27.webp', 'Site-28.webp', 'Site-29.webp', 'Site-30.webp',
        'Site-31.webp', 'Site-32.webp', 'Site-33.webp', 'Site-34.webp', 'Site-35.webp',
        'Site-36.webp', 'Site-37.webp', 'Site-38.webp', 'Site-39.webp', 'Site-40.webp',
        'Site-41.webp', 'Site-42.webp', 'Site-43.webp', 'Site-44.webp', 'Site-45.webp',
        'Site-46.webp', 'Site-47.webp', 'Site-48.webp', 'Site-49.webp', 'Site-50.webp',
        'Site-51.webp', 'Site-52.webp', 'Site-53.webp', 'Site-54.webp', 'Site-55.webp',
        'Site-56.webp', 'Site-57.webp', 'Site-58.webp', 'Site-59.webp', 'Site-60.webp',
        'Site-61.webp', 'Site-62.webp', 'Site-63.webp', 'Site-64.webp', 'Site-65.webp',
        'Site-66.webp', 'Site-67.webp', 'Site-68.webp', 'Site-69.webp', 'Site-70.webp',
        'Site-71.webp', 'Site-72.webp', 'Site-73.webp', 'Site-74.webp', 'Site-75.webp',
        'Site-76.webp', 'Site-77.webp', 'Site-78.webp', 'Site-79.webp', 'Site-80.webp',
        'Site-81.webp', 'Site-82.webp', 'Site-83.webp', 'Site-84.webp', 'Site-85.webp',
        'Site-86.webp', 'Site-87.webp', 'Site-88.webp', 'Site-89.webp', 'Site-90.webp',
        'Site-91.webp', 'Site-92.webp', 'Site-93.webp', 'Site-94.webp', 'Site-95.webp'
    ];

    const imagePath = 'images/';

    // --- ELEMENTS ---
    const galleryContainer = document.getElementById('imageGallery');
    const imageViewerOverlay = document.getElementById('imageViewerOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const viewerCloseButton = document.getElementById('viewerCloseButton');
    const viewerPrevButton = document.getElementById('viewerPrevButton');
    const viewerNextButton = document.getElementById('viewerNextButton');
    const imageViewerSpinner = document.getElementById('imageViewerSpinner');
    const announcementOverlay = document.getElementById('announcementOverlay');
    const closeAnnouncementButton = document.getElementById('closeAnnouncement');

    let currentImageIndex = 0;

    // --- GALLERY & IMAGE FUNCTIONS ---
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
                const namePart = fullResFilename.substring(0, fullResFilename.lastIndexOf('.'));
                const extension = fullResFilename.substring(fullResFilename.lastIndexOf('.'));
                const thumbnailFilename = `${namePart}-thumb${extension}`;

                img.src = currentImagePath + thumbnailFilename;
                const altNamePart = fullResFilename.substring(0, fullResFilename.lastIndexOf('.'));
                img.alt = `Thumbnail of ${altNamePart.replace(/[\W_]+/g," ")} - Marius Jomphe`; // Alt text can be improved with translations if needed
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
        imageFilenames.forEach((fullResFilename, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.dataset.index = index;
            item.dataset.fullresFilename = fullResFilename;
            item.dataset.imagePath = imagePath;
            galleryContainer.appendChild(item);
            imageObserver.observe(item);
        });
    }

    // --- EVENT LISTENERS (Gallery Specific) ---
    if (galleryContainer) {
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

    document.addEventListener('keydown', (e) => {
        if (imageViewerOverlay && imageViewerOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeImageViewer();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });

    // --- ANNOUNCEMENT LOGIC ---
    // (Keeping it here as it was in index.html originally)
    // Note: common.js handles translations for announcement text if keys are set on elements.
    /*
    if (announcementOverlay && closeAnnouncementButton) {
        if (!sessionStorage.getItem('announcementShown')) {
            announcementOverlay.style.display = 'flex';
            // if (document.body) document.body.style.overflow = 'hidden';
        }
        closeAnnouncementButton.addEventListener('click', () => {
            announcementOverlay.style.display = 'none';
            // if (document.body && !(imageViewerOverlay && imageViewerOverlay.classList.contains('active'))) {
            //    document.body.style.overflow = '';
            // }
            sessionStorage.setItem('announcementShown', 'true');
        });
    }
    */


    // --- IMAGE VIEWER FUNCTIONS ---
    function loadAndShowImageInViewer(newIndex, isOpeningCallParam = false) {
        if (!imageViewerOverlay || !fullscreenImage || imageFilenames.length === 0) return;

        const proceedToLoadImage = (targetIndex) => {
            if (imageViewerSpinner) imageViewerSpinner.style.display = 'block';

            fullscreenImage.style.transition = 'none';
            fullscreenImage.style.opacity = 0;
            fullscreenImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Placeholder
            fullscreenImage.alt = "";

            const imageUrl = imagePath + imageFilenames[targetIndex];
            // Alt text for fullscreen image can also be internationalized if needed, by looking up a key
            const altText = `Enlarged view of ${imageFilenames[targetIndex].replace(/[\W_]+/g, " ")} - Marius Jomphe`;

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
                fullscreenImage.alt = "Error loading image"; // Fallback alt text
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

        if (document.body) {
            // Only restore scroll if announcement is not also active and wanting to control scroll
            // const announcementIsActive = announcementOverlay && announcementOverlay.style.display === 'flex';
            // if (!announcementIsActive) {
                 document.body.style.overflow = '';
            // }
        }
    }

    function showPrevImage() {
        if (imageFilenames.length === 0) return;
        const newIndex = (currentImageIndex - 1 + imageFilenames.length) % imageFilenames.length;
        loadAndShowImageInViewer(newIndex);
    }

    function showNextImage() {
        if (imageFilenames.length === 0) return;
        const newIndex = (currentImageIndex + 1) % imageFilenames.length;
        loadAndShowImageInViewer(newIndex);
    }

    function updateNavButtons() {
        if (!viewerPrevButton || !viewerNextButton || imageFilenames.length <= 1) {
            if(viewerPrevButton) viewerPrevButton.style.display = 'none';
            if(viewerNextButton) viewerNextButton.style.display = 'none';
            return;
        }
        if(viewerPrevButton) viewerPrevButton.style.display = 'block';
        if(viewerNextButton) viewerNextButton.style.display = 'block';
    }

    // --- INITIAL LOAD (Gallery Specific) ---
    if (galleryContainer) { // Ensure this script only runs logic if gallery is present
        populateGallery();
        updateNavButtons();
    }
});
