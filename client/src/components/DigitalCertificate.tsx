import { Download, Share2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DigitalCertificateProps {
  studentName: string;
  moduleName: string;
  completionDate: Date;
  certificateId: string;
  studentPhoto?: string;
  score?: number;
}

export function DigitalCertificate({
  studentName,
  moduleName,
  completionDate,
  certificateId,
  studentPhoto,
  score = 100,
}: DigitalCertificateProps) {
  const formattedDate = completionDate.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleDownload = () => {
    // Implementar download em PDF
    console.log('Baixando certificado...');
  };

  const handleShare = () => {
    // Implementar compartilhamento
    console.log('Compartilhando certificado...');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Certificado */}
      <div
        className="relative w-full aspect-video bg-gradient-to-br from-amber-50 via-white to-blue-50 rounded-lg shadow-2xl overflow-hidden border-4 border-amber-200"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(59, 130, 246, 0.1) 100%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3e8ff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      >
        {/* Decoração de canto superior esquerdo */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200 to-transparent opacity-20 rounded-br-full"></div>

        {/* Decoração de canto inferior direito */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-200 to-transparent opacity-20 rounded-tl-full"></div>

        {/* Conteúdo do Certificado */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
          {/* Ícone de Certificado */}
          <div className="mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-amber-700 via-amber-600 to-blue-700 bg-clip-text text-transparent">
            Certificado de Conclusão
          </h1>

          {/* Linha decorativa */}
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full mb-8"></div>

          {/* Texto de apresentação */}
          <p className="text-center text-gray-700 mb-8 text-lg font-medium">
            Certificamos que
          </p>

          {/* Nome do Aluno com Foto */}
          <div className="flex flex-col items-center gap-4 mb-8">
            {studentPhoto && (
              <img
                src={studentPhoto}
                alt={studentName}
                className="w-24 h-24 rounded-full border-4 border-amber-300 shadow-lg object-cover"
              />
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              {studentName}
            </h2>
          </div>

          {/* Descrição */}
          <p className="text-center text-gray-700 mb-6 text-base md:text-lg max-w-2xl">
            completou com sucesso o módulo
          </p>

          {/* Nome do Módulo */}
          <p className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-8 italic">
            "{moduleName}"
          </p>

          {/* Data e Score */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8 text-gray-700">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 mb-1">Data de Conclusão</p>
              <p className="text-lg font-bold">{formattedDate}</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 mb-1">Desempenho</p>
              <p className="text-lg font-bold text-green-600">{score}%</p>
            </div>
          </div>

          {/* ID do Certificado */}
          <p className="text-xs text-gray-500 text-center">
            ID do Certificado: {certificateId}
          </p>
        </div>

        {/* Assinatura */}
        <div className="absolute bottom-6 right-8 text-center">
          <div className="w-32 border-t-2 border-gray-400 mb-2"></div>
          <p className="text-xs font-semibold text-gray-700">Marketing Digital</p>
          <p className="text-xs text-gray-600">Futuro Leads - By Autech</p>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex gap-4 justify-center mt-8">
        <Button
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Baixar PDF
        </Button>
        <Button
          onClick={handleShare}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Compartilhar
        </Button>
      </div>

      {/* Info */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Este certificado valida a conclusão do módulo de {moduleName} e pode ser compartilhado em redes sociais e currículos.
      </p>
    </div>
  );
}
