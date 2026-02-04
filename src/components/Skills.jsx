import skillsData from "../data/skillsData.jsx";

const Skills = () => {
    // Flatten all skills from all categories into a single array
    const allSkills = skillsData.categories.flatMap(category => category.skills);

    return (
        <section
            id="skills"
            className="relative py-20 overflow-hidden"
        >
            {/* Accent Glow Effects */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {skillsData.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        {skillsData.subtitle}
                    </p>
                </div>

                {/* Unified Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
                    {allSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 flex flex-col items-center justify-center gap-3 h-full"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            {/* Hover Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                                style={{ backgroundColor: skill.color }}
                            ></div>

                            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                                {/* Icon Container */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-3xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${skill.color}15`,
                                        color: skill.color,
                                        boxShadow: `0 0 20px ${skill.color}30`
                                    }}
                                >
                                    <i className={skill.icon}></i>
                                </div>

                                {/* Skill Name */}
                                <h3 className="text-sm font-semibold text-white font-mono text-center group-hover:text-white/90 transition-colors w-full break-words">
                                    {skill.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
