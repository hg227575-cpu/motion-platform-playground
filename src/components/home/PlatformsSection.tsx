import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, TriangleAlert } from "lucide-react";
import { platforms, type PlatformCategory } from "@/lib/platforms";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

export function PlatformsSection() {
  const [selected, setSelected] = useState<PlatformCategory | null>(null);

  return (
    <section id="platforms" className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trading Platforms"
          title="Explore the World of Trading"
          subtitle="Understand the platforms and markets that help investors access financial opportunities."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {platforms.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.07}>
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="card-hover group flex h-full w-full flex-col rounded-2xl border border-border bg-card/70 p-6 text-left"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-info/20 text-primary">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Learn More
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          General financial education — not investment advice. Meridian Capital does not
          operate or endorse third-party trading platforms.
        </p>
      </div>

      <PlatformModal category={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function PlatformModal({
  category,
  onClose,
}: {
  category: PlatformCategory | null;
  onClose: () => void;
}) {
  return (
    <Dialog.Root
      open={!!category}
      onOpenChange={(o) => {
        if (!o) onClose();
      }}
    >
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {category ? (
            <>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="fixed inset-x-4 top-[6vh] z-50 mx-auto max-h-[84vh] max-w-xl overflow-y-auto rounded-3xl border border-border bg-popover p-7 shadow-2xl shadow-black/50"
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-info/20 text-primary">
                      <category.icon className="size-6" />
                    </span>
                    <Dialog.Title className="font-display text-2xl font-bold text-foreground">
                      {category.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Description className="sr-only">
                    {category.short}
                  </Dialog.Description>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {category.about}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {category.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4">
                    <TriangleAlert className="mt-0.5 size-4 shrink-0 text-destructive" />
                    <p className="text-xs leading-relaxed text-foreground/90">
                      <span className="font-bold">Key risks: </span>
                      {category.risk}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      search={{ category: "platforms" }}
                      onClick={onClose}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Enquire About This
                    </Link>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-accent"
                    >
                      Close
                    </button>
                  </div>
                  <p className="mt-4 text-[11px] text-muted-foreground">
                    General education — not investment advice or a recommendation.
                  </p>
                </motion.div>
              </Dialog.Content>
            </>
          ) : null}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
