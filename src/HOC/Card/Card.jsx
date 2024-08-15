/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Navigation from "../../Components/Navigation";
import Links from "./Links";
import Menu from "./Menu";

const CardVariant = {
  initial: {
    y: "var(--move-y)",
    x: "var(--move-x)",
  },
  animate: {
    y: 0,
    x: 0,
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
      className={`bg-gradient-to-b from-[#08D9D644] via-[#F1F1F1]  to-[#FBFBFB] from-0%  ml-8 lg:ml-0 w-[calc(100vw-32px)]  lg:w-[1000px] h-[100vh] lg:h-[571.428571429px] lg:rounded-2xl z-20 relative [--move-x:-100vw] lg:[--move-x:0] [--move-y:0] lg:[--move-y:-80vh] flex flex-col `}
      style={{ filter: "drop-shadow(0px 10px 20px)" }}>
      <img
        rel='preload'
        src='/assets/hands/s.png'
        alt='hands small screen'
        className='absolute lg:hidden  -translate-x-[68.5%] h-[100vh]   top-[50%] -translate-y-1/2 '
        height='auto'
        width='auto'
      />
      <img
        rel='preload'
        src='/assets/hands/hands-lg.webp'
        alt='hands large screen'
        className='absolute lg:bottom-[392.5px] hidden lg:block'
        width='1269.37269373px'
        height='auto'
      />
      <div className='flex justify-between'>
        <div className='ml-4 lg:ml-[5.25rem] '>
          <img
            src='/assets/logo.png'
            alt=''
            className=' w-[130px] sm:w-[220px] '
            width='220px'
            height='auto'
          />
        </div>
        <Links />
      </div>
      <Menu />
      <div
        className={`grid lg:grid-cols-[7fr_3fr] gap-1 flex-[1] mb-8 overflow-auto text-[#16121B]`}>
        <div className=' p-5 lg:p-8 overflow-y-scroll scrollbar'>
          {children}
        </div>
        <Navigation />
      </div>
    </motion.div>
  );
};

export default Card;
