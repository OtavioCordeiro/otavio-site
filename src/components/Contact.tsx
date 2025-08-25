import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Download } from 'lucide-react';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://linkedin.com/in/otavio-cordeiro-lopes',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/otaviocordeiro',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-6 w-6" />,
      url: 'https://instagram.com/otaviocordeiro',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Vamos Conversar
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tenho um projeto em mente ou quer discutir oportunidades? Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg text-foreground">otavio.cordeiro@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="text-lg text-foreground">+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-lg text-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <div className="mb-8">
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:shadow-medium transition-smooth"
              >
                <Download className="h-5 w-5 mr-2" />
                Baixar Currículo PDF
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-smooth shadow-soft hover:shadow-medium transform hover:-translate-y-1`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full resize-none"
                  placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3 text-lg transition-smooth"
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;