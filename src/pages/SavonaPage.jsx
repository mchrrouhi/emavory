
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import OrderForm from '@/components/OrderForm';
import CtaSection from '@/components/CtaSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Toaster } from '@/components/ui/toaster';

const META_PIXEL_ID = '2086083242209090';

const SavonaPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuration for images to make them easily replaceable
  const images = {
    t2: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/4ad9800aab2476d0e3bbf3bf491a05a6.jpg",
    t3: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/d28410ab9bd39acc5868fc82dbca0636.jpg",
    t1: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/e5af7c348a2304dd12a35398ae153d80.jpg",
    t4: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/068d30d91dc3b33cb0ff5430f75827c9.jpg",
    t5: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/629929b882b3eb2bd07491a2b5be6d27.jpg",
    t6: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/8ca3d57ab3397371650f16dc1e8c8e16.jpg"
  };

  const productTitle = "FluidEase Leg Therapy";
  // Using image 2 as the product thumbnail since it clearly shows the product
  const productThumbnail = images.t2; 

  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <>
      <Helmet>
        <title>{productTitle} - Soulagement Naturel</title>
        <meta name="description" content="Découvrez le pouvoir de la guérison naturelle. Soulagement rapide des escarres, eczéma et irritations." />

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
      
      {/* 
        Container Setup:
        - max-w-md: Limits width on desktop for mobile-app feel
        - mx-auto: Centers the container
        - shadow-2xl: Adds depth
        - min-h-screen: Full height
        - flex-col: Stack elements vertically
      */}
      <div className="min-h-screen bg-white w-full max-w-md mx-auto shadow-2xl overflow-hidden flex flex-col">
        
        {/* Image 1: Problem Awareness (Escarres, Eczema) */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Soulagement rapide des escarres et problèmes de peau" 
            src={images.t1}
            loading="eager" // Load first image immediately
            fetchPriority="high"
          />
        </div>

        {/* Image 2: Product Reveal */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="FluidEase Leg Therapy Cream - Solution Naturelle" 
            src={images.t2} 
            loading="lazy"
          />
        </div>

        {/* CTA 1: After product reveal */}
        <CtaSection onClick={handleOpenModal} />

        {/* Image 3: Social Proof / Reviews */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Avis clients satisfaits" 
            src={images.t3} 
            loading="lazy"
          />
        </div>

        {/* Image 4: Guarantee & Stats */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Livraison gratuite et garantie" 
            src={images.t4} 
            loading="lazy"
          />
        </div>

        {/* CTA 2: Reinforce decision after social proof */}
        <CtaSection onClick={handleOpenModal} />

        {/* Image 5: Payment Terms */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Paiement à la livraison" 
            src={images.t5} 
            loading="lazy"
          />
        </div>

        {/* Image 6: Benefits / Safety */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Hydratation et protection pour peaux sensibles" 
            src={images.t6} 
            loading="lazy"
          />
        </div>

        {/* CTA 3: Final Call to Action */}
        <CtaSection onClick={handleOpenModal} />

        {/* Order Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <OrderForm 
              onSuccess={() => setIsModalOpen(false)} 
              productImage={productThumbnail}
              productTitle={productTitle}
            />
          </DialogContent>
        </Dialog>

        <Toaster />
      </div>
    </>
  );
};

export default SavonaPage;
