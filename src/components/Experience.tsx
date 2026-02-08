import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Professional Experience</h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
          {/* Experience Item */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-black" />
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Artificial Intelligence & Data Analytics Intern</h3>
                <p className="text-lg text-primary">ASK’s Crafty LLP</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>1 Year Duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Thrissur, Kerala, India</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <ul className="space-y-3">
                {[
                  "Built predictive AI models for risk detection, delay forecasting, and cost estimation.",
                  "Developed interactive dashboards for project performance visualization.",
                  "Automated data transformation and reporting workflows to save manual effort.",
                  "Optimized construction scheduling and resource utilization through data analysis.",
                  "Supported AI-driven project management and forecasting systems."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="block mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
