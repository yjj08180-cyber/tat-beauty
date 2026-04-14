import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import UnicornStudioBackground from './components/UnicornStudioBackground';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-porcelain text-charcoal font-sans selection:bg-amber selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-porcelain/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo (Left) */}
          <a href="#" className={`flex flex-col items-start transition-colors duration-500 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
            <span className="text-2xl md:text-3xl font-serif tracking-tight">D'AUYO</span>
            <span className="text-[0.6rem] tracking-[0.3em] mt-1 ml-1">S E O U L</span>
          </a>

          {/* Menu (Right) */}
          <div className={`hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
            <a href="#brand" className="hover:text-amber transition-colors">Brand</a>
            <a href="#products" className="hover:text-amber transition-colors">Products</a>
            <a href="#ingredients" className="hover:text-amber transition-colors">Ingredients</a>
            <a href="#contact" className="hover:text-amber transition-colors">Contact</a>
            <div className={`flex items-center space-x-2 border-l pl-8 transition-colors duration-500 ${isScrolled ? 'border-ash/30' : 'border-white/30'}`}>
              <Globe className="w-4 h-4" strokeWidth={1.5} />
              <button className="hover:text-amber transition-colors font-medium">EN</button>
              <span className="opacity-50">/</span>
              <button className="opacity-70 hover:opacity-100 hover:text-amber transition-colors">KR</button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`transition-colors duration-500 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
              {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-porcelain pt-24 px-6">
          <div className="flex flex-col space-y-8 text-sm tracking-[0.2em] uppercase items-center text-charcoal">
            <a href="#brand" onClick={() => setIsMobileMenuOpen(false)}>Brand</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#ingredients" onClick={() => setIsMobileMenuOpen(false)}>Ingredients</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <div className="flex items-center space-x-4 pt-8 border-t border-ash/20 w-16 justify-center">
              <button className="font-medium">EN</button>
              <span className="text-ash/50">/</span>
              <button className="text-ash">KR</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <UnicornStudioBackground />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 text-porcelain drop-shadow-2xl leading-tight"
          >
            Contemporary<br />Korean Beauty
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg font-light tracking-wide text-porcelain/80 mb-12 max-w-2xl mx-auto drop-shadow-lg"
          >
            Science-backed aesthetics inspired by the purity of white porcelain and the transformative power of the kiln.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pointer-events-auto"
          >
            <a href="#brand" className="inline-block border border-porcelain/50 text-porcelain px-12 py-4 tracking-[0.2em] uppercase text-xs hover:bg-porcelain hover:text-charcoal transition-all duration-500 backdrop-blur-sm">
              Discover D'AUYO
            </a>
          </motion.div>
        </div>
      </section>

      {/* Brand Essence */}
      <section id="brand" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto bg-porcelain">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] overflow-hidden bg-bisque"
            >
              <img 
                src="https://picsum.photos/seed/porcelain/800/1000?grayscale" 
                alt="White Porcelain Inspiration" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-amber text-xs tracking-[0.2em] uppercase mb-6">Our Philosophy</h3>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-charcoal">The Aesthetics of<br />White Porcelain</h2>
              <p className="text-ash leading-relaxed mb-6 font-light text-sm md:text-base">
                D'AUYO embodies the refined elegance of traditional Korean white porcelain. We believe true beauty is not about adding complexity, but about stripping away the unnecessary to reveal pure, transformative radiance.
              </p>
              <p className="text-ash leading-relaxed mb-12 font-light text-sm md:text-base">
                Just as raw clay is transformed by the intense heat of the kiln, our science-backed formulations catalyze profound changes within the skin, delivering unparalleled efficacy with a minimalist approach.
              </p>
              <a href="#products" className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-charcoal hover:text-amber transition-colors group">
                Explore Our Rituals
                <span className="ml-4 w-12 h-[1px] bg-charcoal group-hover:bg-amber transition-colors"></span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Products */}
      <section id="products" className="py-32 md:py-48 px-6 md:px-12 bg-bisque">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <h3 className="text-amber text-xs tracking-[0.2em] uppercase mb-4">Products</h3>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-charcoal">Signature Rituals</h2>
            <div className="w-px h-16 bg-amber/50 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { name: 'Porcelain Essence', category: 'Toner / Prep', desc: 'A deeply hydrating first-step essence that refines texture.', image: 'https://picsum.photos/seed/essence/600/800?grayscale&blur=1' },
              { name: 'Kiln Charcoal Ampoule', category: 'Intensive Care', desc: 'High-potency active complex for profound skin transformation.', image: 'https://picsum.photos/seed/ampoule/600/800?grayscale' },
              { name: 'Bisque Recovery Cream', category: 'Moisturizer', desc: 'A rich, comforting barrier cream with a velvety finish.', image: 'https://picsum.photos/seed/cream/600/800?grayscale&blur=2' }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-porcelain">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-porcelain text-charcoal px-8 py-4 tracking-[0.2em] uppercase text-[10px] hover:text-amber transition-colors">View Details</span>
                  </div>
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <span className="text-ash text-[10px] tracking-[0.2em] uppercase mb-3">{product.category}</span>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 text-charcoal">{product.name}</h3>
                  <p className="text-ash font-light text-sm leading-relaxed max-w-xs mx-auto">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients / Science */}
      <section id="ingredients" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto bg-porcelain">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square overflow-hidden bg-bisque"
            >
              <img 
                src="https://picsum.photos/seed/ingredients/800/800?grayscale" 
                alt="Botanical Research" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-amber text-xs tracking-[0.2em] uppercase mb-6">Science & Nature</h3>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-charcoal">Formulated with<br />Absolute Precision</h2>
              <p className="text-ash leading-relaxed mb-8 font-light text-sm md:text-base">
                Our ingredient philosophy is rooted in strict curation. We select only the most potent, clinically-proven active compounds and harmonize them with time-honored botanical extracts.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <span className="text-amber mr-4 mt-1">01</span>
                  <div>
                    <h4 className="text-charcoal font-medium text-sm tracking-wide mb-1">Micro-Fermentation Technology</h4>
                    <p className="text-ash font-light text-sm">Enhancing absorption and efficacy through controlled, low-temperature fermentation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber mr-4 mt-1">02</span>
                  <div>
                    <h4 className="text-charcoal font-medium text-sm tracking-wide mb-1">Clean & Conscious</h4>
                    <p className="text-ash font-light text-sm">Free from unnecessary additives. Formulated for optimal skin biocompatibility.</p>
                  </div>
                </li>
              </ul>
              <a href="#" className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-charcoal hover:text-amber transition-colors group">
                Read Our Ingredient Standards
                <span className="ml-4 w-12 h-[1px] bg-charcoal group-hover:bg-amber transition-colors"></span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact / Partnership CTA */}
      <section id="contact" className="py-32 md:py-48 bg-charcoal text-porcelain text-center px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-amber text-xs tracking-[0.2em] uppercase mb-6"
          >
            Global Partnerships
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif mb-8 leading-tight"
          >
            Join the D'AUYO Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-ash font-light mb-12 max-w-xl mx-auto text-base"
          >
            We welcome inquiries from global distributors, retail partners, and press. Discover how we can elevate the standard of beauty together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="mailto:contact@dauyo.com" className="inline-block border border-porcelain text-porcelain px-12 py-4 tracking-[0.2em] uppercase text-xs hover:bg-porcelain hover:text-charcoal transition-all duration-500">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-porcelain pt-32 pb-12 px-6 md:px-12 border-t border-bisque">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24">
            {/* Logo Recreation */}
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-serif tracking-tight text-charcoal mb-3">D'AUYO</h2>
              <p className="text-sm md:text-base tracking-[0.5em] text-charcoal font-light ml-2">S E O U L</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-xs tracking-[0.2em] uppercase text-ash">
              <a href="#brand" className="hover:text-amber transition-colors">Brand</a>
              <a href="#products" className="hover:text-amber transition-colors">Products</a>
              <a href="#ingredients" className="hover:text-amber transition-colors">Ingredients</a>
              <a href="#contact" className="hover:text-amber transition-colors">Contact</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-10 border-t border-bisque text-[10px] text-ash tracking-[0.2em] uppercase">
            <div className="text-center md:text-left">
              &copy; 2026 D'AUYO SEOUL.
            </div>
            <div className="flex justify-center gap-8">
              <a href="#" className="hover:text-charcoal transition-colors">Instagram</a>
              <a href="#" className="hover:text-charcoal transition-colors">LinkedIn</a>
            </div>
            <div className="flex justify-center md:justify-end gap-8">
              <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-charcoal transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
