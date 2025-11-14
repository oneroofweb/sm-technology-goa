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