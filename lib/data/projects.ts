import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "astramind",
    title: "AstraMind",
    description:
      "Enterprise-grade agentic RAG copilot with multi-step reasoning, dynamic document retrieval, and persistent conversational memory — built for knowledge-intensive workflows.",
    longDescription:
      "AstraMind is an enterprise AI copilot powered by an agentic Retrieval-Augmented Generation (RAG) architecture. It enables intelligent multi-turn conversations grounded in proprietary knowledge bases, with real-time document ingestion, semantic chunking, vector search, and LLM-powered synthesis. Designed for knowledge workers who need a reliable, context-aware AI assistant.",
    tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React", "TypeScript"],
    github: "https://github.com/snehita02",
    featured: true,
    category: "AI / LLM",
  },
  {
    id: "stylometry",
    title: "Computational Stylometry",
    description:
      "Machine learning system for authorship attribution and hidden writing pattern detection using advanced NLP feature extraction and classification models.",
    longDescription:
      "This system applies computational stylometry techniques to detect hidden stylistic fingerprints in text corpora. Using NLP feature engineering — including function word frequency, syntactic patterns, character n-grams, and sentence rhythm — it trains classifiers to attribute authorship with high accuracy across literary and forensic use cases.",
    tech: ["Python", "Scikit-learn", "NLTK", "spaCy", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/snehita02",
    featured: true,
    category: "NLP / ML",
  },
  {
    id: "eye-hear",
    title: "Eye Hear",
    description:
      "Real-time object detection application for visually impaired users — combining computer vision with audio feedback to deliver instant, accessible environmental awareness.",
    longDescription:
      "Eye Hear is an accessibility-first application that uses computer vision to identify objects in real time through a camera feed and communicates findings to visually impaired users via text-to-speech audio output. Built with YOLO-based detection and optimized for mobile deployment, it aims to increase independence and situational awareness for blind and low-vision users.",
    tech: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "gTTS", "Flask"],
    github: "https://github.com/snehita02",
    featured: true,
    category: "Computer Vision",
  },
  {
    id: "tourist-guide",
    title: "Tourist Guide Android App",
    description:
      "Location-aware Android application providing intelligent tourist guidance, local recommendations, and interactive navigation for travelers.",
    longDescription:
      "A feature-rich Android application that delivers a personalized tourist guide experience using GPS location services, curated local data, and an interactive map interface. The app provides context-aware recommendations for attractions, restaurants, and cultural sites, making navigation intuitive for first-time visitors.",
    tech: ["Android", "Java", "Google Maps API", "Firebase", "SQLite", "REST APIs"],
    github: "https://github.com/snehita02",
    featured: true,
    category: "Mobile",
  },
  {
    id: "inventory-analytics",
    title: "Retail Inventory Analytics System",
    description:
      "Excel-based analytics platform for managing 170+ SKUs — featuring automated KPI reporting, pivot dashboards, and inventory optimization workflows.",
    tech: ["Microsoft Excel", "VBA", "Pivot Tables", "Data Visualization"],
    github: undefined,
    featured: false,
    category: "Data Analytics",
  },
  {
    id: "data-pipeline",
    title: "Automated ETL Data Pipeline",
    description:
      "Scalable ETL pipeline automating data ingestion, transformation, and loading across heterogeneous sources into a centralized analytics warehouse.",
    tech: ["Python", "Apache Spark", "dbt", "PostgreSQL", "Docker", "GitHub Actions"],
    github: "https://github.com/snehita02",
    featured: false,
    category: "Data Engineering",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const additionalProjects = projects.filter((p) => !p.featured);
