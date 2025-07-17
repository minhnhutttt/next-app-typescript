import Link from "next/link";
import { ComponentProps } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { pageAnimation } from "@/components/container/PageAnimation";

type NavLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export const NavLink = ({href, children, ...prop}: NavLinkProps) => {
  const router = useTransitionRouter();

  return (
    <Link
        href={href}
        {...prop}
         scroll={false}
        onClick={(e) => {
        e.preventDefault();
        router.push(href, {
            onTransitionReady: pageAnimation,
        });
        }}
    >
        {children}
    </Link>
  );
};