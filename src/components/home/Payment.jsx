import React, {useState} from "react";
import MY_SERVICE  from "../../services/index"
import useForm from '../../hooks/useForm'
import CryptoJS from 'crypto-js'
import axios from 'axios'
import Swal from 'sweetalert2'

import FooterL from "./Footer";
import NavbarTopSolid from "./NavbarSolid";

//import CardReactFormContainer from 'card-react';

import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";


function Payment(props) {
  
  
  const [form, handleInput] = useForm()
  const [cart, setCart] = useState([])
  const encryptText =(text)=> {
    let key = CryptoJS.enc.Utf8.parse('argylepaymentportal');
    let encrypted = CryptoJS.AES.encrypt(text.toString(), key.toString());
    return encrypted.toString();
  }
  const date = new Date()
  
  
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  let product={
    name: form.charge,
    description: form.description,
    amount: parseInt(form.amount)
  }

  
  let addToCart = (product) =>{
    setCart(prevState => [...prevState, product])
    document.getElementById("charge").value = "";
    document.getElementById("descCharge").value = "";
    document.getElementById("amount").value = "";
    
    
  }

  let loginData = {
    username: form.email,
    password: "secret123"
  }

  let signData = {
    username: form.email,
    email: form.email,
    firstName: form.firstName,
    lastName: form.lastName
  }

  const login = async e => {
    e.preventDefault()
    try{
    const {data}  = await MY_SERVICE.login(loginData)

        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            config.headers["Authorization"] = 'JWT ' + data.data.token;
            return config;
          }, function (error) {
            // Do something with request error
            return Promise.reject(error);
          });

        let dataCard = {
                accountName: form.accountName,
                cardNumber: form.cardNumber,
                month: form.expirationMonth,
                year: form.expirationYear,
                cvv: form.ccv,
                cardName: 'Plain and Fancy Card',
                userId: data.data.user.id
            };

         let sendData  =  {
                
                encryptedData: encryptText(JSON.stringify(dataCard))
            };

          let venueData ={
            active: true,
            venue: "5e72a8903a879b0017029ada",
            dateOfPayment: date,
            amount: cart.reduce((acc, current, i) => acc + current.amount, 0),
            chargesData: cart,
            chargedTo: data.data.user.id
          }
          
        
        
      const addCharge = await  axios({
         method: 'POST',
         url:'https://api.roverpayapp.com/v1/users/addcharge',
         data: venueData,
         contentType: 'application/json',
              })
      
      
      const payMethod = await axios({
         method: 'POST',
         url:'https://api.roverpayapp.com/v1/payment/addPaymentMethod/card/credit',
         data: sendData,
         contentType: 'application/json',
              })
        
        let payData = {
          id: payMethod.data.data.paymentMethod.id,
          fullname: form.accountName,
          totalAmount:cart.reduce((acc, current, i) => acc + current.amount, 0),
          charge: addCharge.data.data.charge.id,
          userId:data.data.user.id,
          paymentMethodType: "credit",
          venueId: "5e72a8903a879b0017029ada"}
          
          
          axios({
           method: 'POST',
           url:'https://api.roverpayapp.com/v1/transactions/pay/argyle',
           data: payData,
           contentType: 'application/json',
                })
          .then(({response})=>{
            Swal.fire('Success', 'Your payment was successful ', 'success')
          })
          .catch(err => console.log(err.response))
        }

        catch{
          const singUp = await  axios({
         method: 'POST',
         url:'https://api.roverpayapp.com/v1/auth/signup',
         data: signData,
         contentType: 'application/json',
              })
          console.log(singUp.data.user)
          
        }

  }

  document.title = "Best Wedding Caterers near me"

  
  return (
    <>
      <NavbarTopSolid/>
      


      <div className="main">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br />

      <Container>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="6">
                <h2 className="images-title text-center">Access your payment account</h2>
              </Col>
              <Col className="ml-auto mr-auto download-area text-center" md="6">
                <Button
                  style={{ width: "350px", fontSize: "20px" }}
                  className="btn-round"
                  color="info"
                  href="http://payment.roverpayapp.com/login"
                  target="_blank"
                >
                  Argyle Payment 
                </Button>
              </Col>
            </Row>
          </Container>
        <div className="container">
          <div className="py-5 text-center">
            <h2>Payment Portal</h2>
            <p className="lead">Quick, Single Payments</p>
          </div>
          
          <div className="col-md-12 d-flex justify-content-around  background-light user-styling">
            <div className="row">

              {/*ADD CHARGE */}
            <div className="col-md-6">
              <h5 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Add Charge</span>
                <small className="text-danger"> </small>
              </h5>
              <form   action="#" id="dashboardAddChargeForm">
                <div className="list-group col-md-12">
                    
                    <input
                    onChange={handleInput}
                      id="charge"
                      name="charge"
                      type="text"
                      placeholder="Charge Title"
                      className="form-control"
                    />
                    <small className="text-danger"> </small>
                    
                    <input
                    onChange={handleInput}
                      id="descCharge"
                      name="description"
                      type="description"
                      placeholder="Brief description"
                      className="form-control"
                      
                    />
                    <small className="text-danger"> </small>
                    
                    <input
                      onChange={handleInput}
                      id="amount"
                      name="amount"
                      type="number"
                      min="1"
                      step="any"
                      placeholder="Amount"
                      className="form-control"
                    />
                    <small className="text-danger"> </small>
                    <br/>
                    <div className="input-group">
                      <button
                        type="button"
                        onClick={(e) => addToCart(product)}
                        
                        className="btn btn-primary"
                      >
                        Add Charge
                      </button>
                    </div>
                  
                </div>
              </form>
              </div>

              <div className="col-md-6">
              <h4 className="d-flex justify-content-between align-items-center mt-0 mb-3">
                <span className="text-muted">Charge Details</span>
                <small className="text-danger"> </small>
              </h4>
              <div id="listCharges">
              <table className="table table-striped">
              <thead>
              <tr>
              <th scope="col">Charge</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              
              {cart.map((el, i) => (
                <tr key={i}>
                <td >
                {el.name}
                </td>
                <td>
                {el.description}
                </td>
                <td>
                ${el.amount}
                
                </td>
                <td>
                <Button
                onClick={e =>
                  
                      setCart(prevState => {
                        return prevState.filter(e => e !== cart[i])
                      })
                    
                     
                }
                style={{width:'100px', height:'20px', fontSize:'10px', paddingTop:'0'}}
                className="btn icon-btn btn-danger"
              >
                
              <i className="nc-icon nc-simple-remove" />
                &nbsp; Delete
               
              </Button>
                </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td><b>Total:</b> $ {cart.reduce((acc, current, i) => acc + current.amount, 0)}</td>
                <td></td>
              </tr>

              
              
              </tbody>

              </table>
              </div>
              </div>

            
            </div>
          </div>

          
          <h4 className="d-flex  justify-content-center mb-3">Billing Information</h4>
          <div className="col-md-12 d-flex justify-content-center" id="formCard">
            
            

            <form name="formdata" onSubmit={login} className="needs-validation">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" placeholder="" className="form-control required" required onChange={handleInput} name="firstName"/>
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" placeholder="" className="form-control required" onChange={handleInput}  required name="lastName"/>
                        <div className="text-danger"></div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="you@example.com" className="form-control required" onChange={handleInput} name="email"/>
                    <div className="text-danger"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="1234 Main St" className="form-control required" required onChange={handleInput} name="address"/>
                    <div className="text-danger"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input type="text" id="address2" onChange={handleInput} placeholder="Apartment or suite" className="form-control" name="address2"/>
                </div>
                <div className="row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select id="country" className="form-control custom-select d-block w-100 required" name="country">
                            <option>United States</option>
                        </select>
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select id="state" className="form-control custom-select d-block w-100 required" name="state">
                            <option>Texas</option>
                        </select>
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="number" id="zip" placeholder="" onChange={handleInput} required className="form-control required" name="zip"/>
                        <div className="text-danger"></div>
                    </div>
                </div>
                
                <hr className="mb-4" />

                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" onChange={handleInput} type="radio"  value="credit_card" className="custom-control-input" />
                        <label htmlFor="credit" className="custom-control-label">Credit card</label>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id='card-wrapper'></div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" id="cc-name" placeholder="" onChange={handleInput} name="accountName" className="required form-control" />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="text-danger"></div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input type="text" id="cc-number" onChange={handleInput} placeholder="" name="cardNumber" className="form-control required" />
                        <div className="text-danger"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="expiration">Expiration</label>
                        <div className="row">
                        <input type="text" id="expirationMonth" style={{marginLeft:"15px"}} onChange={handleInput}  placeholder="MM" name="expirationMonth" className="form-control col-md-4 required" />
                        <div className="text-danger"></div> 
                        <input type="text" id="expirationYear" style={{marginLeft:"15px"}} onChange={handleInput} placeholder="YY" name="expirationYear" className="form-control col-md-4 required" />
                        <div className="text-danger"></div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" placeholder="" name="ccv" onChange={handleInput} className="form-control required" />
                        <div className="text-danger"></div>
                    </div>
                </div>
                <hr className="mb-4" />
                <input type="submit"className="btn btn-primary btn-lg btn-block" value="Pay Now!"/>
            </form>
        </div>

        </div>
      </div>
      <br/>
      <br/>
      <FooterL />
    </>
  );
}

export default Payment;
