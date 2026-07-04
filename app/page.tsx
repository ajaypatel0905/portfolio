import Image from "next/image";
import { experience, profile, projects, skills } from "@/lib/content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {children}
      </span>
      <span className="h-px flex-1 bg-[var(--glass-border)]" />
    </div>
  );
}

function ExternalLink({
  href,
  children,
  strong,
}: {
  href: string;
  children: React.ReactNode;
  strong?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`underline-offset-4 transition hover:text-accent hover:underline ${
        strong ? "font-semibold text-ink" : "text-muted"
      }`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-24">
      {/* Hero */}
      <header className="flex min-h-[88svh] flex-col justify-center gap-8 pt-10 sm:min-h-[90vh] sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:pt-0">
        <div className="max-w-xl">
          <p className="rise text-sm tracking-wide text-muted" style={{ animationDelay: "0ms" }}>
            {profile.location} · IIT Hyderabad &rsquo;24
          </p>
          <h1
            className="serif rise mt-4 text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            {profile.name}
          </h1>
          <p className="rise mt-3 text-xl text-accent" style={{ animationDelay: "180ms" }}>
            {profile.role}
          </p>
          <p
            className="rise mt-5 max-w-md text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
            style={{ animationDelay: "270ms" }}
          >
            {profile.tagline}
          </p>
          <nav
            className="rise mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-sm sm:mt-10 sm:gap-6"
            style={{ animationDelay: "360ms" }}
          >
            <a href="#work" className="text-ink underline-offset-4 transition hover:text-accent hover:underline">
              Work ↓
            </a>
            <a
              href="/Ajay_Patel_Resume.pdf"
              download="Ajay_Patel_Resume.pdf"
              className="font-medium text-accent underline-offset-4 transition hover:underline"
            >
              Resume ↓
            </a>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={`mailto:${profile.email}`}>Email</ExternalLink>
          </nav>
          <div
            className="rise mt-8 grid max-w-md grid-cols-3 gap-3 sm:mt-12"
            style={{ animationDelay: "450ms" }}
          >
            {[
              ["2 yrs", "AI in production"],
              ["200M+", "records retrieved"],
              ["3 live", "products shipped"],
            ].map(([stat, label]) => (
              <div key={label} className="glass rounded-2xl px-3 py-3 text-center">
                <div className="serif text-lg text-accent sm:text-xl">{stat}</div>
                <div className="mt-0.5 text-[11px] leading-tight text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rise glass order-first w-fit shrink-0 rounded-3xl p-2 sm:order-none sm:p-2.5"
          style={{ animationDelay: "200ms" }}
        >
          <Image
            src="/ajay.png"
            alt="Ajay Patel"
            width={224}
            height={224}
            priority
            className="h-28 w-28 rounded-2xl object-cover sm:h-56 sm:w-56"
          />
        </div>
      </header>

      {/* About */}
      <section className="mt-6">
        <SectionLabel>About</SectionLabel>
        <div className="glass space-y-4 rounded-3xl p-6 text-[16px] sm:p-8 sm:text-[17px] leading-relaxed text-ink/90">
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-14 sm:mt-20">
        <SectionLabel>Experience</SectionLabel>
        <div className="flex flex-wrap items-baseline justify-between gap-2 px-1">
          <h2 className="serif text-2xl">
            {experience.role} · <span className="text-accent">{experience.company}</span>
          </h2>
          <span className="text-sm text-muted">{experience.period}</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {experience.points.map((point) => (
            <div
              key={point.slice(0, 30)}
              className="glass glass-hover rounded-2xl p-6 text-[15px] leading-relaxed text-ink/85"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="mt-14 scroll-mt-10 sm:mt-20">
        <SectionLabel>Selected work</SectionLabel>
        <div className="space-y-5">
          {projects.map((project) => (
            <article key={project.name} className="glass glass-hover rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="serif text-2xl">{project.name}</h3>
                <div className="flex gap-4 text-sm">
                  {project.live && (
                    <ExternalLink href={project.live} strong>
                      Live ↗
                    </ExternalLink>
                  )}
                  {project.code && (
                    <ExternalLink href={project.code} strong>
                      GitHub ↗
                    </ExternalLink>
                  )}
                </div>
              </div>
              <p className="mt-1 text-sm italic text-accent/90">{project.kicker}</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink/85">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--glass-border)] bg-white/[0.03] px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-14 sm:mt-20">
        <SectionLabel>Skills</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label} className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-accent">{group.label}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="glass mt-16 rounded-3xl p-8 sm:mt-24 sm:p-10 text-center">
        <h2 className="serif text-3xl">Let&rsquo;s talk</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Building something with LLMs, retrieval, or agents — or just want to
          compare notes on making AI systems trustworthy?
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-block rounded-full bg-accent px-7 py-3 font-medium text-[#171310] transition hover:opacity-90"
        >
          {profile.email}
        </a>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a
            href="/Ajay_Patel_Resume.pdf"
            download="Ajay_Patel_Resume.pdf"
            className="text-muted underline-offset-4 transition hover:text-accent hover:underline"
          >
            Resume ↓
          </a>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        </div>
      </section>

      <footer className="mt-14 text-center text-xs text-muted">
        © {new Date().getFullYear()} Ajay Patel · Hyderabad
      </footer>
    </main>
  );
}
