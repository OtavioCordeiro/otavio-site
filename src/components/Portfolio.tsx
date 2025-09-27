import { ExternalLink, Github, Server, Database, Bell, List, Users, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'NotifyG',
      description: 'Sistema completo de notificações multi-canal com alta performance e observabilidade avançada. Processamento assíncrono, monitoramento em tempo real e arquitetura escalável.',
      icon: <Bell className="h-8 w-8" />,
      technologies: ['.NET', 'Razor Pages', 'RabbitMQ', 'Seq', 'Prometheus', 'Grafana', 'Docker'],
      liveUrl: 'https://notifyg.com/'
    },
    {
      id: 2,
      title: 'ListaAqui',
      description: 'Plataforma moderna de listagens com interface React e backend .NET. Sistema robusto para gerenciamento de conteúdo com performance otimizada.',
      icon: <List className="h-8 w-8" />,
      technologies: ['React', '.NET', 'SQL Server', 'REST API', 'TypeScript'],
      liveUrl: 'https://listaaqui.com/'
    },
    {
      id: 3,
      title: 'Sociedade Dev',
      description: 'Comunidade de desenvolvedores com trilhas de aprendizado em diversas áreas da tecnologia. Plataforma educacional com conteúdo estruturado para estudos e crescimento profissional.',
      icon: <Users className="h-8 w-8" />,
      technologies: ['Comunidade', 'Educação', 'Trilhas', 'Tecnologia', 'Aprendizado'],
      liveUrl: 'http://sociedadedev.net.br'
    },
    {
      id: 4,
      title: 'Bot Tradutor Discord',
      description: 'Bot inteligente para Discord que traduz conversas em tempo real entre português e inglês com síntese de voz. Fala em português, reproduz em inglês e vice-versa.',
      icon: <Bot className="h-8 w-8" />,
      technologies: ['Python', 'APIs', 'Conversor', 'Automação', 'Integração'],
      liveUrl: null
    }
  ];


  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sistemas em produção que demonstram expertise técnica e resultados reais
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const CardComponent = project.liveUrl ? 'a' : 'div';
            const cardProps = project.liveUrl
              ? {
                  href: project.liveUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex flex-col bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group cursor-pointer h-full"
                }
              : {
                  className: "flex flex-col bg-gray-900 border border-gray-700 rounded-2xl p-6 transition-all duration-300 group h-full"
                };

            return (
              <CardComponent
                key={project.id}
                {...cardProps}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              <div className="flex items-center mb-4">
                <div className="text-blue-400">
                  {project.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center mt-auto pt-4">
                {project.liveUrl ? (
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Acessar Sistema</span>
                  </div>
                ) : (
                  <div className="flex items-center text-orange-400">
                    <Bot className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Projeto Privado</span>
                  </div>
                )}
              </div>

            </CardComponent>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Gostou dos projetos? Vamos trocar uma ideia!</p>
          <Button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Entrar em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;