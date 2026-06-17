# Desafio Inova Eneva ⚡🌱

> Portal de Inovação Aberta e Conexão com Startups da Eneva.

Este repositório contém o código-fonte do portal **Desafio Inova Eneva**, uma aplicação web desenvolvida sob medida para aproximar a Eneva (líder em energia integrada no Brasil) do ecossistema de startups de tecnologia e sustentabilidade, com foco em transição energética e descarbonização.

O projeto foi inteiramente construído utilizando **React**, **Vite**, **TypeScript** e **Tailwind CSS**, priorizando performance, design contemporâneo de alto impacto visual (premium UI) e acessibilidade em múltiplos dispositivos.

---

## 🎨 Conceito Visual e Diferenciais do Projeto

*   **Premium Dark/Light Hybrid Aesthetic:** Combinação elegante da paleta de cores institucional da Eneva, utilizando tons profundos de azul e verde (Teal/Deep Green) em harmonia com acentos leves e modernos em tom de limão (`#99C21C`).
*   **Performance Absoluta (Vite + TS):** Carregamento instantâneo de assets, compilação otimizada em TypeScript e transições ultra-suaves de interface.
*   **Segurança Incorporada (Production-Ready):** Estrutura de arquivos e arquivos de configuração (`.gitignore` robusto) projetados especificamente para proteção contra vazamentos de dados, variáveis de ambiente sensíveis ou chaves de API.
*   **Fidelidade e UX Refinada:** Alinhamento perfeito de espaçamento, hierarquia tipográfica equilibrada e harmonia visual do Hero Banner até o rodapé sitemap.

---

## 🧩 Principais Módulos do Sistema

A aplicação está dividida em componentes modulares estruturados para fácil manutenção e escalabilidade:

1.  **Header (`Header.tsx`):** Navegação fluida, logo oficial da Eneva e chave rápida para internacionalização (Suporte a Português e Inglês).
2.  **Webdoor / Hero Slider (`Webdoor.tsx`):** Apresentação dinâmica da marca com sliders e chamadas de ação (CTAs) em harmonia visual e proporção de tela ideal.
3.  **Destaques de Impacto (`TitleTextHighlight.tsx`):** Apresentação conceitual do desafio de inovação.
4.  **Painel de Estatísticas (`NumbersHighlight.tsx`):** Métricas e resultados anteriores para validação das startups parceiras.
5.  **Nossa Atuação (`NossaAtuacao.tsx`):** Painel interativo com áreas prioritárias para captação de soluções.
6.  **Venha para a Eneva (`VenhaParaEneva.tsx`):** Depoimentos interativos para validação social das startups integrantes do ecossistema.
7.  **Banner de Descarbonização (`DecarbonizationBanner.tsx`):** Destaque ao compromisso ambiental com efeitos visuais e tags interativas.
8.  **Notícias & Linha do Tempo (`NewsSlider.tsx`):** Linha do tempo vertical limpa para o cronograma (sem distrações visuais excessivas) integrada a um slider fluido de novidades do programa.
9.  **FAQ Interativo (`FAQ.tsx`):** Painel tipo sanfona inteligente com as perguntas e respostas mais frequentes para suporte ao candidato e link direto para e-mail oficial.
10. **Rodapé Completo (`Footer.tsx`):** Links legais de integridade (Termos de Uso, Políticas de Privacidade e Sitemap corporativo).

---

## 🛠️ Tecnologias Utilizadas

*   **Framework:** [React 18+](https://react.dev/)
*   **Gerenciador de Build & Dev Server:** [Vite](https://vitejs.dev/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para tipagem estática e segurança do código
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/) com paleta corporativa customizada
*   **Ícones:** [Lucide React](https://lucide.dev/) para uma biblioteca unificada de ícones vetoriais modernos

---

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar o portal do Desafio Inova Eneva em sua máquina:

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 2. Clonar o Repositório
Abra o seu terminal e execute:
```bash
git clone https://github.com/SEU-USUARIO/desafio-inova-eneva.git
cd desafio-inova-eneva
```

### 3. Instalar as Dependências
Instale todas as dependências requeridas pelo framework:
```bash
npm install
```

### 4. Executar em Modo de Desenvolvimento
Inicie o servidor de desenvolvimento local super rápido do Vite:
```bash
npm run dev
```
O console mostrará uma URL padrão (geralmente `http://localhost:3000` ou similar). Abra este endereço no navegador para conferir o site ao vivo.

### 5. Compilar para Produção (Build)
Para gerar uma build estática otimizada para implantação no seu servidor de produção, execute:
```bash
npm run build
```
O build final será gerado dentro da pasta `/dist`, pronto para ser hospedado gratuitamente no Vercel, Netlify, GitHub Pages, ou container Cloud Run.

---

## 🔒 Boas Práticas e Segurança

*   **Sem dados sensíveis:** O código não possui senhas ou chaves de API fixas. Se no futuro você integrar backend ou serviços externos de IA, utilize arquivos `.env` locais (que estão configurados no `.gitignore` para nunca irem ao GitHub) e declare o modelo de exemplo no `.env.example`.
*   **Design Responsivo:** Testado e aprovado em telas de celulares menores, tablets e monitores Ultrawide.

---

## 👤 Autor

Desenvolvido por **[Seu Nome/E-mail]** com suporte moderno e dedicação aos detalhes. 
Sinta-se à vontade para abrir uma Issue ou propor melhorias através de Pull Requests!

---
*Portal oficial fictício de demonstração/apresentação para o Desafio Inova Eneva.*
