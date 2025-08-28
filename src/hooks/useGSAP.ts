import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type GSAPCallback = (gsapInstance: typeof gsap, context: gsap.Context) => void;

export const useGSAP = (callback: GSAPCallback, dependencies: any[] = []) => {
  const context = useRef<gsap.Context | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      context.current = gsap.context(() => {
        callback(gsap, context.current!);
      }, container.current);
    }

    return () => {
      context.current?.revert();
    };
  }, dependencies);

  return container;
};

export const useAnimation = () => {
  const createStaggerAnimation = (
    elements: gsap.TweenTarget,
    options: gsap.TweenVars = {},
    stagger: number = 0.1
  ) => {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger,
        ...options
      }
    );
  };

  const createHoverAnimation = (
    element: gsap.TweenTarget,
    hoverVars: gsap.TweenVars,
    revertVars: gsap.TweenVars
  ) => {
    const hover = gsap.to(element, {
      ...hoverVars,
      duration: 0.6,
      ease: 'power2.out'
    });

    const revert = gsap.to(element, {
      ...revertVars,
      duration: 0.8,
      ease: 'power2.out'
    });

    return { hover, revert };
  };

  const createScrollTrigger = (
    animation: gsap.core.Animation,
    trigger: gsap.DOMTarget,
    options: ScrollTrigger.Vars = {}
  ) => {
    return ScrollTrigger.create({
      animation,
      trigger,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options
    });
  };

  return {
    createStaggerAnimation,
    createHoverAnimation,
    createScrollTrigger,
    gsap
  };
};
