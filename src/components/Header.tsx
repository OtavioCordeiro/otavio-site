import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Especialização' },
    { href: '#portfolio', label: 'Projetos' },
    { href: '#contact', label: 'Contratar' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="text-xl font-bold text-white">
              Backend<span className="text-blue-400">Dev</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white border-none px-6 py-2 transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Proposta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-blue-400 hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-gray-900 rounded-xl border border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4 border-t border-gray-700 mt-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none"
              >
                Solicitar Proposta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;