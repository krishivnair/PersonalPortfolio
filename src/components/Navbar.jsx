import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handlerOfMenu = () => {
    setOpen(!isOpen);
  };

  return (
    /*Desktop view codes*/
    <div className="text-white flex justify-between items-center">
      <h1 className="font-bold text-[#E5E5E5] text-[24px] ml-4 md:ml-[170px] mt-[20px]">
        Portfolio.
      </h1>
      <ul className="hidden md:flex mt-[20px] font-bold">
        <li className="p-4 hover:cursor-pointer"><Link to="/">Home</Link></li>
        <li className="p-4 hover:cursor-pointer"><Link to="/About">About</Link></li>
        <li className="p-4 hover:cursor-pointer"><Link to="/Skills">Skills</Link></li>
        <li className="p-4 hover:cursor-pointer"><Link to="/Projects">Projects</Link></li>
        <li className="p-4 hover:cursor-pointer"><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="hidden md:flex mr-4 md:mr-[170px] mt-[20px] font-bold">
        <button
          className="rounded-full bg-[linear-gradient(267deg,_#e8d94c,_#41b57a,_#1f5f77)] text-[#E5E5E5] px-[30px] py-[10px]
        transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Hire me
        </button>
      </div>

      <div onClick={handlerOfMenu} px-4 className="md:hidden mr-4">
        {isOpen ? (
          <AiOutlineClose className="size-6 mt-[20px]" />
        ) : (
          <AiOutlineMenu className="size-6 mt-[20px]" />
        )}
      </div>

      {isOpen && (
        <div className="absolute md:hidden left-0 top-20 w-full h-[58%] bg-slate-800 transition-all duration-300 ease-in-out">
          <ul className="md:hidden flex flex-col font-bold items-center">
            <li className="p-4 hover:cursor-pointer border-b border-b-slate-300">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="p-4 hover:cursor-pointer border-b border-b-slate-300">
            <Link to="/About" onClick={() => setOpen(false)}>About</Link>
            </li>
            <li className="p-4 hover:cursor-pointer border-b border-b-slate-300">
            <Link to="/Skills" onClick={() => setOpen(false)}>Skills</Link>
            </li>
            <li className="p-4 hover:cursor-pointer border-b border-b-slate-300">
            <Link to="/Projects" onClick={() => setOpen(false)}>Projects</Link>
            </li>
            <li className="p-4 hover:cursor-pointer"><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar;
