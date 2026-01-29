const experienceData = {
    title: "Work Experience",
    subtitle: "My professional journey and achievements",

    experiences: [
        {
            id: 1,
            role: "Full Stack Developer",
            company: "Tech Solutions Inc.",
            type: "Full-time",
            location: "Remote",
            startDate: "Jan 2024",
            endDate: "Present",
            current: true,
            description: "Developing and maintaining web applications using modern technologies and best practices.",
            achievements: [
                "Built scalable e-commerce platform using Next.js and PostgreSQL",
                "Implemented real-time features using Supabase",
                "Improved application performance by 40%",
                "Led a team of 3 junior developers"
            ],
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"]
        },
        {
            id: 2,
            role: "Frontend Developer",
            company: "Digital Agency",
            type: "Contract",
            location: "Jakarta, Indonesia",
            startDate: "Jun 2023",
            endDate: "Dec 2023",
            current: false,
            description: "Focused on creating responsive and interactive user interfaces for various client projects.",
            achievements: [
                "Developed 10+ responsive websites using React.js",
                "Implemented dark mode and accessibility features",
                "Collaborated with designers using Figma",
                "Reduced page load time by 50% through optimization"
            ],
            technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            id: 3,
            role: "Web Developer",
            company: "Startup Company",
            type: "Full-time",
            location: "Bandung, Indonesia",
            startDate: "Jan 2022",
            endDate: "May 2023",
            current: false,
            description: "Developed full-stack web applications and managed database systems.",
            achievements: [
                "Built CMS platform using Laravel and MySQL",
                "Integrated payment gateways and third-party APIs",
                "Managed database optimization and migrations",
                "Trained new team members on Laravel best practices"
            ],
            technologies: ["Laravel", "MySQL", "JavaScript", "Express.js", "MongoDB"]
        }
    ]
};

export default experienceData;
