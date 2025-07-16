import { useState } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  Cloud,
  GitBranch,
  Brain,
  MessageSquare,
  ShoppingCart,
  Zap,
  X,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const techStacks = [
  {
    id: 1,
    name: "MERN Stack",
    icon: <Layers className="h-8 w-8" />,
    description:
      "MongoDB, Express.js, React, Node.js - Full-stack JavaScript development",
    color: "from-green-500 to-blue-500",
    category: "Full Stack",
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["React", "Express.js", "Node.js", "Next.js"],
    tools: ["MongoDB", "Mongoose", "Webpack", "Babel", "npm/yarn"],
    ide: ["VS Code", "WebStorm", "Atom", "Sublime Text"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["HTML/CSS", "JavaScript ES6+", "Git/GitHub", "REST APIs"],
      },
      {
        phase: "Frontend",
        duration: "6-8 weeks",
        skills: [
          "js",
          "State Management",
          "React Router",
          "CSS Frameworks",
        ],
      },
      {
        phase: "Backend",
        duration: "4-6 weeks",
        skills: ["Node.js", "Express.js", "MongoDB", "Authentication"],
      },
      {
        phase: "Full Stack",
        duration: "4-6 weeks",
        skills: [
          "API Integration",
          "Deployment",
          "Testing",
          "Project Building",
        ],
      },
    ],
    jobRoles: [
      "Full Stack Developer",
      "MERN Developer",
      "JavaScript Developer",
      "Frontend Developer",
    ],
    avgSalary: "₹4,50,000 - ₹12,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    name: "MEAN Stack",
    icon: <Database className="h-8 w-8" />,
    description:
      "MongoDB, Express.js, Angular, Node.js - Enterprise-grade development",
    color: "from-red-500 to-purple-500",
    category: "Full Stack",
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["Angular", "Express.js", "Node.js", "RxJS"],
    tools: ["MongoDB", "Angular CLI", "npm/yarn", "Webpack"],
    ide: ["VS Code", "WebStorm", "Angular IDE"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["HTML/CSS", "JavaScript", "TypeScript", "Git/GitHub"],
      },
      {
        phase: "Frontend",
        duration: "8-10 weeks",
        skills: ["Angular", "TypeScript", "RxJS", "Angular Material"],
      },
      {
        phase: "Backend",
        duration: "4-6 weeks",
        skills: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      },
      {
        phase: "Integration",
        duration: "4-6 weeks",
        skills: ["API Development", "Testing", "Deployment", "Best Practices"],
      },
    ],
    jobRoles: [
      "MEAN Developer",
      "Angular Developer",
      "Full Stack Developer",
      "Enterprise Developer",
    ],
    avgSalary: "₹5,00,000 - ₹15,00,000",
    difficulty: "Advanced",
  },
  {
    id: 3,
    name: "MEVN Stack",
    icon: <Globe className="h-8 w-8" />,
    description:
      "MongoDB, Express.js, Vue.js, Node.js - Modern progressive development",
    color: "from-green-400 to-cyan-500",
    category: "Full Stack",
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["Vue.js", "Express.js", "Node.js", "Nuxt.js"],
    tools: ["MongoDB", "Vue CLI", "Vuex", "npm/yarn"],
    ide: ["VS Code", "WebStorm", "Vue IDE"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["HTML/CSS", "JavaScript ES6+", "Git/GitHub", "REST APIs"],
      },
      {
        phase: "Frontend",
        duration: "6-8 weeks",
        skills: ["Vue.js", "Vuex", "Vue Router", "Component Design"],
      },
      {
        phase: "Backend",
        duration: "4-6 weeks",
        skills: ["Node.js", "Express.js", "MongoDB", "Authentication"],
      },
      {
        phase: "Advanced",
        duration: "4-6 weeks",
        skills: ["Nuxt.js", "SSR", "Testing", "Deployment"],
      },
    ],
    jobRoles: [
      "MEVN Developer",
      "Vue.js Developer",
      "Full Stack Developer",
      "Frontend Developer",
    ],
    avgSalary: "₹4,00,000 - ₹11,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    name: "JAMstack",
    icon: <Zap className="h-8 w-8" />,
    description:
      "JavaScript, APIs, Markup - Modern web development with static generation",
    color: "from-yellow-400 to-orange-500",
    category: "Frontend",
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Markdown"],
    frameworks: ["Gatsby", "Next.js", "Nuxt.js", "Gridsome"],
    tools: ["Netlify", "Vercel", "Contentful", "Strapi", "GraphQL"],
    ide: ["VS Code", "WebStorm", "Atom"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "3-4 weeks",
        skills: ["HTML/CSS", "JavaScript", "Git/GitHub", "Static Sites"],
      },
      {
        phase: "Static Generation",
        duration: "4-6 weeks",
        skills: ["Gatsby/Next.js", "GraphQL", "Markdown", "CMS Integration"],
      },
      {
        phase: "APIs & Services",
        duration: "3-4 weeks",
        skills: ["Headless CMS", "Serverless Functions", "Third-party APIs"],
      },
      {
        phase: "Deployment",
        duration: "2-3 weeks",
        skills: ["CDN", "Netlify/Vercel", "CI/CD", "Performance Optimization"],
      },
    ],
    jobRoles: [
      "JAMstack Developer",
      "Frontend Developer",
      "Static Site Developer",
      "Web Developer",
    ],
    avgSalary: "₹3,50,000 - ₹10,00,000",
    difficulty: "Beginner",
  },
  {
    id: 5,
    name: "LAMP Stack",
    icon: <Server className="h-8 w-8" />,
    description:
      "Linux, Apache, MySQL, PHP - Traditional web development stack",
    color: "from-blue-600 to-indigo-600",
    category: "Backend",
    languages: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
    frameworks: ["Laravel", "CodeIgniter", "Symfony", "CakePHP"],
    tools: ["Apache", "MySQL", "phpMyAdmin", "Composer"],
    ide: ["PhpStorm", "VS Code", "Sublime Text", "NetBeans"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: ["HTML/CSS", "JavaScript", "Linux Basics", "Database Concepts"],
      },
      {
        phase: "Backend Development",
        duration: "6-8 weeks",
        skills: ["PHP", "MySQL", "Apache Configuration", "MVC Pattern"],
      },
      {
        phase: "Framework",
        duration: "4-6 weeks",
        skills: ["Laravel", "ORM", "Authentication", "API Development"],
      },
      {
        phase: "Deployment",
        duration: "2-3 weeks",
        skills: ["Server Management", "Security", "Performance", "Monitoring"],
      },
    ],
    jobRoles: [
      "PHP Developer",
      "LAMP Developer",
      "Backend Developer",
      "Web Developer",
    ],
    avgSalary: "₹3,00,000 - ₹9,00,000",
    difficulty: "Beginner",
  },
  {
    id: 6,
    name: "LEMP Stack",
    icon: <Server className="h-8 w-8" />,
    description: "Linux, Nginx, MySQL, PHP - High-performance web stack",
    color: "from-gray-600 to-gray-800",
    category: "Backend",
    languages: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
    frameworks: ["Laravel", "Symfony", "Slim", "Phalcon"],
    tools: ["Nginx", "MySQL", "Redis", "Composer"],
    ide: ["PhpStorm", "VS Code", "Vim", "Sublime Text"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: ["HTML/CSS", "JavaScript", "Linux", "Database Design"],
      },
      {
        phase: "Backend Development",
        duration: "6-8 weeks",
        skills: ["PHP", "MySQL", "Nginx Configuration", "RESTful APIs"],
      },
      {
        phase: "Advanced",
        duration: "4-6 weeks",
        skills: ["Laravel", "Caching", "Queue Management", "Microservices"],
      },
      {
        phase: "DevOps",
        duration: "3-4 weeks",
        skills: [
          "Server Optimization",
          "Load Balancing",
          "Security",
          "Monitoring",
        ],
      },
    ],
    jobRoles: [
      "PHP Developer",
      "LEMP Developer",
      "Backend Developer",
      "DevOps Engineer",
    ],
    avgSalary: "₹3,50,000 - ₹10,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 7,
    name: "Django Stack",
    icon: <Code2 className="h-8 w-8" />,
    description:
      "Python, Django, PostgreSQL - Rapid development with batteries included",
    color: "from-green-600 to-teal-600",
    category: "Backend",
    languages: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
    frameworks: ["Django", "Django REST", "Celery", "Gunicorn"],
    tools: ["PostgreSQL", "Redis", "Docker", "pip"],
    ide: ["PyCharm", "VS Code", "Vim", "Sublime Text"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["Python", "OOP", "Git/GitHub", "Database Basics"],
      },
      {
        phase: "Django Basics",
        duration: "6-8 weeks",
        skills: ["Django Framework", "Models", "Views", "Templates", "Admin"],
      },
      {
        phase: "Advanced Django",
        duration: "4-6 weeks",
        skills: [
          "Django REST Framework",
          "Authentication",
          "Testing",
          "Deployment",
        ],
      },
      {
        phase: "Production",
        duration: "3-4 weeks",
        skills: ["PostgreSQL", "Celery", "Docker", "CI/CD"],
      },
    ],
    jobRoles: [
      "Django Developer",
      "Python Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
    avgSalary: "₹4,50,000 - ₹12,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    name: "Ruby on Rails Stack",
    icon: <Code2 className="h-8 w-8" />,
    description:
      "Ruby, Rails, PostgreSQL - Convention over configuration development",
    color: "from-red-500 to-pink-500",
    category: "Full Stack",
    languages: ["Ruby", "SQL", "HTML", "CSS", "JavaScript"],
    frameworks: ["Ruby on Rails", "Sinatra", "RSpec", "Capybara"],
    tools: ["PostgreSQL", "Redis", "Sidekiq", "Bundler"],
    ide: ["RubyMine", "VS Code", "Atom", "Vim"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: ["Ruby", "OOP", "Git/GitHub", "Database Concepts"],
      },
      {
        phase: "Rails Development",
        duration: "6-8 weeks",
        skills: [
          "Rails Framework",
          "MVC",
          "ActiveRecord",
          "Views & Controllers",
        ],
      },
      {
        phase: "Advanced Rails",
        duration: "4-6 weeks",
        skills: [
          "API Development",
          "Testing",
          "Authentication",
          "Background Jobs",
        ],
      },
      {
        phase: "Deployment",
        duration: "2-3 weeks",
        skills: ["Heroku", "Capistrano", "Performance", "Security"],
      },
    ],
    jobRoles: [
      "Rails Developer",
      "Ruby Developer",
      "Full Stack Developer",
      "Backend Developer",
    ],
    avgSalary: "₹4,00,000 - ₹11,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    name: "Flutter Stack",
    icon: <Smartphone className="h-8 w-8" />,
    description: "Dart, Flutter, Firebase - Cross-platform mobile development",
    color: "from-blue-400 to-cyan-400",
    category: "Mobile",
    languages: ["Dart", "Java", "Kotlin", "Swift"],
    frameworks: ["Flutter", "Material Design", "Cupertino"],
    tools: ["Firebase", "Android Studio", "Xcode", "pub"],
    ide: ["Android Studio", "VS Code", "IntelliJ IDEA"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "3-4 weeks",
        skills: ["Dart", "OOP", "Git/GitHub", "Mobile UI Concepts"],
      },
      {
        phase: "Flutter Basics",
        duration: "6-8 weeks",
        skills: [
          "Flutter Widgets",
          "State Management",
          "Navigation",
          "Layouts",
        ],
      },
      {
        phase: "Advanced Flutter",
        duration: "4-6 weeks",
        skills: [
          "APIs",
          "Local Storage",
          "State Management (Bloc/Provider)",
          "Testing",
        ],
      },
      {
        phase: "Production",
        duration: "3-4 weeks",
        skills: ["Firebase", "App Store Deployment", "Performance", "CI/CD"],
      },
    ],
    jobRoles: [
      "Flutter Developer",
      "Mobile App Developer",
      "Cross-platform Developer",
      "Frontend Developer",
    ],
    avgSalary: "₹3,50,000 - ₹10,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 10,
    name: "React Native Stack",
    icon: <Smartphone className="h-8 w-8" />,
    description:
      "JavaScript, React Native, Expo - Native mobile apps with web technologies",
    color: "from-purple-500 to-pink-500",
    category: "Mobile",
    languages: ["JavaScript", "TypeScript", "Java", "Objective-C"],
    frameworks: ["React Native", "Expo", "React Navigation"],
    tools: ["Metro", "Flipper", "React Native CLI", "npm/yarn"],
    ide: ["VS Code", "WebStorm", "Android Studio", "Xcode"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: [
          "JavaScript",
          "React",
          "Git/GitHub",
          "Mobile Development Basics",
        ],
      },
      {
        phase: "React Native",
        duration: "6-8 weeks",
        skills: [
          "React Native Components",
          "Navigation",
          "State Management",
          "Native APIs",
        ],
      },
      {
        phase: "Advanced",
        duration: "4-6 weeks",
        skills: ["Native Modules", "Performance", "Testing", "Deployment"],
      },
      {
        phase: "Production",
        duration: "3-4 weeks",
        skills: ["App Store Submission", "CodePush", "Analytics", "CI/CD"],
      },
    ],
    jobRoles: [
      "React Native Developer",
      "Mobile App Developer",
      "JavaScript Developer",
      "Frontend Developer",
    ],
    avgSalary: "₹4,00,000 - ₹11,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    name: "Native Android Stack",
    icon: <Smartphone className="h-8 w-8" />,
    description:
      "Java/Kotlin, Android SDK, SQLite - Native Android development",
    color: "from-green-500 to-lime-500",
    category: "Mobile",
    languages: ["Java", "Kotlin", "XML", "SQL"],
    frameworks: ["Android SDK", "Jetpack Compose", "Room", "Retrofit"],
    tools: ["Android Studio", "Gradle", "ADB", "SQLite"],
    ide: ["Android Studio", "IntelliJ IDEA", "Eclipse"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["Java/Kotlin", "OOP", "Git/GitHub", "Android Basics"],
      },
      {
        phase: "Android Development",
        duration: "8-10 weeks",
        skills: ["Activities & Fragments", "Layouts", "Intents", "Services"],
      },
      {
        phase: "Advanced Android",
        duration: "6-8 weeks",
        skills: ["Jetpack Components", "MVVM", "Room Database", "Networking"],
      },
      {
        phase: "Professional",
        duration: "4-6 weeks",
        skills: ["Testing", "Performance", "Play Store", "Security"],
      },
    ],
    jobRoles: [
      "Android Developer",
      "Mobile App Developer",
      "Java/Kotlin Developer",
      "Software Engineer",
    ],
    avgSalary: "₹3,50,000 - ₹12,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 12,
    name: "Native iOS Stack",
    icon: <Smartphone className="h-8 w-8" />,
    description: "Swift, iOS SDK, Core Data - Native iOS development",
    color: "from-gray-600 to-blue-600",
    category: "Mobile",
    languages: ["Swift", "Objective-C", "SQL"],
    frameworks: ["iOS SDK", "UIKit", "SwiftUI", "Core Data"],
    tools: ["Xcode", "CocoaPods", "Carthage", "Instruments"],
    ide: ["Xcode", "AppCode"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["Swift", "OOP", "Git/GitHub", "iOS Basics"],
      },
      {
        phase: "iOS Development",
        duration: "8-10 weeks",
        skills: ["UIKit", "View Controllers", "Auto Layout", "Navigation"],
      },
      {
        phase: "Advanced iOS",
        duration: "6-8 weeks",
        skills: ["SwiftUI", "Core Data", "Networking", "MVVM"],
      },
      {
        phase: "Professional",
        duration: "4-6 weeks",
        skills: ["Testing", "Performance", "App Store", "Security"],
      },
    ],
    jobRoles: [
      "iOS Developer",
      "Mobile App Developer",
      "Swift Developer",
      "Software Engineer",
    ],
    avgSalary: "₹4,00,000 - ₹13,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    name: ".NET Stack",
    icon: <Code2 className="h-8 w-8" />,
    description:
      "C#, .NET Framework/Core, SQL Server - Microsoft ecosystem development",
    color: "from-purple-600 to-blue-600",
    category: "Full Stack",
    languages: ["C#", "F#", "VB.NET", "SQL"],
    frameworks: [".NET Core", "ASP.NET", "Entity Framework", "Blazor"],
    tools: ["SQL Server", "Azure", "NuGet", "IIS"],
    ide: ["Visual Studio", "VS Code", "Rider"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["C#", "OOP", ".NET Basics", "Git/GitHub"],
      },
      {
        phase: "Web Development",
        duration: "6-8 weeks",
        skills: ["ASP.NET Core", "MVC", "Web API", "Entity Framework"],
      },
      {
        phase: "Advanced .NET",
        duration: "4-6 weeks",
        skills: ["Blazor", "SignalR", "Authentication", "Testing"],
      },
      {
        phase: "Cloud & DevOps",
        duration: "4-5 weeks",
        skills: ["Azure", "Docker", "CI/CD", "Microservices"],
      },
    ],
    jobRoles: [
      ".NET Developer",
      "C# Developer",
      "Full Stack Developer",
      "Software Engineer",
    ],
    avgSalary: "₹4,00,000 - ₹12,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    name: "Java Spring Stack",
    icon: <Cpu className="h-8 w-8" />,
    description: "Java, Spring Framework, MySQL - Enterprise Java development",
    color: "from-orange-500 to-red-500",
    category: "Backend",
    languages: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
    frameworks: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate"],
    tools: ["MySQL", "Maven", "Gradle", "Tomcat"],
    ide: ["IntelliJ IDEA", "Eclipse", "VS Code", "NetBeans"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "5-6 weeks",
        skills: ["Java", "OOP", "Collections", "Git/GitHub"],
      },
      {
        phase: "Spring Framework",
        duration: "6-8 weeks",
        skills: [
          "Spring Boot",
          "Dependency Injection",
          "Spring MVC",
          "REST APIs",
        ],
      },
      {
        phase: "Database & ORM",
        duration: "4-6 weeks",
        skills: ["JPA/Hibernate", "MySQL", "Spring Data", "Transactions"],
      },
      {
        phase: "Enterprise",
        duration: "4-6 weeks",
        skills: ["Spring Security", "Testing", "Microservices", "Deployment"],
      },
    ],
    jobRoles: [
      "Java Developer",
      "Spring Developer",
      "Backend Developer",
      "Software Engineer",
    ],
    avgSalary: "₹4,50,000 - ₹15,00,000",
    difficulty: "Advanced",
  },
  {
    id: 15,
    name: "Serverless Stack",
    icon: <Cloud className="h-8 w-8" />,
    description: "AWS Lambda, Node.js, DynamoDB - Serverless cloud development",
    color: "from-yellow-500 to-orange-500",
    category: "Cloud",
    languages: ["JavaScript", "Python", "Go", "C#"],
    frameworks: ["Serverless Framework", "AWS SAM", "Zappa", "Chalice"],
    tools: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
    ide: ["VS Code", "WebStorm", "PyCharm", "Vim"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "3-4 weeks",
        skills: [
          "Cloud Concepts",
          "JavaScript/Python",
          "Git/GitHub",
          "REST APIs",
        ],
      },
      {
        phase: "Serverless Basics",
        duration: "4-6 weeks",
        skills: ["AWS Lambda", "API Gateway", "DynamoDB", "S3"],
      },
      {
        phase: "Advanced Serverless",
        duration: "4-6 weeks",
        skills: [
          "Event-driven Architecture",
          "Step Functions",
          "CloudWatch",
          "Testing",
        ],
      },
      {
        phase: "Production",
        duration: "3-4 weeks",
        skills: [
          "Infrastructure as Code",
          "Monitoring",
          "Security",
          "Cost Optimization",
        ],
      },
    ],
    jobRoles: [
      "Serverless Developer",
      "Cloud Engineer",
      "Backend Developer",
      "DevOps Engineer",
    ],
    avgSalary: "₹5,00,000 - ₹15,00,000",
    difficulty: "Advanced",
  },
  {
    id: 16,
    name: "GraphQL Stack",
    icon: <GitBranch className="h-8 w-8" />,
    description: "GraphQL, Apollo, React - Modern API development",
    color: "from-pink-500 to-purple-500",
    category: "API",
    languages: ["JavaScript", "TypeScript", "Python", "Java"],
    frameworks: ["Apollo Server", "Apollo Client", "Relay", "Prisma"],
    tools: ["GraphQL Playground", "GraphiQL", "Dataloader", "Federation"],
    ide: ["VS Code", "WebStorm", "IntelliJ IDEA"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "3-4 weeks",
        skills: ["JavaScript", "APIs", "Git/GitHub", "Database Basics"],
      },
      {
        phase: "GraphQL Basics",
        duration: "4-6 weeks",
        skills: [
          "GraphQL Schema",
          "Queries & Mutations",
          "Resolvers",
          "Apollo Server",
        ],
      },
      {
        phase: "Frontend Integration",
        duration: "4-6 weeks",
        skills: [
          "Apollo Client",
          "React Integration",
          "Caching",
          "Error Handling",
        ],
      },
      {
        phase: "Advanced",
        duration: "3-4 weeks",
        skills: ["Subscriptions", "Federation", "Testing", "Performance"],
      },
    ],
    jobRoles: [
      "GraphQL Developer",
      "API Developer",
      "Full Stack Developer",
      "Frontend Developer",
    ],
    avgSalary: "₹4,50,000 - ₹12,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 17,
    name: "PyData Stack",
    icon: <Brain className="h-8 w-8" />,
    description:
      "Python, Pandas, NumPy, Jupyter - Data analysis and visualization",
    color: "from-blue-500 to-indigo-500",
    category: "Data Science",
    languages: ["Python", "SQL", "R"],
    frameworks: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    tools: ["Jupyter", "Anaconda", "Git", "Docker"],
    ide: ["Jupyter Lab", "PyCharm", "VS Code", "Spyder"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: ["Python", "Statistics", "Git/GitHub", "SQL"],
      },
      {
        phase: "Data Analysis",
        duration: "6-8 weeks",
        skills: ["Pandas", "NumPy", "Data Cleaning", "EDA"],
      },
      {
        phase: "Visualization",
        duration: "3-4 weeks",
        skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau"],
      },
      {
        phase: "Advanced",
        duration: "4-6 weeks",
        skills: [
          "Machine Learning",
          "Statistical Analysis",
          "Big Data",
          "Deployment",
        ],
      },
    ],
    jobRoles: [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
      "Research Analyst",
    ],
    avgSalary: "₹3,50,000 - ₹12,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    name: "Scikit-Learn Stack",
    icon: <Brain className="h-8 w-8" />,
    description: "Python, Scikit-learn, Pandas - Machine learning development",
    color: "from-teal-500 to-green-500",
    category: "Machine Learning",
    languages: ["Python", "SQL"],
    frameworks: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    tools: ["Jupyter", "Anaconda", "Git", "MLflow"],
    ide: ["Jupyter Lab", "PyCharm", "VS Code", "Google Colab"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["Python", "Statistics", "Linear Algebra", "Pandas/NumPy"],
      },
      {
        phase: "Machine Learning",
        duration: "6-8 weeks",
        skills: [
          "Scikit-learn",
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
        ],
      },
      {
        phase: "Advanced ML",
        duration: "4-6 weeks",
        skills: [
          "Feature Engineering",
          "Model Selection",
          "Cross-validation",
          "Pipelines",
        ],
      },
      {
        phase: "Production",
        duration: "3-4 weeks",
        skills: ["Model Deployment", "MLOps", "Monitoring", "A/B Testing"],
      },
    ],
    jobRoles: [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Engineer",
      "Research Scientist",
    ],
    avgSalary: "₹5,00,000 - ₹18,00,000",
    difficulty: "Advanced",
  },
  {
    id: 19,
    name: "TensorFlow Stack",
    icon: <Brain className="h-8 w-8" />,
    description:
      "Python, TensorFlow, Keras - Deep learning and neural networks",
    color: "from-orange-500 to-red-500",
    category: "Deep Learning",
    languages: ["Python", "JavaScript", "C++"],
    frameworks: ["TensorFlow", "Keras", "TensorFlow.js", "TFX"],
    tools: ["TensorBoard", "Jupyter", "Google Colab", "Docker"],
    ide: ["Jupyter Lab", "PyCharm", "VS Code", "Google Colab"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "5-6 weeks",
        skills: ["Python", "Mathematics", "Machine Learning", "NumPy"],
      },
      {
        phase: "Deep Learning",
        duration: "6-8 weeks",
        skills: ["Neural Networks", "TensorFlow", "Keras", "Backpropagation"],
      },
      {
        phase: "Advanced DL",
        duration: "6-8 weeks",
        skills: ["CNNs", "RNNs", "Transfer Learning", "Computer Vision"],
      },
      {
        phase: "Production",
        duration: "4-6 weeks",
        skills: [
          "Model Deployment",
          "TensorFlow Serving",
          "Optimization",
          "Distributed Training",
        ],
      },
    ],
    jobRoles: [
      "Deep Learning Engineer",
      "AI Engineer",
      "Machine Learning Engineer",
      "Research Scientist",
    ],
    avgSalary: "₹6,00,000 - ₹20,00,000",
    difficulty: "Advanced",
  },
  {
    id: 20,
    name: "Big Data Stack",
    icon: <Database className="h-8 w-8" />,
    description: "Hadoop, Spark, Kafka - Large-scale data processing",
    color: "from-indigo-600 to-purple-600",
    category: "Big Data",
    languages: ["Java", "Scala", "Python", "SQL"],
    frameworks: ["Apache Spark", "Hadoop", "Kafka", "Hive"],
    tools: ["HDFS", "Yarn", "Zookeeper", "Elasticsearch"],
    ide: ["IntelliJ IDEA", "Eclipse", "Jupyter", "Databricks"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: ["Java/Scala", "Distributed Systems", "SQL", "Linux"],
      },
      {
        phase: "Big Data Basics",
        duration: "6-8 weeks",
        skills: ["Hadoop", "HDFS", "MapReduce", "Hive"],
      },
      {
        phase: "Stream Processing",
        duration: "4-6 weeks",
        skills: ["Apache Spark", "Kafka", "Real-time Analytics", "ETL"],
      },
      {
        phase: "Advanced",
        duration: "4-6 weeks",
        skills: [
          "Data Lakes",
          "Cloud Platforms",
          "Performance Tuning",
          "Data Governance",
        ],
      },
    ],
    jobRoles: [
      "Big Data Engineer",
      "Data Engineer",
      "Analytics Engineer",
      "Data Architect",
    ],
    avgSalary: "₹6,00,000 - ₹18,00,000",
    difficulty: "Advanced",
  },
  {
    id: 21,
    name: "DevOps Stack",
    icon: <GitBranch className="h-8 w-8" />,
    description:
      "Docker, Kubernetes, AWS - Infrastructure and deployment automation",
    color: "from-cyan-500 to-blue-500",
    category: "DevOps",
    languages: ["Bash", "Python", "YAML", "Go"],
    frameworks: ["Docker", "Kubernetes", "Terraform", "Ansible"],
    tools: ["Jenkins", "GitLab CI", "Prometheus", "Grafana"],
    ide: ["VS Code", "Vim", "IntelliJ IDEA", "Terminal"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: ["Linux", "Bash", "Git/GitHub", "Networking"],
      },
      {
        phase: "Containerization",
        duration: "4-6 weeks",
        skills: [
          "Docker",
          "Container Orchestration",
          "Kubernetes",
          "Docker Compose",
        ],
      },
      {
        phase: "CI/CD",
        duration: "4-6 weeks",
        skills: [
          "Jenkins",
          "GitLab CI",
          "GitHub Actions",
          "Pipeline Automation",
        ],
      },
      {
        phase: "Cloud & Monitoring",
        duration: "4-6 weeks",
        skills: [
          "AWS/Azure",
          "Infrastructure as Code",
          "Monitoring",
          "Security",
        ],
      },
    ],
    jobRoles: [
      "DevOps Engineer",
      "Site Reliability Engineer",
      "Cloud Engineer",
      "Platform Engineer",
    ],
    avgSalary: "₹5,00,000 - ₹18,00,000",
    difficulty: "Advanced",
  },
  {
    id: 22,
    name: "CI/CD Stack",
    icon: <GitBranch className="h-8 w-8" />,
    description:
      "Jenkins, GitLab CI, GitHub Actions - Continuous integration and deployment",
    color: "from-green-500 to-teal-500",
    category: "DevOps",
    languages: ["YAML", "Bash", "Python", "Groovy"],
    frameworks: ["Jenkins", "GitLab CI", "GitHub Actions", "TeamCity"],
    tools: ["Git", "Docker", "SonarQube", "Artifactory"],
    ide: ["VS Code", "Vim", "IntelliJ IDEA", "Terminal"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "3-4 weeks",
        skills: ["Git/GitHub", "Linux", "Bash", "YAML"],
      },
      {
        phase: "CI Basics",
        duration: "4-6 weeks",
        skills: [
          "Jenkins",
          "Build Automation",
          "Testing Integration",
          "Code Quality",
        ],
      },
      {
        phase: "CD & Deployment",
        duration: "4-6 weeks",
        skills: [
          "Deployment Strategies",
          "Environment Management",
          "Release Management",
          "Rollbacks",
        ],
      },
      {
        phase: "Advanced",
        duration: "3-4 weeks",
        skills: [
          "Pipeline as Code",
          "Multi-branch Pipelines",
          "Security Integration",
          "Monitoring",
        ],
      },
    ],
    jobRoles: [
      "DevOps Engineer",
      "Release Engineer",
      "Build Engineer",
      "Automation Engineer",
    ],
    avgSalary: "₹4,50,000 - ₹15,00,000",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    name: "Deep Learning Stack",
    icon: <Brain className="h-8 w-8" />,
    description:
      "PyTorch, TensorFlow, CUDA - Advanced neural network development",
    color: "from-purple-600 to-pink-600",
    category: "AI/ML",
    languages: ["Python", "C++", "CUDA"],
    frameworks: ["PyTorch", "TensorFlow", "Keras", "Transformers"],
    tools: ["Jupyter", "TensorBoard", "Weights & Biases", "NVIDIA GPU"],
    ide: ["Jupyter Lab", "PyCharm", "VS Code", "Google Colab"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "6-8 weeks",
        skills: [
          "Python",
          "Linear Algebra",
          "Calculus",
          "Statistics",
          "Machine Learning",
        ],
      },
      {
        phase: "Deep Learning",
        duration: "8-10 weeks",
        skills: [
          "Neural Networks",
          "PyTorch/TensorFlow",
          "Optimization",
          "Regularization",
        ],
      },
      {
        phase: "Specialized Areas",
        duration: "6-8 weeks",
        skills: ["Computer Vision", "NLP", "GANs", "Reinforcement Learning"],
      },
      {
        phase: "Production",
        duration: "4-6 weeks",
        skills: ["Model Deployment", "Optimization", "MLOps", "Research"],
      },
    ],
    jobRoles: [
      "Deep Learning Engineer",
      "AI Research Scientist",
      "Computer Vision Engineer",
      "NLP Engineer",
    ],
    avgSalary: "₹7,00,000 - ₹25,00,000",
    difficulty: "Advanced",
  },
  {
    id: 24,
    name: "NLP Stack",
    icon: <MessageSquare className="h-8 w-8" />,
    description: "Python, spaCy, Transformers - Natural language processing",
    color: "from-teal-500 to-cyan-500",
    category: "AI/ML",
    languages: ["Python", "R"],
    frameworks: ["spaCy", "NLTK", "Transformers", "Gensim"],
    tools: ["Hugging Face", "Jupyter", "TensorBoard", "Weights & Biases"],
    ide: ["Jupyter Lab", "PyCharm", "VS Code", "Google Colab"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-6 weeks",
        skills: ["Python", "Linguistics", "Statistics", "Machine Learning"],
      },
      {
        phase: "NLP Basics",
        duration: "6-8 weeks",
        skills: [
          "Text Preprocessing",
          "spaCy/NLTK",
          "Feature Engineering",
          "Classification",
        ],
      },
      {
        phase: "Advanced NLP",
        duration: "6-8 weeks",
        skills: ["Transformers", "BERT", "GPT", "Attention Mechanisms"],
      },
      {
        phase: "Applications",
        duration: "4-6 weeks",
        skills: [
          "Chatbots",
          "Sentiment Analysis",
          "Information Extraction",
          "Deployment",
        ],
      },
    ],
    jobRoles: [
      "NLP Engineer",
      "Computational Linguist",
      "AI Research Scientist",
      "Chatbot Developer",
    ],
    avgSalary: "₹6,00,000 - ₹20,00,000",
    difficulty: "Advanced",
  },
  {
    id: 25,
    name: "Headless CMS Stack",
    icon: <Globe className="h-8 w-8" />,
    description:
      "Strapi, Contentful, Next.js - Content management and delivery",
    color: "from-indigo-500 to-purple-500",
    category: "CMS",
    languages: ["JavaScript", "TypeScript", "GraphQL"],
    frameworks: ["Next.js", "Gatsby", "Nuxt.js", "Strapi"],
    tools: ["Contentful", "Sanity", "Ghost", "Forestry"],
    ide: ["VS Code", "WebStorm", "Atom"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "3-4 weeks",
        skills: ["HTML/CSS", "JavaScript", "Git/GitHub", "API Concepts"],
      },
      {
        phase: "Frontend",
        duration: "4-6 weeks",
        skills: ["React/Vue", "Static Site Generators", "GraphQL", "REST APIs"],
      },
      {
        phase: "CMS Integration",
        duration: "4-6 weeks",
        skills: [
          "Headless CMS",
          "Content Modeling",
          "API Integration",
          "Dynamic Routing",
        ],
      },
      {
        phase: "Deployment",
        duration: "2-3 weeks",
        skills: ["Netlify/Vercel", "CDN", "Performance", "SEO"],
      },
    ],
    jobRoles: [
      "Frontend Developer",
      "JAMstack Developer",
      "Web Developer",
      "Content Engineer",
    ],
    avgSalary: "₹3,50,000 - ₹10,00,000",
    difficulty: "Beginner",
  },
  {
    id: 26,
    name: "Shopify Hydrogen Stack",
    icon: <ShoppingCart className="h-8 w-8" />,
    description:
      "React, Shopify Hydrogen, GraphQL - Modern e-commerce development",
    color: "from-green-500 to-emerald-500",
    category: "E-commerce",
    languages: ["JavaScript", "TypeScript", "GraphQL"],
    frameworks: ["Shopify Hydrogen", "React", "Remix", "Vite"],
    tools: ["Shopify CLI", "Oxygen", "Shopify Admin API", "Storefront API"],
    ide: ["VS Code", "WebStorm", "Atom"],
    learningPath: [
      {
        phase: "Foundation",
        duration: "4-5 weeks",
        skills: ["JavaScript", "React", "Git/GitHub", "E-commerce Basics"],
      },
      {
        phase: "Shopify Development",
        duration: "6-8 weeks",
        skills: ["Shopify APIs", "Liquid", "GraphQL", "Storefront Development"],
      },
      {
        phase: "Hydrogen Framework",
        duration: "4-6 weeks",
        skills: [
          "Hydrogen",
          "Server Components",
          "Oxygen Deployment",
          "Performance",
        ],
      },
      {
        phase: "Advanced",
        duration: "3-4 weeks",
        skills: ["Custom Apps", "Webhooks", "Payment Integration", "Analytics"],
      },
    ],
    jobRoles: [
      "Shopify Developer",
      "E-commerce Developer",
      "Frontend Developer",
      "Full Stack Developer",
    ],
    avgSalary: "₹4,00,000 - ₹12,00,000",
    difficulty: "Intermediate",
  },
];

export default function TechStack() {
  const [selectedStack, setSelectedStack] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "Mobile",
    "Cloud",
    "Data Science",
    "AI/ML",
    "DevOps",
    "CMS",
    "E-commerce",
  ];

  const filteredStacks =
    selectedCategory === "All"
      ? techStacks
      : techStacks.filter((stack) => stack.category === selectedCategory);

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
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span> Learning Paths
          </h1>
          <p className="text-xl text-foreground/70">
            Explore comprehensive technology stacks and master complete
            development workflows
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-xl text-center">
            <Layers className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">{techStacks.length}</div>
            <div className="text-foreground/70 text-sm">Tech Stacks</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Code2 className="h-8 w-8 text-teal-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">50+</div>
            <div className="text-foreground/70 text-sm">Technologies</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Brain className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">100+</div>
            <div className="text-foreground/70 text-sm">Skills to Learn</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Briefcase className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">200+</div>
            <div className="text-foreground/70 text-sm">Job Roles</div>
          </div>
        </div>

        {/* Tech Stacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStacks.map((stack) => (
            <Card
              key={stack.id}
              className="glass-card hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedStack(stack)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stack.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                    >
                      {stack.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{stack.name}</CardTitle>
                      <Badge className="text-xs mt-1" variant="secondary">
                        {stack.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge
                    className={`text-xs ${getDifficultyColor(stack.difficulty)}`}
                  >
                    {stack.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {stack.description}
                </CardDescription>

                {/* Key Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">
                    Key Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {stack.languages.slice(0, 3).map((lang, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/20 text-primary rounded-md text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                    {stack.languages.length > 3 && (
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/60">
                        +{stack.languages.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Salary Range */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">
                      Avg. Salary:
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {stack.avgSalary}
                    </span>
                  </div>
                </div>

                {/* Learning Duration */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">
                      Learning Time:
                    </span>
                    <span className="text-sm font-medium">
                      {stack.learningPath.reduce((total, phase) => {
                        const weeks = parseInt(phase.duration.split("-")[0]);
                        return total + weeks;
                      }, 0)}
                      -
                      {stack.learningPath.reduce((total, phase) => {
                        const weeks = parseInt(
                          phase.duration.split("-")[1]?.split(" ")[0] ||
                            phase.duration.split("-")[0],
                        );
                        return total + weeks;
                      }, 0)}{" "}
                      weeks
                    </span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  View Learning Path
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Stack Modal */}
        <Dialog
          open={!!selectedStack}
          onOpenChange={() => setSelectedStack(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedStack && (
              <>
                <DialogHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${selectedStack.color} flex items-center justify-center text-white`}
                    >
                      {selectedStack.icon}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl">
                        {selectedStack.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {selectedStack.description}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="glass-card p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Category</h4>
                      <Badge variant="secondary">
                        {selectedStack.category}
                      </Badge>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Difficulty</h4>
                      <Badge
                        className={getDifficultyColor(selectedStack.difficulty)}
                      >
                        {selectedStack.difficulty}
                      </Badge>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Avg. Salary</h4>
                      <span className="text-primary font-medium">
                        {selectedStack.avgSalary}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedStack.languages.map((lang, index) => (
                          <Badge key={index} variant="outline">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Frameworks & Libraries
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedStack.frameworks.map((framework, index) => (
                          <Badge key={index} variant="outline">
                            {framework}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Tools & Databases
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedStack.tools.map((tool, index) => (
                          <Badge key={index} variant="outline">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        IDEs & Editors
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedStack.ide.map((ide, index) => (
                          <Badge key={index} variant="outline">
                            {ide}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Learning Path */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Learning Roadmap
                    </h3>
                    <div className="space-y-4">
                      {selectedStack.learningPath.map((phase, index) => (
                        <div key={index} className="glass-card p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-primary">
                              Phase {index + 1}: {phase.phase}
                            </h4>
                            <Badge variant="secondary">{phase.duration}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {phase.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-muted rounded-md text-xs text-foreground/80"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Job Roles */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Career Opportunities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStack.jobRoles.map((role, index) => (
                        <Badge
                          key={index}
                          className="bg-primary/20 text-primary"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Link to="/learn" className="flex-1">
                      <Button className="w-full">
                        <Code2 className="h-4 w-4 mr-2" />
                        Start Learning
                      </Button>
                    </Link>
                    <Link to="/jobs" className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Find Jobs
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <Layers className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Master Your Chosen Tech Stack
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Follow structured learning paths, build real projects, and land
              your dream job with comprehensive tech stack knowledge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Code2 className="h-5 w-5 mr-2" />
                  Start Learning Journey
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" size="lg">
                  <Globe className="h-5 w-5 mr-2" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
