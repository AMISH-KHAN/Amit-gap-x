import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default function Faq() {
  return (
    <>
       <section className='w-full  pb-[68px] relative'>
              <div className='xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[540px] mx-auto relative px-4 lg:px-8  z-20 m-auto'>

    <div className=" mx-auto py-0">
      <h2 className="text-[37px] lg:text-[58px] font-extrabold text-white mb-16">Frequently Asked Questions</h2>
            <Accordion  >
        <Accordion.Item eventKey="0" >
          <Accordion.Header className='  p-0 m-0' >
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md transition duration-300">
            What is Gap-X?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
                  Gap-X is a blockchain platform launched in June 2024 on the BNB Smart Chain, offering innovative digital solutions, including staking, liquidity provision, and rewards through its native GAPX token.
                </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
            What are GAPX tokens?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
          GAPX tokens are the native utility tokens of the Gap-X ecosystem, used for staking, contributing to network security, and earning rewards.


          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
            What security measures does Gap-X have in place?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
          Gap-X prioritizes security, ensuring robust protection across all its offerings, including the Gapx Chain and Gapx Wallet, to safeguard user assets and data.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
            How can I earn rewards with GAPX tokens?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
          You can earn rewards by staking GAPX tokens, participating in liquidity provision, referring friends through our referral program, or engaging in promotions and giveaways.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <div className="w-full flex justify-between items-center  text-white font-bold text-[12px] font-display  p-4 rounded-md  transition duration-300">
            What is staking, and how does it work on Gap-X?
            </div>
          </Accordion.Header>
          <Accordion.Body className=" text-white p-4 text-[14px] font-display font-medium">
          Staking involves locking your GAPX tokens to help secure the network and provide liquidity. In return, you earn rewards for your contribution to network security.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>


        </div>
        
          <img src="./assets/asset 15_1.png" className=' h-full absolute top-0 right-0 max-w-none max-h-none' alt="" />
        
              </section>
    </>
  )
}
