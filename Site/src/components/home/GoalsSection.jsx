import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Sprout, GraduationCap, Trees, Apple, Scale, Users } from 'lucide-react';

const GoalsSection = () => {
  const goals = [
    {
      icon: TreePine,
      text: 'Conservar e restaurar matas nativas e nascentes',
    },
    {
      icon: Sprout,
      text: 'Produzir e distribuir mudas e sementes nativas',
    },
    {
      icon: GraduationCap,
      text: 'Desenvolver projetos de educação ambiental',
    },
    {
      icon: Trees,
      text: 'Implementar agroflorestas e reflorestamentos',
    },
    {
      icon: Apple,
      text: 'Promover segurança alimentar e combate à fome',
    },
    {
      icon: Scale,
      text: 'Apoiar políticas públicas ambientais e sociais',
    },
    {
      icon: Users,
      text: 'Capacitar comunidades e formar agentes ambientais locais',
    },
  ];

  const assistance = [
    {
      emoji: '🍎',
      title: 'Distribuição de Alimentos',
      description: 'Programas de distribuição de alimentos e hortas comunitárias',
    },
    {
      emoji: '🌍',
      title: 'Educação Ambiental',
      description: 'Educação ambiental em escolas e bairros vulneráveis',
    },
    {
      emoji: '👥',
      title: 'Capacitação Social',
      description: 'Projetos de capacitação e reintegração social',
    },
    {
      emoji: '💊',
      title: 'Saúde e Saneamento',
      description: 'Campanhas de saúde e saneamento básico',
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Objetivos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Nossos Objetivos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg">
                <goal.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl font-light text-stone-800">
                {goal.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Atuação Assistencial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Atuação Assistencial
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assistance.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-medium text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-base font-light text-stone-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
