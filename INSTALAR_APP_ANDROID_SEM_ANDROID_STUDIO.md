# 📱 Instalar App no Android SEM Android Studio

Este guia mostra como instalar o app Marketing Digital no seu celular Android **sem precisar de Android Studio**.

---

## 🎯 Opção 1: Usar o APK Pré-compilado (MAIS FÁCIL) ⭐

Se você já tem o arquivo `app-release.apk`, basta:

### **Passo 1: Copiar o APK para o Celular**

1. Conecte seu celular ao computador via USB
2. Copie o arquivo `app-release.apk` para a pasta Downloads do celular
3. Desconecte o celular

### **Passo 2: Instalar no Celular**

1. Abra o **Gerenciador de Arquivos** no celular
2. Navegue até **Downloads**
3. Toque no arquivo `app-release.apk`
4. Clique em **Instalar**
5. Se aparecer aviso "Origem desconhecida", clique em **Instalar mesmo assim**
6. Aguarde a instalação (pode levar 1-2 minutos)
7. Clique em **Abrir** quando terminar ✅

---

## 🔧 Opção 2: Compilar Direto no PC (Recomendado)

Se você NÃO tem o APK ainda, siga estes passos:

### **Pré-requisitos (Instalar no PC)**

1. **Node.js** (https://nodejs.org) - versão 16+
2. **Git** (https://git-scm.com)
3. **Java Development Kit (JDK)** (https://www.oracle.com/java/technologies/downloads/)

### **Passo 1: Preparar o Projeto**

```bash
# Abra o terminal/CMD na pasta do projeto
cd ebook-marketing-digital

# Instale dependências
npm install

# Compile a versão web
npm run build

# Sincronize com Android
npx cap sync android
```

### **Passo 2: Gerar o APK (Sem Android Studio)**

```bash
# Navegue até a pasta Android
cd android

# Compile o APK assinado
./gradlew assembleRelease
```

**No Windows, use:**
```bash
gradlew.bat assembleRelease
```

**Aguarde 5-10 minutos...**

### **Passo 3: Encontrar o APK**

O arquivo estará em:
```
android/app/build/outputs/apk/release/app-release.apk
```

### **Passo 4: Instalar no Celular**

Siga os passos da **Opção 1** acima.

---

## 📲 Opção 3: Usar Aplicativo Móvel (SEM PC)

Se você quer compilar direto do celular, use:

### **Usando Termux (Terminal no Android)**

1. **Instale Termux** (Play Store: https://play.google.com/store/apps/details?id=com.termux)

2. **Abra Termux e execute:**

```bash
# Instale Node.js
pkg install nodejs

# Instale Git
pkg install git

# Clone o projeto
git clone https://github.com/seu-usuario/ebook-marketing-digital.git

# Navegue até a pasta
cd ebook-marketing-digital

# Instale dependências
npm install

# Compile
npm run build

# Sincronize
npx cap sync android
```

⚠️ **Nota**: Compilar no Termux é LENTO (pode levar 30-60 minutos)

---

## ✅ Verificar Instalação

Após instalar, verifique se tudo funciona:

- [ ] App abre sem erros
- [ ] Splash screen aparece (FuturoLeadsLoader)
- [ ] Pode ver os e-books
- [ ] Pode clicar nos capítulos
- [ ] Pode usar o Tutor IA
- [ ] Pode ganhar badges

---

## 🐛 Solução de Problemas

### **"Erro: origem desconhecida"**
- Vá em Configurações → Segurança
- Ative "Instalar de fontes desconhecidas"
- Tente novamente

### **"Erro: Gradle not found"**
- Instale Java Development Kit (JDK)
- Adicione ao PATH do Windows/Mac/Linux
- Tente novamente

### **"Erro: npm not found"**
- Instale Node.js
- Reinicie o terminal
- Tente novamente

### **"App não conecta com a web"**
- Verifique se o servidor web está rodando
- Verifique se o celular está na mesma rede WiFi
- Verifique a URL da API no arquivo de configuração

---

## 🚀 Próximas Etapas

1. **Testar todas as funcionalidades** no app
2. **Sincronizar com web** (faça algo no app e veja na web)
3. **Publicar na Google Play** (opcional)

---

## 📊 Resumo das Opções

| Opção | Dificuldade | Tempo | Requer |
|-------|-------------|-------|--------|
| 1: APK Pré-compilado | ⭐ Fácil | 2 min | Arquivo APK |
| 2: Compilar no PC | ⭐⭐ Médio | 15 min | Node.js + Java |
| 3: Termux (Mobile) | ⭐⭐⭐ Difícil | 60 min | Termux |

**Recomendação**: Use a **Opção 1** ou **Opção 2**

---

**Desenvolvido com ❤️ pela FuturoLeads**
