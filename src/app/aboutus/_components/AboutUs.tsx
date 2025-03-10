import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Gambar sebagai Background */}
      <div className="absolute inset-0 w-full h-full bg-black ">
        <Image
          src="/aboutus.png"
          alt="Seren"
          layout="fill"
          objectFit="cover"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Overlay Gelap untuk Kontras */}
      <div className="absolute inset-0 "></div>

      {/* Teks di atas Gambar */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Apa itu Serendipity?</h1>
        <p className="max-w-2xl mx-auto">
          Kami adalah perusahaan pembuat fashion terbaik di Jawa Tengah. Kami
          memulai perjalanan ini dengan alat seadanya, penuh semangat dan tekad
          untuk menghadirkan produk terbaik. Seiring waktu, kami terus
          berkembang karena selalu mengutamakan kualitas dalam setiap produk
          yang kami buat. Dengan bahan berkualitas tinggi yang nyaman dipakai
          serta layanan after-sales yang profesional dan dapat diandalkan, kami
          memastikan kepuasan pelanggan menjadi prioritas utama. <br /> <span className="bg-blue-500 rounded-xl">✨ Dari
          langkah kecil menuju kesuksesan besar, karena kualitas adalah yang
          utama. ✨</span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
