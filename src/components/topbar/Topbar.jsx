import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">

          <a href="#about" className="logo-Render">
            Render.<span style={{color:"crimson"}}>1</span>
          </a>


   
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 (502) 718-0400</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>render1.jonathan@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
