import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Masters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">MSc in Human-Centered Artificial Intelligence</h3>
            <p className="text-white/60 mb-4">Technological University Dublin, Ireland</p>
            <div className="flex items-center gap-2 text-sm text-primary/80 font-mono">
              <Calendar className="w-4 h-4" />
              <span>Sep 2025 – Present</span>
            </div>
          </motion.div>

          {/* Bachelors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">B.Tech in Computer & Communication Engineering</h3>
            <p className="text-white/60 mb-4">Sri Manakula Vinayagar Engineering College<br/>(Pondicherry University), India</p>
            <div className="flex items-center gap-2 text-sm text-white/40 font-mono">
              <Calendar className="w-4 h-4" />
              <span>June 2020 – June 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
