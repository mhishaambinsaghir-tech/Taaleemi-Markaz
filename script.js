/* ===================================
   تعلیمی مرکز - Taaleemi Markaz JavaScript
   Interactive Features and Form Validation
   =================================== */

// ===================================
// DOM Elements
// ===================================
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTop');
const heroParallax = document.getElementById('heroParallax');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Teachers scroll buttons
const teachersContainer = document.getElementById('teachersContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// ===================================
// Mobile Menu Toggle
// ===================================
if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===================================
// Sticky Header on Scroll
// ===================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================================
// Active Navigation Link
// ===================================
function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Parallax Effect for Hero Section
// ===================================
if (heroParallax) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroParallax.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
    });
}

// ===================================
// Reveal Animation on Scroll
// ===================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===================================
// Teachers Horizontal Scroll
// ===================================
if (teachersContainer && scrollLeftBtn && scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => {
        teachersContainer.scrollBy({
            left: -350, // Negative for RTL (scroll right means go left in RTL)
            behavior: 'smooth'
        });
    });

    scrollLeftBtn.addEventListener('click', () => {
        teachersContainer.scrollBy({
            left: 350, // Positive for RTL (scroll left means go right in RTL)
            behavior: 'smooth'
        });
    });

    // Show/hide scroll buttons based on scroll position
    teachersContainer.addEventListener('scroll', () => {
        const scrollLeft = teachersContainer.scrollLeft;
        const maxScroll = teachersContainer.scrollWidth - teachersContainer.clientWidth;
        
        // In RTL, scrollLeft is negative or reversed
        scrollLeftBtn.style.opacity = Math.abs(scrollLeft) > 10 ? '1' : '0.5';
        scrollRightBtn.style.opacity = Math.abs(scrollLeft) < Math.abs(maxScroll) - 10 ? '1' : '0.5';
    });
}

// ===================================
// Form Validation
// ===================================
if (contactForm) {
    const formInputs = {
        studentName: document.getElementById('studentName'),
        fatherName: document.getElementById('fatherName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        class: document.getElementById('class'),
        course: document.getElementById('course'),
        address: document.getElementById('address')
    };

    const errorMessages = {
        nameError: document.getElementById('nameError'),
        fatherError: document.getElementById('fatherError'),
        emailError: document.getElementById('emailError'),
        phoneError: document.getElementById('phoneError'),
        classError: document.getElementById('classError'),
        courseError: document.getElementById('courseError'),
        addressError: document.getElementById('addressError')
    };

    // Validation functions
    function validateName(name, errorElement, fieldName) {
        const namePattern = /^[\u0600-\u06FFa-zA-Z\s]{3,50}$/;
        
        if (!name) {
            showError(errorElement, `${fieldName} درج کریں`);
            return false;
        } else if (!namePattern.test(name)) {
            showError(errorElement, 'صحیح نام درج کریں');
            return false;
        } else {
            hideError(errorElement);
            return true;
        }
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            showError(errorMessages.emailError, 'ای میل درج کریں');
            return false;
        } else if (!emailPattern.test(email)) {
            showError(errorMessages.emailError, 'صحیح ای میل درج کریں');
            return false;
        } else {
            hideError(errorMessages.emailError);
            return true;
        }
    }

    function validatePhone(phone) {
        const phonePattern = /^[\d\s\-\+]{10,15}$/;
        
        if (!phone) {
            showError(errorMessages.phoneError, 'فون نمبر درج کریں');
            return false;
        } else if (!phonePattern.test(phone)) {
            showError(errorMessages.phoneError, 'صحیح فون نمبر درج کریں');
            return false;
        } else {
            hideError(errorMessages.phoneError);
            return true;
        }
    }

    function validateSelect(value, errorElement, fieldName) {
        if (!value) {
            showError(errorElement, `${fieldName} منتخب کریں`);
            return false;
        } else {
            hideError(errorElement);
            return true;
        }
    }

    function validateAddress(address) {
        if (!address) {
            showError(errorMessages.addressError, 'پتہ درج کریں');
            return false;
        } else if (address.length < 10) {
            showError(errorMessages.addressError, 'مکمل پتہ درج کریں');
            return false;
        } else {
            hideError(errorMessages.addressError);
            return true;
        }
    }

    function showError(element, message) {
        if (element) {
            element.textContent = message;
            element.classList.add('show');
            element.previousElementSibling.classList.add('error');
        }
    }

    function hideError(element) {
        if (element) {
            element.classList.remove('show');
            element.previousElementSibling.classList.remove('error');
        }
    }

    // Real-time validation
    formInputs.studentName.addEventListener('blur', () => {
        validateName(formInputs.studentName.value, errorMessages.nameError, 'طالب علم کا نام');
    });

    formInputs.fatherName.addEventListener('blur', () => {
        validateName(formInputs.fatherName.value, errorMessages.fatherError, 'والد کا نام');
    });

    formInputs.email.addEventListener('blur', () => {
        validateEmail(formInputs.email.value);
    });

    formInputs.phone.addEventListener('blur', () => {
        validatePhone(formInputs.phone.value);
    });

    formInputs.class.addEventListener('change', () => {
        validateSelect(formInputs.class.value, errorMessages.classError, 'کلاس');
    });

    formInputs.course.addEventListener('change', () => {
        validateSelect(formInputs.course.value, errorMessages.courseError, 'کورس');
    });

    formInputs.address.addEventListener('blur', () => {
        validateAddress(formInputs.address.value);
    });

    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        const isStudentNameValid = validateName(formInputs.studentName.value, errorMessages.nameError, 'طالب علم کا نام');
        const isFatherNameValid = validateName(formInputs.fatherName.value, errorMessages.fatherError, 'والد کا نام');
        const isEmailValid = validateEmail(formInputs.email.value);
        const isPhoneValid = validatePhone(formInputs.phone.value);
        const isClassValid = validateSelect(formInputs.class.value, errorMessages.classError, 'کلاس');
        const isCourseValid = validateSelect(formInputs.course.value, errorMessages.courseError, 'کورس');
        const isAddressValid = validateAddress(formInputs.address.value);

        // Check if all validations passed
        if (
            isStudentNameValid &&
            isFatherNameValid &&
            isEmailValid &&
            isPhoneValid &&
            isClassValid &&
            isCourseValid &&
            isAddressValid
        ) {
            try {
                // Submit form to Formspree
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show success message
                    formSuccess.classList.add('show');
                    contactForm.style.display = 'none';
                    
                    // Reset form after 5 seconds
                    setTimeout(() => {
                        contactForm.reset();
                        contactForm.style.display = 'flex';
                        formSuccess.classList.remove('show');
                    }, 5000);
                } else {
                    alert('فارم جمع کرانے میں مسئلہ ہوا۔ براہ کرم دوبارہ کوشش کریں۔');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('فارم جمع کرانے میں مسئلہ ہوا۔ براہ کرم دوبارہ کوشش کریں۔');
            }
        } else {
            // Scroll to first error
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

// ===================================
// Gallery Image Modal (Optional Enhancement)
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // You can add a lightbox/modal functionality here
        // For now, just adding a subtle click effect
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    });
});

// ===================================
// Counter Animation for Statistics (if needed)
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===================================
// Lazy Loading Images (Performance Optimization)
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Testimonials Auto-Scroll (Optional)
// ===================================
// You can add auto-scrolling testimonials if needed

// ===================================
// Initialize on Load
// ===================================
window.addEventListener('load', () => {
    // Trigger initial reveal animation
    revealOnScroll();
    
    // Remove loading class if you add one
    document.body.classList.remove('loading');
    
    // Log message for development
    console.log('تعلیمی مرکز - Website loaded successfully!');
});

// ===================================
// Prevent Right Click (Optional - for image protection)
// ===================================
// Uncomment if you want to prevent right-click on images
/*
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
*/

// ===================================
// Performance Optimization: Debounce Scroll Events
// ===================================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedReveal = debounce(revealOnScroll, 10);
const debouncedActiveLink = debounce(setActiveLink, 10);

window.addEventListener('scroll', debouncedReveal);
window.addEventListener('scroll', debouncedActiveLink);

// ===================================
// Add smooth hover effects for course cards
// ===================================
const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ===================================
// Keyboard Navigation Enhancement
// ===================================
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Scroll to top with Home key
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===================================
// Accessibility Enhancements
// ===================================
// Focus management for keyboard users
const focusableElements = document.querySelectorAll(
    'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--color-accent)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});

// ===================================
// Print Optimization
// ===================================
window.addEventListener('beforeprint', () => {
    // Close mobile menu before printing
    if (navMenu.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// Service Worker Registration (for PWA - Optional)
// ===================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/
