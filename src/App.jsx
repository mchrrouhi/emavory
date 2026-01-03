
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderForm from '@/components/OrderForm';
import ThankYouPage from '@/pages/ThankYouPage';
import Product2Page from '@/pages/Product2Page';
import SavonaPage from '@/pages/SavonaPage';
import TShirtPage from '@/pages/TShirtPage';
import Test1Page from '@/pages/Test1Page';
import Test2Page from '@/pages/Test2Page';
import CtaSection from '@/components/CtaSection';
import { Toaster } from '@/components/ui/toaster';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const META_PIXEL_ID = '2086083242209090';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Offre Spéciale - Commander Maintenant</title>
        <meta name="description" content="Profitez de notre offre exclusive. Livraison gratuite et paiement à la livraison." />
        
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
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/1-UI75x.jpeg"
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
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/untitled-design-57-6xv0V.jpg" 
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
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/untitled-design-58-HDXBk.jpg" 
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
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/untitled-design-59-qCkoG.jpg" 
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
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/untitled-design-60-0kecE.jpg" 
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
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/untitled-design-56-Xdsib.jpg" 
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
            src="https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/c38a311d-d2cf-4730-bd46-ea0ea18bb869_1_201_a-2-6Wp7Y.jpeg" 
            loading="lazy"
            width="448"
            height="auto"
          />
        </div>

        {/* Order Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <OrderForm onSuccess={() => setIsModalOpen(false)} />
          </DialogContent>
        </Dialog>

        <Toaster />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-2" element={<Product2Page />} />
        <Route path="/savona" element={<SavonaPage />} />
        <Route path="/tshirt" element={<TShirtPage />} />
        <Route path="/test1" element={<Test1Page />} />
        <Route path="/test2" element={<Test2Page />} />
        <Route path="/thanks" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
