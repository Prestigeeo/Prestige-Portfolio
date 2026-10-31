export type ProjectCategoryType = "ai-engineering" | "ml-nlp" | "stats-bi";

export type Project = {
  slug: string;
  number: string;
  category: string;
  categoryType: ProjectCategoryType;
  title: string;
  shortDescription: string;
  overview: string;
  tools: string[];
  role: string;
  accent: "rose" | "lilac" | "sage" | "peach";
  status: "Featured" | "Completed" | "In progress";
  repositoryUrl?: string;
  demoUrl?: string;
  huggingFaceUrl?: string;
  metrics?: { label: string; value: string }[];
  keyHighlights?: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  id?: string;
  link?: string;
  badge?: string;
  description?: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  details: string[];
};

export type LeadershipExperience = {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
};
