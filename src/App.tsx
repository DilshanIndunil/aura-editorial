/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  X
} from "lucide-react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import About from "./pages/About";
import Inquiry from "./pages/Inquiry";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Showcase", path: "/showcase" },
    { name: "About", path: "/about" },
    { name: "Inquiry", path: "/inquiry" }
  ];

  return (
    <nav id="top-nav" className="fixed top-0 left-0 right-0 z-50 bg-brand-surface/80 backdrop-blur-md border-b border-brand-primary/5">
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex justify-between items-center">
        <Link to="/" className="font-sans text-2xl font-semibold text-brand-secondary tracking-tight">
          Aura Editorial
        </Link>
        
        <div className="hidden md:flex gap-12 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-display text-sm uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === link.path ? "text-brand-secondary" : "text-brand-muted hover:text-brand-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/showcase" id="nav-cta" className="bg-brand-secondary text-white px-8 py-3 font-display text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95">
            Browse Now
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-surface p-8 border-b border-brand-primary/5 flex flex-col gap-6"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="font-display text-sm uppercase tracking-widest text-brand-muted"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/showcase" className="bg-brand-secondary text-white px-8 py-4 font-display text-sm uppercase tracking-widest text-center" onClick={() => setIsOpen(false)}>
            Browse Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-surface border-t border-brand-primary/5 py-24">
    <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex flex-col items-center md:items-start gap-4">
        <Link to="/" className="text-2xl font-semibold text-brand-secondary">Aura Editorial</Link>
        <p className="text-brand-muted text-sm">© 2024 Aura Editorial. All rights reserved.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-10">
        {["Privacy Policy", "Terms of Service", "Sustainability", "Contact"].map((link) => (
          <a 
            key={link} 
            href="#" 
            className="text-brand-muted hover:text-brand-secondary transition-colors text-sm font-display uppercase tracking-widest"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useState(() => {
    window.scrollTo(0, 0);
  });

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/about" element={<About />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
