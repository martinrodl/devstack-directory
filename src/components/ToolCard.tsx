import Link from "next/link";
import type { Tool } from "@/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const pricingColors: Record<string, string> = {
    free: "bg-emerald-500/10 text-emerald-400",
    freemium: "bg-blue-500/10 text-blue-400",
    paid: "bg-amber-500/10 text-amber-400",
    "open-source": "bg-purple-500/10 text-purple-400",
  };

  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-emerald-500/50 hover:bg-zinc-900"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-lg">
            {tool.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-emerald-400">
              {tool.name}
            </h3>
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${pricingColors[tool.pricing]}`}
            >
              {tool.pricing === "open-source" ? "Open Source" : tool.pricing}
            </span>
          </div>
        </div>
        {tool.isFeatured && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {tool.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {tool.startingPrice && (
        <p className="mt-3 text-xs text-zinc-500">
          From {tool.startingPrice}
        </p>
      )}
    </Link>
  );
}
