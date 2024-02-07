import { useEffect, useState } from 'react';
import isMobile from 'is-mobile';

function useIsMobile() {
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    function handleResize() {
      setMobile(isMobile());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mobile;
}

export default useIsMobile;
