export interface Chapter {
  id: string;
  title: string;
  content: string;
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  chapters: Chapter[];
}

export const modules: Module[] = [
  {
    id: 'module1',
    title: '🎯 MÓDULO 1 - FUNDAMENTOS DO MARKETING DIGITAL',
    icon: '📚',
    chapters: [
      {
        id: '1.1',
        title: 'Capítulo 1.1 - O que é Marketing Digital',
        content: `Marketing Digital é o conjunto de estratégias e técnicas de marketing realizadas em meios digitais e na internet. Diferentemente do marketing tradicional, o marketing digital permite uma comunicação mais direta, personalizada e mensurável com o público-alvo.

No mundo digital, as empresas podem alcançar seus clientes através de diversos canais: redes sociais, email, buscadores, sites, aplicativos e muito mais. A grande vantagem é a possibilidade de segmentar o público, acompanhar resultados em tempo real e ajustar estratégias rapidamente.

O marketing digital não substitui o marketing tradicional, mas complementa e potencializa os resultados. Juntos, criam uma estratégia omnichannel que atinge o cliente em múltiplos pontos de contato.

Principais características do Marketing Digital:

Mensurável: Você pode acompanhar cada ação e resultado em tempo real através de ferramentas como Google Analytics, Facebook Pixel, e outras plataformas de tracking.

Segmentado: Alcance exatamente quem você quer com base em idade, localização, interesses, comportamento, histórico de compras e muito mais.

Interativo: Permite diálogo direto com seu público através de comentários, mensagens, lives e comunidades.

Flexível: Ajuste estratégias rapidamente conforme resultados. Se uma campanha não está funcionando, você muda em questão de horas.

Econômico: Geralmente mais barato que publicidade tradicional (TV, rádio, jornais). Você pode começar com orçamento pequeno.

Escalável: Cresça sem aumentar proporcionalmente os custos. Uma campanha que funciona pode ser replicada para mais pessoas.

Por que aprender Marketing Digital em 2024?

O mercado digital cresce exponencialmente. Empresas que não estão presentes digitalmente estão perdendo oportunidades. Profissionais de marketing digital têm alta demanda no mercado de trabalho. Você pode criar seu próprio negócio com baixo investimento inicial. Os dados mostram que empresas com estratégia digital crescem 2-3x mais rápido que concorrentes offline.

Este e-book vai te guiar desde os conceitos básicos até estratégias avançadas de monetização e expansão internacional.`
      },
      {
        id: '1.2',
        title: 'Capítulo 1.2 - História e Evolução do Marketing Digital',
        content: `A história do marketing digital começou na década de 1990, com o surgimento da internet comercial. Os primeiros banners publicitários apareceram em 1994, marcando o início da publicidade online.

Evolução dos marcos principais:

• 1994: Primeiros banners publicitários na web
• 1998: Google é fundado, revolucionando a busca online
• 2004: Surgem as redes sociais (Orkut, depois Facebook)
• 2006: YouTube é lançado, transformando o vídeo online
• 2010: Explosão do mobile e dos smartphones
• 2012: Instagram é lançado
• 2015: Inteligência Artificial começa a transformar publicidade
• 2016: Snapchat e TikTok ganham popularidade
• 2020: Pandemia acelera transformação digital global
• 2023: Era da IA generativa e personalização em massa

Cada evolução trouxe novas oportunidades e desafios para os profissionais de marketing. Hoje, o marketing digital é essencial para qualquer negócio que queira crescer.`
      },
      {
        id: '1.3',
        title: 'Capítulo 1.3 - Conceitos Fundamentais',
        content: `Conceitos essenciais que todo profissional de marketing digital deve dominar:

Tráfego: Número de visitantes que chegam ao seu site ou plataforma. Pode ser orgânico (buscadores), pago (publicidade) ou direto (digitando a URL).

Conversão: Quando um visitante realiza uma ação desejada (compra, cadastro, download, compartilhamento).

Taxa de Conversão: Percentual de visitantes que realizam a ação desejada. Calculada como: (Conversões / Visitantes) x 100.

ROI (Retorno sobre Investimento): Lucro gerado em relação ao investimento realizado. Fórmula: (Lucro / Investimento) x 100.

CPA (Custo por Aquisição): Quanto você gasta para adquirir um cliente. Calculado como: Investimento Total / Número de Clientes Adquiridos.

LTV (Lifetime Value): Valor total que um cliente gera ao longo do relacionamento com sua empresa.

Funil de Vendas: Jornada que o cliente percorre desde o conhecimento até a compra.

Segmentação: Divisão do público em grupos com características similares para mensagens mais relevantes.

Engajamento: Nível de interação do público com seu conteúdo (likes, comentários, compartilhamentos).

Dominar esses conceitos é fundamental para construir estratégias eficazes e mensuráveis.`
      },
      {
        id: '1.4',
        title: 'Capítulo 1.4 - Persona e Avatar',
        content: `A Persona é a representação semi-fictícia do seu cliente ideal. Ela vai além de dados demográficos, incluindo comportamentos, motivações, desafios e objetivos.

Como criar uma Persona:

1. Pesquisa: Analise seus clientes atuais, faça entrevistas, pesquisas de mercado.

2. Dados Demográficos: Idade, gênero, profissão, localização, renda, estado civil.

3. Psicográficos: Valores, interesses, hobbies, estilo de vida, aspirações.

4. Comportamento: Como consomem conteúdo, onde passam tempo online, que dispositivos usam.

5. Desafios: Quais problemas tentam resolver, frustrações, medos.

6. Objetivos: O que querem alcançar, metas, sonhos.

7. Objeções: Por que podem não comprar, dúvidas, preocupações.

Exemplo de Persona:

Nome: Marina
Idade: 32 anos
Profissão: Gerente de Marketing em startup
Renda: R$ 8.000/mês
Objetivo: Aprender marketing digital para crescer na carreira
Desafio: Pouco tempo para estudar, muitas informações conflitantes
Plataformas: Instagram, LinkedIn, YouTube
Tipo de conteúdo: Vídeos curtos, artigos práticos, webinários

Uma persona bem definida ajuda você a criar mensagens mais relevantes e eficazes.`
      },
      {
        id: '1.5',
        title: 'Capítulo 1.5 - Jornada do Cliente',
        content: `A jornada do cliente é o caminho que ele percorre desde o primeiro contato com sua marca até se tornar um cliente fiel.

Estágios da Jornada:

1. Awareness (Conscientização)
   - O cliente descobre sua marca
   - Não sabe se precisa do produto
   - Objetivo: Criar visibilidade

2. Consideration (Consideração)
   - O cliente avalia suas soluções
   - Compara com concorrentes
   - Objetivo: Demonstrar valor

3. Decision (Decisão)
   - O cliente decide comprar
   - Precisa de um empurrão final
   - Objetivo: Converter em cliente

4. Retention (Retenção)
   - O cliente já é seu
   - Objetivo: Mantê-lo satisfeito

5. Advocacy (Defesa)
   - O cliente recomenda sua marca
   - Objetivo: Transformar em embaixador

Estratégias por Estágio:

Awareness: Conteúdo educacional, SEO, publicidade, redes sociais
Consideration: Comparações, estudos de caso, webinários, depoimentos
Decision: Ofertas especiais, garantias, facilidades de pagamento
Retention: Email marketing, programa de fidelidade, suporte excelente
Advocacy: Programa de referência, comunidade, conteúdo exclusivo

Entender essa jornada permite criar estratégias mais eficazes em cada etapa.`
      },
      {
        id: '1.6',
        title: 'Capítulo 1.6 - Métricas e KPIs Essenciais',
        content: `KPIs (Key Performance Indicators) são indicadores-chave que mostram se suas estratégias estão funcionando.

KPIs Essenciais:

1. Tráfego
   - Visitantes únicos
   - Sessões
   - Pageviews
   - Origem do tráfego

2. Engajamento
   - Taxa de rejeição
   - Tempo médio na página
   - Páginas por sessão
   - Scroll depth

3. Conversão
   - Taxa de conversão
   - Custo por conversão
   - Valor médio do pedido
   - Ticket médio

4. Retenção
   - Taxa de retorno
   - Churn rate
   - Lifetime value
   - Repeat purchase rate

5. Redes Sociais
   - Seguidores
   - Engajamento rate
   - Alcance
   - Cliques

Como Definir Metas:

• Baseie-se em dados históricos
• Considere benchmarks da indústria
• Seja realista mas ambicioso
• Revise regularmente
• Comunique as metas ao time

Acompanhar KPIs permite tomar decisões baseadas em dados, não em intuição.`
      },
      {
        id: '1.7',
        title: 'Capítulo 1.7 - Ferramentas Básicas',
        content: `Existem centenas de ferramentas para marketing digital. Aqui estão as essenciais:

Análise e Dados:
• Google Analytics: Acompanhar tráfego do site
• Google Search Console: Monitorar presença nos buscadores
• Hotjar: Mapa de calor e gravação de sessões
• Mixpanel: Análise de comportamento do usuário

Email Marketing:
• Mailchimp: Automação de email gratuita
• RD Station: Plataforma completa de marketing
• Brevo: Email marketing e SMS

Redes Sociais:
• Buffer: Agendamento de posts
• Hootsuite: Gerenciamento de múltiplas redes
• Later: Planejamento visual para Instagram

Publicidade:
• Google Ads: Publicidade no Google
• Facebook Ads Manager: Publicidade no Facebook/Instagram
• Canva: Design de anúncios

Produtividade:
• Asana: Gerenciamento de projetos
• Trello: Organização visual
• Notion: Base de conhecimento

SEO:
• Semrush: Pesquisa de palavras-chave
• Ahrefs: Análise de backlinks
• Ubersuggest: Ideias de conteúdo

Comece com as ferramentas gratuitas e evolua conforme sua necessidade.`
      },
      {
        id: '1.8',
        title: 'Capítulo 1.8 - Mindset do Empreendedor Digital',
        content: `O mindset correto é tão importante quanto o conhecimento técnico para sucesso no marketing digital.

Características do Empreendedor Digital de Sucesso:

1. Mentalidade de Aprendizado Contínuo
   - O digital muda constantemente
   - Dedique tempo para aprender
   - Acompanhe tendências
   - Teste novas estratégias

2. Orientação para Resultados
   - Foque em métricas
   - Tome decisões baseadas em dados
   - Teste e otimize constantemente
   - Não se apegue a ideias que não funcionam

3. Resiliência e Paciência
   - Nem tudo funciona na primeira tentativa
   - Aprenda com fracassos
   - Persistência é fundamental
   - Sucesso leva tempo

4. Criatividade e Inovação
   - Pense diferente
   - Teste novas ideias
   - Combine estratégias
   - Crie conteúdo original

5. Foco no Cliente
   - Entenda seus problemas
   - Crie soluções relevantes
   - Ouça feedback
   - Melhore constantemente

6. Disciplina e Organização
   - Tenha um plano
   - Cumpra prazos
   - Organize seu tempo
   - Mantenha registros

Hábitos para Desenvolver:

• Leia sobre marketing digital diariamente
• Analise o que concorrentes fazem
• Teste uma nova estratégia por mês
• Revise métricas semanalmente
• Dedique tempo para aprender ferramentas novas

O mindset certo abre portas para oportunidades infinitas no marketing digital.`
      }
    ]
  },
  {
    id: 'module2',
    title: '💰 MÓDULO 2 - COMO CRIAR E VENDER PRODUTOS DIGITAIS',
    icon: '💎',
    chapters: [
      {
        id: '2.1',
        title: 'Capítulo 2.1 - Tipos de Produtos Digitais',
        content: `Existem diversos tipos de produtos digitais que você pode criar e vender:

Cursos Online
Conteúdo educacional estruturado em vídeos, PDFs e materiais complementares. Pode ser ao vivo ou gravado. Ideal para ensinar habilidades específicas.

E-books
Livros digitais em PDF ou outros formatos. Menor investimento que cursos, ótimo para começar. Pode ser um lead magnet ou produto pago.

Templates
Modelos prontos para uso (planilhas Excel, designs Canva, apresentações PowerPoint). Baixo custo de produção, alto potencial de venda.

Softwares e Aplicações
Ferramentas digitais que resolvem problemas específicos. Requer conhecimento técnico, mas pode gerar receita recorrente.

Membresías
Acesso contínuo a conteúdo exclusivo, comunidade e suporte. Gera receita recorrente e cria relacionamento duradouro.

Consultorias e Mentorias
Serviços de orientação personalizada. Pode ser individual ou em grupo. Maior valor agregado, maior preço.

Webinários
Aulas ao vivo transmitidas online. Ótimo para educar e vender. Pode ser gratuito (lead magnet) ou pago.

Plugins e Extensões
Complementos para plataformas populares. Requer conhecimento técnico, mas pode ter grande alcance.

Audiobooks
Versão em áudio de livros. Crescimento exponencial neste mercado.

Presets e Filtros
Predefinições para softwares de edição (Lightroom, Photoshop, Premiere). Fácil de criar, alto potencial de venda.

Escolha o tipo que melhor se alinha com seu conhecimento e recursos disponíveis.`
      },
      {
        id: '2.2',
        title: 'Capítulo 2.2 - Validação de Ideias',
        content: `Antes de investir tempo e dinheiro, valide sua ideia de produto digital:

Passo 1: Pesquisa de Mercado
• Existe demanda real por este produto?
• Quantas pessoas procuram por isso?
• Qual é o tamanho do mercado?
• Ferramentas: Google Trends, Ubersuggest, Answer the Public

Passo 2: Análise da Concorrência
• Quem mais oferece algo parecido?
• Qual é o preço praticado?
• Como eles se posicionam?
• Qual é seu diferencial?

Passo 3: Teste com Público
• Apresente a ideia para seu público-alvo
• Faça pesquisas e entrevistas
• Peça feedback honesto
• Gauge de interesse: Quantos comprariam?

Passo 4: MVP (Produto Mínimo Viável)
• Crie uma versão simplificada
• Teste com grupo pequeno
• Colete feedback detalhado
• Refine antes de lançamento completo

Passo 5: Feedback e Iteração
• Ouça o que seus clientes dizem
• Identifique pontos de melhoria
• Ajuste conforme necessário
• Melhore continuamente

Sinais de Validação:
✓ Pessoas dispostas a pagar
✓ Demanda consistente
✓ Feedback positivo
✓ Interesse em pré-venda
✓ Disposição de esperar

Sinais de Alerta:
✗ Falta de interesse
✗ Preço muito baixo
✗ Muita concorrência
✗ Mercado saturado
✗ Dificuldade em explicar valor

Validar antes de criar economiza tempo e dinheiro.`
      },
      {
        id: '2.3',
        title: 'Capítulo 2.3 - Criação de Conteúdo',
        content: `A qualidade do conteúdo é fundamental para o sucesso do seu produto digital.

Estrutura de um Curso Online:

Módulo 1: Fundamentos
• Aula 1: Introdução
• Aula 2: Conceitos básicos
• Aula 3: Ferramentas necessárias

Módulo 2: Prática
• Aula 4: Passo a passo
• Aula 5: Exemplos reais
• Aula 6: Exercícios

Módulo 3: Avançado
• Aula 7: Técnicas avançadas
• Aula 8: Otimizações
• Aula 9: Troubleshooting

Módulo 4: Aplicação
• Aula 10: Projeto final
• Aula 11: Feedback
• Aula 12: Próximos passos

Dicas para Criar Conteúdo de Qualidade:

1. Planeje antes de gravar
   - Crie roteiro detalhado
   - Organize a sequência lógica
   - Defina duração de cada aula

2. Qualidade técnica
   - Áudio claro e sem ruído
   - Vídeo em alta resolução
   - Boa iluminação
   - Edição profissional

3. Engajamento
   - Comece com um gancho
   - Use exemplos práticos
   - Conte histórias
   - Mantenha ritmo

4. Acessibilidade
   - Adicione legendas
   - Use linguagem clara
   - Defina termos técnicos
   - Ofereça materiais complementares

5. Valor Real
   - Ensine o que promete
   - Seja específico
   - Forneça templates e recursos
   - Inclua exercícios práticos

Conteúdo de qualidade justifica o preço e gera recomendações.`
      },
      {
        id: '2.4',
        title: 'Capítulo 2.4 - Plataformas de Hospedagem',
        content: `Escolher a plataforma certa para hospedar seu produto é crucial.

Plataformas de Cursos Online:

Hotmart
• Plataforma brasileira
• Fácil de usar
• Suporte em português
• Comissão: 40% (você fica com 60%)
• Ideal para iniciantes

Kiwify
• Plataforma brasileira
• Integrada com automação
• Bom suporte
• Comissão: 30% (você fica com 70%)
• Ótima para afiliação

Udemy
• Maior plataforma mundial
• Acesso a milhões de alunos
• Você controla o preço
• Comissão: 50-75%
• Requer aprovação

Teachable
• Plataforma completa
• Branding próprio
• Ferramentas avançadas
• Custo: $29-249/mês
• Ideal para profissionais

Kajabi
• All-in-one marketing
• Cursos, email, landing pages
• Muito completa
• Custo: $119-319/mês
• Para negócios maiores

Plataformas de E-books:

Amazon KDP
• Maior alcance mundial
• Royalties: 35-70%
• Fácil publicação
• Ideal para e-books

Gumroad
• Simples e direto
• Comissão: 10%
• Bom para produtos digitais
• Comunidade ativa

SendOwl
• Fácil de usar
• Integração com email
• Comissão: 8.5%
• Bom suporte

Escolha Baseada em:
• Tipo de produto
• Público-alvo
• Orçamento
• Funcionalidades necessárias
• Suporte oferecido

Comece com plataforma estabelecida e migre conforme crescer.`
      },
      {
        id: '2.5',
        title: 'Capítulo 2.5 - Precificação Estratégica',
        content: `Definir o preço correto é fundamental para o sucesso do seu produto.

Métodos de Precificação:

1. Custo + Margem
• Calcule todos os custos
• Adicione margem de lucro (100-300%)
• Simples mas pode não refletir valor

2. Baseado em Valor
• Quanto o cliente economiza/ganha?
• Qual é o valor percebido?
• Melhor método para produtos digitais
• Preço pode ser maior

3. Concorrência
• Pesquise preços de concorrentes
• Posicione-se acima ou abaixo
• Considere diferencial
• Não seja o mais barato

4. Teste de Mercado
• Comece com preço testado
• Aumente gradualmente
• Observe impacto nas vendas
• Encontre ponto ótimo

Estratégias de Precificação:

Precificação Escalonada
• Básico: R$ 97
• Profissional: R$ 297
• Premium: R$ 597

Precificação Psicológica
• R$ 99 em vez de R$ 100
• R$ 197 em vez de R$ 200
• Parece mais barato

Precificação por Acesso
• Acesso vitalício: R$ 497
• Acesso 1 ano: R$ 297
• Acesso 3 meses: R$ 97

Fatores que Influenciam Preço:

• Qualidade do conteúdo
• Experiência do criador
• Demanda do mercado
• Concorrência
• Valor entregue
• Público-alvo
• Formato do produto

Teste de Preço:

Comece com preço moderado e teste aumentos. Se as vendas caem menos de 10%, o preço está baixo. Se caem mais de 30%, o preço está alto.

Lembre-se: Preço baixo não significa mais vendas. Preço certo significa mais lucro.`
      },
      {
        id: '2.6',
        title: 'Capítulo 2.6 - Copywriting para Vendas',
        content: `Copywriting é a arte de escrever textos que vendem.

Fórmula AIDA:

A - Atenção
• Crie um headline impactante
• Resolva um problema
• Faça uma promessa
• Desperte curiosidade

Exemplo: "Como Ganhar R$ 5.000/mês com Marketing Digital em 90 Dias"

I - Interesse
• Explique o problema
• Mostre que você entende
• Crie empatia
• Valide a dor

Exemplo: "Você está cansado de trabalhar 8 horas por dia e ganhar pouco? Muitos profissionais enfrentam essa realidade..."

D - Desejo
• Mostre a solução
• Descreva os benefícios
• Crie visualização do resultado
• Use prova social

Exemplo: "Imagine acordar sem pressa, trabalhar 2 horas e ganhar mais que um mês de salário..."

A - Ação
• Call-to-action claro
• Crie urgência
• Ofereça garantia
• Facilite a compra

Exemplo: "Inscreva-se agora e ganhe R$ 500 em bônus - Vagas limitadas!"

Elementos de um Bom Copy:

1. Headline Poderoso
   - Promessa clara
   - Benefício específico
   - Curiosidade

2. Subheadline
   - Reforça a promessa
   - Adiciona detalhe
   - Cria urgência

3. Problema Identificado
   - Mostre que você entende
   - Use linguagem do cliente
   - Crie empatia

4. Solução Apresentada
   - Seu produto resolve
   - Explique como funciona
   - Seja específico

5. Prova Social
   - Depoimentos
   - Números de vendas
   - Casos de sucesso
   - Certificações

6. Oferta Especial
   - Desconto por tempo limitado
   - Bônus exclusivos
   - Parcelamento
   - Garantia

7. Call-to-Action
   - Botão destacado
   - Texto acionável
   - Crie urgência
   - Facilite a ação

Dicas Práticas:

• Use "você" em vez de "eu"
• Seja específico, não vago
• Use números quando possível
• Crie urgência (vagas limitadas)
• Ofereça garantia
• Teste diferentes versões

Bom copy é a diferença entre vender pouco e vender muito.`
      },
      {
        id: '2.7',
        title: 'Capítulo 2.7 - Páginas de Vendas que Convertem',
        content: `Uma página de vendas bem estruturada pode aumentar suas conversões em 300%.

Estrutura de uma Página de Vendas Eficaz:

1. Header
• Logo e navegação
• Headline principal
• Subheadline complementar
• Imagem ou vídeo de impacto

2. Problema
• Identifique a dor
• Use linguagem do cliente
• Crie empatia
• Mostre que você entende

3. Solução
• Apresente seu produto
• Explique como funciona
• Mostre benefícios principais
• Use imagens/vídeos

4. Benefícios Específicos
• O que o cliente ganha?
• Como muda a vida?
• Qual é o resultado?
• Seja específico

5. Prova Social
• Depoimentos de clientes
• Números de vendas
• Casos de sucesso
• Certificações e prêmios

6. Oferta Especial
• Preço
• Bônus inclusos
• Garantia
• Urgência (vagas limitadas)

7. FAQ (Perguntas Frequentes)
• Responda objeções
• Crie confiança
• Reduza dúvidas
• Facilite decisão

8. Call-to-Action
• Botão destacado
• Texto claro e acionável
• Repetido várias vezes
• Crie urgência

Elementos Visuais:

• Cores contrastantes para CTA
• Imagens de qualidade
• Vídeos de apresentação
• Ícones para benefícios
• Espaçamento adequado

Otimizações para Conversão:

1. Teste A/B
   - Teste headlines diferentes
   - Teste cores de botão
   - Teste ofertas
   - Mede qual converte mais

2. Velocidade
   - Página rápida
   - Menos cliques
   - Menos distrações
   - Foco total no CTA

3. Mobile-Friendly
   - Design responsivo
   - Botão grande
   - Texto legível
   - Carregamento rápido

4. Confiança
   - Certificações
   - Depoimentos
   - Garantia
   - Contato claro

5. Urgência
   - Vagas limitadas
   - Oferta por tempo limitado
   - Countdown timer
   - Preço aumentando

Uma página bem otimizada pode triplicar suas vendas sem aumentar tráfego.`
      },
      {
        id: '2.8',
        title: 'Capítulo 2.8 - Programas de Afiliados',
        content: `Um programa de afiliados permite que outros vendam seu produto e você pague comissão.

Como Funciona:

1. Você cria o produto
2. Afiliados se cadastram
3. Recebem link único
4. Promovem para seu público
5. Quando vendem, ganham comissão
6. Você paga a comissão

Vantagens:

• Vendas sem investimento em publicidade
• Alcance maior (múltiplos afiliados)
• Você paga apenas por resultado
• Crescimento exponencial
• Afiliados motivados ganham muito

Estrutura de Comissão:

Modelo 1: Percentual Fixo
• 20% de comissão por venda
• Simples de entender
• Previsível

Modelo 2: Escalonado
• 10% para primeiras 10 vendas
• 15% para 11-50 vendas
• 20% para 50+ vendas
• Motiva afiliados

Modelo 3: Valor Fixo
• R$ 50 por venda
• Independente do preço
• Fácil de calcular

Modelo 4: Híbrido
• Percentual + bônus
• Bônus por volume
• Mais motivador

Quanto Pagar:

• Produto R$ 100: 20-30% (R$ 20-30)
• Produto R$ 500: 15-25% (R$ 75-125)
• Produto R$ 1000: 10-20% (R$ 100-200)

Quanto maior o valor, menor a comissão percentual.

Como Recrutar Afiliados:

1. Influenciadores
   - Já têm audiência
   - Podem vender muito
   - Exigem comissão maior

2. Criadores de Conteúdo
   - Blogs, YouTube, podcasts
   - Audiência engajada
   - Bom ROI

3. Comunidades
   - Grupos do Facebook
   - Comunidades online
   - Fácil acesso

4. Email List
   - Contatos diretos
   - Conversão alta
   - Relacionamento existente

Ferramentas para Afiliados:

• Hotmart: Gerencia afiliados automaticamente
• Kiwify: Programa de afiliação integrado
• Impact: Plataforma completa
• Refersion: Especializada em afiliação

Dicas para Sucesso:

• Ofereça comissão competitiva
• Forneça materiais de marketing
• Suporte aos afiliados
• Pague no prazo
• Celebre sucessos
• Comunique regularmente

Um bom programa de afiliados pode gerar 50% ou mais das suas vendas.`
      }
    ]
  },
  {
    id: 'module3',
    title: '🎯 MÓDULO 3 - TRÁFEGO PAGO DO ZERO AO AVANÇADO',
    icon: '📊',
    chapters: [
      {
        id: '3.1',
        title: 'Capítulo 3.1 - Facebook Ads Completo',
        content: `Facebook Ads é uma das plataformas mais poderosas para publicidade digital.

Por que Facebook Ads?

• Segmentação avançada de público
• Baixo custo por clique
• Múltiplos formatos de anúncios
• Integração com Instagram e Messenger
• Rastreamento detalhado de resultados
• Retargeting eficaz

Estrutura de Campanhas:

Campanha → Conjunto de anúncios → Anúncios

Campanha: Define o objetivo (vendas, leads, tráfego)
Conjunto de Anúncios: Define público e orçamento
Anúncios: O conteúdo visual e textual

Objetivos de Campanha:

• Conscientização: Aumentar visibilidade
• Consideração: Gerar interesse
• Conversão: Gerar vendas ou leads
• Tráfego: Enviar para site
• Engajamento: Likes, comentários, compartilhamentos
• Instalação de App: Baixar aplicativo

Como Começar:

1. Crie conta de anúncios no Facebook
2. Configure seu público-alvo
3. Escolha o objetivo da campanha
4. Defina orçamento e cronograma
5. Crie anúncios atraentes
6. Monitore e otimize resultados

Segmentação de Público:

• Idade e gênero
• Localização
• Interesses
• Comportamento
• Conexões
• Audiência customizada (seu banco de dados)
• Audiência similar (parecidos com seus clientes)

Formatos de Anúncios:

• Feed: Imagem + texto no feed
• Stories: Anúncios em stories
• Video: Anúncios em vídeo
• Carousel: Múltiplas imagens
• Collection: Catálogo de produtos
• Instant Experience: Anúncio interativo

Dicas para Anúncios Eficazes:

1. Imagem de qualidade
2. Texto claro e conciso
3. Call-to-action direto
4. Oferta atraente
5. Teste múltiplas variações
6. Acompanhe métricas

Métricas Importantes:

• CPM: Custo por mil impressões
• CPC: Custo por clique
• CPA: Custo por aquisição
• ROAS: Retorno sobre gasto em anúncios
• CTR: Taxa de cliques
• Conversão: Ações desejadas

Otimização:

• Pause anúncios com baixo desempenho
• Aumente orçamento de anúncios bons
• Teste públicos diferentes
• Refine segmentação
• Mude criativos regularmente
• Acompanhe tendências

Facebook Ads bem executado pode gerar ROI de 300-500%.`
      },
      {
        id: '3.2',
        title: 'Capítulo 3.2 - Instagram Ads Dominado',
        content: `Instagram é ideal para marcas visuais e produtos que dependem de imagem.

Por que Instagram Ads?

• Público altamente engajado
• Excelente para B2C
• Formatos visuais poderosos
• Integração com Facebook Ads
• Baixo custo por clique
• Público jovem e com poder de compra

Formatos de Anúncios:

Feed Stories
• Anúncios no feed principal
• Imagem ou vídeo
• Melhor para conversão
• Alcance maior

Reels
• Anúncios em vídeos curtos
• 15-90 segundos
• Alto engajamento
• Crescimento exponencial

Stories
• Anúncios entre stories
• Full screen
• Menos intrusivo
• Bom para awareness

Carousel
• Múltiplas imagens/vídeos
• Swipe para ver mais
• Ótimo para mostrar produtos
• Alta taxa de cliques

Collection
• Catálogo de produtos
• Compra sem sair do app
• Ideal para e-commerce
• Conversão alta

Explore
• Anúncios na aba Explore
• Descoberta de novos públicos
• Bom para awareness
• Alcance grande

Melhores Práticas:

1. Use Imagens de Qualidade
   - Fotos profissionais
   - Cores vibrantes
   - Composição atraente
   - Sem poluição visual

2. Vídeos Curtos e Impactantes
   - Primeiros 3 segundos são críticos
   - Legenda para sem áudio
   - Ação clara
   - Engajamento imediato

3. Call-to-Action Claro
   - Botão destacado
   - Texto direto
   - Facilite a ação
   - Crie urgência

4. Segmentação Precisa
   - Público-alvo bem definido
   - Interesses relevantes
   - Comportamento similar
   - Audiência customizada

5. Teste e Otimize
   - Teste múltiplas variações
   - Acompanhe métricas
   - Pause baixo desempenho
   - Aumente orçamento de bons

Métricas do Instagram:

• Impressões: Quantas vezes foi visto
• Alcance: Quantas pessoas viram
• Engajamento: Likes, comentários, compartilhamentos
• Cliques: Quantos clicaram
• Conversões: Ações desejadas
• ROAS: Retorno sobre gasto

Segmentação de Público:

• Idade e gênero
• Localização
• Interesses (moda, tecnologia, saúde)
• Comportamento online
• Plataformas usadas
• Renda estimada

Dicas Avançadas:

1. Use Reels para maior alcance
2. Teste diferentes horários
3. Crie urgência com ofertas limitadas
4. Use prova social (depoimentos)
5. Segmente por estágio do funil
6. Retargete visitantes do site

Instagram é a plataforma com melhor ROI para muitos negócios.`
      },
      {
        id: '3.3',
        title: 'Capítulo 3.3 - Google Ads Masterclass',
        content: `Google Ads permite alcançar pessoas procurando por seus produtos.

Tipos de Campanhas Google Ads:

Search (Busca)
• Anúncios em resultados de busca
• Pessoa está procurando
• Intenção de compra alta
• Melhor ROI geralmente

Display
• Anúncios em sites parceiros
• Awareness e retargeting
• Alcance grande
• Custo baixo

Shopping
• Anúncios de produtos
• Ideal para e-commerce
• Mostra preço e imagem
• Conversão alta

YouTube
• Anúncios em vídeos
• Skippable ou não-skippable
• Bom para awareness
• Alcance grande

App
• Promove instalação de app
• Retargeting em apps
• Crescimento de usuários

Por que Google Ads?

• Intenção de busca já existe
• Pessoas procurando sua solução
• Retargeting eficaz
• Múltiplos formatos
• Rastreamento detalhado
• Automação com IA

Como Funciona Search Ads:

1. Você escolhe palavras-chave
2. Cria anúncio relevante
3. Define lance máximo
4. Quando alguém busca, seu anúncio aparece
5. Você paga apenas se clicarem
6. Acompanha conversões

Estrutura de Conta:

Conta → Campanhas → Grupos de Anúncios → Anúncios e Palavras-chave

Palavras-chave:

Correspondência Ampla
• Variações da palavra
• Maior alcance
• Menor controle

Correspondência de Frase
• Ordem importa
• Variações permitidas
• Equilíbrio

Correspondência Exata
• Exatamente como digitado
• Menor alcance
• Maior controle

Palavras-chave Negativas
• Excluem buscas indesejadas
• Economizam orçamento
• Melhoram qualidade

Qualidade do Anúncio:

Google classifica anúncios por relevância:

• Título relevante
• Descrição clara
• URL amigável
• Landing page relevante
• Taxa de cliques histórica

Anúncios relevantes têm custo menor.

Lances e Orçamento:

• CPC: Custo por clique
• CPM: Custo por mil impressões
• CPA: Custo por aquisição
• ROAS: Retorno sobre gasto

Defina orçamento diário e deixe Google otimizar.

Retargeting:

Mostre anúncios para quem visitou seu site:

• Aumenta conversão
• Reduz custo por conversão
• Mantém marca em mente
• Essencial para vendas

Dicas para Sucesso:

1. Pesquise palavras-chave relevantes
2. Crie anúncios específicos por grupo
3. Melhore landing page
4. Use extensions (sitelink, callout)
5. Teste diferentes ofertas
6. Otimize para conversão
7. Acompanhe métricas

Google Ads é essencial para capturar intenção de compra.`
      },
      {
        id: '3.4',
        title: 'Capítulo 3.4 - YouTube Ads Profissional',
        content: `YouTube é a segunda maior plataforma de busca do mundo.

Tipos de Anúncios YouTube:

In-stream Skippable
• Antes, durante ou depois do vídeo
• Pessoa pode pular após 5 segundos
• Paga se assistir 30s ou interagir
• Bom para awareness

In-stream Não-Skippable
• Antes, durante ou depois do vídeo
• Pessoa não pode pular
• 15-20 segundos
• Caro mas eficaz

Bumper Ads
• 6 segundos máximo
• Não-skippable
• Awareness rápido
• Custo baixo

Discovery Ads
• Aparece em resultados de busca
• Thumbnail + título
• Clica para assistir
• Bom para consideração

Overlay Ads
• Sobreposição no vídeo
• Semi-transparente
• Não interrompe
• Menos intrusivo

Por que YouTube Ads?

• Alcance de 2+ bilhões de usuários
• Segmentação por interesse
• Retargeting eficaz
• Vídeo é formato mais engajador
• Rastreamento detalhado
• Integração com Google Ads

Segmentação:

• Palavras-chave
• Canais relacionados
• Vídeos relacionados
• Interesses
• Dados demográficos
• Comportamento de compra

Criação de Anúncio:

1. Primeiros 5 Segundos são Críticos
   - Capte atenção imediatamente
   - Mostre benefício
   - Crie curiosidade

2. Mensagem Clara
   - Comunique valor
   - Seja específico
   - Evite jargão

3. Call-to-Action
   - Botão claro
   - Texto direto
   - Crie urgência

4. Qualidade de Vídeo
   - Áudio claro
   - Imagem nítida
   - Edição profissional

Métricas Importantes:

• Impressões: Quantas vezes foi visto
• Cliques: Quantos clicaram
• Taxa de visualização: % que assistiu
• Taxa de conversão: % que converteu
• CPV: Custo por visualização
• ROAS: Retorno sobre gasto

Estratégias:

1. Awareness
   - Bumper ads (6s)
   - Alcance grande
   - Frequência alta

2. Consideração
   - In-stream skippable
   - Mensagem educacional
   - Mostre benefícios

3. Conversão
   - In-stream não-skippable
   - Call-to-action forte
   - Oferta especial

4. Retargeting
   - Anúncios para visitantes do site
   - Maior taxa de conversão
   - Menor custo

Dicas Avançadas:

1. Teste diferentes durações
2. Use legendas (muitos sem áudio)
3. Mostre produto em ação
4. Crie urgência
5. Inclua depoimentos
6. Teste múltiplas variações
7. Otimize landing page

YouTube Ads é ideal para contar histórias e gerar awareness.`
      },
      {
        id: '3.5',
        title: 'Capítulo 3.5 - TikTok Ads Atualizado',
        content: `TikTok é a plataforma de crescimento mais rápido para publicidade.

Por que TikTok Ads?

• Público jovem e engajado
• Algoritmo favorece conteúdo novo
• Custo baixo por clique
• Formato nativo (menos intrusivo)
• Crescimento exponencial
• Tendências virais

Tipos de Anúncios TikTok:

In-Feed Ads
• Aparece no feed principal
• Nativo ao conteúdo
• Skippable
• Melhor conversão

TopView
• Primeiro anúncio ao abrir app
• 5-60 segundos
• Máxima visibilidade
• Mais caro

Branded Hashtag Challenge
• Desafio com hashtag
• Usuários criam conteúdo
• Awareness viral
• Engajamento alto

Branded Effects
• Filtros/efeitos personalizados
• Usuários usam em vídeos
• Criatividade viral
• Awareness

Branded Content
• Parceria com criador
• Conteúdo autêntico
• Menos intrusivo
• Confiança

Características do TikTok:

• Público: 60% Gen Z, 25% millennials
• Duração: 15s a 10 minutos
• Formato: Vertical, nativo
• Engajamento: Muito alto
• Crescimento: Exponencial

Criação de Anúncio Eficaz:

1. Primeiros 3 Segundos
   - Capte atenção
   - Mostre benefício
   - Crie curiosidade

2. Autenticidade
   - Não pareça publicidade
   - Tom conversacional
   - Relatable
   - Divertido

3. Tendências
   - Use sons populares
   - Acompanhe trends
   - Seja criativo
   - Adapte para marca

4. Call-to-Action
   - Claro mas não intrusivo
   - Botão destacado
   - Crie urgência

Segmentação:

• Idade
• Localização
• Interesses
• Comportamento
• Dispositivo
• Idioma

Métricas:

• Impressões
• Cliques
• Taxa de visualização
• Engajamento
• Conversões
• CPC e CPA

Estratégias por Objetivo:

Awareness
• TopView
• Branded Hashtag Challenge
• Alcance grande
• Frequência alta

Tráfego
• In-Feed Ads
• Link claro
• Oferta atraente

Conversão
• In-Feed Ads
• Landing page otimizada
• Call-to-action direto

Dicas para Sucesso:

1. Seja autêntico, não corporativo
2. Use sons populares
3. Acompanhe tendências
4. Crie múltiplas variações
5. Teste diferentes públicos
6. Otimize landing page
7. Mude criativos regularmente

TikTok é o futuro da publicidade digital para marcas jovens.`
      },
      {
        id: '3.6',
        title: 'Capítulo 3.6 - Remarketing e Retargeting',
        content: `Retargeting é mostrar anúncios para quem já visitou seu site.

Por que Retargeting?

• Pessoa já conhece sua marca
• Intenção de compra pode existir
• Custo por clique é menor
• Taxa de conversão é maior
• Mantém marca em mente
• Essencial para vendas

Diferença entre Remarketing e Retargeting:

Remarketing: Email para quem visitou
Retargeting: Anúncios em outras plataformas

Neste capítulo, trataremos ambos.

Como Funciona:

1. Visitante chega ao seu site
2. Pixel de rastreamento registra visita
3. Visitante sai sem comprar
4. Vê seus anúncios em outras plataformas
5. Clica e volta ao seu site
6. Agora compra

Tipos de Retargeting:

1. Retargeting por Pixel
• Código no site
• Rastreia todos os visitantes
• Mostra anúncios depois
• Mais comum

2. Retargeting por Lista
• Upload de emails
• Mostra anúncios para esses emails
• Mais preciso
• Melhor ROI

3. Retargeting Dinâmico
• Mostra produto específico visitado
• Altamente relevante
• Melhor conversão
• Ideal para e-commerce

4. Retargeting Contextual
• Baseado em comportamento
• Mensagem relevante
• Menos intrusivo
• Bom para awareness

Plataformas de Retargeting:

Google Ads
• Rede Display
• YouTube
• Alcance grande
• Integração com Analytics

Facebook/Instagram
• Pixel de rastreamento
• Audiência customizada
• Alcance grande
• Bom custo

LinkedIn
• Para B2B
• Público profissional
• Custo maior
• Conversão alta

TikTok
• Pixel de rastreamento
• Público jovem
• Crescimento
• Custo baixo

Estratégia de Retargeting:

Estágio 1: Awareness
• Mostrar marca
• Conteúdo educacional
• Frequência moderada

Estágio 2: Consideração
• Mostrar benefícios
• Comparações
• Depoimentos

Estágio 3: Decisão
• Oferta especial
• Urgência
• Garantia
• Facilidades de pagamento

Segmentação Avançada:

• Visitantes de página específica
• Visitantes que não converteram
• Clientes antigos
• Visitantes de concorrentes
• Por tempo desde visita
• Por valor de compra

Dicas para Sucesso:

1. Frequência Adequada
   - Não mostre demais (cansativo)
   - Mínimo 3x por semana
   - Máximo 10x por semana

2. Mensagem Relevante
   - Relacione com página visitada
   - Ofereça solução
   - Crie urgência

3. Segmente Público
   - Visitantes de produto
   - Visitantes de blog
   - Visitantes de página de vendas

4. Teste Ofertas
   - Desconto
   - Bônus
   - Frete grátis
   - Parcelamento

5. Acompanhe Métricas
   - Taxa de conversão
   - Custo por conversão
   - ROI
   - Frequência

Exemplo de Campanha:

Dia 1: Visitante vê seu site
Dia 2-3: Anúncio com conteúdo educacional
Dia 4-5: Anúncio com benefícios
Dia 6-7: Anúncio com oferta especial
Dia 8+: Anúncio com urgência

Retargeting pode aumentar conversão em 200-400%.`
      },
      {
        id: '3.7',
        title: 'Capítulo 3.7 - Otimização de Campanhas',
        content: `Otimizar campanhas é essencial para melhorar ROI.

Ciclo de Otimização:

1. Defina KPIs
2. Execute campanha
3. Colete dados
4. Analise resultados
5. Identifique problemas
6. Implemente melhorias
7. Teste e repita

Métricas a Acompanhar:

Tráfego
• Impressões
• Cliques
• Taxa de cliques (CTR)
• Custo por clique (CPC)

Engajamento
• Taxa de engajamento
• Tempo na página
• Páginas por sessão
• Taxa de rejeição

Conversão
• Taxa de conversão
• Custo por conversão (CPA)
• Valor médio do pedido
• Lifetime value

ROI
• Retorno sobre investimento
• Margem de lucro
• Break-even point

Otimizações Comuns:

1. Anúncio
• Teste headlines diferentes
• Teste imagens/vídeos
• Teste call-to-action
• Teste ofertas

2. Público
• Refine segmentação
• Teste públicos diferentes
• Aumente/diminua idade
• Teste interesses

3. Oferta
• Teste preços diferentes
• Teste descontos
• Teste bônus
• Teste urgência

4. Landing Page
• Melhore velocidade
• Simplifique formulário
• Melhore copy
• Adicione prova social

5. Timing
• Teste diferentes horários
• Teste diferentes dias
• Teste sazonalidade

Teste A/B:

Teste uma variável por vez:

• Versão A: Original
• Versão B: Uma mudança
• Mede qual converte mais
• Implementa vencedor
• Testa próxima variável

Exemplo:

Semana 1: Teste headline
Semana 2: Teste imagem
Semana 3: Teste call-to-action
Semana 4: Teste público

Quando Pausar Anúncio:

• CPA acima do limite
• CTR muito baixo
• Taxa de conversão zero
• Orçamento esgotado
• Público saturado

Quando Aumentar Orçamento:

• CPA abaixo do alvo
• CTR acima da média
• Taxa de conversão alta
• Demanda maior que oferta

Ferramentas de Otimização:

Google Ads
• Smart Bidding (automático)
• Performance Max
• Responsive Search Ads

Facebook Ads
• Automatic Placements
• Campaign Budget Optimization
• Conversion API

Dicas Avançadas:

1. Otimize para Conversão, não Cliques
   - Cliques baratos não = vendas
   - Foque em CPA

2. Segmente por Estágio do Funil
   - Awareness: Alcance
   - Consideração: Engajamento
   - Conversão: Conversão

3. Use Dados Históricos
   - Que horários convertem mais?
   - Que públicos convertem mais?
   - Que ofertas convertem mais?

4. Teste Continuamente
   - Nunca pare de testar
   - Pequenas melhorias = grande ROI
   - 1% melhor = 1% mais lucro

5. Acompanhe Tendências
   - Sazonalidade
   - Eventos
   - Mudanças de algoritmo

Otimização contínua é a chave para campanhas rentáveis.`
      },
      {
        id: '3.8',
        title: 'Capítulo 3.8 - Análise de Métricas',
        content: `Entender métricas é fundamental para tomar decisões corretas.

Métricas Básicas:

Impressões
• Quantas vezes o anúncio foi visto
• Não significa clique
• Importante para awareness

Cliques
• Quantas vezes clicaram
• Gera tráfego
• Custa dinheiro

Taxa de Cliques (CTR)
• Cliques / Impressões x 100
• Indica relevância do anúncio
• Média: 1-5%
• Acima de 5% é excelente

Custo por Clique (CPC)
• Quanto você paga por clique
• Varia por plataforma
• Varia por concorrência
• Varia por qualidade

Conversões
• Ações desejadas (compra, cadastro)
• Requer pixel de rastreamento
• Métrica mais importante

Taxa de Conversão
• Conversões / Cliques x 100
• Indica eficácia da landing page
• Média: 1-5%
• Acima de 5% é excelente

Custo por Aquisição (CPA)
• Quanto custa adquirir um cliente
• Investimento / Conversões
• Deve ser menor que margem de lucro

Retorno sobre Investimento (ROI)
• (Lucro / Investimento) x 100
• Métrica final de sucesso
• Acima de 100% é bom
• Acima de 300% é excelente

Fórmulas Importantes:

CTR = (Cliques / Impressões) x 100
CPC = Investimento Total / Cliques
Taxa de Conversão = (Conversões / Cliques) x 100
CPA = Investimento Total / Conversões
ROI = ((Receita - Investimento) / Investimento) x 100

Benchmarks por Indústria:

E-commerce
• CTR: 1-3%
• Taxa de Conversão: 2-5%
• CPA: R$ 20-50
• ROI: 200-400%

Serviços
• CTR: 2-5%
• Taxa de Conversão: 3-8%
• CPA: R$ 50-200
• ROI: 300-600%

Produtos Digitais
• CTR: 2-4%
• Taxa de Conversão: 5-15%
• CPA: R$ 10-30
• ROI: 400-800%

Análise de Dados:

1. Identifique Padrões
   - Qual público converte mais?
   - Qual horário converte mais?
   - Qual anúncio converte mais?

2. Compare Períodos
   - Este mês vs. mês passado
   - Esta semana vs. semana passada
   - Identifique tendências

3. Segmente Dados
   - Por plataforma
   - Por público
   - Por oferta
   - Por período

4. Crie Relatórios
   - Diários: Monitoramento
   - Semanais: Otimizações
   - Mensais: Estratégia

Ferramentas de Análise:

Google Analytics
• Tráfego do site
• Comportamento do usuário
• Conversões
• Gratuito

Google Data Studio
• Cria relatórios visuais
• Integra múltiplas fontes
• Compartilha facilmente
• Gratuito

Plataformas de Anúncios
• Facebook Ads Manager
• Google Ads
• Dados nativos
• Específicos por plataforma

Dicas para Análise:

1. Acompanhe Regularmente
   - Diariamente: Monitoramento
   - Semanalmente: Otimizações
   - Mensalmente: Estratégia

2. Crie Dashboards
   - Visualize dados principais
   - Acompanhe tendências
   - Identifique problemas

3. Compare com Baseline
   - Estabeleça meta
   - Compare desempenho
   - Identifique desvios

4. Comunique Resultados
   - Crie relatórios claros
   - Mostre ROI
   - Recomende ações

5. Tome Ações
   - Não apenas analise
   - Implemente melhorias
   - Teste novas estratégias
   - Meça resultados

Análise de dados transforma campanhas boas em campanhas excelentes.`
      }
    ]
  },
  {
    id: 'module4',
    title: '🌱 MÓDULO 4 - TRÁFEGO ORGÂNICO DETALHADO',
    icon: '🌿',
    chapters: [
      {
        id: '4.1',
        title: 'Capítulo 4.1 - SEO Completo',
        content: `SEO (Search Engine Optimization) é a otimização para mecanismos de busca.

Por que SEO?

• Tráfego gratuito
• Longo prazo
• Credibilidade
• Sem custo por clique
• Visitantes qualificados
• Crescimento exponencial

Pilares do SEO:

1. SEO On-Page: Otimização dentro do seu site

Palavras-chave:
• Pesquise palavras relevantes
• Use ferramentas (Semrush, Ahrefs)
• Coloque na URL, título, descrição
• Use naturalmente no conteúdo

Títulos e Meta Descrições:
• Título: 50-60 caracteres
• Descrição: 150-160 caracteres
• Inclua palavra-chave
• Crie curiosidade

Conteúdo:
• Mínimo 300 palavras
• Estrutura com H1, H2, H3
• Parágrafos curtos
• Listas quando apropriado
• Imagens otimizadas

URLs:
• Amigáveis e descritivas
• Inclua palavra-chave
• Sem caracteres especiais
• Hífens entre palavras

2. SEO Off-Page: Fatores externos

Backlinks:
• Links de outros sites
• Qualidade > Quantidade
• Relevância importante
• Construa naturalmente

Menções:
• Marca mencionada
• Sem link (mas importante)
• Credibilidade
• Autoridade

Autoridade de Domínio:
• Idade do site
• Histórico
• Quantidade de backlinks
• Qualidade de conteúdo

3. SEO Técnico: Estrutura do site

Velocidade:
• Menos de 3 segundos
• Comprime imagens
• Cache do navegador
• CDN

Mobile-Friendly:
• Design responsivo
• Toque amigável
• Carregamento rápido
• Teste no Google

Sitemap XML:
• Lista de páginas
• Ajuda Google encontrar
• Atualize regularmente

Robots.txt:
• Controla crawling
• Bloqueia páginas privadas
• Economiza crawl budget

Processo de Otimização:

1. Pesquisa de palavras-chave
2. Crie conteúdo otimizado
3. Construa backlinks
4. Otimize técnico
5. Acompanhe rankings
6. Refine continuamente

Ferramentas SEO:

• Google Search Console: Dados do Google
• Google Analytics: Tráfego
• Semrush: Pesquisa completa
• Ahrefs: Análise de backlinks
• Ubersuggest: Ideias de conteúdo

SEO é investimento de longo prazo com retorno exponencial.`
      },
      {
        id: '4.2',
        title: 'Capítulo 4.2 - Marketing de Conteúdo',
        content: `Marketing de conteúdo é criar e distribuir conteúdo valioso para atrair e engajar seu público.

Por que Marketing de Conteúdo?

• Atrai público qualificado
• Constrói autoridade
• Gera confiança
• Suporta SEO
• Baixo custo
• Longo prazo

Estrutura de uma Estratégia:

1. Definir Objetivos
   - Awareness
   - Leads
   - Vendas
   - Fidelização

2. Conhecer Seu Público
   - Persona
   - Dores
   - Desejos
   - Comportamento

3. Criar Calendário Editorial
   - Temas por mês
   - Datas de publicação
   - Responsáveis
   - Distribuição

4. Produzir Conteúdo de Qualidade
   - Pesquisado
   - Bem escrito
   - Otimizado
   - Valioso

5. Distribuir em Múltiplos Canais
   - Blog
   - Email
   - Redes sociais
   - YouTube

6. Medir Resultados
   - Tráfego
   - Engajamento
   - Leads
   - Vendas

7. Otimizar Conforme Feedback
   - O que funciona?
   - O que não funciona?
   - Melhore continuamente

Tipos de Conteúdo:

Blog Posts
• 1000-2000 palavras
• SEO otimizado
• Educacional
• Frequência: 2-4x semana

Vídeos
• YouTube
• Educacional ou entretenimento
• 5-15 minutos
• Frequência: 1-2x semana

Infográficos
• Visual
• Dados e estatísticas
• Compartilhável
• Alto engajamento

Podcasts
• Áudio
• Conversas
• 30-60 minutos
• Frequência: Semanal

E-books
• Conteúdo longo
• Lead magnet
• Aprofundado
• Trimestral

Webinários
• Ao vivo
• Educacional
• Interativo
• Mensal

Guias
• Passo a passo
• Detalhado
• Valioso
• Trimestral

Calendário Editorial:

Janeiro:
• Semana 1: Blog sobre tendências
• Semana 2: Vídeo tutorial
• Semana 3: Infográfico
• Semana 4: Podcast

Dicas para Sucesso:

1. Consistência
   - Publique regularmente
   - Mantenha qualidade
   - Cumpra cronograma

2. Qualidade
   - Pesquise bem
   - Escreva bem
   - Edite cuidadosamente

3. SEO
   - Otimize para buscadores
   - Use palavras-chave
   - Crie links internos

4. Distribuição
   - Compartilhe em redes
   - Envie por email
   - Promova em anúncios

5. Engajamento
   - Responda comentários
   - Crie comunidade
   - Ouça feedback

Marketing de conteúdo constrói autoridade e gera tráfego duradouro.`
      }
,
      {
        id: '4.3',
        title: 'Capítulo 4.3 - Instagram Orgânico',
        content: `Instagram é uma das plataformas mais poderosas para tráfego orgânico.

Por que Instagram Orgânico?

• Alcance grande
• Engajamento alto
• Algoritmo favorece conteúdo novo
• Comunidade ativa
• Sem custo de publicidade

Estratégias de Conteúdo:

Feed Posts: Foto ou carrossel, legenda envolvente, hashtags relevantes, call-to-action claro

Stories: Conteúdo efêmero, mais casual, engajamento rápido, stickers interativos

Reels: Vídeos curtos (15-90s), maior alcance, tendências virais, muito engajamento

Lives: Transmissão ao vivo, interação em tempo real, comunidade engajada, autenticidade

Dicas para Crescimento:
1. Consistência: Poste regularmente
2. Qualidade: Imagens profissionais
3. Engajamento: Responda comentários
4. Comunidade: Interaja com outros
5. Hashtags: Use 20-30 relevantes
6. Timing: Poste em horários de pico

Instagram orgânico constrói comunidade leal e duradoura.`
      },
      {
        id: '4.4',
        title: 'Capítulo 4.4 - YouTube Orgânico',
        content: `YouTube é a segunda maior plataforma de busca do mundo.

Por que YouTube Orgânico?

• Segundo maior buscador
• Vídeos ranqueiam por anos
• Autoridade alta
• Monetização possível
• Audiência engajada

Tipos de Conteúdo:

Tutoriais: Passo a passo, educacional, alto valor, muito buscado

Reviews: Análise de produtos, opinião honesta, confiança, engajamento

Vlogs: Conteúdo pessoal, autenticidade, comunidade, relacionamento

Compilações: Melhores momentos, fácil de criar, reutiliza conteúdo, bom para SEO

Otimização de Vídeo:
1. Título: Inclua palavra-chave, seja atraente
2. Descrição: Detalhada, com links
3. Tags: Relevantes e específicas
4. Miniatura: Atraente e clara
5. Transcrição: Melhora SEO
6. Engajamento: Pedir likes e inscrição

YouTube orgânico gera tráfego duradouro e autoridade.`
      },
      {
        id: '4.5',
        title: 'Capítulo 4.5 - TikTok Orgânico',
        content: `TikTok é a plataforma com crescimento mais rápido.

Por que TikTok Orgânico?

• Algoritmo favorece novos criadores
• Alcance viral possível
• Público jovem e engajado
• Sem necessidade de seguidores
• Tendências virais

Estratégias de Conteúdo:

Tendências: Acompanhe trends, adapte para sua marca, use sons populares, criatividade

Educacional: Dicas rápidas, conhecimento valioso, autenticidade, engajamento

Entretenimento: Humor, criatividade, autenticidade, viralidade

Desafios: Crie desafio próprio, incentive participação, comunidade, engajamento viral

Dicas para Crescimento:
1. Autenticidade: Não pareça publicidade
2. Tendências: Acompanhe e adapte
3. Qualidade: Áudio e vídeo bom
4. Frequência: Poste regularmente
5. Engajamento: Responda comentários
6. Comunidade: Interaja com outros

TikTok orgânico pode gerar crescimento exponencial.`
      },
      {
        id: '4.6',
        title: 'Capítulo 4.6 - LinkedIn Estratégico',
        content: `LinkedIn é essencial para B2B e posicionamento profissional.

Por que LinkedIn?

• Profissionais com poder de compra
• B2B ideal
• Posicionamento de autoridade
• Oportunidades de negócio
• Networking

Estratégias de Conteúdo:

Artigos Longos: Pensamento estratégico, autoridade, engajamento profissional, alcance grande

Posts Curtos: Insights rápidos, reflexões, perguntas, engajamento

Vídeos: Conteúdo em vídeo, maior alcance, autenticidade, engajamento

Networking: Conecte com profissionais, mensagens personalizadas, relacionamento, oportunidades

Dicas para Crescimento:
1. Profissionalismo: Mantenha tom profissional
2. Valor: Compartilhe conhecimento
3. Consistência: Poste regularmente
4. Engajamento: Comente em posts relevantes
5. Networking: Conecte com profissionais
6. Autenticidade: Seja genuíno

LinkedIn é rede profissional mais valiosa para B2B.`
      },
      {
        id: '4.7',
        title: 'Capítulo 4.7 - Pinterest para Negócios',
        content: `Pinterest é plataforma visual poderosa frequentemente ignorada.

Por que Pinterest?

• Público com intenção de compra
• Tráfego de qualidade
• Longevidade de pins
• Sem algoritmo competitivo
• Fácil de crescer

Tipos de Conteúdo:

Infográficos: Visuais informativos, dados e estatísticas, alto valor, muito compartilhado

Tutoriais Visuais: Passo a passo, imagens grandes, claro e direto, alto engajamento

Inspiração: Ideias, curadoria, tendências, comunidade

Produtos: Catálogo visual, direto para loja, conversão, vendas

Otimização de Pins:
1. Tamanho: 1000x1500px ideal
2. Descrição: Inclua palavras-chave
3. Título: Atraente e claro
4. Link: Para seu site/loja
5. Cores: Visuais atraentes
6. Frequência: Poste regularmente

Pinterest gera tráfego qualificado com baixa competição.`
      },
      {
        id: '4.8',
        title: 'Capítulo 4.8 - WhatsApp Marketing',
        content: `WhatsApp é canal direto e pessoal para comunicação.

Por que WhatsApp Marketing?

• Taxa de abertura 98%
• Comunicação direta
• Relacionamento pessoal
• Conversão alta
• Baixo custo

Estratégias:

Broadcast Lists: Mensagens para múltiplos contatos, sem grupo, pessoal, engajamento

Grupos: Comunidade, discussão, engajamento, relacionamento

Automação: Respostas automáticas, chatbots, qualificação, eficiência

Atendimento: Suporte ao cliente, respostas rápidas, relacionamento, satisfação

Boas Práticas:
1. Respeito: Não envie spam
2. Valor: Mensagens úteis
3. Frequência: Não exagere
4. Horário: Respeite horários
5. Personalização: Mensagens pessoais
6. Permissão: Sempre peça consentimento

WhatsApp é canal de comunicação mais direto e eficaz.`
      }
    ]

  },
  {
    id: 'module5',
    title: '🔄 MÓDULO 5 - FUNIS DE VENDAS SIMPLES E EFICAZES',
    icon: '📈',
    chapters: [
      {
        id: '5.1',
        title: 'Capítulo 5.1 - Anatomia de um Funil',
        content: `Um funil de vendas representa a jornada do cliente desde o primeiro contato até a compra.

Estágios do funil:

1. Topo (Awareness): Cliente descobre sua marca
2. Meio (Consideration): Cliente avalia suas soluções
3. Fundo (Decision): Cliente decide comprar

Cada estágio requer estratégias diferentes:
- Topo: Conteúdo educacional, SEO, publicidade
- Meio: Comparações, estudos de caso, webinários
- Fundo: Ofertas especiais, depoimentos, garantias`
      },
      {
        id: '5.2',
        title: 'Capítulo 5.2 - Tipos de Funis',
        content: `Existem diferentes modelos de funis para diferentes objetivos:

1. Funil de Leads: Captura contatos para nutrir
2. Funil de Vendas: Converte leads em clientes
3. Funil de Retenção: Mantém clientes engajados
4. Funil de Upsell: Vende produtos complementares
5. Funil de Afiliação: Promove produtos de terceiros

Cada funil tem sua própria estrutura e métricas de sucesso.`
      },
      {
        id: '5.3',
        title: 'Capítulo 5.3 - Ferramentas de Automação',
        content: `Ferramentas de automação permitem escalar seu negócio sem aumentar proporcionalmente o trabalho manual.

Plataformas Recomendadas:

RD Station: Plataforma brasileira, Email + CRM + Landing pages, automação completa

Hubspot: Plataforma completa, gratuita até certo ponto, muito robusta

Zapier: Conecta aplicações, automação entre plataformas, sem código

Make: Automação visual, mais poderoso que Zapier, cenários complexos

Fluxo de Automação Típico:

1. Visitante chega ao site
2. Preenche formulário
3. Email de boas-vindas automático
4. Sequência de educação
5. Email de oferta
6. Follow-up automático
7. Integração com CRM

Automação bem feita pode aumentar conversão em 50-100%.`
      },
      {
        id: '5.4',
        title: 'Capítulo 5.4 - Email Marketing Avançado',
        content: `Email marketing continua sendo um dos canais com melhor ROI.

Segmentação de Email:

Por Comportamento: Visitantes de página específica, clientes que compraram, clientes inativos

Por Dados: Idade, localização, renda, profissão

Por Interesse: Produtos visualizados, conteúdo consumido, preferências declaradas

Por Estágio do Funil: Awareness, consideração, decisão, pós-compra

Estrutura de Email Eficaz:

Subject Line: 50 caracteres máximo, crie curiosidade, inclua benefício

Preheader: 100 caracteres, complementa subject, cria urgência

Body: Imagem atraente, texto claro, parágrafos curtos, benefícios principais

CTA: Botão destacado, texto acionável, único ou máximo 2

Métricas de Email:

Taxa de Abertura: Média 15-25%, acima de 30% é excelente
Taxa de Clique: Média 2-5%, acima de 10% é excelente
Taxa de Conversão: Varia muito, mede eficácia da landing page

Email marketing bem feito gera vendas consistentes.`
      },
      {
        id: '5.5',
        title: 'Capítulo 5.5 - Gatilhos Mentais',
        content: `Gatilhos mentais são técnicas psicológicas que influenciam decisões de compra.

Os 6 Gatilhos Principais:

1. Escassez: Criar sensação de falta ou limitação. Exemplo: "Apenas 3 vagas restantes"

2. Urgência: Pressão de tempo para agir. Exemplo: "Promoção termina em 24 horas"

3. Prova Social: Mostrar que outros aprovam. Exemplo: Depoimentos, "1000+ pessoas compraram"

4. Autoridade: Posicionar-se como especialista. Exemplo: Certificações, prêmios, experiência

5. Reciprocidade: Dar algo antes de pedir. Exemplo: E-book grátis, vídeo educacional

6. Afinidade: Criar conexão pessoal. Exemplo: Histórias pessoais, valores compartilhados

Combinando Gatilhos:

Melhor resultado vem de combinar múltiplos gatilhos na mesma mensagem. Use 2-3 gatilhos por mensagem para máximo impacto.

Gatilhos mentais aumentam conversão quando usados eticamente.`
      },
      {
        id: '5.6',
        title: 'Capítulo 5.6 - Upsell e Downsell',
        content: `Upsell e downsell são estratégias para aumentar ticket médio.

O que é Upsell?

Vender produto de maior valor para cliente existente. Exemplo: Cliente compra curso básico (R$ 97), ofereça curso avançado (R$ 297)

O que é Downsell?

Oferecer produto de menor valor quando cliente recusa upsell. Exemplo: Cliente recusa curso avançado, ofereça e-book complementar (R$ 47)

Por que Funciona?

• Cliente já confia em você
• Já investiu dinheiro
• Conhece valor
• Menor resistência
• Maior taxa de conversão

Sequ ência de Checkout:

1. Cliente clica "Comprar"
2. Preenche dados
3. Antes de pagar: Upsell
4. Se recusa: Downsell
5. Se aceita: Obrigado
6. Email pós-compra com ofertas

Upsell bem feito aumenta ticket em 30-50%.`
      },
      {
        id: '5.7',
        title: 'Capítulo 5.7 - Métricas de Funil',
        content: `Acompanhar métricas de funil é essencial para otimizar conversão.

Estrutura de Funil:

Topo (Awareness) → Meio (Consideração) → Fundo (Decisão) → Pós-venda

Métricas Importantes:

Topo: Visitantes, taxa de rejeição, tempo na página

Meio: Leads gerados, taxa de conversão topo-meio, custo por lead

Fundo: Vendas, taxa de conversão meio-fundo, custo por aquisição, ticket médio

Pós-Venda: Satisfação, taxa de retenção, lifetime value

Fórmulas:

Taxa de Conversão = (Conversões / Visitantes) x 100
Custo por Lead = Investimento / Leads
Custo por Aquisição = Investimento / Vendas
ROI = ((Receita - Investimento) / Investimento) x 100

Otimizar funil é processo contínuo de melhoria.`
      },
      {
        id: '5.8',
        title: 'Capítulo 5.8 - Otimização de Conversão',
        content: `Otimização de conversão é melhorar % de visitantes que realizam ação desejada.

Por que Otimizar Conversão?

• Aumenta receita sem aumentar tráfego
• Mais econômico que comprar tráfego
• Melhora ROI
• Aproveita tráfego existente
• Pequenas melhorias = grande impacto

Elementos que Afetam Conversão:

1. Headline: Primeira coisa que lê, deve ser atraente
2. Copy: Deve ser claro, relevante, persuasivo
3. Call-to-Action: Deve ser visível, claro, acionável
4. Design: Deve ser atraente, profissional, mobile-friendly
5. Oferta: Deve ser atraente, clara, valiosa
6. Prova Social: Depoimentos, números, avaliações

Teste A/B Correto:

Teste UMA variável por vez. Tempo mínimo de 1-2 semanas. Amostra mínima de 100 conversões por variação.

Otimização contínua de conversão é chave para crescimento.`
      }
    ]
  },
  {
    id: 'module6extra',
    title: '📖 MÓDULO 6 EXTRA - PASSO A PASSO PRÁTICO',
    icon: '🎓',
    chapters: [
      {
        id: '7.1',
        title: 'Capítulo 7.1 - Como Criar Conta no Facebook Ads',
        content: `Neste capítulo, você aprenderá passo a passo como criar uma conta no Facebook Ads e começar suas primeiras campanhas de publicidade.

PASSO 1: Criar Conta no Facebook
1. Acesse facebook.com
2. Clique em "Criar nova conta"
3. Preencha seus dados pessoais (nome, email/telefone, data de nascimento)
4. Escolha uma senha forte (mínimo 8 caracteres com números e símbolos)
5. Confirme seu email ou telefone
6. Complete seu perfil com foto e informações básicas

Dicas Importantes:
- Use um email profissional para sua conta
- Ative a autenticação de dois fatores para segurança
- Não use caracteres especiais na senha
- Mantenha seus dados atualizados

PASSO 2: Criar Página de Negócio
1. Acesse seu perfil pessoal
2. Clique em "Criar" no menu superior
3. Selecione "Página"
4. Escolha a categoria de negócio (Negócio Local, Marca, Comunidade, etc)
5. Preencha nome da página, descrição e informações de contato
6. Adicione foto de perfil (logo) e foto de capa
7. Confirme e publique a página

Dicas Importantes:
- Use nome claro e profissional
- Adicione foto de alta qualidade (mínimo 200x200px)
- Bio clara e concisa (máx 255 caracteres)
- Ative o modo de página (não pessoal)

PASSO 3: Acessar Facebook Ads Manager
1. Acesse ads.facebook.com
2. Ou clique em "Ferramentas" na página de negócio
3. Selecione "Ads Manager"
4. Clique em "Criar" para iniciar nova campanha
5. Escolha seu objetivo de marketing (Awareness, Consideration, Conversion)
6. Configure seu público-alvo (localização, idade, interesses)
7. Defina orçamento diário e cronograma
8. Crie seus anúncios com imagens/vídeos

Dicas Importantes:
- Comece com orçamento pequeno ($5-10/dia)
- Teste diferentes públicos antes de escalar
- Use dados de conversão para otimizar
- Acompanhe métricas diariamente

PASSO 4: Configurar Pixel do Facebook
1. No Ads Manager, vá para "Ferramentas" > "Pixels"
2. Clique em "Criar um Pixel"
3. Nomeie seu pixel (ex: "Meu Site")
4. Copie o código do pixel
5. Adicione o código no <head> do seu website
6. Ou use integração com plataforma (Shopify, Wix, etc)
7. Teste o pixel com o "Teste de Pixel"

Dicas Importantes:
- O pixel rastreia conversões e comportamento do usuário
- Essencial para retargeting de visitantes
- Valide que está funcionando antes de campanhas
- Implemente eventos customizados para melhor rastreamento`
      },
      {
        id: '7.2',
        title: 'Capítulo 7.2 - Como Criar Conta no Google Ads',
        content: `Aprenda a criar uma conta no Google Ads e configurar suas primeiras campanhas de busca.

PASSO 1: Criar Conta Google
1. Acesse accounts.google.com
2. Clique em "Criar conta"
3. Preencha nome, email e senha
4. Verifique seu email
5. Configure autenticação de dois fatores
6. Complete seu perfil com foto e informações

Dicas Importantes:
- Use email profissional
- Senha com 12+ caracteres
- Ative recuperação de conta com telefone
- Guarde suas credenciais em local seguro

PASSO 2: Acessar Google Ads
1. Acesse ads.google.com
2. Clique em "Comece agora"
3. Selecione seu país e fuso horário
4. Escolha seu objetivo de marketing
5. Configure sua primeira campanha
6. Defina orçamento diário
7. Adicione método de pagamento

Dicas Importantes:
- Comece com Search Ads (mais simples)
- Orçamento inicial: $10-20/dia
- Teste diferentes keywords
- Acompanhe CTR e CPC

PASSO 3: Configurar Google Tag Manager
1. Acesse tagmanager.google.com
2. Clique em "Criar conta"
3. Nomeie sua conta e container
4. Selecione "Web" como plataforma
5. Copie o código GTM
6. Adicione no <head> e <body> do seu site
7. Crie tags para rastreamento

Dicas Importantes:
- GTM permite rastreamento avançado
- Não requer conhecimento técnico profundo
- Integra com Google Analytics
- Teste em staging antes de produção

PASSO 4: Criar Primeira Campanha de Busca
1. No Google Ads, clique em "Campanhas"
2. Clique em "+" para nova campanha
3. Escolha "Busca"
4. Defina URL final do seu site
5. Configure locais e idiomas
6. Defina orçamento diário
7. Crie grupos de anúncios
8. Adicione 10-20 palavras-chave por grupo
9. Escreva anúncios (título + descrição)

Dicas Importantes:
- Use 10-20 palavras-chave por grupo
- Escreva anúncios com call-to-action claro
- Teste diferentes variações
- Monitore Quality Score`
      },
      {
        id: '7.3',
        title: 'Capítulo 7.3 - Como Criar Loja no Shopify',
        content: `Guia completo para criar sua loja online no Shopify e começar a vender.

PASSO 1: Criar Conta Shopify
1. Acesse shopify.com
2. Clique em "Comece grátis"
3. Preencha email
4. Crie senha forte
5. Confirme email
6. Complete informações da loja
7. Escolha plano (teste 3 dias grátis)

Dicas Importantes:
- Teste gratuito de 3 dias
- Plano básico: $29/mês
- Sem necessidade de cartão no teste
- Cancele antes de 3 dias se não quiser

PASSO 2: Configurar Domínio
1. Vá para "Configurações" > "Domínios"
2. Compre novo domínio OU conecte existente
3. Configure DNS se necessário
4. Aguarde propagação (até 48h)
5. Verifique se domínio está ativo
6. Configure SSL (automático)

Dicas Importantes:
- Domínio .com.br mais confiável
- Renovação automática
- Email profissional com domínio
- SSL grátis incluído

PASSO 3: Adicionar Produtos
1. Vá para "Produtos"
2. Clique em "Adicionar produto"
3. Preencha título e descrição
4. Defina preço
5. Faça upload de fotos (mínimo 3)
6. Configure estoque
7. Defina variações (tamanho, cor)
8. Publique produto

Dicas Importantes:
- Fotos de alta qualidade (1080x1080px)
- Descrição com benefícios
- Preço com margem de lucro
- Use SEO nas descrições

PASSO 4: Configurar Pagamento
1. Vá para "Configurações" > "Pagamentos"
2. Escolha gateway (Stripe, PayPal, etc)
3. Conecte sua conta bancária
4. Configure comissões
5. Teste pagamento
6. Ative checkout
7. Configure email de confirmação

Dicas Importantes:
- Múltiplos métodos de pagamento
- Stripe mais popular
- Teste antes de ativar
- Configure emails automáticos`
      },
      {
        id: '7.4',
        title: 'Capítulo 7.4 - Como Vender Curso no Hotmart',
        content: `Aprenda a criar e vender seu primeiro curso online no Hotmart.

PASSO 1: Criar Conta Hotmart
1. Acesse hotmart.com
2. Clique em "Criar conta"
3. Escolha tipo de conta (Produtor/Afiliado)
4. Preencha email e senha
5. Confirme email
6. Complete perfil com dados pessoais
7. Ative sua conta

Dicas Importantes:
- Use email profissional
- Dados bancários para receber
- Documento de identidade válido
- Verifique sua conta

PASSO 2: Criar Seu Primeiro Produto
1. No dashboard, clique em "Criar Produto"
2. Escolha tipo (Curso, E-book, Membership)
3. Preencha nome e descrição
4. Defina preço
5. Faça upload de materiais
6. Configure acesso (imediato/liberado)
7. Crie página de vendas

Dicas Importantes:
- Descrição clara e atrativa
- Preço competitivo
- Materiais bem organizados
- Teste acesso antes de publicar

PASSO 3: Configurar Página de Vendas
1. Acesse "Editar Produto"
2. Vá para "Página de Vendas"
3. Adicione foto/vídeo do produto
4. Escreva descrição convincente
5. Liste benefícios principais
6. Adicione depoimentos
7. Configure CTA "Comprar Agora"

Dicas Importantes:
- Use copywriting persuasivo
- Imagens de qualidade
- Depoimentos reais de clientes
- Destaque principais benefícios

PASSO 4: Configurar Programa de Afiliados
1. Vá para "Programa de Afiliados"
2. Ative o programa
3. Defina comissão (10-50%)
4. Configure materiais de marketing
5. Gere link de afiliado
6. Compartilhe com potenciais afiliados
7. Acompanhe vendas

Dicas Importantes:
- Comissão atrativa = mais afiliados
- Forneça banners e textos
- Acompanhe performance
- Pague afiliados regularmente`
      },
    ]
  }

];
