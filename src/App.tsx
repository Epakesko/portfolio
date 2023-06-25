import "./App.scss";
import Banner from "./components/Banner.component";
import AboutMe from "./components/about_me/AboutMe.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <AboutMe />
      </header>
    </div>
  );
}

export default App;
