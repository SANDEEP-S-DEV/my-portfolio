import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              I'm always open to discussing AI, Human-Centered Design, or potential collaborations. 
              Feel free to reach out if you have a project in mind or just want to say hello.
            </p>

            <div className="space-y-6">
              <a href="mailto:sandeep.academics2001@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/40">Email Me</p>
                  <p className="text-white font-medium">sandeep.academics2001@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sandeep--surendran/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0077b5]/20 group-hover:border-[#0077b5]/50 transition-all">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/40">Connect on LinkedIn</p>
                  <p className="text-white font-medium">Sandeep Surendran</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/40">Location</p>
                  <p className="text-white font-medium">Dublin, Ireland</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/[0.02] border-white/10">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Name</label>
                    <Input placeholder="John Doe" className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Email</label>
                    <Input placeholder="john@example.com" className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-white/60">Subject</label>
                  <Input placeholder="Project collaboration" className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="bg-black/20 border-white/10 text-white placeholder:text-white/20 min-h-[150px] focus-visible:ring-primary" />
                </div>

                <Button className="w-full bg-white text-black hover:bg-white/90" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
