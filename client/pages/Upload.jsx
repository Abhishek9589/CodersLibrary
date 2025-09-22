import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Upload as UploadIcon,
  Code2,
  Eye,
  Save,
  Share2,
  Github,
  Play,
  Copy,
  Download,
  FileCode,
  Tag,
  Globe,
  Lock,
  MessageCircle,
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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const languageOptions = [
  { value: "javascript", label: "JavaScript", icon: "🟨" },
  { value: "python", label: "Python", icon: "🐍" },
  { value: "java", label: "Java", icon: "☕" },
  { value: "cpp", label: "C++", icon: "⚡" },
  { value: "typescript", label: "TypeScript", icon: "🔷" },
  { value: "react", label: "React", icon: "⚛️" },
  { value: "css", label: "CSS", icon: "🎨" },
  { value: "html", label: "HTML", icon: "🌐" },
  { value: "go", label: "Go", icon: "🔵" },
  { value: "rust", label: "Rust", icon: "🦀" },
];

const difficultyLevels = [
  { value: "beginner", label: "Beginner", color: "text-green-400" },
  { value: "intermediate", label: "Intermediate", color: "text-yellow-400" },
  { value: "advanced", label: "Advanced", color: "text-red-400" },
];

const categories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Game Development",
  "Desktop Applications",
  "DevOps",
  "Database",
  "API Development",
  "UI/UX",
];

export default function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [allowComments, setAllowComments] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const selectedLang = languageOptions.find(
      (lang) => lang.value === language,
    );
    const extension = getFileExtension(language);
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "code"}.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getFileExtension = (lang) => {
    const extensions = {
      javascript: "js",
      python: "py",
      java: "java",
      cpp: "cpp",
      typescript: "ts",
      react: "jsx",
      css: "css",
      html: "html",
      go: "go",
      rust: "rs",
    };
    return extensions[lang] || "txt";
  };

  const runCode = () => {
    // Mock function for running code
    console.log("Running code:", code);
  };

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
                <Link to="/upload" className="text-primary font-medium">
                  Upload Code
                </Link>
                <Link
                  to="/articles"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Articles
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Share Your <span className="gradient-text">Code</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Upload code examples with preview functionality to help other
            developers learn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Editor Side */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileCode className="h-6 w-6 mr-2" />
                Code Details
              </h2>

              <div className="space-y-6">
                {/* Title */}
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., React Custom Hook for API Calls"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Explain what this code does and how beginners can use it..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="mt-1"
                  />
                </div>

                {/* Language and Difficulty */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="language">Programming Language</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languageOptions.map((lang) => (
                          <SelectItem key={lang.value} value={lang.value}>
                            <div className="flex items-center space-x-2">
                              <span>{lang.icon}</span>
                              <span>{lang.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="difficulty">Difficulty Level</Label>
                    <Select value={difficulty} onValueChange={setDifficulty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        {difficultyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            <span className={level.color}>{level.label}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tags */}
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="react, hooks, api, typescript (comma-separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-sm text-foreground/60 mt-1">
                    Add tags to help others find your code
                  </p>
                </div>

                {/* Privacy Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Privacy & Settings</h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <Label htmlFor="public">Make this code public</Label>
                    </div>
                    <Switch
                      id="public"
                      checked={isPublic}
                      onCheckedChange={setIsPublic}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <Label htmlFor="comments">Allow comments</Label>
                    </div>
                    <Switch
                      id="comments"
                      checked={allowComments}
                      onCheckedChange={setAllowComments}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Editor Side */}
          <div className="space-y-6">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <h3 className="text-lg font-semibold flex items-center">
                  <Code2 className="h-5 w-5 mr-2" />
                  Code Editor
                </h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPreviewMode(!previewMode)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    {previewMode ? "Edit" : "Preview"}
                  </Button>
                  {language === "javascript" && (
                    <Button variant="outline" size="sm" onClick={runCode}>
                      <Play className="h-4 w-4 mr-1" />
                      Run
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={copyCode}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadCode}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>

              <div className="relative">
                {!previewMode ? (
                  <Textarea
                    placeholder={`// Enter your ${language || "code"} here...\n// Add comments to explain the code for beginners\n\nfunction example() {\n  console.log(\"Hello, Coders Library!\");\n}`}
                    value={code}
                    onChange={handleCodeChange}
                    className="w-full h-96 font-mono text-sm border-0 resize-none bg-muted/20 focus:ring-0"
                    style={{ minHeight: "400px" }}
                  />
                ) : (
                  <div className="p-4 h-96 overflow-auto bg-muted/20">
                    <pre className="text-sm font-mono whitespace-pre-wrap text-foreground">
                      {code || "// No code to preview yet..."}
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button className="flex-1" variant="outline">
                <UploadIcon className="h-4 w-4 mr-2" />
                Publish Code
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Your Recent Uploads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl">🟨</span>
                  <span className="text-sm text-primary font-medium">
                    JavaScript
                  </span>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Beginner
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Array Helper Functions
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Useful array manipulation functions for beginners to learn
                  JavaScript fundamentals.
                </p>
                <div className="flex justify-between items-center text-sm text-foreground/60">
                  <span>2 days ago</span>
                  <div className="flex items-center space-x-4">
                    <span>👁 234 views</span>
                    <span>💬 12 comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-16">
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">
              Tips for Great Code Shares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  For Beginners
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Add plenty of comments explaining each step</li>
                  <li>• Use clear, descriptive variable names</li>
                  <li>• Include expected input and output examples</li>
                  <li>• Explain the real-world use case</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Best Practices
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Choose appropriate difficulty level</li>
                  <li>• Add relevant tags for discoverability</li>
                  <li>• Test your code before sharing</li>
                  <li>• Respond to comments and questions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
