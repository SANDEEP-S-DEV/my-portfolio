import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/40 text-sm">
          © {new Date().getFullYear()} Sandeep Surendran. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/KMCsandeep" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/sandeep--surendran/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
