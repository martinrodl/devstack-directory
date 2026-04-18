import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `Best ${category.name} Tools for Developers`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-emerald-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-300">{category.name}</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-white">{category.name}</h1>
            <p className="mt-1 text-zinc-400">{category.description}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          {categoryTools.length} tools in this category
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {categoryTools.length === 0 && (
        <p className="text-center text-zinc-500">
          No tools in this category yet.{" "}
          <Link href="/submit" className="text-emerald-400 hover:underline">
            Submit one
          </Link>
        </p>
      )}
    </div>
  );
}
