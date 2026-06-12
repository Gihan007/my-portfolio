import { GraduationCap } from 'lucide-react';
import { education, expertiseHighlights } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="section-light scroll-mt-20 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="About"
            title="AI engineering with a product mindset"
            description="Practical AI systems from research prototype to production deployment."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3" delay={1}>
            <div className="space-y-6">
              {expertiseHighlights.map((paragraph, i) => (
                <div
                  key={paragraph.slice(0, 40)}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md hover:shadow-violet-500/5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-sm font-bold text-violet-600">
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-violet-200 to-transparent" />
                  </div>
                  <p className="leading-relaxed text-slate-600">{paragraph}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={2}>
            <div className="sticky top-28">
              <h3 className="font-display text-lg font-bold text-slate-900">Education</h3>
              <div className="mt-6 space-y-4">
                {education.map((item, i) => (
                  <article
                    key={item.school}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-md"
                  >
                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-violet-50 transition group-hover:bg-violet-100" />
                    <div className="relative flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-md shadow-violet-500/20">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.school}</h4>
                        <p className="mt-1 text-sm font-medium text-violet-600">{item.degree}</p>
                        <p className="mt-1.5 text-xs text-slate-500">{item.meta}</p>
                      </div>
                    </div>
                    {i === 0 && (
                      <span className="absolute right-4 top-4 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
                        Current
                      </span>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
