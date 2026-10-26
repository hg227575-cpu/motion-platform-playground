export const site = {
  name: "Meridian Capital",
  tagline: "Your Investments. Your Financial Possibilities.",
  email: "hello@meridiancapital.example",
  disclaimer:
    "Meridian Capital provides general financial education and information only. Nothing on this website is investment, legal, or tax advice, and nothing here is an offer, solicitation, or commitment to lend. All figures, charts, and calculators use illustrative sample data — not live market prices and not loan quotations.",
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/trading-platforms", label: "Trading Platforms" },
  { to: "/investment-loans", label: "Investment-Backed Loans" },
  { to: "/exchange", label: "Exchange" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const enquiryCategories = [
  { value: "general", label: "General Enquiry" },
  { value: "platforms", label: "Trading Platforms" },
  { value: "loans", label: "Investment-Backed Loans" },
  { value: "exchange", label: "Exchange Services" },
  { value: "other", label: "Something Else" },
] as const;
