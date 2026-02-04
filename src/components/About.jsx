import aboutData from "../data/aboutData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';
import AnimatedButton from "./AnimatedButton.jsx";


const About = () => {
    const resumeButtonClasses = `inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${aboutData.resume.type === "primary"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
        : "border-2 border-white/30 text-white hover:bg-white/20 hover:text-white dark:hover:bg-white dark:hover:text-gray-800"
        }`;

    return (
        <section
            id="about"
            className="relative min-h-screen pt-20 overflow-hidden"
        >
            {/* Accent Glow Effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center text-white mb-12" data-aos="fade-down">
                    <h2 className="text-5xl font-bold mb-2">{aboutData.title}</h2>
                    <p className="text-lg text-white">{aboutData.subtitle}</p>
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-12 min-h-[calc(100vh-5rem)]">
                    {/* Profile Image */}
                    <div className="w-full flex justify-center lg:justify-start" data-aos="fade-right">
                        <img
                            src={aboutData.image}
                            alt="About Me"
                            className="w-full max-w-md rounded-xl shadow-lg object-cover 
             border-8 border-white dark:border-gray-800 
             hover:shadow-3xl hover:-translate-y-2 
             transition-all duration-300"
                        />

                    </div>

                    {/* Biodata Section */}
                    <div className="w-full text-white" data-aos="fade-left">
                        {/* About Narrative - Two Columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-12 h-12 p-4 flex items-center justify-center rounded-lg shadow-lg bg-white/15 border border-white/30 text-white">
                                        <i className={`bx ${aboutData.aboutNarrative.whoAmI.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Who Am I</h3>
                                </div>
                                <p className="text-gray-300">
                                    {aboutData.aboutNarrative.whoAmI.text}
                                </p>
                            </div>


                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/15 border border-white/30 shadow-lg text-white">
                                        <i className={`bx ${aboutData.aboutNarrative.approach.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">My Approach</h3>
                                </div>
                                <p className="text-gray-300">
                                    {aboutData.aboutNarrative.approach.text}
                                </p>
                            </div>

                        </div>
                        {/* Personal Info Heading */}
                        <div className="flex items-center gap-2 mb-4">
                            <i className="bx bx-info-circle text-2xl text-white" aria-hidden="true"></i>
                            <h2 className="text-2xl font-semibold text-white">Personal Info</h2>
                        </div>

                        {/* Biodata Grid - 2x2 Layout */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                            {aboutData.biodata.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-white/15 border border-white/30 text-white shadow-lg">
                                        <i className={`${item.icon} text-xl`} aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-sm text-white">{item.label}:</span>
                                        <span className="text-sm text-gray-300"> {item.value}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>



                        <div className="flex justify-center lg:justify-start mt-6">
                            <Tippy content="Download My Resume">
                                <AnimatedButton
                                    onClick={() => {
                                        Swal.fire({
                                            title: "Not Available Yet",
                                            text: "My resume is still in progress. Please check back later!",
                                            icon: "info",
                                            confirmButtonColor: "#1F2937",
                                            confirmButtonText: "Alright",
                                        });
                                    }}
                                    variant="glow"
                                    icon={aboutData.resume.icon}
                                    className="px-6 py-3"
                                >
                                    {aboutData.resume.label}
                                </AnimatedButton>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
