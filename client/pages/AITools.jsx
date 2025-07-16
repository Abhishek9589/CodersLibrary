import { Link } from "react-router-dom";
import {
  Code2,
  Github,
  Zap,
  ExternalLink,
  Play,
  Wrench,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AITools() {
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
                <Link
                  to="/learn"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Learn
                </Link>
                <Link
                  to="/community"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Community
                </Link>
                <Link
                  to="/articles"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Articles
                </Link>
                <Link
                  to="/ai-chat"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  AI Chat
                </Link>
                <Link to="/ai-tools" className="text-primary font-medium">
                  AI Tools
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            AI <span className="gradient-text">Development Tools</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Discover and learn about the latest AI-powered development tools
          </p>
        </div>

        <div className="glass-card p-12 rounded-2xl text-center">
          <Zap className="h-16 w-16 text-primary mx-auto mb-6 animate-glow" />
          <h2 className="text-2xl font-bold mb-4">
            AI Tools Directory Coming Soon!
          </h2>
          <p className="text-foreground/70 mb-8">
            We're building a comprehensive directory of AI tools including
            ChatGPT, Claude, Replit, Builder.io, and many more with detailed
            descriptions and tutorial videos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6">
              <Wrench className="h-8 w-8 text-teal-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Tool Descriptions</h3>
              <p className="text-sm text-foreground/70">
                Detailed information about each AI tool and its capabilities
              </p>
            </div>
            <div className="p-6">
              <Play className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-sm text-foreground/70">
                YouTube videos and tutorials for better understanding
              </p>
            </div>
            <div className="p-6">
              <Sparkles className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Latest Updates</h3>
              <p className="text-sm text-foreground/70">
                Stay updated with new AI tools and features
              </p>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <ExternalLink className="h-4 w-4 mr-2" />
            Explore Preview
          </Button>
        </div>
      </div>
    </div>
  );
}
