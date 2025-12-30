
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = ({ onClick }) => (
  <div className="w-full bg-white px-5 py-6 flex justify-center items-center">
    <Button 
      onClick={onClick}
      className="w-full h-16 bg-green-600 hover:bg-green-700 text-white text-2xl font-bold rounded-full shadow-2xl animate-bounce"
    >
      Commander maintenant
    </Button>
  </div>
);

export default CtaSection;
