import { Leader, Service, Industry, Insight } from './types';
import anujMohataPhoto from './assets/team/anuj-mohata.jpg';
import pawanKothariPhoto from './assets/team/pawan-kothari.jpg';
import nehaGattaniPhoto from './assets/team/neha-gattani.jpg';
import rajkumarMohataPhoto from './assets/team/rajkumar-mohata.jpg';
import vaibhavBhatnagarPhoto from './assets/team/vaibhav-bhatnagar.jpg';

export const LEADERS: Leader[] = [
  {
    id: 'anuj-mohata',
    name: 'Anuj Mohata',
    role: 'Managing Partner',
    photo: anujMohataPhoto,
    bio: 'Anuj leads our advisory and tax practice. He\'s the person business owners call before a big decision — selling a stake, buying another company, or restructuring how the business is owned — to make sure it\'s done the smart way, with no nasty tax surprises later.',
    experience: '12+ Years helping businesses grow, merge, and restructure the right way',
    specialization: ['Buying & Selling Businesses', 'Growth & Funding Advice', 'Tax Notices & Disputes', 'International Deals'],
    linkedin: 'https://linkedin.com/company/mohata-co'
  },
  {
    id: 'pawan-kothari',
    name: 'Pawan Kothari',
    role: 'Partner, Audits & Risk',
    photo: pawanKothariPhoto,
    bio: 'Pawan makes sure your books are accurate and your business is protected from financial blind spots. He\'s worked with everyone from factories to banks, and he\'s known for catching problems early — before they become expensive ones.',
    experience: '10+ Years keeping company finances audit-ready and risk-free',
    specialization: ['Annual Audits', 'Financial Reporting Standards', 'Business Risk Checks', 'Internal Controls'],
    linkedin: 'https://linkedin.com/company/mohata-co'
  },
  {
    id: 'neha-gattani',
    name: 'Neha Gattani',
    role: 'Partner, GST',
    photo: nehaGattaniPhoto,
    bio: 'Neha handles everything GST — filings, refunds, and the tricky stuff, like when the tax department asks questions. She works with businesses operating across multiple states and helps them stop losing money to GST mistakes.',
    experience: '9+ Years solving GST problems and recovering money businesses are owed',
    specialization: ['GST Filing & Refunds', 'GST Notices & Appeals', 'Multi-State Business Tax', 'Reducing GST Costs'],
    linkedin: 'https://linkedin.com/company/mohata-co'
  },
  {
    id: 'rajkumar-mohata',
    name: 'Rajkumar Mohata',
    role: 'Senior Advisor',
    photo: rajkumarMohataPhoto,
    bio: 'With 25+ years of experience, Rajkumar is who we bring in for the hardest tax cases — appeals, department scrutiny, and the sensitive work of helping family-run businesses pass safely from one generation to the next.',
    experience: '25+ Years resolving tough tax cases and planning family business succession',
    specialization: ['Tax Appeals & Disputes', 'Handling Tax Department Cases', 'Passing the Business to Family', 'Estate & Inheritance Planning'],
    linkedin: 'https://linkedin.com/company/mohata-co'
  },
  {
    id: 'vaibhav-bhatnagar',
    name: 'Vaibhav Bhatnagar',
    role: 'Advisor, Global Markets',
    photo: vaibhavBhatnagarPhoto,
    bio: 'Vaibhav helps businesses that trade internationally or are planning to go public. He\'s worked with global consulting firms and helps founders get their numbers, reporting, and paperwork investor-ready.',
    experience: '15+ Years preparing businesses for IPOs and international growth',
    specialization: ['Foreign Exchange Rules', 'Getting IPO-Ready', 'Business Dashboards & Reports', 'Overseas Business Tax'],
    linkedin: 'https://linkedin.com/company/mohata-co'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'audit-assurance',
    number: '01',
    title: 'Audits',
    shortDesc: 'We check your books so you, your investors, and the government can trust the numbers.',
    longDesc: 'An audit isn\'t just a box to tick. We look closely at how money moves through your business, catch errors before they become problems, and make sure your financial statements hold up to scrutiny — from banks, investors, or regulators.',
    subservices: ['Yearly Statutory Audit', 'Tax Audit', 'Accounting Standard Compliance', 'Ongoing (Concurrent) Audits', 'Fraud & Forensic Checks']
  },
  {
    id: 'tax-advisory',
    number: '02',
    title: 'Tax Planning',
    shortDesc: 'We help you pay only what you owe — legally — and defend you if the tax department comes calling.',
    longDesc: 'Good tax planning happens before decisions are made, not after. We structure your deals to minimize tax, represent you if you\'re facing a tax dispute, and make sure your international transactions don\'t attract unwanted attention.',
    subservices: ['Structuring Deals to Save Tax', 'Representing You in Tax Disputes', 'Cross-Border Pricing Rules', 'Tax Help for NRIs & Expats', 'Support During Tax Raids']
  },
  {
    id: 'gst',
    number: '03',
    title: 'GST',
    shortDesc: 'We keep your GST filings accurate, on time, and working in your favor — not against your cash flow.',
    longDesc: 'GST mistakes quietly eat into your working capital. Our team reviews your GST setup end-to-end, helps you claim back every rupee of credit you\'re owed, manages filings across states, and stands with you during audits or disputes.',
    subservices: ['GST Health Check', 'Recovering Input Tax Credit', 'Multi-State Return Filing', 'Refunds for Exporters', 'GST Audit Support']
  },
  {
    id: 'corporate-compliance',
    number: '04',
    title: 'Company Compliance',
    shortDesc: 'We handle the paperwork that keeps your company legally sound, so you don\'t have to think about it.',
    longDesc: 'Missing a filing deadline can mean penalties or worse. We take care of everything from setting up your company to filing annual returns, managing board meetings, and handling share transfers — so your business always stays on the right side of the law.',
    subservices: ['Company & LLP Registration', 'Annual Filings', 'Compliance Health Checks', 'Share Transfers & Buybacks', 'Board Meeting Support']
  },
  {
    id: 'internal-audit',
    number: '05',
    title: 'Internal Reviews',
    shortDesc: 'We look under the hood of your business to find where money or efficiency is leaking out.',
    longDesc: 'Think of this as a regular health check for how your business actually runs day to day. We spot process gaps, weak controls, and risk areas, then give your leadership team a clear, practical list of what to fix.',
    subservices: ['Risk-Focused Reviews', 'Mapping Out Your Processes', 'Checking Teams Follow Procedure', 'Internal Control Checks', 'Fraud Prevention Reviews']
  },
  {
    id: 'bank-audit',
    number: '06',
    title: 'Bank Audits',
    shortDesc: 'Specialized audits for banks and lenders, done by a team that knows how banking really works.',
    longDesc: 'As an approved bank auditor, we understand the specific rules banks operate under — from loan classification to stock checks. We conduct thorough, independent audits that give banks and their stakeholders real confidence in the numbers.',
    subservices: ['Branch Audits', 'Ongoing (Concurrent) Audits', 'Stock & Loan Book Audits', 'Credit Reviews', 'Bad Loan (NPA) Reviews']
  },
  {
    id: 'ipo-advisory',
    number: '07',
    title: 'Going Public (IPO)',
    shortDesc: 'We help growing companies get ready for the big step of listing on the stock market.',
    longDesc: 'Going public means your reporting, governance, and finances all need to meet a much higher bar. We assess if you\'re ready, help restructure your capital, prepare the disclosures regulators expect, and work alongside your bankers to get you there smoothly.',
    subservices: ['IPO Readiness Check', 'Restructuring Before Listing', 'Prospectus Support', 'Financial Reporting Controls', 'Staying Compliant After Listing']
  },
  {
    id: 'mis-design',
    number: '08',
    title: 'Business Dashboards',
    shortDesc: 'We turn your raw accounting data into simple dashboards that help you make faster decisions.',
    longDesc: 'You shouldn\'t have to dig through spreadsheets to know how your business is doing. We build easy-to-read reporting systems that show your numbers in real time, track the metrics that matter, and connect smoothly with the software you already use.',
    subservices: ['Financial Dashboards', 'Cost Tracking by Department', 'Cash Flow Reports', 'Budget vs. Actual Tracking', 'Making Your Software Work Better']
  },
  {
    id: 'virtual-cfo',
    number: '09',
    title: 'Virtual CFO',
    shortDesc: 'Get an experienced finance leader on your team, without hiring a full-time CFO.',
    longDesc: 'Growing companies need strong financial leadership early on, but a full-time CFO isn\'t always practical yet. Our Virtual CFO service manages your cash flow, handles your bank relationships, builds your budgets, and supports you when you\'re raising funds.',
    subservices: ['Cash Flow Planning', 'Budgeting & Performance Tracking', 'Managing Bank Relationships', 'Fundraising Support', 'Growth Strategy']
  },
  {
    id: 'financial-planning',
    number: '10',
    title: 'Wealth & Succession Planning',
    shortDesc: 'We help you protect what you\'ve built and pass it on smoothly to the next generation.',
    longDesc: 'Family wealth needs careful, long-term planning. We help you set up family trusts, structure your holdings in a tax-smart way, and plan out succession — so the business you\'ve built keeps thriving in the hands of the next generation.',
    subservices: ['Family Wealth Structuring', 'Setting Up Family Trusts', 'Succession & Inheritance Planning', 'Investment Feasibility Checks', 'Tax-Smart Payouts']
  },
  {
    id: 'business-advisory',
    number: '11',
    title: 'Business Strategy',
    shortDesc: 'Thinking about a new market, a partnership, or a big investment? We help you decide with real numbers.',
    longDesc: 'Big decisions deserve solid financial backing. We run feasibility studies, build financial models to test your assumptions, evaluate potential partners, and help you understand the true value of a deal before you commit to it.',
    subservices: ['Market Entry Studies', 'Financial Modeling', 'Business Valuations', 'Partnership & Joint Venture Advice', 'Government Incentive Mapping']
  },
  {
    id: 'company-law',
    number: '12',
    title: 'Company Law',
    shortDesc: 'We resolve legal and compliance headaches so you can keep running your business.',
    longDesc: 'Our team advises on company law matters, drafts the paperwork, and represents you in front of regulators when needed. We help with restructuring, shareholder disagreements, and any compliance issues that need to be sorted out or set right.',
    subservices: ['Tribunal Representation', 'Reviewing Shareholder Agreements', 'Foreign Investment Reporting', 'Resolving Compliance Lapses', 'Company Restructuring']
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'We work with Surat\'s well-known textile and diamond businesses, along with newer manufacturers, helping them manage big equipment purchases and tax across a multi-state supply chain.',
    details: [
      'Getting tax benefits on equipment & machinery',
      'Accurate stock and inventory checks',
      'GST across multiple states, done right',
      'Understanding your true production costs'
    ],
    bgAccent: 'rgba(0, 87, 184, 0.04)'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'We help online sellers reconcile payments automatically, stay GST-compliant across every state they sell in, and keep a clear, real-time view of their cash flow.',
    details: [
      'Matching payments across gateways',
      'Compliance for multi-state warehouses',
      'Handling TCS & TDS deductions',
      'Reviews built for online sellers'
    ],
    bgAccent: 'rgba(245, 130, 32, 0.04)'
  },
  {
    id: 'fin-services',
    title: 'Financial Services',
    description: 'We support fintechs, lenders, and fund managers with risk checks, capital reviews, and full-scope audits that meet regulatory expectations.',
    details: [
      'Regulatory compliance checks',
      'Tax-smart portfolio structuring',
      'Spotting and managing business risk',
      'Financial reporting & valuations'
    ],
    bgAccent: 'rgba(31, 165, 74, 0.04)'
  },
  {
    id: 'services',
    title: 'Service Businesses',
    description: 'We help consultancies, agencies, and other service businesses build lean, tax-efficient structures — including how they handle IP, retainers, and cross-state billing.',
    details: [
      'Getting the most from professional fees',
      'GST rebates on exported services',
      'Structuring fees for IP & licensing',
      'Keeping your setup lean as you scale'
    ],
    bgAccent: 'rgba(18, 59, 115, 0.04)'
  },
  {
    id: 'startups',
    title: 'Startups & Tech',
    description: 'From your seed round to Series A and beyond, we help with cap tables, ESOPs, available tax exemptions, and act as your finance team when you don\'t have one yet.',
    details: [
      'Protection from angel tax issues',
      'Setting up ESOPs the right way',
      'Getting due-diligence ready for investors',
      'Financial models for your pitch deck'
    ],
    bgAccent: 'rgba(0, 87, 184, 0.04)'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'We advise hospitals, wellness chains, and pharma manufacturers on equipment leasing decisions, billing audits, and staying compliant with healthcare regulations.',
    details: [
      'Lease vs. buy decisions on equipment',
      'Tax deductions for R&D spending',
      'Reconciling revenue across locations',
      'Staying compliant with health regulations'
    ],
    bgAccent: 'rgba(31, 165, 74, 0.04)'
  },
  {
    id: 'exports',
    title: 'Exports & Trade',
    description: 'We guide exporters across Ahmedabad and Surat through foreign exchange rules, getting duty refunds, and setting up letters of credit correctly.',
    details: [
      'Checking foreign remittances are compliant',
      'Tracking and claiming export refunds',
      'Avoiding being taxed twice on the same income',
      'Import-export code compliance'
    ],
    bgAccent: 'rgba(245, 130, 32, 0.04)'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'We support contractors, developers, and infrastructure companies with large project accounting, joint venture tax matters, and project-specific audits.',
    details: [
      'RERA compliance checks',
      'Auditing joint venture projects',
      'GST on construction contracts',
      'Tax on land development agreements'
    ],
    bgAccent: 'rgba(18, 59, 115, 0.04)'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'insight-1',
    category: 'Tax Updates',
    date: 'July 18, 2026',
    title: 'New Tax Rules: What They Mean for Your Business',
    excerpt: 'Recent changes to how capital gains and corporate income are taxed mean it\'s a good time to revisit your investment and sale plans.',
    content: `
# What the New Tax Rules Mean for You

The government recently changed how capital gains and corporate profits are taxed. Here\'s what business owners actually need to do about it.

## 1. If You\'re Planning to Sell an Asset or Investment
The rules around how long you need to hold something before selling it have changed:
- **Before you sell anything** — property, shares, or a stake in another company — check how the new holding-period rules affect your tax bill. Timing your sale differently could save real money.
- **If you hold land or older investments**, it\'s worth reviewing whether the old or new tax treatment works better for you.

## 2. If Your Company Uses the Lower Tax Rate Option
If your company opted for the simplified lower-tax structure, it\'s worth checking how it interacts with tax credits you may have built up in previous years — you don\'t want to lose value you\'re owed.

## 3. If You\'re Planning a Dividend or Buyback
Any payout to shareholders should be planned around the updated withholding tax rules, so nothing gets deducted or delayed unexpectedly.

## What to Do Next
*   **Step 1**: Get a full review of any unused tax credits sitting on your books.
*   **Step 2**: Re-check the timing on any planned sale of property, shares, or investments.
*   **Step 3**: Have your finance team confirm your tax reporting matches the new disclosure rules.
    `
  },
  {
    id: 'insight-2',
    category: 'GST Updates',
    date: 'July 10, 2026',
    title: 'Stop Losing Money to GST Credit Delays',
    excerpt: 'If your business operates in more than one state, small GST mismatches can quietly tie up your cash. Here\'s how to fix it.',
    content: `
# Stop Losing Money to GST Credit Delays

If you run a business across multiple states, you\'ve probably felt this: cash that should be available gets stuck because of GST mismatches, vendors who file late, or credits that don\'t get claimed on time.

## 1. Why Your Credit Gets Stuck
Right now, you can only claim GST credit once your vendor\'s filing matches yours. That means one late or careless vendor can hold up your money. To avoid this:
- **Keep a scorecard on your key vendors.** If someone regularly files late, consider adjusting payment terms until they clean up their act.
- **If you share services between your head office and other branches or plants**, make sure that\'s billed and recorded correctly — this trips up a lot of multi-location businesses.

## 2. Where Businesses Usually Lose Money
1.  **Wrong state, wrong claim** — a common mistake is booking travel or logistics expenses under the wrong state\'s GST number, which means losing that credit entirely.
2.  **Import & retainer services** — services you import or pay a retainer for often get missed in reverse-charge filings, and that credit gets lost too.

## What to Do About It
*   **Action 1**: Do a full 12-month reconciliation between what you\'ve claimed and what your vendors have actually filed.
*   **Action 2**: Set clear, written steps for your purchase team to follow, so mistakes don\'t repeat.
*   **Action 3**: Double-check that any services shared across states are billed correctly.
    `
  },
  {
    id: 'insight-3',
    category: 'Budget',
    date: 'May 24, 2026',
    title: 'Protecting Family Wealth: What Changed in This Year\'s Budget',
    excerpt: 'A plain-language look at how this year\'s budget affects family trusts, inherited assets, and passing wealth to the next generation.',
    content: `
# Protecting Family Wealth: What Changed This Year

For family-run businesses in Gujarat, this year\'s budget brings changes that affect how you should hold, grow, and eventually pass on your wealth.

## 1. Should You Set Up a Family Trust?
With regulators paying closer attention to who actually owns and controls what, it\'s worth rethinking how your family holds its assets:
- **Trusts can offer real protection** — but the type of trust you choose matters. The right structure can shield wealth from future tax changes while keeping control where you want it.
- **Consolidating scattered family holdings** under one proper structure, instead of everyone holding things individually, reduces future disputes and makes succession far simpler.

## 2. Real Estate Just Got Less Tax-Friendly
A change to how property gains are calculated means real estate isn\'t as tax-efficient as it used to be:
- If you hold property mainly as an investment, it\'s worth reviewing the actual return you\'re getting versus the tax cost.
- Other investment options may now offer a better after-tax return than holding onto low-yield property.

## What Families Should Do Now
1.  **Review how you currently hold business assets** — personally, or through a company — and see if restructuring makes sense.
2.  **Check any existing family trust** is still meeting current documentation and disclosure requirements.
3.  **Put your succession plan in writing** — who takes over what, and when — so it isn\'t left to guesswork.
    `
  },
  {
    id: 'insight-4',
    category: 'Compliance Calendar',
    date: 'July 01, 2026',
    title: 'Your Deadline Checklist for the Rest of This Year',
    excerpt: 'A simple, no-jargon checklist of the filing deadlines every business owner needs to know for the second half of the year.',
    content: `
# Your Deadline Checklist for the Rest of This Year

Here\'s a simple list of the filing deadlines that matter most for the rest of this financial year — miss these, and you could face daily penalties.

## 1. Company Filing Deadlines
- **Financial Statements (Form AOC-4)**: Due within 30 days of your Annual General Meeting.
- **Annual Return (Form MGT-7)**: Due within 60 days of your Annual General Meeting.
- **Director ID Verification (DIR-3 KYC)**: Must be updated before September 30.

## 2. Income Tax Deadlines
- **Tax Audit Report**: Due by September 30 if your business needs an audit.
- **Company Tax Return**: Due by October 31 for audited companies.
- **International Transactions Report**: Due by October 31 if you deal with related parties abroad.

## Getting Ready
Try to have your books, stock records, and vendor confirmations fully closed by August 15 — that gives your auditors enough time to actually do a thorough job, instead of rushing at the deadline.
    `
  }
];

export const CLIENT_TYPES = [
  {
    category: 'Manufacturing',
    narrative: 'We work with multi-generational manufacturing businesses in textiles, engineering, and precision tooling — helping them manage big equipment investments and tax across their supply chain.'
  },
  {
    category: 'Exporters',
    narrative: 'We help leading export houses in Surat and Ahmedabad trade internationally with confidence — covering foreign exchange rules, cross-border pricing, duty refunds, and global tax planning.'
  },
  {
    category: 'Listed Companies',
    narrative: 'We provide independent audits, help align your reporting with accounting standards, and review your internal reporting to meet the expectations of public market regulators.'
  },
  {
    category: 'Startups & Scaleups',
    narrative: 'We guide founders from their first funding round through to being investor and IPO ready — building solid ESOP plans, acting as your finance team, and validating your tax exemptions.'
  },
  {
    category: 'Financial Institutions',
    narrative: 'We provide credit checks, ongoing audits, and asset reviews for banks and non-banking financial companies.'
  },
  {
    category: 'Professional Services',
    narrative: 'We help consultants, agencies, and law firms build tax-efficient business structures, handle IP transfers, and simplify billing across states.'
  }
];
