export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: string | null): string {
  if (!price) return "Free";
  return price;
}

export function getToolCountByCategory(
  tools: { category: string }[],
  categorySlug: string
): number {
  return tools.filter((t) => t.category === categorySlug).length;
}
