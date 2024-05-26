import { useEffect, useRef } from "react";

export const useIfHasScrollbar = () => {
    const ref = useRef<HTMLUListElement>(null);
    useEffect(() => {
        function updateState() {
           const el = ref.current;
           if(el && el.scrollHeight > el.clientHeight){
            document.querySelector("body")?.classList.add("with_scrollbar")
           }
           else{
            document.querySelector("body")?.classList.remove("with_scrollbar")
           }
        }
  
        updateState();
  
        ref.current?.addEventListener('resize', updateState);
        return () => ref.current?.removeEventListener('resize', updateState);
     }, [ref.current?.scrollHeight]);

     return ref
}
