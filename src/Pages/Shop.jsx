import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Search, User, Plus, Minus, Trash2, Truck, Shield, Headphones } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const products = [
    {
      id: 1,
      name: 'Wall Connector',
      price: '$415',
      priceValue: 415,
      image: 'https://images.pexels.com/photos/5691599/pexels-photo-5691599.jpeg',
      category: 'charging',
      description: 'The fastest charging solution for your home'
    },
    {
      id: 2,
      name: 'Mobile Connector',
      price: '$230',
      priceValue: 230,
      image: 'https://images.pexels.com/photos/914915/pexels-photo-914915.jpeg',
      category: 'charging',
      description: 'Convenient charging on the go'
    },
    {
      id: 3,
      name: 'Tesla Model S Key Fob',
      price: '$175',
      priceValue: 175,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL8f7z161x7-LJcyA7mh_fQFvS8-405T9Rw&s',
      category: 'accessories',
      description: 'Premium key fob for Model S'
    },
    {
      id: 4,
      name: 'Tesla Cybertruck Whistle',
      price: '$50',
      priceValue: 50,
      image: 'https://observer.com/wp-content/uploads/sites/2/2021/12/FFfH_DqXsAQ5Um--e1638375712781.jpeg?quality=80',
      category: 'lifestyle',
      description: 'Limited edition Cybertruck-inspired whistle'
    },
    {
      id: 5,
      name: 'Tesla Logo Tee',
      price: '$35',
      priceValue: 35,
      image: 'https://m.media-amazon.com/images/I/414MqFNV3tL._UY1100_.jpg',
      category: 'apparel',
      description: 'Classic Tesla logo t-shirt'
    },
    {
      id: 6,
      name: 'Tesla Cap',
      price: '$30',
      priceValue: 30,
      image: 'https://m.media-amazon.com/images/I/51KKekFy2sL.jpg',
      category: 'apparel',
      description: 'Adjustable Tesla cap'
    },
    {
      id: 7,
      name: 'Tesla Tumbler',
      price: '$45',
      priceValue: 45,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o5bWcpQua8J2NSN-7D9qGsRDZwHYg00Tmg&s',
      category: 'lifestyle',
      description: 'Insulated tumbler with Tesla logo'
    },
    {
      id: 8,
      name: 'Model 3 All-Weather Floor Mats',
      price: '$225',
      priceValue: 225,
      image: 'https://u-mercari-images.mercdn.net/photos/m91055665781_1.jpg',
      category: 'accessories',
      description: 'Custom-fit floor mats for Model 3'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'charging', name: 'Charging' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16" data-aos="fade-down">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tesla Shop</h1>
          <p className="text-xl text-gray-300 mb-2">The Official Tesla Store</p>
          <p className="text-gray-400">Accessories, charging solutions, and lifestyle products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* Category Filter */}
        <div className="mb-8" data-aos="fade-up">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 font-medium hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600">Free shipping on orders over $100</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tesla Quality</h3>
            <p className="text-gray-600">Designed and tested by Tesla</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Expert customer support</p>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={() => setShowCart(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto animate-slideLeft">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <>
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 mb-4 pb-4 border-b border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-gray-600 mb-2">{item.price}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors h-fit"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold text-gray-900">${getCartTotal()}</span>
                    </div>
                    <button className="w-full py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold text-lg mb-3">
                      Checkout
                    </button>
                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {/* Floating Cart Button */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gray-900 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-200 flex items-center justify-center z-30"
      >
        <ShoppingCart size={24} />
        {getCartItemsCount() > 0 && (
          <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {getCartItemsCount()}
          </span>
        )}
      </button>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-slideDown">
          <p className="font-semibold">✓ Item added to cart!</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideLeft {
          animation: slideLeft 0.3s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Shop;