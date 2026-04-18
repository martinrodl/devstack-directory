import Link from "next/link";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="text-lg font-bold text-white">
                Dev<span className="text-emerald-400">Stack</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500">
              The best developer tools, APIs, and services — curated for indie
              hackers and solo founders building profitable SaaS products.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-zinc-500 transition hover:text-emerald-400"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">More</h3>
            <ul className="space-y-2">
              {categories.slice(6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-zinc-500 transition hover:text-emerald-400"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              For Tool Makers
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/submit"
                  className="text-sm text-zinc-500 transition hover:text-emerald-400"
                >
                  Submit Your Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="text-sm text-zinc-500 transition hover:text-emerald-400"
                >
                  Get Featured
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} DevStack. Built for indie hackers.
        </div>
      </div>
    </footer>
  );
}
