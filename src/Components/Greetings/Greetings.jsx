import Headline from "./Headline";

const Greetings = () => {
  return (
    <>
      <div className=' mb-9 lg:mb-9  '>
        <Headline />
      </div>
      <div className='mb-7 lg:mb-5 text-lg '>
        I’m Shashwat Gupta, a Frontend/Fullstack developer with 4 years of
        experience in end to end web development. Recently, I served as a
        Founding Engineer at ProPro Productions, where I led a team and was
        responsible for architecting and developing multiple products.”
      </div>
      <div className='text-lg -mb-4'>
        I specialize in creating beautiful, performant web applications with
        well-documented code.
      </div>
    </>
  );
};

export default Greetings;
