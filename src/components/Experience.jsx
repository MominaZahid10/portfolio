import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "Codematics Services Pvt Ltd",
    period: "Jul 2026 – Aug 2026",
    location: "Abbottabad, PK",
    points: [
      "Shipped a radiology assistant that answers clinical questions from medical literature and links every claim back to the passage it came from, running inside the hospital network so patient records never leave it.",
      "Replaced manual research and scheduling work with scheduled agents, wiring LLM APIs and vector search together in n8n.",
      "Carried both systems from the first retrieval experiment through to a containerised build with a test suite behind it.",
    ],
    tags: ["n8n", "LangChain", "FastAPI", "RAG", "Docker"]
  },
];

export default function Experience() {
  return (
    <div className="py-20 lg:py-28 relative" id="experience">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-pink-hot/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="px-5 lg:px-28 relative z-10">
        <motion.div
          className="mb-14 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-[#2a2a2a] pl-8 lg:pl-12 space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-[38px] lg:-left-[54px] top-7 w-3 h-3 rounded-full bg-pink-hot ring-4 ring-dark" />

              <div className="bg-[#151515] border border-[#2a2a2a] rounded-2xl p-6 lg:p-8 hover:border-pink-hot/40 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white text-xl lg:text-2xl font-grotesk">{job.role}</h3>
                    <p className="text-pink-hot text-sm mt-1.5">{job.company}</p>
                  </div>
                  <div className="lg:text-right shrink-0">
                    <p className="font-mono text-xs text-zinc-500">{job.period}</p>
                    <p className="font-mono text-xs text-zinc-600 mt-1.5">{job.location}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-zinc-400 text-sm/7 lg:text-base/8">
                      <span className="text-pink-hot/50 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {job.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] text-pink-hot/60 border border-pink-hot/15 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
