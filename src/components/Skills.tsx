import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  Programming: ["Python", "R", "Rust", "SQL", "JavaScript", "HTML", "CSS"],
  "AI & ML": [
    "BERT",
    "NLP",
    "Generative AI",
    "Agentic AI",
    "TensorFlow",
    "Scikit-learn",
  ],
  "Cloud & DevOps": [
    "AWS Services",
    "Docker",
    "Git",
    "GitHub",
    "Microsoft Azure",
  ],
  "LLM Platforms": ["Claude", "Gemini", "Amazon Nova", "Azure AI Studio"],
  Tools: [
    "Jupyter",
    "VS Code",
    "PowerBI",
    "Tableau",
    "ChatGPT",
    "Cursor",
    "Kiro IDE",
    "GitHub Copilot",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-white/50 max-w-2xl">
            The tools and technologies I use to build intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-transparent"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
