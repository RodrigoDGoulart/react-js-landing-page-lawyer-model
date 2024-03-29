import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import config from "../../config.json";

function Navbar() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div
            style={{
              color: "white",
              backgroundColor: "#3bb100",
              textAlign: "center",
              fontSize: "1em",
              paddingBlock: "8px",
            }}
          >
            Gostou do modelo? Entre em contato conosco para fazer o seu!
            Contato: {`(12) 98810-7549`}
          </div>
          <Nav>
            <NavbarContainer>
              <NavLogo to={config.nav.logo.url}>
                <NavIcon
                  src={require(`../../images/${
                    widthScreen < 500
                      ? config.nav.logo_mobile.src
                      : config.nav.logo.src
                  }`)}
                  alt={config.nav.logo.name}
                />
                {config.nav.logo.name}
              </NavLogo>
              <HamburgerIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </HamburgerIcon>
              <NavMenu onClick={handleClick} click={click}>
                {config.nav.links.map((link) => (
                  <NavItem>
                    <NavLinks to={link.url} onClick={closeMobileMenu}>
                      {link.label}
                    </NavLinks>
                  </NavItem>
                ))}
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar;
