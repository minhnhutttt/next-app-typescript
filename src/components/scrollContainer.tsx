"use client";

import { ReactNode, useEffect } from "react";

import ScrollOut from "scroll-out";

type ScrollContainerPropsType = {
  children: ReactNode;
};

const ScrollContainer = ({ children }: ScrollContainerPropsType) => {
  useEffect(() => {
    setTimeout(() => {
      ScrollOut({
        once: true,
        threshold: 0.5,
      });
    }, 10);
  }, []);
  return <div>{children}</div>;
};

export default ScrollContainer;
