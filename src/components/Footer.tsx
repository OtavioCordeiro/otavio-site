import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg mb-2">
            © {currentYear} Otavio Cordeiro Lopes. Todos os direitos reservados.
          </p>
          <p className="text-sm opacity-80 flex items-center justify-center">
            Desenvolvido com <Heart className="h-4 w-4 mx-1 text-red-400" /> usando React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;