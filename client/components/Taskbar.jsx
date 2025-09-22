import { Link, useLocation } from "react-router-dom";
import { Code2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Taskbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="border-b border-border/50 bg-background/95 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xl font-bold gradient-text">
                &lt;/&gt; Coder's Library
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/learn"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive("/learn") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Learn
              {isActive("/learn") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/tech-stack"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive("/tech-stack") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Tech Stack
              {isActive("/tech-stack") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/articles"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive("/articles") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Articles
              {isActive("/articles") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/ai"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive("/ai") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Gen AI
              {isActive("/ai") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/jobs"
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive("/jobs") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Jobs
              {isActive("/jobs") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/learn">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-sm"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
