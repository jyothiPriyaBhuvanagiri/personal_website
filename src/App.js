import './styles/App.scss';
import {NavBar} from './components/NavBar';
import {Home} from './components/home'
import Skills from "./components/Skills";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Footer} from "./components/Footer";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Home></Home>
        <Skills></Skills>
        <Experience></Experience>
        <Footer></Footer>
    </div>
  );
}




export default App;
