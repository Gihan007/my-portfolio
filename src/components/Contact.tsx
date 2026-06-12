import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    primary: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Gihan007',
    href: profile.github,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
              Contact
            </p>
            <h2 className="font-display mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let&apos;s build something{' '}
              <span className="text-cyan-300">intelligent</span> together
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-violet-100">
              Open to Data Science, AI Engineering, Machine Learning Engineering, and Software
              Engineering roles.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-violet-700 shadow-xl shadow-violet-900/20 transition hover:bg-violet-50"
            >
              Send an email
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <Reveal key={link.label} delay={(i % 3) as 0 | 1 | 2}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className={`group flex items-center gap-4 rounded-2xl p-5 transition duration-300 ${
                      link.primary
                        ? 'col-span-full border border-white/20 bg-white text-slate-900 shadow-xl hover:shadow-2xl'
                        : 'border border-white/10 bg-white/10 text-white backdrop-blur hover:border-white/25 hover:bg-white/15'
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        link.primary
                          ? 'bg-violet-100 text-violet-600'
                          : 'bg-white/10 text-white group-hover:bg-white/20'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-medium ${link.primary ? 'text-slate-500' : 'text-violet-200'}`}
                      >
                        {link.label}
                      </p>
                      <p className="truncate text-sm font-semibold">{link.value}</p>
                    </div>
                    {link.external && (
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 opacity-50 transition group-hover:opacity-100" />
                    )}
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
