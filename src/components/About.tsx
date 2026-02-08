import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Engineering Intelligence <br />
                <span className="text-white/40">with Human Purpose</span>
              </h2>
              <div className="space-y-4 text-lg text-white/60 leading-relaxed">
                <p>
                  I am an AI Engineer and postgraduate student currently
                  pursuing an{" "}
                  <strong className="text-white">
                    MSc in Human-Centered Artificial Intelligence
                  </strong>{" "}
                  at Technological University Dublin. My journey is defined by a
                  passion for demystifying complex technology.
                </p>
                <p>
                  With professional experience as an{" "}
                  <strong className="text-white">
                    AI & Data Analytics Intern
                  </strong>
                  , I've applied advanced machine learning to real-world
                  construction management challenges—transforming raw data into
                  actionable insights for risk detection and delay prediction.
                </p>
                <p>
                  My philosophy is simple: Technology should be intuitive. I
                  strive to solve complex problems in ways that are accessible,
                  transparent, and genuinely helpful to the people using them.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-2xl blur-sm opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <img
                    src="/sandeep.png"
                    alt="Sandeep Surendran"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
