import { useEffect, useState } from "react";
import AnimatedButton from "./AnimatedButton.jsx";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatedButton
                    onClick={scrollToTop}
                    variant="magnetic"
                    icon="bx bx-chevron-up"
                    className="!w-14 !h-14 !p-0 !rounded-full drop-shadow-2xl"
                />
            </div>

        )
    );
};

export default ScrollToTop;
