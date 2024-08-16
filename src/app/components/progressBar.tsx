import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface ProgressBarProps {
  onComplete: () => void;
}

const ProgressBar = ({ onComplete }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 30); // 3000ms / 100 = 30ms per percentage point

    const timer = setTimeout(() => {
      NProgress.done();
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      NProgress.done();
    };
  }, [onComplete]);

  return (
    <div className="bg-white fixed inset-0 w-full z-[1031] flex items-center justify-center font-['STIX_Two_Text']">
        <div className="w-full">
        <div style={{ textAlign: 'center', marginBottom: '8px', color: '#000' }}>
            {progress}%
        </div>
        <div className='origin-left' style={{ height: '2px', background: '#000', width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
