import "./Footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CV from "../../media/CV.pdf";
import { forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="footer">
      <div className="footer-content">
        <div className="contact">
          <a href="mailto:bendeguz.takacs@gmail.com">
            <FontAwesomeIcon icon={faAt} size="xl" />
          </a>
          <a href="https://www.linkedin.com/in/bendeguz-takacs/">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a href="https://github.com/Epakesko">
            <FontAwesomeIcon icon={faGithubAlt} size="xl" />
          </a>
          <a href={CV}>
            <FontAwesomeIcon icon={faFileText} size="xl" />
          </a>
        </div>
        <div className="copyright">© 2023 Bendegúz Takács</div>
        <div className="disclaimer">
          The website was written in TypeScript using React JS. The files are hosted on GitHub and deployed to GitHub
          Pages with the ghpages module.
        </div>
      </div>
    </div>
  );
});

export default Footer;
