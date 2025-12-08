import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ScrollText } from 'lucide-react';

const ImpactSection = () => {
  return (
    <section id="sobre" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto mb-12 rounded-full" />
          <p className="text-xl font-light text-stone-700 max-w-4xl mx-auto leading-relaxed">
            A ADAE é uma associação civil sem fins lucrativos, fundada em 17 de novembro de 2025, 
            com sede em Suzano/SP. Nossa missão é promover o desenvolvimento sustentável através 
            da integração entre preservação ambiental, responsabilidade social e inovação tecnológica. 
            Atuamos em parceria com comunidades, empresas e poder público para criar soluções que 
            transformem realidades e inspirem políticas públicas efetivas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-emerald-50 to-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-stone-900 mb-4">
                  Nossa Sede
                </h3>
                <p className="text-lg font-light text-stone-700 leading-relaxed">
                  Rua da Safira, 88<br />
                  Jardim Monte Cristo<br />
                  Suzano/SP
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-emerald-50 to-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-lg">
                <ScrollText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-stone-900 mb-4">
                  Registro Legal
                </h3>
                <p className="text-lg font-light text-stone-700 leading-relaxed">
                  CNPJ em registro<br />
                  CNAE Assistencial e Ambiental<br />
                  Associação Civil sem fins lucrativos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
