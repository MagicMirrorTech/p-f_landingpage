import React from "react";
import {withRouter} from 'react-router-dom'

import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardImg,
  CardText,
  CardImgOverlay,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";

import card1 from '../../assets/img/faces/erik-lucatero-2.jpg'
import card2 from "../../assets/img/faces/joe-gardner-2.jpg";
import card4 from "../../assets/img/faces/ayo-ogunseinde-2.jpg";
import card3 from "../../assets/img/faces/clem-onojeghuo-3.jpg";

import NavbarTopSolid from "./NavbarSolid";

import FooterL from "./Footer";



function AboutUs(props) {
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

      <div className="main">
        <div className="section text-center">
          <Container>
            <h2 className="title">Leadership</h2>
            <Row>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card1} alt="Leadership 1" />
                  <CardImgOverlay>
                    <CardText style={{ marginTop: "270px" }}>
                      <h3 style={{ color: "white" }}>Marc, Executive Chef</h3>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card2} alt="Leadership 1" />
                  <CardImgOverlay>
                    <CardText style={{ marginTop: "250px" }}>
                      <h3 style={{ color: "white" }}>
                        Lisa, Head of Operations
                      </h3>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card3} alt="Leadership 1" />
                  <CardImgOverlay>
                    <CardText style={{ marginTop: "270px" }}>
                      <h3 style={{ color: "white" }}>James, Chef</h3>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Corporate Partners</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        style={{ height: "120px" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/gtcc.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">GTCC</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Guilford Technical Community College (GTCC) is home to a
                      wide array of career technical programs ranging from
                      Culinary and Hospitality Management to Computer Technology
                      to Health Science programs.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="col text-center">
                      <Button
                        className="btn-round"
                        outline
                        color="neutral"
                        href="/"
                        size="lg"
                        target="_blank"
                      >
                        Visit website
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        style={{ height: "120px" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/gtcc.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">SUNPAN</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      SUNPAN is a fast growing global furniture company
                      specializing in the design and manufacturing of
                      transitional and contemporary furnishings.
                    </p>
                    <br />
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="col text-center">
                      <Button
                        className="btn-round"
                        outline
                        color="neutral"
                        href="/"
                        size="lg"
                        target="_blank"
                      >
                        Visit website
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        style={{ height: "120px" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/ralphlauren.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">RALPH LAUREN</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Guilford Technical Community College (GTCC) is home to a
                      wide array of career technical programs ranging from
                      Culinary and Hospitality Management to Computer Technology
                      to Health Science programs.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="col text-center">
                      <Button
                        className="btn-round"
                        outline
                        color="neutral"
                        href="/"
                        size="lg"
                        target="_blank"
                      >
                        Visit website
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center">
          <Container>
            <h2 className="title">Happy Couples</h2>
            <Row>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card1} alt="Leadership 1" />
                  <CardImgOverlay>
                    <CardText style={{ marginTop: "270px" }}>
                      <h3 style={{ color: "white" }}>José Luis, Magic Mirror</h3>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card4} alt="Leadership 1" />
                  <CardImgOverlay>
                    <CardText style={{ marginTop: "270px" }}>
                      <h3 style={{ color: "white" }}>
                        Jorge, Magic Mirror
                      </h3>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card3} alt="Leadership 1" />
                  <CardImgOverlay>
                    <CardText style={{ marginTop: "270px" }}>
                      <h3 style={{ color: "white" }}>James, Magic Mirror</h3>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterL />
    </>
  );
}

export default withRouter(AboutUs);

