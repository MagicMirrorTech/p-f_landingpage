/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {withRouter} from 'react-router-dom'

import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardImg,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";

import card0 from '../../assets/img/leadership/p&f-marc.png'
import card1 from '../../assets/img/leadership/IMG_7742.png'
import card2 from '../../assets/img/leadership/p&f-kathy.png'
import card3 from '../../assets/img/leadership/p&f-lisa.png'



import card4 from "../../assets/img/wedding/1.png"
import card5 from "../../assets/img/wedding/2.png"
import card6 from "../../assets/img/wedding/3.png"
import card7 from "../../assets/img/wedding/4.png"
import card8 from "../../assets/img/wedding/5.png"
import card9 from "../../assets/img/wedding/6.png"

import NavbarTopSolid from "./NavbarSolid";

import FooterL from "./Footer";
import Commitment from "./Commitment";



function AboutUs(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  document.title = "Best Caterers for Market"
  return (
    <>
      <NavbarTopSolid/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Commitment/>
      <div className="main">
        <div className="section text-center" style={{paddingTop:'10px'}}>
          <Container>
            <h2 className="title">Leadership</h2>
            <Row>
              <Col md="3">
                <Card inverse>
                  <CardImg width="100%" src={card0} alt="Leadership 1" />
                    <CardFooter>
                      <b style={{ color: "black", fontSize:"20px" }}>Marc, General Manager/Co-Owner</b>
                    </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card  inverse>
                  <CardImg width="100%" src={card1} alt="Leadership 2" />
                  <CardFooter className="text-center">
                  <b style={{ color: "black", fontSize:"20px" }}>Spencer Wright, Executive Chef</b>

                  </CardFooter>

                </Card>
              </Col>
              <Col md="3">
                <Card inverse>
                  <CardImg width="100%" src={card2} alt="Leadership 3" />
                  <CardFooter className="text-center">
                  <b style={{ color: "black", fontSize:"20px" }}>Kathy White, Office Manager</b>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card inverse>
                  <CardImg width="100%" src={card3} alt="Leadership 4" />
                  <CardFooter>
                      <b style={{ color: "black", fontSize:"20px" }}>
                      Lisa, Operations Manager/Co-Owner
                      </b>
                </CardFooter>
                </Card>
              </Col>

            </Row>
          </Container>
        </div>

        <div className="section section-dark text-center">
          <div className="container-cards-flex"  >
            <h2 className="title partner-titles">Corporate Partners</h2>
            <Row className="text-center-cards">
            <Col>
            <Card id="first-in-row" className="card-profile card-plain">
              <div className="card-avatar">
                <a href="https://conferencecentergtcc.com/catering/" onClick={e => e.preventDefault()}>
                  <img
                    style={{ height: "120px", objectFit:"contain", backgroundColor:"white" }}
                    alt="conference center logo"
                    src={require("../../assets/img/partners/Conference-Center-Logo.png")}
                  />
                </a>
              </div>
              <CardBody style={{marginBottom:"65px"}}>
                <a href="#" onClick={e => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">THE CONFERENCE CENTER AT GTCC</CardTitle>
                  </div>
                </a>
                <p className="card-description text-center">
                Inspiring. Flexible. Purposeful.<br/>
                With corporate meetings at the heart of its mission, The Conference Center at GTCC is sure
                to provide a professional conference space with all of the modern amenities you would expect
                for your company’s meeting needs.
                </p>
              </CardBody>
              <CardFooter className="text-center">
                <div className="col text-center">
                  <Button
                    className="btn-round"
                    outline
                    color="neutral"
                    href="https://conferencecentergtcc.com/catering/"
                    size="lg"
                    target="_blank"
                  >
                    Visit website
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
              <Col >
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img
                        style={{ height: "120px" , objectFit:"contain" , backgroundColor:"white" }}
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
                  <CardFooter className="text-center" style={{paddingTop:'20px'}}>
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

              <Col >
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img

                        style={{ height: "120px", objectFit:"contain" , backgroundColor:"white" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/partners/High-Point-Arts.png")}
                      />
                    </a>
                  </div>
                  <CardBody style={{marginBottom:"65px"}}>
                    <a href="#" onClick={e => e.preventDefault()}>
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
              <Col >
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img
                        height="100px"
                        style={{ height: "120px", objectFit:"contain" , backgroundColor:"white" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/partners/HP-maket.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#" onClick={e => e.preventDefault()}>
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
                  <CardFooter className="text-center" style={{paddingTop:'10px'}}>
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
              <Col>
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#" onClick={e => e.preventDefault()}>
                      <img
                        height="100px"
                        style={{ height: "120px", objectFit:"contain" }}
                        alt="gtcc logo"
                        src={require("../../assets/img/partners/hpconvention.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody style={{marginBottom:"50px"}}>
                    <a href="#" onClick={e => e.preventDefault()}>
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
                    <br/><br/>
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
          </div>
        </div>
        <div className="section text-center">
          <Container>
            <h2 className="title">Happy Couples</h2>
            <Row>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" style={{height:"350px"}} src={card4} alt="weeding 1" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card5} alt="weeding 6" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse >
                  <CardImg width="50%" style={{height:"350px"}} src={card6} alt="weeding 2" />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" style={{height:"350px"}} src={card7} alt="weeding 3" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" style={{height:"350px"}} src={card8} alt="wedding 4" />
                </Card>
              </Col>
              <Col md="4">
                <Card inverse>
                  <CardImg width="100%" src={card9} alt="weeding 5" />
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
