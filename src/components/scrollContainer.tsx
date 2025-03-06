"use client"
import { ReactNode, useEffect, useLayoutEffect } from "react";
import ScrollOut from "scroll-out";
type ScrollContainerPropsType = {
    children: ReactNode;
  };
export default function ScrollContainer({children}: ScrollContainerPropsType) {
    useLayoutEffect(()=>{
    ScrollOut({
      once: true,
      threshold: 0.9
    });
    setTimeout(() => {
      if ( window && document ) {
          const splitting = require('splitting');
          splitting();
      }
    });
},[])
  return (
    <div>
        {children}
    </div>
  );
}
