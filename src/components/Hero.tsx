import { ArrowDown, Github, Linkedin, Code, Server, Database } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/images/otavio1.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-4 text-left relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="flex justify-start mb-8">
            <div className="flex space-x-4 text-blue-400">
              <Server className="h-8 w-8 animate-pulse" />
              <Database className="h-8 w-8 animate-pulse delay-100" />
              <Code className="h-8 w-8 animate-pulse delay-200" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Otávio Cordeiro
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 font-light mb-4">
            Especialista em Arquiteturas Escaláveis
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Desenvolvedor Full Stack especializado em .NET, apaixonado por criar soluções que fazem a diferença na vida das pessoas. Trabalho construindo aplicações escaláveis e seguras com mais de 10 anos de experiência.
          </p>
          <h3 className="text-lg md:text-xl text-gray-400 mb-12">
            APIs • Microserviços • Cloud • DevOps
          </h3>

          <div className="flex flex-col sm:flex-row gap-6 justify-start items-start mb-16">
            <Button
              onClick={scrollToPortfolio}
              className="bg-blue-600 hover:bg-blue-700 text-white border-none text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 text-lg px-8 py-4"
            >
              Contratar Serviços
            </Button>
          </div>

          <div className="flex justify-start space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;