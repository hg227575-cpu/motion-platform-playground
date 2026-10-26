import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  FileSearch,
  Repeat,
  ShieldCheck,
} from "lucide-react";
import { exchangeServices } from "@/components/exchange/ExchangeSection";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

export const Route = createFileRoute("/exchange")({
  head: () => ({
    meta: [
      { title: "Exchange Services — Meridian Capital" },
      {
        name: "description",
        content:
          "Understand currency exchange, digital asset exchange, and investment transfers — including spreads, fees, and regulatory considerations.",
      },
      { property: "og:title", content: "Exchange Services — Meridian Capital" },
      {
        property: "og:description",
        content: "How currency exchange, digital asset exchange, and asset transfers work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExchangePage,
});

const process = [
  {
    icon: FileSearch,
    title: "Request a quote",
    text: "Specify the assets or currencies you want to convert and receive indicative terms.",
  },
  {
    icon: ShieldCheck,
    title: "Verification & KYC",
    text: "Regulated services verify identity and source of funds before executing.",
  },
  {
    icon: Repeat,
    title: "Execution",
    text: "The conversion or transfer is executed at the agreed rate, net of spreads and fees.",
  },
  {
    icon: Banknote,
    title: "Settlement",
    text: "Funds or assets are delivered to the designated account within the stated timeline.",
  },
];

function ExchangePage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Exchange Services"
          title="Understand Your Exchange Options"
          subtitle="An exchange service facilitates the conversion or transfer of one asset or currency into another, depending on the type of service offered."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {exchangeServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="card-hover flex h-full flex-col rounded-3xl border border-border bg-card/70 p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-info/20 text-primary">
                  <s.icon className="size-6" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-foreground">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-foreground/90">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-3xl border border-border bg-card/70 p-7 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">
              What an exchange process typically looks like
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <div key={step.title}>
                  <span className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <step.icon className="size-5" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-foreground">
                    {i + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link
            to="/contact"
            search={{ category: "exchange" }}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
          >
            Enquire About Exchange Services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Availability, rates, fees, and regulatory treatment vary by provider,
          jurisdiction, and asset type. Nothing here is an offer to execute a transaction.
        </p>
      </div>
    </div>
  );
}
