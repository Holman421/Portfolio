import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentPageIndex } from "../../Redux/reducers/themeReducer";
import { CurrentPageIndex } from "../../Types/Types";

const useUpdateCurrentPage = (
   ref: React.RefObject<Element>,
   index: CurrentPageIndex
) => {
   const dispatch = useDispatch();
   const observer = useRef(null);

   useEffect(() => {
      observer.current = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               dispatch(updateCurrentPageIndex({ index }));
            }
         },
         { threshold: 0.5 }
      );

      if (ref.current) {
         observer.current.observe(ref.current);
      }

      return () => {
         if (ref.current) {
            observer.current.unobserve(ref.current);
         }
      };
   }, [dispatch, index, ref]);

   return null;
};

export default useUpdateCurrentPage;
