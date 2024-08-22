"use client"
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    NProgress.configure({ showSpinner: false, minimum: 0  });
    NProgress.start();

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 30);

    const timer = setTimeout(() => {
      NProgress.done();
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      NProgress.done();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="bg-[#333] fixed inset-0 w-full z-[1031] flex items-center justify-center">
        <div className="w-full">
        <div className="text-center text-white">
            {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loading;
