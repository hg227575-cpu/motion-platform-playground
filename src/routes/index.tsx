import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { PlatformsSection } from "@/components/home/PlatformsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LoanSection } from "@/components/loan/LoanSection";
import { ExchangeSection } from "@/components/exchange/ExchangeSection";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Capital — Your Investments. Your Financial Possibilities." },
      {
        name: "description",
        content:
          "Explore trading platforms, understand your investment options, and discover how investment-backed financing and asset exchange services can support your financial journey.",
      },
      {
        property: "og:title",
        content: "Meridian Capital — Your Investments. Your Financial Possibilities.",
      },
      {
        property: "og:description",
        content:
          "Education-first guidance on trading platforms, investment-backed loans, and exchange services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <PlatformsSection />
      <HowItWorks />
      <LoanSection />
      <ExchangeSection />

      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/15 via-card to-info/10 p-10 text-center sm:p-16">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to explore your options?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us what you'd like to understand better and we'll walk you through
                it — plainly and without pressure.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
                >
                  Contact Our Team
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/trading-platforms"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
