document.addEventListener('DOMContentLoaded', function() {
    
    // --- Off-Canvas Menu Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const offCanvasMenu = document.getElementById('off-canvas-menu');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    
    // Function to close the menu
    function closeMenu() {
        offCanvasMenu.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Open menu when hamburger is clicked
    menuToggle.addEventListener('click', function() {
        offCanvasMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Close menu when 'X' is clicked
    closeBtn.addEventListener('click', closeMenu);

    // Close menu when overlay is clicked
    overlay.addEventListener('click', closeMenu);

    // --- Smooth Scrolling Logic (for BOTH desktop and mobile) ---
    const allNavLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');
    const header = document.querySelector('.site-header');

    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // 1. Check if it's an anchor link
            if (this.hash !== "") {
                // 2. Prevent default behavior
                e.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    // 3. Get header height
                    const headerHeight = header.offsetHeight;
                    
                    // 4. Calculate position
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    // 5. Scroll to element
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // 6. Close the mobile menu (if it's open)
                    if (offCanvasMenu.classList.contains('active')) {
                        closeMenu();
                    }
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. FAQ Accordion Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement; // .faq-item
            const wasActive = item.classList.contains('active');

            // Pehle sabhi open items ko band karo
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Agar item pehle se active nahi tha, toh use open karo
            if (!wasActive) {
                item.classList.add('active');
            }
            // Agar active tha, toh upar waale code se woh band ho chuka hai
        });
    });

    
    // --- 2. "Read More" Button Logic ---
    const loadMoreBtn = document.getElementById('load-more-btn');
    const allFaqItems = document.querySelectorAll('.faq-list .faq-item');
    
    // Start index for the next items to show (item 5 is index 4, so next is 5)
    let nextItemIndex = 5; 

    loadMoreBtn.addEventListener('click', function() {
        const itemsToShow = 5;
        const endIndex = nextItemIndex + itemsToShow;

        // Loop through the next 5 items
        for (let i = nextItemIndex; i < endIndex; i++) {
            if (allFaqItems[i]) {
                allFaqItems[i].classList.remove('hidden');
            }
        }

        // Update the index for the *next* click
        nextItemIndex = endIndex;

        // Agar saare items show ho gaye hain, toh button hide kar do
        if (nextItemIndex >= allFaqItems.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

});
