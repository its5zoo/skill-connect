import { useEffect } from 'react';
interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}
export function useScrollReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    const observer = new IntersectionObserver(
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
    return () => observer.disconnect();
  }, [containerRef, threshold, rootMargin]);
}