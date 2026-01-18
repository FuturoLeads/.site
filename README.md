# 📚 E-book Marketing Digital: Do Zero ao Avançado - Plataforma de Aprendizado Interativa

## 🚀 Visão Geral do Projeto

Esta é a plataforma interativa e gamificada para o e-book **"Marketing Digital: Do Zero ao Avançado"**, desenvolvida pela Futuro Leads. O projeto visa transformar a experiência de leitura em um ambiente de aprendizado completo, com recursos modernos de tecnologia e inteligência artificial.

A arquitetura é Full-Stack, utilizando o padrão moderno de desenvolvimento com **tRPC** para comunicação eficiente entre o frontend e o backend, **React** para a interface do usuário e **Drizzle ORM** para o banco de dados.

## ✨ Funcionalidades Principais

| Categoria | Funcionalidade | Status |
| :--- | :--- | :--- |
| **Inteligência Artificial** | Tutor IA (GPT-4) para suporte contextualizado, geração de exercícios e resumos. | ✅ Completo |
| **Gamificação** | Sistema de Badges, Certificados Progressivos e Dashboard de Análise de Desempenho. | ✅ Completo |
| **Conteúdo** | Estrutura para múltiplos e-books, Quiz interativo, Checklist de progresso e Leitura em voz. | ✅ Completo |
| **Design** | Design Moderno Corporativo (Resposta 1 de `ideas.md`), Responsivo para Mobile e Desktop. | ✅ Completo |
| **Multi-Plataforma** | Pronto para gerar APK Android via Capacitor. | ✅ Completo |

## 🛠️ Tecnologias Utilizadas

O projeto é construído com um stack de tecnologias de ponta:

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Frontend** | React, TypeScript, TailwindCSS, Radix UI | Interface de usuário moderna e responsiva. |
| **Backend** | Express, tRPC, Drizzle ORM | Servidor eficiente e tipado, com ORM para MySQL/TiDB. |
| **Build** | Vite, Vitest | Ferramentas rápidas para desenvolvimento e testes. |
| **Mobile** | Capacitor | Empacotamento do Web App para Android. |
| **IA** | OpenAI API (@anthropic-ai/sdk) | Integração com modelos de linguagem para o Tutor IA. |

## ⚙️ Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos
*   Node.js (versão 20+)
*   pnpm (Gerenciador de pacotes)
*   MySQL/TiDB (Para o banco de dados)

### Passos
1.  **Clonar o Repositório:**
    ```bash
    gh repo clone FuturoLeads/.site
    cd .site
    ```

2.  **Instalar Dependências:**
    ```bash
    pnpm install
    ```

3.  **Configurar Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias, como a string de conexão com o banco de dados e a chave da API OpenAI.

4.  **Configurar Banco de Dados:**
    Gere as migrações e aplique-as ao seu banco de dados:
    ```bash
    pnpm run db:push
    ```

5.  **Rodar o Servidor de Desenvolvimento:**
    ```bash
    pnpm dev
    ```
    O frontend e o backend serão iniciados, e o aplicativo estará acessível em `http://localhost:5173`.

## 🚧 Próximos Passos (Pendências do `todo.md`)

O projeto está na versão **v3.2.0**. As principais pendências a serem resolvidas são:

*   **Persistência de Dados:** Implementar a lógica para salvar o progresso do usuário, notas e respostas de exercícios (v2.1.0).
*   **Gerenciamento de Vídeos:** Implementar o upload, armazenamento e reprodução de vídeos (v2.8.0).
*   **Notificações:** Implementar notificações de revisão vencida para o sistema de repetição espaçada (v2.1.0).
*   **Testes de APK:** Testar a versão Android no emulador/dispositivo (v1.3.0).

## 📱 Geração do APK Assinado (Android)

O projeto está configurado para gerar um APK assinado usando o Capacitor.

1.  **Instalar o Capacitor:**
    ```bash
    pnpm install @capacitor/cli @capacitor/core
    pnpm run build # Certifique-se de que o build web está atualizado
    pnpm cap add android
    ```

2.  **Abrir no Android Studio:**
    Abra a pasta `android` no Android Studio para sincronizar o projeto.

3.  **Geração do APK:**
    O guia completo para geração do APK assinado está detalhado no arquivo `GERAR_APK_ASSINADO.md`.

---
**Desenvolvido com ❤️ pela FuturoLeads**
