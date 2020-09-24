import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Global from '../../Global'
import {Spinner} from 'reactstrap'
import {withRouter} from 'react-router-dom'
import Reaptcha from 'reaptcha';


import {
  Button,
  
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import FooterL from './Footer';

import NavbarTopSolid from './NavbarSolid';


function RequestQuote(props) {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
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

    setSpinner(true)
    axios.post(Global.url+'requestquote', mail)
    .then(({ data }) => {
      setSpinner(false)
      clearTimeout(myVar)
      Swal.fire({
        title: 'Request Quote Sent',
        text: "Thank you for contacting us, our team will be contacting you shortly",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
          window.location.reload() 
      })
      console.log('se envió el email')

    })
    .catch(err => {
      console.log(err)
    })
    
    
  }

  document.title = "Best Corporate Caterers"

  return (
    <>
   
    <div style={{position:"relative", zIndex:"0"}}>
      <div style={{display:"flex",backgroundColor:"rgba(183,183,183,0.5)", alignContent:"center", justifyContent:"center",height:"100%", width:"100%", alignItems:"center", visibility:spinner?"visible":'hidden', position:"absolute", zIndex:"1" }}>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>
      <NavbarTopSolid/>
      
      
      <div className="main">
      <br/>
      <br/>
      <br/>
      <br/>
      
          <Container>
         
          <br/>
          <br/>
          <br/>
          
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                
                <h2 className="text-center">Request a Quote</h2>
                
                <Form id="miForm" className="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <label>Event Type *</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-bullet-list-67" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input name="event" required onChange={handleInput} type="select">
                          <option value="">Select one</option>
                          <option value="Corporate">Corporate</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Private">Private</option>
                          <option value="Drop Off">Drop Off</option>
                        </Input>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Name *</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input required placeholder="Name" name="name" onChange={handleInput} type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Event Date</label>
                      <FormGroup>
                        <InputGroup className="date" id="datetimepicker">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-watch-time" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" name="date" type="date" onChange={handleInput} />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <label>Email *</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input required placeholder="Email" name="email" onChange={handleInput} type="email" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Phone Number *</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input required placeholder="Phone Number" onChange={handleInput} name="phone" type="number" />
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label htmlFor="Address">Event Venue</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-map-big" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Address of event" onChange={handleInput} name="address" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Food Budget *</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-bullet-list-67" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input required onChange={handleInput} name="budget" type="select">
                          <option value="">Select one</option>
                          <option value="500-2,000">500 - 2,000</option>
                          <option value="2,001-5,000">2,001 - 5,000</option>
                          <option value="5,001-10,000">5,001 - 10,000</option>
                          <option value="10,001-35,000">10,001 - 35,000</option>
                          <option value="35,000+">35,000+</option>
                        </Input>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label htmlFor="Guests">Guest Count *</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input required placeholder="Estimate Number of Guests" onChange={handleInput} name="guest" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Menu Ideas</label>
                      <Input
                        placeholder="Share your menu ideas & dietary requests"
                        type="textarea"
                        rows="4"
                        onChange={handleInput}
                        name="menu"
                        
                      />
                    </Col>
                    <Col md="6">
                      <label>Additional Thoughts</label>
                      <Input
                        placeholder="Share your thoughts and preferences here"
                        type="textarea"
                        rows="4"
                        onChange={handleInput}
                        name="thoughts"
                      />
                      <br/>
                    </Col>
                    
                    <Col className="ml-auto mr-auto" md="6">
                    <Reaptcha id="reC" sitekey="6LeYqfEUAAAAAKfB6AtMLikvU3GyEX0y12gNrpmv" onExpire={onExpire} onVerify={onVerify} />
                    </Col>
                  </Row>
                      
                  <Row>
                    <Col className="ml-auto mr-auto" md="6">
                      <Button disabled={!verified} className="btn-fill" color="danger" size="lg">
                        Start Your Custom Experience
                      </Button>
                    </Col>
                  </Row>
                  
                </Form>
              </Col>
            </Row>
          </Container>

      </div>
      <br/>

      <FooterL />
      </div> 
    </>
  );
}

export default withRouter(RequestQuote);
