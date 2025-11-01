# Guia de Instalação - Dijuan Construtora Website

## Requisitos do Sistema

Antes de começar, certifique-se de ter instalado em seu computador:

- **Node.js** versão 18.0 ou superior (download em https://nodejs.org/)
- **Git** (para clonar o repositório)

## Passo 1: Clonar ou Extrair o Projeto

Se você tem o repositório Git:

```bash
git clone <url-do-repositorio>
cd dijuan-construtora
```

Ou, se você tem os arquivos em um ZIP:

```bash
unzip dijuan-construtora.zip
cd dijuan-construtora
```

## Passo 2: Instalar as Dependências

Execute o comando para instalar todas as dependências do projeto:

```bash
pnpm install
```

Este comando irá instalar:

### Dependências Principais (Frontend)

- **React 18.3** - Framework JavaScript para interfaces
- **Vite 7.1** - Ferramenta de build rápida e moderna
- **Tailwind CSS 4.1** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI de alta qualidade
- **Lucide React** - Ícones SVG
- **Wouter** - Roteamento leve para React
- **Framer Motion** - Animações fluidas
- **Sonner** - Sistema de notificações
- **Axios** - Cliente HTTP para requisições

### Dependências de Desenvolvimento

- **TypeScript 5.6** - Tipagem estática para JavaScript
- **Prettier** - Formatador de código
- **Vitest** - Framework de testes
- **PostCSS** - Processador CSS

## Passo 3: Executar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local:

```bash
pnpm dev
```

O servidor estará disponível em: **http://localhost:5173**

A página será recarregada automaticamente quando você fizer alterações no código.

## Passo 4: Build para Produção

Para criar uma versão otimizada para produção:

```bash
pnpm build
```

Os arquivos compilados estarão na pasta `dist/`.

## Passo 5: Visualizar a Build de Produção

Para testar a versão de produção localmente:

```bash
pnpm preview
```

## Comandos Disponíveis

| Comando        | Descrição                             |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Inicia o servidor de desenvolvimento  |
| `pnpm build`   | Cria a versão otimizada para produção |
| `pnpm preview` | Visualiza a build de produção         |
| `pnpm check`   | Verifica erros de TypeScript          |
| `pnpm format`  | Formata o código com Prettier         |

## Estrutura do Projeto

```
dijuan-construtora/
├── client/
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Páginas da aplicação
│   │   │   └── Home.tsx
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Ponto de entrada
│   │   └── index.css        # Estilos globais
│   ├── public/              # Arquivos estáticos
│   │   └── images/          # Imagens do site
│   └── index.html           # HTML principal
├── package.json             # Dependências do projeto
├── vite.config.ts           # Configuração do Vite
├── tailwind.config.ts       # Configuração do Tailwind CSS
└── tsconfig.json            # Configuração do TypeScript
```

## Troubleshooting

### Erro: "pnpm: command not found"

Instale o pnpm globalmente:

```bash
npm install -g pnpm
```

### Erro: "Port 5173 is already in use"

Use uma porta diferente:

```bash
pnpm dev -- --port 3000
```

### Erro: "node_modules not found"

Reinstale as dependências:

```bash
pnpm install
```

### Limpeza de cache

Se encontrar problemas estranhos:

```bash
pnpm install --force
```

## Customização

### Alterar Cores da Marca

As cores estão definidas em `client/src/index.css` na seção `:root`:

- `--primary`: Vermelho bordô (#8B1538)
- `--secondary`: Dourado (#C4A24C)
- `--accent`: Verde escuro (#2C5F4F)

### Adicionar Novas Imagens

Coloque as imagens em `client/public/images/` e referencie-as no código como `/images/nome-da-imagem.jpg`

### Modificar Informações de Contato

Edite os números de telefone e email nos componentes:

- `Header.tsx`
- `Contact.tsx`
- `Footer.tsx`

## Deploy

O site está pronto para ser deployado em plataformas como:

- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- **Seu próprio servidor**

Para deploy em Vercel:

```bash
npm install -g vercel
vercel
```

## Suporte

Para dúvidas sobre as dependências ou problemas de instalação, consulte:

- [Documentação do Node.js](https://nodejs.org/docs/)
- [Documentação do pnpm](https://pnpm.io/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://react.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)

## Licença

Este projeto está sob a licença MIT.
