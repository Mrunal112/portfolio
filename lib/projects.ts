export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "balancebox-wallet",
    title: "BalanceBox Wallet",
    category: "Full-Stack Application",
    shortDescription:
      "A comprehensive digital wallet application built with modern tech stack, featuring money transfers, bank integrations, and secure transaction management.",
    description: [
      "BalanceBox is a comprehensive digital wallet application built with a modern tech stack, featuring money transfers, bank integrations, and secure transaction management. The application provides users with a seamless experience for managing their digital finances with enterprise-grade security and reliability.",
      "Built using a monorepo architecture with Turborepo, the platform enables shared UI libraries, database schema, and state management across multiple applications. The system implements robust database transactions and locking mechanisms to ensure consistency and reliability of money transfers, with comprehensive webhook integration for real-time transaction processing.",
      "The application is containerized using Docker and deployed on Kubernetes with Ingress for load balancing and service discovery. Automated CI/CD pipelines via GitHub Actions handle build, testing, and deployment processes, while Prometheus and Grafana provide monitoring, system health checks, and performance metrics visualization.",
    ],
    features: [
      "Instant money transfers using phone numbers with quick transfer amounts",
      "Bank integration for seamless fund addition from multiple banks (HDFC, SBI)",
      "Real-time transaction tracking with success, failure, and processing status",
      "Comprehensive dashboard showing balance, locked funds, and transaction history",
      "Secure user authentication and session management with NextAuth.js",
      "Webhook integration for real-time transaction updates and bank communication",
      "Robust database transactions with locking for financial consistency",
      "Monorepo architecture with shared components and state management",
      "Containerized deployment with Kubernetes orchestration",
      "Automated CI/CD pipelines with comprehensive testing",
      "Scalable AWS EC2 infrastructure with auto-scaling and fault tolerance",
    ],
    technologies: [
      "Next.js 14",
      "App Router",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth.js",
      "Tailwind CSS",
      "TypeScript",
      "Recoil",
      "Turborepo",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS EC2",
    ],
    coverImage: "/balancebox-send-money.png",
    thumbnailImage: "/balancebox-landing.png",
    gallery: [
      { url: "/balancebox-landing.png", caption: "Landing Page - Digital Wallet Features" },
      { url: "/balancebox-signup.png", caption: "User Registration and Account Creation" },
      { url: "/balancebox-send-money.png", caption: "Send Money Interface with Quick Transfer Options" },
      { url: "/balancebox-add-money.png", caption: "Add Money from Bank Accounts" },
      { url: "/balancebox-transactions.png", caption: "Transaction History and Status Tracking" },
      { url: "/balancebox-architecture.png", caption: "System Architecture and Data Flow" },
    ],
    timeline: "2025",
    role: "",
    liveUrl: "",
    githubUrl: "https://github.com/Mrunal112/balancebox-transaction-app",
    relatedProjects: [
      {
        slug: "codelogs-blog",
        title: "CodeLogs Blog",
        category: "Full-Stack Application",
        image: "/codelogs-homepage.png",
      },
      {
        slug: "balancebox-personal-wallet",
        title: "BalanceBox Personal Wallet",
        category: "Finance Management",
        image: "/finance-dashboard.png",
      },
    ],
  },
  {
    id: 2,
    slug: "codelogs-blog",
    title: "CodeLogs Blog",
    category: "Full-Stack Application",
    shortDescription:
      "A comprehensive full-stack blog application built with modern web technologies, featuring a React frontend with advanced theming, Cloudflare Workers backend, and PostgreSQL database with intelligent content management.",
    description: [
      "CodeLogs Blog is a full-stack blog application built with cutting-edge web technologies, designed to provide developers with a platform to share insights, tutorials, and best practices. The application features a modern React frontend with advanced theming capabilities, powered by a robust Cloudflare Workers backend and PostgreSQL database.",
      "The platform leverages React 19.1.1 with concurrent features for optimal performance, TypeScript for enhanced developer experience, and Vite 7.1.2 for next-generation frontend tooling. The backend utilizes Hono 4.7.10 framework running on Cloudflare Workers for edge computing, ensuring global performance and scalability.",
      "The application implements intelligent content management with Prisma 6.8.2 ORM providing type-safe database operations, JWT-based authentication for secure user sessions, and advanced routing with React Router DOM 7.8.0. The platform supports categorized content with filtering capabilities and provides an intuitive publishing interface for content creators.",
    ],
    features: [
      "Modern blog publishing interface with rich text editing capabilities",
      "Advanced content categorization and filtering system (Docker, DevOps, Tutorials)",
      "User authentication and session management with JWT tokens",
      "Responsive design with dark/light theme switching",
      "Real-time content publishing and management",
      "SEO-optimized blog post pages with metadata management",
      "Advanced routing with nested routes and dynamic content loading",
      "Global edge computing with Cloudflare Workers for optimal performance",
      "Type-safe database operations with Prisma ORM",
      "Context API-based state management for seamless user experience",
      "PostgreSQL database with Prisma Accelerate for enhanced performance",
    ],
    technologies: [
      "React 19.1.1",
      "TypeScript",
      "Vite 7.1.2",
      "Tailwind CSS 4.1.12",
      "React Router DOM 7.8.0",
      "Context API",
      "Hono 4.7.10",
      "Prisma 6.8.2",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma Accelerate",
      "JWT",
    ],
    coverImage: "/codelogs-homepage.png",
    thumbnailImage: "/codelogs-homepage.png",
    gallery: [
      { url: "/codelogs-homepage.png", caption: "Homepage with Latest Articles and Category Filters" },
      { url: "/codelogs-signin.png", caption: "User Authentication with Motivational Quote" },
      { url: "/codelogs-viewblog.png", caption: "Blog Post Detail View with Tags and Metadata" },
      { url: "/codelogs-publish.png", caption: "Blog Publishing Interface for Content Creation" },
    ],
    timeline: "2025",
    role: "",
    liveUrl: "",
    githubUrl: "https://github.com/Mrunal112/devlogs-blog",
    relatedProjects: [
      {
        slug: "balancebox-wallet",
        title: "BalanceBox Wallet",
        category: "Full-Stack Application",
        image: "/balancebox-landing.png",
      },
      {
        slug: "wisehealth-navigator",
        title: "WiseHealth Navigator",
        category: "Healthcare Management System",
        image: "/wisehealth-landing.png",
      },
    ],
  },
  {
    id: 3,
    slug: "wisehealth-navigator",
    title: "WiseHealth Navigator",
    category: "Healthcare Management System",
    shortDescription:
      "A patient queue management system designed to streamline hospital processes, particularly catering to elderly patients with centralized queue management and real-time updates.",
    description: [
      "WiseHealth Navigator is a comprehensive patient queue management system designed to streamline the process of managing patient queues for various tests and procedures in a hospital setting. The application particularly caters to the needs of elderly patients by providing a simple, intuitive interface that minimizes direct user interaction while maximizing efficiency.",
      "The system features centralized queue management where patients can view their queue status and wait comfortably in designated areas until their turn arrives. Real-time updates display the next patient's number on screens throughout the facility, ensuring patients are informed without the need to wait in physical lines.",
      "Built with React.js and Vite for the frontend, the application uses Tailwind CSS for responsive styling and Node.js with Express.js for the backend. MongoDB with Mongoose provides reliable data storage for patient information, while Axios handles HTTP requests for seamless communication between frontend and backend components.",
    ],
    features: [
      "Centralized queue management for hospital tests and procedures",
      "Real-time patient queue status updates on display screens",
      "Elderly-friendly interface with minimal user interaction required",
      "Administrative control for doctors and nurses to manage patient data",
      "Patient information management with age, test type, and status tracking",
      "Queue position tracking with waiting numbers and progress indicators",
      "Secure admin authentication for healthcare staff access",
      "Real-time notifications for successful and failed operations",
      "MongoDB database integration for reliable patient data storage",
      "Responsive design optimized for hospital display systems",
      "Audio notifications for patient queue updates",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Axios",
      "JavaScript",
    ],
    coverImage: "/wisehealth-success.png",
    thumbnailImage: "/wisehealth-landing.png",
    gallery: [
      { url: "/wisehealth-landing.png", caption: "Patient Queue Display with Real-time Status Updates" },
      { url: "/wisehealth-admin-login.png", caption: "Admin Authentication for Healthcare Staff" },
      { url: "/wisehealth-success.png", caption: "Success Notification for Patient Updates" },
      { url: "/wisehealth-error.png", caption: "Error Handling and User Feedback" },
      { url: "/wisehealth-database.png", caption: "MongoDB Database Structure for Patient Management" },
    ],
    timeline: "2024",
    role: "",
    liveUrl: "",
    githubUrl: "https://github.com/Mrunal112/wisehealth-navigator",
    relatedProjects: [
      {
        slug: "balancebox-wallet",
        title: "BalanceBox Wallet",
        category: "Full-Stack Application",
        image: "/balancebox-landing.png",
      },
      {
        slug: "codelogs-blog",
        title: "CodeLogs Blog",
        category: "Full-Stack Application",
        image: "/codelogs-homepage.png",
      },
    ],
  },
  {
    id: 4,
    slug: "balancebox-personal-wallet",
    title: "BalanceBox Personal Wallet",
    category: "Finance Management",
    shortDescription:
      "A modern digital wallet application built with React, TypeScript, and MongoDB. BalanceBox allows users to manage their finances, send money, view transaction history, and track spending with beautiful charts and analytics.",
    description: [
      "BalanceBox Personal Wallet is a modern digital wallet application designed to provide users with comprehensive financial management capabilities. Built with React 19, TypeScript, and MongoDB, the application offers a seamless experience for managing personal finances, sending money, and tracking spending patterns through beautiful interactive charts and analytics.",
      "The application features secure JWT token-based authentication for user accounts, real-time balance updates after transactions, and a responsive design built with Tailwind CSS 4 and Radix UI components. Users can visualize their spending patterns through interactive bar and pie charts powered by Recharts, making financial data easy to understand and analyze.",
      "The backend is built with Node.js and Express.js, utilizing MongoDB with Mongoose ODM for reliable data storage. The application implements secure API endpoints with JWT middleware protection, input validation using Zod schemas, and CORS configuration for cross-origin requests, ensuring a secure and robust financial management platform.",
    ],
    features: [
      "Secure user authentication with JWT token-based system",
      "Account management with real-time balance tracking",
      "Seamless money transfer functionality between users",
      "Detailed transaction history with comprehensive records",
      "Financial analytics with interactive bar and pie charts",
      "Spending pattern visualization and insights",
      "Responsive design with modern UI components",
      "Real-time balance updates after transactions",
      "Secure API endpoints with JWT middleware protection",
      "Input validation and schema validation with Zod",
      "Cross-origin request handling with CORS configuration",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "Radix UI",
      "React Router DOM",
      "Recharts",
      "Axios",
      "Zod",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    coverImage: "/modern-finance-dashboard-with-charts.jpg",
    thumbnailImage: "/finance-wallet-app.jpg",
    gallery: [
      { url: "/finance-dashboard-overview.jpg", caption: "Dashboard Overview with Balance and Analytics" },
      { url: "/money-transfer-interface.jpg", caption: "Money Transfer Interface" },
      { url: "/transaction-history-list.jpg", caption: "Transaction History and Records" },
      { url: "/financial-charts-analytics.jpg", caption: "Financial Analytics with Interactive Charts" },
    ],
    timeline: "2024",
    role: "",
    liveUrl: "",
    githubUrl: "https://github.com/Mrunal112/balancebox-wallet",
    relatedProjects: [
      {
        slug: "balancebox-wallet",
        title: "BalanceBox Wallet",
        category: "Full-Stack Application",
        image: "/balancebox-landing.png",
      },
      {
        slug: "codelogs-blog",
        title: "CodeLogs Blog",
        category: "Full-Stack Application",
        image: "/codelogs-homepage.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
