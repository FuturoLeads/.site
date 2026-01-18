import { invokeLLM } from './_core/llm';

export interface TutorMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface TutorContext {
  ebookTitle: string;
  moduleTitle: string;
  chapterTitle: string;
  chapterContent: string;
}

/**
 * Extrai texto da resposta do LLM
 */
function extractTextFromResponse(content: any): string {
  if (typeof content === 'string') {
    return content;
  }
  if (Array.isArray(content)) {
    const textItem = content.find((item: any) => item.type === 'text');
    return (textItem as any)?.text || '';
  }
  return '';
}

/**
 * Cria um prompt de sistema para o tutor inteligente
 */
function createSystemPrompt(context: TutorContext): string {
  return `Você é um tutor inteligente e amigável especializado em ensinar ${context.ebookTitle}.

Contexto atual:
- E-book: ${context.ebookTitle}
- Módulo: ${context.moduleTitle}
- Capítulo: ${context.chapterTitle}

Conteúdo do capítulo:
${context.chapterContent}

Suas responsabilidades:
1. Responder perguntas dos alunos sobre o conteúdo com clareza e paciência
2. Fornecer exemplos práticos quando possível
3. Simplificar conceitos complexos
4. Encorajar o aprendizado contínuo
5. Sugerir exercícios relacionados quando apropriado

Mantenha respostas concisas mas informativas. Use markdown para melhor formatação.`;
}

/**
 * Envia uma mensagem ao tutor IA e obtém resposta
 */
export async function askTutor(
  userMessage: string,
  context: TutorContext,
  conversationHistory: TutorMessage[] = []
): Promise<string> {
  const systemPrompt = createSystemPrompt(context);

  // Construir histórico de mensagens
  const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory.map((msg) => ({
      role: msg.role,
      content: msg.content,
    })),
    { role: 'user', content: userMessage },
  ];

  try {
    const response = await invokeLLM({
      messages: messages as any,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('Sem resposta do modelo');
    }

    return extractTextFromResponse(content);
  } catch (error) {
    console.error('Erro ao chamar tutor IA:', error);
    throw new Error('Não foi possível obter resposta do tutor. Tente novamente.');
  }
}

/**
 * Gera exercícios recomendados baseado no conteúdo
 */
export async function generateExercises(context: TutorContext): Promise<string> {
  const prompt = `Baseado no seguinte conteúdo do capítulo "${context.chapterTitle}" do e-book "${context.ebookTitle}", 
  gere 3-5 exercícios práticos que ajudem o aluno a consolidar o aprendizado.

Conteúdo:
${context.chapterContent}

Formate os exercícios como uma lista numerada com:
1. Descrição clara do exercício
2. Objetivo de aprendizado
3. Dica de resolução (opcional)`;

  try {
    const response = await invokeLLM({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = response.choices[0]?.message?.content;
    return extractTextFromResponse(content);
  } catch (error) {
    console.error('Erro ao gerar exercícios:', error);
    throw new Error('Não foi possível gerar exercícios. Tente novamente.');
  }
}

/**
 * Gera um resumo do conteúdo
 */
export async function generateSummary(context: TutorContext): Promise<string> {
  const prompt = `Crie um resumo conciso (máximo 5 pontos-chave) do seguinte conteúdo:

Capítulo: ${context.chapterTitle}
E-book: ${context.ebookTitle}

Conteúdo:
${context.chapterContent}

Formate como uma lista de pontos-chave com emojis para melhor visualização.`;

  try {
    const response = await invokeLLM({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = response.choices[0]?.message?.content;
    return extractTextFromResponse(content);
  } catch (error) {
    console.error('Erro ao gerar resumo:', error);
    throw new Error('Não foi possível gerar resumo. Tente novamente.');
  }
}
