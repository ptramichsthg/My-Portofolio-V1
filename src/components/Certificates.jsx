import educationData from "../data/educationData.jsx";

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="relative min-h-screen py-20 overflow-hidden"
        >
            {/* Accent Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Certifications
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Professional credentials and technical achievements
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {educationData.certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500"
                            data-aos="fade-up"
                        >
                            {/* Glass Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image Section with Overlay */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-gray-900/0 transition-colors z-10"></div>
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
                                <div className="absolute inset-0 hidden items-center justify-center bg-white/5">
                                    <i className={`${cert.icon} text-6xl text-gray-400 opacity-50`}></i>
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
                                            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 py-2 bg-white text-gray-900 font-bold rounded-full hover:bg-pink-50 hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2"
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
                                    <div className="p-2 bg-pink-500/20 rounded-lg text-pink-500">
                                        <i className={`${cert.icon} text-xl`}></i>
                                    </div>
                                    <span className="text-sm font-medium text-pink-400 tracking-wide uppercase">
                                        {cert.issuer}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-pink-500 transition-colors">
                                    {cert.title}
                                </h4>

                                {/* Decorative Line */}
                                <div className="w-12 h-1 bg-white/20 rounded-full mt-4 group-hover:w-full group-hover:bg-pink-500 transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
