import { useState, useEffect } from "react";
import navbarData from "../data/navbarData.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const currentYear = () => new Date().getFullYear();

    // Scroll detection for navbar shadow
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Add shadow when scrolled
            setIsScrolled(currentScrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy for active section detection - improved version
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = navbarData.map(item => ({
                id: item.id,
                element: document.getElementById(item.id)
            })).filter(item => item.element);

            let currentSection = sections[0]?.id;

            sections.forEach(({ id, element }) => {
                const rect = element.getBoundingClientRect();
                // Check if section is in viewport (considering navbar height)
                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentSection = id;
                }
            });

            setActiveId(currentSection);
        };

        // Initial check
        handleScrollSpy();

        // Add scroll listener with throttle
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScrollSpy();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollListener, { passive: true });
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);


    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);


    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle("dark");

        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClick = (id) => {
        setActiveId(id);
        setIsMenuOpen(false);

        // Smooth scroll to section
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <>
            <nav
                className={`bg-white fixed top-0 left-0 w-full z-50 dark:bg-gray-800 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'
                    }`}
            >
                <div className="w-full">
                    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                        <div className="flex items-center justify-between py-3 md:py-4">
                            {/* Logo/Brand */}
                            <a href="#" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                                <i className="bx bx-code-alt text-xl sm:text-2xl text-gray-800 dark:text-white"></i>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white whitespace-nowrap">
                                    My Portofolio
                                </h1>
                            </a>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center gap-2 lg:gap-3">
                                <ul className="flex items-center gap-1">
                                    {navbarData.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={() => handleClick(item.id)}
                                                className={`flex items-center gap-1 px-2 lg:px-2.5 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base whitespace-nowrap ${activeId === item.id
                                                    ? "bg-gray-800 shadow-lg dark:bg-white dark:text-gray-800 text-white"
                                                    : "text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                    }`}>
                                                <i className={`bx ${item.icon} text-base lg:text-lg`}></i>
                                                <span className="hidden lg:inline">{item.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {/* Desktop Dark Mode Toggle */}
                                <button
                                    onClick={toggleDarkMode}
                                    className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                                    aria-label="Toggle dark mode"
                                >
                                    <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} text-xl lg:text-2xl`}></i>
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-gray-800 dark:text-white focus:outline-none p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}

            {/* Off-Canvas Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                            <i className="bx bx-code-alt text-2xl text-gray-800 dark:text-white"></i>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Navigation</h2>
                        </div>
                        <button
                            className="text-gray-800 dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            <i className="bx bx-x text-2xl"></i>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto py-4 sm:py-6">
                        <ul className="flex flex-col gap-2 px-4 sm:px-6">
                            {navbarData.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${isMenuOpen ? index * 0.1 : 0}s`
                                    }}
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => handleClick(item.id)}
                                        className={`flex items-center gap-3 text-base sm:text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 ${activeId === item.id
                                            ? "bg-gray-800 dark:bg-white dark:text-gray-800 text-white shadow-lg"
                                            : "text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        <i className={`bx ${item.icon} text-xl`}></i>
                                        <span>{item.label}</span>
                                        <i className="bx bx-chevron-right ml-auto text-xl"></i>
                                    </a>
                                </li>
                            ))}

                            {/* Mobile Dark Mode Toggle */}
                            <li className="mt-2">
                                <button
                                    onClick={toggleDarkMode}
                                    className="w-full flex items-center gap-3 text-base sm:text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    aria-label="Toggle dark mode"
                                >
                                    <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
                                    <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            © {currentYear()} Putra Michael Sitohang. All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;