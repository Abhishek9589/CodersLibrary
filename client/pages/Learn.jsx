import { useState } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Search,
  Filter,
  Play,
  Clock,
  Users,
  Star,
  BookOpen,
  Code2,
  Github,
  ChevronRight,
  Target,
  Award,
  Zap,
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
import { languageData, searchLanguages } from "@/data/languageData";

const categories = [
  "All Languages",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "System Programming",
  "Game Development",
  "Enterprise Development",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Learn() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Languages");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredLanguages = languageData.filter((lang) => {
    const matchesSearch = searchQuery
      ? searchLanguages(searchQuery).includes(lang)
      : true;
    const matchesLevel =
      selectedLevel === "All Levels" || lang.level === selectedLevel;

    // Simple category mapping based on language characteristics
    const matchesCategory =
      selectedCategory === "All Languages" ||
      (selectedCategory === "Web Development" &&
        ["JavaScript", "TypeScript", "Python", "PHP", "Ruby"].includes(
          lang.name,
        )) ||
      (selectedCategory === "Mobile Development" &&
        ["Kotlin", "Swift", "Dart"].includes(lang.name)) ||
      (selectedCategory === "Data Science" &&
        ["Python", "R", "MATLAB", "Scala"].includes(lang.name)) ||
      (selectedCategory === "System Programming" &&
        ["Rust", "C++", "Go", "C#"].includes(lang.name)) ||
      (selectedCategory === "Game Development" &&
        ["C#", "C++", "JavaScript"].includes(lang.name)) ||
      (selectedCategory === "Enterprise Development" &&
        ["Java", "C#", "Scala"].includes(lang.name));

    return matchesSearch && matchesLevel && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400";
      case "Advanced":
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Learn <span className="gradient-text">Programming</span> Languages
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Master 20+ programming languages from beginner to advanced level
            with hands-on projects, real-world examples, and expert guidance
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search */}
            <div className="lg:col-span-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search programming languages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-3">
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

            {/* Level Filter */}
            <div className="lg:col-span-3">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-xl text-center">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">20+</div>
            <div className="text-foreground/70 text-sm">
              Languages Available
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Users className="h-8 w-8 text-teal-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2M+</div>
            <div className="text-foreground/70 text-sm">Active Learners</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Target className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">400+</div>
            <div className="text-foreground/70 text-sm">Learning Modules</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Award className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">150+</div>
            <div className="text-foreground/70 text-sm">Hands-on Projects</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-foreground/70">
            {filteredLanguages.length} languages found
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Programming Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLanguages.map((lang) => (
            <div
              key={lang.id}
              className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${lang.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                    >
                      {lang.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{lang.name}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(lang.level)}`}
                      >
                        {lang.level}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/70 mb-4">{lang.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="h-3 w-3 text-foreground/60" />
                      <span className="text-xs text-foreground/60">
                        Duration
                      </span>
                    </div>
                    <span className="text-sm font-medium">{lang.duration}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <BookOpen className="h-3 w-3 text-foreground/60" />
                      <span className="text-xs text-foreground/60">
                        Modules
                      </span>
                    </div>
                    <span className="text-sm font-medium">{lang.modules}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Target className="h-3 w-3 text-foreground/60" />
                      <span className="text-xs text-foreground/60">
                        Projects
                      </span>
                    </div>
                    <span className="text-sm font-medium">{lang.projects}</span>
                  </div>
                </div>

                {/* Core Topics Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">
                    What you'll learn:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {lang.coreTopics.slice(0, 4).map((topic, index) => (
                      <div
                        key={index}
                        className="text-xs text-foreground/70 flex items-center space-x-1"
                      >
                        <ChevronRight className="h-3 w-3 text-primary" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                  {lang.coreTopics.length > 4 && (
                    <div className="text-xs text-primary mt-1">
                      +{lang.coreTopics.length - 4} more topics
                    </div>
                  )}
                </div>

                {/* Frameworks Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">
                    Popular Frameworks:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {lang.frameworks.slice(0, 3).map((framework, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/80"
                      >
                        {framework.name}
                      </span>
                    ))}
                    {lang.frameworks.length > 3 && (
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded-md text-xs">
                        +{lang.frameworks.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Job Opportunities Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Career Paths:</h4>
                  <div className="space-y-1">
                    {lang.jobOpportunities.slice(0, 2).map((job, index) => (
                      <div
                        key={index}
                        className="text-xs text-foreground/70 flex items-center justify-between"
                      >
                        <span>{job.title}</span>
                        <span className="text-green-400 font-medium">
                          {job.averageSalary.split(" - ")[0]}+
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-foreground/60">
                    {lang.topTutorials.length} tutorials
                  </div>
                </div>

                <div className="space-y-2">
                  <Link
                    to={`/learn/${encodeURIComponent(lang.name.toLowerCase())}`}
                  >
                    <Button className="w-full group">
                      <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Start Learning
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredLanguages.length === 0 && (
          <div className="text-center py-12">
            <div className="glass-card p-8 rounded-xl max-w-md mx-auto">
              <Search className="h-12 w-12 text-foreground/40 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Languages Found</h3>
              <p className="text-foreground/70 mb-4">
                Try adjusting your search criteria or explore our available
                languages.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Languages");
                  setSelectedLevel("All Levels");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Can't find the language you're looking for?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Request a new programming language course, and we'll add it to our
              platform with comprehensive tutorials and resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Language
              </Button>
              <Link to="/ai">
                <Button variant="outline" size="lg">
                  Explore Gen AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
