import { ReactNode } from "react";

export default function PageBackground({children}: {children: ReactNode}) {
  return (
    <div className="bg-[url('/assets/images/page-bg.png')] bg-[length:100%_auto] bg-no-repeat">
        {children}
    </div>
  );
}
