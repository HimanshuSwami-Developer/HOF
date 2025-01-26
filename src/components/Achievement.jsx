import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";
import "./Achievement.scss";

const Achievement = () => {
  return (
    // <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    //   <div className="achieve-video">
    //   <div
    //     className={`bg-tertiary rounded-2xl ${styles.padding}`}
    //   >
    //     <motion.div variants={textVariant()}>
    //       <p className={styles.sectionSubText}>Some Glimpses on...</p>
    //       <h2 className={styles.sectionHeadText}>Achievements.</h2>
    //     </motion.div>
    //   </div>
    //   <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
    //   <ul className='mt-5 list-disc ml-5 space-y-2'>
    //     {achievements.map((achievement) => (
    //       <li className='text-white-100 text-[15px] pl-1'>{achievement.title}</li>
    //     ))}
    //     </ul>
    //   </div>
    //   </div>
    //   <div class="portfolio-video">
    //               <h2>My Portfolio Video</h2>
    //               <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
      
    // </div>
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
    {/* Achievements Section */}
    <div className="achieve-video flex-1">
      <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Some Glimpses on...</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {achievements.map((achievement) => (
            <li key={achievement.title} className="text-white-100 text-[15px] pl-1">
              {achievement.title}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Portfolio Video Section */}
    <div className="portfolio-video flex-1 mt-6 lg:mt-20">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/UxBpYD9QI80?si=ZXWsLDCH38m1gjOE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg mx-auto"
      ></iframe>
    </div>
  </div>
</div>

  );
};

export default SectionWrapper(Achievement, "");