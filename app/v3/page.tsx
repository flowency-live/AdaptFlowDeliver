'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalEmbed } from '@/components/CalEmbed'

export default function HomeV3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Navigation */}
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
              <a href="/v3" className="text-primary-400 font-semibold text-sm">V3</a>
              <a href="/v4" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V4</a>
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
                  <a href="/v3" className="text-primary-400 font-semibold text-sm">V3</a>
                  <a href="/v4" className="text-slate-400 hover:text-primary-400 transition-colors font-medium text-sm">V4</a>
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

      {/* Hero Section - Primary Gradient with strong geometric accents */}
      <section id="hero" className="pt-28 pb-32 md:pb-40 bg-gradient-to-br from-slate-900 via-[#0a0e1a] to-primary-950 relative overflow-hidden border-b-4 border-primary-500/50">
        {/* Geometric accent elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-sm md:text-base text-primary-300 uppercase tracking-wider font-semibold">
                  Delivery Optimisation Experts
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-50 tracking-tight leading-none">
                  Adapt Flow Deliver
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-primary-300 font-medium leading-relaxed max-w-4xl mx-auto pt-4">
                  We strengthen what works - and streamline what slows you down.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
                  End-to-end delivery. Capability uplift. Clear, scalable ways of working.
                </p>
                <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                  We help organisations design and embed simple, scalable, customer-centric delivery systems.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 text-lg"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-primary-400 hover:border-primary-300 text-primary-400 hover:text-primary-300 font-semibold px-10 py-5 rounded-lg transition-all text-lg"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - MUCH LIGHTER for high contrast */}
      <section id="about" className="py-32 md:py-40 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 relative border-b-4 border-primary-500/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm md:text-base text-primary-300 uppercase tracking-wider font-semibold mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 tracking-tight">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Adapt Flow Deliver helps organisations design and embed simple, scalable and customer-centric delivery systems.
            </p>

            <p>
              We support leaders and teams as they shift from complex, reactive ways of working to clear, predictable and value-focused operating models.
            </p>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-lg shadow-sm border border-primary-500/30 my-8">
              <p className="text-xl font-semibold text-slate-100 mb-6">Our belief is straightforward:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 text-2xl">→</span>
                  <span>When people understand how the system works, capability grows.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 text-2xl">→</span>
                  <span>When capability grows, value flows.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 text-2xl">→</span>
                  <span>When value flows, customers win.</span>
                </li>
              </ul>
            </div>

            <p>
              We blend strategy, operating model design and modern delivery practices to uplift capability across the entire organisation - from leadership through to teams on the ground.
            </p>

            <p className="text-center text-slate-400 italic pt-4">
              Founded by Rebecca Forrest, we work globally across aviation, financial services, global energy, engineering, data, product, digital and publishing organisations.
            </p>
            <p className="text-center text-slate-400 italic">
              Across the UK, Europe, the Middle East and Asia Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - VERY DARK for high contrast */}
      <section id="services" className="py-32 md:py-40 bg-gradient-to-br from-[#020305] via-[#050810] to-[#020305] relative overflow-hidden border-b-4 border-secondary-500/60">
        {/* Secondary accent elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-secondary-500/15 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm md:text-base text-secondary-300 uppercase tracking-wider font-semibold mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 tracking-tight">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-secondary-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Supporting organisations through transformation, capability building and value delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-lg border-2 border-primary-500/40 hover:border-primary-400/80 hover:shadow-xl hover:shadow-primary-500/30 transition-all">
              <div className="text-primary-400 text-3xl font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Strategy → Operating Model Alignment
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Supporting organisations to translate strategic goals into practical, scalable ways of working that teams can confidently deliver against.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-lg border-2 border-secondary-500/40 hover:border-secondary-400/80 hover:shadow-xl hover:shadow-secondary-500/30 transition-all">
              <div className="text-secondary-400 text-3xl font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                End-to-End Delivery Transformation
              </h3>
              <p className="text-slate-300 leading-relaxed">
                From idea to delivery, we simplify systems, improve flow, and remove the friction that prevents teams from delivering real customer value.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-lg border-2 border-primary-500/40 hover:border-primary-400/80 hover:shadow-xl hover:shadow-primary-500/30 transition-all">
              <div className="text-primary-400 text-3xl font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Capability Uplift Across Teams & Leadership
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Building capability is at the heart of everything we do - skills, mindset, clarity, confidence and alignment.
              </p>
              <p className="text-sm text-slate-400 italic">
                (Kanban and flow-based delivery are areas of specialist expertise.)
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-lg border-2 border-secondary-500/40 hover:border-secondary-400/80 hover:shadow-xl hover:shadow-secondary-500/30 transition-all">
              <div className="text-secondary-400 text-3xl font-bold mb-4">04</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Customer-Centric Ways of Working
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Helping teams prioritise work that genuinely delivers customer value, with clear demand shaping, simple prioritisation, and improved decision-making.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-lg border-2 border-primary-500/40 hover:border-primary-400/80 hover:shadow-xl hover:shadow-primary-500/30 transition-all">
              <div className="text-primary-400 text-3xl font-bold mb-4">05</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Flow, Data & Insight-Driven Delivery
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Translating data into visibility: cycle time, throughput, blockers, risks, forecasting - explained in plain English so leaders can make better decisions.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-lg border-2 border-secondary-500/40 hover:border-secondary-400/80 hover:shadow-xl hover:shadow-secondary-500/30 transition-all">
              <div className="text-secondary-400 text-3xl font-bold mb-4">06</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Collaboration & Cross-Team Alignment
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Creating smoother coordination across departments, reducing noise, clarifying ownership, and giving everyone visibility of how value moves through the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People Development Section - LIGHTER with strong primary tint */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-slate-800 via-primary-950/60 to-slate-800 relative border-b-4 border-primary-500/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm md:text-base text-primary-300 uppercase tracking-wider font-semibold mb-4">
              At the Heart of Everything
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 tracking-tight">
              People Development
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed text-center">
              Empowering individuals and teams through continuous learning, skill growth, and leadership development to drive lasting organisational capability.
            </p>

            <div className="bg-gradient-to-br from-primary-950/40 to-slate-900/60 p-10 rounded-2xl border-2 border-primary-500/30 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                We believe capability is built through people, not processes. Our coaching and development approach focuses on progressive skill growth, building confidence, and creating environments where teams can continuously learn and adapt.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-primary-400 mr-3 text-xl">→</span>
                    <span className="text-slate-300">Leadership coaching and capability building</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-400 mr-3 text-xl">→</span>
                    <span className="text-slate-300">Team development and continuous learning</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-400 mr-3 text-xl">→</span>
                    <span className="text-slate-300">Kanban and flow-based delivery training</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-primary-400 mr-3 text-xl">→</span>
                    <span className="text-slate-300">Operating model and delivery practice uplift</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-400 mr-3 text-xl">→</span>
                    <span className="text-slate-300">Building confidence through clarity and coaching</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-400 mr-3 text-xl">→</span>
                    <span className="text-slate-300">Creating sustainable learning cultures</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed italic pt-4 border-t border-primary-500/30">
                We amplify what already works in your teams and remove the barriers that prevent them from growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Rebecca Section - VERY DARK with strong accents */}
      <section id="rebecca" className="py-32 md:py-40 bg-gradient-to-br from-[#020305] via-[#0a0520] to-[#020305] relative overflow-hidden border-b-4 border-primary-500/60">
        {/* Mixed accent elements */}
        <div className="absolute top-10 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm md:text-base text-primary-300 uppercase tracking-wider font-semibold mb-4">
              Founder
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 tracking-tight">
              Rebecca Forrest
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
          </div>

          <div className="bg-slate-800/70 p-8 md:p-12 rounded-lg shadow-sm border border-primary-500/30">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Rebecca is a delivery transformation lead who specialises in simplifying complex delivery environments, uplifting capability, and helping organisations become more customer-centric and value-focused.
              </p>

              <p>
                She blends strategy, operating model design and practical delivery experience to help teams understand their system, improve flow, and build confidence in how work moves from idea to customer.
              </p>

              <p>
                Rebecca partners with <a href="https://www.adaptavis.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors underline decoration-primary-400/30 hover:decoration-primary-300">Adaptavis</a> and <a href="https://www.flowency.co.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors underline decoration-primary-400/30 hover:decoration-primary-300">Flowency</a> on large-scale transformation, capability-building and flow-maturity programmes, working with organisations who want clearer delivery, stronger alignment and more predictable value outcomes.
              </p>

              <p>
                She has deep expertise in flow-based delivery and Kanban, but her real strength is bringing <span className="font-semibold text-slate-100">clarity, calm and capability uplift</span> to organisations navigating complexity.
              </p>

              <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 p-6 rounded-lg mt-8 border border-primary-500/30">
                <p className="font-semibold text-slate-100 mb-3">Her work spans:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Aviation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Financial services</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Global energy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Data</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Product</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Digital</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Publishing</span>
                  </div>
                </div>
                <p className="mt-4 text-slate-400">
                  Across the UK, Europe, the Middle East and Asia Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - LIGHTER with secondary tint for final contrast */}
      <section id="contact" className="py-32 md:py-40 bg-gradient-to-br from-slate-700 via-secondary-900 to-slate-800 relative overflow-hidden border-b-4 border-secondary-500/60">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm md:text-base text-secondary-300 uppercase tracking-wider font-semibold mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 tracking-tight">
              Let&apos;s Talk
            </h2>
            <div className="w-24 h-1 bg-secondary-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to simplify delivery, build capability, and create lasting value? Get in touch to discuss how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-slate-800/60 p-8 rounded-lg border border-secondary-500/30">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 transition-all"
                    placeholder="Your organisation (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 transition-all resize-none"
                    placeholder="Tell us about your delivery challenges and what you're looking to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:shadow-secondary-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Cal.com Embed */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-lg border border-secondary-500/30">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Book a Call</h3>
              <div className="bg-slate-900/80 rounded-lg border border-secondary-500/30" style={{ minHeight: '600px' }}>
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
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Adapt Flow Deliver Consultancy Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
