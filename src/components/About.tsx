import { Github, GraduationCap, Linkedin } from 'lucide-react';
import { aboutSummary, education, expertiseHighlights, profile } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <>
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.45fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              label="My Expertise"
              title="AI engineering with a product mindset."
            />
          </Reveal>
          <Reveal delay={1}>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              {expertiseHighlights.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-light py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHeading
                label="About"
                title="Practical AI systems from research prototype to production deployment."
              />
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{aboutSummary}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-violet-300 hover:text-violet-700"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-violet-300 hover:text-violet-700"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {education.map((item) => (
                  <article
                    key={item.school}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md hover:shadow-violet-500/5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-md shadow-violet-500/20">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">{item.school}</h3>
                    <p className="mt-2 font-semibold text-violet-600">{item.degree}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.meta}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
