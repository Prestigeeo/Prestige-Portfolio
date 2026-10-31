"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Project, ProjectCategoryType } from "@/types/project";

type FilterTab = "all" | ProjectCategoryType;

const tabs: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "ai-engineering", label: "AI Engineering & RAG" },
  { key: "ml-nlp", label: "Machine Learning & NLP" },
  { key: "stats-bi", label: "Statistics & BI" }
];

export function ProjectsList({ initialProjects }: { initialProjects: Project[] }) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filtered =
    activeTab === "all"
      ? initialProjects
      : initialProjects.filter((p) => p.categoryType === activeTab);

  return (
    <>
      <div className="filter-bar" role="tablist" aria-label="Project categories">
        {tabs.map((tab) => {
          const count =
            tab.key === "all"
              ? initialProjects.length
              : initialProjects.filter((p) => p.categoryType === tab.key).length;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`filter-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label} ({count})
            </button>
          );
        })}
      </div>

      <div className="project-grid project-grid-full">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
