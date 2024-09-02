"use client"
import { ReactNode, useEffect } from "react";
import ScrollOut from "scroll-out";
type ScrollContainerPropsType = {
    children: ReactNode;
  };
export default function ScrollContainer({children}: ScrollContainerPropsType) {
  useEffect(()=>{
    ScrollOut({
      once: true,
      threshold: 0.3
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
