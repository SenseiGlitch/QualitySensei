// Animations utility for scroll-triggered animations

/**
 * Initializes scroll animations on elements with animation classes
 * Adds 'visible' class when elements come into view
 */
export function initScrollAnimations() {
  // Function to check if an element is in the viewport
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && 
      rect.bottom >= 0
    );
  };

  // Get all elements with animation classes
  const animateElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
  );

  // Function to handle scroll and show elements
  const handleScroll = () => {
    animateElements.forEach((element) => {
      if (isElementInViewport(element) && !element.classList.contains('visible')) {
        element.classList.add('visible');
      }
    });
  };

  // Add event listener for scroll
  window.addEventListener('scroll', handleScroll);
  
  // Trigger once on load
  handleScroll();

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Enhances buttons with gradient hover effect
 */
export function enhanceButtons() {
  // Add the hover effect class to all buttons
  const buttons = document.querySelectorAll('button:not(.btn-hover-effect)');
  buttons.forEach((button) => {
    button.classList.add('btn-hover-effect');
  });
}

/**
 * Enhances cards with hover effect
 */
export function enhanceCards() {
  // Add hover effect class to card-like elements
  const cards = document.querySelectorAll('.card:not(.card-hover), article:not(.card-hover)');
  cards.forEach((card) => {
    card.classList.add('card-hover');
  });
}

/**
 * Applies gradient text effect to elements with specific classes
 */
export function enhanceGradientText() {
  // Add smooth gradient text animation to elements with gradient-text class
  const gradientElements = document.querySelectorAll('[class*="gradient-text"]:not(.gradient-text-animated)');
  gradientElements.forEach((element) => {
    element.classList.add('gradient-text-animated');
  });
}

/**
 * Initializes parallax scrolling effect on elements
 */
export function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleParallaxScroll = () => {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute('data-parallax-speed') || '0.5';
      const yPos = -(scrollTop * parseFloat(speed));
      element.setAttribute('style', `transform: translate3d(0, ${yPos}px, 0)`);
    });
  };
  
  window.addEventListener('scroll', handleParallaxScroll);
  handleParallaxScroll(); // Initial call
  
  return () => {
    window.removeEventListener('scroll', handleParallaxScroll);
  };
}

/**
 * Attaches animation to theme toggle for smooth transition
 */
export function enhanceThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (themeToggle) {
    if (!themeToggle.classList.contains('theme-toggle-enhanced')) {
      themeToggle.classList.add('theme-toggle-enhanced');
      themeToggle.addEventListener('click', () => {
        document.documentElement.classList.add('theme-transition');
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transition');
        }, 1000);
      });
    }
  }
}

/**
 * Initialize all animations and enhancements
 */
export function initAnimations() {
  // Initialize our animation enhancements
  initScrollAnimations();
  enhanceButtons();
  enhanceCards();
  enhanceGradientText();
  initParallaxEffect();
  enhanceThemeToggle();
  
  // Add MutationObserver to handle dynamically loaded elements
  const bodyObserver = new MutationObserver((mutations) => {
    // Re-run our enhancements when DOM changes
    enhanceButtons();
    enhanceCards();
    enhanceGradientText();
    enhanceThemeToggle();
  });
  
  // Start observing
  bodyObserver.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
  // Return cleanup function
  return () => {
    bodyObserver.disconnect();
  };
}