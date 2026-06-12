import { Briefcase, CalendarDays } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Experience"
            title="Roles across AI engineering, research, and product building"
            dark
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent md:block" />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <Reveal key={`${item.role}-${item.company}`} delay={(index % 3) as 0 | 1 | 2}>
                <article className="group relative md:pl-14">
                  <div className="absolute left-3 top-8 hidden h-4 w-4 rounded-full border-2 border-violet-500 bg-slate-950 shadow-[0_0_12px_rgba(139,92,246,0.5)] md:block">
                    {index === 0 && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-violet-400 opacity-40" />
                    )}
                  </div>

                  <div className="gradient-border card-shine overflow-hidden rounded-2xl bg-surface-card transition duration-300 hover:shadow-lg hover:shadow-violet-500/5">
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                        <div>
                          {index === 0 && (
                            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              Current Role
                            </span>
                          )}
                          <div className="flex items-center gap-2 text-sm font-medium text-violet-400">
                            <Briefcase className="h-4 w-4" />
                            {item.company}
                          </div>
                          <h3 className="font-display mt-2 text-2xl font-bold text-white">
                            {item.role}
                          </h3>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
                          <CalendarDays className="h-4 w-4 text-violet-400" />
                          {item.date}
                        </div>
                      </div>

                      <p className="mt-5 leading-relaxed text-slate-400">{item.details}</p>

                      {item.bullets && (
                        <ul className="mt-5 space-y-2.5">
                          {item.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-sm text-slate-400 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-cyan-400"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.stack.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg border border-white/5 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300 transition group-hover:border-violet-500/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
