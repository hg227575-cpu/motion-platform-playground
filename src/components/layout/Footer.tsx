import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { navItems, site } from "@/lib/site";

const serviceLinks = [
  { to: "/trading-platforms", label: "Trading Platforms" },
  { to: "/investment-loans", label: "Investment-Backed Loans" },
  { to: "/exchange", label: "Exchange Services" },
] as const;

const companyLinks = navItems.filter((n) => n.to === "/" || n.to === "/about" || n.to === "/contact");

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              An education-first destination for understanding trading platforms,
              investment-backed financing, and exchange services — with risk explained
              in plain language.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <Mail className="size-4" /> {site.email}
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-foreground uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-foreground uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
            <span className="font-bold text-foreground">Disclaimer: </span>
            {site.disclaimer}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
