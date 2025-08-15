# AX37 - Landing Page Marketing de Eventos

## Descrição

Landing page profissional desenvolvida em React para a empresa AX37, especializada em marketing de eventos e montagem de exposições. O projeto incorpora a identidade visual da marca com as cores laranja/amarelo, preto e cinza da logo oficial.

## Características

- **Design Responsivo**: Adaptável para desktop, tablet e mobile
- **Identidade Visual Integrada**: Cores e estilo baseados na logo oficial da AX37
- **Foco em Marketing de Eventos**: Conteúdo especializado em marketing e montagem de eventos
- **Tecnologias Modernas**: React, Tailwind CSS, shadcn/ui
- **Experiência do Usuário**: Interface intuitiva com micro-interações e transições suaves
- **Seções Completas**: Hero, Serviços, Portfólio, Depoimentos, Contato

## Identidade Visual

### Paleta de Cores

- **Preto (#111827)**: Cor primária para textos e elementos estruturais
- **Cinza (#6B7280)**: Cor secundária para textos auxiliares
- **Laranja/Amarelo Gradiente**: Cor de destaque para CTAs, ícones e elementos interativos
- **Branco (#FFFFFF)**: Cor de fundo e contraste

### Logo

A logo oficial da AX37 está integrada no header e footer, mantendo a consistência visual em toda a aplicação.

## Estrutura do Projeto

```
ax37-marketing-eventos/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   │   └── ax37-logo.png  # Logo oficial da AX37
│   ├── components/        # Componentes React
│   │   └── ui/           # Componentes shadcn/ui
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados com tema AX37
│   └── main.jsx          # Ponto de entrada
├── dist/                 # Build de produção
└── package.json          # Dependências do projeto
```

## Como Usar

### Desenvolvimento

1. Instalar dependências:

   ```bash
   pnpm install
   ```

2. Iniciar servidor de desenvolvimento:

   ```bash
   pnpm run dev
   ```

3. Acessar: http://localhost:5173

### Produção

1. Gerar build:

   ```bash
   pnpm run build
   ```

2. Os arquivos estarão na pasta `dist/`

## Seções da Landing Page

### 1. Header/Navegação

- Logo oficial da AX37
- Menu de navegação responsivo
- CTA principal "Solicitar Orçamento"

### 2. Hero Section

- Título impactante com destaque em laranja
- Proposta de valor clara
- Estatísticas de credibilidade (500+ eventos, 98% satisfação, 10+ anos)
- CTAs principais: "Agendar Consulta" e "Ver Portfólio"

### 3. Serviços (6 categorias)

- **Stands Personalizados**: Design exclusivo e montagem profissional
- **Estratégia de Marketing**: Campanhas integradas e análise de ROI
- **Tecnologia Audiovisual**: Equipamentos de última geração
- **Experiências Imersivas**: Design de experiência e engajamento emocional
- **Gestão Completa**: Planejamento estratégico e coordenação total
- **Branding e Identidade**: Consistência visual e materiais gráficos

### 4. Portfólio

- Galeria de projetos realizados
- Categorização por tipo de evento
- Cases de sucesso com descrições detalhadas

### 5. Depoimentos

- Feedback de clientes reais
- Avaliações com 5 estrelas
- Credibilidade através de nomes e cargos

### 6. Contato

- Formulário de solicitação de orçamento
- Informações de contato completas
- Horário de atendimento
- Múltiplos canais de comunicação

### 7. Footer

- Logo da AX37 (versão invertida para fundo escuro)
- Links organizados por categoria
- Informações de contato
- Copyright

## Tecnologias Utilizadas

- **React 19**: Framework JavaScript
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Componentes UI modernos
- **Lucide React**: Ícones SVG
- **pnpm**: Gerenciador de pacotes

## Personalização

### Atualizando a Logo

Para substituir a logo, basta trocar o arquivo `src/assets/ax37-logo.png` mantendo o mesmo nome.

### Modificando Cores

As cores estão definidas no arquivo `src/App.css` nas variáveis CSS customizadas:

- `--accent`: Cor laranja/amarelo da logo
- `--primary`: Preto da logo
- `--secondary`: Cinza da logo

### Conteúdo

Todo o conteúdo está no arquivo `src/App.jsx` e pode ser facilmente modificado:

- Textos e descrições
- Informações de contato
- Estatísticas e números
- Cases do portfólio

## Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação automática para tablet e desktop
- **Touch Friendly**: Elementos interativos otimizados para toque
- **Performance**: Carregamento rápido em todas as resoluções

## SEO e Acessibilidade

- **Meta Tags**: Título e descrição otimizados
- **Semântica HTML**: Estrutura acessível
- **Alt Text**: Descrições para imagens
- **Contraste**: Cores com boa legibilidade
- **Navegação**: Estrutura clara e intuitiva

## Deploy

O projeto está pronto para deploy em qualquer plataforma:

- **Vercel**: Deploy automático via Git
- **Netlify**: Drag & drop da pasta `dist/`
- **GitHub Pages**: Configuração simples
- **Servidor próprio**: Upload da pasta `dist/`

## Suporte

Para dúvidas ou personalizações, consulte a documentação do React e Tailwind CSS.
