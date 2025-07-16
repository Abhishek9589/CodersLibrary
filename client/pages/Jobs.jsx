import { useState } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Code2,
  Github,
  Briefcase,
  TrendingUp,
  DollarSign,
  MapPin,
  Clock,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  Filter,
  Search,
  Target,
  Award,
  Zap,
  Building,
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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// IT Jobs Data
const itJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    category: "Web Development",
    level: "Entry to Senior",
    avgSalary: "₹53.95L - ₹1.08Cr",
    demand: "Very High",
    growth: "+13%",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    description:
      "Create user interfaces and user experiences for websites and web applications using modern frameworks and technologies.",
    requiredSkills: [
      "HTML/CSS",
      "JavaScript",
      "React/Vue/Angular",
      "Responsive Design",
      "Git",
      "CSS Frameworks",
    ],
    optionalSkills: [
      "TypeScript",
      "Node.js",
      "Testing Frameworks",
      "Design Tools",
      "WebPack",
      "PWA Development",
    ],
    learningPath: [
      {
        phase: "Foundation (2-3 months)",
        skills: ["HTML", "CSS", "JavaScript Basics"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (3-4 months)",
        skills: ["React/Vue", "Git", "Responsive Design"],
        difficulty: 2,
      },
      {
        phase: "Advanced (3-6 months)",
        skills: ["TypeScript", "Testing", "Performance Optimization"],
        difficulty: 3,
      },
    ],
    companies: ["Google", "Facebook", "Netflix", "Airbnb", "Spotify"],
    dayToDay: [
      "Implement user interface designs",
      "Optimize web performance",
      "Collaborate with designers and backend developers",
      "Write clean, maintainable code",
      "Test and debug applications",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    category: "Web Development",
    level: "Entry to Senior",
    avgSalary: "₹58.10L - ₹1.16Cr",
    demand: "High",
    growth: "+11%",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    description:
      "Develop server-side logic, databases, and APIs that power web applications and mobile apps.",
    requiredSkills: [
      "Python/Java/Node.js",
      "Database Management",
      "API Development",
      "Server Administration",
      "Git",
      "Cloud Services",
    ],
    optionalSkills: [
      "Docker",
      "Kubernetes",
      "Microservices",
      "GraphQL",
      "Message Queues",
      "DevOps Tools",
    ],
    learningPath: [
      {
        phase: "Foundation (3-4 months)",
        skills: ["Programming Language", "Database Basics", "HTTP/REST"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (4-6 months)",
        skills: ["Framework", "API Development", "Database Design"],
        difficulty: 2,
      },
      {
        phase: "Advanced (6-8 months)",
        skills: ["Microservices", "Cloud Deployment", "Security"],
        difficulty: 3,
      },
    ],
    companies: ["Amazon", "Microsoft", "Google", "Uber", "PayPal"],
    dayToDay: [
      "Design and implement APIs",
      "Optimize database performance",
      "Ensure application security",
      "Deploy and maintain servers",
      "Collaborate with frontend teams",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    category: "Web Development",
    level: "Mid to Senior",
    avgSalary: "₹62.25L - ₹1.25Cr",
    demand: "Very High",
    growth: "+15%",
    icon: "🔄",
    color: "from-purple-500 to-pink-500",
    description:
      "Work on both frontend and backend development, handling the complete web development lifecycle.",
    requiredSkills: [
      "Frontend Technologies",
      "Backend Technologies",
      "Database Management",
      "Version Control",
      "DevOps Basics",
      "Problem Solving",
    ],
    optionalSkills: [
      "Mobile Development",
      "Cloud Architecture",
      "Machine Learning",
      "Blockchain",
      "IoT Development",
      "System Design",
    ],
    learningPath: [
      {
        phase: "Foundation (4-6 months)",
        skills: ["HTML/CSS/JS", "Backend Language", "Database"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (6-8 months)",
        skills: ["Frontend Framework", "API Development", "Deployment"],
        difficulty: 2,
      },
      {
        phase: "Advanced (8-12 months)",
        skills: ["System Design", "Scalability", "Architecture"],
        difficulty: 3,
      },
    ],
    companies: ["Startups", "Meta", "Twitter", "LinkedIn", "Stripe"],
    dayToDay: [
      "Develop complete web applications",
      "Design system architecture",
      "Implement both client and server code",
      "Manage database and deployment",
      "Lead technical decisions",
    ],
  },
  {
    id: 4,
    title: "Data Scientist",
    category: "Data Science",
    level: "Mid to Senior",
    avgSalary: "₹70.55L - ₹1.33Cr",
    demand: "Very High",
    growth: "+22%",
    icon: "📊",
    color: "from-orange-500 to-red-500",
    description:
      "Analyze complex data to extract insights and build predictive models using machine learning and statistical methods.",
    requiredSkills: [
      "Python/R",
      "Statistics",
      "Machine Learning",
      "SQL",
      "Data Visualization",
      "Mathematics",
    ],
    optionalSkills: [
      "Deep Learning",
      "Big Data Tools",
      "Cloud ML Platforms",
      "A/B Testing",
      "Business Intelligence",
      "MLOps",
    ],
    learningPath: [
      {
        phase: "Foundation (4-6 months)",
        skills: ["Python", "Statistics", "SQL", "Pandas"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (6-8 months)",
        skills: ["Machine Learning", "Visualization", "Feature Engineering"],
        difficulty: 2,
      },
      {
        phase: "Advanced (8-12 months)",
        skills: ["Deep Learning", "MLOps", "Big Data"],
        difficulty: 3,
      },
    ],
    companies: ["Netflix", "Amazon", "Google", "Tesla", "Airbnb"],
    dayToDay: [
      "Analyze large datasets",
      "Build predictive models",
      "Create data visualizations",
      "Present insights to stakeholders",
      "Collaborate with engineering teams",
    ],
  },
  {
    id: 5,
    title: "Mobile App Developer",
    category: "Mobile Development",
    level: "Entry to Senior",
    avgSalary: "₹58.10L - ₹1.12Cr",
    demand: "High",
    growth: "+9%",
    icon: "📱",
    color: "from-teal-500 to-blue-500",
    description:
      "Develop native and cross-platform mobile applications for iOS and Android devices.",
    requiredSkills: [
      "Swift/Kotlin",
      "React Native/Flutter",
      "Mobile UI/UX",
      "API Integration",
      "App Store Guidelines",
      "Testing",
    ],
    optionalSkills: [
      "Native Development",
      "Push Notifications",
      "Mobile Security",
      "AR/VR",
      "IoT Integration",
      "Mobile Analytics",
    ],
    learningPath: [
      {
        phase: "Foundation (3-4 months)",
        skills: ["Programming Language", "Mobile Basics", "UI Design"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (4-6 months)",
        skills: ["Framework", "API Integration", "Testing"],
        difficulty: 2,
      },
      {
        phase: "Advanced (6-8 months)",
        skills: ["Performance", "Security", "Publishing"],
        difficulty: 3,
      },
    ],
    companies: ["Apple", "Google", "Instagram", "WhatsApp", "TikTok"],
    dayToDay: [
      "Develop mobile applications",
      "Implement user interfaces",
      "Integrate with APIs and services",
      "Test on multiple devices",
      "Optimize app performance",
    ],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    category: "Infrastructure",
    level: "Mid to Senior",
    avgSalary: "₹66.40L - ₹1.25Cr",
    demand: "Very High",
    growth: "+18%",
    icon: "🔧",
    color: "from-yellow-500 to-orange-500",
    description:
      "Bridge development and operations by automating deployment, monitoring, and infrastructure management.",
    requiredSkills: [
      "Linux/Unix",
      "Cloud Platforms",
      "CI/CD",
      "Docker",
      "Infrastructure as Code",
      "Monitoring",
    ],
    optionalSkills: [
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Security",
      "Cost Optimization",
      "Incident Response",
    ],
    learningPath: [
      {
        phase: "Foundation (4-5 months)",
        skills: ["Linux", "Networking", "Cloud Basics"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (5-7 months)",
        skills: ["CI/CD", "Docker", "Infrastructure as Code"],
        difficulty: 2,
      },
      {
        phase: "Advanced (7-10 months)",
        skills: ["Kubernetes", "Security", "Monitoring"],
        difficulty: 3,
      },
    ],
    companies: ["AWS", "Microsoft", "Google Cloud", "Netflix", "Spotify"],
    dayToDay: [
      "Automate deployment processes",
      "Monitor system performance",
      "Manage cloud infrastructure",
      "Ensure system reliability",
      "Collaborate with development teams",
    ],
  },
  {
    id: 7,
    title: "Machine Learning Engineer",
    category: "AI/ML",
    level: "Mid to Senior",
    avgSalary: "₹74.70L - ₹1.41Cr",
    demand: "Very High",
    growth: "+25%",
    icon: "🤖",
    color: "from-indigo-500 to-purple-500",
    description:
      "Design, build, and deploy machine learning models and systems at scale in production environments.",
    requiredSkills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "MLOps",
      "Model Deployment",
      "Data Engineering",
    ],
    optionalSkills: [
      "Computer Vision",
      "NLP",
      "Reinforcement Learning",
      "Edge Computing",
      "Distributed Systems",
      "Research",
    ],
    learningPath: [
      {
        phase: "Foundation (5-6 months)",
        skills: ["Python", "Math/Stats", "ML Basics"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (6-8 months)",
        skills: ["Deep Learning", "Frameworks", "Model Training"],
        difficulty: 2,
      },
      {
        phase: "Advanced (8-12 months)",
        skills: ["MLOps", "Production Systems", "Optimization"],
        difficulty: 3,
      },
    ],
    companies: ["OpenAI", "Google", "Meta", "Tesla", "NVIDIA"],
    dayToDay: [
      "Build ML models and pipelines",
      "Deploy models to production",
      "Optimize model performance",
      "Collaborate with data scientists",
      "Monitor model behavior",
    ],
  },
  {
    id: 8,
    title: "Cybersecurity Specialist",
    category: "Security",
    level: "Mid to Senior",
    avgSalary: "₹70.55L - ₹1.29Cr",
    demand: "Very High",
    growth: "+28%",
    icon: "🛡️",
    color: "from-red-500 to-pink-500",
    description:
      "Protect organizations from cyber threats by implementing security measures and responding to incidents.",
    requiredSkills: [
      "Network Security",
      "Incident Response",
      "Risk Assessment",
      "Security Tools",
      "Compliance",
      "Ethical Hacking",
    ],
    optionalSkills: [
      "Penetration Testing",
      "Forensics",
      "Cloud Security",
      "IoT Security",
      "AI Security",
      "Blockchain Security",
    ],
    learningPath: [
      {
        phase: "Foundation (4-6 months)",
        skills: ["Networking", "Security Basics", "Operating Systems"],
        difficulty: 1,
      },
      {
        phase: "Intermediate (6-8 months)",
        skills: ["Security Tools", "Incident Response", "Risk Management"],
        difficulty: 2,
      },
      {
        phase: "Advanced (8-12 months)",
        skills: ["Advanced Threats", "Forensics", "Leadership"],
        difficulty: 3,
      },
    ],
    companies: ["Microsoft", "Cisco", "Palo Alto", "CrowdStrike", "IBM"],
    dayToDay: [
      "Monitor security threats",
      "Implement security measures",
      "Respond to incidents",
      "Conduct security assessments",
      "Train staff on security practices",
    ],
  },
];

const categories = [
  "All Categories",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "AI/ML",
  "Infrastructure",
  "Security",
];

const levels = ["All Levels", "Entry", "Mid", "Senior"];

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = itJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      job.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" ||
      job.level.toLowerCase().includes(selectedLevel.toLowerCase());
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getDemandColor = (demand) => {
    switch (demand) {
      case "Very High":
        return "text-green-400";
      case "High":
        return "text-yellow-400";
      case "Medium":
        return "text-orange-400";
      default:
        return "text-red-400";
    }
  };

  const getDifficultyProgress = (difficulty) => {
    return (difficulty / 3) * 100;
  };

  return (
    <div className="min-h-screen bg-background">
      <Taskbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            IT <span className="gradient-text">Career Guide</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore IT job opportunities, required skills, learning paths, and
            salary expectations to plan your career journey
          </p>
        </div>

        {/* Job Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2.5M+</div>
            <div className="text-foreground/70 text-sm">IT Job Openings</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">+15%</div>
            <div className="text-foreground/70 text-sm">Average Growth</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">₹70.55L</div>
            <div className="text-foreground/70 text-sm">Average Salary</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Users className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">500K+</div>
            <div className="text-foreground/70 text-sm">
              Remote Opportunities
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search IT jobs, skills, or companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
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
            <div className="lg:col-span-3">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience Level" />
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

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Jobs List */}
          <div className="lg:col-span-2 space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                  selectedJob === job.id ? "border-primary/50" : ""
                }`}
                onClick={() =>
                  setSelectedJob(selectedJob === job.id ? null : job.id)
                }
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${job.color} flex items-center justify-center text-2xl`}
                      >
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {job.category}
                        </Badge>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${
                        selectedJob === job.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <DollarSign className="h-4 w-4 mx-auto mb-1 text-green-400" />
                      <div className="text-xs text-foreground/60 mb-1">
                        Salary
                      </div>
                      <div className="text-sm font-medium">{job.avgSalary}</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-4 w-4 mx-auto mb-1 text-blue-400" />
                      <div className="text-xs text-foreground/60 mb-1">
                        Growth
                      </div>
                      <div className="text-sm font-medium">{job.growth}</div>
                    </div>
                    <div className="text-center">
                      <Target
                        className={`h-4 w-4 mx-auto mb-1 ${getDemandColor(job.demand)}`}
                      />
                      <div className="text-xs text-foreground/60 mb-1">
                        Demand
                      </div>
                      <div className="text-sm font-medium">{job.demand}</div>
                    </div>
                    <div className="text-center">
                      <Award className="h-4 w-4 mx-auto mb-1 text-orange-400" />
                      <div className="text-xs text-foreground/60 mb-1">
                        Level
                      </div>
                      <div className="text-sm font-medium">{job.level}</div>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4">{job.description}</p>

                  {/* Key Skills Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requiredSkills.slice(0, 4).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {job.requiredSkills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.requiredSkills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedJob === job.id && (
                    <div className="border-t border-border/50 pt-6 space-y-6">
                      {/* Learning Path */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          Learning Path
                        </h4>
                        <div className="space-y-4">
                          {job.learningPath.map((phase, index) => (
                            <div key={index} className="flex space-x-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-medium">{phase.phase}</h5>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xs text-foreground/60">
                                      Difficulty
                                    </span>
                                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-primary rounded-full transition-all"
                                        style={{
                                          width: `${getDifficultyProgress(phase.difficulty)}%`,
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {phase.skills.map((skill, skillIndex) => (
                                    <Badge
                                      key={skillIndex}
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* All Skills */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium mb-3 text-green-400">
                            Required Skills
                          </h5>
                          <div className="space-y-2">
                            {job.requiredSkills.map((skill, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <Star className="h-3 w-3 text-green-400" />
                                <span className="text-sm">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium mb-3 text-blue-400">
                            Optional Skills
                          </h5>
                          <div className="space-y-2">
                            {job.optionalSkills.map((skill, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <Zap className="h-3 w-3 text-blue-400" />
                                <span className="text-sm">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Day-to-Day Tasks */}
                      <div>
                        <h5 className="font-medium mb-3">
                          Typical Day-to-Day Tasks
                        </h5>
                        <div className="space-y-2">
                          {job.dayToDay.map((task, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <ChevronRight className="h-3 w-3 text-primary" />
                              <span className="text-sm text-foreground/80">
                                {task}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Top Companies */}
                      <div>
                        <h5 className="font-medium mb-3 flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          Top Hiring Companies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {job.companies.map((company, index) => (
                            <Badge key={index} className="text-xs">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <Button className="flex-1">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Start Learning Path
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Search className="h-4 w-4 mr-2" />
                          Find Jobs
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Career Tips */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Career Success Tips
                </h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <div className="flex items-start space-x-2">
                    <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                    <span>Build a strong portfolio with real projects</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                    <span>Contribute to open source projects</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                    <span>Network with other developers</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                    <span>Stay updated with latest technologies</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                    <span>Practice coding problems regularly</span>
                  </div>
                </div>
              </div>

              {/* Salary Ranges */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Salary Expectations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Entry Level</span>
                    <span className="font-medium">₹41.50L - ₹62.25L</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Mid Level</span>
                    <span className="font-medium">₹62.25L - ₹99.60L</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Senior Level</span>
                    <span className="font-medium">₹99.60L - ₹1.49Cr</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lead/Principal</span>
                    <span className="font-medium">₹1.49Cr+</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Skill Assessment
                  </Button>
                  <Button className="w-full" variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Salary Calculator
                  </Button>
                  <Button className="w-full" variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Find Mentors
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
