import { useState } from "react";
import { Calculator } from "lucide-react";
import { AnimatedNumber } from "@/components/motion/AnimatedNumber";

const inr = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(v);

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
}

function Slider({ label, value, min, max, step, display, minLabel, maxLabel, onChange }: SliderProps) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span className="font-display text-sm font-bold text-primary">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-primary"
        aria-label={label}
      />
      <span className="flex justify-between text-[10px] text-muted-foreground">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </span>
    </label>
  );
}

export function LoanCalculator() {
  const [value, setValue] = useState(2_000_000);
  const [ltv, setLtv] = useState(50);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(3);

  const loan = value * (ltv / 100);
  const interest = loan * (rate / 100) * tenure;
  const total = loan + interest;

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
          <Calculator className="size-5 text-primary" />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">
            Illustrative Loan Calculator
          </h3>
          <p className="text-xs text-muted-foreground">
            Educational estimates only — not an offer or approval
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Slider
          label="Eligible investment value"
          value={value}
          min={100_000}
          max={10_000_000}
          step={100_000}
          display={inr(value)}
          minLabel="₹1L"
          maxLabel="₹1Cr"
          onChange={setValue}
        />
        <Slider
          label="Illustrative loan-to-value"
          value={ltv}
          min={10}
          max={70}
          step={5}
          display={`${ltv}%`}
          minLabel="10%"
          maxLabel="70%"
          onChange={setLtv}
        />
        <Slider
          label="Illustrative interest rate"
          value={rate}
          min={6}
          max={20}
          step={0.25}
          display={`${rate.toFixed(2)}% p.a.`}
          minLabel="6%"
          maxLabel="20%"
          onChange={setRate}
        />
        <Slider
          label="Loan tenure"
          value={tenure}
          min={1}
          max={10}
          step={1}
          display={`${tenure} year${tenure > 1 ? "s" : ""}`}
          minLabel="1 yr"
          maxLabel="10 yrs"
          onChange={setTenure}
        />
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Illustrative maximum loan", value: loan },
          { label: "Estimated interest cost", value: interest },
          { label: "Estimated total repayment", value: total },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-border bg-black/20 p-4">
            <p className="text-[11px] leading-snug font-semibold tracking-wide text-muted-foreground uppercase">
              {stat.label}
            </p>
            <p className="mt-1.5 font-display text-xl font-bold text-foreground">
              <AnimatedNumber value={stat.value} format={inr} />
            </p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
        Loan = eligible value × LTV. Interest = loan × rate × tenure (simple interest;
        excludes fees and compounding). Actual lending limits, interest rates, repayment
        schedules, fees, and eligibility depend on the lender and the applicable loan
        agreement. These estimates are not a loan quotation.
      </p>
    </div>
  );
}
