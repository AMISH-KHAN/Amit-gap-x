import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";


export default function Footer() {
  return (
    <>
          <footer className=" text-white py-4 font-display relative z-40  ">
              <div className='relative text-white overflow-hidden pt-[30px] pb-[82px] rounded-t-[18px] rounded-tr-[18px] rounded-br-[3px] rounded-bl-[4px] custom-after' style={{ perspective: '800px'}}>
      <div className="container mx-auto px-4 z-20 relative ">
        {/* Branding Section */}
        <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-8 w-full mt-8 text-[14px] md:text-[20px] mx-0 lg:mx-[10px] font-medium md:w-1/4">
                      <div>
                      <img
            src="./assets/asset 0.png"
            className="h-[44px]"
            alt="Logo"
          />
          </div>
          <p className="mt-2">
                  A new smart blockchain-based marketplace for trading digital goods & assets according.
                </p>
        </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 w-full md:w-1/6 ">
            <h2 className="text-[20px]  mt-4 font-medium md:text-xl  mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="">Home</a></li>
              <li><a href="#" className="">About Us</a></li>
              <li><a href="#" className="">Tokenomics</a></li>
              <li><a href="#" className="">Roadmap</a></li>
              <li><a href="#" className="">Contact</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-8 md:mb-0 w-full md:w-1/6">
            <h2 className="text-[20px]  mt-4 font-medium md:text-xl  mb-4">Support</h2>
            <ul className="space-y-2">
              <li><a href="#" className="">Terms & Conditions</a></li>
              <li><a href="#" className="">Privacy Policy</a></li>
              <li><a href="#" className="">FAQ</a></li>
              <li><a href="#" className="">Support Center</a></li>
            </ul>
          </div>

          {/* Company Section */}
          {/* <div className="mb-8 md:mb-0 w-full md:w-1/6"> */}
          <div className="w-full sm:w-1/3 md:w-1/3 ">
      <div className="footer-widget">
        <h6 className="text-xl font-display text-[#7ec273] mb-1">NEWSLETTER</h6>
        <p className="text-sm text-[#FFF] mb-8 font-light font-display leading-7">
          Sign up to get our all latest news and
        </p>
        {/* Space for Image */}
        <img src="./assets/asset 1.png" className=" ] md:h-0 w-40 mx-auto md:mx-0" alt="" />
        <form className="relative w-full lg:w-[70%]">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control my-5 w-full p-3 rounded-full bg-[#fff] text-black pr-20"
              
            />
          </div>
          <button className="absolute top-0 right-0 mt-[4px]  mr-[4px] py-[9px] px-[13px]  bg-[#7ec273]  text-white rounded-full">
          ➔
          </button>
        </form>
      </div>
    </div>
          </div>
        </div>

        {/* Social Media Icons */}
                      <div className="flex justify-center mt-8 border-2 border-white rounded-lg py-[10px] items-center w-fit h-fit m-auto flex-wrap z-40 relative ">
                          <a href="" className=' text-[20px] mx-[10px]  lg:mt-0 text-white'>
                              <FaFacebookF />
                          </a>
                         
                         
                          
                        
                          <a href="" className=' text-[20px] mx-[10px]  lg:mt-0 text-white'>
                          <FaQuora />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px]  lg:mt-0 text-white'>
                          <FaMedium />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px]  lg:mt-0 text-white'>
                          <FaXTwitter />
                          </a>
        </div>
                  </div>
                  {/* </div> */}
                  
    </footer>
    </>
  )
}
