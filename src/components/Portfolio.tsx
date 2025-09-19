import { useState } from 'react';
import { ExternalLink, Github, Server, Database, Cloud, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Microservices Platform',
      category: 'APIs',
      description: 'Sistema de e-commerce distribuído com arquitetura de microserviços, processamento de pagamentos, e alta disponibilidade.',
      icon: <Server className="h-8 w-8" />,
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      metrics: { users: '100K+', requests: '1M/day', uptime: '99.9%' },
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Real-time Analytics Engine',
      category: 'Data',
      description: 'Engine de processamento de dados em tempo real para análise de comportamento de usuários e métricas de negócio.',
      icon: <Database className="h-8 w-8" />,
      technologies: ['Python', 'Apache Kafka', 'ClickHouse', 'Kubernetes'],
      metrics: { events: '10M/day', latency: '<50ms', throughput: '100K/s' },
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Automation',
      category: 'DevOps',
      description: 'Infraestrutura completa como código com CI/CD, monitoramento automatizado e escalamento automático.',
      icon: <Cloud className="h-8 w-8" />,
      technologies: ['Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
      metrics: { deployments: '50/day', MTTR: '5min', savings: '40%' },
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Financial Transaction API',
      category: 'APIs',
      description: 'API robusta para processamento de transações financeiras com compliance PCI-DSS e alta segurança.',
      icon: <Server className="h-8 w-8" />,
      technologies: ['Go', 'PostgreSQL', 'JWT', 'Vault', 'Istio'],
      metrics: { transactions: '500K/day', fraud: '<0.1%', latency: '<100ms' },
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 5,
      title: 'Multi-tenant SaaS Backend',
      category: 'SaaS',
      description: 'Backend multi-inquilino escalável para SaaS com isolamento de dados e billing automatizado.',
      icon: <Code className="h-8 w-8" />,
      technologies: ['Java Spring', 'MongoDB', 'RabbitMQ', 'Docker'],
      metrics: { tenants: '1000+', scaling: 'Auto', isolation: '100%' },
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 6,
      title: 'ML Model Serving Platform',
      category: 'Data',
      description: 'Plataforma para deploy e serving de modelos de machine learning com A/B testing e monitoramento.',
      icon: <Database className="h-8 w-8" />,
      technologies: ['Python', 'MLflow', 'Kubernetes', 'TensorFlow'],
      metrics: { models: '50+', predictions: '1M/day', accuracy: '98%' },
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  const categories = ['Todos', 'APIs', 'Data', 'DevOps', 'SaaS'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Projetos Backend
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sistemas robustos que escalam e geram resultados reais para empresas de diversos segmentos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? 'bg-blue-600 hover:bg-blue-700 text-white border-none'
                  : 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-black'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-4">
                  {project.icon}
                </div>
                <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800 rounded-lg">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-blue-400 font-bold text-lg">{value}</div>
                    <div className="text-gray-400 text-xs capitalize">{key}</div>
                  </div>
                ))}
              </div>

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

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Interessado em ver mais projetos ou discutir uma oportunidade?</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Vamos Conversar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;