import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Building2,
  Key,
  Layers,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm">
            <span className="text-white font-display font-bold text-xl tracking-tighter">SH</span>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-brand-900' : 'text-brand-900 md:text-white'}`}>
            SRI HIMAGHNA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-brand-700' : 'text-brand-700 md:text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-brand-900' : 'text-brand-900 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-brand-800 py-2 border-b border-brand-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-accent text-white px-6 py-3 rounded-sm text-center font-semibold mt-4">
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-accent font-semibold tracking-widest text-sm mb-4 uppercase">
            Custom Design & Execution
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 leading-[1.1]">
            Elevate Your Space with <span className="text-accent">Sri Himaghna</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            We transform visions into reality. From residential sanctuaries to commercial landmarks,
            we provide end-to-end interior design and turnkey execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all group">
              Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-sm font-bold hover:bg-white/20 transition-all">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex gap-8 text-white/50">
          <div className="flex flex-col">
            <span className="text-3xl font-display font-bold text-white">150+</span>
            <span className="text-xs uppercase tracking-widest">Projects Done</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-display font-bold text-white">10+</span>
            <span className="text-xs uppercase tracking-widest">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Residential Interiors",
      description: "Crafting personalized homes that reflect your lifestyle and comfort. From luxury villas to modern apartments.",
      icon: <Home className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1616486341351-792bbaf1a00c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Commercial Interiors",
      description: "Designing productive and inspiring workspaces that enhance brand identity and employee well-being.",
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Turnkey Execution",
      description: "Hassle-free end-to-end execution. We handle everything from procurement to the final finishing touches.",
      icon: <Key className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "2D & 3D Design",
      description: "Visualizing your space before it's built with high-fidelity 3D renders and precise technical 2D layouts.",
      icon: <Layers className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="section-padding bg-brand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest text-sm uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-brand-900">Our Core Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-brand-100 group transition-all"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-900">{service.title}</h3>
              <p className="text-brand-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="text-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Modern Minimalist Villa", category: "Residential", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
    { title: "Tech Hub Office", category: "Commercial", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" },
    { title: "Luxury Penthouse", category: "Residential", img: "https://images.unsplash.com/photo-1600607687940-47a0f9259d4b?auto=format&fit=crop&q=80&w=800" },
    { title: "Boutique Retail Space", category: "Commercial", img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800" },
    { title: "Contemporary Kitchen", category: "Residential", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
    { title: "Executive Boardroom", category: "Commercial", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-accent font-semibold tracking-widest text-sm uppercase">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-brand-900">Featured Projects</h2>
          </div>
          <button className="text-brand-900 font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden aspect-[4/5]"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                <button className="mt-4 text-white/70 text-sm flex items-center gap-2 hover:text-white transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold tracking-widest text-sm uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
            We Design Spaces That <br />
            <span className="text-accent">Tell Your Story</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Sri Himaghna is a premier interior design and execution firm dedicated to creating
            exceptional environments. With a focus on innovation, craftsmanship, and client
            satisfaction, we bring a unique perspective to every project.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              "Customized Design Solutions",
              "Expert Execution Team",
              "Quality Material Sourcing",
              "Timely Project Delivery",
              "Transparent Pricing",
              "Post-Completion Support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                <span className="text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="bg-accent text-white px-8 py-4 rounded-sm font-bold hover:bg-accent/90 transition-all">
            Our Process
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-sm overflow-hidden border-8 border-white/10">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000"
              alt="Our Team at Work"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-sm shadow-2xl hidden md:block">
            <p className="text-4xl font-bold mb-1">100%</p>
            <p className="text-sm font-medium uppercase tracking-widest opacity-80">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="text-accent font-semibold tracking-widest text-sm uppercase">Contact Us</span>
            <h2 className="text-4xl font-bold mt-4 mb-8 text-brand-900">Let's Discuss Your Project</h2>
            <p className="text-brand-600 mb-10">
              Ready to transform your space? Get in touch with our design experts today for a free consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shadow-sm text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-brand-900 font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shadow-sm text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-brand-900 font-bold">info@srihimaghna.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shadow-sm text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-brand-900 font-bold leading-relaxed">
                    Plot no.281/2, Yosufguda,Venkatagiri, Jubilee Hills,<br />
                    Hyderabad, Telangana 500033
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-100 grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-100 rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-700">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-100 rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-100 rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-700">Service Interested In</label>
                <select className="w-full px-4 py-3 bg-brand-50 border border-brand-100 rounded-sm focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option>Residential Interiors</option>
                  <option>Commercial Interiors</option>
                  <option>Turnkey Execution</option>
                  <option>2D & 3D Design</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-brand-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-brand-50 border border-brand-100 rounded-sm focus:outline-none focus:border-accent transition-colors"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-brand-900 text-white py-4 rounded-sm font-bold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm">
                <span className="text-white font-display font-bold text-lg tracking-tighter">SH</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">SRI HIMAGHNA <br> Interiors & Designing </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium interior design and execution services for residential and commercial spaces.
              We bring your dream spaces to life with precision and style.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Residential Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Office Interiors</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Turnkey Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">3D Visualization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Custom Furniture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Subscribe to get the latest design trends and project updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-l-sm focus:outline-none w-full text-sm"
              />
              <button className="bg-accent px-4 py-3 rounded-r-sm hover:bg-accent/90 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs uppercase tracking-widest font-bold">
          <p>© 2026 Sri Himaghna Interiors. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
