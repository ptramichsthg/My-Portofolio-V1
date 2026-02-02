import educationData from "../data/educationData.jsx";

const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        {educationData.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {educationData.subtitle}
                    </p>
                </div>

                {/* Formal Education */}
                <div className="mb-16" data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                        <i className="bx bxs-school text-3xl"></i>
                        Formal Education
                    </h3>
                    <div className="grid gap-6">
                        {educationData.education.map((edu) => (
                            <div
                                key={edu.id}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-gray-800 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i className={`${edu.icon} text-3xl text-white dark:text-gray-800`}></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
                                            {edu.institution}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            <div className="flex items-center gap-1">
                                                <i className="bx bx-calendar"></i>
                                                <span>{edu.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <i className="bx bx-map"></i>
                                                <span>{edu.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <i className="bx bx-award"></i>
                                                <span>GPA: {edu.gpa}</span>
                                            </div>
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                                            {edu.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications - Unified Premium Design */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                        <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/30">
                            <i className="bx bxs-certification text-2xl text-white"></i>
                        </div>
                        Certifications
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {educationData.certifications.map((cert) => (
                            <div
                                key={cert.id}
                                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                            >
                                {/* Glass Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Image Section with Overlay */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/30 group-hover:bg-gray-900/0 transition-colors z-10"></div>
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />

                                    {/* Fallback Icon */}
                                    <div className="absolute inset-0 hidden items-center justify-center bg-gray-100 dark:bg-gray-700">
                                        <i className={`${cert.icon} text-6xl text-gray-400 dark:text-gray-500`}></i>
                                    </div>

                                    {/* Floating Tag */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-1">
                                            <i className="bx bx-calendar"></i> {cert.date}
                                        </span>
                                    </div>

                                    {/* Overlay Action Button */}
                                    {cert.credentialUrl !== "#" && (
                                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 py-2 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-50 hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2"
                                            >
                                                Verify Credential <i className="bx bx-link-external"></i>
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="relative p-6 z-10">
                                    {/* Issuer Info */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-blue-50 dark:bg-gray-700 rounded-lg text-blue-600 dark:text-blue-400">
                                            <i className={`${cert.icon} text-xl`}></i>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                                            {cert.issuer}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {cert.title}
                                    </h4>

                                    {/* Decorative Line */}
                                    <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-4 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
