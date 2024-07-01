import './App.css';
import NavBar from './components/Navbar';
import {Banner} from './components/Banner'
import {Skills} from './components/skills'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Projects} from "./components/projects";
import {ProjectCard} from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
<NavBar></NavBar>
        <Banner></Banner>
        <Skills></Skills>
        <Projects></Projects>

    </div>
  );
}

export default App;
