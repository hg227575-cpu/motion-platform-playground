import { BookOpen, Compass, MessagesSquare, Scale } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

const steps = [
  {
    icon: Compass,
    title: "Explore",
    text: "Learn about available trading platforms and financial services.",
  },
  {
    icon: BookOpen,
    title: "Understand",
    text: "Review how investment products, loans, and exchange services work.",
  },
  {
    icon: Scale,
    title: "Evaluate",
    text: "Understand eligibility, fees, risks, and the suitability of different options.",
  },
  {
    icon: MessagesSquare,
    title: "Connect",
    text: "Contact the company to discuss available services and next steps.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From Curiosity to Clarity in Four Steps"
          subtitle="A simple path: explore what exists, understand how it works, evaluate whether it fits, and connect when you're ready."
        />

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-border lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ transformOrigin: "left" }}
          />
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.14}>
                <div className="relative lg:text-center">
                  <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-0">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-card text-primary shadow-lg shadow-black/30">
                      <step.icon className="size-6" />
                    </span>
                    <span className="font-display text-sm font-bold text-muted-foreground lg:mt-3 lg:text-xs">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground lg:mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground lg:mx-auto">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
