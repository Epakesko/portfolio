import "./AboutMe.styles.scss";
import ProfilePicture from "../../media/profile_picture.png";
import Experience from "../experience/Experience.component";
import useReveal from "../../hooks/useReveal";

const AboutMe = () => {
  const [imageRevealed, imageRef] = useReveal<HTMLDivElement>();
  const [aboutMeTextRevealed, aboutMeTextRef] = useReveal<HTMLDivElement>();

  return (
    <div className="about-me-container">
      <div ref={imageRef} className={`about-me-image ${imageRevealed ? "" : "hidden"}`}>
        <img src={ProfilePicture} alt="" />
      </div>
      <div className="about-me">
        <div ref={aboutMeTextRef} className={`about-me-text ${aboutMeTextRevealed ? "" : "hidden"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed,
          convallis dictum sapien. Maecenas sit amet porta ligula. Sed eros justo, ornare non tortor non, lacinia
          elementum augue. Etiam sit amet fermentum odio. In finibus odio quis urna commodo luctus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </div>
        <div className="experiences">
          <Experience
            experience="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed,
        convallis dictum sapien. Maecenas sit amet porta ligula. Sed eros justo, ornare non tortor non, lacinia
        elementum augue. Etiam sit amet fermentum odio. In finibus odio quis urna commodo luctus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit."
            companyName="Webtown"
            timespan="April, 2019 - "
            skills={["Java", "JavaScript", "CSS", "Sass", "HTML", "React", "Liferay", "ElasticSearch"]}
          />
          <Experience
            experience="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed,
        convallis dictum sapien. Maecenas sit amet porta ligula. Sed eros justo, ornare non tortor non, lacinia
        elementum augue. Etiam sit amet fermentum odio. In finibus odio quis urna commodo luctus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit."
            companyName="Bosch"
            timespan="March, 2017 - February, 2019"
            skills={["Groovy", "JavaScript", "Grails", "REST API"]}
          />
          <Experience
            experience="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed,
        convallis dictum sapien. Maecenas sit amet porta ligula. Sed eros justo, ornare non tortor non, lacinia
        elementum augue. Etiam sit amet fermentum odio. In finibus odio quis urna commodo luctus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit."
            companyName="BME University"
            timespan="September, 2013 - February, 2019"
            skills={["Grails", "Groovy", "Java", "ASP.NET", "C#", "Python", "Android", "Machine Learning"]}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
