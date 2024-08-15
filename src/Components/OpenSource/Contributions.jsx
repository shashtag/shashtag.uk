import React from "react";
import projects from "../../Data/OpenSource/contributions";
import LinkIcon from "../Common/LinkIcon";

const Contributions = () => {
  return projects.map((project) => (
    <React.Fragment key={project.name}>
      <div className='flex justify-between gap-8 mt-8 lg:mt-5 text-lg'>
        <a
          href={project.link}
          target='about_blank'
          className='font-bold text-[#191620]'>
          {project.name}
          {project.link && <LinkIcon />}
        </a>
        <div className=' text-[#004F9E] italic'>{project.tech}</div>
      </div>
      <div className=' mt-4 lg:mt-3'>{project.description}</div>
    </React.Fragment>
  ));
};

export default Contributions;
