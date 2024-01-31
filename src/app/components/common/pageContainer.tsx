import { ReactNode } from "react";
export type PageContainerPropsType = {
    children: ReactNode;
  };
export default function PageContainer({ children }: PageContainerPropsType) {
  return (
    <div className="bg-[#DFE3F7] bg-[url('/images/bg-page.png')] bg-[length:100%_auto] bg-no-repeat bg-top">
        {children}
    </div>
  );
}
