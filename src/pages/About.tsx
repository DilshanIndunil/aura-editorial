import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-44 pb-32 max-w-[1280px] mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5"
        >
          <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-secondary mb-6 block">Our Story</span>
          <h1 className="text-6xl font-bold mb-12 leading-tight">Quiet Design, Loud Impact.</h1>
          <div className="aspect-square bg-brand-accent editorial-shadow relative overflow-hidden mb-12">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqp19xv6TPd9ObX9A6ja7Cv-2a9en5-B_Zha49BhwETuRE0WyKnAC9RlIzyxnEqGcRvkDuvQrTJEd7XDYqKm4F71mDsZ7AoNDiHU_9ZOdyvtRuM8P8kDMzSOVF06DDepijlDprUyG1o8J9kS14pdcTB7zWZMsuq2KAA6gJq51gP3fKBhKIzoHdtU3RsD0A96UmOhyAkpFtWYciz5pNItDOxCGuUh14GgayeXqlvVuzXXpbfz0LqX7xW523SV4XgCWbqvqRooixgX8" 
              alt="Workspace" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7 md:pt-24 space-y-12"
        >
          <p className="text-2xl text-brand-muted leading-relaxed">
            Aura Editorial was founded on the belief that the modern web has become too noisy. We are a collective of designers and developers dedicated to restoring clarity to the digital experience.
          </p>
          
          <div className="space-y-8 text-lg text-brand-muted leading-relaxed">
            <p>
              We don't follow trends. We follow the principles of timeless editorial design: hierarchy, whitespace, and intentionality. Our work is designed to be felt as much as it is seen—a slow-motion journey through content that matters.
            </p>
            <p>
              By combining high-end aesthetics with cutting-edge performance, we create digital spaces that feel like a breath of fresh air in an increasingly crowded landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-brand-primary/10">
            <div>
              <h4 className="font-display text-xs uppercase tracking-widest text-brand-secondary mb-4">Focus</h4>
              <ul className="space-y-2 text-sm">
                <li>Editorial Design</li>
                <li>Digital Strategy</li>
                <li>Visual Identity</li>
                <li>Creative Coding</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xs uppercase tracking-widest text-brand-secondary mb-4">Values</h4>
              <ul className="space-y-2 text-sm">
                <li>Intentionality</li>
                <li>Clarity</li>
                <li>Craftsmanship</li>
                <li>Longevity</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
