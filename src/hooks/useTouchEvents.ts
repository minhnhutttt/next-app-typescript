import { useEffect } from 'react';

export function useTouchEvents() {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const htmlTag = document.documentElement;

    if (isTouchDevice) {
      htmlTag.classList.add('touchevents');
      htmlTag.classList.remove('no-touchevents');
    } else {
      htmlTag.classList.add('no-touchevents');
      htmlTag.classList.remove('touchevents');
    }
  }, []);
}
