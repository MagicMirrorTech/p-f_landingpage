import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

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
    axios.post('https://pflanding.herokuapp.com/requestquote', mail)
    .then(({ data }) => {
      Swal.fire('Very Good', 'Request Quote sent, shortly our staff will contact you', 'success')
      document.getElementById("miForm").reset();
    })
    .catch(err => {
      console.log(err.response)
    })
    
  }



  return (
    <>
      <NavbarTopSolid/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="main">
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Request a Quote</h2>
                <Form id="miForm" className="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <label>Event Type</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-bullet-list-67" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input name="event" onChange={handleInput} type="select">
                          <option defaultValue="disabled">Select one</option>
                          <option>Corporate</option>
                          <option>Wedding</option>
                          <option>Private</option>
                          <option>Drop Off</option>
                        </Input>
                      </InputGroup>
                    </Col>
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
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" name="email" onChange={handleInput} type="email" />
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
                        <Input placeholder="Phone Number" onChange={handleInput} name="phone" type="number" />
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
                      <label>Food Budget</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-bullet-list-67" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" onChange={handleInput} name="budget" type="select">
                          <option defaultValue="disabled">Select one</option>
                          <option>500 - 2,000</option>
                          <option>2,001 - 5,000</option>
                          <option>5,001 - 10,000</option>
                          <option>10,001 - 35,000</option>
                          <option>35,000+</option>
                        </Input>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label htmlFor="Guests">Guest Count</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Estimate Number of Guests" onChange={handleInput} name="guest" type="text" />
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
                    </Col>
                  </Row>

                  <Row>
                    <Col className="ml-auto mr-auto" md="6">
                      <Button className="btn-fill" color="danger" size="lg">
                        Start Your Custom Experience
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

export default RequestQuote;
