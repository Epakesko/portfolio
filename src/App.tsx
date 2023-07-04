import "./App.scss";
import Banner from "./components/banner/Banner.component";
import AboutMe from "./components/about_me/AboutMe.component";
import Navigation from "./components/navigation/Navigation.component";
import Slider from "./components/slider/Slider.component";
import Divider from "./components/divider/Divider.component";
import EsgImage from "./media/msci/esg.png";
import FacsImage from "./media/msci/facs.png";
import SerchImage from "./media/msci/search.png";
import ResearchForm from "./media/msci/research-form.png";
import Fragments from "./media/kbc/fragments.png";
import LTV from "./media/kbc/ltv_calculator.png";
import Mortgage from "./media/kbc/mortgage_calculator.png";
import { useRef } from "react";

function App() {
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app-container" onScroll={event => console.log(event)}>
      <header className="app-header">
        <Navigation
          navItems={[
            { text: "About me", sectionRef: aboutMeSectionRef },
            { text: "Work", sectionRef: workSectionRef },
            { text: "Projects" },
            { text: "Contact" },
          ]}
        />
      </header>
      <div className="app-body">
        <Banner />
        <Divider text="About me" ref={aboutMeSectionRef} />
        <AboutMe />
        <Divider text="Work" ref={workSectionRef} />
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
        <Slider
          imageSliderOnRight={true}
          title="KBC"
          description="KBC was an irish bank, but sadly they were purchages by Bank of Ireland and the website was discontinued."
          items={[
            {
              image: Fragments,
              title: "Responsive elements",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: LTV,
              title: "Calculators",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna justo, lobortis sed urna sed, convallis dictum sapien. Maecenas sit amet porta ligula.",
            },
            {
              image: Mortgage,
              title: "Calculators",
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
