import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Info, Send } from "lucide-react";
import { enquiryCategories } from "@/lib/site";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact Us — Meridian Capital" },
      {
        name: "description",
        content:
          "Ask about trading platforms, investment-backed loans, or exchange services — we'll walk you through it plainly.",
      },
      { property: "og:title", content: "Contact Us — Meridian Capital" },
      {
        property: "og:description",
        content: "Start a conversation about trading platforms, loans, or exchange services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .max(20, "That looks too long for a phone number")
    .optional()
    .or(z.literal("")),
  category: z.enum(["general", "platforms", "loans", "exchange", "other"]),
  message: z.string().min(20, "Tell us a little more (at least 20 characters)"),
});

type FormValues = z.infer<typeof schema>;

const validCategories = enquiryCategories.map((c) => c.value) as readonly string[];

function ContactPage() {
  const { category } = Route.useSearch();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: (category && validCategories.includes(category)
        ? category
        : "general") as FormValues["category"],
      message: "",
    },
  });

  if (category && validCategories.includes(category)) {
    setValue("category", category as FormValues["category"]);
  }

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    toast.success("Enquiry received — we'll be in touch.");
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-black/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring/40";

  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Talk About Your Options"
          subtitle="Tell us what you'd like to understand better and we'll walk you through it — plainly and without pressure."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5">
              <div className="rounded-3xl border border-border bg-card/70 p-7">
                <h3 className="font-display text-lg font-bold text-foreground">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-4">
                  {[
                    "We review your enquiry and what you'd like to understand.",
                    "We share plain-language information relevant to your question.",
                    "If a service fits, we explain eligibility, costs, and risks first.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-foreground/90">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex gap-3 rounded-2xl border border-info/30 bg-info/10 p-4">
                <Info className="mt-0.5 size-4 shrink-0 text-info" />
                <p className="text-xs leading-relaxed text-foreground/90">
                  We provide general financial education and information only — nothing
                  here is investment advice, and all figures on this site are
                  illustrative sample data.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <div className="glass rounded-3xl p-7 sm:p-9">
              {sent ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="mx-auto size-14 text-primary" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Enquiry received
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
                    Thank you — your message has been noted. In this preview the form
                    doesn't send email yet; connect a backend to collect enquiries.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setSent(false);
                    }}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Full name
                      </label>
                      <input id="name" {...register("name")} className={inputClass} placeholder="Your name" />
                      {errors.name ? (
                        <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.name.message}</p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Email
                      </label>
                      <input id="email" type="email" {...register("email")} className={inputClass} placeholder="you@example.com" />
                      {errors.email ? (
                        <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.email.message}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Phone <span className="font-normal text-muted-foreground">(optional)</span>
                      </label>
                      <input id="phone" {...register("phone")} className={inputClass} placeholder="+91 …" />
                      {errors.phone ? (
                        <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.phone.message}</p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="category" className="mb-1.5 block text-sm font-semibold text-foreground">
                        Enquiry type
                      </label>
                      <select id="category" {...register("category")} className={inputClass}>
                        {enquiryCategories.map((c) => (
                          <option key={c.value} value={c.value} className="bg-popover">
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={inputClass}
                      placeholder="Tell us what you'd like to understand — e.g. how a loan against investments works."
                    />
                    {errors.message ? (
                      <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.message.message}</p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? "Sending…" : "Send Enquiry"}
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/trading-platforms"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            Prefer to keep reading? Explore the platforms
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
