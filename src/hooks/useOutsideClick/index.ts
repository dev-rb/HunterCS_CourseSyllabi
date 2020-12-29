import { RefObject, useEffect, useState } from "react";

export const useOutsideClick = (ref: RefObject<HTMLDivElement>) => {

    const [outside, setOutside] = useState(false);


    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOutside(true);
            } else {
                setOutside(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };

    }, [ref])

    return outside;
}