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
            <div className='font-bold text-xl'>{item.position}</div>
            <div className='text-lg'>{item.companyName}</div>
            <div className='opacity-60'>{item.duration}</div>
            <div className='opacity-60'>{item.location}</div>

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
