import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about", isAnchor: true },
    { name: "Skills", href: "/#skills", isAnchor: true },
    { name: "Projects", href: "/#projects", isAnchor: true },
    { name: "Experience", href: "/#experience", isAnchor: true },
    { name: "Blogs", href: "/blogs", isAnchor: false },
    { name: "Contact", href: "/#contact", isAnchor: true },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { name: string; href: string; isAnchor: boolean },
  ) => {
    if (link.isAnchor && window.location.pathname === "/") {
      e.preventDefault();
      const id = link.href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-display font-bold tracking-tighter text-white">
            PORTFOLIO<span className="text-primary"></span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                onClick={(e) => handleNavClick(e, link)}
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <a href="/resume.pdf" download>
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                onClick={(e) => handleNavClick(e, link)}
                className="text-lg font-medium text-white/80 hover:text-primary"
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full" asChild>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
