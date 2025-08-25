import { Code, Database, Cloud, Zap, Server, Globe } from 'lucide-react';
import profileImage from '@/assets/otavio-profile.jpg';

const About = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Server className="h-6 w-6" />,
      skills: ['.NET 8 / C#', 'ASP.NET Core', 'Entity Framework Core', 'Python'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frontend',
      icon: <Globe className="h-6 w-6" />,
      skills: ['Razor Pages', 'React', 'JavaScript', 'HTML5'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Banco de Dados',
      icon: <Database className="h-6 w-6" />,
      skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'Cosmos DB'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['AWS', 'Azure', 'Docker'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Integrações',
      icon: <Zap className="h-6 w-6" />,
      skills: ['RabbitMQ', 'WhatsApp API', 'APIs REST', 'JWT'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Outros',
      icon: <Code className="h-6 w-6" />,
      skills: ['Git', 'Clean Architecture', 'Testes Unitários', 'Clean Code'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img 
                src={profileImage} 
                alt="Otavio Cordeiro Lopes" 
                className="w-64 h-64 rounded-full object-cover shadow-strong mx-auto lg:mx-0"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-primary-dark/5" />
            </div>
          </div>
          
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sou um desenvolvedor especializado em .NET e tecnologias modernas, com sólida experiência 
              em desenvolvimento backend, frontend, cloud computing e integrações complexas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Minha paixão está em criar soluções digitais que não apenas funcionam, mas que são 
              escaláveis, seguras e proporcionam excelente experiência ao usuário.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma abordagem focada em qualidade e boas práticas, trabalho constantemente 
              para entregar código limpo, testável e de fácil manutenção.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
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