import { useState } from 'react';
import { Mail, Calendar, DollarSign, Send, Github, Linkedin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Proposta enviada!",
        description: "Analisarei seu projeto e retornarei em até 24h com uma proposta.",
      });
      setFormData({ name: '', email: '', company: '', project: '', budget: '', timeline: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    {
      title: 'Desenvolvimento de APIs',
      description: 'APIs REST e GraphQL escaláveis e seguras',
      price: 'A partir de R$ 5.000',
      timeline: '2-4 semanas'
    },
    {
      title: 'Arquitetura de Microserviços',
      description: 'Design e implementação de sistemas distribuídos',
      price: 'A partir de R$ 15.000',
      timeline: '4-8 semanas'
    },
    {
      title: 'Migração para Cloud',
      description: 'Modernização e migração de sistemas legados',
      price: 'A partir de R$ 10.000',
      timeline: '3-6 semanas'
    },
    {
      title: 'Consultoria Técnica',
      description: 'Auditoria, otimização e orientação técnica',
      price: 'R$ 200/hora',
      timeline: 'Flexível'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Vamos Trabalhar Juntos
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforme sua ideia em realidade. Solicite uma proposta personalizada para seu projeto
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-blue-400">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="text-sm">{service.price}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{service.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Como Funciona</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Análise do Projeto</h4>
                  <p className="text-gray-400">Entendo suas necessidades e objetivos do negócio</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Proposta Técnica</h4>
                  <p className="text-gray-400">Elaboro arquitetura, cronograma e orçamento detalhados</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Desenvolvimento</h4>
                  <p className="text-gray-400">Execução com atualizações constantes e transparência total</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Entrega & Suporte</h4>
                  <p className="text-gray-400">Deploy, documentação e suporte pós-entrega</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                Garantias Incluídas
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Código limpo e documentado</li>
                <li>• Testes automatizados</li>
                <li>• Suporte técnico por 30 dias</li>
                <li>• Documentação completa</li>
                <li>• Deploy e configuração</li>
              </ul>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Solicitar Proposta</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Projeto *
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                >
                  <option value="">Selecione...</option>
                  <option value="api">Desenvolvimento de API</option>
                  <option value="microservices">Arquitetura de Microserviços</option>
                  <option value="cloud">Migração para Cloud</option>
                  <option value="consulting">Consultoria Técnica</option>
                  <option value="custom">Projeto Customizado</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Orçamento Estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Selecione...</option>
                    <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                    <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                    <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                    <option value="50k+">R$ 50.000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Prazo Desejado
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Selecione...</option>
                    <option value="urgent">Urgente (1-2 semanas)</option>
                    <option value="normal">Normal (1-2 meses)</option>
                    <option value="flexible">Flexível (3+ meses)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Descrição do Projeto *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 resize-none"
                  placeholder="Descreva seu projeto, objetivos e principais desafios..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Solicitar Proposta
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Resposta em até 24 horas • Proposta sem compromisso
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;