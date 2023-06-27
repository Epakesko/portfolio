import "./App.scss";
import Banner from "./components/banner/Banner.component";
import AboutMe from "./components/about_me/AboutMe.component";
import Menu from "./components/navigation/Navigation.component";

function App() {
  return (
    <div className="app-container" onScroll={event => console.log(event)}>
      <header className="app-header">
        <Menu navItems={["About me", "Experience", "Projects", "Contact"]} />
      </header>
      <div className="app-body">
        <Banner />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
