import ancs from "../../Data/Achievements/Anc";
import LinkIcon from "../Common/LinkIcon";

const Anc = () => {
  return (
    <ul className='mt-5 list-disc ml-4'>
      {ancs.map((anc) => (
        <li key={anc.title} className='mt-4 lg:mt-3'>
          <a href={anc.link}>{anc.title}</a>
          {anc.link && <LinkIcon />}
        </li>
      ))}
    </ul>
  );
};

export default Anc;
