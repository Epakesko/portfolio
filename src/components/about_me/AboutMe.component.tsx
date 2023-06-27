import "./AboutMe.styles.scss";
import ProfilePicture from "../../media/profile-picture.jpg";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-image">
        <img src={ProfilePicture} alt="" />
      </div>
      <div className="about-me-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed,
        convallis dictum sapien. Maecenas sit amet porta ligula. Sed eros justo, ornare non tortor non, lacinia
        elementum augue. Etiam sit amet fermentum odio. In finibus odio quis urna commodo luctus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default AboutMe;
