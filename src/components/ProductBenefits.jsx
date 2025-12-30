
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ProductBenefits = ({ onCTAClick }) => {
  return (
    <section className="w-full py-16 px-6 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Qualité Exceptionnelle
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Fabriqué avec les meilleurs matériaux pour garantir durabilité et performance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <img 
            className="w-full h-auto rounded-2xl shadow-2xl"
            alt="Détails du produit premium"
           src="https://images.unsplash.com/photo-1702326626601-74d2e86922b4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={onCTAClick}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Commander maintenant
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductBenefits;
