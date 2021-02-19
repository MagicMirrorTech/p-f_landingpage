import React from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
  Button
} from "reactstrap";
import menu1 from '../../assets/img/menus/breakfast.png'
import menu2 from '../../assets/img/menus/hotlunch.png'
import menu3 from '../../assets/img/menus/boxed_lunch.png'
import menu4 from '../../assets/img/menus/comfort.png'
import menu5 from '../../assets/img/menus/classic.png'
import menu6 from '../../assets/img/menus/light.png'
import menu7 from '../../assets/img/menus/apps.png'
import menu8 from '../../assets/img/menus/desserts.png'

import breakfast from '../../assets/img/menus/breakfast-menu.png'
import hotlunch from '../../assets/img/menus/hotlunch-menu.png'
import boxedlunch from '../../assets/img/menus/boxed_lunch-menu.png'
import comfort from '../../assets/img/menus/comfort-menu.png'
import classic from '../../assets/img/menus/classic-menu.png'
import light from '../../assets/img/menus/light-menu.png'
import hors from '../../assets/img/menus/apps-menu.png'
import desserts from '../../assets/img/menus/desserts-menu.png'


export const Menus = () => {
  const [modal, setModal] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const [modal4, setModal4] = React.useState(false);
  const [modal5, setModal5] = React.useState(false);
  const [modal6, setModal6] = React.useState(false);
  const [modal7, setModal7] = React.useState(false);
  const [modal8, setModal8] = React.useState(false);


  const toggleModal = () => {
    setModal(!modal);
    
  }
  const toggleModal2 = () => {
    setModal2(!modal2);
    
  }
  const toggleModal3 = () => {
    setModal3(!modal3);
    
  }
  const toggleModal4 = () => {
    setModal4(!modal4);
    
  }
  const toggleModal5 = () => {
    setModal5(!modal5);
    
  }
  const toggleModal6 = () => {
    setModal6(!modal6);
    
  }
  const toggleModal7 = () => {
    setModal7(!modal7);
    
  }
  const toggleModal8 = () => {
    setModal8(!modal8);
    
  }



  return (
    <div>
    <div className="section text-center" style={{paddingTop:'30px'}}>
    <Container>
      <h2 className="title">Menu Ideas</h2>
      <Row>
        
          <Col md="6">
            <div className="flip-box">
              {/*<div className="flip-box-inner">*/}
                <div onClick={toggleModal} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu1})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                  <div className="front-text">
                  <h2>Breakfast</h2>
                  </div>
                </div>
              </div>
            {/*</div>*/}
            <Modal id="modal-1" size='lg' style={{marginTop:"-50px"}}  isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                  Breakfast
                  </h5>
                </div>
                <div className="modal-body" >
                <object aria-label="foo"  width="100%" height="500px" data={breakfast}></object>

                </div>
                <center>
                <div className="modal-footer">
                
                  <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                     
                    >
                      Close
                    </Button>
                  </div>
                </div>
                </center>

              </Modal>
          </Col>

          <Col md="6">
            <div className="flip-box">
              {/*<div className="flip-box-inner">*/}
                <div onClick={toggleModal2} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu2})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                  <div className="front-text">
                  <h2>Hot Lunches</h2>
                  </div>
                </div>
              </div>
            {/*</div>*/}
            <Modal id="modal-1" size='lg' style={{marginTop:"-50px"}}  isOpen={modal2} toggle={toggleModal2}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal2}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                  Hot Lunches
                  </h5>
                </div>
                <div className="modal-body" >
                <object aria-label="foo"  width="100%" height="500px" data={hotlunch}></object>

                </div>
                <center>
                <div className="modal-footer">
                
                  <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal2}
                     
                    >
                      Close
                    </Button>
                  </div>
                </div>
                </center>

              </Modal>
          </Col>

          <Col md="6">
            <div className="flip-box">
              {/*<div className="flip-box-inner">*/}
                <div onClick={toggleModal3} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu3})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                  <div className="front-text">
                  <h2>Boxed Lunches</h2>
                  </div>
                </div>
              </div>
            {/*</div>*/}
            <Modal id="modal-1" size='lg' style={{marginTop:"-50px"}}  isOpen={modal3} toggle={toggleModal3}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal3}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                  Boxed Lunches
                  </h5>
                </div>
                <div className="modal-body" >
                <object aria-label="foo"  width="100%" height="500px" data={boxedlunch}></object>

                </div>
                <center>
                <div className="modal-footer">
                
                  <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal3}
                     
                    >
                      Close
                    </Button>
                  </div>
                </div>
                </center>

              </Modal>
          </Col>

          <Col md="6">
            <div className="flip-box">
              {/*<div className="flip-box-inner">*/}
                <div onClick={toggleModal4} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu4})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                  <div className="front-text">
                  <h2>Comfort Fare</h2>
                  </div>
                </div>
              </div>
            {/*</div>*/}
            <Modal id="modal-1" size='lg' style={{marginTop:"-50px"}}  isOpen={modal4} toggle={toggleModal4}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal4}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                  Comfort Fare
                  </h5>
                </div>
                <div className="modal-body" >
                <object aria-label="foo"  width="100%" height="500px" data={comfort}></object>

                </div>
                <center>
                <div className="modal-footer">
                
                  <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal4}
                     
                    >
                      Close
                    </Button>
                  </div>
                </div>
                </center>

              </Modal>
          </Col>

          <Col md="6">
          <div className="flip-box">
            {/*<div className="flip-box-inner">*/}
              <div onClick={toggleModal5} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu5})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                <div className="front-text">
                <h2>Classic Fare</h2>
                </div>
              </div>
            </div>
          {/*</div>*/}
          <Modal id="modal-1" size='lg' style={{marginTop:"-50px"}}  isOpen={modal5} toggle={toggleModal5}>
              <div className="modal-header">
                <button
                  aria-label="Close"
                  className="close"
                  type="button"
                  onClick={toggleModal5}
                >
                  <span aria-hidden={true}>×</span>
                </button>
                <h5
                  className="modal-title text-center"
                  id="exampleModalLabel"
                >
                Classic Fare
                </h5>
              </div>
              <div className="modal-body" >
              <object aria-label="foo"  width="100%" height="500px" data={classic}></object>

              </div>
              <center>
              <div className="modal-footer">
              
                <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
                  <Button
                    className="btn-link"
                    color="default"
                    type="button"
                    onClick={toggleModal5}
                   
                  >
                    Close
                  </Button>
                </div>
              </div>
              </center>

            </Modal>
        </Col>

        <Col md="6">
          <div className="flip-box">
            {/*<div className="flip-box-inner">*/}
              <div onClick={toggleModal6} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu6})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
                <div className="front-text">
                <h2>Lighter Fare</h2>
                </div>
              </div>
            </div>
          {/*</div>*/}
          <Modal id="modal-1" size='lg' style={{marginTop:"-50px"}}  isOpen={modal6} toggle={toggleModal6}>
              <div className="modal-header">
                <button
                  aria-label="Close"
                  className="close"
                  type="button"
                  onClick={toggleModal6}
                >
                  <span aria-hidden={true}>×</span>
                </button>
                <h5
                  className="modal-title text-center"
                  id="exampleModalLabel"
                >
                Lighter Fare
                </h5>
              </div>
              <div className="modal-body" >
              <object aria-label="foo"  width="100%" height="500px" data={light}></object>

              </div>
              <center>
              <div className="modal-footer">
              
                <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
                  <Button
                    className="btn-link"
                    color="default"
                    type="button"
                    onClick={toggleModal6}
                   
                  >
                    Close
                  </Button>
                </div>
              </div>
              </center>

            </Modal>
        </Col>

        <Col md="6">
        <div className="flip-box">
          {/*<div className="flip-box-inner">*/}
            <div onClick={toggleModal7} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu7})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
              <div className="front-text">
              <h2>Hors d’Oeuvres</h2>
              </div>
            </div>
          </div>
        {/*</div>*/}
        <Modal id="modal-1" size='lg' style={{marginTop:"-50px", textAlign:"center"}}  isOpen={modal7} toggle={toggleModal7}>
            <div className="modal-header">
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={toggleModal7}
              >
                <span aria-hidden={true}>×</span>
              </button>
              <h5
                className="modal-title text-center"
                id="exampleModalLabel"
              >
              Hors d’Oeuvres
              </h5>
            </div>
            <div className="modal-body" >
            <object aria-label="foo"  width="50%" height="100%" data={hors}></object>

            </div>
            <center>
            <div className="modal-footer">
            
              <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
                <Button
                  className="btn-link"
                  color="default"
                  type="button"
                  onClick={toggleModal7}
                 
                >
                  Close
                </Button>
              </div>
            </div>
            </center>

          </Modal>
      </Col>
       
      <Col md="6">
      <div className="flip-box">
        {/*<div className="flip-box-inner">*/}
          <div onClick={toggleModal8} className="flip-box-front" style={{cursor:'pointer', backgroundImage: `url(${menu8})`, backgroundSize: 'Cover', backgroundRepeat: 'noRepeat' }}>
            <div className="front-text">
            <h2>Desserts</h2>
            </div>
          </div>
        </div>
      {/*</div>*/}
      <Modal id="modal-1" size='lg' style={{marginTop:"-50px", textAlign:"center"}}  isOpen={modal8} toggle={toggleModal8}>
          <div className="modal-header">
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={toggleModal8}
            >
              <span aria-hidden={true}>×</span>
            </button>
            <h5
              className="modal-title text-center"
              id="exampleModalLabel"
            >
            Desserts
            </h5>
          </div>
          <div className="modal-body" >
          <object aria-label="foo"  width="50%" height="100%" data={desserts}></object>

          </div>
          <center>
          <div className="modal-footer">
          
            <div className="left-side" style={{width:"100%", marginLeft:"-570px"}}>
              <Button
                className="btn-link"
                color="default"
                type="button"
                onClick={toggleModal8}
               
              >
                Close
              </Button>
            </div>
          </div>
          </center>

        </Modal>
    </Col>
      </Row>
    </Container>
  </div>
    </div>
  )
}
