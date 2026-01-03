import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const products = [
    {
      title: "Patch Moringa & Berberine",
      description: "Solution naturelle pour perdre du poids et rajeunir",
      image: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/57dc4ab256fde141fd9edadd6301f20c.webp",
      link: "/test1"
    },
    {
      title: "Crème SUMIFUN",
      description: "Éliminateur d'odeurs intimes 100% naturel",
      image: "https://i.ibb.co/xSqN9yL/sumifun-main.jpg",
      link: "/test2"
    },
    {
      title: "T-Shirt Collection",
      description: "Mode et style pour toutes les occasions",
      image: "https://horizons-cdn.hostinger.com/68e2fc2b-72d8-42a5-8da8-233a767cfca2/1-UI75x.jpeg",
      link: "/tshirt"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emavory - Solutions Beauté et Bien-être pour l'Afrique</title>
        <meta name="description" content="Découvrez nos produits de beauté et bien-être spécialement sélectionnés pour les femmes africaines, notamment ivoiriennes." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">✨ Emavory</h1>
            <p className="text-gray-600 text-sm mt-1">Beauté & Bien-être pour l'Afrique</p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              La beauté africaine mérite le meilleur
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Nous comprenons les besoins uniques des femmes ivoiriennes et africaines. 
              Découvrez nos solutions naturelles et efficaces pour votre bien-être.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Link 
                key={index}
                to={product.link}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-green-700 transition">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🇨🇮 Parlons Beauté Ivoirienne
            </h2>
            
            <article className="prose prose-lg max-w-none">
              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  La Femme Ivoirienne : Beauté Naturelle et Confiance
                </h3>
                <p className="text-gray-700 mb-4">
                  Les femmes ivoiriennes incarnent la beauté dans sa forme la plus authentique. 
                  De la peau rayonnante aux courbes naturelles, la beauté africaine est unique et mérite 
                  des produits qui respectent et subliment cette authenticité.
                </p>
                <p className="text-gray-700 mb-4">
                  Chez Emavory, nous croyons que chaque femme mérite de se sentir confiante et belle 
                  dans sa peau. C'est pourquoi nous sélectionnons des produits naturels, efficaces, 
                  et adaptés aux besoins spécifiques des femmes africaines.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Bien-être Intime : Brisons les Tabous
                </h3>
                <p className="text-gray-700 mb-4">
                  Trop de femmes souffrent en silence de problèmes intimes. Les infections, 
                  les odeurs, les irritations... ce ne sont pas des fatalités. Notre mission est 
                  d'offrir des solutions discrètes et efficaces pour que chaque femme puisse 
                  vivre pleinement sa féminité.
                </p>
                <p className="text-gray-700">
                  Avec nos produits comme la Crème SUMIFUN, nous apportons des solutions 
                  100% naturelles qui ont transformé la vie de milliers de femmes en Côte d'Ivoire, 
                  au Sénégal, et partout en Afrique de l'Ouest.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Notre Engagement
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Produits 100% naturels et testés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Livraison rapide partout en Afrique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Paiement à la livraison (sécurisé)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">Service client en français</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm">© 2024 Emavory. Beauté et bien-être pour l'Afrique.</p>
            <p className="text-xs text-gray-400 mt-2">Livraison en Côte d'Ivoire, Sénégal, Mali, Burkina Faso</p>
          </div>
        </footer>
      </div>
    </>
  );
}
