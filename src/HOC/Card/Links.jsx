import { motion } from "framer-motion";
import links from "../../Data/Card/Links";

const Links = () => {
  return (
    <div className='flex mr-4 sm:mr-8 lg:mr-14 h-max mt-4 sm:mt-8 lg:mt-10 z-[1000]'>
      {links.map((link) => (
        <motion.a
          key={link.href}
          whileHover={{ scale: 1.2 }}
          href={link.href}
          aria-label={link.label}
          target='about_blank'>
          <img
            alt={link.alt}
            src={link.icon}
            className='mx-2 sm:mx-4 lg:mx-3 cursor-pointer w-[32px]  sm:w-[36px] lg:w-[32px]'
            width='32'
            height='auto'
          />
        </motion.a>
      ))}
    </div>
  );
};

export default Links;
