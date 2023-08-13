import React from 'react'
import { HiOutlineMail } from 'react-icons/Hi';
import {SlSocialFacebook, SlSocialGithub, SlSocialLinkedin, SlSocialTwitter, } from 'react-icons/Sl'

export default function Footer() {
  return (
    <div className="w-full h-[35%] absolute text-white bg-neutral flex flex-col items-center">
        <div className="m-auto">
            <h1 className="text-center text-4xl h-auto items-center mb-4">Sumanth Devadiga</h1>
            <div className=" border-2 border-white  flex  rounded-full p-1 m-2 mx-6 justify-center items-center">
            <a href="https://github.com/sumanth2k1?tab=overview&from=2023-04-01&to=2023-04-24">
              <SlSocialGithub size={20} className="m-2" href=""/>
            </a>
            <a href="https://www.linkedin.com/in/sumanth-devadiga-686369220/">
              <SlSocialLinkedin size={20} className="m-2" href=""/>
            </a>
            <a href="https://twitter.com/Sumanthd987?t=UgNhnaHW8l8x_iiS9SQRKw&s=08">
              <SlSocialTwitter size={20} className="m-2" href=""/>
            </a>
            <a href="mailto:sumanthd2001+dev@gmail.com" target="_blank">
              <HiOutlineMail size={20} className="m-2" href=""/>
            </a>
            </div>
        </div>
            <h1 className="text-white p-2  text-center">Sumanth Devadiga © 2023</h1>
    </div>
  )
}
