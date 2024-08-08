import projects from "../../Data/OpenSource/contributions";

const Contributions = () => {
  return projects.map((project) => (
    <>
      <div key={project.name} className='flex justify-between mt-5 text-lg '>
        <a
          href={project.link}
          target='about_blank'
          className='font-bold text-[#272401]'>
          {project.name}
        </a>
        <div className=' text-[#525034] italic'>{project.tech}</div>
      </div>
      <div className='mt-3'>{project.description}</div>
    </>
  ));
};

export default Contributions;
