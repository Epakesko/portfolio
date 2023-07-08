import "./Experience.styles.scss";

type ExperienceProps = {
  experience: string;
  companyName: string;
  timespan: string;
  skills: string[];
};

const Experience = ({ experience, companyName, timespan, skills }: ExperienceProps) => {
  return (
    <div className="experience-container">
      <div className="company">
        <div className="company-name">{companyName}</div>
        <div className="company-timespan">{timespan}</div>
        <div className="relevant-skills">
          {skills.map(skill => (
            <div className="skill">{skill}</div>
          ))}
        </div>
      </div>
      <div className="experience">{experience}</div>
    </div>
  );
};

export default Experience;
