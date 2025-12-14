import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT  */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            This is a Landing page <br />
            with <span className="text-sky-400">React & Tailwind</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Trusted by developers and teams to build fast, scalable and
            beautiful applications with Modern tools for modern applications..
          </p>

          {/* SIDE BUTTONS */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-semibold">
              Get Started learning
            </button>
            <button className="px-6 py-3 border border-gray-400 hover:bg-white hover:text-black rounded-lg font-semibold">
              View Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-6 text-center text-sky-400">
            Trusted by Professionals
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 2000 }}
            loop
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {partners.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt="User"
                  className="rounded-xl h-24 w-full object-cover grayscale hover:grayscale-0 transition"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

            {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">

    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
    <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 text-sky-400">
      <GiSpeedBoat className="text-2xl" />
      Fast Performance
    </h3>
    <p className="text-gray-300">
      Fast, smooth, and responsive user experience.
    </p>
    </div>

  <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
    <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 text-sky-400">
      <FaPaintBrush className="text-2xl" />
      Beautiful Design
    </h3>
    <p className="text-gray-300">
      Crafted with beauty and usability in mind.
    </p>
  </div>

  <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
    <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 text-sky-400">
      <GrSecure className="text-2xl" />
      Secure
    </h3>
    <p className="text-gray-300">
      Secure by design, trusted by users.
    </p>
  </div>

</section>


      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 border-t border-gray-700">
        © 2025 MyApp. All rights reserved.
        Code by Sammunat LLC.
        <ul className="flex justify-center space-x-4 mt-2">Contact</ul>
      </footer>
    </div>

    
  );
};

export default Home;
