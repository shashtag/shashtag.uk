import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='h-full'>
      <div className='text-3xl pb-5'>ABOUT</div>
      <Link
        to='/'
        className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all'>
        Greetings
      </Link>
      <Link
        to='/'
        className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all'>
        Freelance Work
      </Link>
      <Link
        to='/'
        className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all'>
        Education
      </Link>
      <Link
        to='/'
        className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all'>
        Professional Work
      </Link>
      <Link
        to='/'
        className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all'>
        Personal Projects
      </Link>
      <Link
        to='/'
        className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all'>
        Open Source Contributions
      </Link>
      <Link
        to='/'
        className='pb-2 block text-lg cursor-pointer hover:tracking-wider transition-all'>
        Achievements And Certificates
      </Link>
    </div>
  );
};

export default Navigation;
