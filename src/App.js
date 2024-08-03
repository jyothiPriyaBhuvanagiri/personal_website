import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner'
import {Skills} from './components/skills'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Contact} from "./components/contact";
import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Banner></Banner>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;
