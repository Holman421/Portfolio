import { useEffect } from "react";

type ScrollIntoViewProps = {
   ref: React.RefObject<HTMLDivElement>;
   margin?: number;
   useHook: boolean;
};

const useScrollIntoView = ({
   ref,
   margin = 0,
   useHook,
}: ScrollIntoViewProps) => {
   useEffect(() => {
      if (useHook) {
         const handleScroll = () => {
            const { top, bottom } = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isVisible =
               top + margin < windowHeight && bottom - margin > 0;
            if (!isVisible) {
               console.log("Its in the view!");
               //  ref.current.scrollIntoView({
               //     behavior: "smooth",
               //     block: "center",
               //  });
            }
         };

         if (ref.current) window.addEventListener("scroll", handleScroll);

         return () => window.removeEventListener("scroll", handleScroll);
      }
   }, [ref, margin, useHook]);
};

export default useScrollIntoView;
