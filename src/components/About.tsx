import { Code, Database, Cloud, Zap, Server, Cpu, Shield, GitBranch } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      skills: ['Node.js', 'Python', 'Java', 'C#/.NET', 'Go', 'Express.js'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'APIs & Microservices',
      icon: <Zap className="h-6 w-6" />,
      skills: ['REST APIs', 'GraphQL', 'gRPC', 'Microservices', 'WebSockets', 'Event-Driven'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'DynamoDB'],
      color: 'from-blue-700 to-blue-900'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins'],
      color: 'from-blue-500 to-blue-800'
    },
    {
      title: 'Architecture',
      icon: <Cpu className="h-6 w-6" />,
      skills: ['Clean Architecture', 'DDD', 'CQRS', 'Event Sourcing', 'SOLID', 'Design Patterns'],
      color: 'from-blue-600 to-blue-900'
    },
    {
      title: 'Security & Tools',
      icon: <Shield className="h-6 w-6" />,
      skills: ['OAuth/JWT', 'SSL/TLS', 'Git', 'Testing', 'Monitoring', 'Logging'],
      color: 'from-blue-700 to-blue-900'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Especialização Backend
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvo sistemas robustos, APIs escaláveis e arquiteturas de software que suportam milhões de usuários
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                <GitBranch className="h-6 w-6 mr-3" />
                Experiência Sólida
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  5+ anos desenvolvendo sistemas backend de alta performance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Especialista em arquiteturas de microserviços
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Experiência com sistemas distribuídos em cloud
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Otimização de performance e escalabilidade
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                <Code className="h-6 w-6 mr-3" />
                Abordagem Profissional
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Clean Code e Test-Driven Development (TDD)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Documentação técnica completa e clara
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Delivery contínuo com CI/CD
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Monitoramento e observabilidade de sistemas
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  >
                    {skill}
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

export default About;