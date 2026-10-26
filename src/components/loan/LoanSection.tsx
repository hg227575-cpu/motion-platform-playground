import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  FileCheck,
  FileText,
  RefreshCcw,
  SearchCheck,
  TriangleAlert,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";
import { LoanCalculator } from "./LoanCalculator";

export const loanSteps = [
  {
    icon: SearchCheck,
    title: "Check Eligibility",
    text: "The investor checks whether their investments qualify as acceptable collateral.",
  },
  {
    icon: FileText,
    title: "Submit an Application",
    text: "The investor provides the required information and documentation to the lender.",
  },
  {
    icon: Calculator,
    title: "Asset Valuation",
    text: "The lender evaluates the eligible assets and determines the applicable lending terms.",
  },
  {
    icon: FileCheck,
    title: "Review the Offer",
    text: "The lender communicates the approved amount, interest rate, fees, repayment conditions, and collateral requirements.",
  },
  {
    icon: RefreshCcw,
    title: "Repayment",
    text: "The borrower repays the loan according to the agreement and applicable terms.",
  },
];

export const loanRisks = [
  "Investment prices may fall.",
  "The lender may require additional collateral or repayment if collateral values decline.",
  "The lender may be entitled to sell pledged assets following a default or other contractually specified event.",
  "Interest and fees increase borrowing costs.",
  "Borrowing against investments does not eliminate investment risk.",
  "Eligibility and product availability depend on the lender, jurisdiction, and applicable regulations.",
];

export function LoanSection({ withSteps = true }: { withSteps?: boolean }) {
  return (
    <section id="loans" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Investment-Backed Loans"
          title="Access Liquidity Without Automatically Selling Your Investments"
          subtitle="Investment-backed lending may allow eligible investors to borrow against qualifying financial assets, subject to lender approval, collateral requirements, and applicable regulations."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                What is an investment-backed loan?
              </h3>
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

              {withSteps ? (
                <>
                  <h4 className="mt-8 font-display text-base font-bold text-foreground">
                    How it works — five steps
                  </h4>
                  <ol className="mt-4 space-y-4">
                    {loanSteps.map((step, i) => (
                      <li key={step.title} className="flex gap-3.5">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                          <step.icon className="size-4.5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground">
                            {i + 1}. {step.title}
                          </p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <LoanCalculator />
          </Reveal>
        </div>

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
    </section>
  );
}
