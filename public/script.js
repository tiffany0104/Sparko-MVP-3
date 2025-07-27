// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 249, 244, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 249, 244, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.feature-card, .stat, .node');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button Click Animations
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Swipe Card Animation
    const swipeCard = document.querySelector('.swipe-card');
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.classList.contains('like') ? 'like' : 
                          this.classList.contains('pass') ? 'pass' : 'spark';
            
            // Animate card based on action
            if (action === 'like') {
                swipeCard.style.transform = 'translateX(100px) rotate(15deg)';
                swipeCard.style.opacity = '0.7';
            } else if (action === 'pass') {
                swipeCard.style.transform = 'translateX(-100px) rotate(-15deg)';
                swipeCard.style.opacity = '0.7';
            } else if (action === 'spark') {
                swipeCard.style.transform = 'scale(1.1)';
                swipeCard.style.boxShadow = '0 0 30px rgba(233, 196, 106, 0.8)';
            }
            
            // Reset card after animation
            setTimeout(() => {
                swipeCard.style.transform = '';
                swipeCard.style.opacity = '';
                swipeCard.style.boxShadow = '';
            }, 500);
        });
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            const rate = scrolled * -0.5;
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });

    // Counter Animation for Stats
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000000) {
                element.textContent = (current / 1000000).toFixed(1) + 'M+';
            } else if (target >= 1000) {
                element.textContent = (current / 1000).toFixed(0) + 'K+';
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 20);
    }

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat h3');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    let target = 0;
                    
                    if (text.includes('10K+')) target = 10000;
                    else if (text.includes('500+')) target = 500;
                    else if (text.includes('$50M+')) target = 50000000;
                    
                    if (target > 0) {
                        animateCounter(stat, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Form handling for CTA buttons (placeholder functionality)
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Join Now')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Show a simple modal or alert (in a real app, this would open a signup form)
                const modal = document.createElement('div');
                modal.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.8);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 10000;
                    ">
                        <div style="
                            background: white;
                            padding: 2rem;
                            border-radius: 20px;
                            text-align: center;
                            max-width: 400px;
                            margin: 20px;
                        ">
                            <h3 style="color: #F4A261; margin-bottom: 1rem;">Welcome to Sparko!</h3>
                            <p style="margin-bottom: 1.5rem; color: #2D2D2D;">Sign up functionality would be implemented here.</p>
                            <button onclick="this.closest('div').remove()" style="
                                background: #F4A261;
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 25px;
                                cursor: pointer;
                                font-weight: 600;
                            ">Close</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);
            });
        }
    });

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
    
    body.loaded * {
        animation-play-state: running;
    }
    
    .phone-mockup {
        animation: phoneFloat 4s ease-in-out infinite;
    }
    
    @keyframes phoneFloat {
        0%, 100% {
            transform: rotate(5deg) translateY(0px);
        }
        50% {
            transform: rotate(5deg) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

