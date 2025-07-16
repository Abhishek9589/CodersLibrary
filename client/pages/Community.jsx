import { useState } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Users,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Reply,
  Search,
  Filter,
  Plus,
  Code2,
  Github,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  Bug,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const discussionCategories = [
  { value: "all", label: "All Discussions", icon: MessageCircle },
  { value: "questions", label: "Questions", icon: HelpCircle },
  { value: "help", label: "Help & Support", icon: AlertCircle },
  { value: "showcase", label: "Show & Tell", icon: Lightbulb },
  { value: "bugs", label: "Bug Reports", icon: Bug },
  { value: "general", label: "General", icon: Users },
];

const sortOptions = [
  { value: "recent", label: "Most Recent" },
  { value: "popular", label: "Most Popular" },
  { value: "unanswered", label: "Unanswered" },
  { value: "solved", label: "Solved" },
];

const discussions = [
  {
    id: 1,
    title: "How to implement async/await in JavaScript properly?",
    content:
      "I'm struggling with understanding async/await in JavaScript. Can someone explain the difference between promises and async/await with practical examples?",
    author: {
      name: "john_doe",
      avatar: "👨‍💻",
      reputation: 156,
      badge: "Beginner",
    },
    category: "questions",
    tags: ["javascript", "async", "promises", "beginner"],
    upvotes: 23,
    replies: 8,
    views: 342,
    createdAt: "2 hours ago",
    solved: false,
    language: "JavaScript",
  },
  {
    id: 2,
    title: "Best practices for React component structure",
    content:
      "What are the best practices for organizing React components in a large application? Should I use functional or class components?",
    author: {
      name: "react_dev",
      avatar: "👩‍💻",
      reputation: 892,
      badge: "Intermediate",
    },
    category: "help",
    tags: ["react", "components", "best-practices", "architecture"],
    upvotes: 45,
    replies: 15,
    views: 1205,
    createdAt: "5 hours ago",
    solved: true,
    language: "React",
  },
  {
    id: 3,
    title: "Built a Python web scraper for beginners!",
    content:
      "I created a simple web scraper tutorial that beginners can follow. It includes error handling and data cleaning. Check it out!",
    author: {
      name: "python_guru",
      avatar: "🐍",
      reputation: 1523,
      badge: "Expert",
    },
    category: "showcase",
    tags: ["python", "web-scraping", "tutorial", "beginners"],
    upvotes: 67,
    replies: 22,
    views: 2143,
    createdAt: "1 day ago",
    solved: false,
    language: "Python",
  },
  {
    id: 4,
    title: "Memory leak in C++ vector implementation",
    content:
      "I'm experiencing memory leaks when using vectors in my C++ application. The memory usage keeps growing. Any ideas what might be causing this?",
    author: {
      name: "cpp_coder",
      avatar: "⚡",
      reputation: 743,
      badge: "Advanced",
    },
    category: "bugs",
    tags: ["cpp", "memory", "vectors", "debugging"],
    upvotes: 18,
    replies: 12,
    views: 567,
    createdAt: "6 hours ago",
    solved: false,
    language: "C++",
  },
  {
    id: 5,
    title: "Java vs Python for backend development?",
    content:
      "I'm trying to decide between Java and Python for backend development. What are the pros and cons of each for a beginner?",
    author: {
      name: "newbie_coder",
      avatar: "🌱",
      reputation: 45,
      badge: "Beginner",
    },
    category: "general",
    tags: ["java", "python", "backend", "career-advice"],
    upvotes: 31,
    replies: 28,
    views: 1876,
    createdAt: "3 days ago",
    solved: true,
    language: "General",
  },
];

const languageIcons = {
  JavaScript: "🟨",
  Python: "🐍",
  Java: "☕",
  "C++": "⚡",
  React: "⚛️",
  General: "💬",
};

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostCategory, setNewPostCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesCategory =
      selectedCategory === "all" || discussion.category === selectedCategory;
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    const categoryData = discussionCategories.find(
      (cat) => cat.value === category,
    );
    return categoryData ? categoryData.icon : MessageCircle;
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Beginner":
        return "bg-green-500/20 text-green-400";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400";
      case "Advanced":
        return "bg-orange-500/20 text-orange-400";
      case "Expert":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Taskbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Developer <span className="gradient-text">Community</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ask questions, share knowledge, and connect with developers
            worldwide. Get help from the community or help others learn.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">45.2K</div>
            <div className="text-foreground/70 text-sm">Active Members</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <MessageCircle className="h-8 w-8 text-teal-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">12.8K</div>
            <div className="text-foreground/70 text-sm">Discussions</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">8.9K</div>
            <div className="text-foreground/70 text-sm">Solved Questions</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">95%</div>
            <div className="text-foreground/70 text-sm">Helpful Responses</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* New Post Button */}
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() =>
                  isLoggedIn ? setShowNewPost(true) : setIsLoggedIn(false)
                }
                disabled={!isLoggedIn}
              >
                <Plus className="h-4 w-4 mr-2" />
                {isLoggedIn ? "New Discussion" : "Login to Post"}
              </Button>

              {/* Categories */}
              <div className="glass-card p-4 rounded-xl">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {discussionCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`w-full flex items-center space-x-2 p-2 rounded-lg text-left transition-colors ${
                          selectedCategory === category.value
                            ? "bg-primary/20 text-primary"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{category.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="glass-card p-4 rounded-xl">
                <h3 className="font-semibold mb-4">Top Contributors</h3>
                <div className="space-y-3">
                  {[
                    { name: "alex_dev", points: 2453, avatar: "👨‍💻" },
                    { name: "sarah_codes", points: 1892, avatar: "👩‍💻" },
                    { name: "python_pro", points: 1567, avatar: "🐍" },
                  ].map((user, index) => (
                    <div
                      key={user.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{user.avatar}</span>
                        <div>
                          <div className="text-sm font-medium">{user.name}</div>
                          <div className="text-xs text-foreground/60">
                            {user.points} points
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-primary">#{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="glass-card p-4 rounded-xl mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search discussions, questions, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48">
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
            </div>

            {/* Login Required Message */}
            {!isLoggedIn ? (
              <div className="glass-card p-12 rounded-xl text-center">
                <Github className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">
                  GitHub Login Required
                </h2>
                <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                  To participate in community discussions, ask questions, and
                  share knowledge, please sign in with your GitHub account.
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setIsLoggedIn(true)} // Simulate login for demo
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Sign in with GitHub
                  </Button>
                  <div className="text-sm text-foreground/60">
                    <p>Why GitHub login?</p>
                    <ul className="mt-2 space-y-1 text-left max-w-md mx-auto">
                      <li>• Verify your developer identity</li>
                      <li>• Connect with your GitHub projects</li>
                      <li>• Build your developer reputation</li>
                      <li>• Secure and trusted authentication</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Discussions List */}
                <div className="space-y-4">
                  {filteredDiscussions.map((discussion) => {
                    const CategoryIcon = getCategoryIcon(discussion.category);
                    return (
                      <div
                        key={discussion.id}
                        className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex space-x-4">
                          {/* Author Avatar */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl">
                              {discussion.author.avatar}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <CategoryIcon className="h-4 w-4 text-primary" />
                                <span className="text-xs text-primary capitalize">
                                  {discussion.category}
                                </span>
                                {discussion.solved && (
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">
                                  {
                                    languageIcons[
                                      discussion.language
                                    ]
                                  }
                                </span>
                                <span className="text-xs text-foreground/60">
                                  {discussion.language}
                                </span>
                              </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer">
                              {discussion.title}
                            </h3>

                            <p className="text-foreground/70 mb-3 line-clamp-2">
                              {discussion.content}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {discussion.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs hover:bg-primary/20 cursor-pointer"
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Author Info and Stats */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-medium">
                                    {discussion.author.name}
                                  </span>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(discussion.author.badge)}`}
                                  >
                                    {discussion.author.badge}
                                  </span>
                                  <span className="text-xs text-foreground/60">
                                    {discussion.author.reputation} points
                                  </span>
                                </div>
                                <div className="flex items-center space-x-1 text-xs text-foreground/60">
                                  <Clock className="h-3 w-3" />
                                  <span>{discussion.createdAt}</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-4 text-sm text-foreground/60">
                                <div className="flex items-center space-x-1">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>{discussion.upvotes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Reply className="h-4 w-4" />
                                  <span>{discussion.replies}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{discussion.views}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    Load More Discussions
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* New Post Modal/Form (simplified version) */}
        {showNewPost && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-card max-w-2xl w-full p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Start a New Discussion</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNewPost(false)}
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <Select
                    value={newPostCategory}
                    onValueChange={setNewPostCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {discussionCategories
                        .filter((cat) => cat.value !== "all")
                        .map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Title
                  </label>
                  <Input
                    placeholder="What's your question or topic?"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Description
                  </label>
                  <Textarea
                    placeholder="Provide details about your question or discussion..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={6}
                  />
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Post Discussion
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowNewPost(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
