import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default function Faq() {
  return (
    <>
       <section className='w-full  py-[68px] relative'>
              <div className='xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[540px] mx-auto relative px-8  z-20 m-auto'>

    <div className=" mx-auto py-8">
      <h2 className="text-[30px] md:text-[80px]  font-extrabold text-white mb-16">Frequently Asked Questions</h2>
            <Accordion  >
        <Accordion.Item eventKey="0" >
          <Accordion.Header className='  p-0 m-0' >
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md transition duration-300">
              What is CV Token?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
            CV Token is a cryptocurrency token that enables decentralized applications and services.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
              On sorceress we are based?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
            CV Token is based on sorceress, ensuring security and decentralization for users.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
              What Are The Advantages of CVToken?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
            CVToken offers decentralized control, security, and seamless integration with existing blockchains.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
              How we can earn on CVToken Project?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
            You can earn by participating in staking, liquidity pools, and governance activities in the CVToken ecosystem.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
              We Are Listed On?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
            CVToken is listed on major decentralized exchanges, enabling seamless trading and integration.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>


        </div>
        
          <img src="./assets/asset 15.png" className=' h-full absolute top-0 right-0 max-w-none max-h-none' alt="" />
        
              </section>
    </>
  )
}
