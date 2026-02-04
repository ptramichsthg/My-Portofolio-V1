import { useState, useEffect } from "react";
import navbarData from "../data/navbarData.jsx";
import AnimatedButton from "./AnimatedButton.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll detection for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Spy
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = navbarData.map(item => ({
                id: item.id,
                element: document.getElementById(item.id)
            })).filter(item => item.element);

            let currentSection = sections[0]?.id;

            sections.forEach(({ id, element }) => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentSection = id;
                }
            });
            setActiveId(currentSection);
        };

        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        // Initial check
        handleScrollSpy();
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    const handleClick = (id) => {
        setActiveId(id);
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand / Logo */}
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                            <i className="bx bx-code-alt text-xl text-blue-400"></i>
                        </div>
                        <span className="text-lg font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                            Portfolio
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navbarData.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleClick(item.id)}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                        ? "text-blue-400 bg-blue-500/10"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {item.label}
                                    {/* Active Dot Indicator */}
                                    {isActive && (
                                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"></span>
                                    )}
                                </button>
                            );
                        })}

                        {/* Example CTA or secondary action if needed */}
                        {/* <div className="w-px h-6 bg-white/10 mx-2"></div> */}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 py-4 space-y-1">
                    {navbarData.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeId === item.id
                                ? "bg-blue-500/10 text-blue-400"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
