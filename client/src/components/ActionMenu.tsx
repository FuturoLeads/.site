import { useState } from 'react';
import { Award, Mail, MessageSquare, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActionMenuProps {
  moduleTitle?: string;
  chapterTitle?: string;
  progressPercentage?: number;
}

export function ActionMenu({ moduleTitle, chapterTitle, progressPercentage = 0 }: ActionMenuProps) {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleGenerateCertificate = () => {
    const certificateContent = `
    ╔════════════════════════════════════════════════════════════════╗
    ║                    CERTIFICADO DE CONCLUSÃO                    ║
    ║                                                                ║
    ║         Marketing Digital: Do Zero ao Avançado                ║
    ║                                                                ║
    ║  Certificamos que o aluno completou com sucesso o curso       ║
    ║  de Marketing Digital, demonstrando conhecimento em:          ║
    ║                                                                ║
    ║  ✓ Fundamentos do Marketing Digital                           ║
    ║  ✓ Estratégias de Marketing Online                            ║
    ║  ✓ Canais de Distribuição Digital                             ║
    ║  ✓ Ferramentas e Plataformas                                  ║
    ║  ✓ Marketing Avançado                                         ║
    ║  ✓ Monetização e Vendas                                       ║
    ║  ✓ Passo a Passo Prático                                      ║
    ║                                                                ║
    ║  Progresso: ${progressPercentage}%                                    ║
    ║  Data: ${new Date().toLocaleDateString('pt-BR')}                        ║
    ║                                                                ║
    ║  Assinado digitalmente por:                                   ║
    ║  Futuro Leads - By Autech                                     ║
    ║                                                                ║
    ╚════════════════════════════════════════════════════════════════╝
    `;

    const element = document.createElement('a');
    const file = new Blob([certificateContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'certificado-marketing-digital.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setShowCertificate(false);
  };

  const handleSupport = () => {
    const subject = encodeURIComponent('Suporte - Marketing Digital');
    const body = encodeURIComponent(`
Módulo: ${moduleTitle || 'Não especificado'}
Capítulo: ${chapterTitle || 'Não especificado'}
Progresso: ${progressPercentage}%

Descrição do problema:
[Descreva seu problema aqui]
    `);
    window.open(`mailto:suporte@futuroLeads.com?subject=${subject}&body=${body}`, '_blank');
    setShowSupport(false);
  };

  const handleFeedback = () => {
    const subject = encodeURIComponent('Feedback - Marketing Digital');
    const body = encodeURIComponent(`
Módulo: ${moduleTitle || 'Não especificado'}
Capítulo: ${chapterTitle || 'Não especificado'}

Seu feedback:
[Compartilhe sua opinião sobre o conteúdo]
    `);
    window.open(`mailto:feedback@futuroLeads.com?subject=${subject}&body=${body}`, '_blank');
    setShowFeedback(false);
  };

  // Componente removido - botões flutuantes foram eliminados
  // Os ícones de Certificado e Suporte agora estão na sidebar do Home.tsx
  return null;
}
