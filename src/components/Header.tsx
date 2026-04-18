"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">⚡</span>
          <span className="text-lg font-bold text-white">
            Dev<span className="text-emerald-400">Stack</span>
          </span>
        </Link>

        <div className="hidden flex-1 justify-center px-8 md:flex">
          <SearchBar />
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/category/ai"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            AI Tools
          </Link>
          <Link
            href="/submit"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Submit Tool
          </Link>
          <Link
            href="/advertise"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400"
          >
            Get Featured
          </Link>
        </nav>

        <button
          className="text-zinc-400 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-800 px-4 py-4 md:hidden">
          <SearchBar />
          <nav className="mt-4 flex flex-col gap-3">
            <Link
              href="/category/ai"
              className="text-sm text-zinc-400"
              onClick={() => setMobileOpen(false)}
            >
              AI Tools
            </Link>
            <Link
              href="/submit"
              className="text-sm text-zinc-400"
              onClick={() => setMobileOpen(false)}
            >
              Submit Tool
            </Link>
            <Link
              href="/advertise"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-center text-sm font-medium text-black"
              onClick={() => setMobileOpen(false)}
            >
              Get Featured
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
