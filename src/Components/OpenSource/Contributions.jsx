import projects from "../../Data/OpenSource/contributions";

const Contributions = () => {
  return projects.map((project) => (
    <>
      <div
        key={project.name}
        className='flex justify-between gap-8 mt-8 lg:mt-5 text-lg'>
        <a
          href={project.link}
          target='about_blank'
          className='font-bold text-[#191620]'>
          {project.name}
        </a>
        <div className=' text-[#004F9E] italic'>{project.tech}</div>
      </div>
      <div className=' mt-4 lg:mt-3'>{project.description}</div>
    </>
  ));
};

export default Contributions;
