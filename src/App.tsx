import "./App.scss";
import Banner from "./components/banner/Banner.component";
import AboutMe from "./components/about_me/AboutMe.component";
import Navigation from "./components/navigation/Navigation.component";
import Slider from "./components/slider/Slider.component";
import Divider from "./components/divider/Divider.component";
import Footer from "./components/footer/Footer.component";
import EsgImage from "./media/msci/esg.png";
import FacsImage from "./media/msci/facs.png";
import SerchImage from "./media/msci/search.png";
import ResearchForm from "./media/msci/research-form.png";
import Fragments from "./media/kbc/fragments.png";
import LTV from "./media/kbc/ltv_calculator.png";
import Mortgage from "./media/kbc/mortgage_calculator.png";
import { useEffect, useRef, useState } from "react";
import Link from "./components/common/Link.component";
import ReferenceWorks from "./components/reference_works/ReferenceWorks.component";

function App() {
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [activeSections, setActiveSections] = useState<Element[] | undefined>([]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      setActiveSections(activeSections => {
        const newSections = new Set(activeSections);
        if (entry.isIntersecting) {
          newSections.add(entry.target);
        } else {
          newSections.delete(entry.target);
        }
        return Array.from(newSections);
      });
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);

    if (aboutMeSectionRef.current) observer.observe(aboutMeSectionRef.current);
    if (workSectionRef.current) observer.observe(workSectionRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container" onScroll={event => console.log(event)}>
      <header className="app-header">
        <Navigation
          navItems={[
            { text: "About", sectionRef: aboutMeSectionRef },
            { text: "Work", sectionRef: workSectionRef },
            { text: "Contact", sectionRef: footerRef },
          ]}
          activeSections={activeSections}
        />
      </header>
      <div className="app-body">
        <Banner nextSectionRef={aboutMeSectionRef} />
        <Divider text="About" ref={aboutMeSectionRef}>
          <AboutMe />
        </Divider>
        <Divider text="Select Work" ref={workSectionRef}>
          <Slider
            imageSliderOnRight={true}
            title="MSCI"
            items={[
              {
                image: EsgImage,
                title: "ESG Ratings",
                description:
                  "Implemented data retrieval through REST APIs and created a search module that enables users to explore the data by displaying it using charts",
              },
              {
                image: FacsImage,
                title: "FaCS Report",
                description:
                  "Integrated and enchanced a JavaScript application within the Liferay portal, incorporating additional features to optimize functionality",
              },
              {
                image: SerchImage,
                title: "Dynamic search",
                description:
                  "Created a complex search module incorporating multiple views and advanced functionalities by leveraging the ElasticSearch API",
              },
              {
                image: ResearchForm,
                title: "Research form",
                description: "Implemented a dynamic form for with built-in permission control, for accessing documents",
              },
            ]}
          >
            <Link href="https://msci.com" text="MSCI" /> is a leading provider of critical decision support tools and
            services for the global investment community. I worked on the project for three years, the initial focus was
            on upgrading the existing portal from an older version of Liferay, to the latest release. Since then,
            numerous new features have been incorporated into the site.
          </Slider>
          <Slider
            imageSliderOnRight={false}
            title="KBC"
            items={[
              {
                image: Fragments,
                title: "Responsive elements",
                description:
                  "Implemented responsive and interactive fragments to enhance the engagement and user-friendliness of the website, ensuring an optimal experience across different devices",
              },
              {
                image: LTV,
                title: "Interactive value displays",
                description: "Developed interactive views that dynamically display loan values based on user input",
              },
              {
                image: Mortgage,
                title: "Calculators and forms",
                description:
                  "Developed calculators with interactive sliders and implemented multi-paged forms for seamless loan application processes",
              },
            ]}
          >
            <Link href="https://msci.com" text="KBC Ireland" /> was the Irish subsidiary of the KBC Group, but was
            bought by Bank of Ireland. The project lasted for about two years, with the goal of developing user-friendly
            calculators and forms that enabled customers to calculate loan values and easily sign up for various
            accounts. This project aimed to streamline the customer onboarding process and enhance the overall user
            experience.
          </Slider>
        </Divider>
        <Divider text="Other Work">
          <ReferenceWorks />
        </Divider>
      </div>
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
