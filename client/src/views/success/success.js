import React, { Component } from 'react';
import './success.css'
import IconSelected from 'react-icons/lib/md/check-circle';
import CommonUtils from '../../utils/commonUtils';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.onAddMoreClick = this.onAddMoreClick.bind(this);
  }
  
  onAddMoreClick() {
    this.props.history.replace("/");
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
              
                <div className="text">Your payment of amount {CommonUtils.getFormattedAmount(this.props.amount)} was successful</div>
                
                <div className="button" onClick={this.onAddMoreClick}>Add More Cash</div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}