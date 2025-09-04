import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

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
    { id: 'accessories', name: 'Vehicle Accessories' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Cart functions
  const addToCart = (product) => {
    console.log('Adding to cart:', product.name);
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        console.log('Item already exists, increasing quantity');
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log('Adding new item to cart');
      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    // Show notification
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
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
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
    <div className="bg-secondary">
      {/* Navigation Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="/" style={{color: '#000', letterSpacing: '2px'}}>
            TESLA
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark px-4" href="/">Vehicles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark px-4" href="/">Energy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark px-4 active" href="/" style={{color: '#1976d2 !important'}}>Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark px-4" href="/">Support</a>
              </li>
            </ul>
            
            <div className="d-flex align-items-center">
              <button className="btn btn-link text-dark me-3 p-0">
                <i className="bi bi-search fs-5"></i>
              </button>
              <button className="btn btn-link text-dark me-3 p-0">
                <i className="bi bi-person fs-5"></i>
              </button>
              <button 
                className="btn btn-link text-dark p-0 position-relative"
                onClick={() => {
                  console.log('Cart clicked, current cart:', cart);
                  setShowCart(true);
                }}
                style={{cursor: 'pointer'}}
              >
                <i className="bi bi-bag fs-5"></i>
                {getCartItemsCount() > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                    {getCartItemsCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <div className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg ${showCart ? 'd-block' : 'd-none'}`} 
           style={{width: '400px', zIndex: 1050, overflowY: 'auto'}}>
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold">Shopping Cart</h5>
          <button className="btn btn-link text-dark p-0" onClick={() => setShowCart(false)}>
            <i className="bi bi-x-lg fs-4"></i>
          </button>
        </div>
        
        <div className="p-3">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-bag fs-1 text-muted mb-3"></i>
              <p className="text-muted">Your cart is empty</p>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <img src={item.image} alt={item.name} className="rounded" style={{width: '60px', height: '60px', objectFit: 'cover'}} />
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="text-muted small mb-1">{item.price}</p>
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="btn btn-link text-danger p-0 ms-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              ))}
              
              <div className="border-top pt-3 mt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <strong>Total: ${getCartTotal()}</strong>
                </div>
                <button className="btn btn-dark w-100 mb-2">
                  Checkout
                </button>
                <button className="btn btn-outline-secondary w-100" onClick={() => setShowCart(false)}>
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cart Backdrop */}
      {showCart && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{zIndex: 1040}}
          onClick={() => setShowCart(false)}
        ></div>
      )}

      {/* Hero Section */}
      <div className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Tesla Shop</h1>
          <p className="lead mb-4">The Official Tesla Store</p>
          <p className="mb-0">Accessories, charging solutions, and lifestyle products designed for Tesla owners</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <nav className="nav nav-pills justify-content-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`nav-link mx-2 ${activeCategory === category.id ? 'active bg-dark' : 'text-light'}`}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    border: activeCategory === category.id ? 'none' : '1px solid #dee2e6',
                    borderRadius: '25px'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container pb-5">
        <div className="row g-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <div className="card border-0 h-100" style={{transition: 'transform 0.3s ease'}}>
                <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                  <img 
                    src={product.image} 
                    className="card-img-top w-100 h-100" 
                    alt={product.name}
                    style={{objectFit: 'cover', transition: 'transform 0.3s ease'}}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-medium mb-2">{product.name}</h5>
                  <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 mb-0 fw-bold">{product.price}</span>
                    <button 
                      className="btn btn-dark px-4" 
                      style={{borderRadius: '25px'}}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('Add to cart clicked for:', product.name);
                        addToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="mb-3">
                <i className="bi bi-truck fs-1 text-dark"></i>
              </div>
              <h5 className="fw-medium">Free Shipping</h5>
              <p className="text-muted">Free shipping on orders over $100</p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="mb-3">
                <i className="bi bi-shield-check fs-1 text-dark"></i>
              </div>
              <h5 className="fw-medium">Tesla Quality</h5>
              <p className="text-muted">Designed and tested by Tesla</p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="mb-3">
                <i className="bi bi-headset fs-1 text-dark"></i>
              </div>
              <h5 className="fw-medium">24/7 Support</h5>
              <p className="text-muted">Expert customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">TESLA</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white-50 text-decoration-none">About</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Careers</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Investor Relations</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-medium mb-3">Vehicles</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white-50 text-decoration-none">Model S</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Model 3</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Model X</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Model Y</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-medium mb-3">Energy</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white-50 text-decoration-none">Solar Panels</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Solar Roof</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Powerwall</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-medium mb-3">Support</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white-50 text-decoration-none">Customer Support</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Find Us</a></li>
                <li><a href="/" className="text-white-50 text-decoration-none">Contact</a></li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-white-50">&copy; 2025 Tesla, Inc. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="/" className="text-white-50 me-3"><i className="bi bi-twitter"></i></a>
              <a href="/" className="text-white-50 me-3"><i className="bi bi-facebook"></i></a>
              <a href="/" className="text-white-50 me-3"><i className="bi bi-instagram"></i></a>
              <a href="/" className="text-white-50"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cart Icon - Bottom Right Corner */}
      <div 
        className="position-fixed bottom-0 end-0 m-4"
        style={{zIndex: 1030}}
      >
        {/* Cart Notification */}
        {showNotification && (
          <div 
            className="position-absolute bottom-100 end-0 mb-2 alert alert-success alert-dismissible fade show"
            style={{minWidth: '200px', animation: 'slideInUp 0.3s ease'}}
          >
            <i className="bi bi-check-circle me-2"></i>
            Item added to cart!
          </div>
        )}
        
        {/* Floating Cart Button */}
        <button
          className="btn btn-dark rounded-circle shadow-lg position-relative"
          style={{
            width: '60px',
            height: '60px',
            fontSize: '24px',
            transition: 'all 0.3s ease',
            border: '3px solid #fff'
          }}
          onClick={() => setShowCart(true)}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
        >
          <i className="bi bi-bag-fill"></i>
          {getCartItemsCount() > 0 && (
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{fontSize: '0.7rem', minWidth: '20px'}}
            >
              {getCartItemsCount()}
            </span>
          )}
        </button>
      </div>

      {/* Bootstrap Icons CSS */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css" rel="stylesheet" />
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Shop