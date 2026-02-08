import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-background z-10" />
        <img 
          src="./hero-bg.png" 
          alt="AI Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-xs">
            Based in Dublin, Ireland
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6">
            Sandeep Surendran
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/60 font-light mb-8 max-w-3xl mx-auto">
            AI Engineer & <span className="text-primary font-medium">Human-Centered AI</span> Specialist
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bridging the gap between advanced artificial intelligence and human needs. 
            Building systems that solve complex problems with intuition and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[160px]" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white min-w-[160px]" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <a href="https://github.com/KMCsandeep" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sandeep--surendran/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sandeep.academics2001@gmail.com" className="text-white/40 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}
