import React from "react";
import Image from "../assets/bg.jpg";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineMail } from 'react-icons/Hi';
import {SlSocialFacebook, SlSocialGithub, SlSocialLinkedin, SlSocialTwitter, } from 'react-icons/Sl'
import logo from '../assets/logo5.png'


export default function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover objet-left"
        src={Image}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
      <img src={logo} className='h-[120px] rounded-full relative z-10 fixed top-0 hover:scale-110 ease-in duration-200'/>
        <div className="writer inline-block max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="writer-text overflow-hidden text-center text-md sm:text-3xl text-2xl font-bold text-gray-800">Hii👋, I'm Sumanth Devadiga</h1>
          <h2 className="sm:text-3xl text-2xl text-gray-800 pt-4">
            I'm a
            <TypeAnimation className="font-bold"
              sequence={[
                "Developer", // Types 'One'
                1000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                ]}z
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft:"5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[150px] w-full">
            <a href="https://github.com/sumanth2k1?tab=overview&from=2023-04-01&to=2023-04-24">
              <SlSocialGithub size={20} className="cursor-pointer hover:scale-110 ease-in duration-200" href=""/>
            </a>
            <a href="https://www.linkedin.com/in/sumanth-devadiga-686369220/">
              <SlSocialLinkedin size={20} className="cursor-pointer hover:scale-110 ease-in duration-200" href=""/>
            </a>
            <a href="https://twitter.com/Sumanthd987?t=UgNhnaHW8l8x_iiS9SQRKw&s=08">
              <SlSocialTwitter size={20} className="cursor-pointer hover:scale-110 ease-in duration-200" href=""/>
            </a>
            <a href="mailto:sumanthd2001+dev@gmail.com" target="_blank">
              <HiOutlineMail size={20} className="cursor-pointer hover:scale-110 ease-in duration-200" href=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

