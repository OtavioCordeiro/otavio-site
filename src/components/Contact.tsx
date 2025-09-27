import { useState } from 'react';
import { Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato! Responderei em breve.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };


  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vamos trocar uma ideia? Adoraria conversar com você!
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Conecte-se Comigo</h3>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Vamos conversar sobre:</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Tecnologia e desenvolvimento</li>
                <li>• Projetos interessantes</li>
                <li>• Experiências e aprendizados</li>
                <li>• Qualquer assunto relacionado à tech</li>
              </ul>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://discord.gg/DShfpM7AJx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg text-gray-400 hover:text-indigo-400 border border-gray-700 hover:border-indigo-500 transition-all"
                  title="Discord"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/OtavioCordeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-blue-500 transition-all"
                  title="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/otavio-cordeiro-lopes-4aa16788/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-blue-500 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Deixe seu Contato</h3>

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
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 resize-none"
                  placeholder="Conte um pouco sobre você ou o que gostaria de conversar..."
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
                    Enviar Mensagem
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Responderei em breve • Vamos trocar uma ideia!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;