<div class="container" style="margin:2% .5%">
    <div class="py-5 text-center">
        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" class="d-block mx-auto mb-4"/>>
        <h2>Payment Portal</h2>
        <p class="lead">Quick, Single Payments</p>
    </div>
    <div class="row">
       {/* CHARGE DETAILS*/} 
        <div class="col-md-4 order-md-2 mb-4 background-light user-styling">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Charge Details</span>
                <small class="text-danger"> </small>
            </h4>
            <div id="listCharges"></div>
            {/*ADD CHARGE */}
            <h5 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Add Charge</span>
                <small class="text-danger"> </small>
            </h5>
            <form class="card p-2" action="#" id="dashboardAddChargeForm">
                <div class="list-group">
                    <div class="input-group-item d-flex justify-content-between lh-condensed">
                        <input type="hidden" name="_token" value="{!! csrf_token() !!}"/>
                        <input type="hidden" name="id" value="{{ date('His') }}" hidden/>
                        <input name="charge" type="text" placeholder="Charge Title" class="form-control"/>
                        <small class="text-danger"> </small>
                        <input name="description" type="description" placeholder="Brief description" class="form-control" novalidate/>
                        <small class="text-danger"> </small>
                        <input name="amount" type="number" min="1" step="any" placeholder="Amount" class="form-control"/>
                        <small class="text-danger"> </small>
                        <div class="input-group">
                            <button type="button" onclick="checkout.addCharge()" class="btn btn-primary">Add Charge</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


        <div class="col-md-8 order-md-1" id="formCard">
            <h4 class="mb-3">Billing Information</h4>
            <form name="formdata" class="needs-validation">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" id="firstName" placeholder="" class="form-control required" required value="{!! $user->name !!}" name="firstName"/>
                        <div class="text-danger"></div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" id="lastName" placeholder="" value="" class="form-control required" required name="lastName"/>
                        <div class="text-danger"></div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="you@example.com" class="form-control required" value="{!! $user->email !!}" name="email"/>
                    <div class="text-danger"></div>
                </div>
                <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" id="address" placeholder="1234 Main St" class="form-control required" name="address"/>
                    <div class="text-danger"></div>
                </div>
                <div class="mb-3">
                    <label for="address2">Address 2 <span class="text-muted">(Optional)</span>
                    </label>
                    <input type="text" id="address2" placeholder="Apartment or suite" class="form-control" name="address2"/>
                </div>
                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select id="country" class="form-control custom-select d-block w-100 required" name="country">
                            <option>United States</option>
                        </select>
                        <div class="text-danger"></div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select id="state" class="form-control custom-select d-block w-100 required" name="state">
                            <option>Texas</option>
                        </select>
                        <div class="text-danger"></div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="number" id="zip" placeholder="" class="form-control required" name="zip"/>
                        <div class="text-danger"></div>
                    </div>
                </div>
                <hr class="mb-4">
                <div class="custom-control custom-checkbox">
                    <small>OPTIONALLY, CHECK BOX TO CREATE AN ARGYLE ACCOUNT FOR THIS PERSON</small>
                    <br/>
                    <input type="checkbox" id="save-to-argyle" class="custom-control-input" />
                    <label for="save-to-argyle" class="custom-control-label">Create Argyle Account</label>
                </div>
                <hr class="mb-4">

                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" checked="checked" value="credit_card" class="custom-control-input" />
                        <label for="credit" class="custom-control-label">Credit card</label>
                    </div>
                    <div class="custom-control custom-radio hidden">
                        <input id="debit" name="paymentMethod" type="radio" value="debit_card" class="custom-control-input" />
                        <label for="debit" class="custom-control-label">Debit card</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class='card-wrapper'></div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" id="cc-name" placeholder="" name="cc-name" class="required form-control" />
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="text-danger"></div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" id="cc-number" placeholder="" name="cc-number" class="form-control required" />
                        <div class="text-danger"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" id="cc-expiration" placeholder="" name="cc-expiration" class="form-control required" />
                        <div class="text-danger"></div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" id="cc-cvv" placeholder="" class="form-control required" />
                        <div class="text-danger"></div>
                    </div>
                </div>
                <hr class="mb-4">
                <a class="btn btn-primary btn-lg btn-block" onclick="checkout.pay()">Pay Now</a>
            </form>
        </div>
    </div>
</div>







<CardReactFormContainer
container="card-wrapper"

formInputsNames={{number: 'CCnumber', expiry: 'CCexpiry', cvc: 'CCcvc', name: 'accountName'}}

initialValues= {{number: '', cvc: '', expiry: '', name: '' }}

classes={{valid: 'valid-input', invalid: 'invalid-input' }}

formatting={true} 
>

<form>
<label htmlFor="cc-name">Name on card</label>
                        <input type="text" id="cc-name" placeholder="" onChange={handleInput} name="accountName" className="required form-control" />
                        <small className="text-muted">Full name as displayed on card</small>  <input placeholder="Card number" type="text" name="CCnumber" />
  <input placeholder="MM/YY" type="text" name="CCexpiry" />
  <input placeholder="CVC" type="text" name="CCcvc" />
</form>

</CardReactFormContainer>