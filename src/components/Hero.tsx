import { Github, Linkedin, Code, Server, Database } from 'lucide-react';
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
            Otavio Lopes
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 font-light mb-4">
            Criador de Soluções Digitais
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Especialista em transformar desafios em oportunidades através da tecnologia. Com mais de 10 anos de experiência, crio soluções digitais inovadoras que conectam pessoas, otimizam processos e impulsionam negócios. Trabalho com propósito: fazer a tecnologia servir às pessoas.
          </p>
          <h3 className="text-lg md:text-xl text-gray-400 mb-12">
            Sistemas Completos • Infraestrutura Cloud • Processos Automatizados
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
              Entrar em Contato
            </Button>
          </div>

          <div className="flex justify-start space-x-6">
            <a
              href="https://discord.gg/DShfpM7AJx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
              title="Discord"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </a>
            <a
              href="https://github.com/OtavioCordeiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              title="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/otavio-cordeiro-lopes-4aa16788/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;