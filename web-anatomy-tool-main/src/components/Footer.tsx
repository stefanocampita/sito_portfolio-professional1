import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-accent/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Stefano Campita. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              Portfolio for educational and professional presentation — IB & PE focus.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@stefanocampita.com"
              className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-8 pt-6 border-t border-accent/20">
          <div className="flex justify-center">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
