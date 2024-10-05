import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function Header() {
  return (
    <>
      <header style={{ backgroundImage: "url('./assets/asset 17.png')" }} className="bg-cover bg-[0px 0px]  overflow-hidden relative ">
        {/* <nav className="py-[20px]  w-full">
          <div className=" flex text-white justify-between items-center">
            <a id="logo " className=" pl-[25px]">
              <img
                src="./public/assets/asset 0.png"
                className="h-[44px]"
                alt=""
              />
            </a>
            <div>
              <ul className="flex gap-4 pr-[18px] font-display text-[14px] font-semibold items-center">
                <li>
                  <a href="" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Tokenomics</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <button className=" border-[1px] border-[#57934e] rounded-lg py-[6px] px-[12px] text-[18px] font-semibold mt-4 lg:mt-0">
                  Airdrop
                </button>
                <button className=" border-[1px] border-[#57934e] rounded-lg py-[6px] px-[12px] text-[18px] font-semibold mt-4 lg:mt-0">
                  {" "}
                  Sign in{" "}
                </button>
                <button className="bg-custom-gradient rounded-lg py-[6px] px-[12px] text-[18px] font-semibold text-black">
                  Sign up{" "}
                </button>
              </ul>
            </div>
          </div>
        </nav> */}

<section className="xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[540px] sm:mx-0 lg:mx-auto relative  z-20 m-auto">

<Navbar expand="lg"  data-bs-theme="dark" className="py-3 px-4 lg:px-12 z-10">
            {/* <div className="d-flex  justify-between align-items-center w-full lg:w-full "> */}
              <Container>
        <Navbar.Brand href="#home" >
          <img
            src="./assets/asset 0.png"
            className="h-[54px]"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
  aria-controls="basic-navbar-nav"

/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto flex items-start">
            <Nav.Link href="#home" className="text-white font-display">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white font-display">About Us</Nav.Link>
            <Nav.Link href="#tokenomics" className="text-white font-display">Tokenomics</Nav.Link>
            <Nav.Link href="#roadmap" className="text-white font-display">Roadmap</Nav.Link>
                <Nav.Link href="#contact" className="text-white font-display">Contact Us</Nav.Link>
                <div>

                
            <button className=" border-[1px] mr-4 text-white font-display border-[#57934e] rounded-lg py-[6px] px-[12px] text-[18px] font-semibold mt-4 lg:mt-0">
                  Airdrop
                </button>
                <button className=" border-[1px] mr-4 text-white font-display border-[#57934e] rounded-lg py-[6px] px-[12px] text-[18px] font-semibold mt-4 lg:mt-0">
                  {" "}
                  Sign in{" "}
                </button>
                <button className="bg-custom-gradient font-display rounded-lg py-[6px] px-[12px] text-[18px] font-semibold text-black mt-4 lg:mt-0">
                  Sign up{" "}
                  </button>
                  </div>
          </Nav>
        </Navbar.Collapse>
            </Container>
            {/* </div> */}
    </Navbar>

        
          <div className="relative before:content-[''] before:absolute before:-top-[4rem] before:left-0 before:w-[280px] before:h-[280px] before:rounded-full before:blur-[164px] before:bg-gradient-custom-glow "></div>
          {/* <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={5000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
              itemClass=""
              pauseOnHover={false}
  keyBoardControl
  minimumTouchDrag={80}
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  rewind
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
            > */}

            <div className="flex  flex-col md:flex-row  font-display font-semibold py-0  lg:px-12 px-4 " >

            <div class=" flex-col flex z-30 w-full lg:w-3/5 py-12  ">
              <h4 className="text-[34px] lg:text-[63px] font-black text-white">
              Shaping Your Secure Digital Future with{" " }
                <span className="text-[#7ec273]">Gap-X</span>
              </h4>
              <p className="  text-white text-[18px] font-semibold w-[85%] my-4">
              Smart Blockchain Marketplace For Digital Goods Trading.
                </p>
                <button  className="bg-custom-gradient border-none outline-none text-black font-display text-[18px] font-semibold w-fit mt-4 pt-4 pr-[28px] pb-[18px] pl-[27px] rounded-[10px]" >Join Us Now</button>{' '}
              </div> 
              <div className="w-full lg:w-[35%]   ">
                <img src="./assets/asset 1.png"  className=" w-full transition-all duration-500 ease-in-out hover:scale-110 scale-90" alt="" />
              </div>
            </div>
            
            {/* <div className=" "> */}
          {/* </div> */}
              </section>
            <img
              className=" absolute right-0 opacity-70 w-[31rem] md:w-[full] bottom-[-9rem] md:bottom-[-42rem] md:top-12"
              src="./assets/glow1.png"
              
              alt=""
            />
      </header>
           
 



              {/* </Carousel> */}
          
          
        

     
    </>
  );
}
