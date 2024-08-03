import { motion } from "framer-motion";

const Links = () => {
  return (
    <div className='flex mr-14 h-max mt-10 z-[1000]'>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href='mailto:jobs.shashtag@gmail.com'>
        <img
          src='/assets/Links/mail.svg'
          className='mx-3 cursor-pointer'
          width='28'
        />
      </motion.a>
      <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/shashtag'>
        <img
          src='/assets/Links/github.svg'
          className='mx-3 cursor-pointer'
          width='28'
        />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href='https://www.linkedin.com/in/shashtag/'>
        <img
          src='/assets/Links/linkedin.svg'
          className='mx-3 cursor-pointer'
          width='28'
        />
      </motion.a>
    </div>
  );
};

export default Links;
