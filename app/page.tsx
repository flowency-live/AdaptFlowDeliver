'use client'

import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary-400">AFD</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
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

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-[#0a0e1a] to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
                ADAPT FLOW DELIVER
              </h1>
              <p className="text-xl md:text-2xl text-primary-400 font-medium">
                CONSULTANCY LTD
              </p>
            </div>

            <div className="mt-12 mb-12">
              <p className="text-2xl md:text-3xl text-slate-300 font-light leading-relaxed">
                End-to-end delivery. <br className="hidden md:block" />
                Capability uplift. <br className="hidden md:block" />
                Value with clarity.
              </p>
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">About Us</h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Adapt Flow Deliver helps organisations design and embed simple, scalable and customer-centric delivery systems.
            </p>

            <p>
              We support leaders and teams in moving from complex, reactive ways of working to clear, predictable and value-focused operating models.
            </p>

            <div className="bg-slate-800/50 p-8 rounded-lg shadow-sm border border-primary-500/20 my-8">
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
              We blend strategy, operating model design and modern delivery practices to uplift capability across the entire organisation — from leadership through to teams on the ground.
            </p>

            <p className="text-center text-slate-400 italic pt-4">
              Founded by Rebecca Forrest, we work globally across financial services, engineering, data, product and digital organisations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">What We Do</h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-primary-500/20 hover:border-primary-400/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all">
              <div className="text-primary-400 text-3xl font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Strategy → Operating Model Alignment
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Supporting organisations to translate strategic goals into practical, scalable ways of working that teams can confidently deliver against.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-secondary-500/20 hover:border-secondary-400/50 hover:shadow-lg hover:shadow-secondary-500/10 transition-all">
              <div className="text-secondary-400 text-3xl font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                End-to-End Delivery Transformation
              </h3>
              <p className="text-slate-300 leading-relaxed">
                From idea to delivery, we simplify systems, improve flow, and remove the friction that prevents teams from delivering real customer value.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-primary-500/20 hover:border-primary-400/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all">
              <div className="text-primary-400 text-3xl font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Capability Uplift Across Teams & Leadership
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Building capability is at the heart of everything we do — skills, mindset, clarity, confidence and alignment.
              </p>
              <p className="text-sm text-slate-400 italic">
                (Kanban and flow-based delivery are areas of specialist expertise.)
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-secondary-500/20 hover:border-secondary-400/50 hover:shadow-lg hover:shadow-secondary-500/10 transition-all">
              <div className="text-secondary-400 text-3xl font-bold mb-4">04</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Customer-Centric Ways of Working
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Helping teams prioritise work that genuinely delivers customer value, with clear demand shaping, simple prioritisation, and improved decision-making.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-primary-500/20 hover:border-primary-400/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all">
              <div className="text-primary-400 text-3xl font-bold mb-4">05</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Flow, Data & Insight-Driven Delivery
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Translating data into visibility: cycle time, throughput, blockers, risks, forecasting — explained in plain English so leaders can make better decisions.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-secondary-500/20 hover:border-secondary-400/50 hover:shadow-lg hover:shadow-secondary-500/10 transition-all">
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

      {/* About Rebecca Section */}
      <section id="rebecca" className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">About Rebecca Forrest</h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
          </div>

          <div className="bg-slate-800/50 p-8 md:p-12 rounded-lg shadow-sm border border-primary-500/20">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Rebecca is a delivery transformation lead who specialises in simplifying complex delivery environments, uplifting capability, and helping organisations become more customer-centric and value-focused.
              </p>

              <p>
                She blends strategy, operating model design and practical delivery experience to help teams understand their system, improve flow, and build confidence in how work moves from idea to customer.
              </p>

              <p>
                Rebecca partners with <span className="font-semibold text-primary-400">Adaptavis</span> and <span className="font-semibold text-primary-400">Flowency</span> on large-scale transformation, capability-building and flow-maturity programmes, working with organisations who want clearer delivery, stronger alignment and more predictable value outcomes.
              </p>

              <p>
                She has deep expertise in flow-based delivery and Kanban, but her real strength is bringing <span className="font-semibold text-slate-100">clarity, calm and capability uplift</span> to organisations navigating complexity.
              </p>

              <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-6 rounded-lg mt-8 border border-primary-500/20">
                <p className="font-semibold text-slate-100 mb-3">Her work spans:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Aviation engineering</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-400 mr-2">•</span>
                    <span>Financial services</span>
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
                    <span>Digital engineering</span>
                  </div>
                </div>
                <p className="mt-4 text-slate-400">
                  Across the UK, Europe and the Middle East.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0a0e1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Let&apos;s Talk
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to simplify delivery, build capability, and create lasting value? Get in touch to discuss how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-primary-500/20">
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Tell us about your delivery challenges and what you're looking to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Cal.com Embed Placeholder */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-secondary-500/20">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Book a Call</h3>
              <div className="bg-slate-900/50 p-8 rounded-lg border border-primary-500/20 min-h-[500px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">📅</div>
                  <p className="text-lg text-slate-200 font-semibold">Calendar Booking</p>
                  <p className="text-sm text-slate-400">
                    Cal.com integration will be configured here
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    (Rebecca: Please provide your Cal.com booking link)
                  </p>
                </div>
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
