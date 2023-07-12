import { RefObject, useEffect, useRef, useState } from "react";

const useReveal = <T extends HTMLElement>(): [boolean, RefObject<T>] => {
  const [revealed, setRevealed] = useState(false);
  const revealableRef = useRef<T>(null);

  const handleReveal = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setRevealed(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleReveal);

    if (revealableRef.current) observer.observe(revealableRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [revealed, revealableRef];
};

export default useReveal;
