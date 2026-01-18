# 📱 Guia Completo: Gerar APK Assinado por Autech

Este guia mostra como gerar um APK assinado do e-book Marketing Digital usando Android Studio.

## ✅ Pré-requisitos

1. **Android Studio** instalado (baixar em https://developer.android.com/studio)
2. **Java Development Kit (JDK)** 11 ou superior
3. **Pasta do projeto** com Capacitor configurado (já está pronta)

## 🚀 Passo 1: Abrir Projeto no Android Studio

1. Abra **Android Studio**
2. Clique em **File → Open**
3. Navegue até a pasta: `/android`
4. Clique em **Open**
5. Aguarde o Android Studio sincronizar (pode levar 2-5 minutos)

## 🔑 Passo 2: Configuração de Assinatura

A assinatura já está configurada com:
- **Keystore**: `autech.keystore`
- **Alias**: `autech`
- **Senha**: `autech123`

Os arquivos estão em:
- `android/autech.keystore` - Arquivo de chave
- `android/gradle.properties` - Configurações de assinatura
- `android/app/build.gradle` - Build configurado para assinar

## 📦 Passo 3: Gerar APK Assinado

### Opção A: Pelo Android Studio (Recomendado)

1. No menu superior, clique em **Build**
2. Selecione **Build Bundle(s) / APK(s)**
3. Clique em **Build APK(s)**
4. Aguarde a compilação (pode levar 5-10 minutos)
5. Quando terminar, clique em **Locate** para abrir a pasta

### Opção B: Pelo Terminal

```bash
cd android
./gradlew assembleRelease
```

O APK será gerado em: `android/app/build/outputs/apk/release/app-release.apk`

## 📍 Localizando o APK

Após a compilação, o APK estará em:

```
android/app/build/outputs/apk/release/app-release.apk
```

**Tamanho esperado**: ~50-80 MB

## 📱 Passo 4: Instalar no Dispositivo

### Via Android Studio

1. Conecte seu dispositivo Android via USB
2. Clique em **Run → Run 'app'** (ou pressione Shift+F10)
3. Selecione seu dispositivo
4. Clique em **OK**

### Via Terminal

```bash
adb install android/app/build/outputs/apk/release/app-release.apk
```

### Via Arquivo

1. Copie o arquivo `app-release.apk` para seu dispositivo
2. Abra o arquivo no gerenciador de arquivos
3. Clique em **Instalar**

## ✅ Verificar Assinatura

Para verificar se o APK está corretamente assinado:

```bash
jarsigner -verify -verbose android/app/build/outputs/apk/release/app-release.apk
```

Você deve ver: `jar verified.`

## 📊 Informações do APK

| Campo | Valor |
|-------|-------|
| **Nome do App** | Marketing Digital |
| **Package ID** | com.futuro.leads.ebook |
| **Versão** | 1.0 |
| **Assinante** | Autech |
| **Validade** | 10.000 dias (27 anos) |

## 🐛 Troubleshooting

### Erro: "Gradle not found"
- Abra o projeto via Android Studio (não pelo terminal)
- Android Studio instalará o Gradle automaticamente

### Erro: "SDK not found"
- Abra Android Studio
- Vá em **File → Project Structure**
- Clique em **SDK Location**
- Deixe "Use embedded JDK" marcado

### Erro: "Keystore password incorrect"
- Verifique se `gradle.properties` tem a senha correta: `autech123`
- Se necessário, recrie o keystore com o mesmo comando

## 🎯 Próximas Etapas

1. **Testar no dispositivo**: Instale e teste todas as funcionalidades
2. **Publicar na Google Play**: Siga o guia de publicação (veja abaixo)
3. **Distribuir para usuários**: Compartilhe o APK ou link da Play Store

## 📤 Publicar na Google Play Store

1. Crie uma conta de desenvolvedor em https://play.google.com/console
2. Crie um novo app
3. Faça upload do APK assinado
4. Preencha informações (descrição, screenshots, etc)
5. Envie para revisão

**Nota**: A primeira publicação pode levar 24-48 horas para aprovação.

## 📋 Checklist Final

- [ ] Android Studio instalado
- [ ] Projeto aberto no Android Studio
- [ ] Gradle sincronizado
- [ ] APK gerado com sucesso
- [ ] APK assinado corretamente
- [ ] APK instalado e testado
- [ ] Pronto para publicar

---

**Desenvolvido com ❤️ pela FuturoLeads**
