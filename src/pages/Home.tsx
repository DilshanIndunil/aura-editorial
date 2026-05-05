import { motion } from "motion/react";
import { 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Timer
} from "lucide-react";

const ANIM_STAGGER = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  },
};

const SectionHeader = ({ label, title, description }: { label?: string; title: string; description?: string }) => (
  <motion.div 
    variants={ANIM_STAGGER.container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-4xl"
  >
    {label && (
      <motion.span variants={ANIM_STAGGER.item} className="font-display text-xs uppercase tracking-[0.25em] text-brand-secondary mb-6 block">
        {label}
      </motion.span>
    )}
    <motion.h1 variants={ANIM_STAGGER.item} className="text-5xl md:text-6xl font-bold text-brand-text mb-8 leading-[1.1] md:leading-[1.1]">
      {title}
    </motion.h1>
    {description && (
      <motion.p variants={ANIM_STAGGER.item} className="text-xl text-brand-muted max-w-2xl leading-relaxed">
        {description}
      </motion.p>
    )}
  </motion.div>
);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="max-w-[1280px] mx-auto px-8 pt-44 pb-32">
        <SectionHeader 
          label="Our Philosophy"
          title="Crafting spaces for quiet reflection and high-end digital storytelling."
          description="Aura Editorial was born from a desire to reduce the noise of the modern web. We believe that clarity is the ultimate sophistication, and that every brand deserves a canvas that breathes."
        />
      </section>

      {/* Visual Quietude */}
      <section id="visual-quietude" className="max-w-[1280px] mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-7 aspect-[4/5] overflow-hidden editorial-shadow bg-brand-surface"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqp19xv6TPd9ObX9A6ja7Cv-2a9en5-B_Zha49BhwETuRE0WyKnAC9RlIzyxnEqGcRvkDuvQrTJEd7XDYqKm4F71mDsZ7AoNDiHU_9ZOdyvtRuM8P8kDMzSOVF06DDepijlDprUyG1o8J9kS14pdcTB7zWZMsuq2KAA6gJq51gP3fKBhKIzoHdtU3RsD0A96UmOhyAkpFtWYciz5pNItDOxCGuUh14GgayeXqlvVuzXXpbfz0LqX7xW523SV4XgCWbqvqRooixgX8" 
              alt="Minimalist architectural interior" 
              className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-[2000ms] hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            variants={ANIM_STAGGER.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-5 md:pl-8"
          >
            <motion.h2 variants={ANIM_STAGGER.item} className="text-4xl font-semibold mb-6">
              Visual Quietude
            </motion.h2>
            <motion.p variants={ANIM_STAGGER.item} className="text-lg text-brand-muted mb-10 leading-relaxed">
              Our approach targets a sophisticated audience that values clarity, calm, and deliberate pacing. We utilize a near-white blue foundation and organic accents to create an interface that feels less like a digital tool and more like a high-end editorial gallery.
            </motion.p>
            <motion.button 
              variants={ANIM_STAGGER.item}
              className="bg-brand-accent text-brand-secondary px-10 py-5 font-display text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section id="vision-grid" className="max-w-[1280px] mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* The Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 editorial-shadow flex flex-col justify-between h-[450px]"
          >
            <div>
              <Sparkles className="text-brand-secondary w-10 h-10 mb-8" />
              <h3 className="text-2xl font-semibold mb-4">The Foundation</h3>
            </div>
            <p className="text-brand-muted leading-relaxed">
              Low-contrast relationships and generous spatial breathing room define our core structural identity.
            </p>
          </motion.div>

          {/* Editorial Pacing */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 relative h-[450px] overflow-hidden group editorial-shadow"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCJ7pulTy5WdFspNcD85hl7I86ESpHFGuxugX4KV5pR5bgeT76VXVtI2qvWu23DUGY7LFqdesdxnugFTegL_h56O1abvnnJpTQRivtbK7U3XOi7IpDVngkEsJUpgE1VQ5fUN3SwXuug43w8K6v6JiVYkpHpoIjGsCuiljQxKbfiZqIdoTo_9GbjuB7bywB23jhE_FO4tX4MknEuPsXl8GUNBGCdmpW6hQyB-HMD7J_7nwzdkWVMHHN6-KL5Z0w4_lbrj3zcmf7qAI" 
              alt="Minimalist paper textures" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 via-transparent to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-semibold mb-2">Editorial Pacing</h3>
              <p className="max-w-md opacity-90 leading-relaxed">
                Transitions are intentionally slowed to maintain an ethereal, liquid-smooth atmosphere across every interaction.
              </p>
            </div>
          </motion.div>

          {/* Deliberate Detail */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative h-[450px] overflow-hidden group editorial-shadow"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaGKxiyqaT6FSeKpKzECASopmDBzQbb4Oy896qA4z-2RaAA_58gl0s_9kZOl4A5cl0vbCSq6KOlqTpC5IwGOY-c-DKOCk_f4YODcUJn_7aMcIw6kH6t8mRPlJQQF1bywvhPtpr33Sm5eqS9Dgv4UGU811dgVzROpURvlvM0FwB3WmTE9RVDMWDRiRaWFg310t4HHa16ElzNo1eMrp53i6zjMNt22YQkwx-OGldI_aJb0n8Toh4780kddx77tyjoVMm0UQyu0ktg8Q" 
              alt="Abstract composition" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 via-transparent to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-semibold mb-2">Deliberate Detail</h3>
              <p className="max-w-md opacity-90 leading-relaxed">
                Every element is treated with editorial importance, ensuring that each scroll is a journey through clarity.
              </p>
            </div>
          </motion.div>

          {/* Tonal Layers */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-12 editorial-shadow flex flex-col justify-between h-[450px]"
          >
            <div>
              <Layers className="text-brand-secondary w-10 h-10 mb-8" />
              <h3 className="text-2xl font-semibold mb-4">Tonal Layers</h3>
            </div>
            <p className="text-brand-muted leading-relaxed">
              Depth is achieved through ambient shadows and subtle value shifts rather than harsh borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment / Long Form */}
      <section id="commitment" className="max-w-[1280px] mx-auto px-8 pb-32">
        <div className="max-w-3xl mx-auto space-y-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold border-l-4 border-brand-accent pl-10 leading-tight"
          >
            Our commitment to the craft is unwavering. We don't just build websites; we curate digital legacies.
          </motion.h2>
          
          <motion.div 
            variants={ANIM_STAGGER.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 text-lg text-brand-muted leading-relaxed"
          >
            <motion.p variants={ANIM_STAGGER.item}>
              The digital landscape is often cluttered with unnecessary noise, rapid animations, and aggressive calls to action. At Aura Editorial, we pivot away from these conventions. We embrace the "Slower Scroll," a design technique that forces a focus on content through oversized vertical padding and rhythmic typography.
            </motion.p>
            <motion.p variants={ANIM_STAGGER.item}>
              Our palettes are rooted in the natural world. The near-white blues provide a sterile yet welcoming base, while the olive and soft green accents provide a connection to the organic. This hybrid of Minimalism and Soft-Modernism ensures that our work remains timeless, avoiding the pitfalls of short-lived design trends.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-[1280px] mx-auto px-8 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-surface border border-brand-primary/5 p-20 md:p-32 text-center editorial-shadow relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Timer size={200} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Begin Your Journey</h2>
          <p className="text-xl text-brand-muted mb-12 max-w-xl mx-auto leading-relaxed">
            Experience the calm of a curated digital existence. Let's create something extraordinary together.
          </p>
          <button className="bg-brand-secondary text-white px-12 py-6 font-display text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4 mx-auto group">
            Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </>
  );
}
