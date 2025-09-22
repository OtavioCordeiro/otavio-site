import { User, Heart, Target, Star, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Pessoas em primeiro lugar",
      description: "Todo grande projeto nasce de boas conexões",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Família e amor",
      description: "Minha base e inspiração",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Investimento",
      description: "Conhecimento e tecnologia como caminho para o futuro",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Verdade e honestidade",
      description: "Valores que guiam minha vida pessoal e profissional",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Crescimento constante",
      description: "Evolução contínua como profissional e ser humano",
      icon: <User className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-[url('/images/seção2.png?v=2')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            "Mais do que código, acredito em propósito, inovação e pessoas."
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row items-start gap-12 px-4">
            <div className="flex-shrink-0 relative">
              <img
                src="/images/otavio4.png"
                alt="Otavio Cordeiro"
                className="w-[500px] h-[500px] object-cover rounded-lg shadow-lg mx-auto lg:mx-0"
              />
              <div className="absolute inset-0 bg-black/15 rounded-lg"></div>
            </div>
            <div className="flex-1 lg:pl-8">
              <p className="text-white text-lg leading-relaxed mb-6 drop-shadow-lg text-justify">
                Desenvolvedor full stack com mais de 10 anos de experiência, Sou alguém guiado por propósito, fé e paixão, acredito no poder da tecnologia para transformar e facilitar a vida das pessoas.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6 drop-shadow-lg text-justify">
                Minha jornada na programação começou em 2011, de forma simples, com um curso de HTML em uma pequena escola de bairro. No ano seguinte, aprofundei meus estudos em um curso técnico de informática, onde descobri a verdadeira lógica de programação — e ali descobri minha paixão.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6 drop-shadow-lg text-justify">
                O grande ponto de virada veio em 2014, quando fui contratado pela Mundipagg, o início de um sonho que mais tarde se tornou a Stone, uma das maiores companhias de pagamentos do Brasil. Ali encontrei pessoas que acreditaram em mim não apenas pelo que eu sabia, mas por minha dedicação, meu raciocínio lógico e força de vontade. Com isso, no mesmo ano comecei minha faculdade. Essa confiança moldou minha trajetória e me tornou o profissional que sou hoje.
              </p>
              <p className="text-white text-lg leading-relaxed drop-shadow-lg text-justify">
                Desde então, já se passaram mais de 10 anos de experiência, atuando em empresas de diferentes portes e segmentos, sempre com o mesmo objetivo: criar soluções que realmente importam, entregando além do que foi pedido e impactando positivamente os projetos e as pessoas ao meu redor.
              </p>
            </div>
          </div>
        </div>


        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Meus valores</h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-12" />

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-2">01</div>
                <div className="flex justify-center mb-4 relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full z-10"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Pessoas em 1° lugar</h4>
                <p className="text-gray-300 text-sm drop-shadow-lg">
                  Todo grande projeto nasce de
                  boas conexões
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-2">02</div>
                <div className="flex justify-center mb-4 relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full z-10"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Família e amor</h4>
                <p className="text-gray-300 text-sm drop-shadow-lg">
                  Minha base e inspiração
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-2">03</div>
                <div className="flex justify-center mb-4 relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full z-10"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Investimento</h4>
                <p className="text-gray-300 text-sm drop-shadow-lg">
                  Conhecimento e tecnologia como
                  caminho para o futuro
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-2">04</div>
                <div className="flex justify-center mb-4 relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full z-10"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Verdade e honestidade</h4>
                <p className="text-gray-300 text-sm drop-shadow-lg">
                  Valores que guiam minha vida
                  pessoal e profissional
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-gray-400 mb-2">05</div>
                <div className="flex justify-center mb-4 relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full z-10"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Crescimento constante</h4>
                <p className="text-gray-300 text-sm drop-shadow-lg">
                  Evolução contínua como
                  profissional e ser humano
                </p>
              </div>
            </div>

            {/* Linha conectando as bolinhas */}
            <div className="absolute top-[71px] left-0 right-0 hidden lg:block">
              <div className="h-0.5 bg-gray-500/50 mx-auto" style={{width: '76%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;