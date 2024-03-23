import { ReactNode } from "react";

type SectionContainerType = {
    children: ReactNode
}

export default function SectionContainer({children}: SectionContainerType) {
    return (
        <section className="content-scroll overflow-hidden" data-scroll>
            <div className="content-scroll-wrap">
                <div className="content-scroll-inner">
                    {children}
                </div>
            </div>
        </section>
    );
  }
  