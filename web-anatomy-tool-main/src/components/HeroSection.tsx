import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg blur-xl"></div>
              <div className="relative bg-card rounded-lg overflow-hidden border-2 border-accent/30 shadow-[var(--shadow-elegant)]">
                <img 
                  src="https://stefanocampita.github.io/sito_portfolio/foto_about_me.png"
                  alt="Stefano Campita - Financial Analyst"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative line */}
              <div className="absolute -bottom-6 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>

            {/* About Me Box */}
            <div className="mt-12 p-8 bg-card rounded-lg border border-border shadow-lg animate-fade-in-delay">
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">About me</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I study how capital meets strategy. I build valuation and LBO models, pressure-test assumptions, 
                and write investment memos to sharpen judgment. My approach is rigorous and data-driven, 
                with clear, concise communication.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm drawn to calculated risk and I like turning noisy financials into quantitative data. 
                This site collects selected projects — valuations, LBOs, and M&A case studies — 
                that reflect how I think and solve problems.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-accent font-medium">
                "Without data, you're just another person with an opinion."
                <footer className="text-sm text-muted-foreground mt-1">— W. Edwards Deming</footer>
              </blockquote>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                  Financial Analyst
                </span>
                <div className="h-0.5 w-20 bg-accent mt-2"></div>
              </div>
              
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Financial Modeling
                <span className="text-accent"> & Deal</span> Analysis
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                I build clean valuation models (DCF, comps), full LBO models with sensitivities, 
                and concise investment memos. Here is where I collect my projects and case studies 
                that mirror real IB/PE deliverables.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-display font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-display font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-display font-bold text-accent">$2B+</div>
                <div className="text-sm text-muted-foreground">Analyzed</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-gold)] transition-all duration-300 group"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Read Blog
                </Button>
              </Link>
            </div>

            {/* Expertise Icons */}
            <div className="flex gap-6 pt-8">
              <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                <div className="p-3 rounded-lg bg-accent/10">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium">Valuation</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                <div className="p-3 rounded-lg bg-accent/10">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium">LBO Models</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FileText className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium">Memos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
