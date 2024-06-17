const JobSkills = (props) => {
  const {insurances} = props;
  return (
    <ul className="job-skills">
      {insurances?.map((skill, i) => (
        <li key={i}>
          <a href="#">{skill?.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default JobSkills;
