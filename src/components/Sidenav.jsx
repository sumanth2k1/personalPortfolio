import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineExclamationCircle,
  AiOutlineProject,
} from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";
import { BsMailbox } from "react-icons/bs";
import resume from "../assets/resume.pdf";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export default function Sidenav() {
  const [nav, setNav] = useState(false);
  const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "winter");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleTheme = (e) => {
    if (e.target.checked){
        setTheme("darkTheme");
    }
    else{
        setTheme("winter");
    }
  }

  useEffect(() => {
    localStorage.setItem("theme",theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme",localTheme);
  },[theme])

  return (
    <div data-theme="winter">
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-10 right-6 z-[99] md:hidden hover:scale-110 ease-in duration-200"
        size={20}
      />
      <a className="fixed top-10 right-20 z-[99] max-md:hidden">
            <label className="swap swap-rotate  text-9xl">
            <input type="checkbox" onChange={handleTheme} checked={theme==="winter"?false:true}/>
            <div className="swap-on h-11 w-11 justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-200"><img src={sun} /></div>
            <div className="swap-off h-11 w-11 justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-200"><img src={moon} /></div>
          </label>
          </a>

      {nav ? (
        <div className="fixed w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineExclamationCircle size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsMailbox size={20} />
            <span className="pl-4">Contact</span>
          </a>
          <a
            onClick={handleNav}
            href={resume}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdOutlineDescription size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a className="w-[75%] flex justify-center items-center  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
            <label className="swap swap-rotate  text-9xl">
            <input type="checkbox" onChange={handleTheme} checked={theme==="winter"?false:true}/>
            <div className="swap-on h-11 w-11 justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-200"><img src={sun} /></div>
            <div className="swap-off h-11 w-11 justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-1 cursor-pointer hover:scale-110 ease-in duration-200"><img src={moon} /></div>
          </label>
          </a>
          
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineExclamationCircle size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsMailbox size={20} />
          </a>
          <a
            href={resume}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdOutlineDescription size={20} />
          </a>
        
        </div>
      </div>
    </div>
  );
}
