import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";

import FooterL from "./Footer";
import NavbarTopSolid from "./NavbarSolid";
import { Menus } from "./Menus";


function MenuIdeas(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <NavbarTopSolid/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br />
      <div className="main">
        <div className="text-center">
          <h3>NEED SOME IDEAS?</h3>
          <b>
            <h2>A Place To Start</h2>
          </b>
        </div>

        <Menus/>

        <br />

        <div
          id="images"
          className="section section-dark"
          style={{ paddingTop: "20px" }}
        >
          <Container>
            <div className="title text-center">
              <h3>Gallery</h3>
            </div>
            <Row>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf1.png")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf2.png")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf3.png")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf4.png")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf5.png")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px", height: "262.5px", width:"350px"}}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/gallery/1.jpg")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px", height: "262.5px", width:"350px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/gallery/3.jpg")}
                />
                
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px", height: "262.5px", width:"350px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/gallery/4.jpg")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px", height: "262.5px", width:"350px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/gallery/5.jpg")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px", height: "262.5px", width:"350px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/gallery/6.jpg")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px", height: "262.5px", width:"350px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/gallery/7.jpg")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px", height: "262.5px", width:"350px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/gallery/8.jpg")}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterL />
    </>
  );
}

export default MenuIdeas;
