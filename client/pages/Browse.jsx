import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Clock,
  TrendingUp,
  Bookmark,
  Code2,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for snippets
const allSnippets = [
  {
    id: 1,
    title: "React Custom Hook for API Calls",
    description:
      "A reusable custom hook for handling API requests with loading states, error handling, and automatic retries.",
    language: "TypeScript",
    author: "alex_dev",
    stars: 234,
    tags: ["react", "hooks", "api", "typescript"],
    isBookmarked: false,
    createdAt: "2 days ago",
    category: "React",
  },
  {
    id: 2,
    title: "CSS Grid Auto-fit Layout",
    description:
      "Responsive grid layout that automatically adjusts columns based on container width without media queries.",
    language: "CSS",
    author: "sarah_styles",
    stars: 189,
    tags: ["css", "grid", "responsive", "layout"],
    isBookmarked: true,
    createdAt: "1 week ago",
    category: "CSS",
  },
  {
    id: 3,
    title: "Python Data Validation Schema",
    description:
      "Pydantic models for robust data validation with custom validators and error messages.",
    language: "Python",
    author: "data_guru",
    stars: 156,
    tags: ["python", "validation", "pydantic", "schemas"],
    isBookmarked: false,
    createdAt: "3 days ago",
    category: "Python",
  },
  {
    id: 4,
    title: "Vue 3 Composition API Utils",
    description:
      "Collection of utility functions for Vue 3 Composition API including reactive state management.",
    language: "JavaScript",
    author: "vue_master",
    stars: 298,
    tags: ["vue", "composition-api", "utilities", "javascript"],
    isBookmarked: false,
    createdAt: "5 days ago",
    category: "Vue",
  },
  {
    id: 5,
    title: "Tailwind CSS Button Components",
    description:
      "Beautiful button components with multiple variants, sizes, and animations built with Tailwind CSS.",
    language: "CSS",
    author: "ui_designer",
    stars: 412,
    tags: ["tailwind", "components", "buttons", "ui"],
    isBookmarked: true,
    createdAt: "1 day ago",
    category: "UI Components",
  },
  {
    id: 6,
    title: "Node.js Authentication Middleware",
    description:
      "Express middleware for JWT authentication with refresh token support and role-based access control.",
    language: "JavaScript",
    author: "backend_ninja",
    stars: 345,
    tags: ["nodejs", "express", "jwt", "authentication"],
    isBookmarked: false,
    createdAt: "4 days ago",
    category: "Backend",
  },
];

const languageIcons = {
  TypeScript: "🔷",
  JavaScript: "🟨",
  Python: "🐍",
  CSS: "🎨",
  React: "⚛️",
  Vue: "💚",
  Go: "🔵",
  Rust: "🦀",
};

const languages = [
  "All",
  "TypeScript",
  "JavaScript",
  "Python",
  "CSS",
  "React",
  "Vue",
];
const categories = [
  "All",
  "React",
  "CSS",
  "Python",
  "Vue",
  "UI Components",
  "Backend",
];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "most-starred", label: "Most Starred" },
  { value: "trending", label: "Trending" },
];

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [bookmarkedSnippets, setBookmarkedSnippets] = useState(new Set([2, 5]));

  const toggleBookmark = (snippetId) => {
    const newBookmarks = new Set(bookmarkedSnippets);
    if (newBookmarks.has(snippetId)) {
      newBookmarks.delete(snippetId);
    } else {
      newBookmarks.add(snippetId);
    }
    setBookmarkedSnippets(newBookmarks);
  };

  // Filter and sort snippets
  const filteredSnippets = allSnippets
    .filter((snippet) => {
      const matchesSearch =
        snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesLanguage =
        selectedLanguage === "All" || snippet.language === selectedLanguage;
      const matchesCategory =
        selectedCategory === "All" || snippet.category === selectedCategory;

      return matchesSearch && matchesLanguage && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "most-starred":
          return b.stars - a.stars;
        case "oldest":
          return -1; // Mock sorting
        case "trending":
          return b.stars - a.stars; // Mock trending logic
        default:
          return -1; // Newest first (mock)
      }
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <Code2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold gradient-text">
                  Coders Library
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/browse" className="text-primary font-medium">
                  Browse
                </Link>
                <Link
                  to="/categories"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Categories
                </Link>
                <Link
                  to="/trending"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Trending
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Github className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Browse Code Snippets</h1>
          <p className="text-foreground/70 text-lg">
            Discover {allSnippets.length} curated code snippets from developers
            worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search */}
            <div className="lg:col-span-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search snippets, tags, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Language Filter */}
            <div className="lg:col-span-2">
              <Select
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-2">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div className="lg:col-span-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* View Mode */}
            <div className="lg:col-span-2 flex space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex-1"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex-1"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-foreground/70">
            {filteredSnippets.length} snippets found
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Snippets Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className={`glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group ${
                viewMode === "list" ? "flex space-x-6" : ""
              }`}
            >
              <div className={viewMode === "list" ? "flex-1" : ""}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">
                      {
                        languageIcons[
                          snippet.language
                        ]
                      }
                    </span>
                    <span className="text-sm text-primary font-medium">
                      {snippet.language}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBookmark(snippet.id)}
                    className="hover:bg-primary/10"
                  >
                    <Bookmark
                      className={`h-4 w-4 ${
                        bookmarkedSnippets.has(snippet.id)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-foreground/50"
                      }`}
                    />
                  </Button>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {snippet.title}
                </h3>
                <p className="text-foreground/70 mb-4 line-clamp-2">
                  {snippet.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {snippet.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/80 hover:bg-primary/20 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm text-foreground/60">
                  <div className="flex items-center space-x-4">
                    <span>by {snippet.author}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{snippet.stars}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{snippet.createdAt}</span>
                  </div>
                </div>
              </div>

              {viewMode === "list" && (
                <div className="flex flex-col justify-center space-y-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Snippets
          </Button>
        </div>
      </div>
    </div>
  );
}
