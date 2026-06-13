import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { profile, stats, type TabId } from '../data/portfolio';

type HeroProps = {
  onSelectTab: (tab: TabId) => void;
};

export function Hero({ onSelectTab }: HeroProps) {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-surface pt-28 lg:pt-24">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute -left-32 top-20 h-[500px] w-[500px] animate-pulse-glow rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-20 h-[400px] w-[400px] animate-float rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] animate-float-delayed rounded-full bg-violet-500/10 blur-[80px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-5 py-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-16">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            <Sparkles className="h-4 w-4" />
            {profile.role}
          </p>

          <h1 className="font-display mt-5 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl text-xl font-medium leading-relaxed text-slate-300">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onSelectTab('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40 hover:brightness-110"
            >
              View 10 projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-violet-400" />
              {profile.location}
            </span>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Phone className="h-4 w-4 text-cyan-400" />
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-cyan-400" />
              {profile.email}
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            {[profile.github, profile.linkedin].map((href, i) => {
              const Icon = i === 0 ? Github : Linkedin;
              const label = i === 0 ? 'GitHub' : 'LinkedIn';
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="hidden animate-fade-in lg:block" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20 blur-2xl" />
            <div className="gradient-border card-shine relative overflow-hidden rounded-2xl">
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">gihan@ai-engine ~</span>
              </div>

              <div className="space-y-5 p-6 font-mono text-sm">
                <div>
                  <p className="text-violet-400">
                    <span className="text-slate-500">$</span> whoami
                  </p>
                  <p className="mt-1 text-white">{profile.name}</p>
                </div>
                <div>
                  <p className="text-violet-400">
                    <span className="text-slate-500">$</span> cat role.txt
                  </p>
                  <p className="mt-1 text-cyan-300">{profile.role}</p>
                </div>
                <div>
                  <p className="text-violet-400">
                    <span className="text-slate-500">$</span> ls skills/
                  </p>
                  <p className="mt-1 leading-relaxed text-slate-400">
                    RAG · LLMs · MLOps · Multi-Agent · OCR · FastAPI
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-emerald-400">
                  <span className="text-slate-500">$</span>{' '}
                  <span className="animate-pulse">█</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
