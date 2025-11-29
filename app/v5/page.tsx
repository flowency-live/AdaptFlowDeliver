'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalEmbed } from '@/components/CalEmbed'

export default function HomeV5() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation - keeping existing AFD header */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Image src="/afd-logo.png" alt="Adapt Flow Deliver" width={64} height={64} className="h-16 w-auto" priority />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V1</a>
              <a href="/v2" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V2</a>
              <a href="/v3" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V3</a>
              <a href="/v4" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V4</a>
              <a href="/v5" className="text-primary-400 font-semibold text-sm">V5</a>
              <span className="text-slate-600">|</span>
              <a href="#about" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">About</a>
              <a href="#services" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Services</a>
              <a href="#rebecca" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Rebecca</a>
              <a href="#contact" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700/50">
              <div className="flex flex-col space-y-3">
                <div className="flex gap-3 px-4 pb-3 border-b border-slate-700/50">
                  <a href="/" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V1</a>
                  <a href="/v2" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V2</a>
                  <a href="/v3" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V3</a>
                  <a href="/v4" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V4</a>
                  <a href="/v5" className="text-primary-400 font-semibold text-sm">V5</a>
                </div>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#rebecca"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rebecca
                </a>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Loveable style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-1 bg-noise">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-400 uppercase tracking-widest font-semibold">
              Delivery Optimisation Experts
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-50 tracking-tight leading-none text-glow-primary">
              Adapt Flow Deliver
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-primary-300 font-medium max-w-4xl mx-auto">
              We strengthen what works - and streamline what slows you down.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
                End-to-end delivery. Capability uplift. Clear, scalable ways of working.
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We help organisations design and embed simple, scalable, customer-centric delivery systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-glow-primary hover:shadow-glow-primary text-lg"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-primary-400 text-primary-400 hover:bg-primary-400/10 font-semibold px-10 py-5 rounded-lg transition-all text-lg"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-mesh-2 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-400 uppercase tracking-widest font-semibold mb-4">
              About Us
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>Adapt Flow Deliver helps organisations design and embed simple, scalable and customer-centric delivery systems.</p>
            <p>We support leaders and teams as they shift from complex, reactive ways of working to clear, predictable and value-focused operating models.</p>

            <div className="glass-strong p-8 my-8 border-primary-400/20 shadow-elevated rounded-xl">
              <p className="text-xl font-semibold text-slate-100 mb-6">Our belief is straightforward:</p>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-primary-400 mr-3 text-2xl group-hover:scale-110 transition-transform">→</span>
                  <span>When people understand how the system works, capability grows.</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-secondary-400 mr-3 text-2xl group-hover:scale-110 transition-transform">→</span>
                  <span>When capability grows, value flows.</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-primary-400 mr-3 text-2xl group-hover:scale-110 transition-transform">→</span>
                  <span>When value flows, customers win.</span>
                </li>
              </ul>
            </div>

            <p>We blend strategy, operating model design and modern delivery practices to uplift capability across the entire organisation - from leadership through to teams on the ground.</p>
            <p className="text-center text-slate-400 italic pt-4">
              Founded by Rebecca Forrest, we work globally across aviation, financial services, global energy, engineering, data, product, digital and publishing organisations.
            </p>
            <p className="text-center text-slate-400 italic">
              Across the UK, Europe, the Middle East and Asia Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-mesh-3 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-secondary-400 uppercase tracking-widest font-semibold mb-4">
              Services
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary-400 to-primary-400 mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-6">
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
              <div
                key={idx}
                className={`glass p-8 rounded-xl border-2 hover:scale-105 transition-all duration-300 group cursor-pointer ${
                  service.color === 'primary'
                    ? 'border-primary-400/30 hover:border-primary-400 hover:shadow-glow-primary'
                    : 'border-secondary-400/30 hover:border-secondary-400 hover:shadow-glow-secondary'
                }`}
              >
                <div className={`text-3xl font-bold mb-4 ${
                  service.color === 'primary' ? 'text-primary-400' : 'text-secondary-400'
                }`}>
                  {service.num}
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-glow-primary transition-all">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-2">
                  {service.desc}
                </p>
                {service.note && (
                  <p className="text-sm text-slate-400 italic mt-4">
                    {service.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Development Section */}
      <section className="relative py-32 bg-mesh-1 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-400 uppercase tracking-widest font-semibold mb-4">
              At the Heart of Everything
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
              People Development
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-purple-400 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl text-slate-200 leading-relaxed text-center font-light">
              Empowering individuals and teams through continuous learning, skill growth, and leadership development to drive lasting organisational capability.
            </p>

            <div className="glass-strong p-10 rounded-xl border-2 border-primary-400/20 shadow-elevated">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
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
                      <span className="text-primary-400 mr-3 text-xl group-hover:scale-110 transition-transform">→</span>
                      <span className="text-slate-300">{item}</span>
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
                      <span className="text-secondary-400 mr-3 text-xl group-hover:scale-110 transition-transform">→</span>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed italic pt-6 mt-6 border-t border-primary-400/20">
                We amplify what already works in your teams and remove the barriers that prevent them from growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rebecca Section */}
      <section id="rebecca" className="relative py-32 bg-mesh-2 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-400 uppercase tracking-widest font-semibold mb-4">
              Founder
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
              Rebecca Forrest
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full" />
          </div>

          <div className="glass-strong p-10 md:p-12 rounded-xl border-2 border-primary-400/20 shadow-elevated">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Rebecca is a delivery transformation lead who specialises in simplifying complex delivery environments, uplifting capability, and helping organisations become more customer-centric and value-focused.
              </p>
              <p>
                She blends strategy, operating model design and practical delivery experience to help teams understand their system, improve flow, and build confidence in how work moves from idea to customer.
              </p>
              <p>
                Rebecca partners with{" "}
                <a href="https://www.adaptavis.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors underline decoration-primary-400/30 hover:decoration-primary-300">
                  Adaptavis
                </a>{" "}
                and{" "}
                <a href="https://www.flowency.co.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors underline decoration-primary-400/30 hover:decoration-primary-300">
                  Flowency
                </a>{" "}
                on large-scale transformation, capability-building and flow-maturity programmes, working with organisations who want clearer delivery, stronger alignment and more predictable value outcomes.
              </p>
              <p>
                She has deep expertise in flow-based delivery and Kanban, but her real strength is bringing{" "}
                <span className="font-semibold text-slate-100">clarity, calm and capability uplift</span>{" "}
                to organisations navigating complexity.
              </p>

              <div className="glass p-6 mt-8 rounded-lg border border-primary-400/20">
                <p className="font-semibold text-slate-100 mb-4">Her work spans:</p>
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
                      <span className="text-primary-400 mr-2 group-hover:scale-110 transition-transform">•</span>
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-slate-400">
                  Across the UK, Europe, the Middle East and Asia Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-mesh-3 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-secondary-400 uppercase tracking-widest font-semibold mb-4">
              Get in Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
              Let&apos;s Talk
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary-400 to-primary-400 mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-6">
              Ready to simplify delivery, build capability, and create lasting value? Get in touch to discuss how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-strong p-8 rounded-xl border-2 border-secondary-400/20 shadow-elevated">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg glass border-slate-600/50 focus:border-secondary-400 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary-400/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 rounded-lg glass border-slate-600/50 focus:border-secondary-400 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary-400/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-200 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your organisation (optional)"
                    className="w-full px-4 py-3 rounded-lg glass border-slate-600/50 focus:border-secondary-400 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary-400/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your delivery challenges and what you're looking to achieve..."
                    className="w-full px-4 py-3 rounded-lg glass border-slate-600/50 focus:border-secondary-400 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary-400/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-4 rounded-lg transition-all transform hover:scale-105 shadow-glow-secondary hover:shadow-glow-secondary"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="glass-strong p-8 rounded-xl border-2 border-secondary-400/20 shadow-elevated">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Book a Call</h3>
              <div className="glass rounded-lg border border-secondary-400/30" style={{ minHeight: '600px' }}>
                <CalEmbed
                  calLink="forrestrg"
                  namespace="afd-booking"
                  config={{
                    theme: 'dark',
                    layout: 'month_view',
                    hideEventTypeDetails: false
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e1a]/95 border-t border-slate-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Adapt Flow Deliver Consultancy Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
