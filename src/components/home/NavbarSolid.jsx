import React from "react";
import { Link, NavLink as RRNav } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

import logo from '../../assets/img/pflogo.png'



function NavbarTopSolid() {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  
  return (
    <Navbar
      className={classnames("fixed-top")}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            title="Plain & Fancy Caterers"
            tag={Link}
          >
            <img height="80px" src={logo} alt="P&F Logo" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink exact to="/" activeClassName="active" tag={RRNav}>
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/request-quote" tag={Link}>
                Request Quote
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/about" tag={Link}>
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/menu-ideas" tag={Link}>
                Menu Ideas
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/connect" tag={Link}>
                Connect
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/pay-invoice" tag={Link}>
                Pay Bill
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTopSolid;