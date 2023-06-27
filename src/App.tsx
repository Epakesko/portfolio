import "./App.scss";
import Banner from "./components/banner/Banner.component";
import AboutMe from "./components/about_me/AboutMe.component";
import Navigation from "./components/navigation/Navigation.component";
import Slider from "./components/slider/Slider.component";
import EsgImage from "./media/msci/esg.png";
import FacsImage from "./media/msci/facs.png";
import SerchImage from "./media/msci/search.png";

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
          title="MSCI"
          description="MSCI is a leading financial company. Worked with them for 3 years on various different aspects of their portal."
          items={[
            { image: EsgImage, text: "ESG Ratings" },
            { image: FacsImage, text: "FaCS Report" },
            { image: SerchImage, text: "Dynamic search" },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
