import { useEffect } from 'react';
interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}
export function useScrollReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -180px 0px' } = options;
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let observer: IntersectionObserver;

    const timer = setTimeout(() => {
      const children = Array.from(container.children) as HTMLElement[];
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.visible = 'true';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold, rootMargin }
      );
      children.forEach((child) => observer.observe(child));
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [containerRef, threshold, rootMargin]);
}