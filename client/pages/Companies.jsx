import { useState } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Code2,
  Github,
  Building2,
  MapPin,
  Users,
  Briefcase,
  ExternalLink,
  Star,
  TrendingUp,
  Globe,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const companies = [
  {
    id: 1,
    name: "Google",
    logo: "G",
    location: "Mountain View, CA",
    employees: "156,000+",
    founded: "1998",
    type: "Big Tech",
    description:
      "Leading search engine and cloud computing company driving innovation in AI, Android, and web technologies.",
    techStack: ["Go", "Python", "Java", "C++", "JavaScript", "Kotlin"],
    openRoles: 2847,
    website: "https://google.com",

    color: "from-blue-500 to-green-500",
    highlights: [
      "AI Research",
      "Cloud Computing",
      "Android OS",
      "Search Engine",
    ],
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "M",
    location: "Redmond, WA",
    employees: "221,000+",
    founded: "1975",
    type: "Big Tech",
    description:
      "Technology corporation developing software, cloud services, and productivity tools used worldwide.",
    techStack: ["C#", ".NET", "TypeScript", "Azure", "PowerShell", "C++"],
    openRoles: 1934,
    website: "https://microsoft.com",

    color: "from-blue-600 to-cyan-500",
    highlights: ["Azure Cloud", "Office 365", "Windows OS", "Xbox Gaming"],
  },
  {
    id: 3,
    name: "Meta",
    logo: "M",
    location: "Menlo Park, CA",
    employees: "77,000+",
    founded: "2004",
    type: "Social Media",
    description:
      "Social technology company building platforms for connection and virtual reality experiences.",
    techStack: ["React", "PHP", "Python", "C++", "JavaScript", "Hack"],
    openRoles: 892,
    website: "https://meta.com",

    color: "from-blue-500 to-purple-500",
    highlights: ["Facebook", "Instagram", "WhatsApp", "VR/AR"],
  },
  {
    id: 4,
    name: "Apple",
    logo: "A",
    location: "Cupertino, CA",
    employees: "164,000+",
    founded: "1976",
    type: "Hardware/Software",
    description:
      "Consumer electronics and software company known for innovative design and premium products.",
    techStack: ["Swift", "Objective-C", "C++", "Metal", "JavaScript", "Python"],
    openRoles: 1567,
    website: "https://apple.com",

    color: "from-gray-600 to-gray-800",
    highlights: ["iPhone", "macOS", "iOS", "App Store"],
  },
  {
    id: 5,
    name: "Amazon",
    logo: "A",
    location: "Seattle, WA",
    employees: "1,500,000+",
    founded: "1994",
    type: "E-commerce/Cloud",
    description:
      "E-commerce and cloud computing giant with diverse technology services and logistics operations.",
    techStack: ["Java", "Python", "C++", "Go", "JavaScript", "Scala"],
    openRoles: 3421,
    website: "https://amazon.com",

    color: "from-orange-500 to-yellow-500",
    highlights: ["AWS", "Prime", "Alexa", "Logistics"],
  },
  {
    id: 6,
    name: "Netflix",
    logo: "N",
    location: "Los Gatos, CA",
    employees: "12,800+",
    founded: "1997",
    type: "Streaming",
    description:
      "Streaming entertainment service with original content and global reach.",
    techStack: ["Java", "Python", "JavaScript", "Go", "Scala", "Swift"],
    openRoles: 234,
    website: "https://netflix.com",

    color: "from-red-600 to-red-800",
    highlights: [
      "Streaming",
      "Original Content",
      "Global Platform",
      "Recommendations",
    ],
  },
  {
    id: 7,
    name: "Tesla",
    logo: "T",
    location: "Austin, TX",
    employees: "127,000+",
    founded: "2003",
    type: "Automotive/Energy",
    description:
      "Electric vehicle and clean energy company revolutionizing transportation and energy storage.",
    techStack: ["Python", "C++", "JavaScript", "Go", "Rust", "MATLAB"],
    openRoles: 1876,
    website: "https://tesla.com",

    color: "from-red-500 to-pink-500",
    highlights: [
      "Electric Vehicles",
      "Autopilot",
      "Solar Energy",
      "Supercharger",
    ],
  },
  {
    id: 8,
    name: "Spotify",
    logo: "S",
    location: "Stockholm, Sweden",
    employees: "9,200+",
    founded: "2006",
    type: "Music Streaming",
    description:
      "Audio streaming platform providing music, podcasts, and audio content to millions globally.",
    techStack: ["Java", "Python", "Scala", "JavaScript", "Go", "Swift"],
    openRoles: 345,
    website: "https://spotify.com",

    color: "from-green-500 to-emerald-600",
    highlights: ["Music Streaming", "Podcasts", "Playlists", "Discovery"],
  },
];

export default function Companies() {
  const [expandedTechStacks, setExpandedTechStacks] = useState(new Set());

  const toggleTechStack = (companyId) => {
    const newExpanded = new Set(expandedTechStacks);
    if (newExpanded.has(companyId)) {
      newExpanded.delete(companyId);
    } else {
      newExpanded.add(companyId);
    }
    setExpandedTechStacks(newExpanded);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Big Tech":
        return "bg-blue-500/20 text-blue-400";
      case "Social Media":
        return "bg-purple-500/20 text-purple-400";
      case "Hardware/Software":
        return "bg-gray-500/20 text-gray-400";
      case "E-commerce/Cloud":
        return "bg-orange-500/20 text-orange-400";
      case "Streaming":
        return "bg-red-500/20 text-red-400";
      case "Automotive/Energy":
        return "bg-pink-500/20 text-pink-400";
      case "Music Streaming":
        return "bg-green-500/20 text-green-400";
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
          <h1 className="text-4xl font-bold mb-4">
            Top <span className="gradient-text">Tech Companies</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Explore leading technology companies and discover career
            opportunities
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-xl text-center">
            <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">{companies.length}+</div>
            <div className="text-foreground/70 text-sm">Featured Companies</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Briefcase className="h-8 w-8 text-teal-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">Tech Leaders</div>
            <div className="text-foreground/70 text-sm">Industry Giants</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2M+</div>
            <div className="text-foreground/70 text-sm">Total Employees</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Globe className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">Global</div>
            <div className="text-foreground/70 text-sm">Reach & Impact</div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${company.color} flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform`}
                    >
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{company.name}</h3>
                      <div className="flex items-center space-x-1 text-sm text-foreground/60">
                        <MapPin className="h-3 w-3" />
                        <span>{company.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-4">{company.description}</p>

                {/* Company Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      <Users className="h-3 w-3 text-foreground/60" />
                      <span className="text-xs text-foreground/60">
                        Employees
                      </span>
                    </div>
                    <span className="text-sm font-medium">
                      {company.employees}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      <Calendar className="h-3 w-3 text-foreground/60" />
                      <span className="text-xs text-foreground/60">
                        Founded
                      </span>
                    </div>
                    <span className="text-sm font-medium">
                      {company.founded}
                    </span>
                  </div>
                </div>

                {/* Type */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`text-xs ${getTypeColor(company.type)}`}>
                    {company.type}
                  </Badge>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {(expandedTechStacks.has(company.id)
                      ? company.techStack
                      : company.techStack.slice(0, 4)
                    ).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {company.techStack.length > 4 && (
                      <button
                        onClick={() => toggleTechStack(company.id)}
                        className="px-2 py-1 bg-primary/20 text-primary rounded-md text-xs hover:bg-primary/30 transition-colors cursor-pointer"
                      >
                        {expandedTechStacks.has(company.id)
                          ? "Show less"
                          : `+${company.techStack.length - 4} more`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Products:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {company.highlights.slice(0, 4).map((highlight, index) => (
                      <div
                        key={index}
                        className="text-xs text-foreground/70 flex items-center space-x-1"
                      >
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => window.open(company.website, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to join a top tech company?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Enhance your skills with our learning platform and prepare for
              your dream job at leading tech companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Code2 className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="outline" size="lg">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
