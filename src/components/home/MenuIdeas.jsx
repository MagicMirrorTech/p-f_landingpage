import React from "react";

import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

import FooterL from "./Footer";
import NavbarTopSolid from "./NavbarSolid";

import menu1 from '../../assets/img/pf1.webp'
import menu2 from '../../assets/img/pf2.webp'
import menu3 from '../../assets/img/pf3.webp'
import menu4 from '../../assets/img/pf4.webp'


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
       
        <div className="section text-center">
          <Container>
            <h2 className="title">Menu Ideas</h2>
            <Row>
              
                <Col md="6">
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front" style={{backgroundImage: `url(${menu1})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                        <div className="front-text">
                        <h2>Southern Classic's</h2>
                        </div>
                      </div>
                      <div className="flip-box-back">
                        <h4>Southern Classic's</h4>
                        <p>What an amazing Menu</p>
                      <Row>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      </Row>
                      
                      <Row>
                      <Col  >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Full Menu
                        </Button>
                      </Col>
                      <Col >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Custom Quote
                        </Button>
                      </Col>
                      </Row>
                      </div>
                    </div>
                  </div>
                </Col>
             
              <Col md="6">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front" style={{backgroundImage: `url(${menu2})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                    <div className="front-text">
                        <h2>Hearty</h2>
                        </div>
                    </div>
                    <div className="flip-box-back">
                      <h4>Hearty</h4>
                      <p>What an amazing Menu</p>
                      <Row>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      </Row>
                      
                      <Row>
                      <Col  >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Full Menu
                        </Button>
                      </Col>
                      <Col >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Custom Quote
                        </Button>
                      </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front" style={{backgroundImage: `url(${menu3})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                    <div className="front-text">
                        <h2>Light & Classy</h2>
                        </div>
                    </div>
                    <div className="flip-box-back">
                      <h4>Light & Classy</h4>
                      <p>What an amazing menu</p>
                      <Row>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      </Row>
                      
                      <Row>
                      <Col  >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Full Menu
                        </Button>
                      </Col>
                      <Col >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Custom Quote
                        </Button>
                      </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front" style={{backgroundImage: `url(${menu4})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                    <div className="front-text">
                        <h2>Healthy</h2>
                        </div>
                    </div>
                    <div className="flip-box-back">
                      <h4>Healthy</h4>
                      <p>What an amazing menu</p>
                      <Row>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      <Col>
                      <ul>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      </ul>
                      </Col>
                      </Row>
                      
                      <Row>
                      <Col  >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Full Menu
                        </Button>
                      </Col>
                      <Col >
                        <Button
                        style={{ width: "240px", fontSize: "15px" }}
                        className="btn-round"
                        color="danger"
                        href="/request-quote"
                        target="_blank"
                        >
                          Custom Quote
                        </Button>
                      </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>



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
            <h4 className="title">Corporate</h4>
            <br />
            <Row>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf1.webp")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf2.webp")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf3.webp")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf4.webp")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf5.webp")}
                />
              </Col>
              <Col md="4">
                <img
                  style={{ marginBottom: "30px" }}
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assets/img/pf6.webp")}
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
