"use client";

import { Phone, Mail, MapPin, MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
const [showVehicles, setShowVehicles] = useState(false);
const [showCowDung, setShowCowDung] = useState(false);
const [showTransportation, setShowTransportation] = useState(false);

  return (
    <main className="bg-black text-white">

     {/* ================= TOP CONTACT BAR ================= */}

<div className="bg-yellow-500 text-black">

  <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-center gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide text-xs sm:text-sm font-semibold">

    <a
      href="tel:+918075364743"
      className="flex-shrink-0 flex items-center gap-1 hover:underline"
    >
      <Phone size={14} />
      <span>+91 8075364743</span>
    </a>

    <a
      href="mailto:info@achoos.com"
      className="flex-shrink-0 flex items-center gap-1 hover:underline"
    >
      <Mail size={14} />
      <span>info@achoos.com</span>
    </a>

    <div className="flex-shrink-0 flex items-center gap-1">
      <MapPin size={14} />
      <span>Kerala, India</span>
    </div>

  </div>

</div>

{/* ================= NAVBAR ================= */}

<nav className="sticky top-0 z-10 bg-black/60 backdrop-blur-lg border-b border-white/10">

  <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

    {/* Logo */}

    <a href="#">
      <img
        src="/image/logo.png"
        alt="Achoos Transportation Service"
        className="h-20 sm:h-16 md:h-20 lg:h-24 w-auto transition duration-300"
      />
    </a>

    {/* Desktop Menu */}

    <div className="hidden md:flex items-center gap-4">

      <a
        href="#"
        className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition"
      >
        Home
      </a>

      <a
        href="#services"
        className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition"
      >
        Services
      </a>

      <a
        href="#sales"
        className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition"
      >
        Vehicle Sales
      </a>

      <a
        href="#contact"
        className="px-5 py-2 rounded-full bg-yellow-500 text-black font-bold hover:scale-105 transition"
      >
        Contact
      </a>

    </div>

    {/* Mobile Menu Button */}

    <button
      onClick={() => setOpen(!open)}
      className="md:hidden bg-zinc-900 p-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
    >
      <Menu size={24} />
    </button>

  </div>

  {/* ================= MOBILE MENU ================= */}

<div
  className={`md:hidden overflow-hidden transition-all duration-300 ${
    open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="mx-3 mt-2 mb-3 rounded-2xl bg-zinc-900/95 backdrop-blur-lg border border-zinc-800 p-3">

    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">

      <a
        href="#"
        onClick={() => setOpen(false)}
        className="flex-shrink-0 px-4 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition text-sm font-semibold"
      >
         Home
      </a>

      <a
        href="#services"
        onClick={() => setOpen(false)}
        className="flex-shrink-0 px-4 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition text-sm font-semibold"
      >
        Services
      </a>

      <a
        href="#sales"
        onClick={() => setOpen(false)}
        className="flex-shrink-0 px-4 py-2 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition text-sm font-semibold"
      >
        Sales
      </a>

     

      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="flex-shrink-0 px-4 py-2 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition text-sm font-bold"
      >
       📞Contact
      </a>

      
    </div>

  </div>
</div>

</nav>

      {/* ================= HERO ================= */}

<section
  className="relative min-h-screen bg-cover bg-center flex items-center"
  style={{
    backgroundImage: "url('/image/hero.jpeg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-24">

    {/* Badge */}
    <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
      🚛 Trusted Transportation Partner
    </span>

    {/* Heading */}
    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
      Reliable
      <span className="text-yellow-400"> Transportation</span>
      <br />
      & Vehicle Sales
    </h1>

    {/* Description */}
    <p className="mt-6 max-w-2xl text-zinc-300 text-base sm:text-lg leading-8">
      We provide dependable transportation services, commercial vehicle
      sales and logistics solutions across Kerala with safety, reliability
      and customer satisfaction as our priority.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4">

      <a
        href="tel:+918075364743"
        className="flex items-center justify-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
      >
        <Phone size={22} />
        Call Now
      </a>

      <a
        href="https://wa.me/918075364743"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
      >
        <MessageCircle size={22} />
        WhatsApp
      </a>

      <a
    href="https://www.instagram.com/achoos_._"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-pink-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
  >
        <MessageCircle size={22} />
        Instagram
      </a>


    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">

      <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
        <h3 className="text-2xl font-bold text-yellow-400">100+</h3>
        <p className="text-sm text-zinc-300 mt-1">Happy Clients</p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
        <h3 className="text-2xl font-bold text-yellow-400">24/7</h3>
        <p className="text-sm text-zinc-300 mt-1">Support</p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
        <h3 className="text-2xl font-bold text-yellow-400">Safe</h3>
        <p className="text-sm text-zinc-300 mt-1">Transportation</p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
        <h3 className="text-2xl font-bold text-yellow-400">Kerala</h3>
        <p className="text-sm text-zinc-300 mt-1">Service Area</p>
      </div>

    </div>

  </div>
</section>
      {/* ================= SERVICES ================= */}

<section
  id="services"
  className="bg-zinc-950 py-20 sm:py-24 px-4 sm:px-6"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <div className="text-center">
      <span className="text-yellow-400 font-semibold uppercase tracking-widest">
        What We Offer
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">
        Our Services
      </h2>

      <p className="text-zinc-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base">
        We provide reliable transportation services, commercial vehicle
        sales, and organic cow dung powder transportation across Kerala.
      </p>
    </div>

    {/* Cards */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

      {/* Vehicle Sales */}

      <a href="#sales">
        <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition duration-300 hover:-translate-y-2">

          <img
            src="/image/truck1.jpeg"
            alt="Vehicle Sales"
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-6">


            <h3 className="text-2xl font-bold text-yellow-400 mt-4">
              Vehicle Sales
            </h3>

            <p className="text-zinc-400 mt-3">
              Browse quality commercial vehicles that are inspected,
              maintained and These kind of vehicles are available.
            </p>

           <button
  onClick={() => setShowVehicles(!showVehicles)}
  className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-semibold hover:underline transition"
>
  {showVehicles ? "Hide Vehicles ↑" : "View Vehicles →"}
</button>

{showVehicles && (
  <div className="mt-6 grid grid-cols-2 gap-4">

    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700"
      >
        <img
          src={`/image/truck${index + 1}.jpeg`}
          alt={`Vehicle ${index + 1}`}
          className="w-full h-32 object-cover"
        />

        <div className="p-3">
           <p className="text-zinc-400 text-xs mt-1">
            These kind of vehicles are available.
          </p>
          

          <a
            href="tel:+918075364743"
            className="mt-3 block text-center bg-yellow-500 text-white py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
          >
            Contact Now
          </a>
        </div>
      </div>
    ))}

  </div>
)}

          </div>

        </div>
      </a>

      {/* Transportation */}

      <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition duration-300 hover:-translate-y-2">

        <img
          src="/image/service5.jpeg"
          alt="Transportation"
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="p-6">


          <h3 className="text-2xl font-bold text-yellow-400 mt-4">
            Transportation
          </h3>

          <p className="text-zinc-400 mt-3">
            Safe, reliable and on-time transportation services across Kerala
            for commercial goods.
          </p>

         <button
  onClick={() => setShowTransportation(!showTransportation)}
  className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-semibold hover:underline transition"
>
  {showTransportation ? "Hide Details ↑" : "Learn More →"}
</button>

{showTransportation && (
  <div className="mt-6 grid grid-cols-2 gap-4">

    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700"
      >
        <img
          src={`/image/trans${index + 1}.jpeg`}
          alt={`Organic CowDung ${index + 1}`}
          className="w-full h-32 object-cover"
        />

        <div className="p-3">
          <h4 className="font-semibold">
            Transportation
          </h4>

          <p className="text-zinc-400 text-xs mt-1">
            Safe, fast & reliable transportation.
          </p>

          <a
            href="tel:+918075364743"
            className="mt-3 block text-center bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    ))}

  </div>
)}

        </div>

      </div>

      {/* CowDung */}

      <a href="#cowdung">
        <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition duration-300 hover:-translate-y-2">

          <img
            src="/image/valapodi.jpeg"
            alt="CowDung Powder"
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-6">

            

            <h3 className="text-2xl font-bold text-yellow-400 mt-4">
  Cow Dung Powder
  <span className="block text-lg text-yellow-400 font-medium mt-1">
    (വളപ്പൊടി)
  </span>
</h3>

            <p className="text-zinc-400 mt-3">
              Professional transportation services for organic cow dung powder
              with safe handling and timely delivery.
            </p>

            <button
  onClick={() => setShowCowDung(!showCowDung)}
  className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-semibold hover:underline transition"
>
  {showCowDung ? "Hide Gallery ↑" : "Explore →"}
</button>

{showCowDung && (
  <div className="mt-6 grid grid-cols-2 gap-4">

    {Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700"
      >
        <img
          src={`/image/cow${index + 1}.jpeg`}
          alt={`Organic CowDung ${index + 1}`}
          className="w-full h-32 object-cover"
        />

        <div className="p-3">
          <h4 className="font-semibold">
            Organic CowDung
          </h4>

          <p className="text-zinc-400 text-xs mt-1">
            Premium Organic Product
          </p>

          <a
            href="tel:+918075364743"
            className="mt-3 block text-center bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    ))}

  </div>
)}

          </div>

        </div>
      </a>

    </div>

  </div>
</section>
            {/* ================= CONTACT ================= */}

<section
  id="contact"
  className="bg-zinc-950 py-20 sm:py-24 px-4 sm:px-6"
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center">

      <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
        CONTACT US
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4">
        Get In Touch
      </h2>

      <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
        Need transportation services or looking to purchase a commercial vehicle?
        Contact us today.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 mt-16">

      <div className="space-y-4">

  <a
    href="tel:+918075364743"
    className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 hover:border-yellow-500 transition"
  >
    <div>
      <h3 className="font-bold text-lg">Call Us</h3>
      <p className="text-zinc-400 text-sm">+91 80753 64743</p>
    </div>

    <span className="text-yellow-400 text-xl">→</span>
  </a>

  <a
    href="https://wa.me/918075364743"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 hover:border-green-500 transition"
  >
    <div>
      <h3 className="font-bold text-lg" >WhatsApp</h3>
      <p className="text-zinc-400 text-sm">Chat with us</p>
    </div>

    <span className="text-green-400 text-xl">→</span>
  </a>

  <a
    href="https://www.instagram.com/achoos_._"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 hover:border-pink-500 transition"
  >
    <div>
      <h3 className="font-bold text-lg">Instagram</h3>
      <p className="text-zinc-400 text-sm">@achoos_._</p>
    </div>

    <span className="text-pink-400 text-xl">→</span>
  </a>

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5">
    <h3 className="font-bold text-lg">Address</h3>
    <p className="text-zinc-400 text-sm mt-2">
      Mannarkkad, Kottiyode<br />
      Palakkad, Kerala - 678593
    </p>
  </div>

</div>

      {/* Right */}

      <a
        href="https://maps.app.goo.gl/HV36A6QYZrciZ1hJ8"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-3xl overflow-hidden"
      >

        <img
          src="/image/map.png"
          alt="Location"
          className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">

         <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold shadow-xl whitespace-nowrap">
  Open in Google Maps
</div>

        </div>

      </a>

    </div>

  </div>

</section>

{/* ================= FLOATING WHATSAPP ================= */}

<a
  href="https://wa.me/918075364743"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl text-2xl z-50 transition hover:scale-110"
>
  💬
</a>

 {/* ================= WHY CHOOSE US ================= */}

<section className="bg-black py-20 sm:py-24 px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <div className="text-center">

      <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
        WHY CHOOSE US
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4">
        Why Choose Achoos?
      </h2>

      <p className="text-zinc-400 max-w-2xl mx-auto mt-5">
        We are committed to delivering reliable transportation,
        quality vehicles, and exceptional customer support across Kerala.
      </p>

    </div>

    {/* Features */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {/* Card 1 */}

      <div className="group bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 text-center">

        <div className="text-6xl mb-6 transition group-hover:scale-110">
          🚛
        </div>

        <h3 className="text-2xl font-bold">
          Modern Fleet
        </h3>

        <p className="text-zinc-400 mt-4">
          Clean, reliable and well-maintained commercial vehicles.
        </p>

      </div>

      {/* Card 2 */}

      <div className="group bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 text-center">

        <div className="text-6xl mb-6 transition group-hover:scale-110">
          ⭐
        </div>

        <h3 className="text-2xl font-bold">
          Trusted Service
        </h3>

        <p className="text-zinc-400 mt-4">
          Hundreds of satisfied customers trust our transportation services.
        </p>

      </div>

      {/* Card 3 */}

      <div className="group bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 text-center">

        <div className="text-6xl mb-6 transition group-hover:scale-110">
          🛡️
        </div>

        <h3 className="text-2xl font-bold">
          Safe Delivery
        </h3>

        <p className="text-zinc-400 mt-4">
          Secure transportation with experienced drivers and careful handling.
        </p>

      </div>

      {/* Card 4 */}

      <div className="group bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 text-center">

        <div className="text-6xl mb-6 transition group-hover:scale-110">
          📞
        </div>

        <h3 className="text-2xl font-bold">
          24/7 Support
        </h3>

        <p className="text-zinc-400 mt-4">
          Call or WhatsApp us anytime for quick assistance.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= FOOTER ================= */}

<footer className="bg-black border-t border-zinc-800">

  <div className="max-w-7xl mx-auto px-6 py-1">

  <div className="flex flex-col items-center space-y-3">

  <img
    src="/image/logo.png"
    alt="Achoos"
    className="h-24 sm:h-28 md:h-32 w-auto"
  />
  </div>


      <p className="text-center text-zinc-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Achoos Transportation Services & Sales. All Rights Reserved.
      </p>
<br />
    </div>

</footer>
        </main>
  );
}