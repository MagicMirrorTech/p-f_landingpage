import React from 'react'
import ReactDatetime from "react-datetime";

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
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Request a Quote</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="12">
                      <label>Event Type</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-bullet-list-67" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="select">
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
                        <Input placeholder="Name" type="text" />
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
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Datetime Picker Here"
                            }}
                          />
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
                    <Col md="12">
                      <label htmlFor="Address">Event Venue</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-map-big" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Address of event" type="text" />
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
                        <Input placeholder="Name" type="select">
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
                      <label htmlFor="Guests">Guests</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Guests of event" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Menu Ideas</label>
                      <Input
                        placeholder="Tell us your thoughts and feelings..."
                        type="textarea"
                        rows="4"
                        
                      />
                    </Col>
                    <Col md="6">
                      <label>Additional Thoughts</label>
                      <Input
                        placeholder="Tell us your thoughts and feelings..."
                        type="textarea"
                        rows="4"
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
