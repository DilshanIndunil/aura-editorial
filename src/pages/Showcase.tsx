import { motion } from "motion/react";

const PROJECTS = [
  {
    title: "Ethereal Interiors",
    category: "Architecture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqp19xv6TPd9ObX9A6ja7Cv-2a9en5-B_Zha49BhwETuRE0WyKnAC9RlIzyxnEqGcRvkDuvQrTJEd7XDYqKm4F71mDsZ7AoNDiHU_9ZOdyvtRuM8P8kDMzSOVF06DDepijlDprUyG1o8J9kS14pdcTB7zWZMsuq2KAA6gJq51gP3fKBhKIzoHdtU3RsD0A96UmOhyAkpFtWYciz5pNItDOxCGuUh14GgayeXqlvVuzXXpbfz0LqX7xW523SV4XgCWbqvqRooixgX8",
  },
  {
    title: "Organic Textures",
    category: "Editorial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCJ7pulTy5WdFspNcD85hl7I86ESpHFGuxugX4KV5pR5bgeT76VXVtI2qvWu23DUGY7LFqdesdxnugFTegL_h56O1abvnnJpTQRivtbK7U3XOi7IpDVngkEsJUpgE1VQ5fUN3SwXuug43w8K6v6JiVYkpHpoIjGsCuiljQxKbfiZqIdoTo_9GbjuB7bywB23jhE_FO4tX4MknEuPsXl8GUNBGCdmpW6hQyB-HMD7J_7nwzdkWVMHHN6-KL5Z0w4_lbrj3zcmf7qAI",
  },
  {
    title: "Deliberate Lines",
    category: "Photography",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaGKxiyqaT6FSeKpKzECASopmDBzQbb4Oy896qA4z-2RaAA_58gl0s_9kZOl4A5cl0vbCSq6KOlqTpC5IwGOY-c-DKOCk_f4YODcUJn_7aMcIw6kH6t8mRPlJQQF1bywvhPtpr33Sm5eqS9Dgv4UGU811dgVzROpURvlvM0FwB3WmTE9RVDMWDRiRaWFg310t4HHa16ElzNo1eMrp53i6zjMNt22YQkwx-OGldI_aJb0n8Toh4780kddx77tyjoVMm0UQyu0ktg8Q",
  },
  {
    title: "Shadow Play",
    category: "Branding",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9iOaO6tFw7_z7u7e6k4X-y9u0h0o2y8r9t7u6y5r4t3e2w1q0p9o8n7m6l5k4j3h2g1f0e9d8c7b6a5",
  }
];

export default function Showcase() {
  return (
    <div className="pt-44 pb-32 max-w-[1280px] mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <span className="font-display text-xs uppercase tracking-[0.25em] text-brand-secondary mb-6 block">Curated Works</span>
        <h1 className="text-6xl font-bold mb-8">Showcase</h1>
        <p className="text-xl text-brand-muted max-w-2xl leading-relaxed">
          A selection of projects where clarity meets purpose. Each piece is a testament to our commitment to visual quietude.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden editorial-shadow mb-8 bg-brand-surface relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-500" />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="font-display text-xs uppercase tracking-widest text-brand-secondary block mb-2">{project.category}</span>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <div className="w-12 h-[1px] bg-brand-secondary group-hover:w-20 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
