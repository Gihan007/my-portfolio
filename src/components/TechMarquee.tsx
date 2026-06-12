const techStack = [
  'Python',
  'LangChain',
  'LangGraph',
  'FastAPI',
  'React',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'Neo4j',
  'ChromaDB',
  'OpenAI',
  'RAG',
  'MLOps',
  'TensorFlow',
  'PyTorch',
];

export function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-surface py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500/60" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
