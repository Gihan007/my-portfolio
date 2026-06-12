import { ArrowUpRight, ExternalLink, GitFork, Github, Lock, Star } from 'lucide-react';
import { featuredProjects, githubProjects, profile } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const [hero, ...rest] = featuredProjects;

  return (
    <section id="projects" className="section-light scroll-mt-20 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Projects"
            title="Production-grade AI platforms and open-source work"
            description="Featured client work alongside public GitHub repositories."
          />
        </Reveal>

        <div className="mt-16 space-y-20">
          {/* Featured — bento layout */}
          <div>
            <Reveal delay={1}>
              <h3 className="font-display text-xl font-bold text-slate-900">Featured Work</h3>
            </Reveal>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {/* Hero project — spans full width on large */}
              <Reveal className="lg:col-span-2" delay={1}>
                <article className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition hover:shadow-xl hover:shadow-violet-500/5">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[320px]">
                      <img
                        src={hero.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
                      <span className="absolute left-5 top-5 rounded-full bg-violet-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg">
                        {hero.tag}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-7 sm:p-9">
                      <h4 className="font-display text-2xl font-bold leading-snug text-slate-900 lg:text-3xl">
                        {hero.title}
                      </h4>
                      <p className="mt-4 leading-relaxed text-slate-600">{hero.description}</p>
                      <ul className="mt-5 space-y-2">
                        {hero.impact.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm text-slate-500 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-violet-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {hero.stack.slice(0, 6).map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      {hero.privateNotice && (
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-400">
                          <Lock className="h-4 w-4" />
                          {hero.privateNotice}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* Other featured */}
              {rest.map((project, i) => (
                <Reveal key={project.title} delay={(i + 2) as 1 | 2}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-violet-700 backdrop-blur">
                        {project.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h4 className="font-display text-lg font-bold text-slate-900">{project.title}</h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 border-t border-slate-100 pt-4">
                        {project.privateNotice ? (
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                            <Lock className="h-3.5 w-3.5" />
                            {project.privateNotice}
                          </span>
                        ) : project.repo ? (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
                          >
                            View repository
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* GitHub grid */}
          <div>
            <Reveal>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <h3 className="font-display text-xl font-bold text-slate-900">GitHub Repositories</h3>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-200 hover:text-violet-600"
                >
                  <Github className="h-4 w-4" />
                  View all repos
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {githubProjects.map((project, i) => (
                <Reveal key={project.title} delay={(i % 3) as 0 | 1 | 2}>
                  <article className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md hover:shadow-violet-500/5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500">
                          {project.tag}
                        </span>
                        <h4 className="font-display mt-1.5 text-lg font-bold text-slate-900 transition group-hover:text-violet-700">
                          {project.title}
                        </h4>
                      </div>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-100"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
                      <span className="font-medium">{project.language}</span>
                      <span className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 text-amber-400" />
                          {project.stars}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5" />
                          {project.forks}
                        </span>
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
