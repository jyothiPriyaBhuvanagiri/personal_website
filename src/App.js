import './styles/App.scss';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner'
import Skills from "./components/Skills";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Footer} from "./components/Footer";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Banner></Banner>
        <Skills></Skills>
        <Experience></Experience>
        <Footer></Footer>
    </div>
  );
}




export default App;
