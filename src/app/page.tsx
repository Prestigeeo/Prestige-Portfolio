import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { certifications, leadershipExperiences } from "@/data/credentials";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.status === "Featured" || p.slug === "fraud-detection-random-forest").slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="hero-badge-tag">
            <span className="dot" />
            <span>AI Engineering · TAG Ecosystem Cohort 1 Builder</span>
          </div>

          <p className="eyebrow">STATISTICIAN &bull; AI ENGINEER &bull; COMMUNITY BUILDER</p>

          <h1>I build systems where statistical rigor and applied AI meet.</h1>
          
          <p className="hero-description">
            I’m <strong>Prestige (Olajumoke Owoeye)</strong>—a statistician and AI engineer with an academic foundation in Demography and Social Statistics from Obafemi Awolowo University. I specialize in evidence-grounded RAG systems, speech models for African languages, and reproducible machine learning pipelines.
          </p>

          <div className="hero-actions">
            <Link className="button" href="/projects">
              Explore selected projects
            </Link>
            <Link className="button-outline" href="/about">
              My background & roots
            </Link>
            <a
              className="arrow-link"
              href="/assets/Owoeye%20Olajumoke%E2%80%99s%20CV.docx"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-statement" aria-label="Data with purpose">
          <span className="star">✦</span>
          <p>
            data<br />
            <i>with</i><br />
            purpose
          </p>
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
        </div>
      </section>

      {/* Trust & Credential Strip */}
      <section className="trust-strip">
        <div className="wrap trust-strip-inner">
          <div className="trust-item">
            <span className="trust-item-label">Academic Foundation</span>
            <span className="trust-item-title">B.Sc. Demography & Statistics</span>
            <span className="trust-item-sub">Obafemi Awolowo University</span>
          </div>

          <div className="trust-item">
            <span className="trust-item-label">Verified Certifications</span>
            <span className="trust-item-title">Microsoft PL-300 & DP-900</span>
            <span className="trust-item-sub">Power BI Associate & Azure Data</span>
          </div>

          <div className="trust-item">
            <span className="trust-item-label">Ecosystem & Impact</span>
            <span className="trust-item-title">Community Builder</span>
            <span className="trust-item-sub">3,000+ Students · Learning to Building</span>
          </div>

          <div className="trust-item">
            <span className="trust-item-label">Engineering Focus</span>
            <span className="trust-item-title">RAG, Speech NLP & Agents</span>
            <span className="trust-item-sub">87.6% Recall@3 on Retrieval</span>
          </div>
        </div>
      </section>

      {/* The Statistician's Lens / Perspective Band */}
      <section className="wrap intro-band">
        <div className="intro-grid">
          <div>
            <p className="eyebrow">THE PRACTICE & PHILOSOPHY</p>
            <h2>Why statistics shapes how I build and evaluate AI.</h2>
          </div>
          <div className="intro-text">
            <p>
              Many intelligent systems fail not because models lack capability, but because systems lack <em>empirical measurement</em>. When retrieval-augmented generation produces hallucinations or class imbalance blinds a fraud classifier, intuitive guesswork is never enough.
            </p>
            <p>
              Trained in demography, survey sampling, and statistical inference, I approach AI engineering with experimental discipline: quantifying retrieval performance with metrics like Recall@K and MRR, calibrating confidence bounds, and designing auditable verification trails into every workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="wrap work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED WORK</p>
            <h2>Practical systems, evaluated with data.</h2>
          </div>
          <Link className="arrow-link" href="/projects">
            View all 7 projects <span>→</span>
          </Link>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Community Leadership & Mentorship */}
      <section className="wrap leadership-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">COMMUNITY & ECOSYSTEM</p>
            <h2>Moving a community of 3,000+ students from learning to building.</h2>
          </div>
          <Link className="arrow-link" href="/about">
            Full story & experience <span>→</span>
          </Link>
        </div>

        <div className="leadership-grid">
          {leadershipExperiences.slice(0, 3).map((item) => (
            <div key={item.organization} className="leadership-card">
              <span className="leadership-period">{item.period}</span>
              <h3>{item.role}</h3>
              <p className="leadership-org">{item.organization}</p>
              <ul>
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Looking Forward / Connection Note */}
      <section className="wrap future-note">
        <div>
          <p className="eyebrow">ONGOING EXPLORATIONS</p>
          <h2>Building trustworthy AI for high-stakes environments.</h2>
        </div>
        <div>
          <p>
            I am currently exploring agent evaluation frameworks, low-resource speech synthesis, and verifiable RAG pipelines.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link className="button" href="/contact">
              Let's connect
            </Link>
            <a
              className="button-outline"
              href="https://github.com/Prestigeeo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
