import { useState, useEffect } from "react";
import projectsData from "../data/projectsData.jsx";
import Swal from "sweetalert2";
import AnimatedButton from "./AnimatedButton.jsx";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(6);

    const filteredProjects = activeCategory === "All"
        ? projectsData.projects
        : projectsData.projects.filter(project => project.category === activeCategory);

    // Reset visible projects when category changes
    useEffect(() => {
        setVisibleProjects(6);
    }, [activeCategory]);

    const handleLinkClick = (url, type) => {
        if (url === "#") {
            Swal.fire({
                title: `${type} Not Available`,
                text: "This link is not available yet. Please check back later!",
                icon: "info",
                confirmButtonColor: "#1F2937",
                confirmButtonText: "Okay"
            });
        } else {
            window.open(url, "_blank");
        }
    };

    return (
        <section
            id="projects"
            className="relative min-h-screen py-20 overflow-hidden"
        >

            {/* Accent Glow Effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {projectsData.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        {projectsData.subtitle}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    {projectsData.categories.map((category, index) => (
                        <AnimatedButton
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            variant="navigation"
                            active={activeCategory === category}
                            className="px-4 sm:px-6 py-2.5 sm:py-3"
                        >
                            {category}
                        </AnimatedButton>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                {/* Project Image */}
                                <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-700 dark:to-gray-900 overflow-hidden group">
                                    {/* Background Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback Icon */}
                                    <div className="absolute inset-0 hidden items-center justify-center">
                                        <i className="bx bx-image text-6xl text-white opacity-30"></i>
                                    </div>
                                    {/* Overlay on hover */}

                                </div>

                                {/* Project Info */}
                                <div className="p-5">
                                    {/* Category Badge */}
                                    <div className="mb-2">
                                        <span className="px-2.5 py-0.5 bg-blue-500/80 text-white text-xs font-medium rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 bg-white/25 border border-white/40 text-gray-300 text-xs rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-white/25 border border-white/40 text-gray-300 text-xs rounded">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div className="mb-3">
                                        <h4 className="text-xs font-semibold text-white mb-1.5">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-0.5">
                                            {project.features.slice(0, 2).map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-1 text-xs text-gray-400"
                                                >
                                                    <i className="bx bx-check text-green-500 mt-0.5 text-sm"></i>
                                                    <span className="line-clamp-1">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mt-4">
                                        <AnimatedButton
                                            onClick={() => handleLinkClick(project.liveUrl, "Live Demo")}
                                            variant="glow"
                                            icon="bx bx-link-external"
                                            className="flex-1 text-xs py-2"
                                        >
                                            Live Demo
                                        </AnimatedButton>
                                        <AnimatedButton
                                            onClick={() => handleLinkClick(project.githubUrl, "GitHub Repository")}
                                            variant="secondary"
                                            icon="bx bxl-github"
                                            className="flex-1 text-xs py-2"
                                        >
                                            Code
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleProjects < filteredProjects.length && (
                        <div className="text-center mt-12" data-aos="fade-up">
                            <AnimatedButton
                                onClick={() => setVisibleProjects(prev => prev + 6)}
                                variant="primary"
                                icon="bx bx-chevron-down"
                                className="px-8 py-3"
                            >
                                Load More Projects
                            </AnimatedButton>
                        </div>
                    )}
                </div>

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <i className="bx bx-folder-open text-6xl text-gray-400 mb-4"></i>
                        <p className="text-lg text-gray-400">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
