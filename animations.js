// ============================
// Animations JavaScript
// ============================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations when DOM is fully loaded
    initAnimations();
});

// Main initialization function for animations
function initAnimations() {
    // Handle loading screen animation
    animateLoadingScreen();
    
    // Initialize glitch text effect
    initGlitchText();
    
    // Initialize neon glow effects
    initNeonGlow();
    
    // Initialize typing animation for specific elements
    initTypingAnimation();
    
    // Initialize hover effects for cards and interactive elements
    initHoverEffects();
    
    // Add scan line effect to certain sections
    addScanLineEffect();
    
    // Add digital rain effect to background elements
    addDigitalRainEffect();
    
    // Initialize floating elements
    initFloatingElements();
    
    // Run animations for specific pages
    runPageSpecificAnimations();
}

// Loading Screen Animation
function animateLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const progressBar = document.querySelector('.progress');
    const loadingText = document.querySelector('.loading-text');
    
    if (loadingScreen && progressBar) {
        // Array of loading messages to cycle through
        const loadingMessages = [
            "Loading security protocols...",
            "Establishing secure connection...",
            "Decrypting data...",
            "Verifying credentials...",
            "Initializing interface...",
            "Scanning for threats...",
            "Configuring firewall...",
            "Preparing neural network...",
            "System check in progress..."
        ];
        
        let messageIndex = 0;
        
        // Update loading message every 800ms
        const messageInterval = setInterval(() => {
            if (loadingText) {
                loadingText.textContent = loadingMessages[messageIndex];
                messageIndex = (messageIndex + 1) % loadingMessages.length;
            }
        }, 800);
        
        // Animate progress bar
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                clearInterval(messageInterval);
                
                // When loading is complete
                if (loadingText) {
                    loadingText.textContent = "Access granted!";
                }
                
                // Fade out loading screen
                setTimeout(() => {
                    loadingScreen.classList.add('fade-out');
                    document.body.classList.add('loaded');
                }, 500);
            }
        }, 30); // Adjust speed as needed
    }
}

// Glitch Text Effect
function initGlitchText() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        // Ensure data-text attribute exists for the glitch effect
        if (!element.getAttribute('data-text')) {
            element.setAttribute('data-text', element.textContent);
        }
        
        // Add random glitch intensity
        const randomIntensity = Math.random() * 2 + 1; // Between 1 and 3
        element.style.setProperty('--glitch-intensity', randomIntensity);
    });
}

// Neon Glow Effect
function initNeonGlow() {
    // Add neon glow to cyber headings
    const cyberHeadings = document.querySelectorAll('.cyber-heading');
    cyberHeadings.forEach(heading => {
        heading.classList.add('neon-glow');
    });
    
    // Add green neon glow to accent elements
    const accentElements = document.querySelectorAll('.accent');
    accentElements.forEach(element => {
        element.classList.add('neon-glow-green');
    });
}

// Typing Animation for Terminal-like Text
function initTypingAnimation() {
    // Find elements with 'typing' class
    const typingElements = document.querySelectorAll('.typing');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.display = 'inline-block';
        
        let charIndex = 0;
        const typingSpeed = 50; // ms per character
        
        function typeChar() {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed + Math.random() * 50); // Random variation in typing speed
            } else {
                // When typing is complete, add cursor blink effect
                element.classList.add('terminal-typing');
            }
        }
        
        // Start typing with a small delay
        setTimeout(typeChar, 1000);
    });
}

// Hover Effects for Interactive Elements
function initHoverEffects() {
    // Add effects to cards
    const cards = document.querySelectorAll('.card, .project-card, .expertise-card, .value-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('cyber-shadow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('cyber-shadow');
        });
    });
    
    // Add circuit border effect to buttons on hover
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('cyber-btn');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('cyber-btn');
        });
    });
}

// Scan Line Effect
function addScanLineEffect() {
    // Add scan line effect to the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('scan-lines');
    }
    
    // Add scan line effect to project images
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.classList.add('scan-lines');
    });
}

// Digital Rain Effect
function addDigitalRainEffect() {
    // Add digital rain to specific background sections
    const rainSections = [
        document.querySelector('.expertise-section'),
        document.querySelector('.skills-overview'),
        document.querySelector('.timeline-section')
    ];
    
    rainSections.forEach(section => {
        if (section) {
            section.classList.add('digital-rain');
        }
    });
}

// Floating Elements Animation
function initFloatingElements() {
    // Add floating animation to selected elements
    const floatingElements = [
        document.querySelector('.hero-image'),
        document.querySelectorAll('.cert-card')
    ];
    
    // Apply to hero image
    if (floatingElements[0]) {
        floatingElements[0].classList.add('floating');
    }
    
    // Apply to cert cards with staggered delays
    if (floatingElements[1].length > 0) {
        floatingElements[1].forEach((card, index) => {
            card.classList.add('floating');
            card.style.animationDelay = (index * 0.7) + 's';
        });
    }
}

// Page-specific Animations
function runPageSpecificAnimations() {
    // Get current page from URL
    const currentPath = window.location.pathname;
    
    // Handle specific animations based on page
    if (currentPath.includes('skills.html')) {
        animateSkillsPage();
    } else if (currentPath.includes('projects.html')) {
        animateProjectsPage();
    } else if (currentPath.includes('about.html')) {
        animateAboutPage();
    } else if (currentPath.includes('contact.html')) {
        animateContactPage();
    } else {
        // Home page or default
        animateHomePage();
    }
}

// Home Page Animations
function animateHomePage() {
    // Add matrix-like binary background to the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('binary-bg');
    }
    
    // Add circuit border to featured cards
    const featuredCards = document.querySelectorAll('.card');
    featuredCards.forEach(card => {
        card.classList.add('circuit-border');
    });
    
    // Add hacking text effect to hero heading
    const heroHeading = document.querySelector('.hero-text h1');
    if (heroHeading) {
        heroHeading.classList.add('hacking-text');
    }
}

// Skills Page Animations
function animateSkillsPage() {
    // Add radar scan effect to the skills section
    const skillsSection = document.querySelector('.skills-overview');
    if (skillsSection) {
        skillsSection.classList.add('radar-scan');
    }
    
    // Add electricity effect to expertise cards
    const expertiseCards = document.querySelectorAll('.expertise-card');
    expertiseCards.forEach(card => {
        card.classList.add('electricity');
    });
    
    // Add pulsing effect to certifications
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        card.classList.add('pulse');
    });
}

// Projects Page Animations
function animateProjectsPage() {
    // Add hologram effect to project images
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.classList.add('hologram');
    });
    
    // Add flicker effect to project titles
    const projectTitles = document.querySelectorAll('.project-content h3');
    projectTitles.forEach(title => {
        title.classList.add('flicker');
    });
    
    // Add data process animation to tech stack items
    const techItems = document.querySelectorAll('.tech-stack span');
    techItems.forEach(item => {
        item.classList.add('data-process');
    });
}

// About Page Animations
function animateAboutPage() {
    // Add circuit line animation to timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.add('circuit-line');
    });
    
    // Add data lines effect to value cards
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.classList.add('data-lines');
    });
    
    // Add reveal animation to about text paragraphs
    const aboutTextParagraphs = document.querySelectorAll('.about-text p');
    aboutTextParagraphs.forEach((p, index) => {
        p.classList.add('reveal');
        p.style.animationDelay = (index * 0.3) + 's';
    });
}

// Contact Page Animations
function animateContactPage() {
    // Add glitch effect to contact form inputs on focus
    const formInputs = document.querySelectorAll('.form-control input, .form-control textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('data-process');
        });
        
        input.addEventListener('blur', function() {
            this.classList.remove('data-process');
        });
    });
    
    // Add shake animation to submit button on hover
    const submitButton = document.querySelector('.contact-form button[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('mouseenter', function() {
            this.classList.add('shake');
            
            // Remove class after animation completes
            setTimeout(() => {
                this.classList.remove('shake');
            }, 500);
        });
    }
    
    // Add typing animation to FAQ questions
    const faqQuestions = document.querySelectorAll('.faq-question h3');
    faqQuestions.forEach(question => {
        question.classList.add('terminal-typing');
    });
}

// Create Matrix-like falling code effect (optional background effect)
function createMatrixEffect(targetSelector) {
    const target = document.querySelector(targetSelector);
    
    if (!target) return;
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.className = 'matrix-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.07';
    
    // Prepend canvas as the first child of the target
    target.style.position = 'relative';
    target.prepend(canvas);
    
    // Set canvas size
    canvas.width = target.offsetWidth;
    canvas.height = target.offsetHeight;
    
    // Get the drawing context
    const ctx = canvas.getContext('2d');
    
    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixChars = matrix.split('');
    
    // Set columns based on canvas width
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    // Array to track the y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    // Draw the matrix effect
    function drawMatrix() {
        // Set semi-transparent background to create trail effect
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set color and font for the falling characters
        ctx.fillStyle = '#0af';
        ctx.font = fontSize + 'px monospace';
        
        // Loop through each drop
        for (let i = 0; i < drops.length; i++) {
            // Select a random character
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            
            // Draw the character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Reset if drop reaches bottom or randomly for some drops
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move the drop down
            drops[i]++;
        }
    }
    
    // Run the animation at 30fps
    const matrixInterval = setInterval(drawMatrix, 33);
    
    // Handle resize
    window.addEventListener('resize', () => {
        clearInterval(matrixInterval);
        canvas.width = target.offsetWidth;
        canvas.height = target.offsetHeight;
        
        // Reset drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        // Restart animation
        setInterval(drawMatrix, 33);
    });
}

// Call matrix effect for specific elements
// Uncomment to enable matrix background in specific sections
// window.addEventListener('load', function() {
//     createMatrixEffect('.expertise-section');
// });
