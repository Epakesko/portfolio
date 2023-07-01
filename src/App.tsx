import "./App.scss";
import Banner from "./components/banner/Banner.component";
import AboutMe from "./components/about_me/AboutMe.component";
import Navigation from "./components/navigation/Navigation.component";
import Slider from "./components/slider/Slider.component";
import EsgImage from "./media/msci/esg.png";
import FacsImage from "./media/msci/facs.png";
import SerchImage from "./media/msci/search.png";
import ResearchForm from "./media/msci/research-form.png";

function App() {
  return (
    <div className="app-container" onScroll={event => console.log(event)}>
      <header className="app-header">
        <Navigation navItems={["About me", "Experience", "Projects", "Contact"]} />
      </header>
      <div className="app-body">
        <Banner />
        <AboutMe />
        <Slider
          imageSliderOnRight={true}
          title="MSCI"
          description="MSCI is a leading financial company. Worked with them for 3 years on various different aspects of their portal."
          items={[
            {
              image: EsgImage,
              title: "ESG Ratings",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: FacsImage,
              title: "FaCS Report",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: SerchImage,
              title: "Dynamic search",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: ResearchForm,
              title: "Research form",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
          ]}
        />
        <Slider
          imageSliderOnRight={false}
          title="MSCI"
          description="MSCI is a leading financial company. Worked with them for 3 years on various different aspects of their portal."
          items={[
            {
              image: EsgImage,
              title: "ESG Ratings",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: FacsImage,
              title: "FaCS Report",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: SerchImage,
              title: "Dynamic search",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: ResearchForm,
              title: "Research form",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
