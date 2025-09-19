import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profileImage from '@/assets/otavio-profile.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Otavio Cordeiro Lopes
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
              Desenvolvedor .NET Fullstack
            </h2>
            <p className="text-lg md:text-xl text-foreground mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Transformo ideias em soluções digitais eficientes, escaláveis e seguras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button onClick={scrollToPortfolio} size="lg" className="text-lg">
                Veja meu portfólio
              </Button>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/OtavioCordeiro" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Github className="h-6 w-6" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/otavio-cordeiro-lopes-4aa16788" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Linkedin className="h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in md:order-first">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20 shadow-lg">
              <AvatarImage src={profileImage} alt="Otavio Cordeiro Lopes" />
              <AvatarFallback>OC</AvatarFallback>
            </Avatar>
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