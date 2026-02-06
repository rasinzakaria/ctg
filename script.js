// Mobile Menu Toggle (Bootstrap Navbar)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('yamm-mobile');
    const mobileMenuToggle2 = document.getElementById('yamm-mobile2');
    const navbarCollapse = document.getElementById('navbar-collapse-grid');
    const reveal = document.querySelector('.reveal');
    
    function toggleMobileMenu() {
        if (reveal) {
            reveal.classList.toggle('reveal-out');
        }
        if (navbarCollapse) {
            navbarCollapse.classList.toggle('in');
        }
    }
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }
    
    if (mobileMenuToggle2) {
        mobileMenuToggle2.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 910) {
            if (!event.target.closest('.navigation') && reveal && reveal.classList.contains('reveal-out')) {
                reveal.classList.remove('reveal-out');
                if (navbarCollapse) {
                    navbarCollapse.classList.remove('in');
                }
            }
        }
    });
});

// Close Announcement Banner
function closeBanner() {
    const banner = document.getElementById('announcementBanner');
    if (banner) {
        banner.style.display = 'none';
        // Store in localStorage to remember user preference
        localStorage.setItem('announcementBannerClosed', 'true');
    }
}

// Check if banner was previously closed
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('announcementBannerClosed') === 'true') {
        const banner = document.getElementById('announcementBanner');
        if (banner) {
            banner.style.display = 'none';
        }
    }
});

// Brands Carousel
let carouselPosition = 0;
const carouselTrack = document.querySelector('.carousel-track');
const brandLogos = document.querySelectorAll('.brand-logo');
const logosPerView = 4; // Number of logos visible at once

function updateCarousel() {
    if (carouselTrack) {
        const logoWidth = brandLogos[0] ? brandLogos[0].offsetWidth + 30 : 180; // 180px width + 30px gap
        const maxPosition = Math.max(0, (brandLogos.length - logosPerView) * logoWidth);
        carouselPosition = Math.max(0, Math.min(carouselPosition, maxPosition));
        carouselTrack.style.transform = `translateX(-${carouselPosition}px)`;
    }
}

function moveCarousel(direction) {
    if (brandLogos.length === 0) return;
    
    const logoWidth = brandLogos[0].offsetWidth + 30; // width + gap
    const moveAmount = logoWidth * logosPerView;
    
    carouselPosition += direction * moveAmount;
    updateCarousel();
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    updateCarousel();
    
    // Auto-scroll carousel (optional)
    // setInterval(function() {
    //     if (carouselPosition >= (brandLogos.length - logosPerView) * (brandLogos[0].offsetWidth + 30)) {
    //         carouselPosition = 0;
    //     } else {
    //         carouselPosition += brandLogos[0].offsetWidth + 30;
    //     }
    //     updateCarousel();
    // }, 3000);
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }
});

// Initialize scroll to top button visibility
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        scrollToTopBtn.classList.remove('show');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#top') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Search Form Handler
document.querySelectorAll('.site-search form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input[type="text"]');
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Redirect to search results page
            window.location.href = `/search-results/?q=${encodeURIComponent(searchTerm)}`;
        }
    });
});

// Email Form Handler
document.querySelectorAll('.email-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        if (email) {
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing!');
            emailInput.value = '';
        }
    });
});

// Handle dropdown menus on mobile
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                const megaMenu = dropdown.querySelector('.mega-menu');
                if (megaMenu) {
                    megaMenu.style.display = megaMenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.mega-menu').forEach(menu => {
            if (window.innerWidth <= 767) {
                menu.style.display = 'none';
            }
        });
    }
});

// Responsive carousel adjustments
window.addEventListener('resize', function() {
    updateCarousel();
    carouselPosition = 0;
    updateCarousel();
});
