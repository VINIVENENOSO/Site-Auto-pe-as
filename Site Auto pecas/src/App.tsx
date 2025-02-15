import React from 'react';
import { Search, User, ShoppingCart, Heart, Star, Instagram, Facebook, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-blue-600">AutoPeças</div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar peças..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <User size={20} />
                <span className="hidden sm:inline">Minha Conta</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Heart size={20} />
                <span className="hidden sm:inline">Favoritos</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <ShoppingCart size={20} />
                <span className="hidden sm:inline">Carrinho</span>
              </button>
            </div>
          </div>
          
          <nav className="flex items-center gap-8 py-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Início</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Categorias</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Promoções</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Sobre Nós</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">As Melhores Peças para Seu Veículo</h1>
            <p className="text-xl mb-8">Encontre peças de qualidade com garantia e os melhores preços do mercado.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Ver Promoções
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorias Principais</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <img src={category.image} alt={category.name} className="w-20 h-20 object-cover mb-4 rounded-full" />
                <h3 className="text-lg font-semibold text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={`${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">R$ {product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Sobre Nós</h4>
              <p className="text-gray-400">Sua loja de autopeças de confiança, oferecendo produtos de qualidade desde 1990.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contato</h4>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Phone size={16} />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos e Condições</a></li>
                <li><a href="#" className="hover:text-white">Trocas e Devoluções</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                  Assinar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoPeças. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const categories = [
  {
    name: 'Motor',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    name: 'Freios',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    name: 'Suspensão',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    name: 'Elétrica',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80'
  }
];

const products = [
  {
    name: 'Kit de Freios Premium',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    price: '599,90',
    rating: 5
  },
  {
    name: 'Óleo Motor Sintético',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    price: '149,90',
    rating: 4
  },
  {
    name: 'Amortecedor Dianteiro',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    price: '299,90',
    rating: 4
  },
  {
    name: 'Bateria 60Ah',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    price: '449,90',
    rating: 5
  }
];

export default App;