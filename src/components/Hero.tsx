import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Otavio Cordeiro Lopes
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
            Desenvolvedor .NET Fullstack
          </h2>
          <p className="text-xl md:text-2xl text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformo ideias em soluções digitais eficientes, escaláveis e seguras
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToPortfolio}
              className="btn-hero text-lg"
            >
              Veja meu portfólio
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-4"
            >
              Entre em contato
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/OtavioCordeiro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/otavio-cordeiro-lopes-4aa16788" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>            
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;