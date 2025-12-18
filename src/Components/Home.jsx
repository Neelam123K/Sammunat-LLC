import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { GrSecure } from "react-icons/gr";
import { FaPaintBrush } from "react-icons/fa";
import { GiSpeedBoat } from "react-icons/gi";

const partners = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
  "https://randomuser.me/api/portraits/men/67.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
];

export default function Home() {
  return (
    <div className="min-h-[60] screen w-full overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-12]
                          grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-white mb-4
                         text-[clamp(1.5rem,5vw,3rem)] leading-tight">
            Landing Page <br />
            with <span className="text-sky-400">React & Tailwind</span>
          </h1>

          <p className="text-gray-400 mb-6 text-[clamp(0.875rem,3vw,1.25rem)]">
            Build fast, scalable, and beautiful applications that automatically
            fit your screen.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="w-full sm:w-auto px-5 py-2 sm:py-3 rounded-lg font-semibold
                               text-[clamp(0.875rem,2.5vw,1rem)] bg-sky-500 hover:bg-sky-600 transition">
              Get Started
            </button>

            <button className="w-full sm:w-auto px-5 py-2 sm:py-3 rounded-lg font-semibold
                               text-[clamp(0.875rem,2.5vw,1rem)] border border-gray-400 hover:bg-white hover:text-black transition">
              View Demo
            </button>
          </div>
        </div>

        {/* RIGHT - SWIPER */}
        <div className="bg-slate-900 rounded-xl p-4 shadow-lg w-full">
          <h3 className="text-center text-sky-400 font-semibold mb-3
                         text-[clamp(1rem,3vw,1.25rem)]">
            Trusted by Professionals
          </h3>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            loop
            slidesPerView={1}
            spaceBetween={10}
          >
            {partners.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt="User"
                  className="w-full h-60 sm:h-68 md:h-64 rounded-lg object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/*FEATURES */}
      <section className="max-w-7xl mx-auto px-4 py-10
                          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-4 rounded-xl text-center">
          <GiSpeedBoat className="text-sky-400 mx-auto mb-2 text-[clamp(1.5rem,4vw,2.5rem)]" />
          <h3 className="font-semibold text-[clamp(1rem,2.5vw,1.25rem)] mb-1">
            Fast Performance
          </h3>
          <p className="text-gray-300 text-[clamp(0.75rem,2vw,1rem)]">
            Smooth experience on all screens.
          </p>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl text-center">
          <FaPaintBrush className="text-sky-400 mx-auto mb-2 text-[clamp(1.5rem,4vw,2.5rem)]" />
          <h3 className="font-semibold text-[clamp(1rem,2.5vw,1.25rem)] mb-1">
            Beautiful Design
          </h3>
          <p className="text-gray-300 text-[clamp(0.75rem,2vw,1rem)]">
            Clean and modern UI.
          </p>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl text-center">
          <GrSecure className="text-sky-400 mx-auto mb-2 text-[clamp(1.5rem,4vw,2.5rem)]" />
          <h3 className="font-semibold text-[clamp(1rem,2.5vw,1.25rem)] mb-1">
            Secure
          </h3>
          <p className="text-gray-300 text-[clamp(0.75rem,2vw,1rem)]">
            Secure by design.
          </p>
        </div>

      </section>

      {/*FOOTER */}
      <footer className="text-center text-gray-400 text-[clamp(0.75rem,2vw,0.875rem)] py-4 border-t border-gray-700">
        © 2025 MyApp. All rights reserved.
      </footer>

    </div>
  );
}
