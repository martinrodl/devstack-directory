import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertise & Get Featured",
  description:
    "Promote your developer tool to thousands of indie hackers and solo founders. Featured listings, sponsored categories, and banner ads.",
};

const plans = [
  {
    name: "Expedited Review",
    price: "$47",
    period: "one-time",
    description:
      "Skip the queue and get your tool reviewed and listed within 24 hours.",
    features: [
      "Listed within 24 hours",
      "Full tool profile page",
      "Appear in category listing",
      "Permanent listing",
    ],
    cta: "Get Listed Fast",
    highlighted: false,
  },
  {
    name: "Featured Listing",
    price: "$97",
    period: "/month",
    description:
      "Stand out with a Featured badge, priority placement in your category, and homepage visibility.",
    features: [
      "Everything in Expedited",
      "⭐ Featured badge",
      "Priority placement in category",
      "Homepage featured section",
      "Highlighted card design",
      "Monthly analytics report",
    ],
    cta: "Get Featured",
    highlighted: true,
  },
  {
    name: "Sponsored Category",
    price: "$197",
    period: "/month",
    description:
      "Own an entire category page with top placement, branded banner, and exclusive positioning.",
    features: [
      "Everything in Featured",
      "Top position in category",
      "Branded banner in category",
      "Exclusive placement (1 per category)",
      "Backlink from category page",
      "Social media shoutout",
    ],
    cta: "Sponsor a Category",
    highlighted: false,
  },
];

export default function AdvertisePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-emerald-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-300">Advertise</span>
      </nav>

      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Get Your Tool in Front of
          <br />
          <span className="text-emerald-400">Thousands of Developers</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          DevStack is the go-to directory for indie hackers and solo founders
          choosing their tech stack. Put your tool where developers are
          actively looking for solutions.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-12 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="text-2xl font-bold text-emerald-400">10K+</p>
          <p className="mt-1 text-sm text-zinc-500">Monthly Visitors</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="text-2xl font-bold text-emerald-400">80+</p>
          <p className="mt-1 text-sm text-zinc-500">Tools Listed</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="text-2xl font-bold text-emerald-400">12</p>
          <p className="mt-1 text-sm text-zinc-500">Categories</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-xl border p-6 ${
              plan.highlighted
                ? "border-emerald-500 bg-emerald-500/5"
                : "border-zinc-800 bg-zinc-900/50"
            }`}
          >
            {plan.highlighted && (
              <span className="mb-4 w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-bold text-white">{plan.name}</h2>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">
                {plan.price}
              </span>
              <span className="text-sm text-zinc-500">{plan.period}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400">{plan.description}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-zinc-300"
                >
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="mailto:advertise@devstack.directory"
              className={`mt-6 block rounded-lg py-3 text-center font-medium transition ${
                plan.highlighted
                  ? "bg-emerald-500 text-black hover:bg-emerald-400"
                  : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-white">
              Can I get a free listing?
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Yes! Free submissions are reviewed within 7 days. Go to{" "}
              <Link
                href="/submit"
                className="text-emerald-400 hover:underline"
              >
                Submit Tool
              </Link>{" "}
              to add your tool for free.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              What payment methods do you accept?
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              We accept credit cards via Stripe. Monthly plans can be
              cancelled any time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Do featured listings include a dofollow backlink?
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Yes, all listings (free and paid) include a dofollow link to
              your website, which helps with SEO.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Can I cancel my featured listing?
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Yes, monthly plans can be cancelled at any time. Your tool
              remains listed but loses the featured badge and priority
              placement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
