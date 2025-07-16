// Comprehensive programming language data

/**
 * @typedef {Object} Framework
 * @property {string} name
 * @property {string} description
 * @property {string} type
 * @property {string} popularity
 * @property {string} learningCurve
 * @property {string[]} tutorialLinks
 */

/**
 * @typedef {Object} JobOpportunity
 * @property {string} title
 * @property {string} averageSalary
 * @property {string} demand
 * @property {string} description
 */

/**
 * @typedef {Object} PracticeSite
 * @property {string} name
 * @property {string} description
 * @property {string} url
 * @property {string} type
 */

/**
 * @typedef {Object} LanguageDetail
 * @property {number} id
 * @property {string} name
 * @property {string} icon
 * @property {string} description
 * @property {string} detailedDescription
 * @property {string} level
 * @property {string} duration
 * @property {string} students
 * @property {number} rating
 * @property {number} modules
 * @property {number} projects
 * @property {string} color
 * @property {string[]} coreTopics
 * @property {Framework[]} frameworks
 * @property {JobOpportunity[]} jobOpportunities
 * @property {Array<{title: string, channel: string, description: string, url: string, duration: string}>} topTutorials
 * @property {PracticeSite[]} practiceSites
 * @property {Array<{phase: string, duration: string, topics: string[], projects: string[]}>} learningRoadmap
 */

/**
 * @type {LanguageDetail[]}
 */
export const languageData = [
  {
    id: 1,
    name: "Python",
    icon: "🐍",
    description: "Perfect for beginners, AI, and data science",
    detailedDescription:
      "Python is a high-level, interpreted programming language known for its simple syntax and readability. It's excellent for beginners and powerful enough for complex applications in data science, web development, automation, and AI.",
    level: "Beginner",
    duration: "10 weeks",
    students: "3.2M",
    rating: 4.9,
    modules: 30,
    projects: 12,
    color: "from-blue-500 to-green-500",

    coreTopics: [
      "Variables and Data Types",
      "Control Structures (if/else, loops)",
      "Functions and Modules",
      "Object-Oriented Programming",
      "File Handling",
      "Exception Handling",
      "Libraries and Packages",
      "Data Structures (Lists, Dictionaries, Sets)",
      "Regular Expressions",
      "Database Connectivity",
    ],

    frameworks: [
      {
        name: "Django",
        description: "High-level Python web framework for rapid development",
        type: "Web Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=F5mRW0jo-U4",
          "https://www.youtube.com/watch?v=rHux0gMZ3Eg",
        ],
      },
      {
        name: "Flask",
        description: "Lightweight WSGI web application framework",
        type: "Web Framework",
        popularity: "High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=Z1RJmh_OqeA",
          "https://www.youtube.com/watch?v=mqhxxeeTbu0",
        ],
      },
      {
        name: "FastAPI",
        description: "Modern, fast web framework for building APIs",
        type: "API Framework",
        popularity: "Growing",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=7t2alSnE2-I",
          "https://www.youtube.com/watch?v=0sOvCWFmrtA",
        ],
      },
      {
        name: "NumPy",
        description: "Fundamental package for scientific computing",
        type: "Data Science Library",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=QUT1VHiLmmI",
          "https://www.youtube.com/watch?v=GB9ByFAIAH4",
        ],
      },
      {
        name: "Pandas",
        description: "Data manipulation and analysis library",
        type: "Data Science Library",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=vmEHCJofslg",
          "https://www.youtube.com/watch?v=PcvsOzlldE4",
        ],
      },
      {
        name: "TensorFlow",
        description: "Open source machine learning framework",
        type: "ML Framework",
        popularity: "Very High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=tPYj3fFJGjk",
          "https://www.youtube.com/watch?v=hvskKAEbGrA",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Python Developer",
        averageSalary: "₹62,25,000 - ₹1,07,90,000",
        demand: "Very High",
        description:
          "Build web applications, APIs, and backend systems using Python frameworks",
      },
      {
        title: "Data Scientist",
        averageSalary: "₹70,55,000 - ₹1,32,80,000",
        demand: "Very High",
        description:
          "Analyze data and build machine learning models using Python libraries",
      },
      {
        title: "DevOps Engineer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "High",
        description:
          "Automate infrastructure and deployment processes using Python scripts",
      },
      {
        title: "Machine Learning Engineer",
        averageSalary: "₹74,70,000 - ₹1,41,10,000",
        demand: "Very High",
        description: "Deploy and maintain ML models in production environments",
      },
    ],

    topTutorials: [
      {
        title: "Python Full Course for Beginners",
        channel: "Programming with Mosh",
        description: "Complete Python tutorial covering all fundamentals",
        url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
        duration: "6 hours",
      },
      {
        title: "Python Tutorial for Absolute Beginners",
        channel: "CS Dojo",
        description: "Step-by-step Python programming tutorial",
        url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
        duration: "1 hour",
      },
      {
        title: "Automate the Boring Stuff with Python",
        channel: "Al Sweigart",
        description: "Practical Python automation projects",
        url: "https://www.youtube.com/watch?v=1F_OgqRuSdI",
        duration: "9 hours",
      },
      {
        title: "Python Django Web Framework",
        channel: "Traversy Media",
        description: "Complete Django tutorial for web development",
        url: "https://www.youtube.com/watch?v=F5mRW0jo-U4",
        duration: "1.5 hours",
      },
      {
        title: "Python Data Science Handbook",
        channel: "Corey Schafer",
        description: "Data science with Python using pandas and numpy",
        url: "https://www.youtube.com/watch?v=vmEHCJofslg",
        duration: "1 hour",
      },
    ],

    practiceSites: [
      {
        name: "LeetCode",
        description: "Algorithmic coding challenges with Python support",
        url: "https://leetcode.com",
        type: "Coding Challenges",
      },
      {
        name: "HackerRank",
        description: "Python-specific programming challenges and domains",
        url: "https://hackerrank.com",
        type: "Skill Assessment",
      },
      {
        name: "Python.org",
        description: "Official Python documentation and tutorials",
        url: "https://python.org",
        type: "Documentation",
      },
      {
        name: "Repl.it",
        description: "Online Python IDE for quick experimentation",
        url: "https://replit.com",
        type: "Online IDE",
      },
      {
        name: "Kaggle",
        description: "Data science competitions and datasets",
        url: "https://kaggle.com",
        type: "Data Science",
      },
    ],

    learningRoadmap: [
      {
        phase: "Beginner (Weeks 1-3)",
        duration: "3 weeks",
        topics: [
          "Python Syntax",
          "Variables & Data Types",
          "Control Structures",
          "Functions",
        ],
        projects: [
          "Calculator",
          "Number Guessing Game",
          "Simple Text Processor",
        ],
      },
      {
        phase: "Intermediate (Weeks 4-6)",
        duration: "3 weeks",
        topics: [
          "OOP",
          "File Handling",
          "Modules & Packages",
          "Error Handling",
        ],
        projects: ["Contact Manager", "File Organizer", "Web Scraper"],
      },
      {
        phase: "Advanced (Weeks 7-10)",
        duration: "4 weeks",
        topics: [
          "Advanced Libraries",
          "Web Frameworks",
          "Database Integration",
          "Testing",
        ],
        projects: ["Web Application", "Data Analysis Tool", "API Development"],
      },
    ],
  },

  {
    id: 2,
    name: "JavaScript",
    icon: "🟨",
    description: "The language of the web - frontend and backend",
    detailedDescription:
      "JavaScript is a versatile programming language that powers the modern web. Originally created for browser scripting, it now runs on servers, mobile apps, and desktop applications. Essential for web development.",
    level: "Beginner",
    duration: "8 weeks",
    students: "2.5M",
    rating: 4.8,
    modules: 24,
    projects: 8,
    color: "from-yellow-500 to-amber-500",

    coreTopics: [
      "Variables, Data Types & Operators",
      "Functions and Scope",
      "Objects and Arrays",
      "DOM Manipulation",
      "Event Handling",
      "Asynchronous Programming (Promises, Async/Await)",
      "ES6+ Features",
      "Closures and Hoisting",
      "Prototypes and Inheritance",
      "Error Handling",
    ],

    frameworks: [
      {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        type: "Frontend Library",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
          "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        ],
      },
      {
        name: "Vue.js",
        description: "Progressive framework for building user interfaces",
        type: "Frontend Framework",
        popularity: "High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
          "https://www.youtube.com/watch?v=4deVCNJq3qc",
        ],
      },
      {
        name: "Angular",
        description:
          "Platform for building mobile and desktop web applications",
        type: "Frontend Framework",
        popularity: "High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=k5E2AVpwsko",
          "https://www.youtube.com/watch?v=3qBXWUpoPHo",
        ],
      },
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
        type: "Backend Runtime",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
          "https://www.youtube.com/watch?v=TlB_eWDSMt4",
        ],
      },
      {
        name: "Express.js",
        description: "Fast, minimalist web framework for Node.js",
        type: "Backend Framework",
        popularity: "Very High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=L72fhGm1tfE",
          "https://www.youtube.com/watch?v=pKd0Rpw7O48",
        ],
      },
      {
        name: "Next.js",
        description: "React framework for production applications",
        type: "Full-stack Framework",
        popularity: "Growing",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=mTz0GXj8NN0",
          "https://www.youtube.com/watch?v=1WmNXEVia8I",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Frontend Developer",
        averageSalary: "₹53,95,000 - ₹1,07,90,000",
        demand: "Very High",
        description:
          "Build user interfaces and web applications using JavaScript frameworks",
      },
      {
        title: "Full Stack Developer",
        averageSalary: "₹62,25,000 - ₹1,24,50,000",
        demand: "Very High",
        description:
          "Develop both frontend and backend using JavaScript technologies",
      },
      {
        title: "Node.js Developer",
        averageSalary: "₹58,10,000 - ₹1,16,20,000",
        demand: "High",
        description: "Build server-side applications and APIs using Node.js",
      },
      {
        title: "React Developer",
        averageSalary: "₹58,10,000 - ₹1,12,05,000",
        demand: "Very High",
        description: "Specialize in building React applications and components",
      },
    ],

    topTutorials: [
      {
        title: "JavaScript Full Course for Beginners",
        channel: "freeCodeCamp",
        description: "Complete JavaScript tutorial covering all fundamentals",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        duration: "3.5 hours",
      },
      {
        title: "Modern JavaScript Tutorial",
        channel: "The Net Ninja",
        description: "ES6+ features and modern JavaScript development",
        url: "https://www.youtube.com/watch?v=iWOYAxlnaww",
        duration: "12 hours",
      },
      {
        title: "JavaScript DOM Manipulation",
        channel: "Traversy Media",
        description: "Learn to manipulate the DOM with vanilla JavaScript",
        url: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        duration: "1.5 hours",
      },
      {
        title: "Async JavaScript Tutorial",
        channel: "Academind",
        description:
          "Master promises, async/await, and asynchronous programming",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        duration: "2.5 hours",
      },
      {
        title: "JavaScript Projects for Beginners",
        channel: "Florin Pop",
        description: "Build 10 JavaScript projects to practice your skills",
        url: "https://www.youtube.com/watch?v=dtKciwk_si4",
        duration: "6 hours",
      },
    ],

    practiceSites: [
      {
        name: "Codewars",
        description: "JavaScript coding challenges and kata exercises",
        url: "https://codewars.com",
        type: "Coding Challenges",
      },
      {
        name: "JavaScript30",
        description: "30 Day Vanilla JS Coding Challenge",
        url: "https://javascript30.com",
        type: "Project Based",
      },
      {
        name: "FreeCodeCamp",
        description: "Interactive JavaScript curriculum and projects",
        url: "https://freecodecamp.org",
        type: "Interactive Learning",
      },
      {
        name: "JSFiddle",
        description: "Online JavaScript code editor and sharing platform",
        url: "https://jsfiddle.net",
        type: "Online IDE",
      },
      {
        name: "MDN Web Docs",
        description: "Comprehensive JavaScript documentation and guides",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        type: "Documentation",
      },
    ],

    learningRoadmap: [
      {
        phase: "Beginner (Weeks 1-2)",
        duration: "2 weeks",
        topics: [
          "Syntax & Variables",
          "Functions",
          "Arrays & Objects",
          "DOM Basics",
        ],
        projects: ["Interactive Calculator", "To-Do List", "Digital Clock"],
      },
      {
        phase: "Intermediate (Weeks 3-5)",
        duration: "3 weeks",
        topics: ["ES6+ Features", "Async Programming", "APIs", "Local Storage"],
        projects: ["Weather App", "Quiz Application", "Movie Database"],
      },
      {
        phase: "Advanced (Weeks 6-8)",
        duration: "3 weeks",
        topics: ["Frameworks", "Testing", "Build Tools", "Performance"],
        projects: ["React Application", "Node.js API", "Full Stack Project"],
      },
    ],
  },

  // TypeScript
  {
    id: 3,
    name: "TypeScript",
    icon: "🔷",
    description:
      "Add type safety to JavaScript for better development experience",
    detailedDescription:
      "TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions. Developed by Microsoft, it helps catch errors early and improves code quality and maintainability.",
    level: "Intermediate",
    duration: "6 weeks",
    students: "1.2M",
    rating: 4.8,
    modules: 18,
    projects: 5,
    color: "from-blue-500 to-indigo-500",

    coreTopics: [
      "TypeScript Basics & Setup",
      "Type Annotations & Inference",
      "Interfaces & Type Aliases",
      "Classes & Inheritance",
      "Generics",
      "Enums & Literal Types",
      "Modules & Namespaces",
      "Decorators",
      "Advanced Types",
      "TypeScript with React/Node",
    ],

    frameworks: [
      {
        name: "Angular",
        description: "Built with TypeScript from the ground up",
        type: "Frontend Framework",
        popularity: "High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=k5E2AVpwsko",
          "https://www.youtube.com/watch?v=3qBXWUpoPHo",
        ],
      },
      {
        name: "NestJS",
        description: "Node.js framework built with TypeScript",
        type: "Backend Framework",
        popularity: "Growing",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=GHTA143_b-s",
          "https://www.youtube.com/watch?v=F_oOtaxb0L8",
        ],
      },
      {
        name: "Next.js with TypeScript",
        description: "React framework with full TypeScript support",
        type: "Full-stack Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
          "https://www.youtube.com/watch?v=1WmNXEVia8I",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "TypeScript Developer",
        averageSalary: "₹62,25,000 - ₹1,16,20,000",
        demand: "High",
        description: "Develop large-scale applications with type safety",
      },
      {
        title: "Frontend Developer (TypeScript)",
        averageSalary: "₹58,10,000 - ₹1,12,05,000",
        demand: "Very High",
        description:
          "Build frontend applications with TypeScript and modern frameworks",
      },
      {
        title: "Full Stack Developer",
        averageSalary: "₹66,40,000 - ₹1,28,65,000",
        demand: "High",
        description: "Develop end-to-end applications using TypeScript",
      },
    ],

    topTutorials: [
      {
        title: "TypeScript Course for Beginners",
        channel: "Academind",
        description: "Complete TypeScript tutorial from basics to advanced",
        url: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
        duration: "5 hours",
      },
      {
        title: "TypeScript Tutorial",
        channel: "Programming with Mosh",
        description: "Learn TypeScript fundamentals and best practices",
        url: "https://www.youtube.com/watch?v=d56mG7DezGs",
        duration: "1 hour",
      },
      {
        title: "TypeScript with React",
        channel: "Ben Awad",
        description: "Using TypeScript in React applications",
        url: "https://www.youtube.com/watch?v=Z5iWr6Srsj8",
        duration: "1.5 hours",
      },
      {
        title: "Advanced TypeScript",
        channel: "Matt Pocock",
        description: "Advanced TypeScript patterns and techniques",
        url: "https://www.youtube.com/watch?v=hBk4nV7q6-w",
        duration: "2 hours",
      },
      {
        title: "TypeScript Generics",
        channel: "Web Dev Simplified",
        description: "Master TypeScript generics with practical examples",
        url: "https://www.youtube.com/watch?v=nViEqpgwxHE",
        duration: "30 minutes",
      },
    ],

    practiceSites: [
      {
        name: "TypeScript Playground",
        description: "Official TypeScript online compiler and explorer",
        url: "https://typescriptlang.org/play",
        type: "Online IDE",
      },
      {
        name: "Type Challenges",
        description: "Collection of TypeScript type challenges",
        url: "https://github.com/type-challenges/type-challenges",
        type: "Type Challenges",
      },
      {
        name: "TypeScript Deep Dive",
        description: "Free TypeScript book and resource",
        url: "https://basarat.gitbook.io/typescript",
        type: "Documentation",
      },
      {
        name: "DefinitelyTyped",
        description: "Repository for TypeScript type definitions",
        url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
        type: "Type Definitions",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-2)",
        duration: "2 weeks",
        topics: ["TypeScript Setup", "Basic Types", "Interfaces", "Classes"],
        projects: ["Typed Calculator", "Contact Manager with Types"],
      },
      {
        phase: "Intermediate (Weeks 3-4)",
        duration: "2 weeks",
        topics: ["Generics", "Advanced Types", "Modules", "Decorators"],
        projects: ["Generic Data Store", "TypeScript API"],
      },
      {
        phase: "Advanced (Weeks 5-6)",
        duration: "2 weeks",
        topics: ["Framework Integration", "Testing", "Build Configuration"],
        projects: ["React TypeScript App", "Node.js TypeScript API"],
      },
    ],
  },

  // Go (Golang)
  {
    id: 4,
    name: "Go",
    icon: "🔵",
    description:
      "Modern programming language for cloud services and microservices",
    detailedDescription:
      "Go (Golang) is an open-source programming language developed by Google. It's designed for building simple, reliable, and efficient software. Known for its concurrency features and performance.",
    level: "Intermediate",
    duration: "8 weeks",
    students: "800K",
    rating: 4.7,
    modules: 20,
    projects: 7,
    color: "from-cyan-400 to-blue-600",

    coreTopics: [
      "Go Syntax & Variables",
      "Functions & Methods",
      "Structs & Interfaces",
      "Pointers & Memory Management",
      "Goroutines & Concurrency",
      "Channels & Select",
      "Packages & Modules",
      "Error Handling",
      "File I/O",
      "Testing in Go",
    ],

    frameworks: [
      {
        name: "Gin",
        description: "HTTP web framework written in Go",
        type: "Web Framework",
        popularity: "High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=qR0WnWL2o_Q",
          "https://www.youtube.com/watch?v=d_L64KT3SFM",
        ],
      },
      {
        name: "Echo",
        description: "High performance, minimalist Go web framework",
        type: "Web Framework",
        popularity: "Medium",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=_pww3NJuWnk",
          "https://www.youtube.com/watch?v=H7tbjKFSg58",
        ],
      },
      {
        name: "Fiber",
        description: "Express inspired web framework for Go",
        type: "Web Framework",
        popularity: "Growing",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=Iq2qT0fRhAA",
          "https://www.youtube.com/watch?v=3o40tWaAM8M",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Go Developer",
        averageSalary: "₹66,40,000 - ₹1,20,35,000",
        demand: "High",
        description: "Build scalable backend services and microservices",
      },
      {
        title: "DevOps Engineer",
        averageSalary: "₹70,55,000 - ₹1,28,65,000",
        demand: "Very High",
        description: "Develop infrastructure tools and automation systems",
      },
      {
        title: "Cloud Engineer",
        averageSalary: "₹74,70,000 - ₹1,32,80,000",
        demand: "Very High",
        description: "Build cloud-native applications and services",
      },
      {
        title: "Backend Engineer",
        averageSalary: "₹70,55,000 - ₹1,24,50,000",
        demand: "High",
        description: "Develop high-performance backend systems",
      },
    ],

    topTutorials: [
      {
        title: "Go Programming Tutorial",
        channel: "freeCodeCamp",
        description: "Complete Go programming course for beginners",
        url: "https://www.youtube.com/watch?v=YS4e4q9oBaU",
        duration: "7 hours",
      },
      {
        title: "Learn Go Programming",
        channel: "Tech With Tim",
        description: "Go programming tutorial series",
        url: "https://www.youtube.com/watch?v=8uiZC0l4Ajw",
        duration: "2 hours",
      },
      {
        title: "Go Concurrency Patterns",
        channel: "Google Developers",
        description: "Advanced Go concurrency techniques",
        url: "https://www.youtube.com/watch?v=f6kdp27TYZs",
        duration: "1 hour",
      },
      {
        title: "Go Web Development",
        channel: "Traversy Media",
        description: "Building web applications with Go",
        url: "https://www.youtube.com/watch?v=SqrbIlUwR0U",
        duration: "2.5 hours",
      },
      {
        title: "Go Microservices",
        channel: "Nic Jackson",
        description: "Building microservices with Go",
        url: "https://www.youtube.com/watch?v=VzBGi_n65iU",
        duration: "4 hours",
      },
    ],

    practiceSites: [
      {
        name: "Go Playground",
        description: "Official Go online compiler and sharing tool",
        url: "https://play.golang.org",
        type: "Online IDE",
      },
      {
        name: "Go by Example",
        description: "Hands-on introduction to Go using annotated examples",
        url: "https://gobyexample.com",
        type: "Interactive Tutorial",
      },
      {
        name: "Exercism Go Track",
        description: "Practice Go with coding exercises and mentorship",
        url: "https://exercism.org/tracks/go",
        type: "Coding Exercises",
      },
      {
        name: "LeetCode Go",
        description: "Solve algorithm problems using Go",
        url: "https://leetcode.com",
        type: "Algorithm Practice",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: [
          "Go Basics",
          "Structs & Methods",
          "Interfaces",
          "Error Handling",
        ],
        projects: ["CLI Tool", "HTTP Client", "JSON Parser"],
      },
      {
        phase: "Intermediate (Weeks 4-6)",
        duration: "3 weeks",
        topics: ["Goroutines", "Channels", "Packages", "Testing"],
        projects: ["Concurrent File Processor", "Web Scraper", "REST API"],
      },
      {
        phase: "Advanced (Weeks 7-8)",
        duration: "2 weeks",
        topics: ["Advanced Concurrency", "Performance", "Deployment"],
        projects: ["Microservice", "Load Balancer", "Distributed System"],
      },
    ],
  },

  // Rust
  {
    id: 5,
    name: "Rust",
    icon: "🦀",
    description:
      "Systems programming language focused on safety and performance",
    detailedDescription:
      "Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency. It prevents segfaults and guarantees thread safety.",
    level: "Advanced",
    duration: "12 weeks",
    students: "600K",
    rating: 4.8,
    modules: 25,
    projects: 8,
    color: "from-orange-600 to-red-600",

    coreTopics: [
      "Ownership & Borrowing",
      "Data Types & Variables",
      "Functions & Control Flow",
      "Structs & Enums",
      "Pattern Matching",
      "Error Handling",
      "Traits & Generics",
      "Lifetimes",
      "Concurrency",
      "Unsafe Rust",
    ],

    frameworks: [
      {
        name: "Actix Web",
        description: "Powerful, pragmatic, and extremely fast web framework",
        type: "Web Framework",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=dZN_AuJCEr4",
          "https://www.youtube.com/watch?v=Oife6s3UCoo",
        ],
      },
      {
        name: "Rocket",
        description:
          "Web framework for Rust that makes it simple to write fast, secure web applications",
        type: "Web Framework",
        popularity: "Medium",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=cKKHUv5YDtM",
          "https://www.youtube.com/watch?v=iy68vvJ7jh4",
        ],
      },
      {
        name: "Tokio",
        description: "Asynchronous runtime for Rust",
        type: "Async Runtime",
        popularity: "Very High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=Iapc-qGTEBQ",
          "https://www.youtube.com/watch?v=bRg_bRwLV_c",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Rust Developer",
        averageSalary: "₹74,70,000 - ₹1,32,80,000",
        demand: "Growing",
        description:
          "Build system-level applications and high-performance software",
      },
      {
        title: "Systems Programmer",
        averageSalary: "₹78,85,000 - ₹1,41,10,000",
        demand: "Medium",
        description:
          "Develop operating systems, drivers, and embedded software",
      },
      {
        title: "Blockchain Developer",
        averageSalary: "₹83,00,000 - ₹1,49,40,000",
        demand: "High",
        description: "Build cryptocurrency and blockchain applications",
      },
      {
        title: "Performance Engineer",
        averageSalary: "₹74,70,000 - ₹1,36,95,000",
        demand: "Medium",
        description: "Optimize critical performance systems",
      },
    ],

    topTutorials: [
      {
        title: "Rust Programming Course",
        channel: "freeCodeCamp",
        description: "Complete Rust programming tutorial for beginners",
        url: "https://www.youtube.com/watch?v=zF34dRivLOw",
        duration: "5.5 hours",
      },
      {
        title: "Rust Tutorial",
        channel: "Derek Banas",
        description: "Learn Rust programming in one video",
        url: "https://www.youtube.com/watch?v=ygL_xcavzQ4",
        duration: "1.5 hours",
      },
      {
        title: "Rust Ownership and Borrowing",
        channel: "Let's Get Rusty",
        description: "Deep dive into Rust's ownership system",
        url: "https://www.youtube.com/watch?v=VFIOSWy93H0",
        duration: "20 minutes",
      },
      {
        title: "Rust Web Development",
        channel: "Traversy Media",
        description: "Building web applications with Rust",
        url: "https://www.youtube.com/watch?v=yQSEXnf5fNo",
        duration: "1 hour",
      },
      {
        title: "Async Rust",
        channel: "Jon Gjengset",
        description: "Advanced asynchronous programming in Rust",
        url: "https://www.youtube.com/watch?v=9_3krAQtD2k",
        duration: "3 hours",
      },
    ],

    practiceSites: [
      {
        name: "Rust Playground",
        description: "Official Rust online compiler",
        url: "https://play.rust-lang.org",
        type: "Online IDE",
      },
      {
        name: "Rustlings",
        description:
          "Small exercises to get you used to reading and writing Rust code",
        url: "https://github.com/rust-lang/rustlings",
        type: "Interactive Exercises",
      },
      {
        name: "Exercism Rust Track",
        description: "Practice Rust with coding exercises and mentorship",
        url: "https://exercism.org/tracks/rust",
        type: "Coding Exercises",
      },
      {
        name: "The Rust Programming Language Book",
        description: "Official Rust book and documentation",
        url: "https://doc.rust-lang.org/book",
        type: "Documentation",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-4)",
        duration: "4 weeks",
        topics: [
          "Ownership & Borrowing",
          "Basic Syntax",
          "Structs & Enums",
          "Error Handling",
        ],
        projects: ["Command Line Tool", "Text Parser", "File Manager"],
      },
      {
        phase: "Intermediate (Weeks 5-8)",
        duration: "4 weeks",
        topics: ["Traits & Generics", "Collections", "Testing", "Modules"],
        projects: ["HTTP Client", "JSON Parser", "Database Library"],
      },
      {
        phase: "Advanced (Weeks 9-12)",
        duration: "4 weeks",
        topics: [
          "Concurrency",
          "Unsafe Rust",
          "Performance",
          "Web Development",
        ],
        projects: ["Web Server", "Concurrent File Processor", "System Tool"],
      },
    ],
  },

  // Java
  {
    id: 6,
    name: "Java",
    icon: "☕",
    description: "Enterprise applications and Android development",
    detailedDescription:
      "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It's widely used for enterprise development, Android apps, and large-scale systems.",
    level: "Intermediate",
    duration: "12 weeks",
    students: "2.8M",
    rating: 4.7,
    modules: 28,
    projects: 10,
    color: "from-orange-500 to-red-500",

    coreTopics: [
      "Java Syntax & OOP Concepts",
      "Classes, Objects & Inheritance",
      "Polymorphism & Abstraction",
      "Collections Framework",
      "Exception Handling",
      "Multithreading",
      "File I/O & Serialization",
      "JDBC & Database Connectivity",
      "Generics & Annotations",
      "Lambda Expressions & Streams",
    ],

    frameworks: [
      {
        name: "Spring Framework",
        description:
          "Comprehensive programming and configuration model for modern Java-based enterprise applications",
        type: "Enterprise Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=If1Lw4pLLEo",
          "https://www.youtube.com/watch?v=35EQXmHKZYs",
        ],
      },
      {
        name: "Spring Boot",
        description:
          "Simplifies the bootstrapping and development of Spring applications",
        type: "Web Framework",
        popularity: "Very High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=msXL2oDexqw",
          "https://www.youtube.com/watch?v=9SGDpanrc8U",
        ],
      },
      {
        name: "Hibernate",
        description: "Object-relational mapping framework for Java",
        type: "ORM Framework",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=JR7-EdxDSf0",
          "https://www.youtube.com/watch?v=PMR0ld5h938",
        ],
      },
      {
        name: "Android SDK",
        description: "Software development kit for Android mobile applications",
        type: "Mobile Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=fis26HvvDII",
          "https://www.youtube.com/watch?v=EOfCEhWq8sg",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Java Developer",
        averageSalary: "₹62,25,000 - ₹1,16,20,000",
        demand: "Very High",
        description: "Develop enterprise applications and web services",
      },
      {
        title: "Android Developer",
        averageSalary: "₹58,10,000 - ₹1,07,90,000",
        demand: "High",
        description: "Build mobile applications for Android platform",
      },
      {
        title: "Full Stack Java Developer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "High",
        description: "Develop end-to-end Java applications",
      },
      {
        title: "Enterprise Architect",
        averageSalary: "₹99,60,000 - ₹1,66,00,000",
        demand: "Medium",
        description: "Design large-scale enterprise systems",
      },
    ],

    topTutorials: [
      {
        title: "Java Full Course",
        channel: "Programming with Mosh",
        description: "Complete Java tutorial for beginners",
        url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
        duration: "2.5 hours",
      },
      {
        title: "Java Tutorial for Beginners",
        channel: "Coding with John",
        description: "Learn Java programming from scratch",
        url: "https://www.youtube.com/watch?v=A74TOX803D0",
        duration: "9 hours",
      },
      {
        title: "Spring Boot Tutorial",
        channel: "Java Brains",
        description: "Complete Spring Boot framework tutorial",
        url: "https://www.youtube.com/watch?v=msXL2oDexqw",
        duration: "4 hours",
      },
      {
        title: "Java 8 Features",
        channel: "in28Minutes",
        description: "Learn modern Java features and best practices",
        url: "https://www.youtube.com/watch?v=1OpAgZvYXLQ",
        duration: "1 hour",
      },
      {
        title: "Android Development",
        channel: "TVAC Studio",
        description: "Complete Android development course",
        url: "https://www.youtube.com/watch?v=fis26HvvDII",
        duration: "12 hours",
      },
    ],

    practiceSites: [
      {
        name: "Oracle Java Documentation",
        description: "Official Java documentation and tutorials",
        url: "https://docs.oracle.com/javase",
        type: "Documentation",
      },
      {
        name: "HackerRank Java",
        description: "Java programming challenges and assessments",
        url: "https://hackerrank.com/domains/java",
        type: "Coding Challenges",
      },
      {
        name: "Spring Initializr",
        description: "Generate Spring Boot projects quickly",
        url: "https://start.spring.io",
        type: "Project Generator",
      },
      {
        name: "IntelliJ IDEA",
        description: "Popular Java IDE for development",
        url: "https://jetbrains.com/idea",
        type: "IDE",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-4)",
        duration: "4 weeks",
        topics: [
          "Java Basics",
          "OOP Principles",
          "Collections",
          "Exception Handling",
        ],
        projects: ["Calculator", "Student Management System", "Library System"],
      },
      {
        phase: "Intermediate (Weeks 5-8)",
        duration: "4 weeks",
        topics: ["Multithreading", "JDBC", "Generics", "File I/O"],
        projects: [
          "Multi-threaded Server",
          "Database Application",
          "File Manager",
        ],
      },
      {
        phase: "Advanced (Weeks 9-12)",
        duration: "4 weeks",
        topics: [
          "Spring Framework",
          "Web Development",
          "Testing",
          "Deployment",
        ],
        projects: ["REST API", "Web Application", "Enterprise Project"],
      },
    ],
  },

  // Continue with remaining languages... (I'll add a few more to demonstrate the pattern)

  // Kotlin
  {
    id: 7,
    name: "Kotlin",
    icon: "🟣",
    description: "Modern programming language for Android and JVM development",
    detailedDescription:
      "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version relies on the Java Class Library.",
    level: "Intermediate",
    duration: "8 weeks",
    students: "900K",
    rating: 4.6,
    modules: 22,
    projects: 8,
    color: "from-purple-500 to-indigo-600",

    coreTopics: [
      "Kotlin Syntax & Variables",
      "Functions & Lambdas",
      "Classes & Objects",
      "Inheritance & Interfaces",
      "Data Classes & Sealed Classes",
      "Collections & Generics",
      "Coroutines & Async Programming",
      "Extension Functions",
      "Null Safety",
      "Interoperability with Java",
    ],

    frameworks: [
      {
        name: "Android SDK",
        description: "Primary language for Android development",
        type: "Mobile Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=F9UC9DY-vIU",
          "https://www.youtube.com/watch?v=fis26HvvDII",
        ],
      },
      {
        name: "Ktor",
        description: "Framework for building asynchronous servers and clients",
        type: "Web Framework",
        popularity: "Growing",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=vCNT8-SvEwM",
          "https://www.youtube.com/watch?v=5jKKV4UpDjI",
        ],
      },
      {
        name: "Spring Boot with Kotlin",
        description: "Building Spring applications with Kotlin",
        type: "Web Framework",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=7GpCPxgEj-Y",
          "https://www.youtube.com/watch?v=OMQw_LrC8p8",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Android Developer (Kotlin)",
        averageSalary: "₹58,10,000 - ₹1,12,05,000",
        demand: "Very High",
        description: "Develop native Android applications using Kotlin",
      },
      {
        title: "Kotlin Developer",
        averageSalary: "₹62,25,000 - ₹1,16,20,000",
        demand: "High",
        description: "Build backend services and applications with Kotlin",
      },
      {
        title: "Mobile App Developer",
        averageSalary: "₹53,95,000 - ₹1,03,75,000",
        demand: "High",
        description: "Create cross-platform mobile applications",
      },
    ],

    topTutorials: [
      {
        title: "Kotlin Course for Beginners",
        channel: "freeCodeCamp",
        description: "Complete Kotlin programming tutorial",
        url: "https://www.youtube.com/watch?v=F9UC9DY-vIU",
        duration: "2.5 hours",
      },
      {
        title: "Kotlin Android Development",
        channel: "Philipp Lackner",
        description: "Android development with Kotlin",
        url: "https://www.youtube.com/watch?v=HwoxKWPIqds",
        duration: "10 hours",
      },
      {
        title: "Kotlin Coroutines",
        channel: "Kotlin by JetBrains",
        description: "Asynchronous programming with Kotlin coroutines",
        url: "https://www.youtube.com/watch?v=_hfBv0a09Jc",
        duration: "1 hour",
      },
      {
        title: "Kotlin for Java Developers",
        channel: "IntelliJ IDEA",
        description: "Transitioning from Java to Kotlin",
        url: "https://www.youtube.com/watch?v=6P20npkvcb8",
        duration: "45 minutes",
      },
      {
        title: "Kotlin Web Development",
        channel: "JetBrains TV",
        description: "Building web applications with Kotlin",
        url: "https://www.youtube.com/watch?v=vCNT8-SvEwM",
        duration: "1.5 hours",
      },
    ],

    practiceSites: [
      {
        name: "Kotlin Playground",
        description: "Official Kotlin online compiler",
        url: "https://play.kotlinlang.org",
        type: "Online IDE",
      },
      {
        name: "Kotlin Koans",
        description: "Learn Kotlin syntax through interactive exercises",
        url: "https://kotlinlang.org/docs/koans.html",
        type: "Interactive Tutorial",
      },
      {
        name: "Android Developers",
        description: "Official Android development resources",
        url: "https://developer.android.com/kotlin",
        type: "Documentation",
      },
      {
        name: "Kotlin Documentation",
        description: "Official Kotlin documentation and guides",
        url: "https://kotlinlang.org/docs/home.html",
        type: "Documentation",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: ["Kotlin Basics", "OOP Concepts", "Collections", "Functions"],
        projects: ["Console Calculator", "To-Do List App", "Data Processor"],
      },
      {
        phase: "Intermediate (Weeks 4-6)",
        duration: "3 weeks",
        topics: ["Coroutines", "Extension Functions", "DSLs", "Testing"],
        projects: ["Android App", "REST API Client", "Async File Processor"],
      },
      {
        phase: "Advanced (Weeks 7-8)",
        duration: "2 weeks",
        topics: ["Advanced Coroutines", "Multiplatform", "Performance"],
        projects: ["Full Android App", "Multiplatform Library"],
      },
    ],
  },

  // C#
  {
    id: 8,
    name: "C#",
    icon: "🔷",
    description:
      "Microsoft's object-oriented programming language for .NET development",
    detailedDescription:
      "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
    level: "Intermediate",
    duration: "10 weeks",
    students: "1.5M",
    rating: 4.6,
    modules: 26,
    projects: 9,
    color: "from-indigo-500 to-purple-600",

    coreTopics: [
      "C# Syntax & Variables",
      "Object-Oriented Programming",
      "Collections & Generics",
      "Exception Handling",
      "LINQ & Lambda Expressions",
      "Async/Await Programming",
      "File I/O & Serialization",
      "Entity Framework",
      "ASP.NET Core",
      "Testing & Debugging",
    ],

    frameworks: [
      {
        name: "ASP.NET Core",
        description: "Cross-platform framework for building web applications",
        type: "Web Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=4IgC2Q5-yDE",
          "https://www.youtube.com/watch?v=hZ1DASYd9rk",
        ],
      },
      {
        name: ".NET Core",
        description: "Cross-platform runtime for C# applications",
        type: "Runtime Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=gcps3LNfNSM",
          "https://www.youtube.com/watch?v=YBNrUr9yBmw",
        ],
      },
      {
        name: "Blazor",
        description: "Framework for building interactive web UIs with C#",
        type: "Web Framework",
        popularity: "Growing",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=MetcuX1OHD0",
          "https://www.youtube.com/watch?v=9O6s2rWzLJA",
        ],
      },
      {
        name: "Unity",
        description: "Game development engine with C# scripting",
        type: "Game Engine",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=gB1F9G0JXOo",
          "https://www.youtube.com/watch?v=XtQMytORBmM",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "C# Developer",
        averageSalary: "₹58,10,000 - ₹1,12,05,000",
        demand: "High",
        description: "Develop desktop, web, and enterprise applications",
      },
      {
        title: ".NET Developer",
        averageSalary: "₹62,25,000 - ₹1,16,20,000",
        demand: "Very High",
        description: "Build applications using Microsoft .NET framework",
      },
      {
        title: "Game Developer",
        averageSalary: "₹49,80,000 - ₹99,60,000",
        demand: "Medium",
        description: "Create games using Unity and C#",
      },
      {
        title: "Full Stack .NET Developer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "High",
        description: "Develop complete web applications using .NET stack",
      },
    ],

    topTutorials: [
      {
        title: "C# Tutorial for Beginners",
        channel: "Programming with Mosh",
        description: "Complete C# course for beginners",
        url: "https://www.youtube.com/watch?v=gfkTfcpWqAY",
        duration: "4.5 hours",
      },
      {
        title: "C# Full Course",
        channel: "freeCodeCamp",
        description: "Learn C# programming from scratch",
        url: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
        duration: "4 hours",
      },
      {
        title: "ASP.NET Core Tutorial",
        channel: "IAmTimCorey",
        description: "Building web applications with ASP.NET Core",
        url: "https://www.youtube.com/watch?v=4IgC2Q5-yDE",
        duration: "3 hours",
      },
      {
        title: "Unity Game Development",
        channel: "Brackeys",
        description: "Game development with Unity and C#",
        url: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
        duration: "2 hours",
      },
      {
        title: "Entity Framework Core",
        channel: "kudvenkat",
        description: "Database development with Entity Framework",
        url: "https://www.youtube.com/watch?v=SryQxUeChMc",
        duration: "6 hours",
      },
    ],

    practiceSites: [
      {
        name: "Microsoft Learn",
        description: "Official Microsoft learning platform for C# and .NET",
        url: "https://docs.microsoft.com/learn/dotnet",
        type: "Interactive Learning",
      },
      {
        name: "C# Corner",
        description: "Community-driven platform for C# developers",
        url: "https://c-sharpcorner.com",
        type: "Community & Tutorials",
      },
      {
        name: "Visual Studio",
        description: "Premier IDE for C# development",
        url: "https://visualstudio.microsoft.com",
        type: "IDE",
      },
      {
        name: "LeetCode C#",
        description: "Practice algorithms and data structures in C#",
        url: "https://leetcode.com",
        type: "Coding Challenges",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: [
          "C# Basics",
          "OOP Principles",
          "Collections",
          "Exception Handling",
        ],
        projects: ["Console Calculator", "File Manager", "Banking System"],
      },
      {
        phase: "Intermediate (Weeks 4-7)",
        duration: "4 weeks",
        topics: [
          "LINQ",
          "Async Programming",
          "Entity Framework",
          "Web Development",
        ],
        projects: ["Web API", "Database App", "MVC Application"],
      },
      {
        phase: "Advanced (Weeks 8-10)",
        duration: "3 weeks",
        topics: ["Advanced Patterns", "Testing", "Deployment", "Performance"],
        projects: [
          "Enterprise Application",
          "Microservices",
          "Game Development",
        ],
      },
    ],
  },

  // SQL
  {
    id: 9,
    name: "SQL",
    icon: "🗄️",
    description: "Database query language for data management and analysis",
    detailedDescription:
      "SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    level: "Beginner",
    duration: "6 weeks",
    students: "1.8M",
    rating: 4.5,
    modules: 16,
    projects: 6,
    color: "from-blue-600 to-indigo-700",

    coreTopics: [
      "Basic SQL Syntax",
      "SELECT Statements & Filtering",
      "JOINs (INNER, LEFT, RIGHT, FULL)",
      "Aggregate Functions (COUNT, SUM, AVG)",
      "GROUP BY & HAVING",
      "Subqueries & CTEs",
      "Database Design & Normalization",
      "Indexes & Performance",
      "Stored Procedures & Functions",
      "Database Security & Constraints",
    ],

    frameworks: [
      {
        name: "MySQL",
        description: "Popular open-source relational database system",
        type: "Database System",
        popularity: "Very High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=7S_tz1z_5bA",
          "https://www.youtube.com/watch?v=9ylj9NR0Lcg",
        ],
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
        type: "Database System",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=qw--VYLpxG4",
          "https://www.youtube.com/watch?v=SpfIwlAYaKk",
        ],
      },
      {
        name: "Microsoft SQL Server",
        description: "Enterprise-grade database management system",
        type: "Database System",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=h0nxCDiD-zg",
          "https://www.youtube.com/watch?v=323H_mOOWQ4",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Database Administrator",
        averageSalary: "₹58,10,000 - ₹1,07,90,000",
        demand: "High",
        description: "Manage and maintain database systems and security",
      },
      {
        title: "Data Analyst",
        averageSalary: "₹49,80,000 - ₹95,45,000",
        demand: "Very High",
        description: "Analyze data using SQL queries and reporting tools",
      },
      {
        title: "Backend Developer",
        averageSalary: "₹58,10,000 - ₹1,16,20,000",
        demand: "Very High",
        description: "Build applications with strong database integration",
      },
      {
        title: "Data Engineer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "Very High",
        description: "Design and maintain data pipelines and warehouses",
      },
    ],

    topTutorials: [
      {
        title: "SQL Tutorial - Full Database Course for Beginners",
        channel: "freeCodeCamp",
        description: "Complete SQL course covering all fundamentals",
        url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        duration: "4.5 hours",
      },
      {
        title: "MySQL Tutorial for Beginners",
        channel: "Programming with Mosh",
        description: "Learn MySQL database management from scratch",
        url: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
        duration: "3 hours",
      },
      {
        title: "Advanced SQL Tutorial",
        channel: "Kudvenkat",
        description: "Advanced SQL concepts and optimization techniques",
        url: "https://www.youtube.com/watch?v=2Fn0WAyZV0E",
        duration: "8 hours",
      },
      {
        title: "PostgreSQL Tutorial",
        channel: "Amigoscode",
        description: "Complete PostgreSQL database tutorial",
        url: "https://www.youtube.com/watch?v=qw--VYLpxG4",
        duration: "5 hours",
      },
      {
        title: "SQL for Data Analysis",
        channel: "Data School",
        description: "Using SQL for data analysis and reporting",
        url: "https://www.youtube.com/watch?v=yudX_OMxgXs",
        duration: "2 hours",
      },
    ],

    practiceSites: [
      {
        name: "SQLBolt",
        description: "Interactive SQL lessons and exercises",
        url: "https://sqlbolt.com",
        type: "Interactive Tutorial",
      },
      {
        name: "HackerRank SQL",
        description: "SQL challenges and skill assessments",
        url: "https://hackerrank.com/domains/sql",
        type: "Coding Challenges",
      },
      {
        name: "W3Schools SQL",
        description: "SQL tutorial with tryit editor",
        url: "https://w3schools.com/sql",
        type: "Interactive Learning",
      },
      {
        name: "SQLiteOnline",
        description: "Online SQL database for practice",
        url: "https://sqliteonline.com",
        type: "Online Database",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-2)",
        duration: "2 weeks",
        topics: ["Basic Syntax", "SELECT Statements", "Filtering", "Sorting"],
        projects: ["Library Catalog Queries", "Sales Report Queries"],
      },
      {
        phase: "Intermediate (Weeks 3-4)",
        duration: "2 weeks",
        topics: ["JOINs", "Aggregate Functions", "GROUP BY", "Subqueries"],
        projects: ["E-commerce Analytics", "Customer Relationship Queries"],
      },
      {
        phase: "Advanced (Weeks 5-6)",
        duration: "2 weeks",
        topics: ["Database Design", "Performance", "Stored Procedures"],
        projects: ["Database Design Project", "Performance Optimization"],
      },
    ],
  },

  // Swift
  {
    id: 10,
    name: "Swift",
    icon: "🍎",
    description: "Apple's programming language for iOS and macOS development",
    detailedDescription:
      "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks.",
    level: "Intermediate",
    duration: "10 weeks",
    students: "800K",
    rating: 4.6,
    modules: 24,
    projects: 8,
    color: "from-orange-500 to-red-500",

    coreTopics: [
      "Swift Syntax & Variables",
      "Optionals & Optional Binding",
      "Functions & Closures",
      "Classes & Structures",
      "Protocols & Extensions",
      "Enumerations & Pattern Matching",
      "Memory Management (ARC)",
      "Generics & Associated Types",
      "Error Handling",
      "Concurrency (async/await)",
    ],

    frameworks: [
      {
        name: "UIKit",
        description: "Framework for building iOS user interfaces",
        type: "UI Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=09TeUXjzpKs",
          "https://www.youtube.com/watch?v=CwA1VWP0Ldw",
        ],
      },
      {
        name: "SwiftUI",
        description: "Modern declarative UI framework for Apple platforms",
        type: "UI Framework",
        popularity: "Growing",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=n1qabtjZ_jg",
          "https://www.youtube.com/watch?v=2OLpE8LyFkY",
        ],
      },
      {
        name: "Core Data",
        description: "Apple's object graph and persistence framework",
        type: "Data Framework",
        popularity: "High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=O7u9nYWjvKk",
          "https://www.youtube.com/watch?v=bAVlDekGmAY",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "iOS Developer",
        averageSalary: "₹58,10,000 - ₹1,16,20,000",
        demand: "High",
        description: "Develop native iOS applications for iPhone and iPad",
      },
      {
        title: "macOS Developer",
        averageSalary: "₹62,25,000 - ₹1,20,35,000",
        demand: "Medium",
        description: "Build desktop applications for macOS platform",
      },
      {
        title: "Mobile App Developer",
        averageSalary: "₹53,95,000 - ₹1,07,90,000",
        demand: "High",
        description: "Create mobile applications for Apple ecosystem",
      },
    ],

    topTutorials: [
      {
        title: "Swift Programming Tutorial",
        channel: "CodeWithChris",
        description: "Complete Swift programming course for beginners",
        url: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
        duration: "4 hours",
      },
      {
        title: "iOS App Development with Swift",
        channel: "Sean Allen",
        description: "Build real iOS apps with Swift and UIKit",
        url: "https://www.youtube.com/watch?v=09TeUXjzpKs",
        duration: "8 hours",
      },
      {
        title: "SwiftUI Tutorial for Beginners",
        channel: "Rebeloper",
        description: "Modern iOS development with SwiftUI",
        url: "https://www.youtube.com/watch?v=n1qabtjZ_jg",
        duration: "3 hours",
      },
      {
        title: "Advanced Swift Programming",
        channel: "Paul Hudson",
        description: "Advanced Swift concepts and best practices",
        url: "https://www.youtube.com/watch?v=YyUqvaFMZvs",
        duration: "2 hours",
      },
      {
        title: "Core Data with Swift",
        channel: "iOS Academy",
        description: "Data persistence in iOS applications",
        url: "https://www.youtube.com/watch?v=O7u9nYWjvKk",
        duration: "1.5 hours",
      },
    ],

    practiceSites: [
      {
        name: "Swift Playgrounds",
        description: "Apple's interactive Swift learning environment",
        url: "https://developer.apple.com/swift-playgrounds",
        type: "Interactive Learning",
      },
      {
        name: "Hacking with Swift",
        description: "Free Swift tutorials and projects",
        url: "https://hackingwithswift.com",
        type: "Tutorial Platform",
      },
      {
        name: "Ray Wenderlich",
        description: "iOS and Swift development tutorials",
        url: "https://raywenderlich.com",
        type: "Learning Platform",
      },
      {
        name: "Apple Developer Documentation",
        description: "Official Swift and iOS documentation",
        url: "https://developer.apple.com/documentation/swift",
        type: "Documentation",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: ["Swift Basics", "Optionals", "Functions", "OOP"],
        projects: ["Calculator App", "Todo List", "Weather App"],
      },
      {
        phase: "Intermediate (Weeks 4-7)",
        duration: "4 weeks",
        topics: ["UIKit", "Navigation", "Data Persistence", "Networking"],
        projects: ["Photo Gallery", "News Reader", "Social Media App"],
      },
      {
        phase: "Advanced (Weeks 8-10)",
        duration: "3 weeks",
        topics: ["SwiftUI", "Core Data", "Testing", "App Store"],
        projects: ["Complete iOS App", "App Store Submission"],
      },
    ],
  },

  // C++
  {
    id: 11,
    name: "C++",
    icon: "⚡",
    description: "System programming and competitive coding powerhouse",
    detailedDescription:
      "C++ is a general-purpose programming language created as an extension of the C programming language. Known for its performance and control over system resources, it's widely used in system programming, game development, and competitive programming.",
    level: "Advanced",
    duration: "14 weeks",
    students: "1.8M",
    rating: 4.6,
    modules: 32,
    projects: 15,
    color: "from-blue-600 to-purple-600",

    coreTopics: [
      "C++ Basics & Memory Management",
      "Pointers & References",
      "Object-Oriented Programming",
      "STL (Standard Template Library)",
      "Templates & Generic Programming",
      "Exception Handling",
      "File I/O & Streams",
      "Multithreading & Concurrency",
      "Data Structures & Algorithms",
      "Performance Optimization",
    ],

    frameworks: [
      {
        name: "Qt",
        description: "Cross-platform application development framework",
        type: "GUI Framework",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=I96uPDifZ1w",
          "https://www.youtube.com/watch?v=6KtOzh0StTc",
        ],
      },
      {
        name: "Boost",
        description: "Collection of peer-reviewed portable C++ libraries",
        type: "Library Collection",
        popularity: "High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=LgxEv6Ph_Us",
          "https://www.youtube.com/watch?v=AWIsKSHZrSQ",
        ],
      },
      {
        name: "OpenCV",
        description: "Computer vision and machine learning library",
        type: "Computer Vision",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=2FYm3GOonhk",
          "https://www.youtube.com/watch?v=kdLM6AOd2vc",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Software Engineer",
        averageSalary: "₹62,25,000 - ₹1,20,35,000",
        demand: "High",
        description:
          "Develop system-level and performance-critical applications",
      },
      {
        title: "Game Developer",
        averageSalary: "₹53,95,000 - ₹1,07,90,000",
        demand: "Medium",
        description: "Create high-performance games and game engines",
      },
      {
        title: "Embedded Systems Developer",
        averageSalary: "₹58,10,000 - ₹1,12,05,000",
        demand: "High",
        description: "Develop software for embedded and IoT devices",
      },
      {
        title: "Quantitative Developer",
        averageSalary: "₹74,70,000 - ₹1,49,40,000",
        demand: "Medium",
        description: "Build high-frequency trading and financial systems",
      },
    ],

    topTutorials: [
      {
        title: "C++ Tutorial for Beginners",
        channel: "freeCodeCamp",
        description: "Complete C++ programming course",
        url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
        duration: "4 hours",
      },
      {
        title: "C++ Programming Course",
        channel: "Caleb Curry",
        description: "Comprehensive C++ tutorial series",
        url: "https://www.youtube.com/watch?v=_bYFu9mBnr4",
        duration: "10 hours",
      },
      {
        title: "Modern C++ Tutorial",
        channel: "The Cherno",
        description: "Modern C++ features and best practices",
        url: "https://www.youtube.com/watch?v=18c3MTX0PK0",
        duration: "15 hours",
      },
      {
        title: "Data Structures in C++",
        channel: "GeeksforGeeks",
        description: "Implementing data structures with C++",
        url: "https://www.youtube.com/watch?v=DuDz6B4cqVc",
        duration: "6 hours",
      },
      {
        title: "STL in C++",
        channel: "Luv",
        description: "Standard Template Library comprehensive guide",
        url: "https://www.youtube.com/watch?v=RRVYpIET_RU",
        duration: "4 hours",
      },
    ],

    practiceSites: [
      {
        name: "GeeksforGeeks",
        description: "C++ tutorials, problems, and interview preparation",
        url: "https://geeksforgeeks.org",
        type: "Learning Platform",
      },
      {
        name: "Codeforces",
        description: "Competitive programming platform",
        url: "https://codeforces.com",
        type: "Competitive Programming",
      },
      {
        name: "HackerRank C++",
        description: "C++ domain challenges and assessments",
        url: "https://hackerrank.com/domains/cpp",
        type: "Coding Challenges",
      },
      {
        name: "CPP Reference",
        description: "Comprehensive C++ reference documentation",
        url: "https://cppreference.com",
        type: "Documentation",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-4)",
        duration: "4 weeks",
        topics: ["C++ Basics", "Pointers", "OOP", "Basic STL"],
        projects: ["Calculator", "File Manager", "Basic Game"],
      },
      {
        phase: "Intermediate (Weeks 5-9)",
        duration: "5 weeks",
        topics: ["Advanced STL", "Templates", "Exception Handling", "File I/O"],
        projects: ["Data Structure Library", "Text Editor", "Database System"],
      },
      {
        phase: "Advanced (Weeks 10-14)",
        duration: "5 weeks",
        topics: ["Multithreading", "Performance", "Design Patterns"],
        projects: ["Game Engine", "Network Server", "Compiler"],
      },
    ],
  },

  // Ruby
  {
    id: 12,
    name: "Ruby",
    icon: "💎",
    description: "Elegant programming language focused on developer happiness",
    detailedDescription:
      "Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. Ruby is often used for web development and automation scripts.",
    level: "Beginner",
    duration: "8 weeks",
    students: "600K",
    rating: 4.5,
    modules: 20,
    projects: 7,
    color: "from-red-500 to-pink-500",

    coreTopics: [
      "Ruby Syntax & Variables",
      "Methods & Blocks",
      "Classes & Objects",
      "Modules & Mixins",
      "Iterators & Enumerables",
      "Regular Expressions",
      "File I/O & Exception Handling",
      "Metaprogramming Basics",
      "Gems & Bundler",
      "Testing with RSpec",
    ],

    frameworks: [
      {
        name: "Ruby on Rails",
        description: "Full-stack web application framework",
        type: "Web Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=fmyvWz5TUWg",
          "https://www.youtube.com/watch?v=B3Fbujmgo60",
        ],
      },
      {
        name: "Sinatra",
        description: "Lightweight web application framework",
        type: "Web Framework",
        popularity: "Medium",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=9Ep7EOVD9ww",
          "https://www.youtube.com/watch?v=TwAZUNRN0Vk",
        ],
      },
      {
        name: "Jekyll",
        description: "Static site generator for blogs and websites",
        type: "Static Site Generator",
        popularity: "High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=T1itpPvFWHI",
          "https://www.youtube.com/watch?v=F8iOU1ci19Q",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Ruby Developer",
        averageSalary: "₹58,10,000 - ₹1,07,90,000",
        demand: "Medium",
        description: "Build web applications and automation scripts",
      },
      {
        title: "Rails Developer",
        averageSalary: "₹62,25,000 - ₹1,16,20,000",
        demand: "Medium",
        description: "Develop full-stack web applications with Ruby on Rails",
      },
      {
        title: "DevOps Engineer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "High",
        description: "Create automation scripts and deployment tools",
      },
    ],

    topTutorials: [
      {
        title: "Ruby Programming Tutorial",
        channel: "freeCodeCamp",
        description: "Complete Ruby programming course for beginners",
        url: "https://www.youtube.com/watch?v=t_ispmWmdjY",
        duration: "4 hours",
      },
      {
        title: "Ruby on Rails Tutorial",
        channel: "GoRails",
        description: "Learn Ruby on Rails from scratch",
        url: "https://www.youtube.com/watch?v=fmyvWz5TUWg",
        duration: "6 hours",
      },
      {
        title: "Ruby Basics",
        channel: "Derek Banas",
        description: "Learn Ruby programming in one video",
        url: "https://www.youtube.com/watch?v=Dji9ALCgfpM",
        duration: "1 hour",
      },
      {
        title: "Ruby Metaprogramming",
        channel: "RubyConf",
        description: "Advanced Ruby metaprogramming techniques",
        url: "https://www.youtube.com/watch?v=ni6uSLLiw5k",
        duration: "45 minutes",
      },
      {
        title: "Testing with RSpec",
        channel: "Drifting Ruby",
        description: "Ruby testing with RSpec framework",
        url: "https://www.youtube.com/watch?v=71eKcNxwxVY",
        duration: "1.5 hours",
      },
    ],

    practiceSites: [
      {
        name: "Ruby Koans",
        description: "Learn Ruby through test-driven development",
        url: "http://rubykoans.com",
        type: "Interactive Tutorial",
      },
      {
        name: "Codewars Ruby",
        description: "Ruby coding challenges and kata",
        url: "https://codewars.com",
        type: "Coding Challenges",
      },
      {
        name: "Exercism Ruby Track",
        description: "Practice Ruby with mentorship",
        url: "https://exercism.org/tracks/ruby",
        type: "Coding Exercises",
      },
      {
        name: "Ruby Documentation",
        description: "Official Ruby language documentation",
        url: "https://ruby-doc.org",
        type: "Documentation",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: ["Ruby Basics", "Methods", "Classes", "Modules"],
        projects: ["CLI Calculator", "File Organizer", "Text Processor"],
      },
      {
        phase: "Intermediate (Weeks 4-6)",
        duration: "3 weeks",
        topics: ["Iterators", "Blocks", "Exception Handling", "Gems"],
        projects: ["Web Scraper", "API Client", "Data Parser"],
      },
      {
        phase: "Advanced (Weeks 7-8)",
        duration: "2 weeks",
        topics: ["Rails Basics", "Testing", "Deployment"],
        projects: ["Web Application", "Blog Platform"],
      },
    ],
  },

  // PHP
  {
    id: 13,
    name: "PHP",
    icon: "🐘",
    description: "Server-side scripting language for web development",
    detailedDescription:
      "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
    level: "Beginner",
    duration: "8 weeks",
    students: "1.2M",
    rating: 4.3,
    modules: 22,
    projects: 8,
    color: "from-indigo-500 to-purple-600",

    coreTopics: [
      "PHP Syntax & Variables",
      "Functions & Scope",
      "Arrays & Superglobals",
      "Object-Oriented Programming",
      "File Handling & Sessions",
      "MySQL Database Integration",
      "Form Processing & Validation",
      "Security Best Practices",
      "Composer & Package Management",
      "RESTful API Development",
    ],

    frameworks: [
      {
        name: "Laravel",
        description: "Elegant web application framework with expressive syntax",
        type: "Web Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=ImtZ5yENzgE",
          "https://www.youtube.com/watch?v=BXiHvGw2rOo",
        ],
      },
      {
        name: "CodeIgniter",
        description: "Lightweight PHP framework for rapid development",
        type: "Web Framework",
        popularity: "Medium",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=I752ofYu7-0",
          "https://www.youtube.com/watch?v=sKN1WIr_XzY",
        ],
      },
      {
        name: "Symfony",
        description:
          "High-performance PHP framework for enterprise applications",
        type: "Web Framework",
        popularity: "High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=Bo0guQ9C3WQ",
          "https://www.youtube.com/watch?v=Pd0LNFWyaKc",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "PHP Developer",
        averageSalary: "₹45,65,000 - ₹95,45,000",
        demand: "High",
        description: "Build dynamic websites and web applications",
      },
      {
        title: "Laravel Developer",
        averageSalary: "₹49,80,000 - ₹1,03,75,000",
        demand: "High",
        description: "Develop modern web applications using Laravel framework",
      },
      {
        title: "Full Stack Developer",
        averageSalary: "₹53,95,000 - ₹1,12,05,000",
        demand: "Very High",
        description: "Build complete web solutions with PHP backend",
      },
      {
        title: "WordPress Developer",
        averageSalary: "₹41,50,000 - ₹87,15,000",
        demand: "Very High",
        description: "Create and customize WordPress themes and plugins",
      },
    ],

    topTutorials: [
      {
        title: "PHP Tutorial for Beginners",
        channel: "Traversy Media",
        description: "Complete PHP crash course for beginners",
        url: "https://www.youtube.com/watch?v=oJbfyzaA2QA",
        duration: "2 hours",
      },
      {
        title: "PHP Full Course",
        channel: "freeCodeCamp",
        description: "Learn PHP programming from scratch",
        url: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
        duration: "4.5 hours",
      },
      {
        title: "Laravel Tutorial for Beginners",
        channel: "The Net Ninja",
        description: "Complete Laravel framework tutorial",
        url: "https://www.youtube.com/watch?v=ImtZ5yENzgE",
        duration: "8 hours",
      },
      {
        title: "PHP OOP Tutorial",
        channel: "Dani Krossing",
        description: "Object-oriented programming in PHP",
        url: "https://www.youtube.com/watch?v=Anz0ArcQ5kI",
        duration: "3 hours",
      },
      {
        title: "PHP MySQL Tutorial",
        channel: "Programming with Mosh",
        description: "PHP and MySQL database integration",
        url: "https://www.youtube.com/watch?v=9cWsjiMwtFg",
        duration: "2.5 hours",
      },
    ],

    practiceSites: [
      {
        name: "PHP Manual",
        description: "Official PHP documentation and examples",
        url: "https://php.net/manual",
        type: "Documentation",
      },
      {
        name: "W3Schools PHP",
        description: "PHP tutorial with interactive examples",
        url: "https://w3schools.com/php",
        type: "Interactive Tutorial",
      },
      {
        name: "Laracasts",
        description: "Laravel and PHP video tutorials",
        url: "https://laracasts.com",
        type: "Video Platform",
      },
      {
        name: "PHPExercises",
        description: "PHP coding exercises and challenges",
        url: "https://phpexercises.com",
        type: "Coding Exercises",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: ["PHP Basics", "Functions", "Arrays", "Forms"],
        projects: ["Contact Form", "Simple Calculator", "Guest Book"],
      },
      {
        phase: "Intermediate (Weeks 4-6)",
        duration: "3 weeks",
        topics: ["OOP", "Database", "Sessions", "File Upload"],
        projects: ["User Registration System", "Blog CMS", "File Manager"],
      },
      {
        phase: "Advanced (Weeks 7-8)",
        duration: "2 weeks",
        topics: ["Frameworks", "APIs", "Security", "Deployment"],
        projects: ["Laravel Application", "REST API", "E-commerce Site"],
      },
    ],
  },

  // Dart
  {
    id: 14,
    name: "Dart",
    icon: "🎯",
    description: "Google's language for building Flutter mobile applications",
    detailedDescription:
      "Dart is a programming language developed by Google. It is used to build mobile, desktop, server, and web applications. Dart is an object-oriented, class-based, garbage-collected language with C-style syntax.",
    level: "Intermediate",
    duration: "8 weeks",
    students: "500K",
    rating: 4.4,
    modules: 20,
    projects: 6,
    color: "from-blue-500 to-teal-500",

    coreTopics: [
      "Dart Syntax & Variables",
      "Functions & Parameters",
      "Classes & Objects",
      "Inheritance & Mixins",
      "Collections & Generics",
      "Asynchronous Programming",
      "Error Handling",
      "Streams & Futures",
      "Package Management",
      "Testing in Dart",
    ],

    frameworks: [
      {
        name: "Flutter",
        description: "Google's UI toolkit for cross-platform applications",
        type: "Mobile Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=1ukSR1GRtMU",
          "https://www.youtube.com/watch?v=j-LOab_PzzU",
        ],
      },
      {
        name: "AngularDart",
        description: "Dart version of the Angular web framework",
        type: "Web Framework",
        popularity: "Low",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=7MgC2GsJTNQ",
          "https://www.youtube.com/watch?v=RmJsRAy7wCY",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Flutter Developer",
        averageSalary: "₹53,95,000 - ₹1,03,75,000",
        demand: "High",
        description: "Build cross-platform mobile applications with Flutter",
      },
      {
        title: "Mobile App Developer",
        averageSalary: "₹49,80,000 - ₹99,60,000",
        demand: "High",
        description: "Create mobile apps for iOS and Android using Dart",
      },
      {
        title: "Cross-Platform Developer",
        averageSalary: "₹58,10,000 - ₹1,12,05,000",
        demand: "Growing",
        description: "Develop applications for multiple platforms with Dart",
      },
    ],

    topTutorials: [
      {
        title: "Dart Programming Tutorial",
        channel: "freeCodeCamp",
        description: "Complete Dart programming course for beginners",
        url: "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q",
        duration: "5 hours",
      },
      {
        title: "Flutter & Dart Tutorial",
        channel: "The Net Ninja",
        description: "Build mobile apps with Flutter and Dart",
        url: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
        duration: "12 hours",
      },
      {
        title: "Dart for Beginners",
        channel: "Techie Blossom",
        description: "Learn Dart programming from scratch",
        url: "https://www.youtube.com/watch?v=0CTj3x6jgeY",
        duration: "2 hours",
      },
      {
        title: "Advanced Dart Programming",
        channel: "Flutter",
        description: "Advanced Dart concepts and best practices",
        url: "https://www.youtube.com/watch?v=bFqAk0EsUxQ",
        duration: "1 hour",
      },
      {
        title: "Dart Async Programming",
        channel: "Google Developers",
        description: "Asynchronous programming with Dart",
        url: "https://www.youtube.com/watch?v=SmTCmDMi4BY",
        duration: "45 minutes",
      },
    ],

    practiceSites: [
      {
        name: "DartPad",
        description: "Online Dart editor and compiler",
        url: "https://dartpad.dev",
        type: "Online IDE",
      },
      {
        name: "Dart Documentation",
        description: "Official Dart language documentation",
        url: "https://dart.dev/guides",
        type: "Documentation",
      },
      {
        name: "Flutter Codelabs",
        description: "Hands-on Flutter and Dart tutorials",
        url: "https://flutter.dev/docs/codelabs",
        type: "Interactive Tutorial",
      },
      {
        name: "Exercism Dart Track",
        description: "Practice Dart programming with exercises",
        url: "https://exercism.org/tracks/dart",
        type: "Coding Exercises",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: ["Dart Basics", "OOP", "Collections", "Functions"],
        projects: ["Console Calculator", "Todo CLI App", "Number Games"],
      },
      {
        phase: "Intermediate (Weeks 4-6)",
        duration: "3 weeks",
        topics: ["Async Programming", "Streams", "Error Handling", "Testing"],
        projects: ["HTTP Client", "File Processor", "Data Parser"],
      },
      {
        phase: "Advanced (Weeks 7-8)",
        duration: "2 weeks",
        topics: ["Flutter Basics", "UI Development", "State Management"],
        projects: ["Mobile App", "Cross-Platform Application"],
      },
    ],
  },

  // Shell (Bash)
  {
    id: 15,
    name: "Shell (Bash)",
    icon: "🐚",
    description:
      "Command-line scripting for automation and system administration",
    detailedDescription:
      "Bash (Bourne Again Shell) is a Unix shell and command language. It's widely used for system administration, automation scripts, and as the default login shell for most Linux distributions and macOS.",
    level: "Beginner",
    duration: "6 weeks",
    students: "900K",
    rating: 4.4,
    modules: 16,
    projects: 8,
    color: "from-gray-600 to-gray-800",

    coreTopics: [
      "Basic Shell Commands",
      "File System Navigation",
      "Text Processing (grep, sed, awk)",
      "Variables & Environment",
      "Control Structures (if, for, while)",
      "Functions & Parameters",
      "Regular Expressions",
      "Process Management",
      "I/O Redirection & Pipes",
      "Scripting Best Practices",
    ],

    frameworks: [
      {
        name: "GNU Coreutils",
        description: "Essential Unix command-line utilities",
        type: "Utility Collection",
        popularity: "Very High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=2PGnYjbYuUo",
          "https://www.youtube.com/watch?v=gd7BXuUQ91w",
        ],
      },
      {
        name: "Oh My Zsh",
        description: "Framework for managing Zsh shell configuration",
        type: "Shell Framework",
        popularity: "High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=MSPu-lYF-A8",
          "https://www.youtube.com/watch?v=cqd5Bvwy1Sg",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "DevOps Engineer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "Very High",
        description: "Automate deployment and infrastructure management",
      },
      {
        title: "System Administrator",
        averageSalary: "₹49,80,000 - ₹95,45,000",
        demand: "High",
        description: "Manage and maintain Unix/Linux systems",
      },
      {
        title: "Site Reliability Engineer",
        averageSalary: "₹74,70,000 - ₹1,32,80,000",
        demand: "Very High",
        description: "Ensure system reliability through automation",
      },
    ],

    topTutorials: [
      {
        title: "Bash Scripting Tutorial",
        channel: "freeCodeCamp",
        description: "Complete bash scripting course for beginners",
        url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4",
        duration: "3 hours",
      },
      {
        title: "Linux Command Line Tutorial",
        channel: "Corey Schafer",
        description: "Master the Linux command line",
        url: "https://www.youtube.com/watch?v=2PGnYjbYuUo",
        duration: "1 hour",
      },
      {
        title: "Shell Scripting Crash Course",
        channel: "Traversy Media",
        description: "Learn shell scripting fundamentals",
        url: "https://www.youtube.com/watch?v=v-F3YLd6oMw",
        duration: "1.5 hours",
      },
      {
        title: "Advanced Bash Scripting",
        channel: "The Linux Channel",
        description: "Advanced bash scripting techniques",
        url: "https://www.youtube.com/watch?v=e-7bVDzodLo",
        duration: "2 hours",
      },
      {
        title: "Sed and Awk Tutorial",
        channel: "DistroTube",
        description: "Text processing with sed and awk",
        url: "https://www.youtube.com/watch?v=QaGhpqRll_k",
        duration: "45 minutes",
      },
    ],

    practiceSites: [
      {
        name: "ExplainShell",
        description: "Explain shell commands and their parameters",
        url: "https://explainshell.com",
        type: "Reference Tool",
      },
      {
        name: "CommandLineFU",
        description: "Repository of command line examples",
        url: "https://commandlinefu.com",
        type: "Example Collection",
      },
      {
        name: "OverTheWire Bandit",
        description: "Learn shell commands through security games",
        url: "https://overthewire.org/wargames/bandit",
        type: "Interactive Game",
      },
      {
        name: "ShellCheck",
        description: "Shell script analysis tool",
        url: "https://shellcheck.net",
        type: "Code Analysis",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-2)",
        duration: "2 weeks",
        topics: ["Basic Commands", "File Operations", "Text Processing"],
        projects: ["File Organizer", "Log Analyzer", "Backup Script"],
      },
      {
        phase: "Intermediate (Weeks 3-4)",
        duration: "2 weeks",
        topics: ["Variables", "Control Structures", "Functions"],
        projects: ["System Monitor", "User Manager", "Data Processor"],
      },
      {
        phase: "Advanced (Weeks 5-6)",
        duration: "2 weeks",
        topics: ["Advanced Scripting", "Error Handling", "Performance"],
        projects: [
          "Deployment Script",
          "Monitoring System",
          "Automation Suite",
        ],
      },
    ],
  },

  // R
  {
    id: 16,
    name: "R",
    icon: "📊",
    description: "Statistical computing and data analysis powerhouse",
    detailedDescription:
      "R is a programming language and free software environment for statistical computing and graphics. It's widely used among statisticians and data miners for data analysis and developing statistical software.",
    level: "Intermediate",
    duration: "10 weeks",
    students: "700K",
    rating: 4.5,
    modules: 24,
    projects: 10,
    color: "from-blue-500 to-cyan-600",

    coreTopics: [
      "R Syntax & Data Types",
      "Vectors, Lists & Data Frames",
      "Data Import & Export",
      "Data Manipulation (dplyr)",
      "Data Visualization (ggplot2)",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Regression Analysis",
      "Time Series Analysis",
      "R Markdown & Reporting",
    ],

    frameworks: [
      {
        name: "Tidyverse",
        description: "Collection of R packages for data science",
        type: "Package Collection",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=8SGif63VW6E",
          "https://www.youtube.com/watch?v=9f2g7RN5N0I",
        ],
      },
      {
        name: "Shiny",
        description: "Web application framework for R",
        type: "Web Framework",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=9uFQECk30kA",
          "https://www.youtube.com/watch?v=HVa42p7h3-0",
        ],
      },
      {
        name: "Plotly",
        description: "Interactive graphing library for R",
        type: "Visualization Library",
        popularity: "High",
        learningCurve: "Easy",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=TJmNvfhLCoI",
          "https://www.youtube.com/watch?v=3FT9HsWWgdE",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Data Scientist",
        averageSalary: "₹70,55,000 - ₹1,32,80,000",
        demand: "Very High",
        description: "Analyze data and build statistical models using R",
      },
      {
        title: "Statistician",
        averageSalary: "₹58,10,000 - ₹1,12,05,000",
        demand: "High",
        description: "Conduct statistical analysis and research",
      },
      {
        title: "Biostatistician",
        averageSalary: "₹62,25,000 - ₹1,20,35,000",
        demand: "High",
        description: "Apply statistics to biological and health data",
      },
      {
        title: "Research Analyst",
        averageSalary: "₹49,80,000 - ₹95,45,000",
        demand: "High",
        description: "Analyze research data and prepare reports",
      },
    ],

    topTutorials: [
      {
        title: "R Programming Tutorial",
        channel: "freeCodeCamp",
        description: "Complete R programming course for data science",
        url: "https://www.youtube.com/watch?v=_V8eKsto3Ug",
        duration: "2 hours",
      },
      {
        title: "R for Data Science",
        channel: "Data School",
        description: "Learn R for data analysis and visualization",
        url: "https://www.youtube.com/watch?v=8SGif63VW6E",
        duration: "4 hours",
      },
      {
        title: "ggplot2 Tutorial",
        channel: "Riffomonas Project",
        description: "Data visualization with ggplot2",
        url: "https://www.youtube.com/watch?v=h29g21z0a68",
        duration: "1.5 hours",
      },
      {
        title: "Statistics with R",
        channel: "MarinStatsLectures",
        description: "Statistical analysis using R",
        url: "https://www.youtube.com/watch?v=IYdjM9pLhyY",
        duration: "6 hours",
      },
      {
        title: "Shiny Tutorial",
        channel: "Appsilon Data Science",
        description: "Build interactive web apps with Shiny",
        url: "https://www.youtube.com/watch?v=9uFQECk30kA",
        duration: "2 hours",
      },
    ],

    practiceSites: [
      {
        name: "R Documentation",
        description: "Official R documentation and manuals",
        url: "https://r-project.org",
        type: "Documentation",
      },
      {
        name: "Kaggle Learn R",
        description: "R courses and datasets for practice",
        url: "https://kaggle.com/learn/r",
        type: "Interactive Learning",
      },
      {
        name: "DataCamp R",
        description: "Interactive R programming courses",
        url: "https://datacamp.com/courses/free-introduction-to-r",
        type: "Interactive Learning",
      },
      {
        name: "RStudio Cloud",
        description: "Online R development environment",
        url: "https://rstudio.cloud",
        type: "Online IDE",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: ["R Basics", "Data Structures", "Data Import", "Basic Plots"],
        projects: ["Data Explorer", "Basic Analysis", "Simple Visualizations"],
      },
      {
        phase: "Intermediate (Weeks 4-7)",
        duration: "4 weeks",
        topics: ["dplyr", "ggplot2", "Statistics", "Regression"],
        projects: ["Sales Analysis", "Survey Analysis", "Predictive Model"],
      },
      {
        phase: "Advanced (Weeks 8-10)",
        duration: "3 weeks",
        topics: ["Advanced Statistics", "Shiny", "R Markdown", "Packages"],
        projects: ["Dashboard", "Research Report", "R Package"],
      },
    ],
  },

  // MATLAB
  {
    id: 17,
    name: "MATLAB",
    icon: "🔬",
    description: "Technical computing platform for engineering and science",
    detailedDescription:
      "MATLAB is a programming platform designed specifically for engineers and scientists. It combines a desktop environment tuned for iterative analysis and design processes with a programming language that expresses matrix and array mathematics directly.",
    level: "Intermediate",
    duration: "12 weeks",
    students: "400K",
    rating: 4.3,
    modules: 28,
    projects: 12,
    color: "from-orange-500 to-red-600",

    coreTopics: [
      "MATLAB Syntax & Environment",
      "Matrices & Arrays",
      "Functions & Scripts",
      "Data Visualization",
      "Signal Processing",
      "Image Processing",
      "Symbolic Math",
      "Simulink Basics",
      "App Designer",
      "Parallel Computing",
    ],

    frameworks: [
      {
        name: "Simulink",
        description: "Block diagram environment for simulation and modeling",
        type: "Simulation Framework",
        popularity: "Very High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=UBDw_bPsABw",
          "https://www.youtube.com/watch?v=6pKFYzM85qc",
        ],
      },
      {
        name: "Statistics Toolbox",
        description: "Statistical analysis and modeling tools",
        type: "Toolbox",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=JeNWfJX7h7A",
          "https://www.youtube.com/watch?v=2AuLcK72fxc",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Research Engineer",
        averageSalary: "₹62,25,000 - ₹1,16,20,000",
        demand: "Medium",
        description: "Conduct research and development using MATLAB",
      },
      {
        title: "Signal Processing Engineer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "Medium",
        description: "Design and analyze signal processing systems",
      },
      {
        title: "Control Systems Engineer",
        averageSalary: "₹70,55,000 - ₹1,28,65,000",
        demand: "Medium",
        description: "Design and implement control systems",
      },
    ],

    topTutorials: [
      {
        title: "MATLAB Tutorial for Beginners",
        channel: "MATLAB",
        description: "Official MATLAB tutorial series",
        url: "https://www.youtube.com/watch?v=T_ekAD7U-wU",
        duration: "3 hours",
      },
      {
        title: "MATLAB Programming",
        channel: "Joseph Delgadillo",
        description: "Learn MATLAB programming fundamentals",
        url: "https://www.youtube.com/watch?v=7Ye3cXReNeo",
        duration: "5 hours",
      },
      {
        title: "Signal Processing with MATLAB",
        channel: "MATLAB",
        description: "Signal processing techniques in MATLAB",
        url: "https://www.youtube.com/watch?v=8mW1M3Hq-PQ",
        duration: "2 hours",
      },
      {
        title: "Simulink Tutorial",
        channel: "MATLAB",
        description: "Getting started with Simulink",
        url: "https://www.youtube.com/watch?v=UBDw_bPsABw",
        duration: "1 hour",
      },
      {
        title: "Machine Learning with MATLAB",
        channel: "MATLAB",
        description: "Machine learning algorithms in MATLAB",
        url: "https://www.youtube.com/watch?v=gXgNoCEW5Q4",
        duration: "1.5 hours",
      },
    ],

    practiceSites: [
      {
        name: "MATLAB Documentation",
        description: "Official MATLAB documentation and examples",
        url: "https://mathworks.com/help/matlab",
        type: "Documentation",
      },
      {
        name: "MATLAB Onramp",
        description: "Free interactive MATLAB tutorial",
        url: "https://matlabacademy.mathworks.com",
        type: "Interactive Tutorial",
      },
      {
        name: "MATLAB Central",
        description: "MATLAB community and file exchange",
        url: "https://mathworks.com/matlabcentral",
        type: "Community",
      },
      {
        name: "Coursera MATLAB",
        description: "MATLAB courses and specializations",
        url: "https://coursera.org/learn/matlab",
        type: "Course Platform",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-4)",
        duration: "4 weeks",
        topics: ["MATLAB Basics", "Matrices", "Functions", "Plotting"],
        projects: ["Data Analysis", "Function Library", "Visualization Tools"],
      },
      {
        phase: "Intermediate (Weeks 5-8)",
        duration: "4 weeks",
        topics: ["Signal Processing", "Image Processing", "Statistics"],
        projects: ["Signal Analyzer", "Image Filter", "Statistical Analysis"],
      },
      {
        phase: "Advanced (Weeks 9-12)",
        duration: "4 weeks",
        topics: ["Simulink", "App Designer", "Parallel Computing"],
        projects: ["Simulation Model", "GUI Application", "Optimization Tool"],
      },
    ],
  },

  // Scala
  {
    id: 18,
    name: "Scala",
    icon: "🏛️",
    description: "Functional and object-oriented programming for the JVM",
    detailedDescription:
      "Scala is a modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way. It smoothly integrates features of object-oriented and functional languages.",
    level: "Advanced",
    duration: "12 weeks",
    students: "300K",
    rating: 4.4,
    modules: 26,
    projects: 8,
    color: "from-red-600 to-pink-600",

    coreTopics: [
      "Scala Syntax & Fundamentals",
      "Functional Programming",
      "Object-Oriented Programming",
      "Collections & Immutability",
      "Pattern Matching",
      "Higher-Order Functions",
      "Traits & Mixins",
      "Concurrency & Actors",
      "Type System & Generics",
      "SBT & Build Tools",
    ],

    frameworks: [
      {
        name: "Akka",
        description: "Actor-based concurrent and distributed systems framework",
        type: "Concurrency Framework",
        popularity: "High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=7erJ1DV_Tlo",
          "https://www.youtube.com/watch?v=GBvtE61Wr18",
        ],
      },
      {
        name: "Play Framework",
        description: "High-productivity web application framework",
        type: "Web Framework",
        popularity: "Medium",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=bLrmnjPQsZc",
          "https://www.youtube.com/watch?v=7L0bUsYz_gE",
        ],
      },
      {
        name: "Apache Spark",
        description: "Unified analytics engine for large-scale data processing",
        type: "Big Data Framework",
        popularity: "Very High",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=F8pyaR4uQ2g",
          "https://www.youtube.com/watch?v=7ooZ4S7Ay6Y",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Scala Developer",
        averageSalary: "₹74,70,000 - ₹1,32,80,000",
        demand: "Medium",
        description: "Build scalable applications with functional programming",
      },
      {
        title: "Big Data Engineer",
        averageSalary: "₹78,85,000 - ₹1,41,10,000",
        demand: "High",
        description: "Process large-scale data using Spark and Scala",
      },
      {
        title: "Backend Engineer",
        averageSalary: "₹70,55,000 - ₹1,28,65,000",
        demand: "Medium",
        description: "Develop high-performance backend systems",
      },
    ],

    topTutorials: [
      {
        title: "Scala Tutorial for Beginners",
        channel: "Derek Banas",
        description: "Learn Scala programming fundamentals",
        url: "https://www.youtube.com/watch?v=DzFt0YkZo8M",
        duration: "1 hour",
      },
      {
        title: "Functional Programming in Scala",
        channel: "Rock the JVM",
        description: "Master functional programming with Scala",
        url: "https://www.youtube.com/watch?v=sVMES84KjWw",
        duration: "12 hours",
      },
      {
        title: "Akka Tutorial",
        channel: "Tech Primers",
        description: "Building concurrent systems with Akka",
        url: "https://www.youtube.com/watch?v=7erJ1DV_Tlo",
        duration: "2 hours",
      },
      {
        title: "Apache Spark with Scala",
        channel: "Simplilearn",
        description: "Big data processing with Spark and Scala",
        url: "https://www.youtube.com/watch?v=F8pyaR4uQ2g",
        duration: "8 hours",
      },
      {
        title: "Play Framework Tutorial",
        channel: "Java Brains",
        description: "Web development with Play Framework",
        url: "https://www.youtube.com/watch?v=bLrmnjPQsZc",
        duration: "3 hours",
      },
    ],

    practiceSites: [
      {
        name: "Scala Exercises",
        description: "Interactive Scala exercises and koans",
        url: "https://scala-exercises.org",
        type: "Interactive Exercises",
      },
      {
        name: "Scala Documentation",
        description: "Official Scala language documentation",
        url: "https://docs.scala-lang.org",
        type: "Documentation",
      },
      {
        name: "Scastie",
        description: "Online Scala playground and code sharing",
        url: "https://scastie.scala-lang.org",
        type: "Online IDE",
      },
      {
        name: "Coursera Scala",
        description: "Functional programming in Scala specialization",
        url: "https://coursera.org/specializations/scala",
        type: "Course Platform",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-4)",
        duration: "4 weeks",
        topics: ["Scala Basics", "OOP", "Collections", "Pattern Matching"],
        projects: ["Calculator", "Collection Library", "Pattern Matcher"],
      },
      {
        phase: "Intermediate (Weeks 5-8)",
        duration: "4 weeks",
        topics: ["Functional Programming", "Higher-Order Functions", "Traits"],
        projects: ["Functional Library", "Data Processor", "Type System"],
      },
      {
        phase: "Advanced (Weeks 9-12)",
        duration: "4 weeks",
        topics: ["Akka", "Concurrency", "Big Data", "Advanced Types"],
        projects: ["Actor System", "Concurrent Application", "Spark Job"],
      },
    ],
  },

  // Elixir
  {
    id: 19,
    name: "Elixir",
    icon: "💎",
    description: "Dynamic, functional language for maintainable applications",
    detailedDescription:
      "Elixir is a dynamic, functional language designed for building maintainable and scalable applications. It leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems.",
    level: "Advanced",
    duration: "10 weeks",
    students: "150K",
    rating: 4.6,
    modules: 22,
    projects: 6,
    color: "from-purple-600 to-indigo-700",

    coreTopics: [
      "Elixir Syntax & Pattern Matching",
      "Functional Programming Concepts",
      "Processes & Actor Model",
      "GenServer & OTP",
      "Supervision Trees",
      "Message Passing",
      "Fault Tolerance",
      "Distributed Systems",
      "Ecto & Databases",
      "Testing with ExUnit",
    ],

    frameworks: [
      {
        name: "Phoenix",
        description: "Productive web framework for real-time applications",
        type: "Web Framework",
        popularity: "High",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=F-7BKpXNtPw",
          "https://www.youtube.com/watch?v=MZvmYaFkNJI",
        ],
      },
      {
        name: "LiveView",
        description:
          "Rich, interactive user experiences with server-rendered HTML",
        type: "Frontend Framework",
        popularity: "Growing",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=8xJzHq8ru0M",
          "https://www.youtube.com/watch?v=RuTtE72DUqk",
        ],
      },
      {
        name: "Nerves",
        description: "Platform for crafting embedded software in Elixir",
        type: "Embedded Framework",
        popularity: "Medium",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=kpzQrFC55q4",
          "https://www.youtube.com/watch?v=118-g0ODfgg",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Elixir Developer",
        averageSalary: "₹70,55,000 - ₹1,28,65,000",
        demand: "Growing",
        description: "Build scalable, fault-tolerant applications",
      },
      {
        title: "Phoenix Developer",
        averageSalary: "₹66,40,000 - ₹1,24,50,000",
        demand: "Growing",
        description: "Develop real-time web applications with Phoenix",
      },
      {
        title: "Backend Engineer",
        averageSalary: "₹74,70,000 - ₹1,36,95,000",
        demand: "Medium",
        description: "Build distributed, concurrent backend systems",
      },
    ],

    topTutorials: [
      {
        title: "Elixir Tutorial for Beginners",
        channel: "The Net Ninja",
        description: "Learn Elixir programming from scratch",
        url: "https://www.youtube.com/watch?v=pBNOavRoNL0",
        duration: "4 hours",
      },
      {
        title: "Phoenix Framework Tutorial",
        channel: "Pragmatic Studio",
        description: "Build web applications with Phoenix",
        url: "https://www.youtube.com/watch?v=F-7BKpXNtPw",
        duration: "6 hours",
      },
      {
        title: "OTP and GenServer",
        channel: "ElixirConf",
        description: "Understanding OTP and building GenServers",
        url: "https://www.youtube.com/watch?v=0gTJWX0eCgM",
        duration: "1 hour",
      },
      {
        title: "Phoenix LiveView",
        channel: "ElixirCasts",
        description: "Interactive web apps with LiveView",
        url: "https://www.youtube.com/watch?v=8xJzHq8ru0M",
        duration: "2 hours",
      },
      {
        title: "Distributed Elixir",
        channel: "Code Sync",
        description: "Building distributed systems with Elixir",
        url: "https://www.youtube.com/watch?v=zQEgp_1NiDw",
        duration: "1.5 hours",
      },
    ],

    practiceSites: [
      {
        name: "Elixir Documentation",
        description: "Official Elixir language documentation",
        url: "https://elixir-lang.org/docs.html",
        type: "Documentation",
      },
      {
        name: "Exercism Elixir Track",
        description: "Practice Elixir with coding exercises",
        url: "https://exercism.org/tracks/elixir",
        type: "Coding Exercises",
      },
      {
        name: "Elixir School",
        description: "Premier destination for Elixir learning",
        url: "https://elixirschool.com",
        type: "Tutorial Platform",
      },
      {
        name: "Try Elixir Online",
        description: "Interactive Elixir tutorial in the browser",
        url: "https://try-elixir.herokuapp.com",
        type: "Interactive Tutorial",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-3)",
        duration: "3 weeks",
        topics: ["Elixir Basics", "Pattern Matching", "Functions", "Processes"],
        projects: ["Calculator", "Message System", "Process Pool"],
      },
      {
        phase: "Intermediate (Weeks 4-7)",
        duration: "4 weeks",
        topics: ["OTP", "GenServer", "Supervision", "Fault Tolerance"],
        projects: ["Chat Server", "Monitoring System", "Distributed Cache"],
      },
      {
        phase: "Advanced (Weeks 8-10)",
        duration: "3 weeks",
        topics: ["Phoenix", "LiveView", "Ecto", "Deployment"],
        projects: ["Web Application", "Real-time Dashboard", "API Service"],
      },
    ],
  },

  // Haskell
  {
    id: 20,
    name: "Haskell",
    icon: "λ",
    description:
      "Pure functional programming language with advanced type system",
    detailedDescription:
      "Haskell is a standardized, general-purpose purely functional programming language with non-strict semantics and strong static typing. It is named after logician Haskell Curry and features lazy evaluation, pattern matching, and a sophisticated type system.",
    level: "Advanced",
    duration: "14 weeks",
    students: "100K",
    rating: 4.7,
    modules: 30,
    projects: 8,
    color: "from-purple-700 to-indigo-800",

    coreTopics: [
      "Haskell Syntax & Types",
      "Functions & Recursion",
      "Higher-Order Functions",
      "Lazy Evaluation",
      "Pattern Matching",
      "Type Classes & Instances",
      "Monads & Functors",
      "IO & Side Effects",
      "Concurrency & Parallelism",
      "Advanced Type System",
    ],

    frameworks: [
      {
        name: "Yesod",
        description: "Type-safe, RESTful web framework",
        type: "Web Framework",
        popularity: "Medium",
        learningCurve: "Hard",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=1kHo7uCBLQw",
          "https://www.youtube.com/watch?v=fHFqgmzgymk",
        ],
      },
      {
        name: "Scotty",
        description: "Lightweight web framework inspired by Ruby's Sinatra",
        type: "Web Framework",
        popularity: "Medium",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=WjSmPMPsDvM",
          "https://www.youtube.com/watch?v=s8tYkXnwcKI",
        ],
      },
      {
        name: "Snap",
        description: "Simple web development framework",
        type: "Web Framework",
        popularity: "Low",
        learningCurve: "Medium",
        tutorialLinks: [
          "https://www.youtube.com/watch?v=b-AKSb3vGU0",
          "https://www.youtube.com/watch?v=9H7PySk5WOM",
        ],
      },
    ],

    jobOpportunities: [
      {
        title: "Functional Programmer",
        averageSalary: "₹78,85,000 - ₹1,41,10,000",
        demand: "Low",
        description:
          "Develop applications using functional programming principles",
      },
      {
        title: "Research Engineer",
        averageSalary: "₹74,70,000 - ₹1,36,95,000",
        demand: "Low",
        description: "Work on advanced programming language research",
      },
      {
        title: "Financial Systems Developer",
        averageSalary: "₹83,00,000 - ₹1,49,40,000",
        demand: "Low",
        description: "Build high-assurance financial systems",
      },
    ],

    topTutorials: [
      {
        title: "Learn You a Haskell",
        channel: "Haskell at Work",
        description: "Comprehensive Haskell tutorial for beginners",
        url: "https://www.youtube.com/watch?v=02_H3LjqMr8",
        duration: "8 hours",
      },
      {
        title: "Haskell Programming Tutorial",
        channel: "Derek Banas",
        description: "Learn Haskell programming fundamentals",
        url: "https://www.youtube.com/watch?v=Vgu82wiiZ90",
        duration: "1 hour",
      },
      {
        title: "Functional Programming in Haskell",
        channel: "University of Glasgow",
        description: "Academic approach to Haskell programming",
        url: "https://www.youtube.com/watch?v=LnX3B9oaKzw",
        duration: "10 hours",
      },
      {
        title: "Haskell Monads Explained",
        channel: "Brian Beckman",
        description: "Understanding monads in Haskell",
        url: "https://www.youtube.com/watch?v=ZhuHCtR3xq8",
        duration: "1 hour",
      },
      {
        title: "Real World Haskell",
        channel: "FP Complete",
        description: "Practical Haskell development techniques",
        url: "https://www.youtube.com/watch?v=1jZ7j21g028",
        duration: "3 hours",
      },
    ],

    practiceSites: [
      {
        name: "Haskell Documentation",
        description: "Official Haskell language documentation",
        url: "https://haskell.org/documentation",
        type: "Documentation",
      },
      {
        name: "Try Haskell",
        description: "Interactive Haskell tutorial in the browser",
        url: "https://tryhaskell.org",
        type: "Interactive Tutorial",
      },
      {
        name: "Exercism Haskell Track",
        description: "Practice Haskell with coding exercises",
        url: "https://exercism.org/tracks/haskell",
        type: "Coding Exercises",
      },
      {
        name: "Hoogle",
        description: "Haskell API search engine",
        url: "https://hoogle.haskell.org",
        type: "API Search",
      },
    ],

    learningRoadmap: [
      {
        phase: "Foundation (Weeks 1-5)",
        duration: "5 weeks",
        topics: ["Haskell Basics", "Types", "Functions", "Recursion"],
        projects: ["Calculator", "List Processor", "Tree Operations"],
      },
      {
        phase: "Intermediate (Weeks 6-10)",
        duration: "5 weeks",
        topics: ["Type Classes", "Functors", "Applicatives", "Monads"],
        projects: ["Parser Library", "State Machine", "DSL Implementation"],
      },
      {
        phase: "Advanced (Weeks 11-14)",
        duration: "4 weeks",
        topics: [
          "Advanced Types",
          "Concurrency",
          "Performance",
          "Real-world Apps",
        ],
        projects: [
          "Web Application",
          "Concurrent System",
          "Compiler/Interpreter",
        ],
      },
    ],
  },
];

// Export additional utility functions

/**
 * Get language by ID
 * @param {number} id - Language ID
 * @returns {LanguageDetail|undefined} Language detail or undefined
 */
export const getLanguageById = (id) => {
  return languageData.find((lang) => lang.id === id);
};

/**
 * Get language by name
 * @param {string} name - Language name
 * @returns {LanguageDetail|undefined} Language detail or undefined
 */
export const getLanguageByName = (name) => {
  return languageData.find(
    (lang) => lang.name.toLowerCase() === name.toLowerCase(),
  );
};

/**
 * Search languages by query
 * @param {string} query - Search query
 * @returns {LanguageDetail[]} Array of matching languages
 */
export const searchLanguages = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return languageData.filter(
    (lang) =>
      lang.name.toLowerCase().includes(lowercaseQuery) ||
      lang.description.toLowerCase().includes(lowercaseQuery) ||
      lang.coreTopics.some((topic) =>
        topic.toLowerCase().includes(lowercaseQuery),
      ),
  );
};
