import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
              <div className="h-0.5 w-20 bg-accent mt-2 mx-auto"></div>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating, discussing a project, or just want to connect? 
              Feel free to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Contact Form */}
            <Card className="lg:col-span-3 border-border shadow-[var(--shadow-elegant)] animate-fade-in">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input 
                        id="name"
                        placeholder="Your name" 
                        required
                        className="border-border focus:ring-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your.email@example.com" 
                        required
                        className="border-border focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="What's this about?" 
                      required
                      className="border-border focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me more..." 
                      rows={6}
                      required
                      className="border-border focus:ring-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-gold)] transition-all duration-300 group"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-delay">
              
              {/* Direct Contact */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href="mailto:stefano.campita@example.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Mail className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Email</div>
                      <div className="text-xs text-muted-foreground">stefano.campita@example.com</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Connect Online</CardTitle>
                  <CardDescription>
                    Follow my work and stay connected
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href="https://linkedin.com/in/stefanocampita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Linkedin className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">Professional network</div>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/stefanocampita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Github className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">GitHub</div>
                      <div className="text-xs text-muted-foreground">Code & models</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-border bg-muted">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently open to consulting opportunities, model reviews, and collaborative projects 
                    in financial modeling and deal analysis.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-foreground">Available for projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="mt-12 text-center p-6 bg-muted/50 rounded-lg animate-fade-in-delay">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Response time:</strong> I typically respond within 24 hours on business days. 
              For urgent inquiries, please mention it in the subject line.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
