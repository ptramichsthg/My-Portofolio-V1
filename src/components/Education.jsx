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

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                        <i className="bx bxs-certification text-3xl"></i>
                        Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {educationData.certifications.map((cert) => (
                            <div
                                key={cert.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback Icon */}
                                    <div
                                        className="absolute inset-0 hidden items-center justify-center bg-gray-300 dark:bg-gray-600"
                                    >
                                        <i
                                            className={`${cert.icon} text-6xl text-gray-700 dark:text-gray-300`}
                                        ></i>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                                        {cert.title}
                                    </h4>

                                    {/* Issuer */}
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                                        <i className="bx bx-building"></i>
                                        {cert.issuer}
                                    </p>

                                    {/* Date */}
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-1">
                                        <i className="bx bx-calendar"></i>
                                        {cert.date}
                                    </p>

                                    {/* Status Badge & Link */}
                                    <div className="flex items-center justify-between">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${cert.status === "Completed"
                                            ? "bg-green-500 text-white"
                                            : "bg-yellow-500 text-gray-800"
                                            }`}>
                                            {cert.status}
                                        </span>

                                        {/* Credential Link */}
                                        {cert.credentialUrl !== "#" && (
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                aria-label="View credential"
                                            >
                                                <i className="bx bx-link-external text-xl"></i>
                                            </a>
                                        )}
                                    </div>
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
