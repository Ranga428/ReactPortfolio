import './H&F.css';
import BG from './Images/Jenel1.jpg';

function Header() {
  return (
    <div className="Header" style={{ backgroundImage: `url(${BG})` }}>
      <header className="Header-header">
        <nav className="header-menu">

        <ul className="menu-list">
            <li className="menu-item" ><b>Jenel</b></li>
            <li className="menu-item"><a href="#home">Home</a></li>
            <li className="menu-item"><a href="#about">About</a></li>
            <li className="menu-item"><a href="#services">Services</a></li>
            <li className="menu-item"><a href="#contact">Contact</a></li>
        </ul>
    </nav>
      </header>
    </div>
  );

}


export default Header;

