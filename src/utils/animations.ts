import { gsap } from 'gsap';

export const caseStudyAnimations = {
  // Card entrance animations
  cardEntrance: (element: gsap.TweenTarget, index: number) => {
    return gsap.fromTo(element, 
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
        rotationX: -15
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: index * 0.2
      }
    );
  },

  // Hover animations
  cardHover: (element: gsap.TweenTarget) => {
    return gsap.to(element, {
      scale: 1.05,
      y: -10,
      rotationY: 5,
      duration: 0.6,
      ease: 'power2.out'
    });
  },

  cardHoverOut: (element: gsap.TweenTarget) => {
    return gsap.to(element, {
      scale: 1,
      y: 0,
      rotationY: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  },

  // Content reveal animations
  contentReveal: (element: gsap.TweenTarget) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  },

  // Image/video reveal
  mediaReveal: (element: gsap.TweenTarget) => {
    return gsap.fromTo(element,
      {
        scale: 1.1,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }
    );
  },

  // Glow effect
  glowEffect: (element: gsap.TweenTarget) => {
    return gsap.to(element, {
      boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
      duration: 0.5,
      ease: 'power2.out'
    });
  },

  glowEffectOut: (element: gsap.TweenTarget) => {
    return gsap.to(element, {
      boxShadow: '0 0 0px rgba(255, 255, 255, 0)',
      duration: 0.5,
      ease: 'power2.out'
    });
  },

  // Stagger animations for multiple elements
  staggerCards: (elements: gsap.TweenTarget) => {
    return gsap.fromTo(elements,
      {
        opacity: 0,
        y: 80,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      }
    );
  }
};

export const createScrollTrigger = (animation: gsap.core.Animation, trigger: gsap.DOMTarget) => {
  return gsap.to(trigger, {
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      animation // Corrected property name
    }
  });
};
