import experienceData from "../data/experienceData.jsx";

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen bg-white dark:bg-gray-800 py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {experienceData.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {experienceData.subtitle}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experienceData.experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1">
                                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-300">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            {exp.current && (
                                                <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <i className="bx bx-briefcase"></i>
                                                <span>{exp.type}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <i className="bx bx-map"></i>
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <i className="bx bx-calendar"></i>
                                                <span>{exp.startDate} - {exp.endDate}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                                                Key Achievements:
                                            </h4>
                                            <ul className="space-y-1">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                                    >
                                                        <i className="bx bx-check text-green-500 mt-0.5"></i>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-xs font-medium rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 dark:bg-white rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;