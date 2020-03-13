import React from "react";


import { Button, Container } from "reactstrap";



function LandingPageHeader() {
  let pageHeader = React.createRef();
  
  

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require('../../assets/img/pf1.png') + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
        id="landingHome"
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>FOR THE LOVE OF FOOD</h1>
            <br />
            <Button
              href="/request-quote"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Custom Catering
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;