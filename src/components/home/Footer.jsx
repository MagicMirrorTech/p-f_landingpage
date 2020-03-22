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
              <a target="_blank" rel="noopener noreferrer" href="https://www.piliapp.com/lnk/facebook/page/275474845934606" >
              Facebook
              </a>
            </span>
            <br/>
            <span className="lead mb-0">
              Phone
              <p>
              (336)869-4842
              </p>
            </span>
            <span className="lead mb-0">
              Email
            <p>
            solutions@plainandfancycaterers.com
            </p>
            </span>
            <span className="lead mb-0">
              Address 
            </span>
            <p>
             3021 N Main St #102, High Point, NC 27265
            </p>
            <br/>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">
              Navigate
            </h4>
            <span className="lead mb-0">  
            <a target="_blank" rel="noopener noreferrer" href="http://payment.roverpayapp.com/login?merchantid=pnf">
              Pay Invoice
            </a>
            </span>
            <br/>
            <span className="lead mb-0">
            <a target="_blank" rel="noopener noreferrer" href="http://manager.roverpayapp.com">
              Argyle Admin
            </a>           
            </span>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">
              Legal
            </h4>
            <p className="lead mb-0">
              © {new Date().getFullYear()}, Plain & Fancy Caterers{" "}
              Created by <a target="_blank" rel="noopener noreferrer" href="https://www.magicmirror.dev">M|M Devs</a>
            </p>
          </div>
          
          
        </Row>
      </Container>
    </footer>
  );
}

export default FooterL;