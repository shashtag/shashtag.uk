import { useState } from "react";
import { useNavigate } from "react-router";
import Navigation from "../../Data/Navigation";
import { motion } from "framer-motion";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className='my-4 p-4 grid place-items-center capitalize bg-[#7B7E86] text-[#F0F3F9] font-bold shadow shadow-[#3D3D3D] lg:hidden'
        onClick={() => setOpen(!open)}>
        <div>MENU</div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={`lg:hidden absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3d3d3d] to-[#050505] z-[2000] text-[#F0F3F9] font-bold shadow shadow-[#3D3D3D] transform transition-transform duration-500 ${
          open ? "translate-x-[0]" : "translate-x-full"
        }`}>
        <div
          onClick={() => setOpen(!open)}
          className='absolute top-0 right-0 p-4 cursor-pointer'>
          <img src='/assets/x.svg' alt='close' width={44} height='auto' />
        </div>
        <div className='grid place-items-center h-full'>
          <div>
            {Navigation.map((nav) => (
              <div
                onClick={() => {
                  navigate(nav.path);
                  setOpen(!open);
                }}
                className='text-xl sm:text-2xl md:text-3xl my-4'
                key={nav.path}>
                {nav.text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
