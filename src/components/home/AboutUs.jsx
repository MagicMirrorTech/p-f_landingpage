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
import card3 from "../../assets/img/faces/clem-onojeghuo-3.jpg";


import card4 from "../../assets/img/wedding/danielle-sang.jpg"
import card5 from "../../assets/img/wedding/haley-pearson.jpg"
import card6 from "../../assets/img/wedding/lineberry_s-wedding 1.jpeg"
import card7 from "../../assets/img/wedding/pearsons-wedding-3.jpg"
import card8 from "../../assets/img/wedding/sangs-wedding-2.jpeg"
import card9 from "../../assets/img/wedding/wedding-kimL.jpg"

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
                      <h3 style={{ color: "white" }}>Kathy, Office Manager</h3>
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
              <Col md="3">
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
                  <CardBody style={{marginBottom:"130px"}}>
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
                        href="https://www.gtcc.edu/about"
                        size="lg"
                        target="_blank"
                      >
                        Visit website
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        style={{ height: "120px" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/partners/High-Point-Arts.png")}
                      />
                    </a>
                  </div>
                  <CardBody style={{marginBottom:"65px"}}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">HIGH POINT ARTS</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Since 1962 the Arts Council has served the arts needs of the community. 
                    Our mission is to work continually to enhance the lives of all citizens 
                    of our community ensuring the availability of a broad range of cultural 
                    and artistic activities and encouraging full community participation in 
                    them.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="col text-center">
                      <Button
                        className="btn-round"
                        outline
                        color="neutral"
                        href="http://www.highpointarts.org"
                        size="lg"
                        target="_blank"
                      >
                        Visit website
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        height="100px"
                        style={{ height: "120px" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/partners/HP-maket.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">HIGH POINT MARKET</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    The High Point Market is the largest furnishings industry trade show in the world,
                    bringing more than 75,000 people to High Point, North Carolina, every six months. 
                    Serious retail home furnishings buyers, interior designers, architects, and others 
                    in the home furnishings industry can be found in High Point twice a year because if 
                    you can’t find it in High Point…it probably doesn’t exist.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="col text-center">
                      <Button
                        className="btn-round"
                        outline
                        color="neutral"
                        href="https://www.highpointmarket.org/products-and-trends"
                        size="lg"
                        target="_blank"
                      >
                        Visit website
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        height="100px"
                        style={{ height: "120px" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/partners/hpconvention.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody style={{marginBottom:"50px"}}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle style={{fontSize:"18px"}} tag="h4">HIGH POINT CONVENTION AND BUSINESS BUREAU</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    The mission of the High Point Convention & Visitors Bureau
                    is to promote and encourage economic development in High Point 
                    through travel and tourism. Travelers to the region and Triad 
                    residents alike can experience a venue like no other at the High 
                    Point Convention and Visitors Bureau’s Regional Visitors Center.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="col text-center">
                      <Button
                        className="btn-round"
                        outline
                        color="neutral"
                        href="https://www.highpoint.org/"
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
                  <CardImg width="100%" style={{height:"350px"}} src={card4} alt="Leadership 1" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card5} alt="Leadership 1" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse >
                  <CardImg width="50%" style={{height:"350px"}} src={card6} alt="Leadership 1" />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" style={{height:"350px"}} src={card7} alt="Leadership 1" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" style={{height:"350px"}} src={card8} alt="Leadership 1" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card9} alt="Leadership 1" />
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

