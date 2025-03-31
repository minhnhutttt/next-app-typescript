"use client"
import { ReactNode, useEffect, useLayoutEffect } from "react";
import ScrollOut from "scroll-out";
type ScrollContainerPropsType = {
    children: ReactNode;
  };
export default function ScrollContainer({children}: ScrollContainerPropsType) {
  useEffect(()=>{
    setTimeout(() => {
      if ( window && document ) {
          const splitting = require('splitting');
          splitting();
      }
    });
    setTimeout(() => {
      ScrollOut({
        once: true,
      threshold: 0.5
      });
    }, 10);
},[])
  return (
    <div>
        {children}
    </div>
  );
}
