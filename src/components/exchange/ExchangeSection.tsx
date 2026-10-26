import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowRightLeft, Banknote, Bitcoin } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

const services = [
  {
    icon: Banknote,
    title: "Currency Exchange",
    text: "The conversion of one currency into another. Exchange rates, spreads, and transaction fees all affect the final amount you receive — so compare the effective rate you receive, not just the headline rate.",
    points: ["Rates move continuously", "Spreads and fees change outcomes", "Timing and amount matter"],
  },
  {
    icon: Bitcoin,
    title: "Digital Asset Exchange",
    text: "Cryptocurrency exchanges facilitate swapping digital assets such as Bitcoin or stablecoins. Prices move around the clock, custody arrangements matter, and regulatory treatment varies by jurisdiction.",
    points: ["24/7 volatile markets", "Custody and security are key", "Regulation varies by region"],
  },
  {
    icon: ArrowRightLeft,
    title: "Investment & Asset Transfers",
    text: "Some services help convert or transfer holdings — moving assets between accounts, institutions, or forms — subject to eligibility requirements, processing times, and applicable regulations.",
    points: ["Account and institution transfers", "Eligibility and timelines apply", "Documentation is usually required"],
  },
];

export function ExchangeSection() {
  return (
    <section id="exchange" className="bg-surface py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Exchange Services"
          title="Understand Your Exchange Options"
          subtitle="An exchange service facilitates the conversion or transfer of one asset or currency into another, depending on the type of service offered."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="card-hover flex h-full flex-col rounded-3xl border border-border bg-card/70 p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-info/20 text-primary">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {s.title}
                </h3>
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

        <Reveal className="mt-10 text-center">
          <Link
            to="/exchange"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Read the Full Exchange Guide
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export { services as exchangeServices };
