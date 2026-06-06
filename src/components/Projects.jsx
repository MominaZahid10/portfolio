import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Network Troubleshooter",
    description: "Real-time network anomaly detection powered by an LSTM Autoencoder and an autonomous LangChain agent. The system continuously monitors 8 live network metrics, detects anomalies, and dispatches an AI agent to diagnose and attempt automated remediation — all visualised on a Next.js dashboard with a 3D Three.js globe.",
    image: "/assets/project5.png",
    github: "https://github.com/NetworksTeam/network-anomaly-detection-",
    live: "https://project-9370e.vercel.app/",
    tags: ["Next.js", "FastAPI", "LangChain", "LSTM", "TensorFlow", "Docker"]
  },
  {
    id: 2,
    title: "Multi Game Arena",
    description: "A full-stack gaming platform featuring real-time personality analysis through machine learning. Players engage in three distinct game modes while an ML system analyzes their behavior patterns to create personalized AI opponents.",
    image: "/assets/project1.png",
    github: "https://github.com/MominaZahid10/multi_game-arena",
    live: "https://multi-game-arena.vercel.app/",
    tags: ["React", "Python", "ML", "WebSocket"]
  },
  {
    id: 3,
    title: "EduAnalytics Platform",
    description: "EduAnalytics is a comprehensive analytics platform for exploring, visualizing, and understanding learning effectiveness across major online education platforms. It combines advanced statistics, web scraping, and interactive dashboards to deliver actionable insights for both learners and content creators.",
    image: "/assets/project2.png",
    github: "https://github.com/MominaZahid10/eduanalytics-platform",
    live: null,
    tags: ["Python", "Data Analysis", "Dashboard"]
  },
  {
    id: 4,
    title: "Intern Performance Predictor",
    description: "A smart prediction system that evaluates and forecasts intern performance. Features an interactive dashboard where managers can visualize trends, track progress, and get real-time performance insights to support better hiring and mentoring decisions.",
    image: "/assets/project3.png",
    github: "https://github.com/MominaZahid10/intern-performance-ml",
    live: null,
    tags: ["ML", "Flask", "XGBoost", "Dashboard"]
  },
  {
    id: 5,
    title: "EventSaga",
    description: "An all-in-one platform for discovering, organizing, and building communities around events. EventSaga connects attendees with experiences they'll love while giving organizers powerful tools to create and manage events seamlessly.",
    image: "/assets/project4.png",
    github: "https://github.com/MominaZahid10/event-saga-main",
    live: "https://event-saagaa.vercel.app/",
    tags: ["Next.js", "TypeScript", "Vercel"]
  },
];

export default function Projects() {
  return (
    <div className="py-20 lg:py-28 relative" id="projects">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-hot/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="px-5 lg:px-28 relative z-10">
        <motion.div
          className="mb-14 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex items-center flex-col gap-8 lg:gap-14 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <motion.div
                className="lg:w-[520px] w-full rounded-2xl overflow-hidden relative group flex-shrink-0 glow-pink"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card p-1 rounded-2xl">
                  <img
                    className="w-full hover:scale-105 transition-all duration-700 cursor-pointer object-cover aspect-video rounded-xl"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm hover:bg-pink-hot p-2.5 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    title="View on GitHub"
                  >
                    <BsGithub className="w-5 h-5 text-white" />
                  </a>
                )}
              </motion.div>

              {/* Project Info */}
              <div className="lg:w-1/2 space-y-4">
                <span className="font-mono text-pink-hot/40 text-xs">
                  {String(project.id).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-white text-2xl lg:text-4xl font-grotesk">{project.title}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] text-pink-hot/60 border border-pink-hot/15 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-400 text-sm/7 lg:text-base/8">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-3">
                  {project.live && (
                    <a href={project.live} className="text-zinc-500 flex items-center gap-2 hover:text-pink-hot transition-colors duration-300 text-sm font-medium" target="_blank" rel="noopener noreferrer">
                      <TbExternalLink size={16} />
                      live_demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-zinc-500 flex items-center gap-2 hover:text-pink-hot transition-colors duration-300 text-sm font-medium" target="_blank" rel="noopener noreferrer">
                      <BsGithub size={14} />
                      source_code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
