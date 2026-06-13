import { ExternalLink, GitFork, Github, Lock, Star } from 'lucide-react';
import { featuredProjects, githubProjects, profile } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 text-white lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              label="Featured client work"
              title="Production-grade AI platforms built for real client workflows."
              dark
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) as 0 | 1}>
                <article className="gradient-border card-shine group overflow-hidden rounded-2xl bg-surface-card">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <p className="text-sm font-bold text-cyan-400">{project.tag}</p>
                    <h3 className="font-display mt-2 text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                      {project.impact.map((item) => (
                        <li key={item} className="border-l border-violet-500/40 pl-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    {project.privateNotice ? (
                      <div className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300">
                        <Lock className="h-4 w-4" />
                        {project.privateNotice}
                      </div>
                    ) : project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-bold text-white transition hover:bg-violet-500"
                      >
                        View repository
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light pb-20 pt-16">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionHeading
                label="GitHub projects"
                title="Ten main projects from my public GitHub work."
              />
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-violet-300 hover:text-violet-700"
              >
                <Github className="h-4 w-4" />
                View all repos
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {githubProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="group flex min-h-[330px] flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-rose-600">{project.tag}</p>
                      <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-900">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900 ring-1 ring-amber-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-slate-500">
                    <span>{project.language}</span>
                    <span className="inline-flex items-center gap-4">
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-400" />
                        {project.stars}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {project.forks}
                      </span>
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
