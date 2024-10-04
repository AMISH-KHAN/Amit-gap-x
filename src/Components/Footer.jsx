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


export default function Footer() {
  return (
    <>
          <footer className=" text-white py-4 font-display relative z-10  ">
              <div className='relative text-white overflow-hidden pt-[30px] pb-[82px] rounded-t-[18px] rounded-tr-[18px] rounded-br-[3px] rounded-bl-[4px] custom-after' style={{ perspective: '800px'}}>
      <div className="container mx-auto px-6 z-20 relative ">
        {/* Branding Section */}
        <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-8 w-full mt-4 text-[14px] md:text-[20px] mx-[10px] font-medium md:w-1/4">
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
          <div className="w-full sm:w-1/3 md:w-1/3 px-4 pt-6 md:pt-0">
      <div className="footer-widget">
        <h6 className="text-xl text-[#0EE9A0] mb-1">NEWSLETTER</h6>
        <p className="text-sm text-[#FFF] font-light font-sans leading-7">
          Sign up to get our all latest news and
        </p>
        {/* Space for Image */}
        <div className=" h-[160px] md:h-0 w-40 mx-auto md:mx-0" ></div>
        <img src="./assets/asset 1.png" className=" h-[160px] md:h-0 w-40 mx-auto md:mx-0" alt="" />
        <form className="relative w-full">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control my-5 w-full p-3 rounded-full bg-[#fff] text-black pr-20"
              style={{
                backgroundImage:
                  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmZkZTQxOS00ZGRkLWU5NDYtOWQ2MC05OGExNGJiMTA3N2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyNDkwMkRDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyNDkwMkNDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU2NTE1NDItMmIzOC1kZjRkLTk0N2UtN2NjOTlmMjQ5ZGFjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmJiZmRlNDE5LTRkZGQtZTk0Ni05ZDYwLTk4YTE0YmIxMDc3ZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po+RVEoAAApzSURBVHja3Fp5bBTnFf/N7L32rm98gI0NmNAQjoAR4WihCCdNHFBDonCmJQWhtiRS01JoSlCqCqhoFeUoTUpTOSptuKSK0HIYHI5wCWwMxmAo8QXYDvg+du31ntP3zc7Osd61zR9V4o412m/mm/3mHb/3e+99a87j8UA68uh8i84F+GYfp+jcSucVdsFJCiyjcy+G17Gczn1MgcdpUInheUxkCpygQf4wVaCYKSBgGB88nc5hLL+TKTCcPSDoNVdCZF04jtPMh66HcrBno607oGT0nYG+G5JBP9giQ70vvoz+OHBDWkMzF2YPtsZQjaSPtrBBpwOv139t2GD5iSkR7v0hKaDjg8Kfrv4StR2tsBhNiqU4aaAeQ3tfUEwpzwuiMIJ4LYRNC9LYT0IGAn7My8hBVoydxoGoMI6uAD2oN+ixu6wEP9xTCBgN0NHJ7oOnl/NQxuyTk5SRr5V5eRztUzZKaA1avK0JeROeROmiNdDRfa/f/2gQ0kmfp2u+pFkdxqemw4+AuLgQJpxaYHHMSxKJygiSYKpnID0TsqbkAnapo/XrnJ1AfBKW5kwU5wMBgrLB0A9Sai/owwMx5Cqb2QyD0RgMTFFAyY18cMxzPAI8FHjwKkXEZ3lZeOWeSng+GO5McDdB5X5nC8YmjsBf5y7C/NQsEVc8GfBGexOsegPG2hLg9XklhbnoHhA0rKLAg/0xQfT0wl6/D/WOdlhMJoy0xYkKBST4cRrPSKkSWugI0pyeYu2BywmXuxcrJ0zHrtnPIUanl6H1zq3L2Hi5CLlJaSh9djVi9Ub4fL7Bg1gTsCpFmAwuvxfMg+vz5qC2qx3Ham4jLS4BNpMZPiEQfBYqQdUBz6m8RxCr7WpFnDUWH85+CavHTpJfXd/rwLpLR1F09xZ4kwVNbheaXb2w2U2DxwCn4uKg8EG/MEiw8f3uLrybvxg/y5srzmw+fwLbS79Am6cP2XHxpIQQDPR+Vudkq3d6+9De04WF2d/Cn596luARL7//07uVeOPK52jp7cao5DQ4vR7YyfIGno9aC/VjIRlKGi8o2ln0BvnxbXOfxvEXX0UmQamqtQle8gLDtcIynAwtnY5HrbNDVGDrzGdQnL9cFt5F0Fhz+ShWnfsnugNeZFM8yIHOc8p6gyoQ5goOWrobRVbe9EUR/lByVn706axxuLZiPV6ZNAMNXW1ocvWIwoYsz5MAbuL3OqLIyUmpOP/camyePEf+/umme5hyrBCFd0qRGpeENKtNhKPac6HoDM/QfDQIaXDMKQnKajDCTFl646lDWPTZbgrmLvFROyW73fkvovCZl2GiQKzpbBW/xjJ6IwXqw55urJ8yB1eeXozrHVObHi9g2fBwcKQdJKI5OU0RfXjlRGs8Zp6zGdIX9f3PY1/cfhP7wLAAAAAElFTkSuQmCC')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '10px center',
                backgroundSize: '16px',
              }}
            />
          </div>
          <button className="absolute top-0 right-0 mt-0  mr-0 py-[13px] px-[15px]  bg-[#7ec273] text-white rounded-full">
          ➔
          </button>
        </form>
      </div>
    </div>
          </div>
        </div>

        {/* Social Media Icons */}
                      <div className="flex justify-center mt-8 border-2 border-white rounded-lg py-[10px] items-center w-fit h-fit m-auto flex-wrap">
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                              <FaFacebookF />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaInstagram />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaLinkedin />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaYoutube />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaTwitter />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaReddit />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaQuora />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaMedium />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaXTwitter />
                          </a>
        </div>
                  </div>
                  {/* </div> */}
                  
    </footer>
    </>
  )
}
