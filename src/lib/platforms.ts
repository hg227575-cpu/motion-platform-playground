import {
  BriefcaseBusiness,
  Coins,
  Gem,
  Globe2,
  Landmark,
  Layers3,
  Megaphone,
  PieChart,
  ScrollText,
  Sparkles,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface PlatformCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  short: string;
  about: string;
  points: string[];
  risk: string;
}

/**
 * Platform categories follow the client's reference image ("A World Of
 * Investment Opportunities"). The reference's branded "STRATX" card was
 * renamed "Strategy Portfolios" to avoid implying a third-party product
 * endorsement.
 */
export const platforms: PlatformCategory[] = [
  {
    id: "equity",
    title: "Equity or Stocks",
    icon: TrendingUp,
    short:
      "Buy and sell shares of publicly listed companies and follow your portfolio over time.",
    about:
      "Equity investing means owning a stake in a publicly listed company. Investors typically participate through market orders, which execute at the best available price, or limit orders, which execute only at a price you set. Portfolio tracking tools help you follow holdings, dividends, and performance over time.",
    points: [
      "Market orders execute immediately; limit orders wait for your price",
      "Portfolio tracking helps you follow holdings and dividends",
      "Share prices can rise or fall, sometimes sharply",
      "Long-term outcomes depend on company performance and market conditions",
    ],
    risk:
      "Share prices can fall below what you paid, and past performance never indicates future results.",
  },
  {
    id: "futures-options",
    title: "Futures & Options",
    icon: Layers3,
    short:
      "Derivative contracts whose value is derived from an underlying asset such as an index, stock, or commodity.",
    about:
      "Futures and options are derivative instruments: contracts that derive their value from an underlying asset. Futures commit both parties to a transaction at a future date, while options give the buyer the right — not the obligation — to buy or sell at a set price. These instruments are commonly used for hedging or for taking leveraged positions.",
    points: [
      "Futures are binding contracts; options are rights, not obligations",
      "Commonly used for hedging existing exposures",
      "Require understanding of expiries, strikes, and margins",
      "Generally suitable for experienced participants",
    ],
    risk:
      "Derivatives involve leverage and complexity and can lead to losses exceeding your initial investment.",
  },
  {
    id: "us-stocks",
    title: "US Stocks",
    icon: Globe2,
    short:
      "Access shares of companies listed on United States exchanges, subject to local rules.",
    about:
      "US-listed equities give investors access to companies across many sectors of the world's largest economy. Participation usually happens through brokers that support international markets, and returns are influenced both by the shares themselves and by currency movements between your home currency and the US dollar.",
    points: [
      "Exposure to global brands and sectors",
      "Returns are affected by currency exchange movements",
      "Foreign regulations, taxation, and settlement timelines apply",
      "Trading hours differ from local market hours",
    ],
    risk:
      "Returns are affected by currency movements, foreign regulation, and taxation in addition to share-price risk.",
  },
  {
    id: "aif",
    title: "Alternative Investment Funds",
    icon: Gem,
    short:
      "Pooled investment vehicles that may invest beyond traditional stocks and bonds.",
    about:
      "Alternative Investment Funds (AIFs) pool capital from eligible investors into strategies that sit outside conventional portfolios — for example private equity, credit, real assets, or hedge-style approaches. They are typically regulated, have defined investor eligibility criteria, and follow specific investment mandates.",
    points: [
      "Access to strategies beyond listed stocks and bonds",
      "Regulated vehicles with eligibility criteria",
      "Defined investment mandates and managers",
      "Often higher minimum investments and longer horizons",
    ],
    risk:
      "AIFs typically involve higher minimums, longer lock-in periods, lower liquidity, and strategies that require careful evaluation.",
  },
  {
    id: "strategy-portfolios",
    title: "Strategy Portfolios",
    icon: Workflow,
    short:
      "Rules-based model portfolios that combine instruments according to a defined strategy.",
    about:
      "Strategy portfolios combine instruments such as stocks, funds, or ETFs according to a documented, rules-based methodology. Because the rules are explicit, investors can understand what a strategy owns, when it rebalances, and what it aims to achieve — which makes comparing strategies easier.",
    points: [
      "Transparent, rules-based construction",
      "Documented rebalancing and inclusion criteria",
      "Can span themes, factors, or risk levels",
      "Methodology is comparable across strategies",
    ],
    risk:
      "A model's methodology does not guarantee performance; results depend on market conditions and execution.",
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    icon: PieChart,
    short:
      "Professionally managed pooled funds investing across stocks, bonds, or other assets.",
    about:
      "A mutual fund pools money from many investors and a professional manager invests it according to the fund's objective. Investors own units, valued daily at the net asset value (NAV). Systematic investment plans (SIPs) allow investing fixed amounts at regular intervals, and open-ended funds allow redemption on any business day.",
    points: [
      "Professional management with a stated objective",
      "Daily NAV-based unit pricing",
      "SIPs enable disciplined, periodic investing",
      "Diversification within a single investment",
    ],
    risk:
      "Mutual fund investments are subject to market risks; read all scheme-related documents carefully before investing.",
  },
  {
    id: "commodities",
    title: "Commodities",
    icon: Coins,
    short:
      "Exposure to assets such as gold, silver, oil, and agricultural products.",
    about:
      "Commodity investing covers physical goods — precious metals, energy, and agricultural products. Exposure can be taken through different instruments, including futures contracts, commodity-focused funds, or certain physical holdings, and each instrument carries its own costs, mechanics, and market behaviour.",
    points: [
      "Covers metals, energy, and agricultural goods",
      "Different instruments imply different mechanics and costs",
      "Prices react to supply, demand, and geopolitical events",
      "Can behave differently from equity markets",
    ],
    risk:
      "Commodity exposure involves instrument-specific risks, including storage, geopolitical, and weather-related volatility.",
  },
  {
    id: "pms",
    title: "Portfolio Management Services",
    icon: BriefcaseBusiness,
    short:
      "Professional discretionary management of a dedicated portfolio under regulatory oversight.",
    about:
      "Portfolio Management Services (PMS) provide individually managed portfolios: a professional manager makes investment decisions on the investor's behalf within a defined mandate. PMS accounts are held separately for each investor, unlike pooled funds, and typically come with substantial minimum investment requirements.",
    points: [
      "Individually managed, segregated portfolios",
      "Discretionary or advisory management styles",
      "Defined mandates and reporting",
      "High minimum investment thresholds",
    ],
    risk:
      "PMS products typically have high minimum requirements, and fees affect net returns. Managed portfolios can still lose value.",
  },
  {
    id: "ipo",
    title: "Initial Public Offerings (IPO)",
    icon: Megaphone,
    short:
      "The first opportunity to subscribe to a company's shares as it lists publicly.",
    about:
      "An IPO is when a company offers its shares to the public for the first time. Investors apply for allotment within a subscription window at a set price (or price band), and shares are allotted before listing on an exchange. Post-listing, the price is determined by the market.",
    points: [
      "Apply during the subscription window at the set price band",
      "Allotment depends on demand and category rules",
      "Listing-day price is set by the market, not the issuer",
      "Read the prospectus — it explains the business and risks",
    ],
    risk:
      "IPO allotments are not guaranteed and listing-day prices can be volatile; a debut above or below the issue price is possible.",
  },
  {
    id: "bonds",
    title: "Bonds",
    icon: ScrollText,
    short:
      "Fixed-income instruments that pay interest over time and return principal at maturity.",
    about:
      "Bonds are loans made to governments or companies that typically pay periodic interest and return the principal at maturity. They are often used to add stability and predictable income to a portfolio, and can be held to maturity or traded, in which case their price moves with interest rates and credit conditions.",
    points: [
      "Regular interest payments with principal at maturity",
      "Government and corporate issuers carry different risk levels",
      "Prices fall when interest rates rise",
      "Credit ratings summarise issuer default risk",
    ],
    risk:
      "Bond prices fall when rates rise, and issuers may default on interest or principal payments.",
  },
  {
    id: "advisory-portfolios",
    title: "Intelligent Advisory Portfolios",
    icon: Sparkles,
    short:
      "Advisory-driven model portfolios curated using research and defined selection rules.",
    about:
      "Intelligent advisory portfolios are model portfolios curated using research and defined selection rules, with recommendations adapted to an investor's profile. The advisory model means you stay in control: you receive recommendations and execute them through your own account, and can review the rationale behind every holding.",
    points: [
      "Research-driven selection with documented rationale",
      "Recommendations matched to investor profiles",
      "You review and approve each recommendation",
      "Periodic reviews and rebalancing suggestions",
    ],
    risk:
      "Advisory portfolios are recommendations, not guarantees; suitability depends on your goals and risk profile.",
  },
  {
    id: "fixed-deposits",
    title: "Fixed Deposits",
    icon: Landmark,
    short:
      "Term deposits that pay a fixed interest rate for a fixed period.",
    about:
      "A fixed deposit (FD) is a term deposit held with a bank or institution for a fixed period at a fixed interest rate. FDs offer predictable returns and defined maturity values, which makes them a common choice for capital preservation and short-term goals, though returns are typically lower than growth assets over long periods.",
    points: [
      "Fixed interest rate for a fixed tenure",
      "Predictable maturity value",
      "Premature withdrawal may incur penalties",
      "Insurer or deposit-cover limits may apply",
    ],
    risk:
      "Returns are modest relative to equities, corporate deposits carry credit risk, and inflation can erode real returns.",
  },
];
