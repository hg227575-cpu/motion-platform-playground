import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, MessagesSquare, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedNumber } from "@/components/motion/AnimatedNumber";

const inr = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(v);

const LINE =
  "M4 186 C 34 174, 52 180, 78 158 S 124 128, 152 138 S 208 92, 244 102 S 302 62, 336 70 S 372 36, 396 44";
const AREA = `${LINE} L396 220 L4 220 Z`;
const FAINT =
  "M4 196 C 40 192, 70 186, 100 176 S 160 156, 200 158 S 270 128, 310 128 S 360 104, 396 104";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 right-[10%] size-[480px] rounded-full bg-primary/15 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-40 -left-32 size-[420px] rounded-full bg-info/10 blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold text-muted-foreground"
          >
            <ShieldCheck className="size-3.5 text-primary" />
            Education-first financial information
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your Investments.{" "}
            <span className="text-gradient">Your Financial Possibilities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Explore trading platforms, understand your investment options, and discover
            how investment-backed financing and asset exchange services can support your
            financial journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/trading-platforms"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
            >
              Explore Services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <MessagesSquare className="size-4" />
              Contact Our Team
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-5 text-xs text-muted-foreground"
          >
            All figures on this site are illustrative sample data — not live market prices.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="glass rounded-3xl p-5 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-primary/60" />
                <span className="size-2.5 rounded-full bg-info/60" />
              </div>
              <span className="text-[11px] font-semibold tracking-wide text-muted-foreground">
                meridian.demo · illustrative
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-black/25 p-3">
              <svg
                viewBox="0 0 400 220"
                className="h-48 w-full sm:h-56"
                role="img"
                aria-label="Illustrative portfolio performance chart"
              >
                <defs>
                  <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 90, 140, 190].map((y) => (
                  <line
                    key={y}
                    x1="4"
                    x2="396"
                    y1={y}
                    y2={y}
                    stroke="oklch(1 0 0 / 0.06)"
                    strokeWidth="1"
                  />
                ))}
                <motion.path
                  d={FAINT}
                  fill="none"
                  stroke="var(--info)"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.4, delay: 0.9, ease: "easeInOut" }}
                />
                <motion.path
                  d={AREA}
                  fill="url(#hero-area)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.9 }}
                />
                <motion.path
                  d={LINE}
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.9, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="390"
                  cy="46"
                  r="5"
                  fill="var(--primary)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.55, 1] }}
                  transition={{ delay: 1.9, duration: 1.6, repeat: Infinity }}
                />
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 px-1 pb-1">
              <div>
                <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                  Illustrative portfolio value
                </p>
                <p className="font-display text-xl font-bold text-foreground">
                  <AnimatedNumber value={2480500} format={inr} />
                </p>
              </div>
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
                +2.4% today
              </span>
            </div>
          </div>

          <motion.div
            className="glass absolute top-6 -left-4 hidden rounded-2xl p-4 sm:block lg:-left-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[11px] font-semibold text-muted-foreground">Loan estimate</p>
            <p className="font-display text-lg font-bold text-foreground">
              <AnimatedNumber value={1240250} format={inr} />
            </p>
            <div className="mt-2 h-1.5 w-36 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-info"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="mt-1.5 text-[10px] text-muted-foreground">
              Sample: 50% LTV · illustrative only
            </p>
          </motion.div>

          <motion.div
            className="glass absolute right-0 bottom-16 hidden rounded-2xl p-3.5 sm:block lg:-right-8"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-info/15">
                <TrendingUp className="size-4 text-info" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-muted-foreground">
                  Diversified across
                </p>
                <p className="text-sm font-bold text-foreground">12 platform categories</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
