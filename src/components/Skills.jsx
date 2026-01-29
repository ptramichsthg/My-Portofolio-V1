import { useState } from "react";
import skillsData from "../data/skillsData.jsx";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <section
            id="skills"
            className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {skillsData.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {skillsData.subtitle}
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    {skillsData.categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === index
                                ? "bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow-lg scale-105"
                                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow"
                                }`}
                        >
                            <i className={`${category.icon} text-lg sm:text-xl`}></i>
                            <span className="text-sm sm:text-base">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.categories[activeCategory].skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                                        style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                                    >
                                        <i className={skill.icon}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {skill.name}
                                    </h3>
                                </div>
                                <span className="text-sm font-bold text-gray-800 dark:text-white">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${skill.level}%`,
                                        backgroundColor: skill.color
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;