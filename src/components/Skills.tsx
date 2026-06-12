import { skills } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Skills"
            title="A practical stack for intelligent products"
            description="Technologies I use to build, deploy, and scale AI systems."
            dark
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="group gradient-border card-shine h-full rounded-2xl bg-surface-card p-6 transition duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-violet-400 transition group-hover:from-violet-500/30 group-hover:text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">{skill.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-slate-400 transition group-hover:border-violet-500/20 group-hover:text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
