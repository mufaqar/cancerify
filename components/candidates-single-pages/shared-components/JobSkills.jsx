const JobSkills = (props) => {
  const {insurances} = props;
  return (
    <ul className="job-skills">
      {insurances?.map((skill, i) => (
        <li className="custom-isurance" key={i}>
          {skill?.title}
        </li>
      ))}
    </ul>
  );
};

export default JobSkills;
