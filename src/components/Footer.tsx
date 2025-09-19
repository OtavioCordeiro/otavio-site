import { Code, Server, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold text-white">
                Backend<span className="text-blue-400">Dev</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvedor backend especializado em sistemas escaláveis,
              APIs robustas e arquiteturas de microserviços.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                Desenvolvimento de APIs
              </li>
              <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                Arquitetura de Microserviços
              </li>
              <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                Migração para Cloud
              </li>
              <li className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                Consultoria Técnica
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Resposta em até 24 horas
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Backend Developer. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Powered by</span>
              <Server className="h-4 w-4 text-blue-400" />
              <span>React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;