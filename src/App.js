import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import {Banner} from './components/Banner'
import {Skills} from './components/skills'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
function App() {
  return (
    <div className="App">
<NavBar></NavBar>
        <Banner></Banner>
        <Skills></Skills>
    </div>
  );
}

export default App;
