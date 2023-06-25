import "./AboutMe.styles.scss";
import ProfilePicture from "../../media/profile-picture.jpg";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-image">
        <img src={ProfilePicture} alt="" />
      </div>
      <div className="about-me-text">
        I am a full stack engineer, with over four years of experience of creating reliable digital experiences, helping
        customers from all around the world in fulfilling their vision. During my time at Webtown, I was recognized for
        my skills as ..... Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet.
      </div>
    </div>
  );
};

export default AboutMe;
