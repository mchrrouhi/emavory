
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import OrderForm from '@/components/OrderForm';
import CtaSection from '@/components/CtaSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Toaster } from '@/components/ui/toaster';

const META_PIXEL_ID = '2086083242209090';

const Product2Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const placeholderImage = "https://placehold.co/448x600/e2e8f0/475569?text=Placeholder+Image";
  const productTitle = "Product 2 Name"; // Placeholder title

  return (
    <>
      <Helmet>
        <title>Offre Spéciale - {productTitle}</title>
        <meta name="description" content={`Profitez de notre offre exclusive sur ${productTitle}. Livraison gratuite et paiement à la livraison.`} />

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
      
      <div className="min-h-screen bg-white w-full max-w-md mx-auto shadow-2xl overflow-hidden flex flex-col">
        {/* Image 1 - Eager Load (LCP optimization) */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Product view 1" 
            src={placeholderImage}
            loading="eager"
            fetchPriority="high"
            width="448"
            height="auto"
          />
        </div>

        {/* CTA 1: Immediately below first image */}
        <CtaSection onClick={() => setIsModalOpen(true)} />

        {/* Image 2 - Lazy Load */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Product view 2" 
            src={placeholderImage} 
            loading="lazy"
            width="448"
            height="auto"
          />
        </div>

        {/* Image 3 - Lazy Load */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Product view 3" 
            src={placeholderImage} 
            loading="lazy"
            width="448"
            height="auto"
          />
        </div>

        {/* Image 4 - Lazy Load */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Product view 4" 
            src={placeholderImage} 
            loading="lazy"
            width="448"
            height="auto"
          />
        </div>

        {/* CTA 2: Middle Button */}
        <CtaSection onClick={() => setIsModalOpen(true)} />

        {/* Image 5 - Lazy Load */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Product view 5" 
            src={placeholderImage} 
            loading="lazy"
            width="448"
            height="auto"
          />
        </div>

        {/* Image 6 - Lazy Load */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Product view 6" 
            src={placeholderImage} 
            loading="lazy"
            width="448"
            height="auto"
          />
        </div>

        {/* CTA 3: Before last image */}
        <CtaSection onClick={() => setIsModalOpen(true)} />

        {/* Image 7 - Last Image - Lazy Load */}
        <div className="w-full">
          <img 
            className="w-full h-auto block" 
            alt="Product view 7" 
            src={placeholderImage} 
            loading="lazy"
            width="448"
            height="auto"
          />
        </div>

        {/* Order Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <OrderForm 
              onSuccess={() => setIsModalOpen(false)} 
              productImage="https://placehold.co/200x200/e2e8f0/475569?text=Thumb"
              productTitle={productTitle}
            />
          </DialogContent>
        </Dialog>

        <Toaster />
      </div>
    </>
  );
};

export default Product2Page;
