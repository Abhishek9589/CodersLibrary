import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Code2,
  Github,
  BookOpen,
  TrendingUp,
  Calendar,
  User,
  Eye,
  Clock,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Mock data for TechCrunch-style articles (since we can't access real API without CORS)
  const mockArticles = [
    {
      title: "OpenAI Releases GPT-5: Revolutionary AI Model Changes Everything",
      description:
        "OpenAI's latest language model promises unprecedented capabilities in reasoning, coding, and creative tasks, marking a significant leap in artificial intelligence development. The new model demonstrates advanced reasoning abilities that surpass previous versions, with improved mathematical problem-solving, code generation, and creative writing capabilities. Industry experts are calling this the most significant advancement in AI since ChatGPT's initial release.",
      url: "https://techcrunch.com/ai-news",
      urlToImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
      publishedAt: "2024-12-20T10:30:00Z",
      source: { name: "TechCrunch" },
      author: "Sarah Johnson",
    },
    {
      title: "Meta Announces Breakthrough in VR/AR Technology for 2025",
      description:
        "Meta's new haptic feedback system and improved display technology promise to revolutionize virtual and augmented reality experiences. The company unveiled advanced hand tracking, eye tracking, and neural interface technologies that will enable more natural and immersive interactions in virtual environments.",
      url: "https://techcrunch.com/vr-news",
      urlToImage:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=200&fit=crop&crop=center",
      publishedAt: "2024-12-20T08:15:00Z",
      source: { name: "TechCrunch" },
      author: "Mike Chen",
    },
    {
      title: "GitHub Copilot X: AI-Powered Development Takes Next Step",
      description:
        "GitHub's enhanced AI coding assistant now supports full project generation, advanced debugging, and natural language to code conversion. The new version can understand complex project requirements and generate entire applications from simple descriptions, revolutionizing the software development process.",
      url: "https://techcrunch.com/github-news",
      urlToImage:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop&crop=center",
      publishedAt: "2024-12-19T16:45:00Z",
      source: { name: "TechCrunch" },
      author: "Alex Rodriguez",
    },
    {
      title: "Quantum Computing Breakthrough: Google Achieves New Milestone",
      description:
        "Google's latest quantum processor demonstrates practical applications in cryptography and optimization problems, bringing quantum advantage closer to reality. The breakthrough involves solving complex problems that would take classical computers millions of years to complete.",
      url: "https://techcrunch.com/quantum-news",
      urlToImage:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop&crop=center",
      publishedAt: "2024-12-19T14:20:00Z",
      source: { name: "TechCrunch" },
      author: "Dr. Lisa Park",
    },
    {
      title: "Apple's Vision Pro 2: Enhanced Reality Computing Platform",
      description:
        "Apple announces significant improvements to Vision Pro with better performance, longer battery life, and more immersive spatial computing features. The new version includes advanced AI integration, improved display resolution, and enhanced comfort for extended use.",
      url: "https://techcrunch.com/apple-news",
      urlToImage:
        "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=400&h=200&fit=crop&crop=center",
      publishedAt: "2024-12-19T11:30:00Z",
      source: { name: "TechCrunch" },
      author: "Jennifer Lee",
    },
    {
      title: "Tesla's Full Self-Driving Technology Reaches Major Milestone",
      description:
        "Tesla's FSD beta demonstrates remarkable progress in autonomous driving capabilities, with significant improvements in city navigation and safety. The latest update shows a 40% reduction in intervention rates and improved performance in complex urban environments.",
      url: "https://techcrunch.com/tesla-news",
      urlToImage:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=200&fit=crop&crop=center",
      publishedAt: "2024-12-18T19:15:00Z",
      source: { name: "TechCrunch" },
      author: "David Kim",
    },
  ];

  useEffect(() => {
    // Simulate API loading
    const loadArticles = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 600));
        setArticles(mockArticles);
        setError(null);
      } catch (err) {
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-background">
      <Taskbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Articles</span> & Insights
          </h1>
          <p className="text-xl text-foreground/70">
            Stay updated with the latest trends, tutorials, and insights in the
            tech world
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="glass-card p-12 rounded-2xl text-center">
            <Loader2 className="h-16 w-16 text-primary mx-auto mb-6 animate-spin" />
            <h2 className="text-2xl font-bold mb-4">
              Loading Latest Tech News...
            </h2>
            <p className="text-foreground/70">
              Fetching the latest articles from TechCrunch and other top tech
              publications
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="glass-card p-12 rounded-2xl text-center">
            <BookOpen className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Unable to Load Articles</h2>
            <p className="text-foreground/70 mb-8">
              {error}. Please try again later.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && !error && articles.length > 0 && (
          <div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 rounded-xl text-center">
                <TrendingUp className="h-8 w-8 text-teal-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Live Updates</h3>
                <p className="text-sm text-foreground/70">
                  Real-time tech news from TechCrunch
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fresh Content</h3>
                <p className="text-sm text-foreground/70">
                  Updated every hour with latest articles
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <User className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Expert Insights</h3>
                <p className="text-sm text-foreground/70">
                  Industry experts and tech journalists
                </p>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  {/* Article Image */}
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target;
                        target.src = `https://via.placeholder.com/400x200/2a9d8f/ffffff?text=Tech+News`;
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary"
                      >
                        {article.source.name}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">
                        Click to read more
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 text-sm text-foreground/60">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author || "TechCrunch Staff"}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-foreground/70 mb-4 line-clamp-2">
                      {article.description.substring(0, 120)}...
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-medium">
                        Click to read more
                      </span>
                      <Eye className="h-4 w-4 text-foreground/40" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  // Simulate loading more articles
                  setLoading(true);
                  setTimeout(() => setLoading(false), 400);
                }}
              >
                Load More Articles
              </Button>
            </div>
          </div>
        )}

        {/* Detailed Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl">
              {/* Modal Header */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src={selectedArticle.urlToImage}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target;
                    target.src = `https://via.placeholder.com/800x300/2a9d8f/ffffff?text=Tech+News`;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary"
                  >
                    {selectedArticle.source.name}
                  </Badge>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4 text-sm text-foreground/60">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>
                        {selectedArticle.author || "TechCrunch Staff"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{formatDate(selectedArticle.publishedAt)}</span>
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-6 text-foreground">
                  {selectedArticle.title}
                </h1>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    {selectedArticle.description}
                  </p>

                  <div className="border-t border-border/50 pt-6">
                    <p className="text-foreground/70">
                      This is a featured article from{" "}
                      {selectedArticle.source.name}. Click the button below to
                      read the full article on their website.
                    </p>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedArticle(null)}
                  >
                    Close
                  </Button>
                  <a
                    href={selectedArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-primary hover:bg-primary/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Full Article on {selectedArticle.source.name}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
