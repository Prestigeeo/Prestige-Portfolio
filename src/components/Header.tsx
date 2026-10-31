"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About & Credentials" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        Prestige<span>.</span>
      </Link>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "site-nav open" : "site-nav"} aria-label="Main navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/assets/Owoeye%20Olajumoke%E2%80%99s%20CV.docx"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Resume ↗
        </a>
      </nav>
    </header>
  );
}
