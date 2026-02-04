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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

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
                      className="w-12 h-12 bg-white/15 border border-white/30 text-white rounded-full flex items-center shadow-2xl justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
                  className="flex flex-col items-center text-center gap-2.5 bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-400/50 shadow-xl p-3 rounded-xl group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className={`${item.icon} text-xl text-white`}></i>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">{item.value}</p>
                    <p className="text-xs text-gray-300 font-medium leading-tight">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>


          <div className="relative flex justify-center items-center" data-aos="fade-left">
            <div className="relative z-10">
              <img
                src={homeData.img}
                alt="Putra Michael Sitohang Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl dark:shadow-gray-800 border-8 border-white dark:border-gray-800 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
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
                      } w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/40 text-white rounded-2xl drop-shadow-2xl shadow-xl hover:shadow-2xl flex items-center justify-center hover:scale-110 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/60 hover:-translate-y-2 transition-all duration-300 animate-float cursor-pointer backdrop-blur-sm`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
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
