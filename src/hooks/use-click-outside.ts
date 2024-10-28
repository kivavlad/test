import { useEffect, RefObject } from "react";

interface IProps<T extends HTMLElement> {
  ref: RefObject<T>;
  callback: () => void;
}

export const useClickOutside = <T extends HTMLElement>({ ref, callback }: IProps<T>) => {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      } 
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [ref, callback])
}
