import parseHtml from "@/lib/Parser";

const JobSkills = (props) => {
  const {insurances} = props;
  return (
    <ul className="job-skills">
      {insurances?.map((skill, i) => (
        <li className="custom-isurance" key={i}>
          {parseHtml(skill?.title)}
        </li>
      ))}
    </ul>
  );
};

export default JobSkills;
