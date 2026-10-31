import {
  academicBackground,
  certifications,
  additionalTraining,
  leadershipExperiences
} from "@/data/credentials";

export const metadata = {
  title: "About | Olajumoke Owoeye (Prestige)",
  description:
    "Statistician, AI Engineer, and Community Builder with an academic background in Demography & Statistics from Obafemi Awolowo University. Co-Lead at GDG on Campus OAU."
};

const skillGroups = [
  {
    category: "Languages & Frameworks",
    tools: ["Python", "SQL", "R", "TypeScript", "FastAPI", "Streamlit", "PyTorch"]
  },
  {
    category: "AI, RAG & Machine Learning",
    tools: [
      "Retrieval-Augmented Generation (RAG)",
      "ChromaDB",
      "Vector Search & Embeddings",
      "Hugging Face Transformers",
      "Wav2Vec2 XLS-R",
      "Scikit-Learn",
      "Random Forest",
      "Prompt Engineering",
      "Information Retrieval Evaluation (Recall@K, MRR)"
    ]
  },
  {
    category: "Statistical Modeling & Analytics",
    tools: [
      "Statistical Hypothesis Testing",
      "Regression Analysis (OLS / Logistic)",
      "Sampling & Survey Design",
      "Exploratory Data Analysis (EDA)",
      "Population Dynamics",
      "Pandas & NumPy"
    ]
  },
  {
    category: "Cloud, BI & Databases",
    tools: [
      "Microsoft Power BI (PL-300 Certified)",
      "Microsoft Azure (DP-900 Certified)",
      "PostgreSQL",
      "SQLite",
      "Git & GitHub",
      "Docker"
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="wrap about-page">
      {/* Top Bio Section */}
      <div className="about-grid-top">
        <div>
          <p className="eyebrow">ABOUT ME & MY PATH</p>
          <h1 className="page-title">
            Rooted in statistical foundations. Building for real-world clarity.
          </h1>
        </div>

        <div className="about-text">
          <p>
            Hello, I’m <strong>Olajumoke Owoeye</strong> (known professionally as <strong>Prestige</strong>). I am a statistician and AI engineer based in Nigeria.
          </p>
          <p>
            My journey into AI didn’t start with generative prompts—it started with <strong>Demography and Social Statistics</strong> at Obafemi Awolowo University. Studying population dynamics, census sampling errors, and regression taught me early on that numbers are never neutral; they represent living human systems, systemic variances, and critical trade-offs.
          </p>
          <p>
            When I transitioned deeper into machine learning and was selected as <strong>one of 30 builders for the TAG Ecosystem AI Engineering Bootcamp</strong>, this statistical training became my defining perspective. Rather than treating AI models as black-box magic, I look closely at their evaluation boundaries: testing recall and ranking accuracy in RAG systems, calibrating imbalanced classifiers in fraud detection, and fine-tuning acoustic models for low-resource African dialects on Hugging Face.
          </p>
          <p>
            Beyond code, I believe in community as an engine for transformation. As <strong>Campus Ambassador & Lead for Data Science Nigeria (DSN) OAU</strong>, <strong>Co-Lead for Google Developer Groups (GDG) on Campus OAU</strong>, and a <strong>Mentor at AnalystLab Africa</strong>, I lead an active community of over 3,000 student technologists. My intentional focus is moving our community from passive learning to active building—breaking the tutorial cycle and empowering students to ship real, verifiable projects.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              className="button"
              href="/assets/Owoeye%20Olajumoke%E2%80%99s%20CV.docx"
              target="_blank"
              rel="noreferrer"
            >
              Download Full CV ↗
            </a>
            <a
              className="button-outline"
              href="https://www.linkedin.com/in/olajumoke-owoeye-1553022a6?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* Academic Background */}
      <section className="education-section">
        <p className="eyebrow">FORMAL EDUCATION</p>
        <h2>Academic foundations.</h2>
        <div className="timeline-list">
          {academicBackground.map((edu) => (
            <div key={edu.degree} className="timeline-item">
              <div className="timeline-header">
                <h3>{edu.degree}</h3>
                <span className="timeline-meta">{edu.location}</span>
              </div>
              <p className="timeline-sub">{edu.institution}</p>
              <ul>
                {edu.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="cert-section">
        <p className="eyebrow">PROFESSIONAL CERTIFICATIONS</p>
        <h2>Verified credentials & continuous training.</h2>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.title} className="cert-card">
              <span className="cert-issuer">{cert.issuer}</span>
              <h3>{cert.title}</h3>
              {cert.description && <p>{cert.description}</p>}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", background: "#ffffff", padding: "2rem", borderRadius: "20px", border: "1px solid var(--line-strong)" }}>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>ADDITIONAL SPECIALIZED TRAINING</p>
          <div className="tag-list">
            {additionalTraining.map((t) => (
              <span key={t} style={{ fontSize: "0.88rem", padding: "0.45rem 0.9rem" }}>
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Work Experience */}
      <section className="experience-section">
        <p className="eyebrow">LEADERSHIP, MENTORSHIP & IMPACT</p>
        <h2>Community leadership and operational roles.</h2>
        <div className="timeline-list">
          {leadershipExperiences.map((exp) => (
            <div key={exp.organization + exp.role} className="timeline-item">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-meta">{exp.period}</span>
              </div>
              <p className="timeline-sub">{exp.organization}</p>
              <ul>
                {exp.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Tool Belt Grouped */}
      <section className="education-section">
        <p className="eyebrow">TECHNICAL TOOLBELT</p>
        <h2>Core technical stack & methods.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.75rem", marginTop: "2.5rem" }}>
          {skillGroups.map((group) => (
            <div key={group.category} style={{ background: "#ffffff", border: "1px solid var(--line-strong)", borderRadius: "18px", padding: "1.8rem" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.18rem", marginTop: 0, marginBottom: "1rem", color: "var(--ink)" }}>
                {group.category}
              </h3>
              <div className="tag-list" style={{ marginTop: 0 }}>
                {group.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
