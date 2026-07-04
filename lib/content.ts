export const profile = {
  name: "Ajay Patel",
  role: "Software Engineer",
  tagline:
    "I build production LLM, RAG, and multi-agent systems — and the backend infrastructure they run on.",
  location: "Hyderabad, India",
  email: "ajaypatel39995@gmail.com",
  github: "https://github.com/ajaypatel0905",
  linkedin: "https://www.linkedin.com/in/ajaypatel0905",
  about: [
    "Software engineer at Equal (identity verification, Hyderabad) and a B.Tech from IIT Hyderabad (Class of '24). Two years shipping AI systems that do real work in production: retrieval and LLM adjudication over 200M+ court records, autonomous document-collection agents, voice agents, and internal LLM chatbots — serving 50+ enterprise clients.",
    "The other half of my work is classic backend engineering: Java/Spring Boot microservices, shared libraries running across 12+ services, gRPC, and AWS infrastructure. I care about the unglamorous parts that make systems trustworthy — evaluation harnesses, golden datasets, circuit breakers, and knowing exactly why the system did what it did.",
  ],
};

export const experience = {
  company: "Equal Identity",
  role: "Software Engineer",
  period: "June 2024 — Present",
  points: [
    "Built a multi-layered LLM workflow for an in-house legal / court-records engine: deterministic fuzzy retrieval narrows a 200M+ record lake, an LLM adjudicates hard matches, rules drive severity — checks went from days to ~15 minutes at ~95% lower cost, holding ~98% precision.",
    "Built an autonomous multi-agent insufficiency-resolution system that detects and collects missing documents via LLM-drafted emails, AI voice calls, and MCP-based OCR — cutting manual handling by ~60%.",
    "Created an internal LLM chatbot with tool-calling across verifications, notifications, and ticketing, grounded via RAG — resolving ~30% of HR/support queries end-to-end.",
    "Built the MCP server for Equal's console and the LLM evaluation harnesses (precision/recall, regression checks) that gate every model and prompt change to production.",
    "Designed a dynamic routing library in Java / Spring Boot — rule-based provider selection with circuit breaking and caching — lifting verification success from 80% to 90%, halving failed verifications.",
    "Authored shared Java libraries (routing, state management, notifications) running across 12+ microservices, and built end-to-end KYE verification journeys — face match & liveness, Voter ID, bank-account verification — over gRPC.",
  ],
};

export const projects = [
  {
    name: "ArchCritic",
    kicker: "AI system design interview coach",
    description:
      "Staged mock interviews graded per rubric dimension by an LLM judge grounded in real engineering blogs — with citations. The architecture whiteboard is a structured graph the judge reads directly. Hybrid retrieval (pgvector + FTS + RRF, cross-encoder rerank), eval-gated in CI: retrieval golden set at recall@5 0.87.",
    stack: ["Python", "FastAPI", "pgvector", "Next.js", "Groq"],
    live: "https://archcritic.vercel.app",
    code: "https://github.com/ajaypatel0905/archcritic",
  },
  {
    name: "AI Mail Assistant",
    kicker: "An LLM that drives the UI",
    description:
      "Gmail-backed mail client where the assistant controls the interface through natural language — 9 tool-calls that visibly fill compose forms, filter the inbox, open messages, and draft context-aware replies, with human-in-the-loop send confirmation.",
    stack: ["Next.js", "Gmail API", "OAuth", "Vercel AI SDK"],
    live: "https://ai-mail-assistant-eight.vercel.app",
    code: null,
  },
  {
    name: "Magicthon",
    kicker: "Vision-LLM meme maker, built in a day",
    description:
      "Solo hackathon build: generates captioned memes from images and prompts via a multi-model gateway. Selected and advanced to the interview round.",
    stack: ["Next.js", "Supabase", "OpenRouter"],
    live: null,
    code: "https://github.com/ajaypatel0905/magicthon",
  },
  {
    name: "Redrob SignalRank",
    kicker: "A candidate ranker that reads profiles",
    description:
      "Hybrid candidate-ranking engine that scores profiles on actual signal instead of keyword matching — blending deterministic scoring with semantic understanding of what a candidate has actually built.",
    stack: ["Python", "Embeddings", "Ranking"],
    live: null,
    code: "https://github.com/ajaypatel0905/redrob-signalrank",
  },
];

export const skills = [
  { label: "LLM & RAG", items: "Retrieval-Augmented Generation · Embeddings · Semantic Search · pgvector, Qdrant · Prompt Engineering · LLM Evaluation" },
  { label: "Agentic AI", items: "Multi-Agent Systems · Tool-Calling · MCP · AWS Bedrock · Voice Agents (Ultravox) · OCR (Textract)" },
  { label: "Languages & Frameworks", items: "Python · Java · TypeScript · SQL · FastAPI · Spring Boot · React / Next.js" },
  { label: "Cloud & Architecture", items: "AWS (Lambda, DynamoDB, SQS/SNS, S3, Athena, ECS, CDK) · Microservices · Event-Driven · gRPC · Docker · CI/CD" },
];
