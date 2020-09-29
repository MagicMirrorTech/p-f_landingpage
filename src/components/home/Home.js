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
  Col,
  Spinner
} from "reactstrap";

import LandingPageHeader from './LandingPageHeader';
import NavbarTop from './Navbar';
import FooterL from './Footer';
import SectionCarousel from './CarouselLanding';
import { Menus } from './Menus';
import Commitment from './Commitment';
import Reaptcha from 'reaptcha';
import Global from "../../Global";






function Home(props) {
  const [mail, setMail] = useState({})
  const [spinner, setSpinner] = useState(false)
  const [verified, setVerified] = useState(false)

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
  const onVerify = recaptchaResponse => {
    setVerified(true)

   };
   const onExpire = recaptchaResponse => {
     setVerified(false);

    };

  const handleSubmit = async e => {
    e.preventDefault()
    setSpinner(true)
    let myVar = setTimeout(function(){
      Swal.fire({
        title: 'Oops...',
        text: "Sorry, your internet connection is letting you down. Please try again when you have a moment",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
          window.location.reload()
      })
     }, 20000);
    axios.post(Global.url+'contact', mail)
    .then(({ data }) => {
      setSpinner(false)
      clearTimeout(myVar)
      Swal.fire({
        title: 'Message Sent',
        text: "Thank you for contacting us, our team will be contacting you shortly",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
          window.location.reload()
      })
    })
    .catch(err => {
      console.log(err.response)
    })

  }

  return (
    <>
    <div style={{position:"relative", zIndex:"0"}}>
      <div style={{display:"flex",backgroundColor:"rgba(183,183,183,0.5)", alignContent:"center", justifyContent:"center",height:"100%", width:"100%", alignItems:"center", visibility:spinner?"visible":'hidden', position:"absolute", zIndex:"1" }}>
      <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>
      <NavbarTop />
      <LandingPageHeader/>
      <Commitment/>
      <div className="main">
        <div id="images">
          <Container>
            <div className="title text-center">
              <h2>Proud Partners</h2>
            </div>
            <Row>
              <Col className="mr-auto ml-auto" md="2" sm="6">
                <h4 style={{fontSize:"18px"}} className="images-title text-center">THE CONFERENCE CENTER AT GTCC</h4>
                <img
                  height="110px"
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/partners/Conference-Center-Logo.png")}
                />
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="6">
                <h4 className="images-title text-center">GTCC</h4>
                <img
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/gtcc.png")}
                />
              </Col>

              <Col className="mr-auto ml-auto" md="2" sm="6">
                <h4 className="images-title text-center">HIGH POINT ARTS</h4>
                <img
                  height="110px"
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/partners/High-Point-Arts.png")}
                />
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="6">
                <h4 className="images-title text-center">HIGH POINT MARKET</h4>
                <img
                  height="110px"
                  alt="..."
                  className="img-rounded  img-responsive"
                  src={require("../../assets/img/partners/HP-maket.png")}
                />
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="6">
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

        <Menus/>

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
                  <br/>
                  <Col className="ml-auto mr-auto" md="6">
                    <Reaptcha sitekey="6LeYqfEUAAAAAKfB6AtMLikvU3GyEX0y12gNrpmv" onExpire={onExpire} onVerify={onVerify} />
                    </Col>
                  <Row>

                    <Col className="ml-auto mr-auto" md="4">
                      <Button disabled={!verified} className="btn-fill" color="danger" size="lg">
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
      </div>
    </>
  );
}

export default Home;
