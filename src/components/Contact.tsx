import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800" />
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-200">Contact</p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Want to know more about me, or hire me for your AI project?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-violet-100">
              I am open to Data Science, AI Engineering, Machine Learning Engineering, and Software
              Engineering with AI.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-slate-800 sm:col-span-2 lg:col-span-1"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
