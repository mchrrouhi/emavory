import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import OrderForm from '@/components/OrderForm';
import CtaSection from '@/components/CtaSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Toaster } from '@/components/ui/toaster';
import { Star, Check, Zap, ShieldCheck, Leaf, Activity, Clock, AlertTriangle, TrendingUp, Users, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const META_PIXEL_ID = '2086083242209090';

// Pricing for Sumifun Odor Removal Cream
const sumifunOffers = [
  {
    id: '1',
    quantity: '1 Tube (Test Découverte)',
    price: 15000,
    value: '1 Tube - 15.000 FCFA',
    savings: null
  },
  {
    id: '2',
    quantity: '2 Tubes (Cure Complète)',
    price: 27000,
    isBest: true,
    value: '2 Tubes - 27.000 FCFA',
    savings: 'Économisez 3.000 FCFA'
  },
  {
    id: '3',
    quantity: '3 Tubes (Protection Totale)',
    price: 36000,
    value: '3 Tubes - 36.000 FCFA',
    savings: 'Économisez 9.000 FCFA'
  }
];

export default function Test2Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 12, seconds: 45 });
  const [stockLeft, setStockLeft] = useState(15);

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fake Stock Depletion Logic
  useEffect(() => {
    const stockTimer = setInterval(() => {
      setStockLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 20000);
    return () => clearInterval(stockTimer);
  }, []);

  return (
    <>
      <Helmet>
        <title>SUMIFUN: Crème Éliminatrice d'Odeurs Intimes - 100% Naturel</title>
        <meta name="description" content="Dites adieu aux odeurs intimes avec la crème SUMIFUN. 100% naturel, efficace, antibactérien. Livraison partout en Afrique." />
        
        {/* Meta Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1"
            />
          `}
        </noscript>
      </Helmet>

      {/* Sticky Urgency Header */}
      <div className="bg-red-600 text-white text-xs font-bold py-2 px-4 text-center sticky top-0 z-40 shadow-md animate-pulse">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" />
          <span>OFFRE SPÉCIALE : Expire dans {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white w-full max-w-md mx-auto shadow-2xl overflow-hidden flex flex-col font-sans">
        
        {/* HERO SECTION */}
        <div className="relative w-full bg-gradient-to-b from-pink-100 to-white pt-6 pb-8">
          <div className="px-4 mb-6">
            {/* Scarcity Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 flex items-center gap-2 text-red-700 text-xs font-bold">
              <AlertTriangle className="w-4 h-4 shrink-0 fill-red-100" />
              <p>Attention: Très demandé. Plus que <span className="underline text-red-800">{stockLeft} tubes</span> en stock cette semaine.</p>
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-3">
              Retrouvez <span className="text-pink-600 underline decoration-pink-200 decoration-4 underline-offset-2">Votre Confiance Intérieure</span>
            </h1>
            <p className="text-gray-700 text-sm font-semibold mb-2">
              La solution naturelle que les femmes africaines attendaient
            </p>
            <p className="text-gray-600 text-xs italic">
              "Finis les complexes... Vous êtes tellement plus belle quand vous vous sentez bien dans votre peau."
            </p>
          </div>

          {/* Main Product Image */}
          <div className="relative px-2 mb-4">
            <img 
              className="w-full h-auto object-contain rounded-xl shadow-lg border-2 border-pink-100" 
              alt="Crème SUMIFUN Éliminatrice d'Odeurs Intimes - 100% Naturel"
              src="https://i.ibb.co/xSqN9yL/sumifun-main.jpg"
              loading="eager"
            />
            {/* Social Proof Badge */}
            <div className="absolute -bottom-4 -right-2 bg-white text-pink-800 text-xs font-bold px-3 py-2 rounded-l-full shadow-md border-r-4 border-pink-600 flex items-center gap-1">
              <Heart className="w-3 h-3 fill-pink-600" />
              2,000+ Femmes Conquises
            </div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="px-4 py-8 bg-white mt-4">
          <CtaSection onClick={() => setIsModalOpen(true)} />
          <p className="text-center text-[10px] text-pink-500 mt-3 font-bold animate-pulse">
            🔥 34 femmes regardent cette offre en ce moment
          </p>
        </div>

        {/* PROBLEM SECTION - THE REAL ISSUE */}
        <div className="py-8 px-5 bg-gradient-to-b from-pink-50 to-white border-t border-b border-pink-100">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Vous souffrez en silence ?</h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="bg-pink-100 p-2 rounded-full shrink-0 mt-1">
                <Activity className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-700 font-semibold">Odeurs désagréables</p>
                <p className="text-xs text-gray-600 mt-1">Peu importe combien vous nettoyez, l'odeur revient toujours</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-pink-100 p-2 rounded-full shrink-0 mt-1">
                <Activity className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-700 font-semibold">Infections récurrentes</p>
                <p className="text-xs text-gray-600 mt-1">Leucorrhées anormales, inflammations bactériennes</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-pink-100 p-2 rounded-full shrink-0 mt-1">
                <Activity className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-700 font-semibold">Gêne et douleurs</p>
                <p className="text-xs text-gray-600 mt-1">Démangeaisons et douleurs vaginales chroniques</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-pink-100 p-2 rounded-full shrink-0 mt-1">
                <Activity className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-700 font-semibold">Manque de confiance</p>
                <p className="text-xs text-gray-600 mt-1">Vous évitez l'intimité par peur et honte</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-pink-100 rounded-lg text-center">
            <p className="text-pink-800 font-bold text-sm">
              Vous n'êtes pas seule. 6 femmes sur 10 en Afrique connaissent ce problème.
            </p>
          </div>
        </div>

        {/* SOLUTION - WHY SUMIFUN WORKS */}
        <div className="py-8 px-4 bg-white">
          <h2 className="text-center text-xl font-bold text-gray-900 mb-2">La Solution 100% Naturelle</h2>
          <p className="text-center text-xs text-gray-500 mb-6">SUMIFUN: Formule brevetée avec ingrédients naturels africains</p>
          
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border border-pink-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm flex-shrink-0">
                  <Leaf className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">Ingrédients 100% Naturels</h3>
                  <p className="text-xs text-gray-600">Moringa, Aloe Vera, huiles essentielles naturelles</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border border-pink-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm flex-shrink-0">
                  <Zap className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">Action Rapide & Durable</h3>
                  <p className="text-xs text-gray-600">Résultats visibles en 48 heures, effet prolongé</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border border-pink-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">Antibactérien & Anti-inflammatoire</h3>
                  <p className="text-xs text-gray-600">Protège contre les infections bactériennes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Image */}
          <img 
            className="w-full h-auto rounded-xl shadow-lg border border-pink-100 mb-4" 
            alt="Bénéfices SUMIFUN - Avant et Après"
            src="https://i.ibb.co/7YqK9Jm/sumifun-benefits.jpg"
            loading="lazy"
          />
        </div>

        {/* CTA 2 */}
        <div className="px-4 py-6 bg-pink-50 border-t border-pink-100">
          <CtaSection onClick={() => setIsModalOpen(true)} />
          <p className="text-center text-xs text-gray-600 mt-2 font-semibold">Garantie de satisfaction 30 jours</p>
        </div>

        {/* HOW IT WORKS */}
        <div className="py-8 px-4 bg-white">
          <h2 className="text-center text-xl font-bold text-gray-900 mb-6">Comment ça marche ?</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white font-bold text-sm">1</div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">Appliquez la crème</h3>
                <p className="text-xs text-gray-600 mt-1">Matin et soir sur la peau propre et sèche</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white font-bold text-sm">2</div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">Laissez agir 2-3 minutes</h3>
                <p className="text-xs text-gray-600 mt-1">La formule pénètre en profondeur</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white font-bold text-sm">3</div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900">Sentez la différence</h3>
                <p className="text-xs text-gray-600 mt-1">Fraîcheur garantie toute la journée</p>
              </div>
            </div>
          </div>
        </div>

        {/* REAL TESTIMONIALS - EMOTIONAL */}
        <div className="py-10 px-4 bg-gradient-to-b from-white to-pink-50">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-4 py-1 bg-pink-100 text-pink-800 rounded-full mb-3 text-xs font-bold uppercase">
              ✓ Avis Vérifiés
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Des femmes qui ont changé leur vie</h2>
          </div>

          {/* Testimonial 1 */}
          <div className="mb-8">
            <div className="bg-white p-5 rounded-xl border border-pink-100 shadow-sm relative">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-gray-700 text-sm mb-4">
                "J'avais honte de mon corps. J'évitais même d'être proche de mon mari. Après 2 semaines de SUMIFUN, <strong>je me sens totalement libérée</strong>. Les odeurs ont disparu et je ne me gratte plus. C'est comme si j'avais retrouvé ma féminité."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center font-bold text-pink-700">A</div>
                <div>
                  <span className="font-bold text-gray-900 text-sm block">Aminata D.</span>
                  <span className="text-pink-600 text-xs flex items-center gap-1"><Check className="w-3 h-3" /> Achat vérifié - Dakar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="mb-8">
            <div className="bg-white p-5 rounded-xl border border-pink-100 shadow-sm relative">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-gray-700 text-sm mb-4">
                "Les médecins ne savaient pas pourquoi j'avais ces infections à répétition. J'ai essayé SUMIFUN sur conseil d'une amie... <strong>Plus d'infections depuis 3 mois !</strong> Vraiment magique ce produit."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center font-bold text-purple-700">N</div>
                <div>
                  <span className="font-bold text-gray-900 text-sm block">Nadia T.</span>
                  <span className="text-pink-600 text-xs flex items-center gap-1"><Check className="w-3 h-3" /> Achat vérifié - Casablanca</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="mb-8">
            <div className="bg-white p-5 rounded-xl border border-pink-100 shadow-sm relative">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-gray-700 text-sm mb-4">
                "J'ai commandé pour moi et j'ai recommandé à ma mère. Elle aussi a des problèmes d'odeurs depuis des années. Elle dit <strong>'C'est le meilleur achat que j'ai jamais fait!'</strong> Merci SUMIFUN!"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center font-bold text-orange-700">Z</div>
                <div>
                  <span className="font-bold text-gray-900 text-sm block">Zainab K.</span>
                  <span className="text-pink-600 text-xs flex items-center gap-1"><Check className="w-3 h-3" /> Achat vérifié - Abidjan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="mb-8">
            <div className="bg-white p-5 rounded-xl border border-pink-100 shadow-sm relative">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="italic text-gray-700 text-sm mb-4">
                "Je suis très discrète avec ces choses-là, mais je dois dire que SUMIFUN <strong>a transformé ma confiance</strong>. Je peux maintenant porter ce que je veux et passer du temps avec mon copain sans stress."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-300 rounded-full flex items-center justify-center font-bold text-red-700">F</div>
                <div>
                  <span className="font-bold text-gray-900 text-sm block">Fatima B.</span>
                  <span className="text-pink-600 text-xs flex items-center gap-1"><Check className="w-3 h-3" /> Achat vérifié - Lagos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 3 */}
        <div className="px-4 py-6 bg-white border-t border-pink-100">
          <CtaSection onClick={() => setIsModalOpen(true)} />
        </div>

        {/* INGREDIENTS & SCIENCE */}
        <div className="py-10 px-4 bg-gradient-to-b from-pink-900 to-red-800 text-white relative overflow-hidden">
          {/* Decorative bg element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-800 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
          
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl font-bold text-white">Formule Naturelle Brevetée</h2>
            <p className="text-pink-100 text-sm mt-2">Ingrédients testés et approuvés dermatoligiquement</p>
          </div>

          <div className="space-y-3 text-sm relative z-10">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 flex items-start gap-3">
              <div className="bg-pink-400 w-3 h-3 rounded-full shrink-0 mt-1 animate-pulse"></div>
              <div>
                <p className="font-bold text-pink-200 mb-1">Moringa</p>
                <p className="text-pink-50 text-xs">Puissant antibactérien naturel, élimine les odeurs à la source</p>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 flex items-start gap-3">
              <div className="bg-pink-400 w-3 h-3 rounded-full shrink-0 mt-1 animate-pulse"></div>
              <div>
                <p className="font-bold text-pink-200 mb-1">Aloe Vera Bio</p>
                <p className="text-pink-50 text-xs">Anti-inflammatoire et cicatrisant, apaise les irritations</p>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 flex items-start gap-3">
              <div className="bg-pink-400 w-3 h-3 rounded-full shrink-0 mt-1 animate-pulse"></div>
              <div>
                <p className="font-bold text-pink-200 mb-1">Huiles Essentielles</p>
                <p className="text-pink-50 text-xs">Fraîcheur naturelle longue durée, pas de chimie agressive</p>
              </div>
            </div>
          </div>

          {/* Certification Badge */}
          <div className="mt-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-xs text-pink-100 font-bold">
              <Check className="w-4 h-4" />
              100% Ingrédients Naturels • Sans Parabens • Hypoallergénique
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="px-4 py-8 bg-white">
          <CtaSection onClick={() => setIsModalOpen(true)} />
        </div>

        {/* FINAL SCARCITY SECTION */}
        <div className="py-10 px-6 bg-red-600 text-center text-white">
          <div className="bg-white/10 inline-block px-4 py-1 rounded-full text-xs font-bold mb-4 animate-pulse">
            ⚠️ STOCK CRITIQUE
          </div>
          <h2 className="text-2xl font-bold mb-4">Commandez Avant la Rupture</h2>
          <p className="mb-8 text-red-100 text-sm">
            Avec plus de 2000 commandes ce mois-ci, le stock diminue rapidement. Nous pourrions être rupture d'ici 48h.
          </p>
          
          {/* Visual Stock Bar */}
          <div className="w-full bg-red-900 rounded-full h-4 mb-3 overflow-hidden">
            <div 
              className="bg-yellow-400 h-full transition-all duration-1000 ease-out"
              style={{ width: `${(stockLeft / 20) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-red-200 mb-8 text-right">Stock restant cette semaine: {stockLeft} tubes</p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-white text-red-600 text-lg font-bold py-5 rounded-full shadow-2xl hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            JE COMMANDE MAINTENANT
          </button>
          <p className="mt-4 text-xs opacity-80">✓ Garantie 30 Jours • ✓ Livraison 2-3 jours • ✓ Paiement à la livraison</p>
        </div>

        {/* TRUST SECTION */}
        <div className="py-8 px-4 bg-pink-50 border-t border-pink-100">
          <h3 className="text-center font-bold text-gray-900 text-sm mb-6">Pourquoi nous faire confiance ?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-1">2000+</div>
              <p className="text-xs text-gray-600">Femmes satisfaites</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-1">4.9/5</div>
              <p className="text-xs text-gray-600">Note moyenne</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-1">30j</div>
              <p className="text-xs text-gray-600">Garantie satisfait</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-1">15j</div>
              <p className="text-xs text-gray-600">Délai de livraison</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-gray-800 py-6 text-center text-[10px] text-gray-400">
          <p>© 2024 SUMIFUN Health. Tous droits réservés.</p>
          <p className="mt-2">Produit naturel • Fabriqué en conformité internationale</p>
        </div>

        {/* ORDER MODAL */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto p-0 rounded-xl w-[95%] max-w-sm mx-auto">
            <div className="bg-pink-50 p-3 text-center text-xs font-bold text-pink-700 border-b border-pink-100">
              🔥 Offre limitée aux 15 prochaines commandes
            </div>
            <div className="p-4">
              <OrderForm 
                productTitle="Crème SUMIFUN Éliminatrice d'Odeurs Intimes" 
                productImage="https://i.ibb.co/xSqN9yL/sumifun-main.jpg"
                offers={sumifunOffers}
                onSuccess={() => setIsModalOpen(false)}
                extraHiddenFields={{
                  product_source: "test2_page_sumifun",
                  product_name: "SUMIFUN Odor Remove Cream",
                  currency: "FCFA"
                }}
              />
            </div>
          </DialogContent>
        </Dialog>

        <Toaster />
      </div>
    </>
  );
}
