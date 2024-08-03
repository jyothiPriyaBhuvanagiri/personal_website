import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner'
import {Skills} from './components/skills'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Projects} from "./components/projects";
import {Contact} from "./components/contact";
import {Footer} from "./components/Footer";
import {Resume}  from './components/resume';


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Banner></Banner>
        <Skills></Skills>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>
    </div>
  );
}

export default App;
