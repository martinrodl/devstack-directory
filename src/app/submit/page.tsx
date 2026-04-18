import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submit Your Tool",
  description:
    "Get your developer tool listed on DevStack — the directory trusted by indie hackers and solo founders.",
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-emerald-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-300">Submit Tool</span>
      </nav>

      <h1 className="text-3xl font-bold text-white">Submit Your Tool</h1>
      <p className="mt-2 text-zinc-400">
        Get your developer tool, API, or service listed on DevStack.
        Free submissions are reviewed within 7 days.
        <Link
          href="/advertise"
          className="ml-1 text-emerald-400 hover:underline"
        >
          Want it faster? Get featured.
        </Link>
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Tool Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="e.g. Supabase"
          />
        </div>

        <div>
          <label
            htmlFor="url"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Website URL *
          </label>
          <input
            type="url"
            id="url"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="https://..."
          />
        </div>

        <div>
          <label
            htmlFor="tagline"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Tagline *
          </label>
          <input
            type="text"
            id="tagline"
            required
            maxLength={80}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="One line describing your tool"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Description *
          </label>
          <textarea
            id="description"
            required
            rows={4}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="What does your tool do and who is it for?"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Category *
          </label>
          <select
            id="category"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="">Select a category</option>
            <option value="authentication">Authentication</option>
            <option value="payments">Payments & Billing</option>
            <option value="database">Databases</option>
            <option value="hosting">Hosting & Deployment</option>
            <option value="email">Email Services</option>
            <option value="ai">AI & Machine Learning</option>
            <option value="analytics">Analytics & Monitoring</option>
            <option value="ui">UI & Design Systems</option>
            <option value="cms">CMS & Content</option>
            <option value="boilerplate">Boilerplates & Starter Kits</option>
            <option value="storage">Storage & CDN</option>
            <option value="marketing">Marketing & SEO</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="pricing"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Pricing Model *
          </label>
          <select
            id="pricing"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="">Select pricing</option>
            <option value="free">Free</option>
            <option value="freemium">Freemium</option>
            <option value="paid">Paid</option>
            <option value="open-source">Open Source</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-zinc-300"
          >
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-black transition hover:bg-emerald-400"
        >
          Submit for Review (Free)
        </button>

        <p className="text-center text-sm text-zinc-500">
          Free submissions are reviewed within 7 days. For instant listing and a
          featured badge,{" "}
          <Link href="/advertise" className="text-emerald-400 hover:underline">
            check our featured plans
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
