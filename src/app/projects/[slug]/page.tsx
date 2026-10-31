import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <section className="wrap project-page">
      <Link href="/projects" className="back-link">
        ← Back to all projects
      </Link>

      <div className={`project-hero ${project.accent}`}>
        <p className="project-kicker">
          {project.number} / {project.category}
        </p>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
        <span className="corner-shape" />
      </div>

      <div className="project-details">
        <section>
          <p className="eyebrow">THE CONTEXT & PROBLEM</p>
          <p>{project.overview}</p>
        </section>

        <section>
          <p className="eyebrow">MY ROLE & CONTRIBUTION</p>
          <p>{project.role}</p>
        </section>

        <section>
          <p className="eyebrow">TOOLS, ARCHITECTURE & METHODS</p>
          <div className="tag-list">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>

        {project.metrics && project.metrics.length > 0 && (
          <section>
            <p className="eyebrow">EVALUATION & BENCHMARKS</p>
            <div className="metric-row">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.keyHighlights && project.keyHighlights.length > 0 && (
          <div className="highlights-section">
            <p className="eyebrow">TECHNICAL HIGHLIGHTS & ARCHITECTURE</p>
            <ul className="highlights-list">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="project-actions">
        {project.repositoryUrl && project.repositoryUrl !== "#" && (
          <a
            className="button"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            View repository ↗
          </a>
        )}

        {project.huggingFaceUrl && (
          <a
            className="button-outline"
            href={project.huggingFaceUrl}
            target="_blank"
            rel="noreferrer"
          >
            Hugging Face model weights ↗
          </a>
        )}

        {project.demoUrl && (
          <a
            className="arrow-link"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Launch live demo <span>↗</span>
          </a>
        )}
      </div>
    </section>
  );
}
