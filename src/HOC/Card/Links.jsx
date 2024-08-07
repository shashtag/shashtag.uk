import { motion } from "framer-motion";
import links from "../../Data/Card/Links";

const Links = () => {
  return (
    <div className='flex mr-14 h-max mt-10 z-[1000]'>
      {links.map((link) => (
        <motion.a
          key={link.href}
          whileHover={{ scale: 1.2 }}
          href={link.href}
          target='about_blank'>
          <img src={link.icon} className='mx-3 cursor-pointer' width='28' />
        </motion.a>
      ))}
    </div>
  );
};

export default Links;
