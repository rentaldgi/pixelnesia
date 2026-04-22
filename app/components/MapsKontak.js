"use client";
import React, { useState, useEffect } from "react";

const locations = [
  {
    kota: "Jakarta",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.374460300056!2d106.8536393!3d-6.2114259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3021a5e5031%3A0x1c839aa7466a2bc4!2sJl.%20Kayu%20Manis%20Timur%20II%20No.53%2C%20Matraman%2C%20Kota%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1721021520070!5m2!1sid!2sid",
    alamat: "Jl. Paseban Raya No.83, RT.1/RW.7, Paseban, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10440",
    link: "https://maps.app.goo.gl/jfrzkvbYfkLzwYAN9?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Bekasi",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4163041348991!2d106.9594571!3d-6.2463269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d0a0e96d26d%3A0xc8a2ff0489301e1b!2sJl.%20Kedung%20Waringin%20No.8%2C%20Bekasi%20Timur!5e0!3m2!1sid!2sid!4v1721021582746!5m2!1sid!2sid",
    alamat: "Pondok Surya Mandala RT 004 RW 013 Blok F1 No 18 , Jakamulya , Bekasi Selatan 17146",
    link: "https://maps.app.goo.gl/1WEKERBsTM7RcuAt8?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Bandung",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.826265905271!2d107.60074937588963!3d-6.910238967589021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6201f5c09c1%3A0x1a2e3e63c527336b!2sRentalday%20Cab%202!5e0!3m2!1sid!2sid!4v1687582111111!5m2!1sid!2sid",
    alamat: "Jalan PSM Dalam, Jl. PSM RW No.36, RW.rt5/13, Kebun Jayanti, Kota Bandung, Jawa Barat",
    link: "https://maps.app.goo.gl/8AmPdyHtvEVhTRdm7?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Bali",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.58196687435!2d115.229894!3d-8.691706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241005a5b3f15%3A0xc683be766d18f2d1!2sKos%20Gung%20Aji!5e1!3m2!1sid!2sid!4v1753943486783!5m2!1sid!2sid",
    alamat: "Jl. Tukad Pancoran IV A 4 No.15, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80225",
    link: "https://maps.app.goo.gl/t9117h7NzkNqj6Kp8"
  },
  {
    kota: "Surabaya",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.663733666318!2d112.7354067759023!3d-7.391934172922382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb4cb1a92b65%3A0xd002d29e96491af8!2sJl.%20Jimbar%20Ngawinan%20I%20No.31%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1721021605541!5m2!1sid!2sid",
    alamat: "Jl. Gayungan PTT Gg. Manggis No.28, RT.004/RW.02, Gayungan, Kec. Gayungan, Surabaya, Jawa Timur 60235",
    link: "https://maps.app.goo.gl/DganCHPdCsuuqU2G9?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Purwokerto",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3256.001614465823!2d109.24337377500092!3d-7.391921092617843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjMnMzAuOSJTIDEwOcKwMTQnNDUuNCJF!5e1!3m2!1sid!2sid!4v1753943214261!5m2!1sid!2sid",
    alamat: "Pabuaran Jl. Gunung Merapi RT 001/002 Purwokerto Utara",
    link: "https://maps.app.goo.gl/XsevsjjDs9aXdjSG9"
  },
  {
    kota: "Malang",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.461707027334!2d112.6453554!3d-7.984129300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629b5b8e68f0d%3A0x7a92cada772737c0!2sMALANG%20RIDER%20(SEWA%20MOTOR%20MALANG)!5e1!3m2!1sid!2sid!4v1753943338389!5m2!1sid!2sid",
    alamat: "Jl.Kalimosodo IV no 7, Polehan, Blimbing, Kota Malang, Jawa Timur 65126",
    link: "https://maps.app.goo.gl/YoXWpFobPGmFHXWg7?g_st=com.google.maps.preview.copy"
  }
];

export default function MapsKontak() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(4);
      }
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    if (startIndex + itemsPerView < locations.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visible = locations.slice(startIndex, startIndex + itemsPerView);

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`grid gap-8 transition-all duration-300 ${
            itemsPerView === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          }`}
        >
          {visible.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="relative w-full h-52 sm:h-60">
                <iframe
                  src={loc.embedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-2 bg-yellow-300 text-black font-bold px-4 py-1 rounded-r-full text-sm shadow-md">
                  {loc.kota}
                </div>
              </div>
              <div className="p-4 text-sm text-gray-800">
                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {loc.alamat}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-6 bg-yellow-300 px-6 text-black py-2 rounded-full shadow">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className={`text-2xl font-bold ${
                startIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              ‹
            </button>
            <button
              onClick={next}
              disabled={startIndex + itemsPerView >= locations.length}
              className={`text-2xl font-bold ${
                startIndex + itemsPerView >= locations.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
