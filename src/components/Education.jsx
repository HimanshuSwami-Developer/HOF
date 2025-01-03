import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import "./Education.scss";

const FeedbackCard = ({
  index,
  branch,
  branchOne,
  branchTwo,
  branchThree,
  branchFour,
  branchFive,
  branchSix,
  branchSeven,
  branchEight,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='Box2 p-5 rounded-3xl xs:w-[320px] w-full'
  >
      <div className='mt-3 flex flex-col justify-between items-center gap-1'>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          width="350" height="350"
          className='rounded-full object-cover'
        />
        {/* <div className='mt-2 flex-1 flex flex-col'>
          <p className='text-center text-white font-medium text-[16px]'>
            <span className='text-center blue-text-gradient'>{name}</span> 
          </p>
          <p className='text-center mt-1 text-secondary text-[12px]'>
            {year}
          </p>
        </div> */}

      </div>

    {/* <p className='text-white font-black text-[48px]'>"</p> */}

    <div className='mt-1'>
      <p className='text-center text-white tracking-wider text-[18px]'>{degree}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branch}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchOne}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchTwo}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchThree}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchFour}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchFive}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchSix}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchSeven}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branchEight}</p>
      {/* <p className='mt-3 text-center green-text-gradient'>{marks}</p> */}

    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-8 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>Services</p> */}
          <h2 className={styles.sectionHeadText} >Services.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-8`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");