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
  role: 'AI Engineer',
  tagline:
    'BSc (Hons) Computer Science, AI specialization | Agentic AI, LangGraph, RAG, MLOps, and production client delivery',
  location: 'Colombo 08, Sri Lanka',
  email: 'gihanlakmal007@gmail.com',
  phone: '+94 76 991 9877',
  github: 'https://github.com/Gihan007',
  linkedin: 'https://www.linkedin.com/in/gihan-lakmal-22964526a/',
  resume: `${import.meta.env.BASE_URL}AI-ML-Developer-Gihan-Lakmal.pdf`,
  summary:
    'AI/ML Engineer and researcher with nearly 2 years of experience designing, building, and deploying agentic AI, multi-agent, machine learning, and generative AI solutions, with end-to-end ownership across model integration, FastAPI back ends, databases, Docker, cloud deployment, QA, and monitoring.',
};

export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects', value: '10+' },
  { label: 'GPA', value: '3.61' },
  { label: 'Publications', value: 'IEEE' },
];

export const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
] as const;

export type TabId = (typeof tabs)[number]['id'];

export const expertiseHighlights = [
  'I build practical AI systems that connect research ideas with production software. My work includes agentic production-level products, LLM applications, multi-agent workflows, OCR document intelligence, forecasting, and machine learning solutions for real-world business problems.',
  'My background spans client projects, research work, and startup product building, including Sinhala and Tamil language AI research, document automation, FinTech agent systems, and MLOps-focused engineering. I enjoy turning complex AI concepts into products people can actually use.',
];

export const aboutSummary =
  'My work spans forecasting, document intelligence, graph retrieval, autonomous agent workflows, backend APIs, and MLOps practices. I focus on systems that are useful, measurable, and maintainable after the demo is over.';

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
      'ReAct agents',
      'Supervisor graphs',
      'Tool / function calling',
      'Model Context Protocol (MCP)',
      'LLM fine-tuning (PEFT, LoRA, QLoRA)',
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
      'MongoDB',
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
      'MLflow',
      'DVC',
      'Prometheus',
      'Grafana',
      'Jenkins',
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
      'Java',
      'JavaScript',
      'C / C#',
      'React',
      'Next.js',
      'Vite',
      'SQLAlchemy',
      'Pydantic',
      'Alembic',
      'Pandas',
      'NumPy',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
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
  {
    title: 'Construction Worker Safety Monitoring System',
    tag: 'Client Project',
    privateNotice: '🔒 Cannot share client project code',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description:
      'Built a computer vision safety compliance MVP for an Indian client that detects workers, helmets, and safety vests from images and video.',
    impact: [
      'Detected workers, helmets, and safety vests from images and video using YOLOv8.',
      'Applied safety compliance rules to classify safe and unsafe conditions and generate annotated outputs.',
    ],
    stack: ['YOLOv8', 'Ultralytics', 'Python', 'FastAPI', 'OpenCV', 'Docker', 'PostgreSQL'],
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
    role: 'AI Research Assistant',
    company: 'AI Research Environment',
    date: 'Nov 2024 - Jun 2025',
    details:
      'Worked on generative AI models for Sinhala and Tamil, collecting and processing a 40 million word bilingual corpus to improve relevance for Sri Lankan language users.',
    bullets: [
      'Applied generative AI, computer vision, and audio generation techniques to native language research problems.',
      'Used parameter-efficient fine-tuning approaches including PEFT, LoRA, and QLoRA for language model adaptation and experimentation.',
    ],
    stack: ['NLP', 'Generative AI', 'Computer Vision', 'PEFT', 'LoRA', 'QLoRA'],
  },
  {
    role: 'AI/ML Trainee Associate Engineer',
    company: 'SenzMate AIoT',
    date: 'Jul 2025 - Jul 2026',
    details:
      'Built agentic AI and finance-focused multi-agent solutions for the Interplay Autonomous Platform and client projects, with end-to-end ownership from agent architecture to deployment.',
    bullets: [
      'Designed modular AI agent nodes and autonomous workflow pipelines, enabling multi-agent task routing, memory management, and decision making.',
      'Built finance-focused multi-agent solutions using LangChain, LangGraph, and modern LLM orchestration frameworks with custom tools and RAG pipelines.',
      'Delivered client projects with end-to-end ownership covering agent architecture, AI model integration, backend development, deployment, and production optimization.',
      'Supported scalable API integration, testing, and deployment using FastAPI, Docker, and cloud infrastructure.',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'RAG', 'Docker', 'Cloud deployment'],
  },
  {
    role: 'Co-Founder - AI Research & Engineering',
    company: 'ArcheAI (Part Time)',
    date: 'Dec 2025 - Present',
    details:
      'Co-founded an AI research and engineering startup developing agentic systems for enterprise and client automation, including an agentic WhatsApp bot, insurance fax extraction models, and a voice call agent platform.',
    bullets: [
      'Designed complete agent architectures combining LLM orchestration, autonomous task execution, tool integration, and workflow automation.',
      'Applied RAG, semantic embedding optimization, and hybrid neuro-symbolic workflows to improve contextual reasoning, reliability, and production readiness.',
      'Contributed across solution architecture, backend engineering, model integration, testing, deployment, and client delivery.',
    ],
    stack: ['Agentic AI', 'LLM orchestration', 'RAG', 'Embeddings', 'Neuro-symbolic workflows', 'FastAPI'],
  },
  {
    role: 'AI Engineer',
    company: 'VInvest Pvt Ltd (Full Time)',
    date: 'Jul 2026 - Present',
    details:
      'Architecting a fintech multi-agent AI platform on LangGraph, taken from idea to live product with containerized, cloud-deployed, scalable services owned end to end.',
    bullets: [
      'Architected the platform with coordinator, planner, supervisor, and specialist agent nodes, using stateful memory with Postgres checkpointing and autonomous task routing for deep financial analysis.',
      'Took it from idea to live product through DevOps practices, with containerized, cloud-deployed, scalable services.',
    ],
    stack: ['LangGraph', 'Multi-agent systems', 'PostgreSQL', 'Docker', 'DevOps', 'Cloud deployment'],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  meta: string;
};

export const education: EducationItem[] = [
  {
    school: 'University of Kelaniya - Sri Lanka',
    degree: 'B.Sc. (Hons) Computer Science, AI Specialization',
    meta: 'GPA 3.61 | Jul 2022 - Jul 2026',
  },
  {
    school: 'University of Colombo - Sri Lanka',
    degree: 'Bachelor of Information Technology (External)',
    meta: 'Jul 2021 - Aug 2022',
  },
  {
    school: 'Nalanda College, Colombo 10',
    degree: 'G.C.E. Advanced Level - Physical Science Stream',
    meta: 'Z-score 1.563 | 2020',
  },
];
