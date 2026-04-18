import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools, getToolBySlug, getToolsByCategory } from "@/data/tools";
import { getCategoryBySlug } from "@/data/categories";
import { ToolCard } from "@/components/ToolCard";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    keywords: tool.tags,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.category);
  const relatedTools = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 3);
  const alternativeTools = tool.alternatives
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  const pricingColors: Record<string, string> = {
    free: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    freemium: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    paid: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "open-source": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-emerald-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link
              href={`/category/${category.slug}`}
              className="transition hover:text-emerald-400"
            >
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-zinc-300">{tool.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-800 text-3xl font-bold text-emerald-400">
            {tool.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{tool.name}</h1>
            <p className="mt-1 text-lg text-zinc-400">{tool.tagline}</p>
          </div>
        </div>
        <a
          href={tool.affiliateUrl ?? tool.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="hidden shrink-0 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400 sm:block"
        >
          Visit Website &rarr;
        </a>
      </div>

      {/* Mobile CTA */}
      <a
        href={tool.affiliateUrl ?? tool.url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="mb-8 block rounded-lg bg-emerald-500 py-3 text-center font-medium text-black transition hover:bg-emerald-400 sm:hidden"
      >
        Visit Website &rarr;
      </a>

      {/* Info Bar */}
      <div className="mb-8 flex flex-wrap gap-3">
        <span
          className={`rounded-full border px-3 py-1 text-sm font-medium ${pricingColors[tool.pricing]}`}
        >
          {tool.pricing === "open-source" ? "Open Source" : tool.pricing}
        </span>
        {tool.startingPrice && (
          <span className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300">
            From {tool.startingPrice}
          </span>
        )}
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold text-white">Overview</h2>
        <p className="leading-relaxed text-zinc-300">{tool.description}</p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold text-white">
          Key Features
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {tool.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-zinc-300">
              <span className="mt-0.5 text-emerald-400">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Pros & Cons */}
      <div className="mb-10 grid gap-6 sm:grid-cols-2">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">Pros</h2>
          <ul className="space-y-2">
            {tool.pros.map((pro) => (
              <li
                key={pro}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-0.5 text-emerald-400">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">Cons</h2>
          <ul className="space-y-2">
            {tool.cons.map((con) => (
              <li
                key={con}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-0.5 text-red-400">−</span>
                {con}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Alternatives */}
      {alternativeTools.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Alternatives to {tool.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alternativeTools.map(
              (alt) => alt && <ToolCard key={alt.slug} tool={alt} />
            )}
          </div>
        </section>
      )}

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            More in {category?.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
