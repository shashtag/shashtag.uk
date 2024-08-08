import work from "../../Data/WorkExperience/Work";

const Work = () => {
  return (
    <>
      {work.map((item) => (
        <div
          className='grid grid-cols-[3rem_1fr] mt-5 gap-1'
          key={item.companyName}>
          <img src={item.logo} alt={item.companyName} width='40px' />
          <div>
            <div className='font-bold text-xl text-[#272401]'>
              {item.position}
            </div>
            <div className='text-lg  text-[#525034]'>{item.companyName}</div>
            <div className=' text-[#6E6C55]'>{item.duration}</div>
            <div className=' text-[#6E6C55]'>{item.location}</div>

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
