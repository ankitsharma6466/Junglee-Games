import React, { Component } from 'react';
import './payment.css'
import {showTestMessage} from './actions'
import IconSelected from 'react-icons/lib/md/check-circle';
import IconUnselected from 'react-icons/lib/md/panorama-fish-eye';
import IconCard from 'react-icons/lib/md/credit-card';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(showTestMessage("hello home"))
  }
  
  render() {
  
    return (
      <div className="payment">
        <div className="container">
          <div className="block">
            <div className="title-main">Cashier</div>
            <div className="card">
              
              <div className="stepper">
                <div className="step">
                  <div className="text">
                    <IconSelected size={20} color="#00bb00"/>
                    <span>1. Enter Amount</span>
                  </div>
                </div>
  
                <div className="step">
                  <div className="text">
                    <IconCard size={20} color="#6c1203"/>
                    <span>2. Choose Payment Method</span>
                  </div>
                </div>
              </div>
              
              <div className="content">
                <div className="options">
                  <div className="list">
                    <div className="option">
                      Credit Card
                    </div>
                    <div className="option active">
                      Debit Card
                    </div>
                    <div className="option">
                      Debit Card
                    </div>
                    <div className="option">
                      Debit Card
                    </div>
                  </div>
                  <div className="details">
                    
                    <div className="payment-card">
                      <div className="accepted">Accepts Amex, Master card</div>
                      <label>Card Number</label>
                      <input className="input" type="number" maxLength={20} placeholder="Enter Card Number"/>
                      
                      <div className="row">
                        <div className="col m8">
                          <label>Expiry</label>
                          <div className="row">
                            <div className="col m7">
                              <input className="input" type="number" maxLength={20} placeholder="Mon"/>
                            </div>
                            <div className="col m7">
                              <input className="input" type="number" maxLength={20} placeholder="Year"/>
                            </div>
                          </div>
                        </div>
                        <div className="col m2"></div>
                        <div className="col m5">
                          <label>CVV</label>
                          <input className="input" type="number" maxLength={20} placeholder="cvv"/>
                        </div>
                      </div>
                      
                      <label>Card Holders Name</label>
                      <input className="input" type="text" maxLength={20} placeholder="Name"/>
                    </div>
  
                    {/*<div className="net-banking">*/}
                    
                      {/*<label>Select Bank</label>*/}
                      {/*<div className="preferred">*/}
                        {/*<div className="option">*/}
                          {/*<img className="image" src="" alt=""/>*/}
                          {/*<IconUnselected size={26} style={{verticalAlign: 'top', marginTop: 8, marginLeft: 10}}/>*/}
                        {/*</div>*/}
                        {/**/}
                        {/*<div className="option">*/}
                          {/*<img className="image" src="" alt=""/>*/}
                          {/*<IconUnselected size={26} style={{verticalAlign: 'top', marginTop: 8, marginLeft: 10}}/>*/}
                        {/*</div>*/}
                        {/**/}
                        {/*<div className="option">*/}
                          {/*<img className="image" src="" alt=""/>*/}
                          {/*<IconUnselected size={26} style={{verticalAlign: 'top', marginTop: 8, marginLeft: 10}}/>*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    
                      {/*<label>Or Select Other Bank</label>*/}
                    
                      {/*<select>*/}
                        {/*<option value="test">Bank 1</option>*/}
                        {/*<option value="test">Bank 1</option>*/}
                        {/*<option value="test">Bank 1</option>*/}
                        {/*<option value="test">Bank 1</option>*/}
                        {/*<option value="test">Bank 1</option>*/}
                        {/*<option value="test">Bank 1</option>*/}
                        {/*<option value="test">Bank 1</option>*/}
                      {/*</select>*/}
                    {/*</div>*/}
                    
                    <div className="action">
                      <div className="button">Pay Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}