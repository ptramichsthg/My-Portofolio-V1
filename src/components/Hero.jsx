import { useState, useEffect } from "react";
import homeData from "../data/homeData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';
import AnimatedButton from "./AnimatedButton.jsx";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = homeData.typingTexts;
    const currentTitle = titles[currentIndex];

    const typeSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 overflow-hidden"
    >
      {/* Accent Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white flex items-center gap-3">
                {homeData.title}
                <i className="bx bx-hand text-4xl sm:text-5xl lg:text-6xl animate-wave"></i>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white flex items-center">
                <span className="typing-text">
                  {currentText}
                  <span
                    className={`cursor ${showCursor ? "opacity-100" : "opacity-0"
                      } transition-all duration-200`}
                  >
                    |
                  </span>
                </span>
              </h2>
            </div>


            <p className="text-lg text-white leading-relaxed max-w-lg">
              {homeData.description}
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">
                Follow me on:
              </span>
              <div className="flex space-x-3">
                {homeData.socialMedia.map((social, index) => (
                  <Tippy content={social.platform} key={index} placement="top">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 border border-white/20 text-white rounded-full flex items-center shadow-2xl justify-center hover:bg-pink-600 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      aria-label={`Visit ${social.platform}`}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  </Tippy>
                ))}
              </div>

            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              {homeData.buttons.map((btn, index) => (
                <Tippy content={btn.label} key={index} placement="top">
                  {btn.href && btn.href !== "#" ? (
                    <a
                      href={btn.href}
                      target={btn.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      <AnimatedButton
                        variant={btn.type === "primary" ? "glow" : "secondary"}
                        icon={`bx ${btn.type === "primary" ? "bx-download" : "bx-envelope"}`}
                        className="w-full px-6 py-3"
                      >
                        {btn.label}
                      </AnimatedButton>
                    </a>
                  ) : (
                    <AnimatedButton
                      onClick={() =>
                        Swal.fire({
                          title: "Not Available Yet",
                          text: "This feature or file is not ready yet. Please check back later!",
                          icon: "info",
                          confirmButtonColor: "#1F2937",
                          confirmButtonText: "Alright",
                        })
                      }
                      variant={btn.type === "primary" ? "glow" : "secondary"}
                      icon={`bx ${btn.type === "primary" ? "bx-download" : "bx-envelope"}`}
                      className="px-6 py-3"
                    >
                      {btn.label}
                    </AnimatedButton>
                  )}
                </Tippy>

              ))}

            </div>


            {/* Quick Stats Heading */}
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-6 text-white">
              <i className="bx bx-bar-chart-alt-2 text-2xl" />
              Quick Stats
            </h4>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2"
            >
              {homeData.stats.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-pink-500/50 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-500 group-hover:text-pink-400 transition-colors">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">{item.value}</p>
                    <p className="text-xs text-gray-400">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>


          <div
            className="relative flex justify-center items-center perspective-1000"
            data-aos="fade-left"
            onMouseMove={(e) => {
              const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - left - width / 2) / 25;
              const y = (e.clientY - top - height / 2) / 25;
              e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
            }}
            style={{ transition: "transform 0.1s ease-out" }}
          >
            <div className="relative z-10 duration-500" style={{ transformStyle: "preserve-3d" }}>
              <div
                className="absolute inset-0 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"
                style={{ transform: "translateZ(-50px)" }}
              ></div>
              <img
                src={homeData.img}
                alt="Putra Michael Sitohang Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl dark:shadow-gray-800 border-8 border-white dark:border-gray-800 transition-all duration-300 pointer-events-none"
                style={{ transform: "translateZ(50px)" }}
              />
            </div>

            {homeData.floatingIcons.map((tech, index) => {
              const positions = [
                "top-0 left-16 sm:left-20",
                "top-0 right-0",
                "bottom-0 left-8 sm:left-10",
                "bottom-8 sm:bottom-10 right-10 sm:right-12",
              ];
              return (
                <Tippy
                  key={index}
                  content={tech.label}
                  placement="top"
                  animation="shift-away"
                  delay={[0, 0]}
                >
                  <div
                    className={`absolute ${positions[index % positions.length]
                      } w-14 h-14 sm:w-16 sm:h-16 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 hover:bg-white/10 hover:border-pink-500/50 hover:text-pink-500 hover:-translate-y-2 transition-all duration-300 animate-float cursor-pointer`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      transform: "translateZ(80px)"
                    }}
                  >
                    <i className={`${tech.icon} text-2xl sm:text-3xl`}></i>
                  </div>
                </Tippy>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          @keyframes wave {
            0%, 100% {
              transform: rotate(0deg);
            }
            10%, 30% {
              transform: rotate(14deg);
            }
            20%, 40% {
              transform: rotate(-8deg);
            }
            50% {
              transform: rotate(14deg);
            }
            60% {
              transform: rotate(0deg);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-wave {
            animation: wave 2s ease-in-out infinite;
            transform-origin: 70% 70%;
            display: inline-block;
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
          .dark .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
          }
          .typing-text {
            display: inline-block;
          }
          .cursor {
            font-weight: 600;
            color: #d1d5db;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Home;
