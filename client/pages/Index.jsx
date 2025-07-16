import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Search,
  Code2,
  BookOpen,
  Users,
  MessageCircle,
  Bot,
  Briefcase,
  Upload,
  TrendingUp,
  Github,
  Play,
  ArrowRight,
  Zap,
  Target,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const programmingLanguages = [
  {
    name: "JavaScript",
    icon: "🟨",
    description: "The language of the web - frontend and backend",
    students: "2.5M",
    difficulty: "Beginner",
    color: "from-yellow-500 to-amber-500",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Perfect for beginners, AI, and data science",
    students: "3.2M",
    difficulty: "Beginner",
    color: "from-blue-500 to-green-500",
  },
  {
    name: "Java",
    icon: "☕",
    description: "Enterprise applications and Android development",
    students: "2.8M",
    difficulty: "Intermediate",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "C++",
    icon: "⚡",
    description: "System programming and competitive coding",
    students: "1.8M",
    difficulty: "Advanced",
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Build modern user interfaces",
    students: "1.9M",
    difficulty: "Intermediate",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Node.js",
    icon: "💚",
    description: "Server-side JavaScript development",
    students: "1.5M",
    difficulty: "Intermediate",
    color: "from-green-500 to-emerald-500",
  },
];

const learningPaths = [
  {
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React, and modern web development",
    duration: "6-8 months",
    icon: "🎨",
    courses: 12,
    students: "45K",
  },
  {
    title: "Backend Development",
    description: "Server-side programming, databases, and APIs",
    duration: "8-10 months",
    icon: "⚙️",
    courses: 15,
    students: "38K",
  },
  {
    title: "Full Stack Development",
    description: "Complete web development from frontend to backend",
    duration: "12-15 months",
    icon: "🔄",
    courses: 25,
    students: "32K",
  },
  {
    title: "Data Science & AI",
    description: "Python, machine learning, and artificial intelligence",
    duration: "10-12 months",
    icon: "🤖",
    courses: 18,
    students: "28K",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Learn programming languages with hands-on coding exercises",
    link: "/learn",
  },
  {
    icon: Upload,
    title: "Code Sharing",
    description: "Upload and preview code examples for better understanding",
    link: "/upload",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join discussions, ask questions, and help fellow developers",
    link: "/community",
  },
  {
    icon: TrendingUp,
    title: "Latest Articles",
    description: "Stay updated with trending IT articles and insights",
    link: "/articles",
  },
  {
    icon: Bot,
    title: "Gen AI Models",
    description: "Explore powerful AI models for development and creativity",
    link: "/ai",
  },
  {
    icon: Zap,
    title: "AI Tools",
    description: "Discover and learn about the latest AI development tools",
    link: "/ai",
  },
  {
    icon: Briefcase,
    title: "Career Guide",
    description: "Explore IT job opportunities and required skills",
    link: "/jobs",
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  // All searchable content
  const allContent = useMemo(
    () => [
      ...programmingLanguages.map((lang) => ({
        type: "language",
        name: lang.name,
        description: lang.description,
        link: `/learn/${lang.name.toLowerCase()}`,
      })),
      ...learningPaths.map((path) => ({
        type: "course",
        name: path.title,
        description: path.description,
        link: "/learn",
      })),
      {
        type: "tutorial",
        name: "Interactive Learning",
        description:
          "Learn programming languages with hands-on coding exercises",
        link: "/learn",
      },
      {
        type: "tutorial",
        name: "Code Sharing",
        description:
          "Upload and preview code examples for better understanding",
        link: "/upload",
      },
      {
        type: "tutorial",
        name: "Community",
        description:
          "Join discussions, ask questions, and help fellow developers",
        link: "/community",
      },
      {
        type: "tutorial",
        name: "Latest Articles",
        description: "Stay updated with trending IT articles and insights",
        link: "/articles",
      },
      {
        type: "tutorial",
        name: "AI Assistant",
        description: "Get instant help with coding doubts using AI chat",
        link: "/ai",
      },
      {
        type: "tutorial",
        name: "Career Guide",
        description: "Explore IT job opportunities and required skills",
        link: "/jobs",
      },
    ],
    [],
  );

  // Filter content based on search query
  const filteredContent = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allContent.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, allContent]);

  const handleSearch = () => {
    if (filteredContent.length > 0) {
      window.location.href = filteredContent[0].link;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Taskbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-background to-background" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Master <span className="gradient-text">Programming</span> From
            Beginner to Expert
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto">
            Learn programming languages, share code, connect with the community,
            and advance your IT career with our comprehensive platform
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search courses, languages, tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-12 pr-4 py-4 text-lg glass-card h-14 border-border/50 focus:border-primary"
            />
            <Button
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10"
              onClick={handleSearch}
            >
              Search
            </Button>
            {/* Search Results Dropdown */}
            {searchQuery && filteredContent.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                {filteredContent.slice(0, 5).map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="block p-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.type} • {item.description}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-foreground/70">Programming Languages</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                500K+
              </div>
              <div className="text-foreground/70">Students Learning</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                10K+
              </div>
              <div className="text-foreground/70">Code Examples</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">2K+</div>
              <div className="text-foreground/70">Career Opportunities</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Play className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="outline" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Tech Companies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Trusted by developers at top companies
            </h2>
            <p className="text-foreground/70">
              Join thousands of developers working at leading tech companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Google */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                🔍
              </div>
              <div className="text-sm font-medium text-center">Google</div>
              <div className="text-xs text-foreground/60 text-center">
                Mountain View
              </div>
            </div>

            {/* Microsoft */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                💻
              </div>
              <div className="text-sm font-medium text-center">Microsoft</div>
              <div className="text-xs text-foreground/60 text-center">
                Redmond
              </div>
            </div>

            {/* Meta */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                📘
              </div>
              <div className="text-sm font-medium text-center">Meta</div>
              <div className="text-xs text-foreground/60 text-center">
                Menlo Park
              </div>
            </div>

            {/* Apple */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                🍎
              </div>
              <div className="text-sm font-medium text-center">Apple</div>
              <div className="text-xs text-foreground/60 text-center">
                Cupertino
              </div>
            </div>

            {/* Amazon */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                📦
              </div>
              <div className="text-sm font-medium text-center">Amazon</div>
              <div className="text-xs text-foreground/60 text-center">
                Seattle
              </div>
            </div>
          </div>

          {/* Additional Companies Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mt-8">
            {/* Netflix */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                🎬
              </div>
              <div className="text-sm font-medium text-center">Netflix</div>
              <div className="text-xs text-foreground/60 text-center">
                Los Gatos
              </div>
            </div>

            {/* Tesla */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <div className="text-sm font-medium text-center">Tesla</div>
              <div className="text-xs text-foreground/60 text-center">
                Austin
              </div>
            </div>

            {/* Spotify */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                🎵
              </div>
              <div className="text-sm font-medium text-center">Spotify</div>
              <div className="text-xs text-foreground/60 text-center">
                Stockholm
              </div>
            </div>

            {/* Uber */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                🚗
              </div>
              <div className="text-sm font-medium text-center">Uber</div>
              <div className="text-xs text-foreground/60 text-center">
                San Francisco
              </div>
            </div>

            {/* Airbnb */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                🏠
              </div>
              <div className="text-sm font-medium text-center">Airbnb</div>
              <div className="text-xs text-foreground/60 text-center">
                San Francisco
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Briefcase className="h-5 w-5 mr-2" />
              View All Companies
            </Button>
          </div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Popular Programming Languages
            </h2>
            <p className="text-xl text-foreground/70">
              Choose your language and start your coding journey today
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingLanguages.map((lang, index) => (
              <Link
                key={lang.name}
                to={`/learn/${lang.name.toLowerCase()}`}
                className="group glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${lang.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                  >
                    {lang.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{lang.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        lang.difficulty === "Beginner"
                          ? "bg-green-500/20 text-green-400"
                          : lang.difficulty === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {lang.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">{lang.description}</p>
                <div className="flex justify-between items-center text-sm text-foreground/60">
                  <span>{lang.students} students</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-xl text-foreground/70">
              Follow our curated paths to master specific domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <div
                key={path.title}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{path.icon}</div>
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-foreground/70 mb-4">{path.description}</p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courses:</span>
                    <span>{path.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span>{path.students}</span>
                  </div>
                </div>
                <Link to="/learn">
                  <Button className="w-full mt-4" variant="outline">
                    Start Path
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Learn
            </h2>
            <p className="text-xl text-foreground/70">
              Comprehensive tools and resources for your programming journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="group glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-300 text-center"
              >
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
                <ArrowRight className="h-4 w-4 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-2xl">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Join hundreds of thousands of students who are already learning
              and building amazing projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning Free
                </Button>
              </Link>
              <Link to="/ai">
                <Button variant="outline" size="lg">
                  <Bot className="h-5 w-5 mr-2" />
                  Explore Gen AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold gradient-text">
                  Coders Library
                </span>
              </div>
              <p className="text-foreground/70 max-w-md">
                Your comprehensive platform for learning programming, connecting
                with the community, and advancing your IT career from beginner
                to expert level.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Learning</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <Link
                    to="/learn"
                    className="hover:text-primary transition-colors"
                  >
                    Programming Languages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/upload"
                    className="hover:text-primary transition-colors"
                  >
                    Code Examples
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-chat"
                    className="hover:text-primary transition-colors"
                  >
                    AI Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-tools"
                    className="hover:text-primary transition-colors"
                  >
                    AI Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <Link
                    to="/community"
                    className="hover:text-primary transition-colors"
                  >
                    Discussions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/articles"
                    className="hover:text-primary transition-colors"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-primary transition-colors"
                  >
                    Career Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="hover:text-primary transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-foreground/60">
            <p>
              &copy; 2025 Coders Library. Empowering the next generation of
              developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
