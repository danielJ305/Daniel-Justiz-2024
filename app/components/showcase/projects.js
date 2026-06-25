// Shared project data — used by both the Websites carousel (WorkDeveloper)
// and the dedicated case-study view (ProjectCaseStudy).
// Content structure follows project-case-study-template.md.

export const projects = [
  {
    id: "dynaxe-workforce",
    title: "Dynaxe Workforce",
    caption: "Built on Wordpress",
    image: "/webdev/dynaxe-website-board.jpg",
    video: {
      src: "/webdev/dynaxe-hero.mp4",
      poster: "/webdev/dynaxe-hero-poster.jpg",
    },
    liveSite: "https://dynaxeworkforce.com/",
    hook: "A WordPress rebrand for an HR audience.",
    tags: ["WordPress", "Business Website", "Redesign"],
    intro: {
      does: "Dynaxe Workforce helps U.S. employers fill hard-to-staff entry-level roles by sponsoring international workers through the EB-3 visa program. They run the whole process for the employer — sourcing, immigration paperwork, relocation, and ongoing support — so companies in high-turnover industries can keep their teams staffed.",
      needed:
        "The company already had a site, but it spoke to the wrong reader. The brand came across as tough and masculine, and the people who actually pick a staffing partner are usually in HR. It needed to feel credible to a cautious HR manager without losing the sense that Dynaxe can handle something as involved as immigration sponsorship.",
      role: "I handled the design and development on this project — the page designs, the WordPress build, and the launch on the client's hosting. This work was completed through Startup Street.",
    },
    challenges: [
      "The brand read as tough and masculine, but HR usually makes the call on a staffing partner. It had to soften without looking less capable.",
      "EB-3 sponsorship is unfamiliar to most HR managers. The site needed to make a complicated, immigration-backed process easy to follow quickly.",
      "The decision was to talk only to employers and keep candidate-facing messaging off the site, which meant cutting anything aimed at applicants.",
      "There was a lot to organize — industry pages, an FAQ, leadership bios, and trust content — and it all needed a structure that didn't overwhelm.",
      "The two reference sites pulled in different directions: BNY for corporate weight, Fortrea for a lighter, friendlier feel. The design had to land between them.",
    ],
    build: {
      design:
        "The brand needed to feel approachable without going soft. I kept the existing blue and gold so the company still looked like itself, then set those colors against off-white backgrounds with rounded corners and plenty of open space, which takes the hard edge off the original look. Bold display headings keep things confident, and the rest of the layout stays calm and uncluttered. There's no dark mode anywhere — the site reads light and easy, which is what an HR manager should feel before they've read a word.",
      dev: [
        "Custom page templates for the homepage, industry pages, About, FAQ, and Contact.",
        "A hero section with industry-specific video background.",
        "Reusable trust and proof-stat blocks, plus a \"How It Works\" process section.",
        "Industry landing pages for QSR, hospitality, manufacturing, and facility services.",
        "Contact form wired to email for inbound inquiries.",
        "Mobile-responsive layout and speed optimization.",
        "SEO setup: page titles, meta tags, and sitemap.",
      ],
      deployment: {
        items: [
          "Set up the production hosting environment.",
          "Migrated the finished site from the dev environment onto the client's hosting.",
          "Ran the go-live and post-launch checks.",
        ],
        note: "I take a project all the way to a live site on the client's own hosting, not just up to a handoff.",
      },
      pages: [
        "Home",
        "About (Leadership Team & Our Values)",
        "Dynaxe EB-3 Visa Programs",
        "How It Works",
        "Industries (QSR, Hospitality, Manufacturing, Facility Services)",
        "FAQ",
        "Contact",
      ],
      assets: [
        "Sourced and placed the photography and coordinated the hero video.",
      ],
    },
    results: {
      summary: [
        "Dynaxe launched with a site that finally matches who it's selling to. An HR manager landing on it gets a clear, calm read on a complicated service instead of a hard sell.",
        "The site supports how Dynaxe actually wins work: by earning the trust of cautious buyers before a sales conversation ever starts.",
      ],
    },
    takeaways: [
      {
        title: "Design for the buyer, not the end user",
        body: "EB-3 is about the candidates, but HR signs the contract. Aiming the whole brand at that reader shaped every decision after.",
      },
      {
        title: "Tone lives in the small choices",
        body: "Off-white backgrounds, rounded corners, and spacing shifted the brand's feel without changing its colors or weakening it.",
      },
      {
        title: "Make the complicated part simple, fast",
        body: "With this much to explain, the win was letting an HR reader grasp EB-3 in seconds, then giving them depth if they wanted it.",
      },
    ],
    details: {
      client: "Dynaxe Workforce",
      industry: "Workforce / Staffing (EB-3 Immigration)",
      platform: "WordPress",
      projectType: "Rebrand / Redesign",
      role: "Design & Development",
      year: "2026",
      agency: "Startup Street",
    },
  },
  {
    id: "mangrove-coast",
    title: "Mangrove Coast",
    caption: "Built on Shopify",
    image: "/webdev/mangrove-website-board.jpg",
    video: {
      src: "/webdev/mangrovecoast-hero.mp4",
      poster: "/webdev/mangrovecoast-hero-poster.jpg",
    },
    liveSite: "https://mymangrovecoast.com/",
    hook: "A Shopify build that turned a solo brand into an artist marketplace.",
    tags: ["Shopify", "E-Commerce", "Redesign"],
    intro: {
      does: "Mangrove Coast is a Florida apparel brand rooted in the outdoor lifestyle — fishing, the coast, and Southern outdoor culture. Its mission, \"Bringing Awareness While We Play,\" ties the products to a cause: celebrating and helping protect Florida's coastlines.",
      needed:
        "Mangrove Coast began as a one-person operation, with a single owner sourcing products, creating the art, and running marketing alone — and it struggled to gain traction. The relaunch changed the business model itself: the brand would run as a marketplace where independent artists turn their work into apparel, holding no inventory and splitting profit automatically with each artist. The new site had to support all of that — onboarding artists, giving each their own collection, and tracking commissions on every sale.",
      role: "I handled both the design and development on this project. I owned the build end to end — the storefront, the artist onboarding system, and the integrations behind the marketplace. Completed through Startup Street.",
    },
    challenges: [
      "Shopify, Printify, and PuppetVendors had to operate as one system. The storefront, the print-on-demand fulfillment, and the vendor commission splits each live in a different platform, and none of them integrate out of the box.",
      "Every sale had to pay the right artist automatically. With a 50/50 split per artist, each product needed to be tagged so the correct vendor got credited and paid without manual bookkeeping.",
      "The redesign had to happen on a live store. Shopify won't let you merge a separate dev store into an existing one, so the new site had to be built on the live store while it kept serving real customers.",
      "The page builder only renders on the live theme. The new navigation, footer, and product-hover effects couldn't be fully previewed ahead of launch, so they were finalized and tested at go-live.",
      "Artist onboarding needed real structure. Artists required a guided, step-by-step intake that adapts to their choices, not a generic contact form.",
    ],
    build: {
      design: [
        "The design had to make a marketplace feel like one cohesive brand rather than a patchwork of different artists' styles. I built around a coastal, outdoor aesthetic that stays consistent across the storefront while still letting each artist's work stand out in their own collection.",
        "For the artist-onboarding page, I used a guided, scroll-driven layout that walks people through how the program works step by step, so an involved process reads as simple and approachable.",
      ],
      dev: [
        "Connected Shopify, Printify, and PuppetVendors into one working pipeline — storefront and checkout on Shopify, print-on-demand fulfillment through Printify, and automated vendor commission splits through PuppetVendors.",
        "Built the attribution that ties each sale to the right artist, using a consistent vendor convention on every product so commissions split and pay out automatically.",
        "Set up automated per-artist collections that populate themselves based on the assigned vendor and surface that artist's bio, so the catalog scales without manual curation.",
        "Built a multi-step artist intake with conditional logic, so each artist only sees the fields relevant to their product type and print method.",
        "Curated the print-on-demand product catalog and product sync, and built shop filtering by artist, color, product type, and collection.",
      ],
      deployment: {
        items: [
          "Set up the store's hosting environment and connected the domain.",
          "Migrated the finished build from staging onto the client's live store.",
          "Managed the go-live and post-launch checks, so the switch happened cleanly without downtime for existing customers.",
        ],
      },
      pages: [
        "Home",
        "About",
        "Shop (artist / color / product-type / collection filtering)",
        "Our Artists + individual artist collections",
        "How We Do It (artist onboarding)",
        "FAQ",
        "Contact",
        "Artist Join / Login (account + cart)",
        "Individual product pages",
      ],
      assets: [
        "Set up the print-on-demand operations workflow: a curated Printify product list feeding the artist request form, plus a mockup-proofing step so each design is approved before it goes live.",
        "Configured automated commission payouts through PuppetVendors (Stripe / PayPal).",
      ],
    },
    results: {
      summary: [
        "Mangrove Coast relaunched as a working marketplace — one where new artists can be onboarded, their designs published as apparel, and their earnings tracked and paid automatically, with no inventory held.",
        "The result is a site the business can actually grow into. Adding an artist no longer means rebuilding anything — it's a defined onboarding flow and an automated collection that handles the rest.",
      ],
    },
    takeaways: [
      {
        title: "The integration was the real build",
        body: "Getting three platforms that don't natively connect to act as one system was the core engineering work, and it came down to a clean, consistent attribution setup rather than brute force.",
      },
      {
        title: "Work within the platform's limits",
        body: "Shopify and the page builder both have hard constraints around live stores and draft themes. Building around them — staging carefully, then publishing in a controlled go-live — kept the existing store running the whole time.",
      },
      {
        title: "Structure makes complexity approachable",
        body: "A guided, step-by-step artist intake turned an involved onboarding process into something simple to complete, which cut down on incomplete submissions.",
      },
    ],
    details: {
      client: "Mangrove Coast",
      industry: "Apparel / Outdoor Lifestyle (Print-on-Demand)",
      platform: "Shopify",
      projectType: "Rebrand + Redesign (marketplace)",
      role: "Design + Development",
      year: "2025–2026",
      agency: "Startup Street",
    },
  },
  {
    id: "evolutionary-events",
    title: "Evolutionary Events",
    caption: "Built on Wordpress",
    image: "/webdev/EE2025_Website_Mockup.jpeg",
    video: {
      src: "/webdev/evolutionaryevents-hero.mp4",
      poster: "/webdev/evolutionaryevents-hero-poster.jpg",
    },
    liveSite: "https://evolutionaryevents.com/",
    hook: "A rebrand for a boutique corporate-events firm.",
    tags: ["WordPress", "Business Website", "Redesign"],
    intro: {
      does: "Evolutionary Events is a boutique event-management firm that designs and runs high-end corporate gatherings — incentive trips, sales kickoffs, executive retreats, user conferences, and President's Clubs — for companies that treat these events as a real investment in their people. Founded in 2002 by Nicky Baumohl, the firm works as a high-touch extension of its clients' internal teams, where the whole pitch rests on detail, personal service, and flawless execution.",
      needed:
        "The previous site was a set of static HTML pages that didn't carry the weight of the work behind it. A firm selling luxury, white-glove experiences was being represented by a dated, generic web presence — the kind of disconnect a high-budget corporate buyer notices immediately. They needed a site that looked and felt like the events themselves.",
      role: "I handled the design and development on this project, completed through Startup Street — owning the page designs, the build, and the launch.",
    },
    challenges: [
      "A high-touch service is hard to convey online. The brand lives on personal relationships, anticipation, and detail — all of which usually happen with a person in the room. The site had to communicate that warmth and polish without the human there to deliver it.",
      "A broad service menu needed structure, not a long list. Five distinct event categories plus standalone Gifts & Merchandise and Destination Management offerings — a flat page list would have buried it; visitors needed to self-identify fast.",
      "A lot of existing content had to be reorganized. There was substantial copy to work with, but it needed an intuitive sitemap so each event type and supporting service had a clear, consistent home.",
      "The audience is a cautious, high-value buyer. Corporate decision-makers spending significant budgets need proof, not just polish — so credibility elements (FAQ, case studies, trust builders) had to be built in from the start.",
      "The aesthetic had to be warm and personal without tipping into busy. The direction was clean and professional, with color used sparingly — confident, but never loud.",
    ],
    build: {
      design: [
        "The design had one job: make a screen feel like the high-touch service the firm actually delivers. That meant warmth and restraint over flash.",
        "Generous white space and soft off-whites set a calm, premium tone, with color used as an accent rather than a theme — enough personality to feel human, never enough to read as busy. A strong typographic hierarchy keeps long-form content (event descriptions, FAQs, company story) easy to move through, and the hero leads with the experience itself rather than a tagline. The result reads as boutique and intentional, which is exactly how the firm wants to be perceived before a single conversation happens.",
      ],
      dev: [
        "Built a category-hub structure for Event Types: a parent landing page feeding five sub-pages that each follow a consistent template (headline, descriptive statement, key features & benefits, \"how we do it,\" clients, trust builders, brand statement, CTA).",
        "Standalone Gifts & Merchandise and Destination Management pages, plus dedicated feature sections on the homepage pointing to each.",
        "Contact page with an inquiry form wired to email.",
        "Fully responsive across mobile and tablet.",
        "SEO structure: page titles, meta tags, clean heading hierarchy, sitemap.",
      ],
      deployment: {
        items: [
          "Set up the hosting environment.",
          "Migrated the finished site from dev/staging onto the client's hosting.",
          "Ran the go-live and post-launch checks.",
        ],
        note: "I take a project all the way to a live site on the client's own hosting, not just up to a handoff.",
      },
      pages: [
        "Home",
        "About (Company Info, Mission, History, Founder, Testimonials, CTA)",
        "Event Types — Conferences & Meetings",
        "Event Types — Incentive Programs",
        "Event Types — Celebrations & Recognition",
        "Event Types — Experiential Marketing & Engagement",
        "Event Types — Team Building & Culture",
        "How We Do It",
        "Case Studies",
        "FAQ",
        "Gifts & Merchandise",
        "Destination Management",
        "Contact",
      ],
    },
    results: {
      summary: [
        "Evolutionary Events launched with a site that finally matches the events behind it — polished, warm, and structured around how their buyers actually shop.",
        "The new site gives the firm a digital presence that does some of the selling on its own — letting a high-value prospect understand the range of work, find their event type, and trust the firm before the first call.",
      ],
    },
    takeaways: [
      {
        title: "Structure can do the selling for a broad service menu",
        body: "Five event types plus two standalone services could have overwhelmed visitors. Organizing them under a clear hub, with each sub-page following the same pattern, let buyers find themselves in seconds instead of reading everything.",
      },
      {
        title: "A luxury service needs a site that feels like the service",
        body: "For a high-touch firm, the design isn't decoration — it's the first proof of the brand promise. Restraint, white space, and careful type did more here than any amount of color would have.",
      },
      {
        title: "Consistency makes a content-heavy site maintainable",
        body: "Building the event pages on one repeatable template kept the experience coherent for visitors and made the site far easier to extend later.",
      },
    ],
    details: {
      client: "Evolutionary Events",
      industry: "Corporate Event Management / Hospitality",
      platform: "WordPress",
      projectType: "Redesign / Rebrand",
      role: "Design & Development",
      year: "2025",
      agency: "Startup Street",
    },
  },
  {
    id: "equitus-ai",
    title: "Equitus AI",
    caption: "Built on Wordpress",
    image: "/webdev/equitus-ai.png",
    liveSite: "https://equitus.ai/",
    hook: "An in-house web developer role for a knowledge-graph AI company.",
    tags: ["WordPress", "Business Website", "SEO"],
    intro: {
      does: "Equitus AI builds advanced data-intelligence technology — knowledge graphs and AI tooling that turn fragmented data into usable, connected insight for demanding enterprise and government environments.",
      needed:
        "The company needed a website that could communicate sophisticated technology with authority and clarity, while doubling as a working marketing channel — one that earned organic search visibility and actively supported campaigns, not just a static brochure.",
      role: "As Equitus AI's in-house WordPress Web Developer (October 2023 – August 2024), I designed and developed the company's website in close collaboration with their marketing team, then maintained and grew it over my time there.",
    },
    challenges: [
      "Communicating deep, technical AI capabilities with authority while keeping the experience clear and approachable.",
      "Translating the marketing team's branding and messaging strategy into a layout and content that delivered it consistently.",
      "Growing organic search visibility and engagement in a competitive, jargon-heavy space.",
      "Keeping the site continuously aligned with a fast-evolving company and its shifting marketing objectives.",
    ],
    build: {
      design:
        "Working alongside the marketing team, I designed and developed the site for a seamless user experience with fully responsive design across devices, integrating the company's branding and messaging strategy directly into the layout and content so the look reinforced the message.",
      dev: [
        "Designed and developed the company website in WordPress, responsive across all devices.",
        "Integrated branding and messaging strategies into the site's layout and content, in close collaboration with the marketing team.",
        "Optimized the site for SEO, improving organic search visibility and user engagement.",
        "Implemented web analytics tools to track visitor behavior and surface insights for marketing campaigns and performance analysis.",
        "Maintained and updated website content to stay aligned with the company's evolving goals and marketing objectives.",
      ],
    },
    results: {
      summary: [
        "The SEO work boosted organic search visibility and improved user engagement, driving increased traffic and higher conversion rates.",
        "The analytics implementation surfaced insights into visitor behavior that supported the marketing team's campaigns and performance analysis, and ongoing content updates kept the site aligned with the company's evolving goals throughout my time there.",
      ],
    },
    takeaways: [
      {
        title: "A website is a marketing channel, not a brochure",
        body: "Working day to day with the marketing team meant the site was treated as a living asset — tuned for search, instrumented with analytics, and updated to match each shift in strategy.",
      },
      {
        title: "Branding and build aren't separate jobs",
        body: "Baking the messaging strategy straight into the layout and content kept the brand consistent and made the marketing team's work land harder.",
      },
      {
        title: "Measure, then improve",
        body: "Analytics turned guesses into decisions — the data on visitor behavior is what made the SEO and content gains repeatable rather than lucky.",
      },
    ],
    testimonial: {
      quote: [
        "I highly recommend Daniel as an exceptional web developer. He consistently manages multiple websites for our corporation with dedication and expertise. Daniel's flexibility and ability to seamlessly switch between projects without losing track of deadlines and goals are truly commendable.",
        "His proficiency in design software like Photoshop and Illustrator has been invaluable, allowing him to make on-the-fly modifications without needing a web designer. Daniel's coding skills enable him to create and modify scripts, ensuring an optimal web experience for our users.",
        "Daniel excels in handling complex situations, whether it's resolving hosting issues, DNS problems, or even site crashes. He remains steadfast and determined until the problem is fixed. His problem-solving skills and perseverance are invaluable assets to our team.",
        "A true team player, Daniel is always willing to help and contribute wherever his input can make a difference. The recent revamp of our brand provided an opportunity for Daniel to showcase his expertise. He successfully redesigned our website's structure, functions, and content, and the results have exceeded my expectations.",
        "Working with Daniel is a pleasure; he consistently maintains a positive attitude and is always ready to tackle the next challenge. I am incredibly pleased with the outcome and grateful to have Daniel as part of my team. Great job, Daniel!",
      ],
      name: "Cedric Signori",
      title: "Managing Director at Equitus",
      relationship: "Managed Daniel directly",
      date: "May 13, 2024",
      source: "https://www.linkedin.com/in/daniel-justiz/",
    },
    details: {
      client: "Equitus AI",
      industry: "AI / Data Intelligence",
      platform: "WordPress",
      projectType: "Company Website (in-house)",
      role: "WordPress Web Developer",
      year: "Oct 2023 – Aug 2024 (11 mos)",
    },
  },
  {
    id: "gofreight-hub",
    title: "GoFreight Hub",
    caption: "Built on Wordpress",
    image: "/webdev/go-freight-hub.png",
    liveSite: "https://gofreighthub.io/",
    hook: "An in-house web designer managing a logistics company's portfolio of WordPress sites.",
    tags: ["WordPress", "Business Website", "SEO"],
    intro: {
      does: "GoFreight Hub is a third-party logistics (3PL) company that moves freight for businesses across the U.S., running a portfolio of websites across its different departments and service lines.",
      needed:
        "With more than a dozen sites on WordPress, the company needed someone in-house to administer all of them, build out conversion and sales-funnel pages for each department, modernize older custom-built sites, and develop the SEO structure — keeping everything current as the business grew.",
      role: "I joined as a Web Developer intern and moved into a full-time Web Designer role at GoFreight Hub (October 2019 – May 2021), where I administered 12+ WordPress websites and owned much of the company's web design, development, and graphic design.",
    },
    challenges: [
      "Administering a portfolio of 12+ WordPress sites at once, without losing track of any of them.",
      "Building conversion and sales-funnel pages tailored to several different departments and audiences.",
      "Revamping older, custom-written websites and dated UIs onto a maintainable WordPress setup.",
      "Developing an SEO structure across the portfolio and integrating third-party systems.",
    ],
    build: {
      design:
        "Alongside the development work, I handled graphic design and UI — revamping older interfaces and designing conversion and sales-funnel pages built to move visitors toward a clear action for each department.",
      dev: [
        "Administered 12+ WordPress websites across the company's departments and service lines.",
        "Created many of the conversion and sales-funnel pages for different departments.",
        "Revamped custom-written websites and older UIs, modernizing them on WordPress.",
        "Planned and implemented new features, tested them, and integrated third-party systems.",
        "Developed the SEO structure and handled ongoing site optimization.",
        "Delivered new websites end to end.",
        "Used Google Analytics to track performance and inform changes.",
      ],
    },
    results: {
      summary: [
        "Over nearly two years, I kept a 12+ site WordPress portfolio running and improving — delivering new sites, modernizing legacy ones, and building the conversion pages that supported the company's different departments.",
        "The SEO structure and optimization work gave the portfolio a stronger, more consistent search foundation, while the funnel pages gave each department a clearer path from visitor to lead.",
      ],
    },
    takeaways: [
      {
        title: "Managing many sites is a system, not a sprint",
        body: "Keeping 12+ WordPress sites healthy meant staying organized and consistent — the discipline mattered as much as any single build.",
      },
      {
        title: "Design and code together move the needle",
        body: "Owning both the graphic design and the development let me ship conversion pages fast, without waiting on a handoff between roles.",
      },
      {
        title: "Modernize without breaking what works",
        body: "Revamping custom-written sites onto WordPress made them far easier to maintain and extend, without losing what the business already relied on.",
      },
    ],
    testimonial: {
      quote:
        "Daniel displayed his skills in web design, graphic design and web development. He is a fast learner and someone that will give you his extra mile. I strongly recommend Daniel to any web or marketing department.",
      name: "Gilberto Marcano",
      title:
        "Founder & Business Transformation Strategist | AI, Marketing, Sales & Scalable Growth Systems",
      relationship: "Managed Daniel directly",
      date: "May 14, 2021",
      source: "https://www.linkedin.com/in/daniel-justiz/",
    },
    details: {
      client: "GoFreight Hub",
      industry: "Logistics / Freight (3PL)",
      platform: "WordPress",
      projectType: "Company Websites (in-house)",
      role: "Web Designer",
      year: "Oct 2019 – May 2021 (1 yr 8 mos)",
    },
  },
];

export default projects;
