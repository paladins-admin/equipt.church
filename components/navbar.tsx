'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const links = [
  ['Features', '/features'],
  ['Churches', '/for-churches'],
  ['About', '/about'],
];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={'navbar ' + (scrolled || open ? 'solid' : '')}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="wrap nav-inner">
        <Link
          href="/"
          className="logo"
          aria-label="Equipt home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            e
          </span>
          equipt<span className="logo-dot">.</span>
        </Link>
        <nav aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                path === href || path === href + '/' ? 'page' : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link
            className="button primary small"
            href="/download"
            onClick={() => setOpen(false)}
          >
            Get Equipt <ArrowUpRight size={16} />
          </Link>
          <Button
            ref={toggle}
            className="mobile-toggle"
            variant="ghost"
            size="icon"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map(([label, href]) => (
          <Link
            href={href}
            key={href}
            onClick={() => setOpen(false)}
            aria-current={path === href ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
        <Link href="/support" onClick={() => setOpen(false)}>
          Support
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
