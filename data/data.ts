// ============================================================
// data.ts — Anusree Kottaram Portfolio
// ============================================================

export const siteConfig = {
  name: "Anusree Kottaram",
  title: "Data & Business Analyst",
  description:
    "Aspiring Data & Business Analyst with hands-on experience building interactive dashboards using Power BI and SQL.",
  url: "https://anusreekottaram.dev",
  email: "anusreekottaram64@gmail.com",
  phone: "8415093048",
};

// ── Navbar ────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

// ── Hero ──────────────────────────────────────────────────────
export const heroData = {
  greeting: "Hello, I'm",
  name: "Anusree Kottaram",
  roles: ["Data Analyst", "Business Analyst", "Dashboard Developer", "MSc Data Science Student"],
  tagline: "Turning raw data into strategic insight.",
  bio: "Aspiring Data & Business Analyst with hands-on experience building interactive dashboards using Power BI and SQL. Strong analytical foundation in Mathematics with leadership experience.",
  cta: {
    primary:   { label: "View Projects", href: "#projects" },
    secondary: { label: "Contact Me",   href: "#contact" },
  },
  socials: {
    github:   "https://github.com/AnusreeKottaram",
    linkedin: "https://www.linkedin.com/in/anusreekottaram",
    email:    "mailto:anusreekottaram64@gmail.com",
  },
  stats: [
    { value: "21K+",  label: "Orders Analysed" },
    { value: "$817K", label: "Revenue Tracked" },
    { value: "9.02",  label: "CGPA" },
    { value: "10+",   label: "Houses Built (NSS)" },
  ],
};

// ── About ─────────────────────────────────────────────────────
export const aboutData = {
  bio: "I'm a Mathematics graduate currently pursuing my MSc in Applied Data Science at SRM University. I'm passionate about leveraging data-driven insights to support strategic decision-making. With hands-on experience in Power BI, SQL, and Python, I love building dashboards and analytical solutions that tell compelling stories from complex datasets.",
  highlights: [
    "BSc Mathematics graduate with a CGPA of 9.02",
    "Currently pursuing MSc Applied Data Science at SRM University",
    "Built Power BI dashboards analysing 21K+ orders & $817K in revenue",
    "Led university-level initiatives as VP of LIVEWIRES Club",
  ],
  education: [
    {
      degree:      "MSc Applied Data Science",
      institution: "SRM University",
      duration:    "2025 – 2027",
      status:      "In Progress",
      icon:        "🎓",
    },
    {
      degree:      "BSc Mathematics",
      institution: "St. George's College, MG University",
      duration:    "2022 – 2025",
      cgpa:        "9.02",
      status:      "Completed",
      icon:        "📐",
    },
  ],
  languages: [
    { name: "English",   level: "Fluent" },
    { name: "Hindi",     level: "Proficient" },
    { name: "Malayalam", level: "Native" },
  ],
};

// ── Skills ────────────────────────────────────────────────────
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export type Skill = {
  name:     string;
  level?:   SkillLevel;
  percent?: number;
};

export type SkillCategory = {
  category: string;
  emoji:    string;
  skills:   Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Data Visualisation",
    emoji: "📊",
    skills: [
      { name: "Power BI",  level: "Advanced",     percent: 85 },
      { name: "Tableau",   level: "Intermediate", percent: 65 },
      { name: "Excel",     level: "Intermediate", percent: 70 },
    ],
  },
  {
    category: "Data & Databases",
    emoji: "🗄️",
    skills: [
      { name: "SQL",           level: "Intermediate", percent: 72 },
      { name: "DAX",           level: "Intermediate", percent: 75 },
      { name: "Data Modeling", level: "Intermediate", percent: 70 },
    ],
  },
  {
    category: "Programming",
    emoji: "💻",
    skills: [
      { name: "Python",           level: "Intermediate", percent: 65 },
      { name: "Machine Learning", level: "Beginner",     percent: 40 },
    ],
  },
  {
    category: "Soft Skills",
    emoji: "🤝",
    skills: [
      { name: "Leadership",            percent: 90 },
      { name: "Project Coordination",  percent: 85 },
      { name: "Communication",         percent: 88 },
      { name: "Organisational Skills", percent: 85 },
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────
export type Project = {
  id:          number;
  title:       string;
  description: string;
  bullets:     string[];
  tags:        string[];
  links: {
    github?: string;
    live?:   string;
  };
  featured: boolean;
  metrics?: { label: string; value: string }[];
};

export const projectsData: Project[] = [
  {
    id:    1,
    title: "Pizza Sales Analysis",
    description:
      "An interactive Power BI dashboard analysing 21K+ pizza orders and $817K in revenue to surface key sales trends, customer behaviour, and product performance insights.",
    bullets: [
      "Analysed 21K+ orders and $817K in total revenue",
      "Performed monthly revenue, AOV, and category-level performance analysis",
      "Used DAX to create calculated measures and custom KPIs",
      "Identified peak revenue months and top-performing product categories",
    ],
    tags:     ["Power BI", "DAX", "Data Modeling", "Sales Analytics"],
    links:    { github: "https://github.com/AnusreeKottaram" },
    featured: true,
    metrics: [
      { label: "Orders",  value: "21K+" },
      { label: "Revenue", value: "$817K" },
      { label: "Tool",    value: "Power BI" },
    ],
  },
];

// ── Experience ────────────────────────────────────────────────
export type Experience = {
  role:         string;
  organisation: string;
  duration:     string;
  type:         "Leadership" | "Volunteer" | "Work";
  bullets:      string[];
};

export const experienceData: Experience[] = [
  {
    role:         "Vice President",
    organisation: "LIVEWIRES Club, SRM University",
    duration:     "2025 – Present",
    type:         "Leadership",
    bullets: [
      "Led cross-functional student teams for planning and execution of university-level initiatives.",
      "Managed project timelines to ensure smooth execution of campus events.",
      "Improved event execution efficiency through structured planning.",
    ],
  },
  {
    role:         "NSS Secretary",
    organisation: "National Service Scheme, St. George's College",
    duration:     "2022 – 2025",
    type:         "Volunteer",
    bullets: [
      "Built 10 houses for people in need as part of community service drives.",
      "Managed documentation and reporting for volunteer programs.",
      "Coordinated team efforts for community-impact initiatives.",
    ],
  },
];

// ── Contact ───────────────────────────────────────────────────
export const contactData = {
  heading:    "Let's Connect",
  subheading: "Open to internships, collaborations, and data projects. Feel free to reach out!",
  email:      "anusreekottaram64@gmail.com",
  phone:      "8415093048",
  linkedin:   "https://www.linkedin.com/in/anusreekottaram",
  github:     "https://github.com/AnusreeKottaram",
  location:   "India",
  formFields: [
    { id: "name",    label: "Your Name",  type: "text",     placeholder: "Jane Doe" },
    { id: "email",   label: "Your Email", type: "email",    placeholder: "jane@example.com" },
    { id: "subject", label: "Subject",    type: "text",     placeholder: "Internship Opportunity" },
    { id: "message", label: "Message",    type: "textarea", placeholder: "Tell me about the opportunity…" },
  ],
};

// ── Footer ────────────────────────────────────────────────────
export const footerData = {
  name:      "Anusree Kottaram",
  tagline:   "Turning data into decisions.",
  builtWith: "Built with Next.js & Tailwind CSS",
  year:      new Date().getFullYear(),
  navLinks,
  socials: [
    { label: "GitHub",   href: "https://github.com/AnusreeKottaram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anusreekottaram" },
    { label: "Email",    href: "mailto:anusreekottaram64@gmail.com" },
  ],
};