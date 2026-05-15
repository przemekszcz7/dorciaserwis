import { motion } from 'motion/react';

export const ServiceCard = ({ icon: Icon, title, description, badge }: { icon: any, title: string, description: string, badge?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    className="tech-card group"
  >
    <div className="flex flex-col h-full">
      <div className="mb-4 p-3 bg-accent/5 rounded-lg w-fit group-hover:bg-accent/10 transition-colors duration-300">
        <Icon className="w-8 h-8 text-accent transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-text-main tracking-tight">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed flex-grow">{description}</p>
      {badge && (
        <div className="mt-4">
          <span className="badge-status">{badge}</span>
        </div>
      )}
    </div>
  </motion.div>
);
