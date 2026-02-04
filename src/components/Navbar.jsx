import React, { useState, useEffect } from "react";
import navbarData from "../data/navbarData.jsx";
import PillNav from "./PillNav.jsx";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active Section Logic
            const sections = navbarData.map(item => document.getElementById(item.id));
            const scrollPos = window.scrollY + 100;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = navbarData.map(item => ({
        label: item.label,
        href: `#${item.id}`,
        icon: item.icon // Pass icon data
    }));

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300`}
            style={{ width: 'fit-content', maxWidth: '95vw' }}
        >
            <div className="hidden md:block">
                <PillNav
                    items={navItems}
                    activeHref={`#${activeSection}`}
                    ease="power2.easeOut"
                    baseColor={isScrolled ? "rgba(26, 5, 13, 0.8)" : "rgba(26, 5, 13, 0.5)"}
                    pillColor="#ec4899"
                    hoveredPillTextColor="#ffffff"
                    pillTextColor="#ffffff"
                    logo={
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600/20 to-fuchsia-600/20 border border-white/10 group-hover:border-pink-500/50 transition-colors">
                                <i className="bx bx-code-alt text-xl text-pink-500"></i>
                            </div>
                            <span className="text-lg font-bold text-white tracking-wide group-hover:text-pink-500 transition-colors">
                                Portfolio
                            </span>
                        </a>
                    }
                    logoAlt="Portfolio"
                />
            </div>

            {/* Mobile Header (Simplified for now, reused logic) */}
            <div className={`md:hidden flex items-center justify-between text-white rounded-full px-6 py-3 border border-white/10 shadow-lg w-[90vw] transition-all duration-300 ${isScrolled ? 'bg-[#1a050d]/80 backdrop-blur-md' : 'bg-[#1a050d]/50 backdrop-blur-sm'}`}>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                    Portfolio
                </span>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-[calc(100%+1rem)] left-0 w-full min-w-[200px] bg-[#1a050d]/95 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl ${isMenuOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
                    }`}
            >
                <div className="px-4 py-4 space-y-1">
                    {navbarData.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeSection === item.id
                                ? "text-pink-400 bg-white/5"
                                : "text-gray-300 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
