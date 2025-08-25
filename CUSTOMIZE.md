# 🚀 Guia de Personalização - Site Otavio Cordeiro Lopes

Este guia te ajudará a personalizar facilmente seu site pessoal.

## 📝 Como Editar Textos

### 1. Informações Pessoais (Hero Section)
Arquivo: `src/components/Hero.tsx`
- **Nome**: Linha 12 - "Otavio Cordeiro Lopes"
- **Título**: Linha 15 - "Desenvolvedor .NET Fullstack"
- **Frase de Impacto**: Linhas 18-20 - "Transformo ideias em soluções digitais..."

### 2. Biografia (Sobre Mim)
Arquivo: `src/components/About.tsx`
- **Textos da biografia**: Linhas 47-58
- **Skills por categoria**: Linhas 8-37 (adicione/remova tecnologias)

### 3. Informações de Contato
Arquivo: `src/components/Contact.tsx`
- **Email**: Linha 58 - "otavionew@hotmail.com"
- **Telefone**: Linha 66 - "+55 (11) 99999-9999"
- **Localização**: Linha 74 - "São Paulo, Brasil"

## 🖼️ Como Trocar Imagens

### 1. Foto de Perfil
1. Substitua o arquivo `src/assets/otavio-profile.jpg`
2. Use uma imagem quadrada (recomendado: 512x512px)
3. O arquivo será automaticamente usado no componente About

### 2. Imagens dos Projetos
Arquivo: `src/components/Portfolio.tsx`
- Substitua as URLs nas linhas com `image: '/placeholder.svg'`
- Use imagens de proporção 16:9 (ex: 800x450px)
- Você pode usar imagens locais colocando em `src/assets/` e importando

## 📂 Como Editar Projetos do Portfólio

Arquivo: `src/components/Portfolio.tsx` (linhas 7-61)

Para cada projeto, você pode editar:
- **title**: Nome do projeto
- **category**: 'Web', 'Bots' ou 'Cloud'
- **description**: Descrição do projeto
- **image**: Caminho para a imagem
- **technologies**: Array de tecnologias usadas
- **githubUrl**: Link do GitHub
- **liveUrl**: Link do projeto funcionando

### Exemplo de como adicionar um novo projeto:
```javascript
{
  id: 7,
  title: 'Meu Novo Projeto',
  category: 'Web',
  description: 'Descrição do que o projeto faz.',
  image: '/caminho/para/imagem.jpg',
  technologies: ['.NET Core', 'React', 'PostgreSQL'],
  githubUrl: 'https://github.com/seu-usuario/projeto',
  liveUrl: 'https://seu-projeto.com'
}
```

## 🔗 Como Atualizar Links Sociais

### 1. Links do Header (Hero Section)
Arquivo: `src/components/Hero.tsx` (linhas 41-59)
- **GitHub**: Linha 43
- **LinkedIn**: Linha 50
- **Email**: Linha 57

### 2. Links da Seção de Contato
Arquivo: `src/components/Contact.tsx` (linhas 36-50)
- Atualize as URLs dos perfis sociais

## 📄 Como Adicionar seu Currículo PDF

1. Coloque seu arquivo PDF na pasta `public/`
2. No arquivo `src/components/Contact.tsx`, linha 83
3. Adicione o link: `href="/seu-curriculo.pdf"`

## 🎨 Como Personalizar Cores

### Paleta de Cores Principal
Arquivo: `src/index.css` (linhas 11-18)

Para mudar a cor primária (azul), altere:
- `--primary`: cor principal
- `--primary-dark`: versão mais escura
- `--primary-light`: versão mais clara

### Cores Disponíveis:
- **Azul Atual**: `220 90% 56%` (profissional)
- **Verde**: `142 76% 36%` (tecnologia)
- **Roxo**: `263 70% 50%` (criativo)
- **Laranja**: `25 95% 53%` (energético)

## 🌐 SEO - Como Aparecer no Google

### 1. Informações Básicas
Arquivo: `index.html` (linhas 6-11)
- Atualize title, description e keywords com suas informações

### 2. Dados Estruturados
Arquivo: `index.html` (linhas 23-39)
- Atualize o JSON-LD com seus dados pessoais
- Adicione seus perfis reais do LinkedIn e GitHub

## 📱 Responsividade

O site já é totalmente responsivo! Funciona perfeitamente em:
- 📱 Celulares (todas as telas)
- 📱 Tablets 
- 💻 Desktops
- 🖥️ Monitores grandes

## 🚀 Como Fazer Deploy

1. **Conecte seu domínio** nas configurações do projeto
2. **Clique em "Publish"** no Lovable
3. **Configure DNS** se usar domínio próprio

## 💡 Dicas Extras

### Para Adicionar Mais Seções:
1. Crie um novo componente em `src/components/`
2. Importe no `src/pages/Index.tsx`
3. Adicione o link no menu (`src/components/Header.tsx`)

### Para Mudar Animações:
- Todas as animações estão em `tailwind.config.ts`
- Use classes como `animate-fade-in` nos componentes

### Para Adicionar Ícones:
- Use a biblioteca Lucide React já instalada
- Exemplo: `import { NomeIcon } from 'lucide-react'`

---

**Precisa de ajuda?** 
- Consulte a documentação do Lovable
- Entre em contato através do chat do Lovable

**Seu site está pronto!** 🎉
Agora é só personalizar com suas informações e fazer o deploy!