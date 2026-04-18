import Link from "next/link";
import type { Category } from "@/data/categories";

export function CategoryCard({
  category,
  toolCount,
}: {
  category: Category;
  toolCount: number;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-emerald-500/50 hover:bg-zinc-900"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-2xl">
        {category.icon}
      </span>
      <div className="flex-1">
        <h3 className="font-semibold text-white group-hover:text-emerald-400">
          {category.name}
        </h3>
        <p className="text-xs text-zinc-500">{toolCount} tools</p>
      </div>
      <svg
        className="h-4 w-4 text-zinc-600 transition group-hover:text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}
