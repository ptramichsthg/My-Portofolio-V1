import footerData from "../data/footerData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';
import AnimatedButton from "./AnimatedButton.jsx";

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none"></div>

      {/* Accent Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Brand */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <i className={`${footerData.brand.icon} text-pink-500 text-2xl`}></i>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {footerData.brand.name}
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
              {footerData.brand.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center space-y-4">
            <h4 className="flex items-center justify-center gap-2 text-lg font-bold text-white mb-4">
              <i className={`${footerData.navigationIcon} text-pink-500`}></i>
              Navigation
            </h4>
            <ul className="flex flex-col items-center gap-3">
              {footerData.navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-pink-500 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    <i className="bx bx-chevron-right text-xs"></i> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="text-center space-y-4">
            <h4 className="flex items-center justify-center gap-2 text-lg font-bold text-white mb-4">
              <i className={`${footerData.socialsIcon} text-pink-500`}></i>
              Find Me Online
            </h4>
            <ul className="flex flex-wrap justify-center gap-3">
              {footerData.socials.map((social, index) => (
                <li key={index}>
                  <Tippy content={social.label} placement="top">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg hover:scale-110 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-fuchsia-500/20 hover:border-pink-400/50 transition-all duration-300">
                        <i className={`${social.icon} text-xl`} />
                      </div>
                    </a>
                  </Tippy>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">Let's connect and collaborate!</p>
          </div>

          {/* Subscribe Form */}
          <div className="text-center space-y-4">
            <h4 className="flex items-center justify-center gap-2 text-lg font-bold text-white mb-4">
              <i className="bx bx-mail-send text-pink-500" />
              {footerData.formSubscription.title}
            </h4>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {footerData.formSubscription.description}
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={footerData.formSubscription.placeholder}
                className="px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
              />
              <Tippy content="Subscribe to my newsletter!">
                <AnimatedButton
                  onClick={() => {
                    Swal.fire({
                      title: "Coming Soon!",
                      text: "This subscription feature isn't live yet. Stay tuned!",
                      icon: "info",
                      confirmButtonColor: "#1F2937",
                      confirmButtonText: "Alright!",
                    });
                  }}
                  variant="glow"
                  icon="bx bx-send"
                  className="w-full px-4 py-3"
                >
                  {footerData.formSubscription.buttonText}
                </AnimatedButton>
              </Tippy>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-400 text-xs">
              <i className="bx bx-copyright text-sm"></i>
            </span>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="max-w-2xl text-center px-4">
            <p className="text-gray-300 italic font-serif leading-relaxed text-lg">
              "So do not fear, for I am with you; do not be dismayed, for I am your God.
              I will strengthen you and help you; I will uphold you with my righteous right hand."
            </p>
            <p className="text-pink-500 font-bold mt-2 font-serif">— Isaiah 41:10</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center text-center gap-4">
          {/* Legal Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            {footerData.legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-pink-500 transition-all duration-300 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            {footerData.copyright}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
