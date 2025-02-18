import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { init } from 'ityped';
import React, { useEffect, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { landing_image } from "../assets";
import "./Hero.scss";

const Hero = () => {

  const textRef = useRef();
  useEffect(() => {
    const instance = init(textRef.current, {
      showCursor: true, // Show blinking cursor
      typeSpeed: 50, // Typing speed
      backSpeed: 25, // Backspacing speed
      backDelay: 1500, // Delay before switching lines
      startDelay: 500, // Start delay
      loop: true, 
          strings: [' We deliver high-quality solutions for businesses of all sizes. ', " Let us help you achieve your goals faster. " ," Our expertise includes development, data analysis, and marketing. "] })
          return () => {
            instance.destroy(); // Destroy the ityped instance on unmount
          };
        }, []);

  return (



    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div
          className={`head1 absolute  max-w-8xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div  className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-90 h-40 violet-gradient' />
          </div>


          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Who we are? 
            </h1>
            {/* <p className='name text-[#915EFF]'>We are the House of Freelancers united by a shared commitment to deliver top-tier, high-quality solutions for businesses of all sizes.
                From app and web development to data analysis, full-stack services, and digital marketing, our diverse expertise covers every corner of the digital world. With a passion for excellence and a dedication to your success, we bring innovative ideas to life and help you reach your goals faster.
                 Let us be your partner in driving results that matter.</p> */}
            <h3>
              <span ref={textRef} className={`${styles.heroSubText} mt-2 green-text-gradient`}></span>
            </h3>

            {/* <div className="absolute link1">
              <a
                href="https://github.com/shinchancode" target="_blank">
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aarti-rathi-a6031814b/" target="_blank">
                <ImLinkedin />
              </a>
              <a
                href="https://www.instagram.com/aarti.rathiii" target="_blank">
                <AiOutlineInstagram />
              </a>
              <a
                href="https://linktr.ee/rathi17" target="_blank">
                <BiLinkAlt />
              </a>

            </div> */}

          </div>
        </div>
        <div className="imgcontainer1 absolute  violet-gradient">
          <img src={landing_image} alt="" className="object-contain" />
        </div>
      </div>



    </section>
  );
};

export default Hero;
