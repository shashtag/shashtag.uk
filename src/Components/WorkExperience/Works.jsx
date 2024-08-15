import work from "../../Data/WorkExperience/Work";

const Work = () => {
  return (
    <>
      {work.map((item) => (
        <>
          <div
            className='grid grid-cols-[4rem_1fr] mt-8 lg:mt-5 gap-4'
            key={item.companyName}>
            <img
              src={item.logo}
              alt={item.companyName}
              width='100%'
              height='auto'
            />
            <div>
              <div className='font-bold text-xl text-[#002C89]'>
                {item.position}
              </div>
              <div className=' my-1 lg:my-0 text-lg  text-[#004F9E]'>
                {item.companyName}
              </div>
              <div className='  text-[#0279B2]'>{item.duration}</div>
              <div className=' my-1 lg:my-0  text-[#0279B2]'>
                {item.location}
              </div>

              <ul className='mt-6 lg:mt-3 hidden lg:block  list-disc'>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
          <ul className='mt-4 lg:mt-3 ml-6 lg:hidden  list-disc'>
            {item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
};

export default Work;
