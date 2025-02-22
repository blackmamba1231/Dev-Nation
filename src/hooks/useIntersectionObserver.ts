import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<HTMLElement | null>;
  options?: IntersectionObserverInit;
}

export function useIntersectionObserver({
  ref,
  options = {
    threshold: 0,
    root: null,
    rootMargin: '0px',
  },
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}
