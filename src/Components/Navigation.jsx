import { Link } from "react-router-dom";
import nav from "../Data/Navigation";

const Navigation = () => {
  return (
    <div className='h-full hidden lg:block'>
      <div className='text-3xl pb-5'>ABOUT</div>
      {nav.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all '>
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
