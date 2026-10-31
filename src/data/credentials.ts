import { Certification, Education, LeadershipExperience } from "@/types/project";

export const academicBackground: Education[] = [
  {
    degree: "Bachelor of Science (B.Sc.), Demography and Social Statistics",
    institution: "Obafemi Awolowo University (OAU)",
    location: "Ile-Ife, Nigeria",
    details: [
      "Specialized in Statistical Methods, Probability Distributions, Regression Analysis, and Sampling Techniques.",
      "Applied population studies, demographic dynamics, and survey research methodology to evidence-based decision making.",
      "Bridged statistical foundations into modern computational workflows and machine learning evaluation."
    ]
  },
  {
    degree: "Diploma in Computer Hardware Engineering (Distinction)",
    institution: "Obafemi Awolowo University",
    location: "Ile-Ife, Nigeria",
    details: [
      "Graduated with Distinction in foundational hardware architecture, computing systems, and system diagnostics."
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    year: "Certified",
    description: "Enterprise data modeling, DAX expressions, interactive business intelligence, and actionable reporting."
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    year: "2026",
    description: "Core cloud data concepts, relational and non-relational data services on Azure, and analytical workloads."
  },
  {
    title: "Certified Data Scientist",
    issuer: "NITDA (National Information Technology Development Agency, Nigeria)",
    year: "Certified",
    description: "Practical data science, statistical modeling, exploratory data analysis, and predictive workflows."
  },
  {
    title: "Certified Medtech Data Scientist",
    issuer: "AWIBI MEDTECH",
    year: "Certified",
    description: "Healthcare analytics, clinical and population health data processing, and biomedical data ethics."
  }
];

export const additionalTraining: string[] = [
  "MIT Universal AI Program",
  "Google AI Essentials",
  "Introduction to AI Agents — DataCamp",
  "Database Design & Relational Modeling — DataCamp",
  "Research Method Lab Training — Brooke Research Consulting Inc."
];

export const leadershipExperiences: LeadershipExperience[] = [
  {
    role: "Campus Ambassador & Community Lead",
    organization: "Data Science Nigeria (DSN) — Obafemi Awolowo University",
    period: "2026 – Present",
    highlights: [
      "Lead a vibrant campus AI community of 3,000+ student technologists, spearheading a cultural shift from passive learning to active, production-grade building.",
      "Direct technical workshops, project build-nights, and data science sprints covering RAG systems, classification, and speech modeling.",
      "Connect emerging student builders with national DSN competitions, hackathons, and industry mentorship tracks."
    ]
  },
  {
    role: "Co-Lead",
    organization: "Google Developer Groups (GDG) on Campus, Obafemi Awolowo University",
    period: "Sept 2026 – Present",
    highlights: [
      "Direct core community operations for over 3,000 tech members, coordinating track leads across AI/ML, cloud, mobile, and web technologies.",
      "Champion practical building initiatives and mentorship pipelines that empower students to build verifiable portfolio projects with Google technologies."
    ]
  },
  {
    role: "Mentor & Trainer",
    organization: "AnalystLab Africa",
    period: "Sept 2026 – Present",
    highlights: [
      "Guide aspiring data professionals through Python, analytical workflows, statistical inference, and machine learning pipelines.",
      "Help learners build intuition for interpreting model behavior, evaluation metrics, and error analysis."
    ]
  },
  {
    role: "Head of Operations",
    organization: "AIESEC in Nigeria",
    period: "May 2025 – Nov 2025",
    highlights: [
      "Led operational execution for youth leadership and international exchange programs, coordinating 15+ team leads across three states.",
      "Monitored KPIs and program performance data to optimize logistics, participant selection, and resource delivery."
    ]
  },
  {
    role: "Community Manager",
    organization: "Young African Leaders Initiative (YALI)",
    period: "Jan 2024 – Feb 2025",
    highlights: [
      "Engaged an active community of 500+ young African changemakers through learning tracks, webinars, and leadership initiatives."
    ]
  },
  {
    role: "Peer Educator & Field Enumerator / Analyst",
    organization: "United Nations Population Fund (UNFPA)",
    period: "2024",
    highlights: [
      "Administered household surveys and cleaned field datasets covering reproductive health and population dynamics.",
      "Processed 300+ field demographic records to extract indicators supporting evidence-based health interventions."
    ]
  }
];
