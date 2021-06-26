import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from "./components/Carousel/CarouselContainer";
import Card from './components/cards/Cards'
import InfoSection from './components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../src/components/InfoSection/Data'


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     <CarouselContainer/>
     {/* <Card/> */}
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>

       {/* <Works/> */}
       <About/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
