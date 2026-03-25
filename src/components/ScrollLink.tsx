"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const pathname = usePathname();
  const isHash = href.startsWith("#");
  const isOnHome = pathname === "/";

  if (isHash && isOnHome) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  if (isHash) {
    return (
      <Link href={`/${href}`} scroll={true} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
