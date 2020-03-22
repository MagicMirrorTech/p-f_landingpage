import React from "react";

import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import FooterL from "./Footer";
import NavbarTopSolid from "./NavbarSolid";


function Connect(props) {
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
        <div id="images">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="6">
                <h2 className="images-title text-center">Looking For This?</h2>
              </Col>
              <Col className="ml-auto mr-auto download-area text-center" md="6">
                <Button
                  style={{ width: "350px", fontSize: "20px" }}
                  className="btn-round"
                  color="danger"
                  href="/request-quote"
                >
                  Custom Quote
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section text-center">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="6">
                <h2 className="title">Like Us On Facebook</h2>
              </Col>
              <Col className="ml-auto mr-auto download-area text-center" md="6">
                <Button
                  style={{
                    width: "350px",
                    fontSize: "20px",
                    paddingTop: "-15px"
                  }}
                  className="facebook-sharrre btn-round ml-2"
                  color="facebook-bg"
                  href="https://www.piliapp.com/lnk/facebook/page/275474845934606"
                  id="tooltip68961360"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                  >
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#ffffff">
                        <path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM91.43547,34.4c-9.12239,0 -16.04073,2.98323 -20.30406,8.25735c-4.26333,5.27412 -5.7714,12.31745 -5.7714,20.04203v6.10063h-6.88c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44v17.2c0.00019,1.89978 1.54022,3.43981 3.44,3.44h6.88v41.28c0.00019,1.89978 1.54022,3.43981 3.44,3.44h20.64c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-41.28h13.76c1.64044,-0.00058 3.05228,-1.1593 3.37281,-2.76813l3.44,-17.2c0.20103,-1.01009 -0.06104,-2.05711 -0.7142,-2.8534c-0.65316,-0.79629 -1.62871,-1.25807 -2.65861,-1.25848h-17.2v-7.54515c0,-1.66848 0.10791,-1.65473 0.59125,-1.9686c0.48335,-0.31386 2.23023,-0.80625 5.29438,-0.80625h11.31437c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-13.76c-0.0008,-1.45369 -0.9152,-2.74999 -2.28437,-3.23844c0,0 -9.90583,-3.64156 -19.80016,-3.64156zM91.43547,41.28c6.50993,0 12.54714,1.75594 15.20453,2.58672v7.73328h-7.87437c-3.60258,0 -6.52556,0.29096 -9.03672,1.92156c-2.51116,1.6306 -3.7289,4.75432 -3.7289,7.73328v10.98515c0.00019,1.89978 1.54022,3.43981 3.44,3.44h16.44078l-2.06265,10.32h-14.37813c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44v41.28h-13.76v-41.28c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44h-6.88v-10.32h6.88c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-9.54063c0,-6.80942 1.39325,-12.19405 4.23953,-15.71515c2.84628,-3.5211 7.23953,-5.70422 14.95594,-5.70422z"></path>
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp; Facebook
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip68961360">
                  Share!
                </UncontrolledTooltip>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section landing-section" style={{ paddingTop: "30px" }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact Us</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Phone Number</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone Number" type="number" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Phone Number 2</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Alternate Phone Number"
                          type="number"
                        />
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Subject</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-send" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Subject" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterL />
    </>
  );
}

export default Connect;
