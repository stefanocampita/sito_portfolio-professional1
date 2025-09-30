import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileSpreadsheet, Building2, Download } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tesla Inc. - DCF Valuation Model",
    category: "Valuation",
    description: "Full 3-statement DCF model with revenue build-ups, WACC calculation, and sensitivity analysis. Terminal value via Gordon Growth and EV/EBITDA multiples.",
    tags: ["DCF", "Automotive", "Tech"],
    metrics: ["$850B Enterprise Value", "12.5% WACC", "3% Terminal Growth"],
    icon: TrendingUp,
    year: "2024"
  },
  {
    id: 2,
    title: "Private Equity LBO - Consumer Goods",
    category: "LBO",
    description: "Comprehensive LBO model for a $2.5B consumer goods acquisition. Sources & uses, debt schedule with revolver/term loans, IRR waterfall, and exit scenarios.",
    tags: ["LBO", "Consumer", "PE"],
    metrics: ["5.5x Entry Multiple", "25.3% IRR", "2.8x MOIC"],
    icon: FileSpreadsheet,
    year: "2024"
  },
  {
    id: 3,
    title: "M&A Analysis - Tech Acquisition",
    category: "M&A",
    description: "Accretion/dilution analysis for a $1.2B tech M&A deal. Synergy modeling, purchase price allocation, and pro forma financials with integration costs.",
    tags: ["M&A", "Technology", "Synergies"],
    metrics: ["15% EPS Accretion", "$180M Synergies", "3-Year Payback"],
    icon: Building2,
    year: "2023"
  },
  {
    id: 4,
    title: "Comparable Company Analysis - SaaS",
    category: "Valuation",
    description: "Trading comps for a B2B SaaS company with revenue multiples, EBITDA multiples, and growth-adjusted metrics. Peer selection and normalization adjustments.",
    tags: ["Comps", "SaaS", "Multiples"],
    metrics: ["8.5x EV/Revenue", "42x EV/EBITDA", "65% Gross Margin"],
    icon: TrendingUp,
    year: "2023"
  },
  {
    id: 5,
    title: "Leveraged Recapitalization Model",
    category: "LBO",
    description: "Recap analysis for dividend distribution to PE sponsor. Debt capacity assessment, credit metrics, and return scenarios under various leverage levels.",
    tags: ["Recap", "Debt", "Returns"],
    metrics: ["$500M Dividend", "6.0x Total Debt/EBITDA", "18% Sponsor IRR"],
    icon: FileSpreadsheet,
    year: "2024"
  },
  {
    id: 6,
    title: "Precedent Transaction Analysis",
    category: "M&A",
    description: "Transaction comps for healthcare services M&A. Control premium analysis, deal multiples across 15 transactions, and implied valuation ranges.",
    tags: ["Precedents", "Healthcare", "Control Premium"],
    metrics: ["35% Avg Premium", "12.5x EBITDA", "1.8x Revenue"],
    icon: Building2,
    year: "2023"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                Case Studies & Models
              </span>
              <div className="h-0.5 w-20 bg-accent mt-2 mx-auto"></div>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Selected financial modeling projects that mirror real IB/PE deliverables. 
              Each model includes full documentation, assumptions, and sensitivity analysis.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <project.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.year}
                    </Badge>
                  </div>
                  <CardTitle className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-2 pt-2 border-t border-border">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground group/btn"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                    Download Model
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center py-16 px-6 bg-muted rounded-lg animate-fade-in-delay">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Need a Custom Model?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I build bespoke valuation models, LBO analyses, and investment memos 
              tailored to your specific deal or learning objectives.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-gold)] transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
