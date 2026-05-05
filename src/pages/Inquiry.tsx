import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Inquiry() {
  return (
    <div className="pt-44 pb-32 max-w-[1280px] mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-secondary mb-6 block">Contact</span>
          <h1 className="text-6xl font-bold mb-12">Start a Conversation</h1>
          <p className="text-xl text-brand-muted mb-16 leading-relaxed max-w-md">
            Interested in working together? We'd love to hear about your vision and how we can help bring it to life with clarity and purpose.
          </p>

          <div className="space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-secondary block mb-1">Email</span>
                <span className="text-lg">hello@auraeditorial.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-secondary block mb-1">Phone</span>
                <span className="text-lg">+1 (555) 000-0000</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-secondary block mb-1">Studio</span>
                <span className="text-lg">London / Zurich / Tokyo</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-12 md:p-16 editorial-shadow"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-secondary font-display">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-brand-primary/20 py-4 focus:outline-none focus:border-brand-secondary transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-secondary font-display">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-brand-primary/20 py-4 focus:outline-none focus:border-brand-secondary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-secondary font-display">Subject</label>
              <select className="w-full bg-transparent border-b border-brand-primary/20 py-4 focus:outline-none focus:border-brand-secondary transition-colors">
                <option>Project Inquiry</option>
                <option>Collaboration</option>
                <option>General Question</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-secondary font-display">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-brand-primary/20 py-4 focus:outline-none focus:border-brand-secondary transition-colors resize-none"
                placeholder="Tell us about your vision..."
              />
            </div>

            <button className="w-full bg-brand-secondary text-white py-6 font-display text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-4 group">
              Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
