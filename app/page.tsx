"use client";

import { Phone, Mail, MapPin, MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-black text-white">

      {/* TOP CONTACT BAR */}
      <div className="bg-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between items-center text-sm font-semibold">

          <a href="tel:+918075364743" className="flex items-center gap-2">
            <Phone size={16} />
            +91 8075364743
          </a>

          <a href="mailto:info@achoos.com" className="flex items-center gap-2">
            <Mail size={16} />
            info@achoos.com
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            Kerala, India
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 bg-black/70 backdrop-blur">

        <div className="max-w-8xl mx-auto h-20 px-4 flex items-center justify-between">

          <img
  src="/image/logo.png"
  alt="Achoos Transportation Service"
  className="h-24 w-auto"
/>

          <div className="hidden md:flex items-center gap-4">

  <a
    href="#"
    className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition duration-300"
  >
    Home
  </a>

  <a
    href="#services"
    className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition duration-300"
  >
    Services
  </a>

  <a
    href="#sales"
    className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition duration-300"
  >
    Vehicles Sales
  </a>

  <a
    href="#contact"
    className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition duration-300"
  >
    Contact
  </a>

</div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>

        </div>

      {open && (
  <div className="bg-black/90 backdrop-blur md:hidden mx-4 mt-3 px-4 py-3 rounded-2xl flex flex-row gap-3 items-center justify-center">

    <a
      href="#"
      className="text-white text-sm px-4 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition"
    >
      Home
    </a>

    <a
      href="#services"
      className="text-white text-sm px-4 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition"
    >
      Services
    </a>

    <a
      href="#sales"
      className="text-white text-sm px-4 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition"
    >
      Sales
    </a>

    <a
      href="#contact"
      className="text-white text-sm px-4 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition"
    >
      Contact
    </a>

  </div>
)}
      </nav>

      {/* HERO */}

      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
  backgroundImage: "url('/image/hero.jpeg')",
}}
      >

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <span className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold">
            Trusted Transportation Partner
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">

            Reliable Transportation
            <br />
            & Vehicles Sales

          </h1>

          <p className="mt-6 text-zinc-300 max-w-xl text-lg">

            Safe transportation services,
            logistics solutions and quality
            commercial Vehicles sales across Kerala.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="tel:+918075364743"
              className="flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              <Phone size={22} />
              Call Now
            </a>

            <a
              href="https://wa.me/918075364743"
              className="flex items-center gap-2 bg-green-500 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>

          </div>

          <div className="flex flex-wrap gap-6 mt-12 text-zinc-300">

            <span>🚛 Vehicles Available</span>
            <span>⭐ Trusted Service</span>
            <span>📍 Kerala</span>
            <span>⏱ Fast Delivery</span>

          </div>

        </div>

      </section>
      {/* SERVICES */}

      <section
        id="services"
        className="bg-zinc-950 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center">
            Our Services
          </h2>

          <p className="text-zinc-400 text-center mt-4 max-w-2xl mx-auto">
            We provide dependable transportation, logistics support,
            and commercial vehicle sales with a focus on safety,
            reliability, and customer satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

             {/* Service 1 */}

             <a href="#sales">

            <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

              <img
                src="/image/truck1.jpeg"
                alt="Vehicles Sales"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-yellow-400">
                  Vehicle Sales
                </h3>

                <p className="text-zinc-400 mt-3">
                  Buy quality commercial Vehicles that are ready for
                  immediate use.
                </p>

              </div>

            </div>
            </a>

           

            {/* Service 3 */}
            <a href="#cowdung">

            <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

              <img
                src="/image/valapodi.jpeg"
                alt="Logistics"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-yellow-400">
                  CowDung Service
                </h3>

                <p className="text-zinc-400 mt-3">
                  We provide safe, reliable, and timely transportation services for cow dung powder.
                </p>

              </div>

            </div>
          </a>
           {/* Service 2 */}

            <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

              <img
                src="/image/service5.jpeg"
                alt="Transportation"
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-yellow-400">
                  Transportation
                </h3>

                <p className="text-zinc-400 mt-3">
                  Safe and timely transportation services for goods
                  across Kerala.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center">
            Why Choose Achoos?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div className="bg-zinc-900 rounded-xl p-8 text-center">
              <h3 className="text-5xl">🚛</h3>
              <h4 className="mt-5 text-2xl font-bold">
                Modern Fleet
              </h4>
              <p className="text-zinc-400 mt-3">
                Well-maintained Vehicles for reliable transportation.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 text-center">
              <h3 className="text-5xl">⭐</h3>
              <h4 className="mt-5 text-2xl font-bold">
                Trusted Service
              </h4>
              <p className="text-zinc-400 mt-3">
                Committed to customer satisfaction and timely delivery.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 text-center">
              <h3 className="text-5xl">🛡️</h3>
              <h4 className="mt-5 text-2xl font-bold">
                Safe Delivery
              </h4>
              <p className="text-zinc-400 mt-3">
                Secure handling of goods with experienced drivers.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8 text-center">
              <h3 className="text-5xl">📞</h3>
              <h4 className="mt-5 text-2xl font-bold">
                24/7 Support
              </h4>
              <p className="text-zinc-400 mt-3">
                Contact us anytime through phone or WhatsApp.
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* Vehicles SALES */}

      <section id="sales" className="bg-zinc-950 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center">
            Vehicles For Sale
          </h2>

          <p className="text-zinc-400 text-center mt-4 max-w-2xl mx-auto">
            Browse our available Vehicles. Contact us directly for pricing,
            specifications, and availability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">

  {Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300"
    >
      <img
        src={`/image/truck${index + 1}.jpeg`}
        alt={`Vehicles ${index + 1}`}
        className="w-full h-72 object-cover"
      />
    </div>
  ))}

</div>

        </div>

      </section>

       {/* Cowdung Powder */}

      <section id="cowdung" className="bg-zinc-950 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center">
            CowDung Powder
          </h2>

          <p className="text-zinc-400 text-center mt-4 max-w-2xl mx-auto">
            We provide safe, reliable, and timely transportation services for organic cow dung powder across Kerala.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">

  {Array.from({ length: 4 }).map((_, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300"
    >
      <img
        src={`/image/cow${index + 1}.jpeg`}
        alt={`cow ${index + 1}`}
        className="w-full h-72 object-cover"
      />
    </div>
  ))}

</div>

        </div>

      </section>
            {/* CONTACT */}

      <section id="contact" className="py-24 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center">
            Contact Achoos
          </h2>

          <p className="text-zinc-400 text-center mt-4">
            Contact us today for transportation services or Vehicle sales.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">

            {/* Contact Details */}

            <div className="space-y-6">

              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-yellow-400 text-xl font-bold">📞 Phone</h3>
                <a
                  href="tel:+918075364743"
                  className="text-2xl font-semibold hover:text-yellow-400"
                >
                  +91 8075364743
                </a>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-green-400 text-xl font-bold">💬 WhatsApp</h3>
                <a
                  href="https://wa.me/918075364743"
                  target="_blank"
                  className="text-2xl font-semibold hover:text-green-400"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-blue-400 text-xl font-bold">✉️ Instagram</h3>
                <a
                  href="https://www.instagram.com/achoos_._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-2xl font-semibold hover:text-blue-400"
                >
                  Chat On Instagram
                </a>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-red-400 text-xl font-bold">📍 Address</h3>
                <p className="text-zinc-300 mt-2">
                  Achoos Transportation Services<br />
                  +91 8075364743 <br />
                  Kottiyode, Mannarkkad, Palakkad, Kerala <br />
                  678593
                </p>
              </div>

            </div>

            {/* Google Maps */}

           <div className="relative rounded-2xl overflow-hidden shadow-xl">

  <a
    href="https://maps.app.goo.gl/HV36A6QYZrciZ1hJ8"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/image/map.png"
      alt="Achoos Location"
      className="w-full h-[575px] object-cover hover:scale-105 transition duration-500"
    />

    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition"></div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <div className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-xl text-white font-bold shadow-lg">
        📍 Open in Google Maps
      </div>
    </div>

  </a>

</div>
          </div>

        </div>

      </section>


      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/918075364743"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-2xl z-50"
      >
        💬
      </a>

      {/* FOOTER */}

      <footer className="bg-zinc-950 border-t border-zinc-800">
  <div className="max-w-7xl mx-auto py-4 px-6 text-center">

    <img
      src="/image/logo.png"
      alt="Achoos Transportation Service"
      className="w-52 h-auto mx-auto"
    />

    <p className="text-zinc-400 mt-0">
      Transportation Services • Vehicle Sales • Valapodi Service
    </p>

    <p className="text-zinc-600 mt-3 text-sm">
      © {new Date().getFullYear()} Achoos Transportation Services.
      All Rights Reserved.
    </p>

  </div>
</footer>
        </main>
  );
}