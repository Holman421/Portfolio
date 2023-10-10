import { useState, useEffect, useRef } from "react";

interface useIsVisibleProps {
   root?: Element | null;
   rootMargin?: string;
   threshold?: number | number[];
}

function useIsVisible(
   options: useIsVisibleProps = {}
): [React.MutableRefObject<HTMLDivElement>, boolean] {
   const [isIntersecting, setIsIntersecting] = useState(false);
   const [hasTriggered, setHasTriggered] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
         if (!hasTriggered && entry.isIntersecting) {
            setIsIntersecting(true);
            setHasTriggered(true);
         }
      }, options);

      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         observer.disconnect();
      };
   }, [options, hasTriggered]);

   return [ref, isIntersecting];
}

export default useIsVisible;
