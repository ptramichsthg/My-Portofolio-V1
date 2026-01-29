import { useState } from "react";
import projectsData from "../data/projectsData.jsx";
import Swal from "sweetalert2";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projectsData.projects
        : projectsData.projects.filter(project => project.category === activeCategory);

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
            className="min-h-screen bg-white dark:bg-gray-800 py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {projectsData.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {projectsData.subtitle}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    {projectsData.categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow-lg scale-105"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-700 dark:to-gray-900 overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <i className="bx bx-image text-6xl text-white opacity-30"></i>
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={() => handleLinkClick(project.liveUrl, "Live Demo")}
                                        className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                        title="View Live"
                                    >
                                        <i className="bx bx-link-external text-xl"></i>
                                    </button>
                                    <button
                                        onClick={() => handleLinkClick(project.githubUrl, "GitHub Repository")}
                                        className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                        title="View Code"
                                    >
                                        <i className="bx bxl-github text-xl"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <div className="mb-3">
                                    <span className="px-3 py-1 bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-xs font-medium rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold text-gray-800 dark:text-white mb-2">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-1 text-xs text-gray-600 dark:text-gray-400"
                                            >
                                                <i className="bx bx-check text-green-500 mt-0.5"></i>
                                                <span className="line-clamp-1">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleLinkClick(project.liveUrl, "Live Demo")}
                                        className="flex-1 px-4 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <i className="bx bx-link-external mr-1"></i>
                                        Live Demo
                                    </button>
                                    <button
                                        onClick={() => handleLinkClick(project.githubUrl, "GitHub Repository")}
                                        className="flex-1 px-4 py-2 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-colors duration-200"
                                    >
                                        <i className="bx bxl-github mr-1"></i>
                                        Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <i className="bx bx-folder-open text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;