import { skills } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-slate-950 pb-20 pt-36 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="Technical strengths"
            title="A practical stack for intelligent products."
            dark
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="group gradient-border card-shine h-full rounded-2xl bg-surface-card p-6 transition duration-300 hover:shadow-lg hover:shadow-violet-500/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-violet-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-white">{skill.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                    {skill.items.map((item) => (
                      <li key={item} className="flex gap-2 before:text-violet-500 before:content-['·']">
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
