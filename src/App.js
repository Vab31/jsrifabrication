import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import './font/style.css'
import Herosec from './component/herosec';
import Gallery from './component/gallery';
import Map from './component/map';
import Footer from './component/footer';


function App() {


  return (
    <div className="App">
      <Nav/>
      <Herosec/>
      <Gallery/>
      <Map  />
      <Footer/>
    </div>
  );
}

export default App;
