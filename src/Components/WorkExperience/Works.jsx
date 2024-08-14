import work from "../../Data/WorkExperience/Work";

const Work = () => {
  return (
    <>
      {work.map((item) => (
        <div
          className='grid grid-cols-[3rem_1fr] mt-5 gap-1'
          key={item.companyName}>
          <img
            src={item.logo}
            alt={item.companyName}
            width='40px'
            height='auto'
          />
          <div>
            <div className='font-bold text-xl text-[#002C89]'>
              {item.position}
            </div>
            <div className='text-lg  text-[#004F9E]'>{item.companyName}</div>
            <div className=' text-[#0279B2]'>{item.duration}</div>
            <div className=' text-[#0279B2]'>{item.location}</div>

            <ul className='mt-3 list-disc'>
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Work;
