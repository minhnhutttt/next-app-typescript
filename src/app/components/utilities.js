"use client"
// utilities.js
export const getFirstEle = (wrapper, className) => {
    return wrapper.querySelector(`.${className}`);
  };
  
  export const lerp = (a, b, t) => {
    return a + (b - a) * t;
  };
  