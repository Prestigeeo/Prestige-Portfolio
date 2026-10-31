export const metadata = {
  title: "Contact | Olajumoke Owoeye (Prestige)",
  description:
    "Get in touch with Olajumoke Owoeye (Prestige) for AI engineering collaborations, research discussions, or speaking opportunities."
};

export default function ContactPage() {
  return (
    <section className="wrap contact-page">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1 className="page-title">Let’s discuss practical systems and data problems.</h1>
      <p className="page-description">
        I am open to full-time AI engineering & data roles, applied research collaborations, and community speaking engagements.
      </p>

      <a className="email-link" href="mailto:owoeyejummie@gmail.com">
        owoeyejummie@gmail.com
      </a>

      <div className="contact-list">
        <a
          href="https://github.com/Prestigeeo"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub (Code repositories & analyses)</span>
          <span>↗</span>
        </a>
        <a
          href="https://huggingface.co/Prestigeeo"
          target="_blank"
          rel="noreferrer"
        >
          <span>Hugging Face (Pretrained models & weights)</span>
          <span>↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/olajumoke-owoeye-1553022a6?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn (Professional network)</span>
          <span>↗</span>
        </a>
        <a
          href="/assets/Owoeye%20Olajumoke%E2%80%99s%20CV.docx"
          target="_blank"
          rel="noreferrer"
        >
          <span>Curriculum Vitae (Download DOCX)</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}
