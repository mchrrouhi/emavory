
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const META_PIXEL_ID = '2086083242209090';

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Merci pour votre commande !</title>
        <meta name="description" content="Votre commande a été reçue. Notre équipe vous contactera sous 24 heures pour confirmation." />

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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Merci pour votre commande !
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Votre commande a bien été reçue.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 text-green-800 p-4 mb-8 rounded-lg shadow-sm">
            <p className="font-medium">
              Veuillez garder votre téléphone allumé. Notre équipe vous contactera par téléphone dans un délai maximum de 24 heures pour confirmer votre commande.
            </p>
          </div>
          <p className="text-base text-gray-600 mb-8">
            Merci pour votre confiance.
          </p>
          
          <Link to="/">
            <Button className="w-full max-w-xs bg-gray-900 hover:bg-black text-white font-bold h-12 rounded-xl transition-all">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
