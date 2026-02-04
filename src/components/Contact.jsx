import { useState } from "react";
import contactData from "../data/contactData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';
import AnimatedButton from "./AnimatedButton.jsx";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <section id="contact" className="relative min-h-screen pb-20 pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{contactData.title}</h2>
          <p className="text-lg text-gray-300">{contactData.subtitle}</p>
        </div>

        {/* Tabs Menu */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap" data-aos="fade-up">
          {[
            { value: "contact", label: "Contact Me", icon: "bx bx-envelope" },
            { value: "support", label: "Support Me", icon: "bx bx-heart" },
          ].map((tab) => (
            <AnimatedButton
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              variant="navigation"
              active={activeTab === tab.value}
              icon={tab.icon}
              className="px-6 py-3 text-sm"
            >
              {tab.label}
            </AnimatedButton>
          ))}
        </div>

        {/* Tabs Content */}
        <div>
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side: Social Links */}
              <div className="grid gap-5 max-w-xl mx-auto lg:mx-0">
                {contactData.socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between gap-4 px-7 w-full py-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300"
                    aria-label={item.label}
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/0 to-fuchsia-500/0 group-hover:from-pink-500/10 group-hover:to-fuchsia-500/10 transition-all duration-300 pointer-events-none"></div>

                    <div className="relative flex items-start gap-4 z-10">
                      <div className="w-16 h-16 flex items-center justify-center shadow-2xl rounded-xl bg-gradient-to-br from-pink-600 to-fuchsia-600 text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className={`${item.icon} text-2xl`} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="font-bold text-2xl leading-tight text-white group-hover:text-pink-300 transition-colors">{item.label}</span>
                        <span className="text-sm text-gray-300 leading-snug mt-1">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <i className="relative z-10 bx bx-chevron-right text-3xl text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              {/* Right Side: Contact Form */}
              <div
                className="relative rounded-2xl py-12 px-7 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl h-fit max-w-xl w-full mx-auto lg:mx-0"
                data-aos="fade-left"
              >
                {/* Card Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-fuchsia-600/20 rounded-2xl blur-xl opacity-50"></div>

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    <i className="bx bx-envelope text-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 bg-clip-text text-transparent" />
                    Send Me a Message
                  </h3>
                  <form className="grid gap-5">
                    <div className="relative group">
                      <i className="bx bx-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-pink-400 transition-colors"></i>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="relative group">
                      <i className="bx bx-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-pink-400 transition-colors"></i>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="relative group">
                      <i className="bx bx-message-square-dots absolute left-4 top-6 text-gray-400 text-xl group-focus-within:text-pink-400 transition-colors"></i>
                      <textarea
                        placeholder="Your Message"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                        rows="5"
                      />
                    </div>
                    <Tippy content="Send your message" placement="top">
                      <button
                        type="button"
                        onClick={() => {
                          Swal.fire({
                            title: "Message Sent!",
                            text: "Thank you for reaching out. I'll get back to you soon!",
                            icon: "success",
                            confirmButtonColor: "#3B82F6",
                            confirmButtonText: "Okay",
                          });
                        }}
                        className="relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 hover:shadow-2xl hover:from-blue-500 hover:to-purple-500 group overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          Send Message
                          <i className="bx bx-send text-xl group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </button>
                    </Tippy>
                  </form>
                </div>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div className="grid gap-6 max-w-xl mx-auto">
              {contactData.supportPlatforms.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300 max-w-xl mx-auto"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* Card Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-2xl blur-xl opacity-50"></div>

                  {item.type === "image" ? (
                    <div className="relative flex flex-col items-center text-center">
                      <i className="bx bx-heart text-5xl bg-gradient-to-br from-pink-500 to-red-500 bg-clip-text text-transparent mb-4"></i>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        {item.label}
                      </h4>
                      <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                        If my work has helped or inspired you, consider supporting me by scanning the QR code below. Every little bit means a lot!
                      </p>
                      <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition"></div>
                        <img
                          src={item.imageSrc}
                          alt={item.alt}
                          className="relative w-full h-auto rounded-xl shadow-2xl border border-white/20"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
