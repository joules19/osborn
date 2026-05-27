export const COMPANY = {
  name: "Osborn Transport Services",
  shortName: "Osborn",
  tagline: "Fleet Maintenance & Recovery Services",
  phone: "01525 383 548",
  email: "info@osborntransportservices.com",
  markEmail: "mark.foster@osborntd.co.uk",
  address: {
    line1: "Gossard Park",
    line2: "Grovebury Road",
    town: "Leighton Buzzard",
    county: "Bedfordshire",
    postcode: "LU7 4SQ",
  },
  googleMapsUrl:
    "https://maps.google.com/?q=Osborn+Transport+Services,+21+Grovebury+Rd,+Leighton+Buzzard+LU7+4SQ",
  accreditations: ["ISO9001/2000", "I.R.T.E Workshop Accreditation"],
};

export const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Why Use Osborn", href: "/why-use-osborn" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Servicing & Maintenance",
        href: "/services/servicing-maintenance",
        children: [
          {
            label: "Commercial Vehicle Servicing",
            href: "/services/servicing-maintenance/commercial-vehicle-servicing",
          },
          {
            label: "MoT Preparation & Testing",
            href: "/services/servicing-maintenance/mot-preparation-testing",
          },
          {
            label: "Preventative Maintenance",
            href: "/services/servicing-maintenance/preventative-maintenance",
          },
          {
            label: "Computerised Maintenance Tracking",
            href: "/services/servicing-maintenance/computerised-maintenance-tracking",
          },
          {
            label: "Air Conditioning Service",
            href: "/services/servicing-maintenance/air-conditioning-service",
          },
        ],
      },
      {
        label: "Breakdown & Repairs",
        href: "/services/breakdown-repairs",
        children: [
          {
            label: "24/7 Roadside Repair",
            href: "/services/breakdown-repairs/247-roadside-repair",
          },
          {
            label: "UK Wide Vehicle Recovery",
            href: "/services/breakdown-repairs/uk-wide-vehicle-recovery",
          },
          {
            label: "Free Vehicle Recovery Account",
            href: "/services/breakdown-repairs/free-vehicle-recovery-account",
          },
          {
            label: "Steel & Aluminium Repairs",
            href: "/services/breakdown-repairs/steel-aluminium-repairs",
          },
        ],
      },
      {
        label: "Additional Services",
        href: "/services/additional-services",
        children: [
          {
            label: "Tachograph Centre",
            href: "/services/additional-services/tachograph-centre",
          },
          {
            label: "Hazardous Goods Services",
            href: "/services/additional-services/hazardous-goods",
          },
          {
            label: "Low Emission Zone",
            href: "/services/additional-services/low-emission-zone",
          },
          {
            label: "Mobile Servicing Vans",
            href: "/services/additional-services/mobile-servicing-vans",
          },
          {
            label: "Daily Fleet Checks",
            href: "/services/additional-services/daily-fleet-checks",
          },
          {
            label: "Out-of-Hours Services",
            href: "/services/additional-services/out-of-hours-services",
          },
        ],
      },
    ],
  },
  { label: "Quality Standards", href: "/quality-standards" },
  { label: "Pricing", href: "/pricing" },
  { label: "Operating Hours", href: "/operating-hours" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const WHY_USE_REASONS = [
  {
    num: 1,
    text: "Purpose-built, fully equipped 6,000sq.ft. four bay workshop with parking for over 30 large commercial vehicles",
  },
  {
    num: 2,
    text: "All calls are answered in person 24/7",
  },
  {
    num: 3,
    text: "UK-wide vehicle recovery service always available",
  },
  {
    num: 4,
    text: "Full Air Conditioning repairs and servicing",
  },
  {
    num: 5,
    text: "Steel and aluminium welding carried out on site. We do not outsource anything",
  },
  {
    num: 6,
    text: "Proactive customer services team make sure you never miss a service or MoT",
  },
  {
    num: 7,
    text: "62% of vehicles we attend at the roadside are repaired within 90 minutes",
  },
  {
    num: 8,
    text: "VOSA-approved Tachograph Centre on site",
  },
  {
    num: 9,
    text: "Our fleet of service vans can do inspections and servicing at your premises. At a time to suit you",
  },
  {
    num: 10,
    text: "Technicians have ADR licences — allowing them to assist fuel tankers or hazardous goods vehicles",
  },
];

export const HOME_HERO_SLIDES = [
  {
    headline: "Always There When You Need Help",
    subheading: "Roadside repairs",
    cta: { label: "Find Out More", href: "/services/breakdown-repairs" },
  },
  {
    headline: "Keeping Your Fleet on the Road",
    subheading: "Servicing & Maintenance",
    cta: { label: "Our Services", href: "/services/servicing-maintenance" },
  },
  {
    headline: "Setting the Highest Standards",
    subheading: "ISO9001 & I.R.T.E Accredited",
    cta: { label: "Learn More", href: "/why-use-osborn" },
  },
];

export const HOME_SERVICE_CARDS = [
  {
    title: "Servicing & Maintenance",
    href: "/services/servicing-maintenance",
    description:
      "Comprehensive commercial vehicle servicing, MoT preparation, preventative maintenance and more.",
  },
  {
    title: "Breakdown & Repairs",
    href: "/services/breakdown-repairs",
    description:
      "24/7 roadside repairs and UK-wide vehicle recovery. 62% of roadside repairs completed within 90 minutes.",
  },
  {
    title: "Additional Services",
    href: "/services/additional-services",
    description:
      "VOSA-approved tachograph centre, hazardous goods services, mobile servicing vans and daily fleet checks.",
  },
];

export const SERVICING_SUB_NAV = [
  {
    label: "Commercial Vehicle Servicing",
    href: "/services/servicing-maintenance/commercial-vehicle-servicing",
    icon: "truck",
  },
  {
    label: "MoT Preparation & Testing",
    href: "/services/servicing-maintenance/mot-preparation-testing",
    icon: "clipboard-check",
  },
  {
    label: "Preventative Maintenance",
    href: "/services/servicing-maintenance/preventative-maintenance",
    icon: "shield",
  },
  {
    label: "Computerised Maintenance Tracking",
    href: "/services/servicing-maintenance/computerised-maintenance-tracking",
    icon: "monitor",
  },
  {
    label: "Air Conditioning Service",
    href: "/services/servicing-maintenance/air-conditioning-service",
    icon: "wind",
  },
];

export const BREAKDOWN_SUB_NAV = [
  {
    label: "24/7 Roadside Repair",
    href: "/services/breakdown-repairs/247-roadside-repair",
    icon: "wrench",
  },
  {
    label: "UK Wide Vehicle Recovery",
    href: "/services/breakdown-repairs/uk-wide-vehicle-recovery",
    icon: "map-pin",
  },
  {
    label: "Free Vehicle Recovery Account",
    href: "/services/breakdown-repairs/free-vehicle-recovery-account",
    icon: "badge-check",
  },
  {
    label: "Steel & Aluminium Repairs",
    href: "/services/breakdown-repairs/steel-aluminium-repairs",
    icon: "hammer",
  },
];

export const ADDITIONAL_SUB_NAV = [
  {
    label: "Tachograph Centre",
    href: "/services/additional-services/tachograph-centre",
    icon: "gauge",
  },
  {
    label: "Hazardous Goods Services",
    href: "/services/additional-services/hazardous-goods",
    icon: "alert-triangle",
  },
  {
    label: "Low Emission Zone",
    href: "/services/additional-services/low-emission-zone",
    icon: "leaf",
  },
  {
    label: "Mobile Servicing Vans",
    href: "/services/additional-services/mobile-servicing-vans",
    icon: "car",
  },
  {
    label: "Daily Fleet Checks",
    href: "/services/additional-services/daily-fleet-checks",
    icon: "list-checks",
  },
  {
    label: "Out-of-Hours Services",
    href: "/services/additional-services/out-of-hours-services",
    icon: "clock",
  },
];

export const MENU_PRICING_ITEMS = [
  "Oil & Fluids",
  "All filters and service items",
  "Screen wash",
  "Minor repairs (bulbs/adjustments)",
  "MoT headlamp alignment test",
  "MoT brake roller testing",
  "MoT test trailer hire (where applicable)",
  "Presentation for MoT",
  "MoT steam clean",
  "MoT test fees",
];

export const OPERATING_HOURS = {
  weekdays: { label: "Monday – Friday", hours: "7:00am – 6:00pm + night shift until midnight" },
  saturday: { label: "Saturday", hours: "8:00am – 12:00 noon" },
  emergency: { label: "24/7 Emergency", hours: "Call 01525 383 548 at any time" },
};
