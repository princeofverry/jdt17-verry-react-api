import { useEffect } from "react";

/**
 * A lightweight custom React hook that runs IntersectionObserver
 * on elements with the 'reveal-hidden' class, adding 'reveal-visible'
 * as they scroll into view.
 */
export const useScrollReveal = (dependency?: any) => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -100px 0px", // Trigger when element is 100px from viewport bottom
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          // Once animated, we no longer need to observe it
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll(".reveal-hidden");
    
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [dependency]); // Re-run if dependency changes (e.g. active tab changes)
};
