const projectsData = {
    title: "Projects & AI Services",
    subtitle: "Showcasing my work, creative solutions, and AI-powered business automation",

    projects: [
        // AI Custom Service Projects
        {
            id: 1,
            title: "RecruitAI - AI Recruitment Screening",
            description: "AI-powered recruitment platform that automates candidate screening, CV analysis, and interview scheduling for efficient hiring process.",
            image: "/assets/project1.jpg",
            category: "AI Service",
            technologies: ["AI Screening", "Next.js", "Tailwind CSS", "Vercel"],
            features: [
                "AI CV screening & analysis",
                "Automated candidate ranking",
                "Interview scheduling bot",
                "Skills matching algorithm"
            ],
            liveUrl: "https://ai-screening-henna.vercel.app/",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Tech.AI E-Commerce - Smart Shopping",
            description: "E-commerce platform with AI product recommendations, chatbot support, and intelligent search for enhanced shopping experience.",
            image: "/assets/project2.jpg",
            category: "AI Service",
            technologies: ["AI Chatbot", "E-commerce", "Next.js", "Vercel"],
            features: [
                "AI product recommendations",
                "Smart search & filtering",
                "24/7 shopping assistant",
                "Personalized user experience"
            ],
            liveUrl: "https://techcommerce-one.vercel.app/",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "NovaWEB - AI Sales Assistant",
            description: "Sales platform with AI-powered lead qualification, customer engagement, and automated sales pipeline management.",
            image: "/assets/project3.jpg",
            category: "AI Service",
            technologies: ["AI Sales Bot", "Next.js", "CRM", "Vercel"],
            features: [
                "AI lead qualification",
                "Automated sales pipeline",
                "Customer engagement bot",
                "Sales analytics & insights"
            ],
            liveUrl: "https://novawebsales.vercel.app/",
            githubUrl: "#"
        },
        {
            id: 4,
            title: "Luxe Villa - AI Customer Service",
            description: "Luxury villa booking platform with 24/7 AI chatbot for instant customer support, property inquiries, and booking assistance.",
            image: "/assets/project4.jpg",
            category: "AI Service",
            technologies: ["AI Chatbot", "Next.js", "Tailwind CSS", "Vercel"],
            features: [
                "24/7 AI customer service",
                "Instant booking assistance",
                "Property information bot",
                "Multi-language support"
            ],
            liveUrl: "https://luxe-villa-rosy.vercel.app",
            githubUrl: "#"
        },
        {
            id: 5,
            title: "Iruka Fabric - AI Sales Assistant",
            description: "Textile e-commerce with AI-powered sales assistant for product recommendations, order tracking, and customer inquiries.",
            image: "/assets/project5.jpg",
            category: "AI Service",
            technologies: ["AI Chatbot", "React", "E-commerce", "Vercel"],
            features: [
                "AI product recommendations",
                "Order tracking automation",
                "Customer inquiry handling",
                "Sales conversion optimization"
            ],
            liveUrl: "https://iruka-fabric.vercel.app",
            githubUrl: "#"
        },
        {
            id: 6,
            title: "Citra Textile - AI Business Assistant",
            description: "Textile manufacturing website with AI assistant for business inquiries, product catalog, and wholesale orders.",
            image: "/assets/project6.jpg",
            category: "AI Service",
            technologies: ["AI Chatbot", "Next.js", "Business Automation"],
            features: [
                "AI business inquiry handler",
                "Wholesale order assistant",
                "Product catalog automation",
                "B2B communication bot"
            ],
            liveUrl: "https://citra-textile.vercel.app",
            githubUrl: "#"
        },
        {
            id: 7,
            title: "Bandung Homecare - AI Healthcare Support",
            description: "Healthcare service platform with AI chatbot for appointment scheduling, service information, and patient support.",
            image: "/assets/project7.jpg",
            category: "AI Service",
            technologies: ["AI Chatbot", "Healthcare", "Next.js", "Vercel"],
            features: [
                "AI appointment scheduling",
                "Service information bot",
                "Patient support automation",
                "24/7 healthcare assistance"
            ],
            liveUrl: "https://bandunghomecare.vercel.app",
            githubUrl: "#"
        },

        // Website Projects
        {
            id: 8,
            title: "Velvet Voyage - Travel Platform",
            description: "Premium travel and tour booking platform with modern design and seamless user experience.",
            image: "/assets/project8.jpg",
            category: "Website",
            technologies: ["Next.js", "Tailwind CSS", "Vercel"],
            features: [
                "Tour package showcase",
                "Booking system",
                "Destination gallery",
                "Responsive design"
            ],
            liveUrl: "https://velvetvoyage-theta.vercel.app",
            githubUrl: "#"
        },
        {
            id: 9,
            title: "Pondok Omahku - Property Listing",
            description: "Real estate property listing platform for boarding houses and rental properties.",
            image: "/assets/project9.jpg",
            category: "Website",
            technologies: ["React", "Tailwind CSS", "Vercel"],
            features: [
                "Property listings",
                "Search and filter",
                "Property details",
                "Contact integration"
            ],
            liveUrl: "https://pondok-omahku.vercel.app",
            githubUrl: "#"
        },
        {
            id: 10,
            title: "Boekit 3G Cikidang - Resort Website",
            description: "Mountain resort and glamping website with booking information and facility showcase.",
            image: "/assets/project10.jpg",
            category: "Website",
            technologies: ["Next.js", "Tailwind CSS", "Vercel"],
            features: [
                "Resort facilities showcase",
                "Booking information",
                "Gallery and amenities",
                "Location map integration"
            ],
            liveUrl: "https://boekit-3g-cikidang.vercel.app",
            githubUrl: "#"
        },
        {
            id: 11,
            title: "Ikan Bakar Lautan - Restaurant Website",
            description: "Seafood restaurant website with menu showcase, online ordering, and location information.",
            image: "/assets/project11.jpg",
            category: "Website",
            technologies: ["React", "Tailwind CSS", "Vercel"],
            features: [
                "Digital menu showcase",
                "Online ordering system",
                "Restaurant information",
                "Location and contact"
            ],
            liveUrl: "https://ikan-bakar-lautan.vercel.app",
            githubUrl: "#"
        },
        {
            id: 12,
            title: "Vior Living - Furniture E-commerce",
            description: "Modern furniture e-commerce platform with product catalog and shopping experience.",
            image: "/assets/project12.jpg",
            category: "Website",
            technologies: ["Next.js", "E-commerce", "Tailwind CSS"],
            features: [
                "Product catalog",
                "Shopping cart",
                "Product filtering",
                "Modern UI/UX"
            ],
            liveUrl: "https://vior-living.vercel.app",
            githubUrl: "#"
        },
        {
            id: 13,
            title: "Lumbung Salak - Agribusiness Platform",
            description: "Agricultural product marketplace for salak (snake fruit) farmers and distributors.",
            image: "/assets/project13.jpg",
            category: "Website",
            technologies: ["React", "Tailwind CSS", "Vercel"],
            features: [
                "Product marketplace",
                "Farmer profiles",
                "Order management",
                "Distribution network"
            ],
            liveUrl: "https://lumbung-salak.vercel.app",
            githubUrl: "#"
        },
        {
            id: 14,
            title: "PT Batz Inti Bersama - Export Platform",
            description: "Fish export business platform connecting Indonesian suppliers with international buyers.",
            image: "/assets/project14.jpg",
            category: "Website",
            technologies: ["Next.js", "Tailwind CSS", "Vercel"],
            features: [
                "Export catalog",
                "Supplier information",
                "International shipping",
                "Business inquiry system"
            ],
            liveUrl: "https://eksporikan.vercel.app",
            githubUrl: "#"
        },

        // GitHub Projects
        {
            id: 15,
            title: "Reservasi Hotel",
            description: "Hotel reservation system built with Java. Features room booking, check-in/check-out management, and guest information handling.",
            image: "/assets/project15.jpg",
            category: "Web App",
            technologies: ["Java", "MySQL", "HTML", "CSS"],
            features: [
                "Room booking system",
                "Guest management",
                "Check-in/Check-out tracking",
                "Reservation history"
            ],
            liveUrl: "#",
            githubUrl: "https://github.com/ptramichsthg/Reservasi-Hotel"
        },
        {
            id: 16,
            title: "MLBB Zone",
            description: "Mobile Legends Bang Bang fan website with hero information, build guides, and game tips.",
            image: "/assets/project16.jpg",
            category: "Website",
            technologies: ["HTML", "CSS", "JavaScript"],
            features: [
                "Hero database",
                "Build recommendations",
                "Game guides",
                "Responsive design"
            ],
            liveUrl: "#",
            githubUrl: "https://github.com/ptramichsthg/mlbb-zone"
        },
        {
            id: 17,
            title: "Bookshelf API",
            description: "Backend API for bookshelf management with CRUD operations and query filtering. Built with Node.js and follows RESTful principles.",
            image: "/assets/project17.jpg",
            category: "API",
            technologies: ["Node.js", "JavaScript", "Hapi.js", "REST API"],
            features: [
                "CRUD operations",
                "Query filtering",
                "RESTful architecture",
                "Data validation"
            ],
            liveUrl: "#",
            githubUrl: "https://github.com/ptramichsthg/bookshelf-api"
        },
        {
            id: 18,
            title: "Kedai Kopi Pariban",
            description: "Coffee shop website with menu, ordering system, and location information. Features modern design with Tailwind CSS.",
            image: "/assets/project18.jpg",
            category: "Website",
            technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
            features: [
                "Menu showcase",
                "Online ordering",
                "Location map",
                "Responsive layout"
            ],
            liveUrl: "#",
            githubUrl: "https://github.com/ptramichsthg/kedai-kopi-pariban"
        }
    ],

    categories: ["All", "AI Service", "Website", "Web App", "API"]
};

export default projectsData;

