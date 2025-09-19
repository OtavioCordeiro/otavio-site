import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'NotifyG',
      category: 'Web',
      description: 'Plataforma com sistema de apps temáticos. Usuários escolhem apps como "Joel Jota" (podcasts diários) e "Grão de Fé" (mensagens bíblicas) e recebem conteúdo texto + áudio no canal preferido.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'API Integration', 'Multi-channel'],
      githubUrl: '#',
      liveUrl: 'https://notifyg.com'
    },
    {
      id: 2,
      title: 'Bot de Tradução',
      category: 'Bots',
      description: 'Bot automático de tradução para salas de conversa que traduz mensagens do português para inglês e vice-versa em tempo real.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Google Translate API', 'WebSocket', 'Threading'],
      githubUrl: 'https://github.com',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Lista - Site de Listas de Presentes',
      category: 'Web',
      description: 'Plataforma web para criação e compartilhamento de listas de presentes, facilitando a organização de eventos e celebrações.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: '#'
    }
  ];

  const categories = ['Todos', 'Web', 'Bots'];
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