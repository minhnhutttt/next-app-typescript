"use client"
import { ReactNode, useEffect } from "react";
import ScrollOut from "scroll-out";
type ScrollContainerPropsType = {
    children: ReactNode;
  };
export default function ScrollContainer({children}: ScrollContainerPropsType) {
  useEffect(()=>{
    const scroll = new ScrollOut({
      threshold: 0.9
  });

    setTimeout(() => {
      if ( window && document ) {
          const splitting = require('splitting');
          splitting();
      }
    });
  return () => scroll.teardown();

},[])
  return (
    <div>
        {children}
    </div>
  );
}
