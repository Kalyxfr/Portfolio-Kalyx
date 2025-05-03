document.addEventListener('DOMContentLoaded', function() {
    initSite();
});

function initSite() {
    // Handle navigation menu for mobile
    setupMobileNav();
    
    // Setup page transitions
    setupPageTransitions();
    
    // Handle form submissions
    setupForms();
    
    // Setup FAQ accordion functionality
    setupFAQ();
    
    // Initialize project filters if on projects page
    if (document.querySelector('.projects-filter')) {
        setupProjectFilters();
    }
    
    // Initialize scroll-based animations
    setupScrollAnimations();
}

// Mobile Navigation Setup
function setupMobileNav() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        let menuOpen = false;
        
        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                navLinks.classList.add('active');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('active');
                menuOpen = false;
            }
        });

        // Close menu when clicking on links
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('active');
                menuOpen = false;
            });
        });
    }
    
    // Add scroll event to change header style
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Page Transitions
function setupPageTransitions() {
    // Add transition class to main element
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('page-transition');
    }
    
    // Handle navigation with smooth transitions
    document.querySelectorAll('a').forEach(link => {
        // Only apply to internal links
        if (link.href.includes(window.location.origin) && !link.getAttribute('target')) {
            link.addEventListener('click', function(e) {
                // Skip if modifier key is pressed
                if (e.ctrlKey || e.shiftKey || e.metaKey) return;
                
                const href = this.getAttribute('href');
                
                // Skip fragment links on the same page
                if (href.startsWith('#')) return;
                
                e.preventDefault();
                
                // Fade out current page
                document.body.style.opacity = '0';
                
                // Navigate after animation completes
                setTimeout(() => {
                    window.location = href;
                }, 300);
            });
        }
    });
}

// Form Handling
function setupForms() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.querySelector('.form-success-message');
    const sendAnotherBtn = document.getElementById('sendAnotherBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animate button during "submission"
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<span>Sending</span> <i class="fas fa-circle-notch fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Simulate form submission (would be replaced with actual AJAX in production)
            setTimeout(() => {
                contactForm.style.display = 'none';
                if (successMessage) {
                    successMessage.style.display = 'block';
                    // Add animation to success message
                    successMessage.classList.add('fade-in');
                    setTimeout(() => {
                        successMessage.classList.add('visible');
                    }, 10);
                }
            }, 1500);
        });
        
        // Handle "send another message" button
        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', function() {
                successMessage.style.display = 'none';
                contactForm.style.display = 'block';
                contactForm.reset();
                
                // Reset button state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
                submitBtn.disabled = false;
            });
        }
        
        // Add animation to form inputs
        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach(control => {
            const input = control.querySelector('input, textarea');
            if (input) {
                // Check if input already has content (e.g. on page reload)
                if (input.value.trim() !== '') {
                    input.parentElement.classList.add('active');
                }
                
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('active');
                });
                
                input.addEventListener('blur', function() {
                    if (this.value.trim() === '') {
                        this.parentElement.classList.remove('active');
                    }
                });
            }
        });
    }
}

// FAQ Accordion
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Project Filters
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    
                    // Add animation to items
                    setTimeout(() => {
                        item.classList.add('fade-in');
                        item.classList.add('visible');
                    }, 50);
                } else {
                    item.classList.remove('fade-in');
                    item.classList.remove('visible');
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Scroll-based Animations
function setupScrollAnimations() {
    // Animate skill bars on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (skillItems.length > 0) {
        const animateSkills = () => {
            skillItems.forEach(item => {
                const skillBar = item.querySelector('.skill-progress');
                const percentage = item.getAttribute('data-percentage');
                
                if (isElementInViewport(item) && !item.classList.contains('animated')) {
                    skillBar.style.width = percentage + '%';
                    item.classList.add('animated');
                }
            });
        };
        
        // Initial check
        animateSkills();
        
        // Check on scroll
        window.addEventListener('scroll', animateSkills);
    }
    
    // Animate elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    const staggerElements = document.querySelectorAll('.stagger-fade-in');
    
    const animateFadeElements = () => {
        fadeElements.forEach(elem => {
            if (isElementInViewport(elem) && !elem.classList.contains('visible')) {
                elem.classList.add('visible');
            }
        });
        
        // Handle staggered animations
        staggerElements.forEach((elem, index) => {
            if (isElementInViewport(elem) && !elem.classList.contains('visible')) {
                // Add delay based on index
                setTimeout(() => {
                    elem.classList.add('visible');
                }, index * 150); // 150ms delay between each element
            }
        });
    };
    
    // Initial check
    animateFadeElements();
    
    // Check on scroll
    window.addEventListener('scroll', animateFadeElements);
    
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const heroHeight = document.querySelector('.hero').offsetHeight;
            window.scrollTo({
                top: heroHeight - 100,
                behavior: 'smooth'
            });
        });
        
        // Hide scroll indicator when scrolled down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '0.7';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

// Utility: Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
