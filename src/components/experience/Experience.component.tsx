import { ReactNode } from "react";
import useReveal from "../../hooks/useReveal";
import "./Experience.styles.scss";

type ExperienceProps = {
  companyName: string;
  timespan: string;
  skills: string[];
  children: ReactNode;
};

const Experience = ({ companyName, timespan, skills, children }: ExperienceProps) => {
  const [revealed, experienceRef] = useReveal<HTMLDivElement>();

  return (
    <div ref={experienceRef} className={`experience-container ${revealed ? "" : "hidden"}`}>
      <div className="company">
        <div className="company-name">{companyName}</div>
        <div className="company-timespan">{timespan}</div>
        <div className="relevant-skills">
          {skills.map((skill, i) => (
            <div key={i} className="skill">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="experience">{children}</div>
    </div>
  );
};

export default Experience;
