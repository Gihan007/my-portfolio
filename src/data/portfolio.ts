import {
  Award,
  Brain,
  Code2,
  Database,
  FileText,
  Sparkles,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
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

export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects', value: '10+' },
  { label: 'GPA', value: '3.61' },
  { label: 'Publications', value: 'IEEE' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const expertiseHighlights = [
  'I build practical AI systems that connect research ideas with production software. My work includes agentic production-level products, LLM applications, multi-agent workflows, OCR document intelligence, forecasting, and machine learning solutions for real-world business problems.',
  'I specialize in end-to-end AI engineering — from data pipelines and model training to API design, deployment, and monitoring. I focus on measurable outcomes, clean architecture, and systems that remain maintainable after launch.',
  'My background spans client projects, research work, and startup product building, including Sinhala and Tamil language AI research, document automation, FinTech agent systems, and MLOps-focused engineering. I enjoy turning complex AI concepts into products people can actually use.',
];

export type SkillCategory = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
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

export type FeaturedProject = {
  title: string;
  tag: string;
  repo?: string;
  privateNotice?: string;
  image: string;
  description: string;
  impact: string[];
  stack: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'FinTech Multi-Agent AI Platform | VInvest / Get-Deep',
    tag: 'Client Project',
    repo: 'https://github.com/Gihan007/Agentic-Fintec-MultiAgnet-StockBroker-firm--client',
    privateNotice: 'Cannot share client project code',
    image:
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Built a production-oriented financial intelligence platform for a stockbroker firm, combining multi-agent LLM orchestration, event-driven microservices, hybrid retrieval, vector search, and knowledge graph analytics.',
    impact: [
      'Designed FastAPI-based AI agent services using LangChain and LangGraph for chat, deep research, ticker filtering, and report generation.',
      'Built multi-agent orchestration with supervisor, planner, researcher, reporter, and market-data tool agents.',
      'Developed hybrid retrieval pipelines using ChromaDB, Neo4j, PostgreSQL, and tool-augmented RAG.',
      'Deployed containerized microservices behind Kong API Gateway with GKE and Terraform planning.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'ChromaDB',
      'Neo4j',
      'PostgreSQL',
      'Docker',
      'Kong Gateway',
    ],
  },
  {
    title: 'Advanced Agentic Hybrid OCR & AI Document Processing Platform',
    tag: 'Client Project',
    repo: 'https://github.com/Gihan007/Advanced-Agentic-OCR-Platform',
    privateNotice: 'Cannot share client project code',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Production-grade OCR and AI document processing platform for complex multi-page insurance prior authorization documents with hybrid OCR, workflow orchestration, and human-in-the-loop review.',
    impact: [
      'Architected a containerized full-stack system using FastAPI, PostgreSQL, React, and Docker Compose.',
      'Implemented hybrid OCR with Tesseract, PaddleOCR, and Temporal-based workflow orchestration.',
      'Built human-in-the-loop review workflows with feedback learning and RAG-powered document interaction.',
      'Achieved 94–98% extraction accuracy and reduced manual review from 40% to 10%.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Temporal',
      'PostgreSQL',
      'Tesseract OCR',
      'PaddleOCR',
      'React',
      'Docker',
    ],
  },
  {
    title: 'Real-Time Voice AI Appointment Agent',
    tag: 'Voice AI Demo',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Real-time conversational voice AI demo for medical appointment reminder workflows with streaming STT, LLM dialogue orchestration, and browser-based microphone audio streaming.',
    impact: [
      'Built FastAPI backend with WebSocket-based audio streaming and browser Web Audio API frontend.',
      'Integrated Deepgram Nova STT with LangGraph conversation orchestration and Gemini/Groq LLM backends.',
      'Optimized perceived latency through streaming TTS, cached greetings, and async FastAPI design.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'WebSockets',
      'LangGraph',
      'Deepgram',
      'Cartesia TTS',
      'Web Audio API',
    ],
  },
];

export type GitHubProject = {
  title: string;
  tag: string;
  repo: string;
  description: string;
  stack: string[];
  language: string;
  stars: number;
  forks: number;
};

export const githubProjects: GitHubProject[] = [
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
];

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  details: string;
  bullets?: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Associate AI / ML Engineer',
    company: 'SenzMate AIOT',
    date: 'Jan 2026 – Present',
    details:
      'Building production AI systems with finance-focused multi-agent workflows, document intelligence, backend APIs, deployment, monitoring, and optimization for real-world client use cases.',
    bullets: [
      'Worked end to end on the Vinvest FinTech Deep Insight project.',
      'Working on a Voice AI agent for chatbot experiences.',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    role: 'AI Intern',
    company: 'SenzMate AIOT',
    date: 'Jul 2025 – Jan 2026',
    details:
      'Worked on AI engineering tasks across modular AI nodes, workflow pipelines, RAG systems, backend development, and production-focused experimentation for the Interplay Autonomous Platform.',
    bullets: [
      'Worked on the Interplay Platform auto workflow.',
      'Developed the SenzChat agentic bot from scratch.',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'RAG', 'MLOps'],
  },
  {
    role: 'AI Research Assistant',
    company: 'Sri Lankan native language AI research',
    date: 'Nov 2024 – Jun 2025',
    details:
      'Worked on generative AI models for Sinhala and Tamil, contributing to a 40 million word corpus and applying data preprocessing, computer vision, and audio generation techniques.',
    stack: ['NLP', 'Data Preprocessing', 'Generative AI', 'Computer Vision'],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  meta: string;
};

export const education: EducationItem[] = [
  {
    school: 'University of Kelaniya',
    degree: 'B.Sc. (Hons) Computer Science, AI Specialization',
    meta: 'Final semester | GPA 3.61 | 2022 – 2026',
  },
  {
    school: 'University of Colombo',
    degree: 'Bachelor of Information Technology (External)',
    meta: '2022 – 2023',
  },
  {
    school: 'Nalanda College, Colombo 10',
    degree: 'G.C.E. Advanced Level – Physical Science Stream',
    meta: 'Combined Mathematics, Physics, Chemistry | Z-score 1.563',
  },
];
