import React from "react";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router";

export default function Navbar() {


  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626] p-3">
        <div className="container flex justify-between items-center mx-auto">
          {/* logo div  */}
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-xl">
              <img
                src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png"
                alt=""
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-white text-xl">عدسة</span>
              <span className="text-xs text-orange-400/80">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </div>
          {/* links div  */}

          <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            <NavLink
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "active" : "text-neutral-400 hover:text-white"
                }`
              }
              to="/"
            >
              الرئيسية
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "active" : "text-neutral-400 hover:text-white"
                }`
              }
              to="/blog"
            >
              المدونة
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "active" : "text-neutral-400 hover:text-white"
                }`
              }
              to="/about"
            >
              من نحن
            </NavLink>
          </div>

          {/* button div  */}

          <div className="flex gap-3 items-center justify-center">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
              <IoIosSearch className="w-5 h-5" />
            </button>
            <button className="text-sm font-semibold text-white px-8 py-4 bg-orange-500 rounded-full">
              ابدأ القراءة
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
