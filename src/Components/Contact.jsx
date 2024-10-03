import React from "react";

export default function Contact() {
  return (
    <>
      <section className="w-full  py-[68px] relative font-display">
        <div className="xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[540px] mx-auto relative px-8  z-20 m-auto">
          <div className="bg-black min-h-screen  flex flex-col lg:flex-row  ">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl font-bold text-white mb-6">
                  Contact Us
                </h1>
               

                <form className="space-y-6">
                  <div>
                    <label className="sr-only" htmlFor="first-name">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="First Name"
                      className="w-full p-4 rounded-lg bg-[#121212] border-[1px] border-[#ffffff21]  text-white  outline-none "
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full p-4 rounded-lg bg-[#121212] border-[1px] border-[#ffffff21]  text-white  outline-none "
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Message"
                      rows="4"
                      className="w-full p-4 rounded-lg bg-[#121212] border-[1px] border-[#ffffff21]  text-white  outline-none "
                    ></textarea>
                  </div>
                  <div className="flex flex-wrap items-center z-20 relative">
                    <button className="bg-custom-gradient border-none outline-none text-black font-display  h-fit border-[1px] border-white text-[18px] pl-[50px] pt-[14px] pr-[44px] pb-[16px] my-[3px] mr-[15px] font-semibold rounded-[10px]">
                                          Submit
                                      </button>
                                      
                     
                    
                  </div>
                </form>
              </div>

              {/* Optional Illustration Section */}
              <div className=" lg:w-1/2 w-full pl-10 ">
                <img
                  src="./assets/asset 14.png"
                  alt="Illustration"
                  className="w-full object-cover  z-20 relative"
                          />
                          <div className=" absolute right-[90px] md:right-0 top-[588px]  md:top-[580px] lg:top-[200px]" >
                              <div className="absolute right-0 top-0 h-[413px] w-[413px] rounded-full bg-gradient-to-b from-[#2c4982] to-[#2cd095] blur-[150px]"></div>
                              <div className="absolute right-[100px] top-0 h-[281px] w-[198px] bg-gradient-to-b from-[#18ff9e00] to-[#17ffe3] blur-[70px]">
</div>
                          </div>
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
}
