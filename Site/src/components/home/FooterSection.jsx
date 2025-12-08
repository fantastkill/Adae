import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, Globe, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-br from-emerald-950 via-stone-950 to-emerald-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-medium text-white">ADAE</span>
            </div>
            <p className="text-base font-light text-stone-300 leading-relaxed">
              Associação para o Desenvolvimento Ambiental Ecológico. 
              Promovendo sustentabilidade e transformação social.
            </p>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="mailto:contato@adae.org.br"
                className="flex items-center gap-3 text-stone-300 hover:text-emerald-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-light">contato@adae.org.br</span>
              </a>
              <a
                href="https://www.adae.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-300 hover:text-emerald-400 transition-colors group"
              >
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-light">www.adae.org.br</span>
              </a>
            </div>
          </motion.div>

          {/* Localização */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium text-white mb-6">Localização</h3>
            <div className="flex items-start gap-3 text-stone-300">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="text-sm font-light leading-relaxed">
                Rua da Safira, 88<br />
                Jardim Monte Cristo<br />
                Suzano/SP
              </p>
            </div>
          </motion.div>

          {/* Informações Legais */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium text-white mb-6">Informações</h3>
            <p className="text-sm font-light text-stone-300 leading-relaxed">
              CNPJ em registro<br />
              CNAE Assistencial e Ambiental<br />
              Fundada em 17 de novembro de 2025
            </p>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm font-light text-stone-400 mb-2">
            © 2025 ADAE - Todos os direitos reservados
          </p>
          <p className="text-xs font-light text-stone-500">
            CNPJ em registro • Fundada em 17 de novembro de 2025
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
