import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Code2,
  Github,
  ArrowLeft,
  BookOpen,
  Star,
  Users,
  Clock,
  Target,
  Play,
  ExternalLink,
  Briefcase,
  DollarSign,
  TrendingUp,
  ChevronRight,
  Award,
  Zap,
  Globe,
  Code,
  FileCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { getLanguageByName } from "@/data/languageData";

export default function LanguageDetailPage() {
  const { languageName } = useParams();
  const [language, setLanguage] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [showRoadmap, setShowRoadmap] = useState(false);

  useEffect(() => {
    if (languageName) {
      const langData = getLanguageByName(decodeURIComponent(languageName));
      setLanguage(langData || null);
    }
  }, [languageName]);

  if (!language) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Language Not Found</h1>
          <p className="text-foreground/70 mb-8">
            The programming language you're looking for doesn't exist in our
            database.
          </p>
          <Link to="/learn">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Languages
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

  const getFrameworkTypeColor = (type) => {
    switch (type) {
      case "Web Framework":
        return "from-blue-500 to-cyan-500";
      case "Mobile Framework":
        return "from-green-500 to-emerald-500";
      case "ML Framework":
        return "from-purple-500 to-pink-500";
      case "Data Science Library":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getDemandColor = (demand) => {
    switch (demand) {
      case "Very High":
        return "text-green-400";
      case "High":
        return "text-yellow-400";
      case "Growing":
        return "text-blue-400";
      case "Medium":
        return "text-orange-400";
      default:
        return "text-red-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Taskbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/learn"
            className="inline-flex items-center text-foreground/70 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Languages
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${language.color} flex items-center justify-center text-4xl shadow-lg`}
              >
                {language.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{language.name}</h1>
                <p className="text-xl text-foreground/70 mb-3">
                  {language.description}
                </p>
                <div className="flex items-center space-x-4">
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${getDifficultyColor(language.level)}`}
                  >
                    {language.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {language.rating}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-foreground/60" />
                    <span className="text-sm text-foreground/60">
                      {language.students} students
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Play className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowRoadmap(true)}
              >
                <Target className="h-5 w-5 mr-2" />
                View Roadmap
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">{language.duration}</div>
            <div className="text-foreground/70 text-sm">Duration</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <BookOpen className="h-8 w-8 text-teal-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">{language.modules}</div>
            <div className="text-foreground/70 text-sm">Modules</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Target className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">{language.projects}</div>
            <div className="text-foreground/70 text-sm">Projects</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Award className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">Certificate</div>
            <div className="text-foreground/70 text-sm">Upon Completion</div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="jobs">Career Paths</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Description */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">About {language.name}</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                {language.detailedDescription}
              </p>

              {/* Core Topics */}
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {language.coreTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg"
                  >
                    <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Roadmap */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Learning Roadmap</h2>
              <div className="space-y-6">
                {language.learningRoadmap.map((phase, index) => (
                  <div key={index} className="flex space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      {index < language.learningRoadmap.length - 1 && (
                        <div className="w-px h-16 bg-border mx-auto mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">{phase.phase}</h3>
                        <Badge variant="outline">{phase.duration}</Badge>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2 text-primary">
                            Topics to Master:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.topics.map((topic, topicIndex) => (
                              <Badge
                                key={topicIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2 text-teal-400">
                            Projects to Build:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.projects.map((project, projectIndex) => (
                              <Badge
                                key={projectIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {project}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Frameworks Tab */}
          <TabsContent value="frameworks" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {language.name} Frameworks & Libraries
              </h2>
              <p className="text-foreground/70 text-lg">
                Popular frameworks and libraries to accelerate your{" "}
                {language.name} development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {language.frameworks.map((framework, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {framework.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${getFrameworkTypeColor(framework.type)} text-white text-xs`}
                      >
                        {framework.type}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-foreground/60 mb-1">
                        Popularity
                      </div>
                      <div className="text-sm font-medium">
                        {framework.popularity}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4">
                    {framework.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-foreground/60 mb-1">
                        Learning Curve
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">
                          {framework.learningCurve}
                        </span>
                        <Progress
                          value={
                            framework.learningCurve === "Easy"
                              ? 30
                              : framework.learningCurve === "Medium"
                                ? 60
                                : 90
                          }
                          className="w-16 h-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Learning Resources:</h4>
                    {framework.tutorialLinks.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        asChild
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="h-3 w-3 mr-2" />
                          Tutorial {linkIndex + 1}
                          <ExternalLink className="h-3 w-3 ml-auto" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Career Opportunities with {language.name}
              </h2>
              <p className="text-foreground/70 text-lg">
                Explore job roles and career paths for {language.name}{" "}
                developers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {language.jobOpportunities.map((job, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div
                        className={`text-sm font-medium ${getDemandColor(job.demand)}`}
                      >
                        {job.demand} Demand
                      </div>
                    </div>
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <p className="text-foreground/70 mb-4">{job.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-foreground/60">
                          Salary Range
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {job.averageSalary}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-foreground/60">
                          Market Demand
                        </span>
                      </div>
                      <span
                        className={`text-sm font-medium ${getDemandColor(job.demand)}`}
                      >
                        {job.demand}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Button className="w-full" variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Find {job.title} Jobs
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tutorials Tab */}
          <TabsContent value="tutorials" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Top {language.name} Tutorials
              </h2>
              <p className="text-foreground/70 text-lg">
                Hand-picked YouTube tutorials to master {language.name}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {language.topTutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {tutorial.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-sm text-foreground/60">
                          by {tutorial.channel}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-foreground/60" />
                          <span className="text-sm text-foreground/60">
                            {tutorial.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-foreground/70 text-sm mb-4">
                        {tutorial.description}
                      </p>
                      <Button
                        className="w-full"
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={tutorial.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Watch Tutorial
                          <ExternalLink className="h-4 w-4 ml-auto" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Practice {language.name}
              </h2>
              <p className="text-foreground/70 text-lg">
                Best platforms and tools to practice and improve your{" "}
                {language.name} skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {language.practiceSites.map((site, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {site.type === "Online IDE" ? (
                      <Code className="h-6 w-6 text-primary" />
                    ) : site.type === "Documentation" ? (
                      <BookOpen className="h-6 w-6 text-primary" />
                    ) : site.type === "Coding Challenges" ? (
                      <Target className="h-6 w-6 text-primary" />
                    ) : (
                      <Globe className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{site.name}</h3>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {site.type}
                  </Badge>
                  <p className="text-foreground/70 text-sm mb-4">
                    {site.description}
                  </p>
                  <Button
                    className="w-full"
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit {site.name}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Roadmap Modal */}
      {showRoadmap && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${language.color} flex items-center justify-center text-2xl`}
                  >
                    {language.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {language.name} Learning Roadmap
                    </h2>
                    <p className="text-foreground/70">
                      Complete learning path to master {language.name}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowRoadmap(false)}
                  className="h-8 w-8 p-0"
                >
                  ✕
                </Button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 rounded-lg text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">{language.duration}</div>
                  <div className="text-sm text-foreground/70">
                    Total Duration
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <Target className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                  <div className="text-lg font-bold">
                    {language.learningRoadmap.length}
                  </div>
                  <div className="text-sm text-foreground/70">
                    Learning Phases
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <Award className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-lg font-bold">{language.projects}+</div>
                  <div className="text-sm text-foreground/70">
                    Projects to Build
                  </div>
                </div>
              </div>

              {/* Detailed Roadmap */}
              <div className="space-y-8">
                {language.learningRoadmap.map((phase, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    {/* Phase Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{phase.phase}</h3>
                          <Badge variant="outline" className="text-sm">
                            {phase.duration}
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2 transition-all duration-500"
                            style={{
                              width: `${((index + 1) / language.learningRoadmap.length) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phase Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Topics to Master */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-primary" />
                          Topics to Master
                        </h4>
                        <div className="space-y-2">
                          {phase.topics.map((topic, topicIndex) => (
                            <div
                              key={topicIndex}
                              className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm font-medium">
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Projects to Build */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center">
                          <Code className="h-5 w-5 mr-2 text-teal-400" />
                          Projects to Build
                        </h4>
                        <div className="space-y-2">
                          {phase.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="flex items-center space-x-3 p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors"
                            >
                              <div className="w-2 h-2 bg-teal-400 rounded-full" />
                              <span className="text-sm font-medium">
                                {project}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Phase Completion Actions */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Start Phase {index + 1}
                      </Button>
                      <Button variant="outline" className="flex-1" size="sm">
                        <FileCode className="h-4 w-4 mr-2" />
                        View Resources
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={() => setShowRoadmap(false)}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning Journey
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  size="lg"
                  onClick={() => setShowRoadmap(false)}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  View Full Curriculum
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
