import { useEffect } from 'react';
import ScrollOut from "scroll-out";

const useScrollOut = (targets: string, options: any = {}) => {
  useEffect(() => {
    const scroll = new ScrollOut({
      targets,
      ...options,
    });

    return () => scroll.teardown();
  }, [targets, options]);
};

export default useScrollOut;