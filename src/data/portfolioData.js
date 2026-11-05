export const portfolioData = {
  personal: {
    name: "Megha Raikwar",
    headlineFirst: "SENIOR WEBSITE",
    headlineSecond: "DEVELOPER.",
    titles: [
      "Senior Website Developer",
      "WordPress Developer",
      "PHP Developer"
    ],
    role: "Senior Website Developer",
    location: "Bhopal, India",
    email: "megharaikwar139@gmail.com",
    github: "https://github.com/megharaikwar139",
    linkedin: "https://www.linkedin.com/in/megha-raikwar",
    resumeUrl: `${import.meta.env.BASE_URL}Megha_Raikwar_Resume.pdf`,
    shortBio: "I build responsive, user-friendly and performance-focused websites for businesses, eCommerce brands, educational organizations and other clients. My work combines website development, UI/UX implementation, WordPress customization, PHP development, SEO, responsive design and performance optimization.",
    extendedBio: [
      "Over multiple years of continuous hands-on engineering, I have focused on building digital products that combine rock-solid backend architecture with smooth, responsive frontend interactions.",
      "From engineering enterprise PHP & CodeIgniter platforms to customizing high-converting Shopify stores and architecting custom WordPress themes, I specialize in transforming complex requirements into elegant, high-speed web experiences.",
      "My methodology emphasizes clean semantic structure, mobile-first responsiveness, technical SEO excellence, and automated integration workflows with modern tools like n8n and Zapier."
    ],
    stats: [
      { value: "05", label: "Professional Roles", detail: "Progressive industry & freelance career experience" },
      { value: "8.32", label: "B.Tech CGPA", detail: "Bansal College of Engineering, RGPV graduate" },
      { value: "11+", label: "Verified Projects", detail: "Spanning PHP, WordPress, Shopify & frontend" },
      { value: "100%", label: "Responsive & SEO", detail: "Mobile-first, performance-optimized standards" }
    ]
  },

  projects: [
    {
      id: "01",
      title: "NAMAMI IT SOFTWARE SOLUTIONS",
      shortTitle: "Namami IT Solutions",
      category: "Corporate Website / PHP / CodeIgniter",
      tags: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Responsive Design"],
      url: "https://namami.co.in/",
      summary: "Full-scale corporate IT solutions platform engineered with PHP and CodeIgniter, presenting software services, enterprise capabilities, client testimonials, and consultation inquiry workflows.",
      features: [
        "Dynamic IT service modules with custom database models",
        "Lead capture & business consultation inquiry routing",
        "Mobile-first responsive layout with fast render times",
        "Custom CodeIgniter MVC architecture with MySQL backend"
      ],
      accentColor: "#F52222",
      badgeText: "Enterprise PHP",
      status: "Production Live"
    },
    {
      id: "02",
      title: "SAMEKA HEALTH",
      shortTitle: "Sameka Health Store",
      category: "Shopify / eCommerce Platform",
      tags: ["Shopify", "Liquid", "eCommerce", "Responsive UI", "Cart & Checkout"],
      url: "https://samekahealth.com/",
      summary: "High-converting direct-to-consumer eCommerce store for plant-based wellness and protein nutrition, featuring customized product catalog pages, nutritional ingredient breakdowns, and smooth checkout.",
      features: [
        "Custom Shopify theme sections tailored for wellness products",
        "Optimized product display pages with variant selectors",
        "Streamlined shopping cart drawer and mobile checkout flow",
        "Integrated promotional banners, badges, and trust signals"
      ],
      accentColor: "#2E7D32",
      badgeText: "Shopify D2C",
      status: "Production Live"
    },
    {
      id: "03",
      title: "BLACK TIGER EVENTS",
      shortTitle: "Black Tiger Events",
      category: "WordPress / Event Management",
      tags: ["WordPress", "Elementor", "PHP", "Custom Forms", "UI/UX"],
      url: "https://blacktigerevents.in/",
      summary: "High-impact event management website built with custom WordPress architecture, showcasing corporate celebrations, luxury wedding galleries, and dynamic inquiry forms.",
      features: [
        "Rich visual event galleries with smooth lightbox transitions",
        "Interactive event service selector and dynamic inquiry routing",
        "Customized WordPress styling and Elementor responsive templates",
        "Fast asset delivery and performance-tuned page loading"
      ],
      accentColor: "#D32F2F",
      badgeText: "WordPress Custom",
      status: "Production Live"
    },
    {
      id: "04",
      title: "THE VIRAL GARAGE",
      shortTitle: "The Viral Garage",
      category: "Digital Agency / Creative Showcase",
      tags: ["WordPress", "Creative UI", "CSS3 Animation", "SEO", "Responsive"],
      url: "https://theviralgarage.com/",
      summary: "Creative digital marketing and social media agency website built to showcase cutting-edge branding, viral campaign case studies, and client performance metrics.",
      features: [
        "Modern dark-mode aesthetic with high-contrast typography",
        "Interactive portfolio cards displaying client media campaigns",
        "Structured SEO setup to maximize organic search visibility",
        "Seamless mobile responsiveness across all viewport sizes"
      ],
      accentColor: "#7B1FA2",
      badgeText: "Creative Agency",
      status: "Production Live"
    },
    {
      id: "05",
      title: "ISKCON BAREILLY",
      shortTitle: "ISKCON Bareilly",
      category: "Organization / Community Platform",
      tags: ["WordPress", "PHP", "Donation UI", "Event Calendar", "Community"],
      url: "https://iskconbareilly.com/",
      summary: "Spiritual community and cultural center portal delivering comprehensive temple information, festival calendars, devotional media broadcasts, and secure contribution workflows.",
      features: [
        "Dedicated festival calendars and daily darshan schedules",
        "Custom contribution and Seva booking presentation",
        "Multilingual typography support and accessible layout hierarchy",
        "Reliable WordPress administration and content publishing"
      ],
      accentColor: "#E65100",
      badgeText: "Community Portal",
      status: "Production Live"
    },
    {
      id: "06",
      title: "PRAKRUTI MEDIA SHALA",
      shortTitle: "Prakruti Media Shala",
      category: "Educational / Interactive Platform",
      tags: ["WordPress", "Educational", "Interactive UI", "Child-Friendly", "PHP"],
      url: "https://prakrutishala.org/",
      summary: "Interactive educational science and nature discovery platform designed for students, offering activity-based experiential learning modules, environment workshops, and nature exploration programs.",
      features: [
        "Playful, engaging interface tailored for young learners and educators",
        "Activity-based curriculum modules with visual chapter breakdowns",
        "Optimized media delivery for instructional videos and illustrations",
        "User-friendly navigation structured for exploratory discovery"
      ],
      accentColor: "#388E3C",
      badgeText: "Edu Platform",
      status: "Production Live"
    },
    {
      id: "07",
      title: "RAMAN GREENS",
      shortTitle: "Raman Greens",
      category: "Food Brand / eCommerce Store",
      tags: ["Shopify / WP", "eCommerce", "Brand Story", "Product Catalog", "SEO"],
      url: "https://ramangreens.com/",
      summary: "Direct-to-consumer and wholesale food manufacturing platform presenting healthy artisanal snacks, millet cookies, and nutritious confectionery with online shopping capabilities.",
      features: [
        "Brand storytelling highlighting farm-sourced ingredients",
        "Categorized product catalog with instant search & filtering",
        "Direct online ordering and merchant inquiry workflows",
        "Comprehensive on-page SEO targeting healthy snack queries"
      ],
      accentColor: "#558B2F",
      badgeText: "Food eCommerce",
      status: "Production Live"
    },
    {
      id: "08",
      title: "DAIRY DEMO",
      shortTitle: "Dairy Classics Demo",
      category: "Frontend Showcase / Artisanal Ice Cream",
      tags: ["HTML5", "CSS3", "JavaScript", "Animation", "Responsive Design"],
      url: "https://megharaikwar139.github.io/dairy-demo/",
      summary: "Interactive artisanal ice cream demonstration page featuring gourmet waffle cones, chocolate crunch bars, ruby velvet sticks, and smooth interactive product cards.",
      features: [
        "Custom CSS micro-animations and hover card elevations",
        "Nutritional and flavor highlights with vibrant color palettes",
        "Pure semantic frontend architecture with zero heavy library bloat",
        "Pixel-perfect responsive layout across phones, tablets, and desktop"
      ],
      accentColor: "#C2185B",
      badgeText: "Frontend Demo",
      status: "Production Live"
    },
    {
      id: "09",
      title: "DAIRY CLASSICS",
      shortTitle: "Dairy Classics Brand",
      category: "Frontend / Dairy Brand Experience",
      tags: ["HTML5", "CSS3 Grid", "Vanilla JS", "Performance", "UI Showcase"],
      url: "https://megharaikwar139.github.io/dairy-classics/",
      summary: "Artisanal dairy brand web showcase celebrating single-origin farm milk treats, slow-churned gelato cups, biscuits, and cassattas with bespoke editorial styling.",
      features: [
        "Editorial typography paired with warm, appetizing color theory",
        "Product collection sliders with lightweight vanilla JavaScript",
        "Accessibility-first contrast ratios and semantic HTML5 landmarks",
        "Ultra-lightweight bundle loading with sub-second paint speeds"
      ],
      accentColor: "#E91E63",
      badgeText: "Brand UI",
      status: "Production Live"
    },
    {
      id: "10",
      title: "TRAMADOL50MG STORE",
      shortTitle: "Tramadol50mg Guide",
      category: "Web Development / eCommerce Architecture",
      tags: ["PHP", "Frontend UI", "Form Validation", "Responsive Layout"],
      url: "https://tramadol50mg.store/",
      summary: "Technical implementation of a structured medical guide and product information portal, engineered with responsive layout hierarchies, safety notices, and secure form validation.",
      features: [
        "Strict separation of technical layout logic and informational content",
        "Client-side input verification and structured medical advisory blocks",
        "Mobile-optimized accordion menus for FAQs and safety instructions",
        "Clean, semantic DOM architecture optimized for search crawlers"
      ],
      accentColor: "#1976D2",
      badgeText: "Web Tech",
      status: "Production Live"
    },
    {
      id: "11",
      title: "BUYXANAXONLINE STORE",
      shortTitle: "BuyXanaxOnline Portal",
      category: "Web Development / eCommerce Architecture",
      tags: ["Web Architecture", "UI/UX Implementation", "Secure UI", "SEO"],
      url: "https://buyxanaxonline.store/",
      summary: "Technical frontend and backend development of an informational pharmacy portal, focused on user interface ergonomics, reliable navigation, and structured search data.",
      features: [
        "Fast-loading responsive interface designed for high clarity",
        "Cross-browser tested layouts with fallback font stacks",
        "Structured schema metadata implementation for search engines",
        "Strict adherence to technical web development standards"
      ],
      accentColor: "#0288D1",
      badgeText: "Web Tech",
      status: "Production Live"
    }
  ],

  journey: [
    {
      id: "j1",
      year: "2026",
      period: "July 2026 – Present",
      role: "Senior Website Developer",
      company: "Wecrescent (RKDF Group)",
      location: "Bhopal, India",
      type: "Current Role",
      highlights: [
        "Lead WordPress and PHP-based website development across group digital properties.",
        "Execute end-to-end website customization, architecture maintenance, and code refactoring.",
        "Drive website performance optimization, technical SEO enhancements, and responsive tuning.",
        "Collaborate seamlessly with cross-functional design, content, and engineering teams."
      ]
    },
    {
      id: "j2",
      year: "2025",
      period: "August 2025 – June 2026",
      role: "Associate WordPress Developer",
      company: "AISECT Group",
      location: "Bhopal, India",
      type: "Full-Time",
      highlights: [
        "Built and maintained responsive web applications using WordPress, Elementor, and Shopify.",
        "Engineered custom plugin modifications and integrated third-party REST APIs.",
        "Achieved measurable gains in Core Web Vitals performance and technical SEO rankings.",
        "Automated operational updates, lead management, and routine workflows using n8n and Zapier."
      ]
    },
    {
      id: "j3",
      year: "2024",
      period: "July 2024 – August 2025",
      role: "Website Developer",
      company: "Namami Software Company",
      location: "Bhopal, India",
      type: "Full-Time",
      highlights: [
        "Developed full-stack responsive web platforms using PHP, CodeIgniter, HTML, CSS, and JavaScript.",
        "Designed and normalized MySQL database schemas for reliable data persistence.",
        "Handled web server deployment, SSL configuration, and production performance improvements.",
        "Collaborated with project managers to translate client specifications into robust code."
      ]
    },
    {
      id: "j4",
      year: "2024",
      period: "July 2024 – Present",
      role: "Freelance Junior WordPress Developer",
      company: "Independent Practice",
      location: "Remote / Bhopal",
      type: "Freelance",
      highlights: [
        "Deliver tailored WordPress theme and plugin customizations for businesses and individual clients.",
        "Implement high-converting, mobile-first responsive designs and custom landing pages.",
        "Integrate external APIs, payment gateways, and custom marketing automation plugins.",
        "Provide ongoing website maintenance, vulnerability debugging, and performance audits."
      ]
    },
    {
      id: "j5",
      year: "2024",
      period: "January 2024 – June 2024",
      role: "Web Developer Intern",
      company: "Toflymedia Digital Agency",
      location: "Bhopal, India",
      type: "Internship",
      highlights: [
        "Assisted in crafting responsive websites using HTML, CSS, JavaScript, and PHP fundamentals.",
        "Participated in frontend/backend debugging, cross-browser compatibility testing, and QA.",
        "Worked alongside UI designers to convert wireframes into functional web pages."
      ]
    },
    {
      id: "edu1",
      year: "2020 – 2024",
      period: "2020 – 2024",
      role: "Bachelor of Technology (B.Tech)",
      company: "Bansal College of Engineering, Mandideep, RGPV",
      location: "Bhopal, India",
      type: "Education",
      highlights: [
        "Graduated with an outstanding cumulative grade point average of 8.32 CGPA.",
        "Comprehensive foundations in Computer Science, Database Systems, Web Technologies, and Algorithms.",
        "State-level technical competition winner.",
        "Led the organization and execution of a major college-level technical event."
      ]
    }
  ],

  toolkit: {
    categories: [
      {
        name: "CMS & eCommerce",
        skills: ["WordPress", "Elementor", "Shopify", "Theme Customization", "Plugin Integration"]
      },
      {
        name: "Backend & Databases",
        skills: ["PHP", "CodeIgniter", "MySQL", "SQL Database Architecture"]
      },
      {
        name: "Frontend Engineering",
        skills: ["HTML5", "CSS3 / Vanilla CSS", "JavaScript (ES6+)", "Responsive Web Design"]
      },
      {
        name: "Optimization & SEO",
        skills: ["Technical SEO", "Performance Optimization", "Responsive Tuning", "Website Debugging"]
      },
      {
        name: "Tools & Automation",
        skills: ["Git & Version Control", "Visual Studio Code", "n8n Workflow Automation", "Zapier Integration"]
      }
    ],
    allSkills: [
      { name: "WordPress", category: "cms", top: 18, left: 14, speed: 1.1 },
      { name: "PHP", category: "backend", top: 12, left: 62, speed: 1.4 },
      { name: "Shopify", category: "cms", top: 38, left: 8, speed: 0.9 },
      { name: "CodeIgniter", category: "backend", top: 35, left: 74, speed: 1.3 },
      { name: "JavaScript", category: "frontend", top: 58, left: 12, speed: 1.0 },
      { name: "MySQL", category: "backend", top: 56, left: 78, speed: 1.2 },
      { name: "Elementor", category: "cms", top: 78, left: 18, speed: 0.8 },
      { name: "Technical SEO", category: "seo", top: 75, left: 68, speed: 1.1 },
      { name: "n8n Automation", category: "tools", top: 25, left: 32, speed: 1.5 },
      { name: "Responsive UI", category: "frontend", top: 86, left: 45, speed: 0.95 },
      { name: "Zapier", category: "tools", top: 22, left: 85, speed: 1.25 },
      { name: "HTML5 & CSS3", category: "frontend", top: 8, left: 38, speed: 1.05 }
    ],
    tickerItems: [
      "BUILD", "OPTIMIZE", "WORDPRESS", "CREATE", "DEVELOP", 
      "PHP & CODEIGNITER", "IMPROVE", "SHOPIFY", "RESPONSIVE UI",
      "TECHNICAL SEO", "n8n AUTOMATION", "HIGH PERFORMANCE"
    ]
  },

  achievements: [
    {
      id: "a1",
      number: "8.32",
      badge: "ACADEMIC EXCELLENCE",
      title: "B.Tech Engineering Graduate",
      org: "Bansal College of Engineering, RGPV (2020 – 2024)",
      description: "Graduated with 8.32 CGPA in Computer Science & Engineering, mastering algorithms, database architectures, and web technologies.",
      variant: "red"
    },
    {
      id: "a2",
      number: "01",
      badge: "STATE CHAMPION",
      title: "State-Level Competition Winner",
      org: "Recognized Technical Excellence",
      description: "Achieved first place in state-level competition, demonstrating innovative problem-solving and technical execution under evaluation.",
      variant: "dark"
    },
    {
      id: "a3",
      number: "LEAD",
      badge: "ORGANIZATIONAL LEADERSHIP",
      title: "College-Level Event Leadership",
      org: "Bansal College Campus",
      description: "Steered the planning, team coordination, logistics, and technical execution of a flagship college-level event with university participation.",
      variant: "white"
    },
    {
      id: "a4",
      number: "05",
      badge: "CAREER PROGRESSION",
      title: "Professional Roles & Engagements",
      org: "Industry Track Record",
      description: "Seamless advancement from intern to full-stack developer to associate and senior website developer across leading organizations.",
      variant: "red-outline"
    }
  ]
};
