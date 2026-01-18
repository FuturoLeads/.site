import { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';

interface Chapter {
  id: string;
  title: string;
}

interface Module {
  id: string;
  title: string;
  chapters: Chapter[];
}

interface EbookGroupProps {
  ebookTitle: string;
  ebookIcon?: string;
  modules: Module[];
  selectedChapter?: string | null;
  onChapterSelect: (chapterId: string) => void;
  onMobileClose?: () => void;
}

export function EbookGroup({
  ebookTitle,
  ebookIcon = '📚',
  modules,
  selectedChapter,
  onChapterSelect,
  onMobileClose,
}: EbookGroupProps) {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    [modules[0]?.id]: true,
  });
  const [groupExpanded, setGroupExpanded] = useState(true);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const handleChapterClick = (chapterId: string) => {
    onChapterSelect(chapterId);
    onMobileClose?.();
  };

  if (!groupExpanded) {
    return (
      <button
        onClick={() => setGroupExpanded(true)}
        className="w-full text-left p-2 md:p-3 rounded-lg hover:bg-accent transition-colors text-sm md:text-base font-semibold text-foreground flex items-center gap-2"
      >
        <span>{ebookIcon}</span>
        <span className="line-clamp-2">{ebookTitle}</span>
        <ChevronDown className="w-4 h-4 ml-auto flex-shrink-0 rotate-180" />
      </button>
    );
  }

  return (
    <div className="space-y-1 md:space-y-2">
      {/* Cabeçalho do E-book */}
      <button
        onClick={() => setGroupExpanded(false)}
        className="w-full text-left p-2 md:p-3 rounded-lg hover:bg-accent transition-colors text-sm md:text-base font-semibold text-foreground flex items-center gap-2 bg-accent/50"
      >
        <span>{ebookIcon}</span>
        <span className="line-clamp-2 flex-1">{ebookTitle}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform rotate-180" />
      </button>

      {/* Módulos */}
      <div className="space-y-1 md:space-y-2 pl-2 md:pl-3">
        {modules.map((module) => (
          <div key={module.id}>
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-accent transition-colors text-left"
            >
              <span className="font-semibold text-xs md:text-sm text-foreground line-clamp-2">
                {module.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 flex-shrink-0 transition-transform ${
                  expandedModules[module.id] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Capítulos */}
            {expandedModules[module.id] && (
              <div className="ml-3 md:ml-4 space-y-1 mt-2 border-l border-border pl-2 md:pl-3">
                {module.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => handleChapterClick(chapter.id)}
                    className={`w-full text-left p-1.5 md:p-2 rounded text-xs md:text-sm transition-colors ${
                      selectedChapter === chapter.id
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {chapter.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
