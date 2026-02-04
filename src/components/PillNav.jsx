import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const PillNav = ({
    logo,
    logoAlt = "Logo",
    items = [],
    activeHref,
    className = "",
    ease = "power2.easeOut",
    baseColor = "#000000",
    pillColor = "#ffffff",
    hoveredPillTextColor = "#000000",
    pillTextColor = "#ffffff",
    theme = "dark",
    mobile = false
}) => {
    const navRef = useRef(null);
    const pillRef = useRef(null);
    const itemsRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    // Initial load and active state sync
    useEffect(() => {
        const idx = items.findIndex(item => item.href === activeHref);
        if (idx !== -1) {
            setActiveIndex(idx);
        }
    }, [activeHref, items]);

    // Animate pill position
    useEffect(() => {
        const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;

        if (targetIndex !== null && itemsRef.current[targetIndex] && pillRef.current) {
            const target = itemsRef.current[targetIndex];

            gsap.to(pillRef.current, {
                x: target.offsetLeft,
                width: target.offsetWidth,
                opacity: 1,
                duration: 0.5,
                ease: ease
            });
        } else if (pillRef.current && targetIndex === null) {
            // Hide pill if nothing active/hovered
            gsap.to(pillRef.current, {
                opacity: 0,
                duration: 0.3
            });
        }
    }, [hoverIndex, activeIndex, ease, items]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;
            if (targetIndex !== null && itemsRef.current[targetIndex] && pillRef.current) {
                const target = itemsRef.current[targetIndex];
                gsap.set(pillRef.current, {
                    x: target.offsetLeft,
                    width: target.offsetWidth
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hoverIndex, activeIndex]);

    return (
        <div ref={navRef} className={`flex items-center gap-4 ${className}`} >
            {/* Logo */}
            {logo && (
                <div className="mr-8 flex items-center">
                    {typeof logo === 'string' ? (
                        <a href="/">
                            <img src={logo} alt={logoAlt} className="h-8 w-auto" />
                        </a>
                    ) : (
                        logo
                    )}
                </div>
            )}

            {/* Nav Items Container */}
            <div
                className="relative flex items-center rounded-full p-1 border border-white/10 backdrop-blur-md transition-colors duration-300"
                style={{
                    backgroundColor: baseColor,
                    boxShadow: '0 4px 20px -2px rgba(0,0,0,0.1)'
                }}
            >
                {/* The Sliding Pill */}
                <div
                    ref={pillRef}
                    className="absolute top-1 bottom-1 rounded-full pointer-events-none z-0"
                    style={{
                        backgroundColor: pillColor,
                        opacity: 0, // initially hidden
                        height: 'calc(100% - 8px)'
                    }}
                />

                {/* Items */}
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isHovered = index === hoverIndex;
                    // Determine text color: if hovered or active (and currently hovered matches active or no hover), use hovered color
                    // Simple logic: if the pill is behind this item, use hoveredPillTextColor.
                    const isPillBehind = isHovered || (hoverIndex === null && isActive);

                    return (
                        <a
                            key={index}
                            ref={el => itemsRef.current[index] = el}
                            href={item.href}
                            onClick={(e) => {
                                // e.preventDefault(); 
                                // Handle smooth scroll externally or here
                                setActiveIndex(index);
                            }}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className="relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-2"
                            style={{
                                color: isPillBehind ? hoveredPillTextColor : pillTextColor,
                            }}
                        >
                            {item.icon && <i className={`bx ${item.icon} text-lg`}></i>}
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default PillNav;
