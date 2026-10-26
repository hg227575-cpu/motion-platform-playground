import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, GraduationCap, Scale, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Meridian Capital" },
      {
        name: "description",
        content:
          "An education-first financial information company: we explain trading platforms, investment-backed loans, and exchange services — with risks in plain language.",
      },
      { property: "og:title", content: "About Us — Meridian Capital" },
      {
        property: "og:description",
        content: "Education-first guidance on trading platforms, loans, and exchange services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: GraduationCap,
    title: "Education First",
    text: "We explain how financial products work before discussing anything else. Understanding comes before action.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Costs, spreads, fees, and terms are where outcomes are decided — we put them in the foreground.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Awareness",
    text: "Every product page carries its risks alongside its features. If something can lose value, we say so plainly.",
  },
  {
    icon: Scale,
    title: "Suitability & Compliance",
    text: "Products are not right for everyone. Eligibility, regulation, and your circumstances always come first.",
  },
];

const coverage = [
  "Equities & US stocks",
  "Futures & Options",
  "Mutual funds & ETFs",
  "Bonds & fixed deposits",
  "IPOs & commodities",
  "AIFs & PMS",
  "Advisory & strategy portfolios",
  "Investment-backed loans",
  "Currency & asset exchange",
];

function AboutPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="We Make Financial Complexity Understandable"
          subtitle="Meridian Capital is an education-first destination for understanding trading platforms, investment-backed financing, and exchange services — so you can approach financial decisions with clarity, not confusion."
        />

        <Reveal className="mt-14">
          <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Financial products are often explained in jargon, and the risks are buried
              in fine print. We take the opposite approach: plain language first, features
              and risks side by side, and clear labels whenever a figure is an
              illustration rather than real market data.
            </p>
            <p>
              We cover what trading platforms are and how they differ, how
              investment-backed lending works when investors want liquidity without
              automatically selling, and how exchange services convert or transfer assets
              — always with the caveat that availability, eligibility, and regulation
              depend on the provider and your jurisdiction.
            </p>
            <p>
              We are information providers, not advisors executing transactions, and we
              do not operate or endorse third-party trading platforms. When you're ready
              to take the next step, we help you prepare the right questions to ask.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="card-hover flex h-full flex-col rounded-3xl border border-border bg-card/70 p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-info/20 text-primary">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-3xl border border-border bg-card/70 p-7 text-center sm:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">
              What we help you understand
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {coverage.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
          >
            Contact Our Team
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
