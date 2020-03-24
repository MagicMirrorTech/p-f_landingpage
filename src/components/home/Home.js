import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import LandingPageHeader from './LandingPageHeader';
import NavbarTop from './Navbar';
import FooterL from './Footer';
import SectionCarousel from './CarouselLanding';
import menu1 from '../../assets/img/menus/southern.png'
import menu2 from '../../assets/img/menus/hearty.png'
import menu3 from '../../assets/img/menus/light-classy.png'
import menu4 from '../../assets/img/menus/healthy.png'




function Home(props) {
  const [mail, setMail] = useState({})

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const handleInput = e => {
    e.persist()
    setMail(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    axios.post('https://pflanding.herokuapp.com/contact', mail)
    .then(({ data }) => {
      Swal.fire('Message Sent', 'Thank you for contacting us, our team will be contacting you shortly.', 'success')
      document.getElementById("miForm").reset();
    })
    .catch(err => {
      console.log(err.response)
    })
    
  }

  return (
    <>
      <NavbarTop />
      <LandingPageHeader/>
      <br />
      <div className="main">
        <div id="images">
          <Container>
            <div className="title text-center">
              <h2>Proud Partners</h2>
            </div>
            <Row>
              <Col className="mr-auto ml-auto" md="3" sm="6">
                <h4 className="images-title text-center">GTCC</h4>
                <img
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/gtcc.png")}
                />
              </Col>

              <Col className="mr-auto ml-auto" md="3" sm="6">
                <h4 className="images-title text-center">HIGH POINT ARTS</h4>
                <img
                  height="110px"
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/partners/High-Point-Arts.png")}
                />
              </Col>
              <Col className="mr-auto ml-auto" md="3" sm="6">
                <h4 className="images-title text-center">HIGH POINT MARKET</h4>
                <img
                  height="110px"
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/partners/HP-maket.png")}
                />
              </Col>
              <Col className="mr-auto ml-auto" md="3" sm="6">
                <h4 style={{fontSize:"16px"}} className="images-title text-center">HIGH POINT CONVENTION AND BUSINESS BUREAU</h4>
                <img
                  width="255px"
                  height="138px"
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/partners/hpconvention.jpg")}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <SectionCarousel />



        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Happy Clients</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        height="120px"
                        width="120px"
                        alt="..."
                        src={require("../../assets/img/clients/client1.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Tim and Missy Bentley</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    "Y'all were incredible! Everyone at last night's wedding for Tiffany and Devon at the
                    Castle repeatedly commented on how great the food was! I want to brag on the whole
                    catering team, the chefs and set up crew! EXCELLENT! Y'all went above and beyond
                    and were so accommodating. Thank you!"
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../../assets/img/clients/client2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Kim Lineberry</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    “Plain and Fancy catered our wedding and brunch the following morning. First let me
                    say, they are AMAZING to work with, responsive, attentive, and accommodating…”
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../../assets/img/clients/client3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Vicki Pearson</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    “Everything was wonderful - the food, the service, the presentation! I cannot adequately
                    express how pleased we were with our total experience with Plain and Fancy Caterers.
                    They created the wedding of my daughter's dreams and kept it within our budget.”
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section text-center">
          <Container>
            <h2 className="title">Menu Ideas</h2>
            <Row>
              
                <Col md="6">
                  <div className="flip-box">
                    <div >
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
                  <div>
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
                  <div>
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
                  <div>
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


        <div className="section landing-section" style={{ paddingTop: "10px" }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact Us</h2>
                <Form  id="miForm" className="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" name="name" onChange={handleInput} type="text" />
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
                        <Input placeholder="Email" name="email" onChange={handleInput}  type="email" />
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
                        <Input placeholder="Phone Number" name="phone" onChange={handleInput} type="number" />
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
                          onChange={handleInput}
                          name="phone2"
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
                        <Input placeholder="Subject" name="subject" onChange={handleInput}  type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    onChange={handleInput}
                    name="message"
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

export default Home;
