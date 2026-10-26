import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, TriangleAlert } from "lucide-react";
import { platforms } from "@/lib/platforms";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

export const Route = createFileRoute("/trading-platforms")({
  head: () => ({
    meta: [
      { title: "Trading Platforms — Meridian Capital" },
      {
        name: "description",
        content:
          "Education-first guides to equities, derivatives, mutual funds, bonds, IPOs, commodities and more — with risks explained in plain language.",
      },
      { property: "og:title", content: "Trading Platforms — Meridian Capital" },
      {
        property: "og:description",
        content: "Education-first guides to twelve investment platform categories, risks included.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TradingPlatformsPage,
});

function TradingPlatformsPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trading Platforms"
          title="A World of Investment Opportunities"
          subtitle="Twelve platform categories explained plainly — how each works, what to expect, and what the risks are."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {platforms.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <article className="card-hover flex h-full flex-col rounded-3xl border border-border bg-card/70 p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-info/20 text-primary">
                    <p.icon className="size-6" />
                  </span>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {p.title}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.about}
                </p>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <div className="flex gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4">
                    <TriangleAlert className="mt-0.5 size-4 shrink-0 text-destructive" />
                    <p className="text-xs leading-relaxed text-foreground/90">
                      <span className="font-bold">Key risks: </span>
                      {p.risk}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/15 via-card to-info/10 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Want to understand a category in depth?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Tell us which one interests you and we'll walk you through it — plainly,
              with risks front and centre.
            </p>
            <Link
              to="/contact"
              search={{ category: "platforms" }}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
            >
              Contact Our Team
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          General financial education — not investment advice. Meridian Capital does not
          operate or endorse third-party trading platforms.
        </p>
      </div>
    </div>
  );
}
