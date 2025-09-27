import { Code, Database, Cloud, Zap, Server, Cpu, Shield, GitBranch } from 'lucide-react';

const Specialization = () => {
  const skillCategories = [
    {
      title: 'Desenvolvimento Completo',
      icon: <Code className="h-6 w-6" />,
      skills: ['Sistemas Empresariais', 'Automação Inteligente', 'Interfaces Modernas', 'Aplicações Web Completas'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Conectividade & Integrações',
      icon: <Zap className="h-6 w-6" />,
      skills: ['Conexões Seguras', 'Comunicação Direta', 'Bots Inteligentes', 'Mensageria Confiável'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Gestão de Dados',
      icon: <Database className="h-6 w-6" />,
      skills: ['Armazenamento Seguro', 'Performance Otimizada', 'Escalabilidade Global', 'Consultas Eficientes'],
      color: 'from-blue-700 to-blue-900'
    },
    {
      title: 'Infraestrutura Moderna',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['Nuvem Escalável', 'Deploy Simplificado', 'Código Sustentável', 'Segurança Robusta'],
      color: 'from-blue-500 to-blue-800'
    }
  ];

  return (
    <section id="specialization" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Especialização Tecnológica
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformo desafios complexos em soluções digitais escaláveis e seguras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                🎯 Impacto & Resultados
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  10+ anos construindo sistemas que atendem milhões de usuários
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Especialista em arquiteturas que crescem com o negócio
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Experiência em múltiplos segmentos: fintech, seguros, monitoramento
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Soluções que reduzem custos e aumentam eficiência
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                ⚡ Abordagem Profissional
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Código limpo e bem documentado
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Testes automatizados para garantir qualidade
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Entregas contínuas e deployments seguros
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Monitoramento em tempo real
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...skillCategories, ...skillCategories].map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 flex-none w-80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-3`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;