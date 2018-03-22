import React, { Component } from 'react';
import './success.css'
import { getPackages, setCustomPrice, setPromoCode, selectPackage } from './actions'
import IconSelected from 'react-icons/lib/md/check-circle';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  }
  
  render() {
    return (
      <div className="success">
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
                    <IconSelected size={20} color="#00bb00"/>
                    <span>2. Choose Payment Method</span>
                  </div>
                </div>
              </div>
              <div className="content">
              
                <div className="text">Your payment of amount 257 was successful</div>
                
                <div className="button">Add More Cash</div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}