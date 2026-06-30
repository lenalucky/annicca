# 🍃 Annicca — Assistente Virtual da Comunidade Aprendentes

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-2.5_Flash-4285F4?logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/status-no_ar-5a8a3c)

Chatbot de IA conversacional criado para apresentar a **Comunidade Aprendentes** e o **Curso de Gerenciamento Emocional** do Prof. Marcelo Oliveira (gerenciamentoemocional.com.br), acolhendo visitantes e conduzindo-os de forma natural até a inscrição.

🔗 **Demo ao vivo:** [aprendentesagent.vercel.app](https://aprendentesagent.vercel.app)

<p align="center">
  <img src="./screenshots/annicca-desktop.png" alt="Tela inicial da Annicca" width="600" />
</p>

---

## ✨ Sobre o projeto

A Annicca é uma assistente com tom sereno e acolhedor, pensada para refletir o espírito de mindfulness da comunidade que representa. Ela:

- Apresenta a Comunidade Aprendentes e o curso de forma natural, sem parecer um script de vendas
- Acolhe quem chega com ansiedade, estresse ou burnout antes de falar sobre o produto
- Informa valores, formas de pagamento e datas da próxima turma
- Oferece uma alternativa de pagamento flexível para quem não pode arcar com o valor cheio
- Reforça o convite para seguir a comunidade no Instagram
- Usa a paleta de cores oficial do site (verde institucional, branco, tons neutros)

## 🛠️ Stack

- **React + Vite** — interface e build
- **Google Gemini API** (`gemini-2.5-flash`) — modelo de linguagem, camada gratuita
- **Vercel** — hospedagem e deploy contínuo
- **Wix (iframe)** — incorporação no site final

## 🚀 Rodando localmente

```bash
git clone https://github.com/lenalucky/annicca.git
cd annicca
npm install
```

Crie um arquivo `.env` na raiz com sua chave do Gemini:

```
VITE_GEMINI_API_KEY=sua_chave_aqui
```

> Crie uma chave gratuita em [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

Depois rode:

```bash
npm run dev
```

## 📦 Deploy

```bash
npm run build
```

Isso gera a pasta `dist/`, pronta para deploy na Vercel. Lembre-se de configurar a variável de ambiente `VITE_GEMINI_API_KEY` nas configurações do projeto na Vercel.

## 🧩 Integração com Wix

O agente é incorporado ao site via iframe:

```html
<iframe
  src="https://aprendentesagent.vercel.app"
  width="100%"
  height="700px"
  frameborder="0"
  style="border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.1);"
  allow="clipboard-write"
></iframe>
```

## 📂 Estrutura

```
annicca/
├── src/
│   ├── App.jsx       # componente principal + lógica do chat
│   └── main.jsx      # entry point do React
├── index.html
├── vite.config.js
└── package.json
```

## 💚 Sobre a Comunidade Aprendentes

Espaço criado pelo Prof. Marcelo Oliveira — psicólogo clínico, mestre em Saúde Coletiva pela Unifesp — para explorar Mindfulness, Psicologia e desenvolvimento humano através de um programa de 10 semanas inspirado em MBIs (Mindfulness Based Interventions), com formações em Oxford, UCSD e ACT (Russ Harris).

Saiba mais em [gerenciamentoemocional.com.br](https://gerenciamentoemocional.com.br)

## 🧠 Aprendizados do processo

Este projeto nasceu como estudo prático de ponta a ponta — da prototipagem do agente até o deploy em produção. Alguns desafios reais enfrentados (e resolvidos) ao longo do caminho:

- **Encoding UTF-8 quebrado** ao subir arquivos pelo navegador do GitHub, corrigido recriando o arquivo com codificação correta
- **Estrutura de pastas incorreta** (`src` ausente, arquivos na raiz por engano) causando falhas de build no Vite
- **Políticas de execução do PowerShell** bloqueando o `npm install` no Windows
- **Conflitos de branch** (`main` vs `master`) ao conectar o repositório local ao GitHub
- **Configuração de Build & Output** na Vercel, migrando de detecção automática (`react-scripts`) para o comando correto do Vite (`vite build` / `dist`)
- **Troca de provedor de IA**: migração da Anthropic API para a **Google Gemini API**, adaptando o formato de mensagens (`messages` → `contents`), autenticação (`x-api-key` → `?key=`) e parsing da resposta
- **Renderização de Markdown vs HTML**: ajuste para converter `**negrito**` retornado pelo modelo em `<strong>` antes de exibir

## 📸 Capturas de tela

> Adicione aqui prints do chat em ação — desktop e mobile — dentro de uma pasta `screenshots/` no repositório.

| Desktop | Mobile |
|---|---|
| ![desktop](./screenshots/annicca-desktop.png) | ![mobile](./screenshots/annicca-mobile.png) |

---

*Projeto desenvolvido como estudo de integração de IA conversacional em produtos reais — da prototipagem ao deploy em produção.* 🌱
