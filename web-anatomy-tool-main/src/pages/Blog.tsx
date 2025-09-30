import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of DCF Modeling: Beyond the Textbook",
    excerpt: "Most finance students learn DCF in theory. Here's how practitioners actually build models that hold up in live deal negotiations, including the shortcuts that matter and the precision that doesn't.",
    category: "Valuation",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 2,
    title: "LBO Model Mechanics: What Private Equity Actually Looks At",
    excerpt: "Breaking down the critical components of LBO models that PE firms scrutinize. From debt capacity to management cases, here's what separates amateur models from professional-grade analysis.",
    category: "LBO",
    date: "Jan 10, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 3,
    title: "Terminal Value: The $500M Assumption",
    excerpt: "Terminal value often represents 60-80% of DCF valuation, yet it's determined by just two inputs. A deep dive into perpetuity growth rates, exit multiples, and how small changes drive massive swings in valuation.",
    category: "Valuation",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
  },
  {
    id: 4,
    title: "Comps Analysis: The Lazy Man's Valuation (Done Right)",
    excerpt: "Trading comps are dismissed as unsophisticated, but they're the most widely used valuation method in finance. Here's how to select peers, normalize financials, and actually generate defensible ranges.",
    category: "Valuation",
    date: "Dec 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80"
  },
  {
    id: 5,
    title: "M&A Accretion/Dilution: Why CFOs Care More Than You Think",
    excerpt: "Accretion/dilution analysis determines whether a deal gets board approval. Understanding EPS impact, earnback periods, and how to model purchase accounting adjustments that actually matter.",
    category: "M&A",
    date: "Dec 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  },
  {
    id: 6,
    title: "The WACC Debate: Precision vs. Pragmatism",
    excerpt: "Calculating WACC involves choosing between academic precision and real-world shortcuts. Here's what practitioners actually do when estimating cost of equity, debt, and the optimal capital structure.",
    category: "Valuation",
    date: "Dec 15, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                Insights & Analysis
              </span>
              <div className="h-0.5 w-20 bg-accent mt-2 mx-auto"></div>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Practical insights on financial modeling, valuation techniques, and deal analysis. 
              Real-world applications that go beyond textbook theory.
            </p>
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden border-2 border-accent/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  Featured
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button className="w-fit group bg-primary text-primary-foreground hover:bg-primary/90">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent/90 text-accent-foreground">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="font-display text-xl mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center py-16 px-6 bg-muted rounded-lg animate-fade-in-delay">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when I publish new analysis, models, and insights on financial modeling and deal analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
