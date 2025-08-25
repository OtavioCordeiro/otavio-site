import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de E-commerce',
      category: 'Web',
      description: 'Plataforma completa de vendas online com .NET Core, integração de pagamentos e painel administrativo.',
      image: '/placeholder.svg',
      technologies: ['.NET Core', 'React', 'SQL Server', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Bot WhatsApp Business',
      category: 'Bots',
      description: 'Automatização completa de atendimento ao cliente com IA e integração com CRM.',
      image: '/placeholder.svg',
      technologies: ['Python', 'WppConnect', 'RabbitMQ', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'API Microserviços',
      category: 'Cloud',
      description: 'Arquitetura de microserviços escalável em AWS com Docker e Kubernetes.',
      image: '/placeholder.svg',
      technologies: ['.NET 8', 'Docker', 'AWS', 'Kubernetes'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'Web',
      description: 'Sistema de analytics em tempo real com visualizações interativas e relatórios.',
      image: '/placeholder.svg',
      technologies: ['React', 'D3.js', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 5,
      title: 'Sistema de Automação',
      category: 'Bots',
      description: 'Robô de automação de processos empresariais com interface web para configuração.',
      image: '/placeholder.svg',
      technologies: ['C#', 'Selenium', 'Angular', 'MySQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 6,
      title: 'Infraestrutura Cloud',
      category: 'Cloud',
      description: 'Deploy automatizado com CI/CD, monitoramento e backup em múltiplas regiões.',
      image: '/placeholder.svg',
      technologies: ['Azure', 'Terraform', 'GitHub Actions', 'Grafana'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  const categories = ['Todos', 'Web', 'Bots', 'Cloud'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meu Portfólio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, desde sistemas web complexos até soluções cloud escaláveis.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-smooth"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-smooth"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;