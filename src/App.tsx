import { useState } from 'react';
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  CalendarDays,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GitFork,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Terminal,
} from 'lucide-react';

const profile = {
  name: 'Gihan Lakmal',
  role: 'AI / ML Engineer',
  tagline:
    'Computer Science specialized in AI | RAG, LLMs, MLOps, multi-agent systems, Data Science, and Product Engineering',
  location: 'Colombo 08, Sri Lanka',
  email: 'gihanlakmal007@gmail.com',
  phone: '+94 76 991 9877',
  github: 'https://github.com/Gihan007',
  linkedin: 'https://www.linkedin.com/in/gihan-lakmal-22964526a/',
  resume: '/AI-ML-Developer-Gihan-Lakmal.pdf',
  summary:
    'AI/ML Engineer with nearly 2 years of experience developing, deploying, and optimizing machine learning, deep learning, and generative AI solutions for real-world client and research projects.',
};

const expertiseHighlights = [
  <>
    I build practical AI systems that connect research ideas with production software. My work
    includes agentic production-level products, LLM applications, multi-agent workflows, OCR
    document intelligence, forecasting, and machine learning solutions for real-world business
    problems.
  </>,
  <>
  </>,
  <>
    My background spans <strong className="font-black text-zinc-950">client projects</strong>,{' '}
    <strong className="font-black text-zinc-950">research work</strong>, and{' '}
    <strong className="font-black text-zinc-950">startup product building</strong>, including{' '}
    <strong className="font-black text-zinc-950">Sinhala and Tamil language AI research</strong>,{' '}
    <strong className="font-black text-zinc-950">document automation</strong>,{' '}
    <strong className="font-black text-zinc-950">FinTech agent systems</strong>, and{' '}
    <strong className="font-black text-zinc-950">MLOps-focused engineering</strong>. I enjoy
    turning complex AI concepts into products people can actually use.
  </>,
];

const skills = [
  {
    icon: Brain,
    title: 'AI and ML',
    items: [
      'Machine learning',
      'Deep learning',
      'Time-series forecasting',
      'Model evaluation',
      'Computer vision',
      'NLP',
      'Financial analytics',
    ],
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    items: [
      'RAG pipelines',
      'Tool-augmented RAG',
      'LLM applications',
      'Prompt engineering',
      'Multi-agent systems',
      'Agent orchestration',
      'LangChain',
      'LangGraph',
      'OpenAI',
      'Gemini',
      'LangSmith',
    ],
  },
  {
    icon: Database,
    title: 'Data and Graphs',
    items: [
      'PostgreSQL',
      'Neo4j',
      'ChromaDB',
      'Redis',
      'Kafka/RedPanda',
      'Vector search',
      'Knowledge graphs',
      'SQL',
      'Cypher',
      'Market-data APIs',
    ],
  },
  {
    icon: Terminal,
    title: 'MLOps and Backend',
    items: [
      'FastAPI',
      'Docker',
      'Docker Compose',
      'Kong Gateway',
      'GKE',
      'Terraform',
      'CI/CD',
      'Kubernetes',
      'Nginx',
      'Monitoring and logging',
      'JWT authentication',
    ],
  },
  {
    icon: FileText,
    title: 'Document AI and OCR',
    items: [
      'Tesseract OCR',
      'PaddleOCR',
      'PyMuPDF',
      'OpenCV',
      'Temporal workflows',
      'Human-in-the-loop review',
      'Bounding-box evidence',
      'Field validation',
      'PDF and image ingestion',
    ],
  },
  {
    icon: Code2,
    title: 'Software',
    items: [
      'Python',
      'JavaScript',
      'React',
      'Vite',
      'SQLAlchemy',
      'Pydantic',
      'Alembic',
      'Pandas',
      'NumPy',
      'REST APIs',
    ],
  },
  {
    icon: Award,
    title: 'Research',
    items: ['IEEE publication work', 'NLP', 'Computer vision', 'Explainable AI'],
  },
];

const featuredProjects = [
  {
    title: 'FinTech Multi-Agent AI Platform | VInvest / Get-Deep',
    tag: 'Client Project',
    repo: 'https://github.com/Gihan007/Agentic-Fintec-MultiAgnet-StockBroker-firm--client',
    privateNotice: '🔒 Cannot share client project code',
    image:
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Built a production-oriented financial intelligence platform for a stockbroker firm, combining multi-agent LLM orchestration, event-driven microservices, hybrid retrieval, vector search, and knowledge graph analytics for conversational investment research, financial data exploration, and automated report generation.',
    impact: [
      'Designed and implemented FastAPI-based AI agent services using LangChain and LangGraph, including general chat, deep research, natural-language ticker filtering, and dedicated report-generation workflows.',
      'Built multi-agent orchestration with supervisor, planner, researcher, reporter, visualization, SQL, Cypher, and market-data tool agents, enabling reasoning over structured financial data, news, filings, and external APIs.',
      'Developed hybrid retrieval pipelines using ChromaDB vector search, Neo4j graph queries, PostgreSQL knowledge-base lookups, embeddings, and tool-augmented RAG for finance-specific question answering.',
      'Implemented document ingestion for PDF, Word, Excel, PowerPoint, SEC filings, and structured CSV data with token-aware chunking, metadata extraction, embeddings, vector indexing, and Neo4j/PostgreSQL upserts.',
      'Built financial analytics and reporting tools for company performance reports, industry deep dives, daily top-10 reports, valuation workflows, ticker screening, and generated PDF outputs.',
      'Integrated PostgreSQL, Neo4j, Redis, Kafka/RedPanda, and external market-data APIs including Alpha Vantage, Yahoo Finance, FMP, NewsData.io, SEC EDGAR, and FRED.',
      'Optimized system performance and LLM cost through async service design, batched embeddings, retrieval caching, persistent LangGraph checkpoints, SSE streaming, structured logging, and LangSmith tracing.',
      'Deployed containerized microservices behind Kong API Gateway using Docker Compose, with production deployment planning for GKE, Terraform, CI/CD, and TLS-enabled gateway routing.',
      'Added JWT-based authentication, session persistence, user ownership validation, chat history management, and LLM usage tracking for secure multi-user operation.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'OpenAI',
      'Gemini',
      'ChromaDB',
      'Neo4j',
      'PostgreSQL',
      'Redis',
      'Kafka/RedPanda',
      'Docker',
      'Kong Gateway',
      'GKE',
      'Terraform',
      'SQLAlchemy',
      'Pydantic',
      'LangSmith',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Client Project: Advanced Agentic Hybrid OCR & AI Document Processing Platform',
    tag: 'Client Project',
    repo: 'https://github.com/Gihan007/Advanced-Agentic-OCR-Platform',
    privateNotice: '🔒 Cannot share client project code',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Designed and built a production-grade OCR and AI document processing platform for complex multi-page insurance prior authorization documents, combining hybrid OCR, workflow orchestration, validation, human-in-the-loop review, feedback learning, and RAG-powered document interaction.',
    impact: [
      'Architected a containerized full-stack system using FastAPI, PostgreSQL, React, Docker Compose, and service-based backend/frontend deployment.',
      'Built document ingestion pipelines for PDF, TIFF, PNG, and JPEG files with SHA-256 deduplication, tenant-aware job tracking, local storage, and processing status APIs.',
      'Implemented hybrid OCR extraction using Tesseract OCR, PaddleOCR / PP-OCRv3, PyMuPDF, and image preprocessing to handle scanned and digital insurance documents.',
      'Designed Temporal-based workflow orchestration for document upload, classification, OCR processing, field extraction, validation, review routing, and export stages.',
      'Developed structured field extraction logic for insurance approval forms, including confidence scoring, validation rules, canonicalization, bounding-box evidence, and review-required flags.',
      'Integrated RAG-powered interaction over processed documents, enabling users to query extracted content, supporting evidence, and document-level context.',
      'Built human-in-the-loop review workflows where reviewers could approve, reject, or correct AI-extracted fields, with corrections persisted as reusable human feedback.',
      'Designed PostgreSQL schemas and migrations for jobs, extracted fields, OCR evidence, human labels, review status, modification history, and finalized outputs.',
      'Created React dashboards for batch upload, processing progress, extracted-field summaries, review UI, database inspection, and CSV export.',
      'Dockerized backend, frontend, PostgreSQL, schema initialization, health checks, persistent storage, and production-style service startup.',
      'Reached 94-98% extraction accuracy across structured multi-page insurance approval documents.',
      'Reduced manual review from 40% to 10% over time through validation rules and human feedback learning without frequent model retraining.',
      'Improved auditability by storing OCR tokens, confidence scores, page metadata, bounding boxes, reviewer actions, and finalized extraction records.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Temporal',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Tesseract OCR',
      'PaddleOCR',
      'PyMuPDF',
      'OpenCV',
      'RAG',
      'React',
      'Vite',
      'Nginx',
      'Docker',
      'Docker Compose',
    ],
  },
  {
    title: 'Real-Time Voice AI Appointment Agent | Browser-Based Medical Call Demo',
    tag: 'Voice AI Demo',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Built a real-time conversational voice AI demo for medical appointment reminder workflows, combining streaming speech-to-text, LLM-based dialogue orchestration, low-latency text-to-speech, and browser-based microphone audio streaming to simulate a live phone-call experience.',
    impact: [
      'Designed and implemented a FastAPI backend with WebSocket-based audio streaming, enabling continuous browser microphone capture, real-time STT processing, AI response generation, and streamed voice playback.',
      'Built a browser frontend using Web Audio API and AudioWorklet to capture microphone input, downsample PCM audio, stream audio frames over WebSocket, display live transcripts, and play AI-generated speech responses in a call-style interface.',
      'Integrated Deepgram Nova streaming STT with interim transcripts, endpointing, utterance detection, and speech-final handling for low-latency turn detection during live conversations.',
      'Implemented LangGraph-based conversation orchestration with supervisor routing and stateful dialogue nodes for greeting, availability check, appointment review, rescheduling, confirmation, general questions, callback handling, and wrap-up flows.',
      'Integrated Gemini/Groq LLM backends for intent routing and contextual response generation, with optimized fast-path logic for common user replies such as confirmations, availability responses, and appointment acceptance.',
      'Built low-latency TTS response generation using Cartesia WebSocket streaming with Deepgram TTS fallback, plus in-memory audio caching for repeated demo phrases to reduce perceived response latency.',
      'Implemented conversation state management, chat history tracking, patient context injection, node-level routing, structured response metadata, and call-style transcript rendering for demo observability.',
      'Optimized perceived latency through async FastAPI design, streaming STT, cached greeting audio, prewarmed common TTS responses, WebSocket audio transport, and immediate browser playback of generated audio.',
      'Created a lightweight local demo launcher and simplified project structure for portfolio/demo use, allowing the full AI voice interaction to run locally from a browser without requiring Telnyx telephony infrastructure.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'WebSockets',
      'LangGraph',
      'Gemini',
      'Groq',
      'Deepgram STT/TTS',
      'Cartesia TTS',
      'JavaScript',
      'Web Audio API',
      'AudioWorklet',
      'Pydantic',
      'HTTPX',
      'Uvicorn',
      'async/await',
    ],
  },
];

const githubProjects = [
  {
    title: 'Vinvest Agentic FinTech Platform',
    tag: 'Multi-Agent AI',
    repo: 'https://github.com/Gihan007/Agentic-Fintec-MultiAgnet-StockBroker-firm--client',
    description:
      'High-level client codebase for a stockbroker-focused agentic analytics platform with RAG, graph reasoning, and automated reporting.',
    stack: ['LangGraph', 'LangChain', 'Neo4j', 'ChromaDB'],
    language: 'AI Platform',
    stars: 0,
    forks: 0,
  },
  {
    title: 'Advanced Agentic OCR Platform',
    tag: 'Document AI',
    repo: 'https://github.com/Gihan007/Advanced-Agentic-OCR-Platform',
    description:
      'OCR and document intelligence architecture for extracting, validating, reviewing, and querying insurance approval documents.',
    stack: ['FastAPI', 'Temporal', 'PostgreSQL', 'OCR'],
    language: 'Python',
    stars: 0,
    forks: 0,
  },
  {
    title: 'AI-Powered CV to Job Matcher',
    tag: 'LLM Automation',
    repo: 'https://github.com/Gihan007/job-finder-based-on-cv-requirements-crawl4ai-deepseek',
    description:
      'Reads a CV, extracts structured text, scrapes job listings with crawl4ai, and uses semantic matching to recommend relevant jobs.',
    stack: ['Python', 'OCR', 'Weaviate', 'crawl4ai'],
    language: 'Python',
    stars: 5,
    forks: 2,
  },
  {
    title: 'Medical Drug Sales Forecasting',
    tag: 'IEEE Research',
    repo: 'https://github.com/Gihan007/Reaserch_papaer_Implement_for_Predicting_Drug-sales-data-for-specific-areas-in-the-srilanka-IEEE-',
    description:
      'Forecasting system for weekly area-level pharmaceutical sales in Sri Lanka using time-series models and explainability techniques.',
    stack: ['Python', 'LSTM', 'XGBoost', 'Prophet'],
    language: 'Python',
    stars: 1,
    forks: 1,
  },
  {
    title: 'Self-RAG Systems',
    tag: 'Agentic RAG',
    repo: 'https://github.com/Gihan007/Self-RAG-Systems',
    description:
      'Self-refining RAG workflow using LangGraph to grade documents, detect hallucinations, rewrite queries, and improve grounded answers.',
    stack: ['LangGraph', 'LangChain', 'Groq', 'Chroma'],
    language: 'Jupyter Notebook',
    stars: 2,
    forks: 1,
  },
  {
    title: 'OpenRouter Tool Calling with Neo4j',
    tag: 'Graph AI',
    repo: 'https://github.com/Gihan007/Open-Router-Tool-calling-with-Neo4J',
    description:
      'Demonstrates OpenRouter model tool-calling with Neo4j Cypher queries for graph-backed customer and medical AI analysis.',
    stack: ['OpenRouter', 'Neo4j', 'Cypher', 'Qwen'],
    language: 'Jupyter Notebook',
    stars: 0,
    forks: 0,
  },
  {
    title: 'Corrective RAG Systems',
    tag: 'RAG Evaluation',
    repo: 'https://github.com/Gihan007/Corrective_RAG_systems-',
    description:
      'Corrective RAG pipeline integrating LangChain, Gemini, GPT-4o, HuggingFace embeddings, and Tavily search for stronger retrieval.',
    stack: ['LangChain', 'Gemini', 'GPT-4o', 'Tavily'],
    language: 'Jupyter Notebook',
    stars: 0,
    forks: 0,
  },
  {
    title: 'Climate Change Multi-Agent Analysis',
    tag: 'Research Agents',
    repo: 'https://github.com/Gihan007/Multi-AI-Agent-System-for-Climate-Change-Impact-Analysis',
    description:
      'Multi-agent analysis system using Groq, LangGraph, and LangChain tools to generate structured reports on climate impact.',
    stack: ['Groq', 'LangGraph', 'LangChain', 'Agents'],
    language: 'Jupyter Notebook',
    stars: 0,
    forks: 0,
  },
  {
    title: 'AI Medical ChatBot Using RAG',
    tag: 'Healthcare AI',
    repo: 'https://github.com/Gihan007/AI_Medical_chatBot_-Using-RAG-',
    description:
      'Retrieval-augmented medical assistant project focused on answering health-related questions with contextual document retrieval.',
    stack: ['RAG', 'LLMs', 'Vector Search', 'Python'],
    language: 'Jupyter Notebook',
    stars: 1,
    forks: 0,
  },
  {
    title: 'MLOps Vehicle Detection Project',
    tag: 'MLOps',
    repo: 'https://github.com/Gihan007/MLOPS-END-TO-END-VEHICAL-DETECTION-PROJECT',
    description:
      'End-to-end MLOps project demonstrating data handling, ML pipeline structure, and deployment practices for vehicle insurance data.',
    stack: ['MLOps', 'Pipelines', 'Deployment', 'Monitoring'],
    language: 'Jupyter Notebook',
    stars: 1,
    forks: 0,
  },
];

const experience = [
  {
    role: 'AI Research Assistant',
    company: 'Sri Lankan native language AI research',
    date: 'Nov 2024 - June 2025',
    details:
      'Worked on generative AI models for Sinhala and Tamil, contributing to a 40 million word corpus and applying data preprocessing, computer vision, and audio generation techniques.',
    stack: ['NLP', 'Data Preprocessing', 'Generative AI', 'Computer Vision'],
  },
  {
    role: 'AI Intern',
    company: 'SenzMate AIOT',
    date: 'July 2025 - January 2026',
    details:
      'Worked on AI engineering tasks across modular AI nodes, workflow pipelines, RAG systems, backend development, and production-focused experimentation for the Interplay Autonomous Platform.',
    bullets: [
      'Worked on the Interplay Platform auto workflow.',
      'Developed the SenzChat agentic bot from scratch.',
    ],
    stack: [
      'Python',
      'LangChain',
      'LangGraph',
      'FastAPI',
      'RAG',
      'MLOps',
      'Agent orchestration',
      'LLM orchestration',
      'Cache handling',
      'Prompting',
    ],
  },
  {
    role: 'Associate AI / ML Engineer',
    company: 'SenzMate AIOT',
    date: 'January 2026 - Present',
    details:
      'Building production AI systems with finance-focused multi-agent workflows, document intelligence, backend APIs, deployment, monitoring, and optimization for real-world client use cases.',
    bullets: [
      'Worked end to end on the Vinvest FinTech Deep Insight project.',
      'Working on a Voice AI agent for chatbot experiences.',
    ],
    stack: [
      'Python',
      'LangChain',
      'LangGraph',
      'FastAPI',
      'Docker',
      'MLOps',
      'Agent orchestration',
      'LLM orchestration',
      'Cache handling',
      'Prompting',
      'DevOps',
      'Google Cloud Engineering',
      'Kubernetes',
      'Network configs',
      'CI/CD pipelines',
      'Deep agents',
      'React agents',
    ],
  },
];

const education = [
  {
    school: 'University of Kelaniya - Sri Lanka',
    degree: 'B.Sc. (Hons) Computer Science, AI Specialization',
    meta: 'Final semester | GPA 3.61 | 2022 - 2026',
  },
  {
    school: 'University of Colombo - Sri Lanka',
    degree: 'Bachelor of Information Technology (External)',
    meta: '2022 - 2023',
  },
  {
    school: 'Nalanda College, Colombo 10',
    degree: 'G.C.E. Advanced Level - Physical Science Stream',
    meta: 'Combined Mathematics, Physics, Chemistry | Z-score 1.563',
  },
];

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
] as const;

type TabId = (typeof tabs)[number]['id'];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const selectTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-zinc-950/75 text-white backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <button
            type="button"
            onClick={() => selectTab('home')}
            className="text-base font-semibold tracking-wide"
          >
            {profile.name}
          </button>
          <div
            role="tablist"
            aria-label="Portfolio sections"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1 text-sm font-bold text-white/80 lg:flex"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => selectTab(tab.id)}
                className={`rounded-full px-4 py-2 transition ${
                  activeTab === tab.id
                    ? 'bg-white text-zinc-950'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <a
            href={profile.resume}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-100"
          >
            <Download className="h-4 w-4" />
            Get My CV
          </a>
        </nav>
        <div
          role="tablist"
          aria-label="Portfolio sections"
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto border-t border-white/10 px-5 py-2 text-sm font-bold text-white/80 lg:hidden"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => selectTab(tab.id)}
              className={`shrink-0 rounded-full px-4 py-2 transition ${
                activeTab === tab.id
                  ? 'bg-white text-zinc-950'
                  : 'bg-white/10 text-white/75 hover:bg-white/15 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main>
        {activeTab === 'home' && (
          <>
            <section className="relative min-h-[84svh] overflow-hidden pt-28 text-white lg:pt-16">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1800&q=85"
                alt="Developer workspace showing code and engineering tools"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/82 to-zinc-950/20" />
              <div className="relative mx-auto flex min-h-[calc(84svh-4rem)] max-w-7xl items-center px-5 py-20">
                <div className="max-w-4xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">
                    {profile.role}
                  </p>
                  <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                    {profile.name}
                  </h1>
                  <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-white/90">
                    {profile.tagline}
                  </p>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
                    {profile.summary}
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => selectTab('projects')}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300"
                    >
                      View 10 projects
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href={profile.resume}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </a>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/78">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-rose-300" />
                      {profile.location}
                    </span>
                    <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${profile.phone}`}>
                      <Phone className="h-4 w-4 text-rose-300" />
                      {profile.phone}
                    </a>
                    <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${profile.email}`}>
                      <Mail className="h-4 w-4 text-rose-300" />
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-b border-zinc-200 bg-white">
              <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.45fr_1fr] lg:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                    My Expertise
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
                    AI engineering with a product mindset.
                  </h2>
                </div>
                <div className="space-y-5 text-lg leading-8 text-zinc-600">
                  {expertiseHighlights.map((highlight, index) => (
                    <p key={index}>{highlight}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                  About
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">
                  Practical AI systems from research prototype to production deployment.
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc-600">
                  My work spans forecasting, document intelligence, graph retrieval, autonomous agent
                  workflows, backend APIs, and MLOps practices. I focus on systems that are useful,
                  measurable, and maintainable after the demo is over.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-300 px-5 text-sm font-bold text-zinc-900 transition hover:border-zinc-950"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-300 px-5 text-sm font-bold text-zinc-900 transition hover:border-zinc-950"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {education.map((item) => (
                  <article
                    key={item.school}
                    className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
                  >
                    <GraduationCap className="h-6 w-6 text-rose-600" />
                    <h3 className="mt-4 text-xl font-bold text-zinc-950">{item.school}</h3>
                    <p className="mt-2 font-semibold text-zinc-700">{item.degree}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{item.meta}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'projects' && (
          <>
            <section className="bg-zinc-950 pb-20 pt-36 text-white lg:pt-28">
              <div className="mx-auto max-w-7xl px-5">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
                    Featured client work
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-tight">
                    Production-grade AI platforms built for real client workflows.
                  </h2>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {featuredProjects.map((project) => (
                    <article
                      key={project.title}
                      className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-6">
                        <p className="text-sm font-bold text-emerald-300">{project.tag}</p>
                        <h3 className="mt-2 text-2xl font-black tracking-tight">{project.title}</h3>
                        <p className="mt-3 leading-7 text-white/72">{project.description}</p>
                        <ul className="mt-5 space-y-3 text-sm leading-6 text-white/72">
                          {project.impact.map((item) => (
                            <li key={item} className="border-l border-emerald-300/40 pl-4">
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.stack.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/85"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                    {project.privateNotice ? (
                      <div className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/85">
                        {project.privateNotice}
                      </div>
                    ) : project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-emerald-400 px-4 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300"
                      >
                        View repository
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                    GitHub projects
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">
                    Ten main projects from my public GitHub work.
                  </h2>
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-300 px-5 text-sm font-bold text-zinc-900 transition hover:border-zinc-950"
                >
                  <Github className="h-4 w-4" />
                  View all repos
                </a>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {githubProjects.map((project) => (
                  <article
                    key={project.title}
                    className="flex min-h-[330px] flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-rose-600">{project.tag}</p>
                        <h3 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">
                          {project.title}
                        </h3>
                      </div>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                        aria-label={`Open ${project.title} on GitHub`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-4 flex-1 leading-7 text-zinc-600">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-sm font-semibold text-zinc-500">
                      <span>{project.language}</span>
                      <span className="inline-flex items-center gap-4">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {project.stars}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          {project.forks}
                        </span>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'experience' && (
          <section className="bg-white pb-20 pt-36 lg:pt-28">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                  Experience
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">
                  Roles across AI engineering, research, and startup product building.
                </h2>
              </div>
              <div className="space-y-4">
                {experience.map((item) => (
                  <article
                    key={`${item.role}-${item.company}`}
                    className="rounded-lg border border-zinc-200 bg-stone-50 p-6"
                  >
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-rose-600">
                          <Briefcase className="h-4 w-4" />
                          {item.company}
                        </div>
                        <h3 className="mt-2 text-2xl font-black text-zinc-950">{item.role}</h3>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500">
                        <CalendarDays className="h-4 w-4" />
                        {item.date}
                      </div>
                    </div>
                    <p className="mt-4 leading-7 text-zinc-600">{item.details}</p>
                    {item.bullets?.length && (
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="border-l border-emerald-300 pl-4">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-950"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section className="bg-zinc-950 pb-20 pt-36 text-white lg:pt-28">
            <div className="mx-auto max-w-7xl px-5">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
                  Technical strengths
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight">
                  A practical stack for intelligent products.
                </h2>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <article
                      key={skill.title}
                      className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-400 text-zinc-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold">{skill.title}</h3>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                        {skill.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section id="contact" className="bg-emerald-500 py-20 text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-zinc-800">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Want to know more about me, or hire me for your AI project?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-800">
                I am open to Data Science, AI Engineering, Machine Learning Engineering, and
                Software Engineering with AI.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-950 px-6 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-950 px-6 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
