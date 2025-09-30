"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SosialMediaDropdown = ({ entity }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [admins, setAdmins] = useState([]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

    useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await fetch("https://backend.ptdahliaglobalindo.id/whatsapp-admins"); 
        const data = await res.json();
        setAdmins(data);
      } catch (err) {
        console.error("Failed to load admins", err);
      }
    };
    fetchAdmins();
  }, []);

  const handleWhatsappClick = async (admin) => {
    try {
      await fetch("https://backend.ptdahliaglobalindo.id/whatsapp-clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adminId: admin.id,
          entity: admin.entity,
        }),
      });

      window.open(`https://wa.me/${admin.phoneNumber}`, "_blank");
    } catch (err) {
      console.error("Error logging click", err);
      window.open(`https://wa.me/${admin.phoneNumber}`, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center md:items-start gap-4 w-full">

      {/* WhatsApp */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("whatsapp")}
          className="flex items-center justify-between w-full px-4 py-3 text-green-700 font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image src="/images/logos_whatsapp-icon.png" alt="WhatsApp Icon" width={20} height={20} />
            WhatsApp
          </div>
          <span className={`transition-transform ${activeDropdown === "whatsapp" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "whatsapp" ? "max-h-[500px]" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {admins
              .filter(admin => admin.entity === entity) // filter per project entity
              .map(admin => (
                <div key={admin.id}>
                  <div className="font-semibold">{admin.name}</div>
                  <button
                    onClick={() => handleWhatsappClick(admin)}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-full mt-1 text-sm"
                  >
                    (+62) {admin.phoneNumber}
                  </button>
                  <hr className="border-t border-green-400 my-2" />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* TikTok */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("tiktok")}
          className="flex items-center justify-between w-full px-4 py-3 text-black font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image src="/images/logos_tiktok-icon.png" alt="TikTok" width={20} height={20} />
            TikTok
          </div>
          <span className={`transition-transform ${activeDropdown === "tiktok" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "tiktok" ? "max-h-[500px]" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {[
              {
                area: "Jakarta",
                users: [{ handle: "@ig_pixelnesia.jkt", link: "https://www.tiktok.com/@ig_pixelnesia.jkt?_t=ZS-8yK510bzuvn&_r=1" }]
              },
              {
                area: "Purwokerto",
                users: [{ handle: "@pixelnesia.pwt", link: "https://www.tiktok.com/@pixelnesia.pwt?_t=ZS-8yK54FyQCPv&_r=1" }]
              },
              {
                area: "Bali",
                users: [{ handle: "@sewaiphone.pixelnesia", link: "https://www.tiktok.com/@sewaiphone.pixelnesia?_t=ZS-8yK55j7xSit&_r=1" }]
              },
              {
                area: "Malang",
                users: [{ handle: "@pixelnesia.malang", link: "https://www.tiktok.com/@pixelnesia.malang?_t=ZS-8yK578MBOl8&_r=1" }]
              },
              {
                area: "Surabaya",
                users: [{ handle: "@pixelnesia.sby", link: "https://www.tiktok.com/@pixelnesia.sby?_t=ZS-8yK5FkVHoM4&_r=1" }]
              },
            ].map((region, index) => (
              <div key={index}>
                {index > 0 && <hr className="border-t border-gray-300 my-2" />}
                <div className="font-semibold mb-1">{region.area}</div>
                <div className="flex flex-wrap gap-2">
                  {region.users.map((user, idx) => (
                    <a
                      key={idx}
                      href={user.link}
                      target="_blank"
                      className="bg-black text-white px-4 py-1 rounded-full text-xs hover:underline"
                    >
                      {user.handle}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("instagram")}
          className="flex items-center justify-between w-full px-4 py-3 text-pink-500 font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image src="/images/logos_instagram-icon.png" alt="Instagram" width={20} height={20} />
            Instagram
          </div>
          <span className={`transition-transform ${activeDropdown === "instagram" ? "rotate-180" : ""}`}>
            &#9650;
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === "instagram" ? "max-h-[1000px]" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {[
              { area: "Pusat", users: [{ handle: "@pixelnesia.id", link: "https://instagram.com/pixelnesia.id" }] },
              { area: "Jakarta", users: [{ handle: "@pixelnesia.jkt", link: "https://instagram.com/pixelnesia.jkt" }] },
              { area: "Bekasi / Cikarang", users: [{ handle: "@sewaiphone.bekasicikarang", link: "https://instagram.com/sewaiphone.bekasicikarang" }] },
              { area: "Surabaya", users: [{ handle: "@pixelnesia.surabaya", link: "https://instagram.com/pixelnesia.surabaya" }] },
              { area: "Malang", users: [{ handle: "@pixelnesia.malang", link: "https://instagram.com/pixelnesia.malang" }] },
              { area: "Purwokerto", users: [{ handle: "@pixelnesia.pwt", link: "https://instagram.com/pixelnesia.pwt" }] },
              { area: "Bali", users: [{ handle: "@pixelnesia.bali", link: "https://instagram.com/pixelnesia.bali" }] },
            ].map((region, index) => (
              <div key={index}>
                {index > 0 && <hr className="border-t border-gray-300 my-2" />}
                <div className="font-semibold mb-1">{region.area}</div>
                <div className="flex overflow-x-auto gap-2">
                  {region.users.map((user, idx) => (
                    <a
                      key={idx}
                      href={user.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-4 py-1 rounded-full text-xs whitespace-nowrap hover:underline"
                    >
                      {user.handle}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SosialMediaDropdown;
