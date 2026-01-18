import { useState } from 'react';
import {
  MessageSquare,
  ThumbsUp,
  CheckCircle2,
  Send,
  Plus,
  Search,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ForumReply {
  id: string;
  authorName: string;
  authorRole: 'user' | 'expert' | 'moderator';
  content: string;
  likes: number;
  isMarkedAsAnswer: boolean;
  createdAt: Date;
}

interface ForumPost {
  id: string;
  title: string;
  content: string;
  authorName: string;
  category: 'doubt' | 'discussion' | 'resource' | 'success_story';
  views: number;
  isAnswered: boolean;
  replies: ForumReply[];
  createdAt: Date;
}

interface CommunityForumProps {
  moduleId: string;
}

const CATEGORY_LABELS: Record<string, { label: string; color: string }> = {
  doubt: { label: '❓ Dúvida', color: 'bg-red-100 dark:bg-red-900' },
  discussion: { label: '💬 Discussão', color: 'bg-blue-100 dark:bg-blue-900' },
  resource: { label: '📚 Recurso', color: 'bg-green-100 dark:bg-green-900' },
  success_story: {
    label: '🎉 Sucesso',
    color: 'bg-yellow-100 dark:bg-yellow-900',
  },
};

export function CommunityForum({ moduleId }: CommunityForumProps) {
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: '1',
      title: 'Como começar com SEO?',
      content:
        'Sou iniciante e gostaria de saber por onde começar com SEO. Alguém pode me ajudar?',
      authorName: 'João Silva',
      category: 'doubt',
      views: 45,
      isAnswered: true,
      replies: [
        {
          id: 'r1',
          authorName: 'Maria Expert',
          authorRole: 'expert',
          content:
            'Comece com pesquisa de palavras-chave usando ferramentas como Google Keyword Planner. Depois otimize seu conteúdo.',
          likes: 12,
          isMarkedAsAnswer: true,
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        },
      ],
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: '2',
      title: 'Minha estratégia de email marketing funcionou!',
      content:
        'Consegui aumentar minha taxa de conversão em 35% com a estratégia de segmentação que aprendi aqui. Muito obrigado!',
      authorName: 'Pedro Santos',
      category: 'success_story',
      views: 120,
      isAnswered: false,
      replies: [
        {
          id: 'r2',
          authorName: 'Ana Moderadora',
          authorRole: 'moderator',
          content: 'Que legal, Pedro! Parabéns pelos resultados! 🎉',
          likes: 8,
          isMarkedAsAnswer: false,
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        },
      ],
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState<
    'doubt' | 'discussion' | 'resource' | 'success_story'
  >('doubt');
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [newReplyContent, setNewReplyContent] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreatePost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const newPost: ForumPost = {
      id: Date.now().toString(),
      title: newPostTitle,
      content: newPostContent,
      authorName: 'Você',
      category: newPostCategory,
      views: 0,
      isAnswered: false,
      replies: [],
      createdAt: new Date(),
    };

    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    setNewPostCategory('doubt');
    setShowNewPostForm(false);
  };

  const handleAddReply = (postId: string) => {
    if (!newReplyContent.trim()) return;

    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [
            ...post.replies,
            {
              id: Date.now().toString(),
              authorName: 'Você',
              authorRole: 'user' as const,
              content: newReplyContent,
              likes: 0,
              isMarkedAsAnswer: false,
              createdAt: new Date(),
            },
          ],
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    if (selectedPost) {
      setSelectedPost(updatedPosts.find((p) => p.id === postId) || null);
    }
    setNewReplyContent('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6" />
          Comunidade
        </h2>
        <Button
          onClick={() => setShowNewPostForm(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Novo Tópico
        </Button>
      </div>

      {/* Novo Post Form */}
      {showNewPostForm && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Criar Novo Tópico
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Título
            </label>
            <Input
              placeholder="Qual é sua pergunta ou tópico?"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Descrição
            </label>
            <Textarea
              placeholder="Descreva seu tópico em detalhes..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className="min-h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Categoria
            </label>
            <select
              value={newPostCategory}
              onChange={(e) =>
                setNewPostCategory(
                  e.target.value as
                    | 'doubt'
                    | 'discussion'
                    | 'resource'
                    | 'success_story'
                )
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="doubt">❓ Dúvida</option>
              <option value="discussion">💬 Discussão</option>
              <option value="resource">📚 Recurso</option>
              <option value="success_story">🎉 Sucesso</option>
            </select>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleCreatePost} className="flex-1">
              Publicar
            </Button>
            <Button
              onClick={() => setShowNewPostForm(false)}
              variant="outline"
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Buscar tópicos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
          >
            Todos
          </button>
          {Object.entries(CATEGORY_LABELS).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === key ? null : key
                )
              }
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Posts ou Detalhes */}
      {selectedPost ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
          >
            ← Voltar
          </button>

          {/* Post Detalhes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedPost.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Por {selectedPost.authorName} •{' '}
                  {selectedPost.createdAt.toLocaleDateString('pt-BR')} • 👁️{' '}
                  {selectedPost.views} visualizações
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  CATEGORY_LABELS[selectedPost.category]?.color
                }`}
              >
                {CATEGORY_LABELS[selectedPost.category]?.label}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {selectedPost.content}
            </p>

            {selectedPost.isAnswered && (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900 p-3 rounded">
                <CheckCircle2 className="w-5 h-5" />
                Respondido
              </div>
            )}
          </div>

          {/* Respostas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Respostas ({selectedPost.replies.length})
            </h4>

            {selectedPost.replies.map((reply) => (
              <div
                key={reply.id}
                className={`bg-white dark:bg-gray-800 rounded-lg border-2 p-4 space-y-3 ${
                  reply.isMarkedAsAnswer
                    ? 'border-green-500 dark:border-green-600'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {reply.authorName}
                    </span>
                    {reply.authorRole === 'expert' && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded font-medium">
                        Especialista
                      </span>
                    )}
                    {reply.authorRole === 'moderator' && (
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded font-medium">
                        Moderador
                      </span>
                    )}
                  </div>
                  {reply.isMarkedAsAnswer && (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      Resposta Marcada
                    </div>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {reply.content}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>
                    {reply.createdAt.toLocaleDateString('pt-BR')}{' '}
                    {reply.createdAt.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                    <ThumbsUp className="w-4 h-4" />
                    {reply.likes}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Nova Resposta */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Sua Resposta
            </h4>
            <Textarea
              placeholder="Compartilhe sua resposta ou opinião..."
              value={newReplyContent}
              onChange={(e) => setNewReplyContent(e.target.value)}
              className="min-h-20"
            />
            <Button
              onClick={() => handleAddReply(selectedPost.id)}
              className="w-full flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar Resposta
            </Button>
          </div>
        </div>
      ) : (
        /* Lista de Posts */
        <div className="space-y-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="w-full text-left bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {post.title}
                      </h3>
                      {post.isAnswered && (
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                      <span>{post.authorName}</span>
                      <span>👁️ {post.views}</span>
                      <span>💬 {post.replies.length}</span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                      CATEGORY_LABELS[post.category]?.color
                    }`}
                  >
                    {CATEGORY_LABELS[post.category]?.label}
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Nenhum tópico encontrado</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
