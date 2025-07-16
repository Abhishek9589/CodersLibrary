import { useState } from "react";
import { Link } from "react-router-dom";
import Taskbar from "@/components/Taskbar";
import {
  Code2,
  Github,
  ExternalLink,
  BookOpen,
  Star,
  Users,
  Sparkles,
  Brain,
  Video,
  Cpu,
  Image as ImageIcon,
  Mic,
  MessageCircle,
  Search,
  Filter,
  X,
  CheckCircle,
  AlertTriangle,
  Zap,
  Shield,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Enhanced AI Tools Data with proper icons
const aiTools = [
  // 💬 Conversational AI
  {
    id: 1,
    name: "ChatGPT",
    company: "OpenAI",
    description:
      "Advanced conversational AI for text generation, coding, analysis, and creative tasks",
    category: "Conversational AI",
    pricing: "Free tier, Plus ₹1,660/month",
    features: [
      "Natural conversation",
      "Code generation",
      "Data analysis",
      "Creative writing",
      "Problem solving",
    ],
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
    difficulty: "Beginner",
    officialSite: "https://chat.openai.com",
    release: "2024",
    detailedDescription:
      "ChatGPT is OpenAI's flagship conversational AI that can engage in natural dialogue, answer questions, write content, generate code, and assist with complex reasoning tasks. Built on the GPT-4 architecture, it represents one of the most advanced AI assistants available today.",
    capabilities: [
      "Natural language conversation",
      "Code generation and debugging",
      "Creative writing and storytelling",
      "Data analysis and interpretation",
      "Mathematical problem solving",
      "Language translation",
      "Summarization and explanation",
    ],
    limitations: [
      "Knowledge cutoff date",
      "Cannot browse real-time internet",
      "May generate incorrect information",
      "Limited file upload capabilities in free version",
      "Cannot remember conversations across sessions",
    ],
    pros: [
      "Highly accurate responses",
      "User-friendly interface",
      "Excellent for learning and education",
      "Strong coding capabilities",
      "Free tier available",
    ],
    cons: [
      "Requires subscription for latest features",
      "Can be overconfident in responses",
      "Limited real-time information",
      "May refuse some legitimate requests",
    ],
    useCases: [
      "Content creation and writing",
      "Programming assistance",
      "Research and analysis",
      "Learning and tutoring",
      "Business communications",
    ],
  },
  {
    id: 2,
    name: "Claude",
    company: "Anthropic",
    description:
      "Constitutional AI focused on helpful, harmless, and honest conversations",
    category: "Conversational AI",
    pricing: "Free tier, Pro ₹1,660/month",
    features: [
      "200K context window",
      "Document analysis",
      "Ethical reasoning",
      "Code review",
      "Research assistance",
    ],
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    difficulty: "Beginner",
    officialSite: "https://claude.ai",
    release: "2024",
    detailedDescription:
      "Claude is Anthropic's AI assistant built with Constitutional AI principles, emphasizing safety, helpfulness, and honesty. It excels at complex reasoning, document analysis, and maintaining context over long conversations.",
    capabilities: [
      "Long-form document analysis",
      "Complex reasoning and logic",
      "Ethical decision making",
      "Code review and analysis",
      "Research synthesis",
      "Creative collaboration",
      "Multi-turn conversations",
    ],
    limitations: [
      "More conservative in responses",
      "Limited image generation",
      "Newer platform with fewer integrations",
      "May be overly cautious sometimes",
    ],
    pros: [
      "Excellent safety and ethics",
      "Superior long context handling",
      "High-quality reasoning",
      "Good for sensitive topics",
      "Honest about limitations",
    ],
    cons: [
      "More expensive than competitors",
      "Sometimes overly cautious",
      "Smaller ecosystem",
      "Less coding capability than GPT-4",
    ],
    useCases: [
      "Academic research",
      "Legal document analysis",
      "Ethical AI consulting",
      "Long-form content creation",
      "Policy analysis",
    ],
  },
  {
    id: 3,
    name: "Gemini",
    company: "Google DeepMind",
    description:
      "Google's multimodal AI for understanding text, images, audio, and code",
    category: "Conversational AI",
    pricing: "Free tier, Advanced ₹1,660/month",
    features: [
      "Multimodal capabilities",
      "Google integration",
      "Real-time information",
      "Code generation",
      "Image understanding",
    ],
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    difficulty: "Beginner",
    officialSite: "https://gemini.google.com",
    release: "2024",
    detailedDescription:
      "Gemini is Google's most advanced AI model, designed to be multimodal from the ground up. It can understand and reason across text, images, audio, and code, with deep integration into Google's ecosystem.",
    capabilities: [
      "Multimodal understanding",
      "Real-time web search",
      "Google Workspace integration",
      "Advanced mathematics",
      "Scientific reasoning",
      "Code generation and debugging",
      "Image and video analysis",
    ],
    limitations: [
      "Privacy concerns with Google",
      "Limited third-party integrations",
      "Newer platform, evolving features",
      "Data retention policies",
    ],
    pros: [
      "Excellent multimodal capabilities",
      "Real-time information access",
      "Strong Google integration",
      "Advanced reasoning",
      "Free tier with good capabilities",
    ],
    cons: [
      "Google data collection",
      "Less mature ecosystem",
      "Privacy considerations",
      "Limited customization",
    ],
    useCases: [
      "Research with real-time data",
      "Multimodal content creation",
      "Educational assistance",
      "Google Workspace automation",
      "Scientific analysis",
    ],
  },
  {
    id: 4,
    name: "Mistral AI",
    company: "Mistral AI",
    description:
      "European AI company focused on open and efficient language models",
    category: "Conversational AI",
    pricing: "API: ₹0.21/₹0.62 per 1M tokens",
    features: [
      "Open source models",
      "European data privacy",
      "Efficient inference",
      "Multilingual support",
      "Commercial licensing",
    ],
    icon: Zap,
    color: "from-orange-500 to-red-500",
    difficulty: "Intermediate",
    officialSite: "https://mistral.ai",
    release: "2024",
    detailedDescription:
      "Mistral AI is a European AI company providing open and efficient language models with a focus on transparency, performance, and data privacy compliance with European regulations.",
    capabilities: [
      "Multilingual conversation",
      "Code generation",
      "Text analysis",
      "European language expertise",
      "GDPR compliance",
      "Open source deployment",
      "Custom fine-tuning",
    ],
    limitations: [
      "Smaller model sizes",
      "Less training data than giants",
      "Newer company with limited track record",
      "Limited multimodal capabilities",
    ],
    pros: [
      "Strong privacy protection",
      "European data compliance",
      "Open source options",
      "Cost-effective",
      "Transparent development",
    ],
    cons: [
      "Less powerful than GPT-4",
      "Smaller ecosystem",
      "Limited brand recognition",
      "Fewer integrations",
    ],
    useCases: [
      "European enterprise applications",
      "Privacy-sensitive projects",
      "Open source development",
      "Multilingual applications",
      "Cost-conscious deployments",
    ],
  },
  {
    id: 5,
    name: "Character.AI",
    company: "Character Technologies",
    description:
      "Platform for creating and chatting with AI characters and personalities",
    category: "Conversational AI",
    pricing: "Free tier, Plus ₹830/month",
    features: [
      "Character creation",
      "Personality simulation",
      "Creative roleplay",
      "Community sharing",
      "Memory retention",
    ],
    icon: Users,
    color: "from-pink-500 to-purple-500",
    difficulty: "Beginner",
    officialSite: "https://character.ai",
    release: "2024",
    detailedDescription:
      "Character.AI allows users to create and interact with AI characters that have distinct personalities, backgrounds, and speaking styles. It's designed for creative conversations, roleplay, and entertainment.",
    capabilities: [
      "Character personality design",
      "Creative storytelling",
      "Roleplay conversations",
      "Memory across sessions",
      "Community character sharing",
      "Multiple conversation threads",
      "Educational characters",
    ],
    limitations: [
      "Limited real-world accuracy",
      "Focused on entertainment",
      "May generate inappropriate content",
      "Less suitable for factual queries",
      "Character inconsistencies",
    ],
    pros: [
      "Highly engaging conversations",
      "Creative and fun",
      "Strong character personalities",
      "Active community",
      "Good for entertainment",
    ],
    cons: [
      "Not suitable for serious work",
      "Potential for inappropriate content",
      "Can be addictive",
      "Limited factual accuracy",
      "Privacy concerns with personal data",
    ],
    useCases: [
      "Entertainment and gaming",
      "Creative writing assistance",
      "Language learning practice",
      "Therapeutic conversations",
      "Educational roleplay",
    ],
  },

  // 💻 Code Generation / Developer AI
  {
    id: 6,
    name: "GitHub Copilot",
    company: "GitHub/OpenAI",
    description:
      "AI-powered code completion and generation directly in your IDE",
    category: "Code Generation",
    pricing: "₹830/month, Enterprise ₹1,580/month",
    features: [
      "Real-time code completion",
      "Multi-language support",
      "IDE integration",
      "Code explanation",
      "Security scanning",
    ],
    icon: Github,
    color: "from-gray-600 to-gray-800",
    difficulty: "Beginner",
    officialSite: "https://github.com/features/copilot",
    release: "2024",
    detailedDescription:
      "GitHub Copilot is an AI pair programmer that helps developers write code faster by providing intelligent code completions, suggestions, and entire function implementations based on context and comments.",
    capabilities: [
      "Intelligent code completion",
      "Function and class generation",
      "Code explanation and documentation",
      "Test case generation",
      "Bug detection and fixes",
      "Multi-language support (50+ languages)",
      "IDE integration (VS Code, JetBrains, etc.)",
    ],
    limitations: [
      "Requires internet connection",
      "May suggest outdated patterns",
      "Can generate insecure code",
      "Limited understanding of project context",
      "Subscription required",
    ],
    pros: [
      "Significant productivity boost",
      "Excellent IDE integration",
      "Learns from your coding style",
      "Supports many languages",
      "Active development and updates",
    ],
    cons: [
      "Monthly subscription cost",
      "Can create dependency",
      "May suggest copyrighted code",
      "Sometimes generates incorrect code",
      "Privacy concerns with code analysis",
    ],
    useCases: [
      "Rapid prototyping",
      "Boilerplate code generation",
      "Learning new languages/frameworks",
      "Code documentation",
      "Pair programming assistance",
    ],
  },
  {
    id: 7,
    name: "Codeium",
    company: "Codeium",
    description:
      "Free AI code completion with enterprise features and privacy focus",
    category: "Code Generation",
    pricing: "Free for individuals, Enterprise pricing",
    features: [
      "Free unlimited usage",
      "70+ languages",
      "Private deployment",
      "Context awareness",
      "Chat interface",
    ],
    icon: Code2,
    color: "from-blue-500 to-indigo-500",
    difficulty: "Beginner",
    officialSite: "https://codeium.com",
    release: "2024",
    detailedDescription:
      "Codeium offers free AI-powered code completion with enterprise-grade features, focusing on privacy and performance. It provides unlimited usage for individuals while offering secure deployment options for enterprises.",
    capabilities: [
      "Unlimited free code completion",
      "70+ programming languages",
      "Context-aware suggestions",
      "Chat-based code assistance",
      "Private cloud deployment",
      "Code explanation",
      "Refactoring suggestions",
    ],
    limitations: [
      "Smaller training dataset than competitors",
      "Less brand recognition",
      "Fewer integrations",
      "Newer platform with evolving features",
    ],
    pros: [
      "Completely free for individuals",
      "Strong privacy focus",
      "Good performance",
      "Enterprise deployment options",
      "Active development",
    ],
    cons: [
      "Less accurate than premium competitors",
      "Smaller community",
      "Limited advanced features",
      "Fewer IDE integrations",
    ],
    useCases: [
      "Individual development projects",
      "Learning programming",
      "Privacy-sensitive enterprise development",
      "Cost-conscious teams",
      "Open source projects",
    ],
  },
  {
    id: 8,
    name: "Amazon CodeWhisperer",
    company: "Amazon Web Services",
    description:
      "AWS-integrated AI code generator with security scanning and optimization",
    category: "Code Generation",
    pricing: "Free tier, Professional ₹1,580/month",
    features: [
      "AWS integration",
      "Security scanning",
      "Code optimization",
      "15+ languages",
      "CLI support",
    ],
    icon: Cpu,
    color: "from-orange-400 to-yellow-500",
    difficulty: "Intermediate",
    officialSite: "https://aws.amazon.com/codewhisperer",
    release: "2024",
    detailedDescription:
      "Amazon CodeWhisperer is an AI coding companion that provides code suggestions, security scanning, and AWS service integration. It's designed to help developers build applications faster while maintaining security best practices.",
    capabilities: [
      "Code generation and completion",
      "Security vulnerability detection",
      "AWS service integration",
      "Code optimization suggestions",
      "CLI and IDE support",
      "Reference tracking",
      "Bias detection",
    ],
    limitations: [
      "Strong bias toward AWS services",
      "Limited free tier",
      "Requires AWS account",
      "Less general-purpose than competitors",
      "Primarily cloud-focused",
    ],
    pros: [
      "Excellent AWS integration",
      "Strong security features",
      "Good for cloud development",
      "Free tier available",
      "Enterprise-ready",
    ],
    cons: [
      "AWS ecosystem lock-in",
      "Limited for non-cloud projects",
      "Less versatile than competitors",
      "Complex pricing structure",
      "Requires AWS knowledge",
    ],
    useCases: [
      "AWS cloud development",
      "Enterprise applications",
      "Security-focused projects",
      "DevOps automation",
      "Serverless applications",
    ],
  },
  {
    id: 9,
    name: "Tabnine",
    company: "Tabnine",
    description:
      "AI code assistant with team learning and private model deployment",
    category: "Code Generation",
    pricing: "Free tier, Pro ₹1,000/month",
    features: [
      "Team learning",
      "Private deployment",
      "Whole-line completion",
      "Code privacy",
      "Custom models",
    ],
    icon: Zap,
    color: "from-purple-500 to-blue-500",
    difficulty: "Intermediate",
    officialSite: "https://www.tabnine.com",
    release: "2024",
    detailedDescription:
      "Tabnine is an AI code assistant that focuses on team collaboration and code privacy. It can learn from your team's codebase and run entirely on-premises for maximum security.",
    capabilities: [
      "Personalized code completion",
      "Team-specific learning",
      "Private model training",
      "Whole-line/function suggestions",
      "Code pattern learning",
      "Local deployment",
      "Multiple IDE support",
    ],
    limitations: [
      "Requires setup for team features",
      "More expensive for advanced features",
      "Learning curve for configuration",
      "Limited free features",
    ],
    pros: [
      "Excellent privacy protection",
      "Team learning capabilities",
      "On-premises deployment",
      "Learns your coding patterns",
      "Good IDE integration",
    ],
    cons: [
      "Higher cost for full features",
      "Complex setup for teams",
      "Less general knowledge than cloud-based",
      "Requires larger codebase for learning",
    ],
    useCases: [
      "Enterprise development teams",
      "Privacy-sensitive projects",
      "Custom codebase learning",
      "On-premises deployment",
      "Team-specific patterns",
    ],
  },
  {
    id: 10,
    name: "Cursor",
    company: "Anysphere",
    description:
      "AI-powered code editor with built-in chat and code generation",
    category: "Code Generation",
    pricing: "Free tier, Pro ₹1,660/month",
    features: [
      "AI-powered editor",
      "Chat interface",
      "Codebase understanding",
      "Diff generation",
      "Privacy mode",
    ],
    icon: BookOpen,
    color: "from-green-400 to-blue-500",
    difficulty: "Beginner",
    officialSite: "https://cursor.sh",
    release: "2024",
    detailedDescription:
      "Cursor is an AI-first code editor that combines the familiarity of VS Code with powerful AI capabilities. It can understand your entire codebase and provide contextual assistance through chat and inline suggestions.",
    capabilities: [
      "Codebase-wide understanding",
      "Natural language code editing",
      "AI chat integration",
      "Diff-based editing",
      "Multi-file modifications",
      "Privacy-first design",
      "VS Code compatibility",
    ],
    limitations: [
      "Relatively new platform",
      "Limited ecosystem compared to established IDEs",
      "Requires learning new interface",
      "Subscription for advanced features",
    ],
    pros: [
      "Deep codebase understanding",
      "Intuitive AI interaction",
      "Privacy-focused",
      "Powerful multi-file editing",
      "Modern interface",
    ],
    cons: [
      "New platform with smaller community",
      "Learning curve from traditional IDEs",
      "Limited extensions",
      "Subscription required for full features",
    ],
    useCases: [
      "Full-stack development",
      "Large codebase navigation",
      "AI-assisted refactoring",
      "Rapid prototyping",
      "Code exploration and learning",
    ],
  },

  // 🎨 Image Generation
  {
    id: 11,
    name: "Midjourney",
    company: "Midjourney",
    description:
      "Premium AI image generator known for artistic and creative outputs",
    category: "Image Generation",
    pricing: "₹830-4,150/month subscription",
    features: [
      "High-quality art generation",
      "Style customization",
      "Discord integration",
      "Community gallery",
      "Commercial usage",
    ],
    icon: ImageIcon,
    color: "from-purple-500 to-pink-500",
    difficulty: "Intermediate",
    officialSite: "https://midjourney.com",
    release: "2024",
    detailedDescription:
      "Midjourney is renowned for producing some of the highest quality AI-generated images with exceptional artistic flair. It operates through Discord and has built a strong community of digital artists and creators.",
    capabilities: [
      "Photorealistic image generation",
      "Artistic style synthesis",
      "Concept art creation",
      "Portrait generation",
      "Architecture visualization",
      "Product design mockups",
      "Fantasy and sci-fi art",
    ],
    limitations: [
      "Discord-only interface",
      "No free tier",
      "Limited control over specific details",
      "Subscription required",
      "Queue-based generation",
    ],
    pros: [
      "Exceptional image quality",
      "Strong artistic capabilities",
      "Vibrant community",
      "Consistent style",
      "Commercial licensing",
    ],
    cons: [
      "Expensive compared to alternatives",
      "Discord interface may be confusing",
      "Limited fine-tuning control",
      "No API access",
      "Can be slow during peak times",
    ],
    useCases: [
      "Concept art and design",
      "Marketing visuals",
      "Digital art creation",
      "Book and game illustrations",
      "Social media content",
    ],
  },
  {
    id: 12,
    name: "DALL·E 3",
    company: "OpenAI",
    description:
      "Advanced AI image generator with improved prompt understanding and safety",
    category: "Image Generation",
    pricing: "ChatGPT Plus or API pricing",
    features: [
      "Prompt adherence",
      "Text in images",
      "Safety filtering",
      "Style consistency",
      "High resolution",
    ],
    icon: ImageIcon,
    color: "from-blue-500 to-green-500",
    difficulty: "Beginner",
    officialSite: "https://openai.com/dall-e-3",
    release: "2024",
    detailedDescription:
      "DALL·E 3 represents OpenAI's latest advancement in text-to-image generation, offering improved prompt understanding, better safety filters, and the ability to generate text within images.",
    capabilities: [
      "Accurate prompt interpretation",
      "Text generation within images",
      "Multiple artistic styles",
      "High-resolution output",
      "Content policy compliance",
      "Integration with ChatGPT",
      "API access",
    ],
    limitations: [
      "Strict content policies",
      "Limited customization options",
      "Expensive for high usage",
      "No fine-tuning capabilities",
      "Can refuse legitimate requests",
    ],
    pros: [
      "Excellent prompt following",
      "Integrated with ChatGPT",
      "Strong safety measures",
      "Good for beginners",
      "API availability",
    ],
    cons: [
      "Overly restrictive policies",
      "Limited artistic freedom",
      "Higher cost per image",
      "No batch processing",
      "Less stylistic variety than competitors",
    ],
    useCases: [
      "Content creation",
      "Educational materials",
      "Business presentations",
      "Social media graphics",
      "Product mockups",
    ],
  },
  {
    id: 13,
    name: "Stable Diffusion",
    company: "Stability AI",
    description:
      "Open-source image generation model with unlimited customization",
    category: "Image Generation",
    pricing: "Free (open source)",
    features: [
      "Open source",
      "Local deployment",
      "Custom training",
      "ControlNet support",
      "Commercial use",
    ],
    icon: ImageIcon,
    color: "from-orange-500 to-red-500",
    difficulty: "Advanced",
    officialSite: "https://stability.ai",
    release: "2024",
    detailedDescription:
      "Stable Diffusion is an open-source text-to-image model that can be run locally, customized extensively, and used for commercial purposes without restrictions. It has spawned a large ecosystem of tools and modifications.",
    capabilities: [
      "Unlimited local generation",
      "Custom model training",
      "Style transfer and modification",
      "ControlNet integration",
      "Inpainting and outpainting",
      "Animation and video",
      "Complete customization freedom",
    ],
    limitations: [
      "Requires technical setup",
      "Hardware requirements",
      "Learning curve",
      "Time-consuming training",
      "Inconsistent quality without tuning",
    ],
    pros: [
      "Completely free and open",
      "Unlimited customization",
      "Local processing",
      "Large community",
      "Commercial use allowed",
    ],
    cons: [
      "Technical complexity",
      "Requires powerful hardware",
      "Setup and maintenance",
      "Quality varies significantly",
      "No official support",
    ],
    useCases: [
      "Personal art projects",
      "Commercial product development",
      "Research and experimentation",
      "Custom style development",
      "Privacy-sensitive applications",
    ],
  },
  {
    id: 14,
    name: "Adobe Firefly",
    company: "Adobe",
    description:
      "Commercially safe AI image generator integrated with Creative Cloud",
    category: "Image Generation",
    pricing: "Creative Cloud subscription",
    features: [
      "Commercial safety",
      "Creative Cloud integration",
      "Text effects",
      "Vector generation",
      "Content credentials",
    ],
    icon: ImageIcon,
    color: "from-red-500 to-orange-500",
    difficulty: "Beginner",
    officialSite: "https://firefly.adobe.com",
    release: "2024",
    detailedDescription:
      "Adobe Firefly is designed for commercial use with training data that respects copyright and creator rights. It integrates seamlessly with Adobe's Creative Cloud suite and focuses on safe, responsible AI generation.",
    capabilities: [
      "Copyright-safe generation",
      "Creative Cloud integration",
      "Text effect generation",
      "Vector image creation",
      "Background replacement",
      "Content-aware fill",
      "Brand-safe content",
    ],
    limitations: [
      "Requires Adobe subscription",
      "Less creative freedom than competitors",
      "Conservative content policies",
      "Limited to Adobe ecosystem",
      "Fewer artistic styles",
    ],
    pros: [
      "Commercially safe for business",
      "Excellent Creative Cloud integration",
      "Professional workflow support",
      "Copyright compliance",
      "Enterprise features",
    ],
    cons: [
      "Expensive subscription required",
      "Less artistic variety",
      "Adobe ecosystem lock-in",
      "Conservative output",
      "Limited standalone functionality",
    ],
    useCases: [
      "Professional design work",
      "Corporate marketing materials",
      "Brand-compliant content",
      "Adobe workflow integration",
      "Commercial advertising",
    ],
  },
  {
    id: 15,
    name: "Leonardo.AI",
    company: "Leonardo.AI",
    description:
      "AI image generator focused on game assets and production-ready content",
    category: "Image Generation",
    pricing: "Free tier, ₹830-2,490/month",
    features: [
      "Game asset generation",
      "3D texture creation",
      "Character design",
      "Environment art",
      "Production pipeline",
    ],
    icon: ImageIcon,
    color: "from-indigo-500 to-purple-500",
    difficulty: "Intermediate",
    officialSite: "https://leonardo.ai",
    release: "2024",
    detailedDescription:
      "Leonardo.AI specializes in creating production-ready assets for games, applications, and creative projects. It offers specialized models for different types of content and focuses on consistency and usability in production workflows.",
    capabilities: [
      "Game asset generation",
      "Character concept art",
      "Environment design",
      "3D texture creation",
      "Consistent style generation",
      "Production-ready outputs",
      "Custom model training",
    ],
    limitations: [
      "Specialized for certain use cases",
      "Limited general-purpose capability",
      "Smaller community than mainstream tools",
      "Learning curve for optimal results",
    ],
    pros: [
      "Excellent for game development",
      "Production-focused features",
      "Consistent output quality",
      "Good free tier",
      "Specialized models",
    ],
    cons: [
      "Niche focus limits versatility",
      "Less suitable for general art",
      "Smaller user community",
      "Limited style variety",
      "Requires specific workflow knowledge",
    ],
    useCases: [
      "Game development",
      "Character design",
      "Environment concept art",
      "3D asset texturing",
      "Production workflows",
    ],
  },

  // 🛠️ Visual Development / UI Building
  {
    id: 16,
    name: "Builder.io",
    company: "Builder.io",
    description:
      "AI-powered visual development platform for creating web experiences",
    category: "Visual Development",
    pricing: "Free tier, Pro ₹1,660+/month",
    features: [
      "AI design to code",
      "Visual editor",
      "Framework integration",
      "A/B testing",
      "Performance optimization",
    ],
    icon: Cpu,
    color: "from-blue-600 to-cyan-500",
    difficulty: "Intermediate",
    officialSite: "https://www.builder.io",
    release: "2024",
    detailedDescription:
      "Builder.io is a visual development platform that uses AI to convert designs into production-ready code. It enables designers and developers to collaborate seamlessly while maintaining high performance and developer experience.",
    capabilities: [
      "Design to code conversion",
      "Visual drag-and-drop editing",
      "Framework-agnostic output",
      "Performance optimization",
      "A/B testing and experimentation",
      "Content management",
      "Real-time collaboration",
    ],
    limitations: [
      "Learning curve for complex workflows",
      "Can generate verbose code",
      "Limited customization in generated output",
      "Subscription required for advanced features",
    ],
    pros: [
      "Excellent design to code accuracy",
      "Strong performance optimization",
      "Good framework support",
      "Visual collaboration features",
      "Enterprise-ready",
    ],
    cons: [
      "Complex pricing structure",
      "Can be overwhelming for beginners",
      "Generated code may need optimization",
      "Vendor lock-in potential",
    ],
    useCases: [
      "E-commerce development",
      "Marketing landing pages",
      "Content-heavy websites",
      "A/B testing scenarios",
      "Design system implementation",
    ],
  },
  {
    id: 17,
    name: "Framer AI",
    company: "Framer",
    description:
      "AI-powered web design tool that generates responsive websites from prompts",
    category: "Visual Development",
    pricing: "Free tier, ₹410-2,490/month",
    features: [
      "AI website generation",
      "Responsive design",
      "Animation tools",
      "CMS integration",
      "SEO optimization",
    ],
    icon: Cpu,
    color: "from-purple-600 to-pink-500",
    difficulty: "Beginner",
    officialSite: "https://framer.com",
    release: "2024",
    detailedDescription:
      "Framer AI transforms text prompts into fully functional, responsive websites with sophisticated animations and interactions. It combines AI generation with powerful design tools for creating professional web experiences.",
    capabilities: [
      "Text-to-website generation",
      "Responsive design automation",
      "Advanced animations",
      "Component libraries",
      "CMS and database integration",
      "SEO and performance optimization",
      "Publishing and hosting",
    ],
    limitations: [
      "Limited to web projects",
      "Can be expensive for freelancers",
      "Learning curve for advanced features",
      "Limited export options",
    ],
    pros: [
      "Very user-friendly",
      "Beautiful default designs",
      "Strong animation capabilities",
      "Good AI generation quality",
      "All-in-one solution",
    ],
    cons: [
      "Subscription required",
      "Limited to Framer ecosystem",
      "Can be slow with complex sites",
      "Less flexibility than custom coding",
    ],
    useCases: [
      "Small business websites",
      "Portfolio sites",
      "Landing pages",
      "Prototype development",
      "Marketing websites",
    ],
  },
  {
    id: 18,
    name: "TeleportHQ",
    company: "TeleportHQ",
    description:
      "Visual development platform with AI-assisted design-to-code conversion",
    category: "Visual Development",
    pricing: "Free tier, Pro ₹1,245/month",
    features: [
      "Visual editor",
      "Code generation",
      "Collaboration tools",
      "Component libraries",
      "Version control",
    ],
    icon: Cpu,
    color: "from-green-500 to-teal-500",
    difficulty: "Intermediate",
    officialSite: "https://teleporthq.io",
    release: "2024",
    detailedDescription:
      "TeleportHQ is a low-code front-end design and development platform that bridges the gap between design and code. It offers AI-assisted tools for converting designs into clean, production-ready code.",
    capabilities: [
      "Visual website building",
      "Clean code generation",
      "Team collaboration",
      "Component reusability",
      "Integration with popular frameworks",
      "Version control integration",
      "Design system management",
    ],
    limitations: [
      "Smaller community",
      "Limited advanced customization",
      "Learning curve for developers",
      "Fewer templates than competitors",
    ],
    pros: [
      "Clean code output",
      "Good collaboration features",
      "Reasonable pricing",
      "Framework flexibility",
      "Developer-friendly",
    ],
    cons: [
      "Less popular than alternatives",
      "Limited AI features",
      "Smaller template library",
      "Less advanced animation tools",
    ],
    useCases: [
      "Agency development",
      "Team collaboration projects",
      "Component library creation",
      "Rapid prototyping",
      "Framework-specific development",
    ],
  },
  {
    id: 19,
    name: "Uizard",
    company: "Uizard",
    description:
      "AI-powered UI design tool that converts sketches and ideas into digital designs",
    category: "Visual Development",
    pricing: "Free tier, Pro ₹1,000/month",
    features: [
      "Sketch to design",
      "AI mockup generation",
      "Screenshot to design",
      "Collaboration tools",
      "Prototype creation",
    ],
    icon: Cpu,
    color: "from-yellow-500 to-orange-500",
    difficulty: "Beginner",
    officialSite: "https://uizard.io",
    release: "2024",
    detailedDescription:
      "Uizard uses AI to transform hand-drawn sketches, screenshots, and text descriptions into digital UI designs. It's designed for rapid prototyping and ideation with minimal design experience required.",
    capabilities: [
      "Hand-drawn sketch digitization",
      "Screenshot to editable design",
      "Text to UI generation",
      "Rapid prototyping",
      "Team collaboration",
      "Design system creation",
      "Export to popular formats",
    ],
    limitations: [
      "Limited to UI/UX design",
      "Basic coding output",
      "Not suitable for complex applications",
      "Limited customization options",
    ],
    pros: [
      "Very beginner-friendly",
      "Unique sketch-to-design feature",
      "Fast prototyping",
      "Good for ideation",
      "Affordable pricing",
    ],
    cons: [
      "Limited advanced features",
      "Basic code generation",
      "Less suitable for production",
      "Limited design complexity",
      "Fewer integrations",
    ],
    useCases: [
      "Rapid prototyping",
      "Concept validation",
      "Non-designer use cases",
      "Client presentations",
      "Early-stage startups",
    ],
  },
  {
    id: 20,
    name: "Diagram",
    company: "DesignGPT",
    description:
      "AI design tool for creating diagrams, flowcharts, and visual documentation",
    category: "Visual Development",
    pricing: "Free tier, Pro ₹830/month",
    features: [
      "AI diagram generation",
      "Flowchart creation",
      "Visual documentation",
      "Template library",
      "Export options",
    ],
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
    difficulty: "Beginner",
    officialSite: "https://diagram.com",
    release: "2024",
    detailedDescription:
      "Diagram is an AI-powered tool for creating various types of diagrams, flowcharts, and visual documentation. It uses natural language processing to generate professional diagrams from text descriptions.",
    capabilities: [
      "Text-to-diagram conversion",
      "Flowchart automation",
      "System architecture diagrams",
      "Process documentation",
      "Mind mapping",
      "Organizational charts",
      "Technical documentation",
    ],
    limitations: [
      "Limited to diagram creation",
      "Simple design capabilities",
      "Not suitable for complex graphics",
      "Basic customization options",
    ],
    pros: [
      "Quick diagram creation",
      "Good for technical documentation",
      "Easy to use",
      "Multiple export formats",
      "Affordable",
    ],
    cons: [
      "Limited design flexibility",
      "Basic visual styling",
      "Not for general design work",
      "Simple functionality",
      "Limited collaboration features",
    ],
    useCases: [
      "Technical documentation",
      "Process mapping",
      "System design",
      "Educational materials",
      "Business presentations",
    ],
  },
];

// Filter categories
const categories = [
  "All Categories",
  "Conversational AI",
  "Code Generation",
  "Image Generation",
  "Visual Development",
];

export default function AI() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState(
    null,
  );

  const filteredTools = aiTools.filter((tool) => {
    const matchesCategory =
      selectedCategory === "All Categories" ||
      tool.category === selectedCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Conversational AI":
        return MessageCircle;
      case "Code Generation":
        return Code2;
      case "Image Generation":
        return ImageIcon;
      case "Visual Development":
        return Cpu;
      default:
        return Brain;
    }
  };

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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Gen <span className="gradient-text">AI Tools</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Explore the latest AI tools for development, creativity, and
            productivity
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">{aiTools.length}+</div>
            <div className="text-foreground/70 text-sm">AI Tools</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Cpu className="h-8 w-8 text-teal-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">
              {categories.length - 1}
            </div>
            <div className="text-foreground/70 text-sm">Categories</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">4</div>
            <div className="text-foreground/70 text-sm">Main Categories</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <Sparkles className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold mb-1">2024</div>
            <div className="text-foreground/70 text-sm">Latest Updates</div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="glass-card p-6 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search AI tools by name, company, or capability..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
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
            </div>
          </div>

          {/* AI Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{tool.name}</h3>
                          <p className="text-sm text-foreground/60">
                            {tool.company} • {tool.release}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 mb-4">
                      {tool.description}
                    </p>

                    {/* Category and Difficulty */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {tool.category}
                      </Badge>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(tool.difficulty)}`}
                      >
                        {tool.difficulty}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <span className="text-sm font-medium text-green-400">
                        {tool.pricing}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {tool.features.slice(0, 3).map((feature, index) => (
                          <div
                            key={index}
                            className="text-xs text-foreground/70 flex items-center space-x-1"
                          >
                            <Sparkles className="h-3 w-3 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {tool.features.length > 3 && (
                        <div className="text-xs text-primary mt-1">
                          +{tool.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => window.open(tool.officialSite, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Try {tool.name}
                      </Button>
                      <Button
                        className="w-full"
                        size="sm"
                        onClick={() => setSelectedTool(tool)}
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Want to integrate AI into your projects?
              </h3>
              <p className="text-foreground/70 mb-6">
                Explore our tutorials and guides to get started with AI tools
                and APIs
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  <BookOpen className="h-4 w-4 mr-2" />
                  AI Integration Guide
                </Button>
                <Button variant="outline">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Tutorials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Tool Modal */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedTool.color} flex items-center justify-center`}
                  >
                    <selectedTool.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedTool.name}</h2>
                    <p className="text-lg text-foreground/70">
                      {selectedTool.company}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTool(null)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold mb-3">Overview</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {selectedTool.detailedDescription}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-lg text-center">
                  <DollarSign className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-medium">
                    {selectedTool.pricing}
                  </div>
                  <div className="text-xs text-foreground/60">Pricing</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${getDifficultyColor(selectedTool.difficulty)}`}
                  >
                    {selectedTool.difficulty}
                  </span>
                  <div className="text-xs text-foreground/60 mt-1">
                    Difficulty
                  </div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <Badge variant="secondary" className="mb-1">
                    {selectedTool.category}
                  </Badge>
                  <div className="text-xs text-foreground/60">Category</div>
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTool.capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Limitations */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-400" />
                  Limitations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTool.limitations.map((limitation, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-orange-500/10 rounded-lg"
                    >
                      <AlertTriangle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pros */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">
                    Pros
                  </h3>
                  <div className="space-y-2">
                    {selectedTool.pros.map((pro, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">
                          {pro}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cons */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-400">
                    Cons
                  </h3>
                  <div className="space-y-2">
                    {selectedTool.cons.map((con, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">
                          {con}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Best Use Cases
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedTool.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="p-3 bg-primary/10 rounded-lg text-center"
                    >
                      <span className="text-sm font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={() =>
                    window.open(selectedTool.officialSite, "_blank")
                  }
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Try {selectedTool.name}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  size="lg"
                  onClick={() => setSelectedTool(null)}
                >
                  Close Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
