import { categories } from "@/data/categories";
import { tools, getFeaturedTools, searchTools } from "@/data/tools";
import { CategoryCard } from "@/components/CategoryCard";
import { ToolCard } from "@/components/ToolCard";
import { getToolCountByCategory } from "@/lib/utils";
import Link from "next/link";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const featured = getFeaturedTools();
  const results = query ? searchTools(query) : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Find the perfect tools for
          <br />
          <span className="text-emerald-400">your next SaaS</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          {tools.length}+ curated developer tools, APIs, and services — picked
          for indie hackers and solo founders who ship fast.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="#categories"
            className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            Browse Categories
          </Link>
          <Link
            href="/advertise"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            Advertise Here
          </Link>
        </div>
      </section>

      {/* Search Results */}
      {query && (
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Results for &ldquo;{query}&rdquo;
            <span className="ml-2 text-base font-normal text-zinc-500">
              ({results.length} found)
            </span>
          </h2>
          {results.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500">
              No tools found. Try a different search term.
            </p>
          )}
        </section>
      )}

      {/* Featured Tools */}
      {!query && (
        <>
          <section className="mb-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                Featured Tools
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

          {/* Categories */}
          <section id="categories" className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Browse by Category
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <CategoryCard
                  key={cat.slug}
                  category={cat}
                  toolCount={getToolCountByCategory(tools, cat.slug)}
                />
              ))}
            </div>
          </section>

          {/* All Tools */}
          <section>
            <h2 className="mb-6 text-2xl font-bold text-white">All Tools</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
