import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function FooterL() {
  return (
    <footer className="footer text-center" style={{backgroundColor:"black"}}>
      <Container>
        <Row>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">
            Connect
            </h4>
            <span className="lead mb-0">
              Facebook
            </span>
            <br/>
            <span className="lead mb-0">
              Phone
            </span>
            <br/>
            <span className="lead mb-0">
              Email
            </span>
            <br/>
            <span className="lead mb-0">
              Address
            </span>
            <br/>
            <br/>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">
              Navigate
            </h4>
            <span className="lead mb-0">
              Pay Invoice
            </span>
            <br/>
            <span className="lead mb-0">
              Argyle Admin
            </span>
            <br/>
            <span className="lead mb-0">
              Web Portal
            </span>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">
              Legal
            </h4>
            <p className="lead mb-0">
              © {new Date().getFullYear()}, Plain & Fancy Caterers{" "}
              Created by <a href="https://www.magicmirror.dev">M|M Devs</a>
            </p>
          </div>
          
          
        </Row>
      </Container>
    </footer>
  );
}

export default FooterL;