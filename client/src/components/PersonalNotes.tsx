import { useState } from 'react';
import { Trash2, Plus, Edit2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Note {
  id: string;
  content: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PersonalNotesProps {
  chapterId: string;
  onNotesChange?: (notes: Note[]) => void;
}

const NOTE_COLORS = [
  '#FFF3CD', // Amarelo
  '#E7F3FF', // Azul
  '#F0F9FF', // Azul claro
  '#FFF5E6', // Laranja
  '#F0FFF4', // Verde
  '#FCE4EC', // Rosa
];

export function PersonalNotes({
  chapterId,
  onNotesChange,
}: PersonalNotesProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [selectedColor, setSelectedColor] = useState(NOTE_COLORS[0]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');

  const handleAddNote = () => {
    if (!newNoteContent.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      content: newNoteContent,
      color: selectedColor,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setNewNoteContent('');
    setSelectedColor(NOTE_COLORS[0]);
    onNotesChange?.(updatedNotes);
  };

  const handleDeleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    onNotesChange?.(updatedNotes);
  };

  const handleEditNote = (id: string, content: string) => {
    setEditingId(id);
    setEditingContent(content);
  };

  const handleSaveEdit = (id: string) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, content: editingContent, updatedAt: new Date() }
        : note
    );
    setNotes(updatedNotes);
    setEditingId(null);
    setEditingContent('');
    onNotesChange?.(updatedNotes);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingContent('');
  };

  return (
    <div className="space-y-6">
      {/* Adicionar Nova Nota */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Adicionar Anotação
        </h3>

        <Textarea
          placeholder="Digite sua anotação aqui..."
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
          className="min-h-24"
        />

        {/* Seletor de Cores */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Cor:
          </span>
          <div className="flex gap-2">
            {NOTE_COLORS.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? 'border-gray-900 dark:border-white scale-110'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        <Button onClick={handleAddNote} className="w-full">
          Salvar Anotação
        </Button>
      </div>

      {/* Lista de Notas */}
      {notes.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Suas Anotações ({notes.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: note.color }}
              >
                {editingId === note.id ? (
                  <div className="space-y-3">
                    <Textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      className="min-h-20"
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleSaveEdit(note.id)}
                        size="sm"
                        className="flex-1"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Salvar
                      </Button>
                      <Button
                        onClick={handleCancelEdit}
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-gray-900 dark:text-gray-900 whitespace-pre-wrap">
                      {note.content}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-700">
                      <span>
                        {note.updatedAt.toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: '2-digit',
                        })}{' '}
                        {note.updatedAt.toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleEditNote(note.id, note.content)
                          }
                          className="p-1 hover:bg-black hover:bg-opacity-10 rounded transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className="p-1 hover:bg-black hover:bg-opacity-10 rounded transition-colors"
                          title="Deletar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {notes.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>Nenhuma anotação ainda. Comece a adicionar suas anotações!</p>
        </div>
      )}
    </div>
  );
}
