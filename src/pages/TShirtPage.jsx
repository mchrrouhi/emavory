
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import OrderForm from '@/components/OrderForm';
import CtaSection from '@/components/CtaSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Toaster } from '@/components/ui/toaster';
import { Star, Check, ShieldCheck, Zap } from 'lucide-react';

const META_PIXEL_ID = '2086083242209090';

// Custom offers for the Slimming Vest
const tShirtOffers = [
  {
    id: '1',
    quantity: '1 Gilet Ionique',
    price: 19000,
    value: '1 Gilet - 19.000 FCFA',
    savings: null
  },
  {
    id: '2',
    quantity: '2 Gilets Ioniques',
    price: 33000,
    value: '2 Gilets - 33.000 FCFA',
    isBest: true,
    savings: 'Économisez 5.000 FCFA'
  }
];

export default function TShirtPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Gilet de Compression Ionique - Sculpture Corporelle</title>
        <meta name="description" content="Solution immédiate pour la gynécomastie et la graisse abdominale. Technologie ionique avancée." />
        
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
        {/* End Meta Pixel Code */}
      </Helmet>

      <div className="min-h-screen bg-white w-full max-w-md mx-auto shadow-xl overflow-hidden flex flex-col font-sans">
        
        {/* HERO SECTION - Eager Load */}
        <div className="relative w-full bg-gray-50">
          <img 
            className="w-full h-auto object-cover block" 
            alt="Gilet de compression ionique avec statistiques d'efficacité"
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/4eb8c25c23adf801322de0bc31f43382.jpg"
            loading="eager"
            fetchPriority="high"
            width="500"
            height="500"
          />
          <div className="px-5 py-4 text-center">
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">
              Transformez Votre Silhouette Instantanément
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              Éliminez la gynécomastie et la graisse abdominale sans effort.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="pb-6 pt-2 px-4">
           <CtaSection onClick={() => setIsModalOpen(true)} />
        </div>

        {/* SECTION: BEFORE & AFTER (Problem/Solution) */}
        <div className="w-full bg-gray-50 py-8 space-y-8">
          <div className="px-4">
            <div className="flex items-center gap-2 mb-3 justify-center">
              <Check className="text-green-600 w-5 h-5" />
              <h2 className="text-xl font-bold text-gray-900">Résultats Visibles</h2>
            </div>
            
            {/* Image 1: Belly Fat */}
            <div className="bg-white p-2 rounded-lg shadow-sm mb-6">
               <img 
                 className="w-full h-auto rounded" 
                 alt="Transformation perte de poids avant après"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/907da9ef17bb23ee4b73a8be4c3dc0fa.webp" 
                 loading="lazy"
               />
               <p className="text-center text-xs font-bold text-gray-500 mt-2 uppercase tracking-wide">Transformation Abdominale</p>
            </div>

            {/* Image 2: Chest/Gynecomastia */}
            <div className="bg-white p-2 rounded-lg shadow-sm">
               <img 
                 className="w-full h-auto rounded" 
                 alt="Correction gynécomastie avant après"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/15a50ce594cca9914c5a15d93274b9b4.webp" 
                 loading="lazy"
               />
               <p className="text-center text-xs font-bold text-gray-500 mt-2 uppercase tracking-wide">Correction Pectorale</p>
            </div>
          </div>
        </div>

        {/* EXTRA CTA: After Results (2 photos) */}
        <div className="pb-8 pt-2 px-4 bg-gray-50">
           <CtaSection onClick={() => setIsModalOpen(true)} />
        </div>

        {/* SECTION: TIMELINE */}
        <div className="w-full bg-white py-6">
          <div className="px-4 text-center mb-4">
            <h3 className="font-bold text-lg">Efficacité Prouvée en 4 Semaines</h3>
          </div>
          <img 
            className="w-full h-auto block" 
            alt="Chronologie des résultats sur 4 semaines"
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/61676e36b97f0cca9226cc6845b670a5.webp" 
            loading="lazy"
          />
        </div>

        {/* CTA 2 (Existing) */}
        <div className="py-6 bg-white px-4">
           <CtaSection onClick={() => setIsModalOpen(true)} />
        </div>

        {/* SECTION: MECHANISM & FEATURES */}
        <div className="w-full bg-gray-50 py-8">
           <div className="px-5 mb-6 text-center">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Technologie Avancée
              </h3>
              <p className="text-sm text-gray-600">Une conception intelligente pour un confort maximal.</p>
           </div>
           
           <div className="space-y-4 px-2">
             {/* Feature 1 */}
             <div className="bg-white rounded-xl overflow-hidden shadow-sm">
               <img 
                 className="w-full h-auto" 
                 alt="Conception de compression thoracique"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/9481db7d666ebce2f205d13d8aa95560.webp" 
                 loading="lazy"
               />
               <div className="p-3 text-center">
                 <h4 className="font-bold text-sm">Compression Ciblée</h4>
               </div>
             </div>

             {/* Feature 2 - Posture */}
             <div className="bg-white rounded-xl overflow-hidden shadow-sm">
               <img 
                 className="w-full h-auto" 
                 alt="Correction de posture dorsale"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/9fdcc84281437224655df671614ea391.webp" 
                 loading="lazy"
               />
               <div className="p-3 text-center">
                 <h4 className="font-bold text-sm">Support Lombaire & Posture</h4>
               </div>
             </div>

             {/* EXTRA CTA: After 2 features */}
             <div className="py-4 px-2">
                <CtaSection onClick={() => setIsModalOpen(true)} />
             </div>

             {/* Feature 3 - Slimming Effect */}
             <div className="bg-white rounded-xl overflow-hidden shadow-sm">
               <img 
                 className="w-full h-auto" 
                 alt="Effet amincissant immédiat"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/e225b19db36c7eba5c368948b1defc20.webp" 
                 loading="lazy"
               />
               <div className="p-3 text-center">
                 <h4 className="font-bold text-sm">Silhouette Affinée Immédiatement</h4>
               </div>
             </div>
           </div>
        </div>

        {/* SECTION: SCIENCE */}
        <div className="bg-white py-10 px-4">
           <div className="text-center mb-8">
             <div className="inline-block p-2 bg-blue-50 rounded-full mb-3">
               <ShieldCheck className="w-8 h-8 text-blue-600" />
             </div>
             <h2 className="text-2xl font-bold text-gray-900">Science & Innovation</h2>
           </div>

           <div className="space-y-8">
             <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
               <img 
                 className="w-full h-auto" 
                 alt="Thérapie énergétique circulation"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/ab18fd80e9e38a556f82c9581a16c82d.webp" 
                 loading="lazy"
               />
               <div className="p-4 bg-gray-50">
                 <h3 className="font-bold text-gray-900">Circulation Optimisée</h3>
                 <p className="text-sm text-gray-600 mt-1">Améliore le flux sanguin pour réduire la fatigue.</p>
               </div>
             </div>

             <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
               <img 
                 className="w-full h-auto" 
                 alt="Prévention accumulation graisse"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/7d751b6ad4df748af9a40bdb4df689b8.webp" 
                 loading="lazy"
               />
                <div className="p-4 bg-gray-50">
                 <h3 className="font-bold text-gray-900">Action Anti-Graisse</h3>
                 <p className="text-sm text-gray-600 mt-1">Prévient l'accumulation de nouvelles cellules graisseuses.</p>
               </div>
             </div>

             {/* EXTRA CTA: After 2 science panels */}
             <div className="py-4">
                <CtaSection onClick={() => setIsModalOpen(true)} />
             </div>
             
             <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
               <img 
                 className="w-full h-auto" 
                 alt="Action métabolique des ions"
                 src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/36673fe3775bfae9efd78829250eba23.webp" 
                 loading="lazy"
               />
               <div className="p-4 bg-gray-50">
                 <h3 className="font-bold text-gray-900">Métabolisme Activé</h3>
                 <p className="text-sm text-gray-600 mt-1">Accélère la combustion des calories au repos.</p>
               </div>
             </div>
           </div>
        </div>

        {/* SECTION: PRODUCT BOX */}
        <div className="bg-gray-50 py-10 px-6 text-center">
           <h3 className="text-xl font-bold mb-6">Le Choix des Experts</h3>
           <img 
             className="w-full h-auto rounded-xl shadow-lg mb-6" 
             alt="Boite produit Gilet Ionique"
             src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/2f278c91ad99143de772ba8aa528edce.webp" 
             loading="lazy"
           />
           <div className="flex justify-center gap-1 mb-2">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
           </div>
           <p className="italic text-gray-600">"Un produit révolutionnaire pour la santé masculine."</p>
        </div>

        {/* FINAL CTA */}
        <div className="py-8 bg-white px-4 border-t border-gray-100">
          <CtaSection onClick={() => setIsModalOpen(true)} />
        </div>

        {/* Minimal Footer */}
        <div className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
          <p>© 2024 Emavory Health.</p>
        </div>

        {/* Order Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto p-0 rounded-xl w-[95%] max-w-sm mx-auto">
            <div className="p-4">
              <OrderForm 
                productTitle="Gilet Ionique Minceur" 
                productImage="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/4eb8c25c23adf801322de0bc31f43382.jpg"
                offers={tShirtOffers}
                onSuccess={() => setIsModalOpen(false)}
                extraHiddenFields={{
                  product_source: "tshirt_codinafrica",
                  product_name: "Tshirt Minceur",
                  price: "190",
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
