import Link from "next/link";
import { Project } from "@/types/project";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-card-top">
        <p className="project-kicker">{project.number} / {project.category}</p>
        {index !== undefined && <span className="project-index">0{index + 1}</span>}
      </div>
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="project-card-metrics">
          {project.metrics.slice(0, 2).map((m) => (
            <span key={m.label} className="metric-chip">
              {m.label}: <strong>{m.value}</strong>
            </span>
          ))}
        </div>
      )}

      <div className="tag-list">
        {project.tools.slice(0, 4).map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <Link href={`/projects/${project.slug}`} className="project-link">
        Explore case study <span>↗</span>
      </Link>
    </article>
  );
}
