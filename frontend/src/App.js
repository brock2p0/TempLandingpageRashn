import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, CheckCircle, ExternalLink, Heart, Truck, Clock, Users } from "lucide-react";
import "./App.css";

const RashnLanding = () => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Smooth scroll for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle email signup
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !gdprConsent) return;
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setEmail('');
      setGdprConsent(false);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (scrolled > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 overflow-hidden">
      {/* Navigation */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-aqua-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-teal-800">Rashn</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-teal-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('features')} className="text-slate-700 hover:text-teal-600 transition-colors">Features</button>
              <button onClick={() => scrollToSection('signup')} className="text-slate-700 hover:text-teal-600 transition-colors">Join Us</button>
            </div>
            <button 
              onClick={() => scrollToSection('signup')}
              className="bg-gradient-to-r from-teal-600 to-aqua-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-teal-700 hover:to-aqua-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-aqua-800/20 backdrop-blur-sm"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwZGVsaXZlcnl8ZW58MHx8fHwxNzUyMjM0NzM2fDA&ixlib=rb-4.1.0&q=85")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-lime-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              🌱 Fresh from Local Farms • Delivered to Your Door
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-teal-900 leading-tight">
              Your Time is 
              <span className="bg-gradient-to-r from-aqua-600 to-teal-600 bg-clip-text text-transparent"> Precious</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Skip the grocery store. Get fresh, premium produce delivered from local Omani farms directly to your doorstep. 
              <span className="text-teal-600 font-semibold">More family time, less shopping stress.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={() => scrollToSection('signup')}
                className="bg-gradient-to-r from-teal-600 to-aqua-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-teal-700 hover:to-aqua-600 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Join the Waitlist
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-white/80 backdrop-blur-sm text-teal-800 px-8 py-4 rounded-2xl font-semibold border-2 border-teal-200 hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-teal-900">
                About Rashn
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Rashn is revolutionizing how busy professionals in Oman access fresh, high-quality produce. We believe that everyone deserves convenient access to the finest fruits and vegetables without compromising on quality or time.
                </p>
                <p>
                  Our farm-to-table subscription service connects you directly with trusted local partner farms and verified suppliers across Oman. Every item is hand-picked for freshness and delivered to your door at the perfect time.
                </p>
                <p className="text-teal-700 font-semibold">
                  More than just delivery - we're building a community that values fresh, sustainable, and convenient living.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-lime-100 px-4 py-2 rounded-full">
                  <span className="text-teal-600">🌱</span>
                  <span className="text-teal-800 font-medium">Local Partners</span>
                </div>
                <div className="flex items-center space-x-2 bg-lime-100 px-4 py-2 rounded-full">
                  <span className="text-teal-600">🚚</span>
                  <span className="text-teal-800 font-medium">Fresh Delivery</span>
                </div>
                <div className="flex items-center space-x-2 bg-lime-100 px-4 py-2 rounded-full">
                  <span className="text-teal-600">⏰</span>
                  <span className="text-teal-800 font-medium">Time-Saving</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-aqua-500 rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src="https://images.pexels.com/photos/6994271/pexels-photo-6994271.jpeg" 
                alt="Fresh produce delivery box" 
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-lime-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-teal-900 mb-4">
              Why Choose Rashn?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed specifically for busy professionals who value quality, convenience, and fresh living
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Curated Selection",
                description: "Hand-picked produce from verified local farms and suppliers. Only the freshest makes it to your door."
              },
              {
                icon: "⏰",
                title: "Save 3+ Hours Weekly",
                description: "Skip grocery shopping, traffic, and long queues. Spend more quality time with your family."
              },
              {
                icon: "🌱",
                title: "Farm-to-Table Fresh",
                description: "Direct partnerships with local Omani farms ensure maximum freshness and support local agriculture."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://images.unsplash.com/photo-1695653422259-8a74ffe90401?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxncm9jZXJ5JTIwZGVsaXZlcnl8ZW58MHx8fHwxNzUyMjM0NzM2fDA&ixlib=rb-4.1.0&q=85" 
              alt="Convenient delivery service" 
              className="w-full max-w-2xl mx-auto h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900 to-aqua-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Be the First to Experience Rashn
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join our waitlist and get exclusive lifetime benefits when we launch. Fresh produce, delivered fresh, just for you.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-xl bg-white/90 text-teal-900 placeholder-slate-500 border-2 border-transparent focus:border-lime-400 focus:outline-none font-medium"
                  required
                />
              </div>
              
              <div className="flex items-start space-x-3 text-left">
                <input
                  type="checkbox"
                  id="gdpr"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-teal-300 rounded"
                  required
                />
                <label htmlFor="gdpr" className="text-sm text-teal-100 leading-relaxed">
                  I consent to receive email updates about Rashn's launch and special offers. 
                  We respect your privacy and will never share your information with third parties. 
                  You can unsubscribe at any time.
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email || !gdprConsent}
                className="w-full bg-gradient-to-r from-lime-400 to-lime-500 text-teal-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-lime-500 hover:to-lime-600 transform hover:scale-105 transition-all duration-200 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </form>
            
            {showSuccess && (
              <div className="mt-4 p-4 bg-lime-400/20 border border-lime-400 rounded-xl">
                <p className="text-lime-100 font-semibold">🎉 Welcome to Rashn! Check your email for exclusive updates.</p>
              </div>
            )}
          </div>

          <div className="mt-12">
            <p className="text-teal-100 mb-4 font-semibold">Have feedback? Help us build something amazing!</p>
            <a 
              href="#survey-placeholder" 
              className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-200"
            >
              <span>📋</span>
              <span>Take Our Quick Survey</span>
            </a>
            <p className="text-teal-200 text-sm mt-2">Survey link coming soon</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-lime-400 to-lime-500 rounded-lg flex items-center justify-center">
                  <span className="text-teal-900 font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold">Rashn</span>
              </div>
              <p className="text-teal-200 leading-relaxed mb-4">
                Fresh produce from local Omani farms, delivered to your door. 
                More time for what matters most.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-teal-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-700 transition-colors">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-10 h-10 bg-teal-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-700 transition-colors">
                  <span className="text-sm">📷</span>
                </div>
                <div className="w-10 h-10 bg-teal-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-700 transition-colors">
                  <span className="text-sm">🐦</span>
                </div>
              </div>
              <p className="text-teal-300 text-sm mt-2">Social media links coming soon</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-teal-200">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#signup" className="hover:text-white transition-colors">Join Waitlist</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Logo Space</h3>
              <div className="bg-teal-800 rounded-lg p-4 text-center">
                <p className="text-teal-300 text-sm">Rashn logo will be displayed here</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-teal-800 text-center">
            <img 
              src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHx2ZWdldGFibGVzfGVufDB8fHx8MTc1MjIzNTM4M3ww&ixlib=rb-4.1.0&q=85" 
              alt="Fresh vegetables" 
              className="w-full max-w-md mx-auto h-32 object-cover rounded-xl opacity-60 mb-4"
            />
            <p className="text-teal-200 text-sm">
              © 2024 Rashn. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RashnLanding />
    </div>
  );
}

export default App;