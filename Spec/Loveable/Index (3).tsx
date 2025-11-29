import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-1 bg-noise">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary uppercase tracking-widest font-semibold">
              Delivery Optimisation Experts
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-none text-glow-primary">
              Adapt Flow Deliver
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-primary-glow font-medium max-w-4xl mx-auto">
              We strengthen what works - and streamline what slows you down.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                End-to-end delivery. Capability uplift. Clear, scalable ways of working.
              </p>
              <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
                We help organisations design and embed simple, scalable, customer-centric delivery systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6 shadow-glow-primary hover:shadow-glow-primary hover:scale-105 transition-all">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10">
                Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 bg-mesh-2 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary uppercase tracking-widest font-semibold mb-4">
              About Us
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Adapt Flow Deliver helps organisations design and embed simple, scalable and customer-centric delivery systems.</p>
            <p>We support leaders and teams as they shift from complex, reactive ways of working to clear, predictable and value-focused operating models.</p>
            
            <Card className="glass-strong p-8 my-8 border-primary/20 shadow-elevated">
              <p className="text-xl font-semibold text-foreground mb-6">Our belief is straightforward:</p>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-primary mr-3 text-2xl group-hover:scale-110 transition-transform">→</span>
                  <span>When people understand how the system works, capability grows.</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-secondary mr-3 text-2xl group-hover:scale-110 transition-transform">→</span>
                  <span>When capability grows, value flows.</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-primary mr-3 text-2xl group-hover:scale-110 transition-transform">→</span>
                  <span>When value flows, customers win.</span>
                </li>
              </ul>
            </Card>

            <p>We blend strategy, operating model design and modern delivery practices to uplift capability across the entire organisation - from leadership through to teams on the ground.</p>
            <p className="text-center text-muted-foreground/70 italic pt-4">
              Founded by Rebecca Forrest, we work globally across aviation, financial services, global energy, engineering, data, product, digital and publishing organisations.
            </p>
            <p className="text-center text-muted-foreground/70 italic">
              Across the UK, Europe, the Middle East and Asia Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-mesh-3 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-secondary uppercase tracking-widest font-semibold mb-4">
              Services
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
              Supporting organisations through transformation, capability building and value delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Strategy → Operating Model Alignment",
                desc: "Supporting organisations to translate strategic goals into practical, scalable ways of working that teams can confidently deliver against.",
                color: "primary"
              },
              {
                num: "02",
                title: "End-to-End Delivery Transformation",
                desc: "From idea to delivery, we simplify systems, improve flow, and remove the friction that prevents teams from delivering real customer value.",
                color: "secondary"
              },
              {
                num: "03",
                title: "Capability Uplift Across Teams & Leadership",
                desc: "Building capability is at the heart of everything we do - skills, mindset, clarity, confidence and alignment.",
                note: "(Kanban and flow-based delivery are areas of specialist expertise.)",
                color: "primary"
              },
              {
                num: "04",
                title: "Customer-Centric Ways of Working",
                desc: "Helping teams prioritise work that genuinely delivers customer value, with clear demand shaping, simple prioritisation, and improved decision-making.",
                color: "secondary"
              },
              {
                num: "05",
                title: "Flow, Data & Insight-Driven Delivery",
                desc: "Translating data into visibility: cycle time, throughput, blockers, risks, forecasting - explained in plain English so leaders can make better decisions.",
                color: "primary"
              },
              {
                num: "06",
                title: "Collaboration & Cross-Team Alignment",
                desc: "Creating smoother coordination across departments, reducing noise, clarifying ownership, and giving everyone visibility of how value moves through the system.",
                color: "secondary"
              }
            ].map((service, idx) => (
              <Card 
                key={idx}
                className={`glass p-8 border-2 hover:scale-105 transition-all duration-300 group cursor-pointer ${
                  service.color === 'primary' 
                    ? 'border-primary/30 hover:border-primary hover:shadow-glow-primary' 
                    : 'border-secondary/30 hover:border-secondary hover:shadow-glow-secondary'
                }`}
              >
                <div className={`text-3xl font-bold mb-4 ${
                  service.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`}>
                  {service.num}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-glow-primary transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  {service.desc}
                </p>
                {service.note && (
                  <p className="text-sm text-muted-foreground/70 italic mt-4">
                    {service.note}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* People Development Section */}
      <section className="relative py-32 bg-mesh-1 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary uppercase tracking-widest font-semibold mb-4">
              At the Heart of Everything
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              People Development
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl text-foreground/90 leading-relaxed text-center font-light">
              Empowering individuals and teams through continuous learning, skill growth, and leadership development to drive lasting organisational capability.
            </p>

            <Card className="glass-strong p-10 border-2 border-primary/20 shadow-elevated">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe capability is built through people, not processes. Our coaching and development approach focuses on progressive skill growth, building confidence, and creating environments where teams can continuously learn and adapt.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-3">
                  {[
                    "Leadership coaching and capability building",
                    "Team development and continuous learning",
                    "Kanban and flow-based delivery training"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <span className="text-primary mr-3 text-xl group-hover:scale-110 transition-transform">→</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Operating model and delivery practice uplift",
                    "Building confidence through clarity and coaching",
                    "Creating sustainable learning cultures"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <span className="text-secondary mr-3 text-xl group-hover:scale-110 transition-transform">→</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed italic pt-6 mt-6 border-t border-primary/20">
                We amplify what already works in your teams and remove the barriers that prevent them from growing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Rebecca Section */}
      <section className="relative py-32 bg-mesh-2 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary uppercase tracking-widest font-semibold mb-4">
              Founder
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Rebecca Forrest
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <Card className="glass-strong p-10 md:p-12 border-2 border-primary/20 shadow-elevated">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Rebecca is a delivery transformation lead who specialises in simplifying complex delivery environments, uplifting capability, and helping organisations become more customer-centric and value-focused.
              </p>
              <p>
                She blends strategy, operating model design and practical delivery experience to help teams understand their system, improve flow, and build confidence in how work moves from idea to customer.
              </p>
              <p>
                Rebecca partners with{" "}
                <a href="https://www.adaptavis.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary-glow transition-colors underline decoration-primary/30 hover:decoration-primary">
                  Adaptavis
                </a>{" "}
                and{" "}
                <a href="https://www.flowency.co.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary-glow transition-colors underline decoration-primary/30 hover:decoration-primary">
                  Flowency
                </a>{" "}
                on large-scale transformation, capability-building and flow-maturity programmes, working with organisations who want clearer delivery, stronger alignment and more predictable value outcomes.
              </p>
              <p>
                She has deep expertise in flow-based delivery and Kanban, but her real strength is bringing{" "}
                <span className="font-semibold text-foreground">clarity, calm and capability uplift</span>{" "}
                to organisations navigating complexity.
              </p>

              <Card className="glass p-6 mt-8 border border-primary/20">
                <p className="font-semibold text-foreground mb-4">Her work spans:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aviation",
                    "Financial services",
                    "Global energy",
                    "Engineering",
                    "Data",
                    "Product",
                    "Digital",
                    "Publishing"
                  ].map((industry, idx) => (
                    <div key={idx} className="flex items-center group">
                      <span className="text-primary mr-2 group-hover:scale-110 transition-transform">•</span>
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground/70">
                  Across the UK, Europe, the Middle East and Asia Pacific.
                </p>
              </Card>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 bg-mesh-3 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-secondary uppercase tracking-widest font-semibold mb-4">
              Get in Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Talk
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
              Ready to simplify delivery, build capability, and create lasting value? Get in touch to discuss how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-strong p-8 border-2 border-secondary/20 shadow-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground mb-2">
                    Name *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    required
                    placeholder="Your name"
                    className="glass-strong border-border/50 focus:border-secondary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground mb-2">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    placeholder="your.email@company.com"
                    className="glass-strong border-border/50 focus:border-secondary"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-semibold text-foreground mb-2">
                    Organisation
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="Your organisation (optional)"
                    className="glass-strong border-border/50 focus:border-secondary"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your delivery challenges and what you're looking to achieve..."
                    className="glass-strong border-border/50 focus:border-secondary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full shadow-glow-secondary hover:shadow-glow-secondary hover:scale-105 transition-all"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            <Card className="glass-strong p-8 border-2 border-secondary/20 shadow-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-6">Book a Call</h3>
              <div className="glass rounded-lg border border-secondary/30 p-8 min-h-[600px] flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Calendar booking integration would go here
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/95 border-t border-border/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Adapt Flow Deliver Consultancy Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
