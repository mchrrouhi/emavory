
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Star, Loader2 } from 'lucide-react';

const defaultOffers = [
  {
    id: '1',
    quantity: '1 Boite',
    price: 19000,
    value: '1 Boite - 19.000 FCFA',
    savings: null
  },
  {
    id: '2',
    quantity: '2 Boites',
    price: 35000,
    value: '2 Boites - 35.000 FCFA',
    isBest: true,
    savings: 'Économisez 3.000 FCFA'
  }
];

const OrderForm = ({ 
  productImage = "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/expression-2-wKFUh.png",
  productTitle = "Huile de Massage Intime",
  offers = defaultOffers,
  redirectUrl = "https://emavory.com/thanks",
  extraHiddenFields = {},
  onSuccess
}) => {
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState(offers[0]?.id || '1');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentOffer = offers.find(o => o.id === selectedOffer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjabgzg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Track Purchase Event with Meta Pixel
        // Fired immediately after success and BEFORE redirect
        if (window.fbq) {
          const eventId = 'purchase_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
          window.fbq('track', 'Purchase', {
            value: Number(currentOffer.price),
            currency: 'FCFA',
            event_id: eventId,
            content_name: productTitle,
            num_items: 1, // Simplified
            status: 'completed'
          });
        }
        
        // Execute optional success callback (e.g., to close modals)
        if (onSuccess) onSuccess();

        // Redirect to Thank You Page
        navigate('/thanks');
      } else {
        console.error("Form submission failed");
        alert("Une erreur s'est produite lors de la commande. Veuillez réessayer.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Erreur de connexion. Veuillez vérifier votre internet et réessayer.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Product Info Header */}
      <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={productImage}
              alt="Thumbnail" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-bold text-gray-900 leading-tight">{productTitle}</h3>
          <p className="text-sm text-green-600 font-medium flex items-center gap-1 mt-1">
            <Check className="w-3 h-3" /> En stock
          </p>
        </div>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Hidden Fields for Formspree */}
        <input type="hidden" name="_subject" value={`Nouvelle commande - ${productTitle}`} />

        {/* Extra Hidden Fields (e.g. for tracking) */}
        {Object.entries(extraHiddenFields).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}
        
        {/* Offers Selection */}
        <div className="space-y-3">
          <Label className="text-gray-700 font-medium text-xs">Choisir une offre</Label>
          <div className="grid gap-3">
            {offers.map((offer) => (
              <div 
                key={offer.id}
                onClick={() => setSelectedOffer(offer.id)}
                className={`relative flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedOffer === offer.id 
                    ? 'border-green-600 bg-green-50/50' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {offer.isBest && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-current" /> MEILLEURE OFFRE
                  </div>
                )}
                
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedOffer === offer.id ? 'border-green-600 bg-green-600' : 'border-gray-300'
                  }`}>
                    {selectedOffer === offer.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">{offer.quantity}</span>
                    {offer.savings && (
                      <span className="text-[10px] text-green-600 font-medium">{offer.savings}</span>
                    )}
                  </div>
                </div>
                <span className="font-bold text-gray-900">{offer.price.toLocaleString()} CFA</span>
                
                {/* Hidden radio input for form submission - Ensures quantity/offer is sent to Formspree */}
                <input 
                  type="radio" 
                  name="offre" 
                  value={offer.value} 
                  checked={selectedOffer === offer.id} 
                  readOnly 
                  className="hidden"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="full_name" className="text-gray-700 font-medium text-xs">Nom complet *</Label>
            <Input
              id="full_name"
              name="full_name"
              placeholder="Votre nom"
              className="h-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors text-sm"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-gray-700 font-medium text-xs">Numéro de téléphone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Votre numéro"
              className="h-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors text-sm"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Total & Submit */}
        <div className="pt-2">
            <div className="flex justify-between items-center mb-4 px-1">
                <span className="text-sm font-medium text-gray-600">Total à payer:</span>
                <span className="text-xl font-black text-gray-900">{currentOffer?.price.toLocaleString()} CFA</span>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-black text-white text-lg font-bold h-12 rounded-xl shadow-md transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Traitement...
                </>
              ) : (
                "Terminer ma commande"
              )}
            </Button>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-2">
          Paiement à la livraison. Satisfait ou remboursé.
        </p>
      </form>
    </div>
  );
};

export default OrderForm;
