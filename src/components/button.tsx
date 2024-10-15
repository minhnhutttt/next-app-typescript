import { ReactNode } from "react";

export default function Button({href, rect, children, target}: {href: string, rect: string, children: ReactNode, target?: string}) {
  return (
    <a href={href} target={target} className={`kp-btn kp-btn-medium kp-btn-solid kp-btn-wave-hover ${rect}`}>
        <span className="kp-btn-text">{children}</span>
        <span className="kp-btn-wave-holder"></span>
    </a>
  );
}
