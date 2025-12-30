
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import OrderForm from '@/components/OrderForm';
import CtaSection from '@/components/CtaSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Toaster } from '@/components/ui/toaster';
import { Star, Check, Zap, ShieldCheck, Leaf, Activity, Clock, AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const META_PIXEL_ID = '2086083242209090';

// Updated Pricing Strategy - More Aggressive
const patchOffers = [
  {
    id: '1',
    quantity: '1 Boite (Cure Découverte)',
    price: 19000,
    value: '1 Boite - 19.000 FCFA',
    savings: null
  },
  {
    id: '2',
    quantity: '2 Boites (Cure Intensive)',
    price: 35000,
    value: '2 Boites - 35.000 FCFA',
    isBest: true,
    savings: 'Économisez 3.000 FCFA'
  },
  {
    id: '3',
    quantity: '3 Boites (Transformation)',
    price: 45000,
    value: '3 Boites - 45.000 FCFA',
    savings: 'Économisez 12.000 FCFA'
  }
];

export default function Test1Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [stockLeft, setStockLeft] = useState(12);

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
    }, 15000); // Reduce stock every 15 seconds
    return () => clearInterval(stockTimer);
  }, []);

  return (
    <>
      <Helmet>
        <title>URGENT: Stock Faible - Patch Minceur Moringa & Berberine</title>
        <meta name="description" content="Offre limitée ! Perdez du poids et rajeunissez votre peau. Plus que quelques boites disponibles à ce prix." />
        
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
          <span>OFFRE FLASH : Expire dans {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="min-h-screen bg-green-50/30 w-full max-w-md mx-auto shadow-2xl overflow-hidden flex flex-col font-sans">
        
        {/* HERO SECTION */}
        <div className="relative w-full bg-gradient-to-b from-green-50 to-white pt-4 pb-8">
           <div className="px-4 mb-4">
             {/* Scarcity Banner */}
             <div className="bg-red-50 border border-red-100 rounded-lg p-2 mb-4 flex items-center gap-2 text-red-700 text-xs font-bold">
               <AlertTriangle className="w-4 h-4 shrink-0 fill-red-100" />
               <p>Attention: Demande très forte. Plus que <span className="underline text-red-800">{stockLeft} boites</span> en stock.</p>
             </div>

            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-2">
              Ne Laissez Pas l'Âge et les Kilos <span className="text-red-600 underline decoration-red-200 decoration-4 underline-offset-2">Voler Votre Confiance</span>
            </h1>
            <p className="text-gray-600 text-sm mt-2 italic">
              "Je me sentais invisible... jusqu'à ce que je découvre ce secret."
            </p>
          </div>

          <div className="relative px-2">
            <img 
              className="w-full h-auto object-contain rounded-xl shadow-lg border-2 border-green-50" 
              alt="Boite de patchs Moringa Berberine NAD+ avec avantages clés"
              src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/57dc4ab256fde141fd9edadd6301f20c.webp"
              loading="eager"
            />
            {/* Social Proof Badge */}
            <div className="absolute -bottom-4 -left-2 bg-white text-green-800 text-xs font-bold px-3 py-2 rounded-r-full shadow-md border-l-4 border-green-600 flex items-center gap-1">
              <Users className="w-3 h-3" />
              1500+ Commandes ce mois
            </div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="px-4 py-8 bg-white">
           <CtaSection onClick={() => setIsModalOpen(true)} />
           <p className="text-center text-[10px] text-red-500 mt-2 font-bold animate-pulse">
             🔥 18 personnes consultent cette page actuellement
           </p>
        </div>

        {/* EMOTIONAL PROBLEM SECTION */}
        <div className="py-8 px-5 bg-gray-50 border-t border-b border-gray-100">
           <h2 className="text-xl font-bold text-gray-900 mb-4">Avez-vous remarqué ?</h2>
           <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-red-100 p-2 rounded-full shrink-0">
                  <Activity className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-sm text-gray-700"><strong>Votre ventre ne disparaît pas</strong>, peu importe vos efforts ou les régimes drastiques.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-red-100 p-2 rounded-full shrink-0">
                  <Activity className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-sm text-gray-700"><strong>Votre peau se relâche</strong>, surtout au niveau des bras et du cou, trahissant votre âge.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-red-100 p-2 rounded-full shrink-0">
                  <Activity className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-sm text-gray-700"><strong>Vous vous sentez fatiguée</strong> et moins séduisante qu'avant.</p>
              </div>
           </div>
           <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
             <p className="text-green-800 font-bold text-sm">Ce n'est pas votre faute. C'est votre métabolisme qui ralentit.</p>
           </div>
        </div>

        {/* BENEFITS GRID */}
        <div className="py-8 px-4 bg-white">
          <h2 className="text-center text-xl font-bold text-gray-900 mb-2">La Solution Scientifique</h2>
          <p className="text-center text-xs text-gray-500 mb-6">Réveillez votre corps avec la technologie transdermique</p>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-green-50 rounded-xl flex flex-col items-center text-center border border-green-100">
                <div className="bg-white p-2 rounded-full mb-2 shadow-sm">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-sm mb-1">Brûle-Graisse Rapide</h3>
                <p className="text-xs text-gray-600">Cible la graisse profonde</p>
             </div>
             <div className="p-4 bg-green-50 rounded-xl flex flex-col items-center text-center border border-green-100">
                <div className="bg-white p-2 rounded-full mb-2 shadow-sm">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-sm mb-1">Rajeunissement</h3>
                <p className="text-xs text-gray-600">NAD+ pour raffermir la peau</p>
             </div>
          </div>
        </div>

        {/* COMPARISON CHART */}
        <div className="py-8 px-4 bg-gray-50">
          <div className="text-center mb-6">
             <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Le saviez-vous ?</span>
             <h2 className="text-xl font-bold text-gray-900 mt-2">Les pilules détruisent votre estomac</h2>
          </div>
          <img 
            className="w-full h-auto rounded-lg shadow-sm border border-gray-100" 
            alt="Comparaison patchs vs pilules vs injections"
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/a32eec8953c7213680ef3f0b7fc88c71.webp" 
            loading="lazy"
          />
          <div className="mt-4 space-y-2 text-sm text-gray-700 bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
             <p className="italic">
               "Les patchs délivrent les actifs directement dans le sang. C'est 10x plus efficace que les gélules qui sont détruites par la digestion."
             </p>
             <p className="text-right text-xs font-bold text-green-700">- Dr. Expert en Métabolisme</p>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="px-4 py-6 bg-white border-t border-gray-100">
           <CtaSection onClick={() => setIsModalOpen(true)} />
           <p className="text-center text-xs text-gray-500 mt-2">Plus que {stockLeft} pièces au prix promo</p>
        </div>

        {/* INGREDIENTS */}
        <div className="py-10 px-4 bg-green-900 text-white relative overflow-hidden">
           {/* Decorative bg element */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-green-800 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
           
           <div className="text-center mb-6 relative z-10">
              <h2 className="text-2xl font-bold text-white">Le "Botox Naturel"</h2>
              <p className="text-green-200 text-sm mt-1">20+ Ingrédients Rares</p>
           </div>
           <img 
             className="w-full h-auto rounded-xl shadow-2xl mb-6 relative z-10" 
             alt="Liste des ingrédients naturels : Moringa, Berberine, NAD+"
             src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/0f7bfe9d55620d0831455c24d6150af2.webp" 
             loading="lazy"
           />
           <div className="space-y-3 text-xs relative z-10">
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-3">
                 <div className="bg-green-500 w-2 h-2 rounded-full shrink-0 animate-pulse"></div>
                 <p><strong className="text-green-300">Berbérine :</strong> L'ingrédient secret que l'industrie pharmaceutique déteste. Il active votre "interrupteur minceur".</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-3">
                 <div className="bg-green-500 w-2 h-2 rounded-full shrink-0 animate-pulse"></div>
                 <p><strong className="text-green-300">NAD+ :</strong> La molécule de jeunesse qui retend la peau relâchée.</p>
              </div>
           </div>
        </div>

        {/* EMOTIONAL TRANSFORMATIONS */}
        <div className="py-10 px-4 bg-white">
          <div className="text-center mb-8">
             <div className="inline-flex items-center justify-center px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full mb-3 text-xs font-bold uppercase">
               Résultats Vérifiés
             </div>
             <h2 className="text-2xl font-bold text-gray-900">Elles ont transformé leur vie</h2>
          </div>

          {/* Story 1 */}
          <div className="mb-10">
            <img 
              className="w-full h-auto rounded-lg shadow-lg mb-4" 
              alt="Transformation physique femmes avant après"
              src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/9e839711414ce73541c8030dfb472fb9.webp" 
              loading="lazy"
            />
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 relative">
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 absolute -top-4 right-4 bg-white rounded-full p-1 shadow-sm" />
              <p className="italic text-gray-700 text-sm mb-3">
                "Honnêtement, je pleurais en me regardant dans le miroir. Mon mari ne me regardait plus comme avant. Après 3 semaines de patchs, j'ai perdu 8kg et ma peau est tellement plus ferme. <strong>Hier soir, il m'a dit que j'étais magnifique.</strong> Merci !"
              </p>
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center font-bold text-green-800 text-xs">S</div>
                 <div>
                    <span className="font-bold text-gray-900 text-sm block">Sophie L.</span>
                    <span className="text-green-600 text-xs flex items-center gap-1"><Check className="w-3 h-3" /> Achat vérifié</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Story 2 - Men */}
          <div className="mb-4">
            <img 
              className="w-full h-auto rounded-lg shadow-lg mb-4" 
              alt="Transformation physique hommes avant après"
              src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/d1d05051e18529da5f6e245e14337414.webp" 
              loading="lazy"
            />
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 relative">
               <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 absolute -top-4 right-4 bg-white rounded-full p-1 shadow-sm" />
               <p className="italic text-gray-700 text-sm mb-3">
                "J'avais tout essayé : sport, régimes... rien ne marchait pour mon ventre. Ces patchs ont débloqué quelque chose. -12kg sans effort surhumain. Je revis."
              </p>
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-800 text-xs">M</div>
                 <div>
                    <span className="font-bold text-gray-900 text-sm block">Marc D.</span>
                    <span className="text-green-600 text-xs flex items-center gap-1"><Check className="w-3 h-3" /> Achat vérifié</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 3 */}
        <div className="px-4 py-6 bg-green-50">
           <CtaSection onClick={() => setIsModalOpen(true)} />
        </div>

        {/* FINAL SCARCITY SECTION */}
        <div className="py-10 px-6 bg-red-600 text-center text-white">
           <div className="bg-white/10 inline-block px-4 py-1 rounded-full text-xs font-bold mb-4 animate-pulse">
             ⚠️ STOCK CRITIQUE
           </div>
           <h2 className="text-2xl font-bold mb-4">Ne Ratez Pas Cette Chance</h2>
           <p className="mb-8 text-red-100 text-sm">
             En raison de la viralité sur les réseaux sociaux, nous risquons la rupture de stock d'ici ce soir.
           </p>
           
           {/* Visual Stock Bar */}
           <div className="w-full bg-red-900 rounded-full h-4 mb-2 overflow-hidden">
             <div 
                className="bg-yellow-400 h-full transition-all duration-1000 ease-out"
                style={{ width: `${(stockLeft / 20) * 100}%` }}
             ></div>
           </div>
           <p className="text-xs text-red-200 mb-8 text-right">Stock restant: {stockLeft} unités</p>

           <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white text-red-600 text-xl font-bold py-5 rounded-full shadow-2xl hover:bg-gray-100 transition-transform transform hover:scale-105"
           >
             JE COMMANDE AVANT RUPTURE
           </button>
           <p className="mt-4 text-xs opacity-80">Garantie 30 Jours • Paiement à la livraison</p>
        </div>

        {/* FOOTER */}
        <div className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
          <p>© 2024 GFOUK Health.</p>
        </div>

        {/* ORDER MODAL */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto p-0 rounded-xl w-[95%] max-w-sm mx-auto">
            <div className="bg-red-50 p-2 text-center text-xs font-bold text-red-600 border-b border-red-100">
              🔥 Offre réservée aux 10 prochaines commandes
            </div>
            <div className="p-4">
              <OrderForm 
                productTitle="Patch Moringa & Berberine" 
                productImage="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/57dc4ab256fde141fd9edadd6301f20c.webp"
                offers={patchOffers}
                onSuccess={() => setIsModalOpen(false)}
                extraHiddenFields={{
                  product_source: "test1_page_moringa",
                  product_name: "Patch Moringa Berberine",
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
