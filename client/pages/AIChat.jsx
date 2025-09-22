import { Link } from "react-router-dom";
import { Code2, Github, Bot, MessageCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIChat() {
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
                  to="/articles"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Articles
                </Link>
                <Link to="/ai-chat" className="text-primary font-medium">
                  AI Chat
                </Link>
                <Link
                  to="/jobs"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Jobs
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/learn">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            AI <span className="gradient-text">Assistant</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Get instant help with your coding questions using AI-powered chat
          </p>
        </div>

        <div className="glass-card p-12 rounded-2xl text-center">
          <Bot className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-2xl font-bold mb-4">
            AI Chat Assistant Coming Soon!
          </h2>
          <p className="text-foreground/70 mb-8">
            We're integrating ChatGPT API to provide you with instant coding
            help, debugging assistance, and programming guidance 24/7.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6">
              <MessageCircle className="h-8 w-8 text-teal-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Instant Responses</h3>
              <p className="text-sm text-foreground/70">
                Get immediate answers to your coding questions
              </p>
            </div>
            <div className="p-6">
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Smart Debugging</h3>
              <p className="text-sm text-foreground/70">
                AI-powered code analysis and bug detection
              </p>
            </div>
            <div className="p-6">
              <Shield className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-sm text-foreground/70">
                Your conversations are encrypted and private
              </p>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}
