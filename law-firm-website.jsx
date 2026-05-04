import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Briefcase, Scale, Users, Truck, CreditCard, Gavel, Shield, Home, Handshake, TrendingUp, Mail, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const LawFirmWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 3000);
  };

  const services = [
    { name: 'Commercial Law', icon: Briefcase, description: 'Contract drafting, negotiations, and business advisory' },
    { name: 'Labour Law', icon: Users, description: 'Employment disputes and HR compliance' },
    { name: 'Family Law', icon: Home, description: 'Matrimonial and children matters' },
    { name: 'Road Freight Law', icon: Truck, description: 'Transport and logistics legal services' },
    { name: 'Debt Collection', icon: CreditCard, description: 'Efficient debt recovery solutions' },
    { name: 'Civil Litigation', icon: Scale, description: 'Expert representation in civil disputes' },
    { name: 'Criminal Litigation', icon: Gavel, description: 'Comprehensive criminal defense' },
    { name: 'Trusts & Estates', icon: Home, description: 'Estate planning and administration' },
    { name: 'Agency Work', icon: Handshake, description: 'Professional agent representation' },
    { name: 'Competition Law', icon: TrendingUp, description: 'Compliance and competition matters' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollPosition > 50
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <span className="text-xl font-serif font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              KG & Co
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-amber-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-amber-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-amber-400 transition">
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-semibold rounded-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-amber-500/10 p-4 space-y-3 animate-in slide-in-from-top-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-amber-400 transition font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-amber-400 transition font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-amber-400 transition font-medium">
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 px-6 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight">
              Exceptional
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Legal Expertise
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Modern, innovative, and expert legal solutions for even the most complex matters.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Contact Our Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 border border-amber-400/50 text-amber-300 font-semibold rounded-lg hover:bg-amber-400/10 transition-all"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-amber-400/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">About Us</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 leading-tight">
                  Client-Focused.
                  <br />
                  <span className="text-amber-400">Purpose-Driven.</span>
                </h2>
              </div>

              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  Keenan Govender and Company combines legal excellence with a commitment to understanding our clients' unique challenges. We don't just practice law—we partner with you to achieve meaningful results.
                </p>
                <p className="text-lg leading-relaxed">
                  Our approach is straightforward: practical law, personalised service, and desired results. Whether you're navigating complex commercial transactions or facing litigation, we deliver strategic guidance backed by decades of expertise.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Expert Representation</h3>
                    <p className="text-slate-400 text-sm">Trusted by individuals and corporations</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                    <Handshake className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Collaborative Partnership</h3>
                    <p className="text-slate-400 text-sm">Your goals become our mission</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/50 backdrop-blur border border-amber-400/20 rounded-2xl p-8 space-y-6">
                <div className="text-center py-12">
                  <div className="text-5xl font-serif font-bold text-amber-400">50+</div>
                  <p className="text-slate-400 mt-2">Years Combined Experience</p>
                </div>
                <div className="space-y-3 border-t border-amber-400/10 pt-6">
                  <p className="text-amber-400 font-semibold">Our Philosophy</p>
                  <p className="text-slate-300 italic">
                    "Embracing innovation while respecting the principles that make law practice trustworthy and effective."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4 md:py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Our Practice Areas</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Comprehensive Legal
              <br />
              <span className="text-amber-400">Solutions</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              From commercial transactions to complex litigation, we provide expert guidance across all major practice areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-400/10 rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all">
                    <IconComponent className="w-7 h-7 text-slate-950" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-amber-400 opacity-0 group-hover:opacity-100 transition">
                    <span className="text-xs font-semibold">Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4">
                  Ready to Discuss
                  <br />
                  <span className="text-amber-400">Your Legal Needs?</span>
                </h2>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed">
                Contact us today for a confidential consultation. Our team is ready to provide expert guidance on your specific situation.
              </p>

              <div className="space-y-4 pt-4">
                <a href="tel:0614349865" className="flex items-center gap-4 p-4 bg-slate-900/50 border border-amber-400/10 rounded-lg hover:border-amber-400/40 hover:bg-slate-900/80 transition group">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center border border-amber-400/30 group-hover:bg-amber-400/20 transition">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="text-white font-semibold">061 434 9865</p>
                  </div>
                </a>

                <a href="mailto:info@kgandco.co.za" className="flex items-center gap-4 p-4 bg-slate-900/50 border border-amber-400/10 rounded-lg hover:border-amber-400/40 hover:bg-slate-900/80 transition group">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center border border-amber-400/30 group-hover:bg-amber-400/20 transition">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-white font-semibold">info@kgandco.co.za</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-amber-400/10 rounded-lg">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center border border-amber-400/30">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Business Hours</p>
                    <p className="text-white font-semibold">Mon – Fri (08h00 – 16h30)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl blur-2xl"></div>
              <form onSubmit={handleSubmit} className="relative bg-slate-900/50 backdrop-blur border border-amber-400/20 rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Practice Area</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition">
                    <option>Select a practice area</option>
                    {services.map((service, idx) => (
                      <option key={idx}>{service.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    required
                    rows="4"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition resize-none"
                    placeholder="Tell us about your legal matter..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-semibold py-3 rounded-lg hover:shadow-xl hover:shadow-amber-500/40 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center animate-in fade-in">
                    ✓ Thank you! We'll be in touch shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-amber-400/10 bg-slate-950/50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-slate-950" />
                </div>
                <span className="font-serif font-bold text-lg">KG & Co Attorneys</span>
              </div>
              <p className="text-slate-400 text-sm">Exceptional legal expertise for your most complex matters.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition">Home</button>
                <br />
                <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition">About Us</button>
                <br />
                <button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition">Services</button>
                <br />
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition">Contact</button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>📞 061 434 9865</p>
                <p>📧 info@kgandco.co.za</p>
                <p>⏰ Mon – Fri: 08h00 – 16h30</p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-400/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2024 Keenan Govender and Company. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }

        * {
          font-family: var(--font-sans);
        }

        .font-serif {
          font-family: var(--font-serif);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slide-in-from-top 0.3s ease-out;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(217, 119, 6, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(217, 119, 6, 0.8);
        }

        /* Form focus states */
        input:focus,
        textarea:focus,
        select:focus {
          box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
        }

        /* Gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Smooth transitions */
        * {
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        /* Button interactions */
        button:active {
          transform: scale(0.98);
        }

        /* Service card hover effect */
        .group {
          position: relative;
        }

        .group:hover {
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default LawFirmWebsite;
