import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TriangleAlert } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { loanSteps, loanRisks } from "@/components/loan/LoanSection";
import { LoanCalculator } from "@/components/loan/LoanCalculator";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

export const Route = createFileRoute("/investment-loans")({
  head: () => ({
    meta: [
      { title: "Investment-Backed Loans — Meridian Capital" },
      {
        name: "description",
        content:
          "Understand how borrowing against qualifying investments works, with an illustrative calculator and a clear summary of the risks.",
      },
      { property: "og:title", content: "Investment-Backed Loans — Meridian Capital" },
      {
        property: "og:description",
        content: "How investment-backed lending works, with an illustrative calculator and risks explained.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InvestmentLoansPage,
});

const chartData = [
  { year: "Today", collateral: 100, loan: 50 },
  { year: "Year 1", collateral: 106, loan: 50 },
  { year: "Year 2", collateral: 112, loan: 50 },
  { year: "Year 3", collateral: 104, loan: 50 },
  { year: "Year 4", collateral: 118, loan: 50 },
  { year: "Year 5", collateral: 126, loan: 50 },
];

function InvestmentLoansPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Investment-Backed Loans"
          title="Access Liquidity Without Automatically Selling Your Investments"
          subtitle="Investment-backed lending may allow eligible investors to borrow against qualifying financial assets, subject to lender approval, collateral requirements, and applicable regulations."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card/70 p-7 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">
                What is an investment-backed loan?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                An investment-backed loan is a financing arrangement in which eligible
                assets, such as qualifying shares or other approved investments, are
                pledged as collateral for a loan. Depending on the lender and loan
                agreement, an investor may be able to access funds without selling the
                pledged investments immediately.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pledged assets typically remain invested, so they can still rise or fall
                in value — and borrowing introduces its own obligations. Suitability
                always depends on your circumstances, the lender's terms, and applicable
                regulations.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card/70 p-7 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">
                Collateral vs loan — an illustrative picture
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Indexed to 100 · sample data only, not a forecast
              </p>
              <div className="mt-5 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="collateral-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.08)" />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                      stroke="var(--border)"
                    />
                    <YAxis
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                      stroke="var(--border)"
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--popover)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        color: "var(--foreground)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="collateral"
                      name="Illustrative collateral value"
                      stroke="var(--primary)"
                      fill="url(#collateral-fill)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="loan"
                      name="Illustrative loan amount"
                      stroke="var(--info)"
                      fill="transparent"
                      strokeDasharray="6 4"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                If collateral values fall toward the loan amount, lenders may call for
                additional collateral or repayment — one of the key risks below.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-border bg-card/70 p-7 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">How it works — five steps</h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {loanSteps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <step.icon className="size-5" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-foreground">
                    {i + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <LoanCalculator />
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-col gap-4 rounded-3xl border border-destructive/30 bg-destructive/10 p-6 sm:flex-row sm:p-8">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-destructive/15">
              <TriangleAlert className="size-5 text-destructive" />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-foreground">
                Important risks
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {loanRisks.map((risk) => (
                  <li key={risk} className="flex gap-2.5 text-sm text-foreground/90">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                    {risk}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Meridian Capital does not promise loan approval, guaranteed funding,
                guaranteed returns, or universally available loan products.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link
            to="/contact"
            search={{ category: "loans" }}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
          >
            Enquire About Loan Services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
