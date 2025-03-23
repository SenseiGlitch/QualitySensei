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
 * Initialize all animations and enhancements
 */
export function initAnimations() {
  initScrollAnimations();
  enhanceButtons();
  enhanceCards();
}