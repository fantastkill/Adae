import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Promover o desenvolvimento sustentável e a conscientização ambiental, integrando natureza, sociedade e tecnologia para criar soluções que beneficiem as comunidades e o meio ambiente.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em projetos socioambientais que transformem comunidades e inspirem novas políticas públicas, consolidando-nos como agentes de mudança positiva no Brasil.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Ética e transparência • Sustentabilidade e inovação • Responsabilidade social • Cooperação entre sociedade civil e poder público • Respeito à diversidade e inclusão',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Missão, Visão e Valores
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-2xl mb-6">
                  <project.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-medium text-white mb-6">
                  {project.title}
                </h3>
                <p className="text-lg font-light text-stone-200 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
