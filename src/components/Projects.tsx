import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/50">Showcasing applied AI for social good.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-linear-to-br from-white/5 to-white/[0.02] border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <Badge className="w-fit mb-4 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20">Team Lead</Badge>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Tone Tracker
                  <span className="block text-xl font-normal text-white/40 mt-1">Safeguarding Digital Communities</span>
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  An AI-powered content moderation system designed to promote safer digital spaces using BERT-based NLP models. 
                  Tone Tracker performs real-time tone detection to classify content into hate speech, offensive speech, or non-offensive categories, 
                  helping communities maintain healthy discourse.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider">Key Contributions</h4>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Designed and implemented BERT-based NLP models
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Led milestone planning and execution for the team
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Focused on ethical AI and technology for social good
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Python", "BERT", "NLP", "Machine Learning"].map(tag => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-white/60">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="bg-white text-black hover:bg-white/90" asChild>
                    <a href="https://github.com/KMCsandeep/Tone-Tracker.git" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </a>
                  </Button>
                </div>
              </div>

              {/* Decorative visual for the project */}
              <div className="relative bg-black/40 min-h-[300px] lg:min-h-full flex items-center justify-center p-8 overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-50" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                
                {/* Abstract Visualization of NLP */}
                <div className="relative z-10 w-full max-w-sm aspect-square border border-white/10 rounded-full flex items-center justify-center">
                   <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
                   <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />
                   <div className="text-center p-6 backdrop-blur-md bg-black/50 rounded-xl border border-white/10">
                     <p className="text-xs font-mono text-primary mb-2">INPUT: "Make the world better"</p>
                     <div className="h-px w-full bg-white/10 my-2" />
                     <p className="text-xs font-mono text-green-400">CLASS: Non-Offensive (99.8%)</p>
                   </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
