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
          I am a full stack developer, with over four years of experience in creating engaging and dynamic web portals
          for clients from all over the world. I am passionate about my work, as I thrive on solving interesting
          challenges and continuously expanding my knowledge to stay updated with the latest industry trends and
          technologies. My main interests include Java, React, DevOPS, Android development and machine learning.
        </div>
        <div className="experiences">
          <Experience
            companyName="Webtown"
            timespan="April, 2019 - "
            skills={["Java", "HTML", "JavaScript", "React", "CSS", "Sass", "Liferay", "ElasticSearch"]}
          >
            I joined Webtown in 2019, shortly after completing my Master's degree. My primary responisibilites included
            creating Java modules, implementing various REST API integrations, enhancing search functionalities using
            ElasticSearch and creating responsive interfaces using JavaScript, React, CSS and Sass. Moreover, I actively
            pursued opportunities to expand my skillset. I familiarized myself with Docker and OpenShift, gaining
            practical experience with containerization and deployment. I was able to gain further experience in Groovy
            and Kotlin and even had the chance to explore Flutter and Dart for a brief period.
          </Experience>
          <Experience
            companyName="Bosch"
            timespan="March, 2017 - February, 2019"
            skills={["Groovy", "JavaScript", "Grails", "REST API"]}
          >
            I originally joined{" "}
            <div className="link">
              <a href="https://www.bosch.hu/">Bosch</a>
            </div>{" "}
            for a mandatory two-month internship during my Master's degree, but I eventually decided to extend my stay
            until the end of my studies. During this time, I developed a command line tool capable of parsing data from
            different file formats, and a Grails application, that could store and present the parsed data.
          </Experience>
          <Experience
            companyName="BME University"
            timespan="September, 2013 - February, 2019"
            skills={["Grails", "Groovy", "Java", "ASP.NET", "C#", "Python", "Machine Learning", "Android", "3DS Max"]}
          >
            I completed both my bachelor's and master's studies at Budapest University of Technology and Economics.
            Throughout my academic years, I had the opportunity to explore various aspects of software engineering. I
            created websites, delved into Android application development, worked on an ASP.NET application that
            utilized machine learning to predict depression, and even tried 3D animation.
          </Experience>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
