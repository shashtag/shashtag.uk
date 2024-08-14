import projects from "../../Data/PersonalProjects/projects";

const Projects = () => {
  return projects.map((project) => (
    <>
      <div key={project.name} className='flex justify-between mt-5 text-lg'>
        <a
          href={project.link}
          target='about_blank'
          className='font-bold text-[#191620]'>
          {project.name}
        </a>
        <div className=' text-[#004F9E] italic'>{project.tech}</div>
      </div>
      <div className='mt-3'>{project.description}</div>
    </>
  ));
};

export default Projects;
