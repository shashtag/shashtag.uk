/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Navigation from "../Navigation";
import Links from "./Links";

const CardVariant = {
  initial: {
    y: "-80vh",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
};

const Card = ({ children }) => {
  return (
    <motion.div
      variants={CardVariant}
      initial='initial'
      animate='animate'
      className={`bg-gradient-to-b from-[#F5F2EE] to-[#DCD9D5] lg:w-[1000px] lg:h-[571.428571429px] rounded-[67.4157303371px] z-20 relative`}
      style={{ filter: "drop-shadow(0px 10px 20px)" }}>
      <img
        src='/assets/hand.png'
        alt=''
        className='absolute bottom-[392.5px] '
        width='1269.37269373px'
      />
      <div className='flex justify-between'>
        <div className=''>
          <img src='/assets/logo.svg' alt='' className=' ' width='440px' />
        </div>
        <Links />
      </div>
      <div className='grid grid-cols-[6.8fr_3.2fr] gap-8 lg:h-[340px]'>
        <div className='border-r-2 border-[#525034] p-8 pr-14'>{children}</div>
        <Navigation />
      </div>
    </motion.div>
  );
};

export default Card;
