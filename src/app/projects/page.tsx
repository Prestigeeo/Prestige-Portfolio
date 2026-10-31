import { ProjectsList } from "./ProjectsList";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Olajumoke Owoeye (Prestige)",
  description:
    "Selected work across AI engineering, retrieval-augmented generation (RAG), speech audio NLP, and statistical data modeling."
};

export default function ProjectsPage() {
  return (
    <section className="wrap page-section">
      <p className="eyebrow">PORTFOLIO OF WORK</p>
      <h1 className="page-title">Systems engineered with statistical rigor and practical AI.</h1>
      <p className="page-description">
        From evaluating RAG retrieval pipelines ($Recall@K$, $MRR$) to fine-tuning low-resource audio models
        and modeling credit risk—each project represents a concrete problem, technical architecture, and measurable outcome.
      </p>

      <div style={{ marginTop: "3rem" }}>
        <ProjectsList initialProjects={projects} />
      </div>
    </section>
  );
}
