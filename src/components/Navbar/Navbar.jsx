import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/image/logo1.jpg";
import Mobile from "./MobileNavbar/Mobile";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }



  return (
    <>
        <Mobile isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={Logo} alt="" />
          <ul>
            <li>
              <a className="menu-item">Inicio</a>
            </li>
            <li>
              <a className="menu-item">Habilidades</a>
            </li>
            <li>
              <a className="menu-item">Experiencia</a>
            </li>
            <li>
              <a className="menu-item">Contact</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Contratame
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <div className={`menu-icon ${openMenu ? "open" : ""}`}>
                {/* {openMenu ? "close" : "menu"} */}
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
