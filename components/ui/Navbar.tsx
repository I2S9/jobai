"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Discover", href: "/discover" },
  { label: "Resume Builder", href: "/resume-builder" },
  { label: "Interview Prep", href: "/interview-prep" },
  { label: "Offers", href: "/offers" },
  { label: "Dashboard", href: "/dashboard" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-5">
      <nav className="mx-auto max-w-7xl rounded-full border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="flex h-16 items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="JobAI"
              width={44}
              height={44}
              className="dark:invert"
            />
            <span className="text-xl font-bold tracking-tight text-black dark:text-white">
              JobAi
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-xl px-4 py-2.5 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2.5 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-black px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Sign Up
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-zinc-200 dark:border-zinc-800 lg:hidden">
            <ul className="space-y-1 px-5 pb-4 pt-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-black px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
