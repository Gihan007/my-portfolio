import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

type FooterProps = {
  onNavigate: (id: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold text-slate-900">
              {profile.name.split(' ')[0]}
              <span className="text-violet-500">.</span>
            </p>
            <p className="mt-1 text-sm text-slate-500">{profile.role}</p>
            <p className="mt-3 flex items-center justify-center gap-1 text-xs text-slate-400 md:justify-start">
              Built with React & Tailwind
              <Heart className="h-3 w-3 fill-rose-400 text-rose-400" />
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className="text-sm font-medium text-slate-500 transition hover:text-violet-600"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-2">
            {[
              { href: profile.github, Icon: Github, label: 'GitHub' },
              { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
