import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const JoinSection = () => {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@adae.org.br',
      link: 'mailto:contato@adae.org.br',
    },
    {
      icon: Globe,
      title: 'Website',
      info: 'www.adae.org.br',
      link: 'https://www.adae.org.br',
    },
    {
      icon: MapPin,
      title: 'Sede',
      info: 'Rua da Safira, 88, Jardim Monte Cristo, Suzano/SP',
      link: null,
    },
  ];

  const socials = [
    {
      icon: Instagram,
      name: 'Instagram',
      gradient: 'from-pink-500 to-purple-600',
      link: '#',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      gradient: 'from-blue-600 to-blue-700',
      link: '#',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      gradient: 'from-blue-500 to-blue-600',
      link: '#',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      gradient: 'from-sky-400 to-sky-600',
      link: '#',
    },
  ];

  return (
    <section id="contato" className="py-32 px-6 bg-gradient-to-br from-stone-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        {/* Contatos */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-lg mb-4">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-3">
                  {contact.title}
                </h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-light text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-base font-light text-stone-700">
                    {contact.info}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Redes Sociais */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-light text-stone-900 mb-3">
            Siga-nos nas Redes Sociais
          </h3>
          <p className="text-lg font-light text-stone-600">
            Em breve em nossas plataformas
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mb-20">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`p-4 bg-gradient-to-br ${social.gradient} rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <social.icon className="w-6 h-6 text-white" />
            </motion.a>
          ))}
        </div>

        {/* Citação do Presidente */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-900 to-stone-800 p-12 md:p-16 rounded-3xl shadow-2xl"
        >
          <p className="text-xl md:text-2xl font-light text-white italic leading-relaxed mb-8">
            "A ADAE nasce do compromisso coletivo de restaurar o equilíbrio entre o ser humano e a natureza. 
            Nossa força está na união entre pessoas, empresas e poder público — porque sustentabilidade é, 
            antes de tudo, um pacto social."
          </p>
          <div className="text-right">
            <p className="text-lg font-medium text-amber-400 mb-1">
              João Vitor dos Santos Matos
            </p>
            <p className="text-base font-light text-stone-300">
              Presidente da ADAE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
