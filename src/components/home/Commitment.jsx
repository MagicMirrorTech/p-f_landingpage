import React from "react";
import {withRouter} from 'react-router-dom'

import {
  Container,
  Row,
  Col,
} from "reactstrap";





function Commitment(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>

        <div className="section text-center" style={{marginBottom: '0px', paddingTop:'10px', paddingBottom:'50px'}}>
          <Container>
            <h2 className="title">Our Commitment</h2>
            <Row>
              <Col md="12">
              <p style={{fontSize:'22px', fontStyle:"bold"}}>
              We are custom caterers that strive to bring your ideas to life. Feel free to get as creative as you’d like, choose from our menu ideas, or use a combination of both your favorites and ours

              </p>
              </Col>
              
            </Row>
          </Container>
        </div>

       

    </>
  );
}

export default withRouter(Commitment);