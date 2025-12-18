export const caseStudies = [
  {
    id: "ecommerce-mobile-app",
    title: "Ecommerce Mobile App",
    shortDescription: "Mobile shopping application",
    description: "A full-featured mobile shopping application with real-time inventory management, secure payment processing, and personalized recommendations for users.",
    image: "/casestudy/cs-image1.png",
    category: "Mobile Development",
    gridSize: "standard",
    technologies: ["React Native", "Node.js", "Firebase", "Stripe"],
    highlights: ["Real-time inventory sync", "Secure payment integration", "AI-powered recommendations", "Offline mode support"]
  },
  {
    id: "product-testing-web",
    title: "Product Testing (Web)",
    shortDescription: "Web testing platform",
    description: "Comprehensive web-based testing platform for QA teams with real-time bug tracking, automated test case management, and detailed performance monitoring.",
    image: "/casestudy/cs-image2.jpg",
    category: "QA & Testing",
    gridSize: "standard",
    technologies: ["Selenium", "Jest", "Python", "PostgreSQL"],
    highlights: ["Automated testing suite", "Real-time bug tracking", "Performance metrics", "CI/CD integration"]
  },
  {
    id: "automation-website-mobile",
    title: "Automation for Website and Mobile Application",
    shortDescription: "End-to-end automation testing",
    description: "End-to-end automation testing suite covering web and mobile platforms with comprehensive integration, supporting multiple frameworks and devices.",
    image: "/casestudy/cs-image3.png",
    category: "Test Automation",
    gridSize: "tall-bottom",
    technologies: ["Appium", "Selenium", "TestNG", "Docker"],
    highlights: ["Multi-platform support", "Cross-browser testing", "Parallel execution", "Detailed reporting"]
  },
  {
    id: "automotive-car-resale",
    title: "Designing a Modern UI/UX for an Automotive Car Resale Platform",
    shortDescription: "Modern automotive marketplace",
    description: "Modern, intuitive UI/UX design for an automotive marketplace with advanced filtering, AR car preview, and secure transaction handling.",
    image: "/casestudy/cs-image4.png",
    category: "UI/UX Design",
    gridSize: "tall-right",
    technologies: ["Figma", "React", "Three.js", "Node.js"],
    highlights: ["AR car preview", "Advanced filtering", "Secure payments", "User reviews"]
  },
  {
    id: "crm-development-aspnet",
    title: "CRM Development in ASP.NET MVC",
    shortDescription: "Enterprise CRM system",
    description: "Enterprise-level CRM system built with ASP.NET MVC featuring customer relationship management, sales pipeline tracking, and advanced analytics dashboards.",
    image: "/casestudy/cs-image5.png",
    category: "Backend Development",
    gridSize: "equal",
    technologies: ["ASP.NET MVC", "SQL Server", "Entity Framework", "Bootstrap"],
    highlights: ["Customer management", "Sales tracking", "Analytics dashboard", "Email integration"]
  },
  {
    id: "insurance-automation",
    title: "Automation for Insurance Application",
    shortDescription: "Insurance process automation",
    description: "Automated insurance processing system with policy management, claims handling automation, and customer portal with AI-driven recommendations.",
    image: "/casestudy/cs-image6.png",
    category: "Automation",
    gridSize: "equal",
    technologies: ["Python", "Machine Learning", "RPA", "AWS"],
    highlights: ["Policy management", "Claims automation", "AI recommendations", "Compliance tracking"]
  }
];

export const getAllCaseStudies = () => caseStudies;
export const getCaseStudyById = (id) => caseStudies.find(study => study.id === id);
