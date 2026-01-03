
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ThankYouPage from '@/pages/ThankYouPage';
import Product2Page from '@/pages/Product2Page';
import SavonaPage from '@/pages/SavonaPage';
import TShirtPage from '@/pages/TShirtPage';
import Test1Page from '@/pages/Test1Page';
import Test2Page from '@/pages/Test2Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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

