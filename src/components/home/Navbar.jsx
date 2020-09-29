import React, { useState } from "react";
import { Link, NavLink as RRNav } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Alert,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

import logo from '../../assets/img/p&f.png'



function NavbarTop() {
  const [visible, setVisible] = useState(true);

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const onDismiss = () => setVisible(false);


  React.useEffect(() => {
    const updateNavbarColor = () => {

     if (
        (document.documentElement.scrollTop > 299 && visible) ||
        (document.body.scrollTop > 299 && visible)
      ) {
        setNavbarColor("");
        document.getElementById("navbar").style.marginTop= "0"
      }
      if (
        document.documentElement.scrollTop > 299  ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        document.getElementById("navbar").style.marginTop= "0"
      }
      else if (
        (document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300) &&  visible
      ) {
        setNavbarColor("navbar-transparent");
        document.getElementById("navbar").style.marginTop= "90px"

      }


      else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
    <Alert color="danger" isOpen={visible} toggle={onDismiss} style={{color:'black',margin:'0', padding:'10px 10px 10px 5px',width:'100%',height:'120px'}}>
    <b>A notice to our valued customers:</b><br/>
    We are taking the utmost precaution in this difficult time to maintain our most stringent standards in culinary preparation. In addition, we are now offering clients the options to have food individually packaged for take home meals.
    Plain and Fancy is paying close attention, as are all of you, to the ever changing guidelines set forth by our state and federal agencies. We will continue to monitor and practice all safety guidelines in the interest of our employees, families and community.
    <br/>
    <b>Thank you for your patronage and look forward to seeing you in the near future.</b>
    </Alert>
    <Navbar
      id="navbar"
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
      style={{marginTop: visible ? '90px' : '0'}}
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            title="Plain & Fancy Caterers"
            tag={Link}
          >
            <img height="85px" src={logo} alt="P&F Logo" />
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
              <NavLink exact to="/" style={{fontSize:"16px"}} activeClassName="active" tag={RRNav}>
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/request-quote" style={{fontSize:"16px"}} tag={Link}>
                Request Quote
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/about" style={{fontSize:"16px"}} tag={Link}>
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/menu-ideas" style={{fontSize:"16px"}} tag={Link}>
                Menu Ideas
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/connect" style={{fontSize:"16px"}} tag={Link}>
                Connect
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/pay-invoice" style={{fontSize:"16px"}} tag={Link} hidden>
                Pay Bill
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarTop;
