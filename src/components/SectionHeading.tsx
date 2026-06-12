type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: 'left' | 'center';
};

export function SectionHeading({
  label,
  title,
  description,
  dark,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
          dark
            ? 'border border-violet-500/20 bg-violet-500/10 text-violet-300'
            : 'border border-violet-200 bg-violet-50 text-violet-600'
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-cyan-400' : 'bg-violet-500'}`} />
        {label}
      </div>
      <h2
        className={`font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          } ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
