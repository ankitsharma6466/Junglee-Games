import React, { Component } from 'react';
import './payment.css'
import {getPaymentOptions, selectOption, setNetbankingDetails, makePayment, resetState} from './actions'
import IconSelected from 'react-icons/lib/md/check-circle';
import IconUnselected from 'react-icons/lib/md/panorama-fish-eye';
import IconCard from 'react-icons/lib/md/credit-card';
import CommonUtils from '../../utils/commonUtils';

/**
 * Lists all the payment options available
 */
export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.onNetBankingMainChange = this.onNetBankingMainChange.bind(this);
    this.onNetBankingOtherChange = this.onNetBankingOtherChange.bind(this);
    this.onOptionSelected = this.onOptionSelected.bind(this);
    
    this.onCardNumberChange = this.onCardNumberChange.bind(this);
    this.onCardMonthChange = this.onCardMonthChange.bind(this);
    this.onCardYearChange = this.onCardYearChange.bind(this);
    this.onCardCvvChange = this.onCardCvvChange.bind(this);
    this.onCardNameChange = this.onCardNameChange.bind(this);
    this.onPayNowClick = this.onPayNowClick.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(getPaymentOptions());
  }
  
  onOptionSelected(option) {
    this.props.dispatch(selectOption(option));
  }
  
  onNetBankingMainChange(option) {
    this.props.dispatch(setNetbankingDetails({
      optionId: `${option.id}`,
      type: "main"
    }));
  }
  
  onNetBankingOtherChange(e) {
    this.props.dispatch(setNetbankingDetails({
      optionId: e.target.value,
      type: "other"
    }));
  }
  
  onCardNumberChange(e) {
    this.cardNumber = e.target.value;
  }
  
  onCardMonthChange(e) {
    this.cardMonth = e.target.value;
  }
  
  onCardYearChange(e) {
    this.cardYear = e.target.value;
  }
  
  onCardCvvChange(e) {
    this.cardCvv = e.target.value;
  }
  
  onCardNameChange(e) {
    this.cardName = e.target.value;
  }
  
  validateCardDetails() {
    let valid = true;
  
    if(!this.cardNumber || !(this.cardNumber.length === 16 || this.cardNumber.length === 20)) valid = false;
  
    if(!this.cardMonth || this.cardMonth < 1 || this.cardMonth > 12) valid = false;
  
    if(!this.cardYear || this.cardYear.length !== 2 || this.cardYear < 0 || this.cardYear > 30) valid = false;
  
    if(!this.cardCvv || this.cardCvv.length < 3 || this.cardCvv.length > 4) valid = false;
  
    if(!this.cardName) valid = false;
    
    return valid;
  }
  
  onPayNowClick() {
    
    //get selected Option
    console.log(this.props.selectedOption);
  
    if(this.props.selectedOption.type === "NET_BANKING") {
      //check for net banking details
      
      if(this.props.selectedNetBankingId && this.props.selectedNetBankingId > 0){
        
        let data = {
          packageId: this.props.selectedPackage.id,
          paymentOptionId: this.props.selectedNetBankingId ,
          amount: this.props.amount
        };
        this.props.dispatch(makePayment(data));
        
      } else {
        //show error
        alert("Please select a bank to continue");
      }
    }
    
    if(this.props.selectedOption.type === "CARD") {
      
      if(this.validateCardDetails()) {
        
        let data = {
          packageId: this.props.selectedPackage.id,
          paymentOptionId: this.props.selectedNetBankingId ,
          amount: this.props.amount
        };
        this.props.dispatch(makePayment(data));
        
      } else {
        alert("Invalid card details!! Please check..")
      }
    }
  }
  
  renderOptionsList() {
    if(this.props.paymentOptions) {
      
      let selectedOption = this.props.selectedOption;
  
      return this.props.paymentOptions.map((option, index) => {
        
        let classname = "option";
        if(selectedOption.id === option.id) classname += " active";
        
        return (
          <div key={index} className={classname} onClick={() => this.onOptionSelected(option)}>
            {option.title}
          </div>
        );
      });
    }
  }
  
  renderOptionDetails(){
    
    if(this.props.selectedOption) {
      
      let option = this.props.selectedOption;
      let render;
      
      if(option.type === "CARD" && option.enabled){
        
        let allowedTypes = option.allowed_types.map(type => `${type}, `);
        
        render = (
          <div className="payment-card">
            <div className="accepted">Accepts: {allowedTypes}</div>
            <label>Card Number</label>
            <input className="input"
                   type="number"
                   placeholder="Enter Card Number"
                   onChange={this.onCardNumberChange}/>
            <div className="row">
              <div className="col m8">
                <label>Expiry</label>
                <div className="row">
                  <div className="col m7">
                    <input className="input" type="number" placeholder="MM" onChange={this.onCardMonthChange}/>
                  </div>
                  <div className="col m7">
                    <input className="input" type="number" placeholder="YY" onChange={this.onCardYearChange}/>
                  </div>
                </div>
              </div>
              <div className="col m2"/>
              <div className="col m5">
                <label>CVV</label>
                <input className="input" type="number" placeholder="CVV" onChange={this.onCardCvvChange}/>
              </div>
            </div>
    
            <label>Card Holders Name</label>
            <input className="input" type="text" placeholder="Name" onChange={this.onCardNameChange}/>
  
            <div className="action">
              <div className="button" onClick={this.onPayNowClick}>Pay Now</div>
            </div>
          </div>
        );
        
      } else if(option.type === "NET_BANKING" && option.enabled){
        
        let options = option.options;
        let selectedNetBankingId = parseInt(this.props.selectedNetBankingId);
        
        let mains = options.main.map((item, index) => {
          
          let selectedState;
          
          if(selectedNetBankingId === item.id){
            selectedState = <IconSelected size={26} style={{verticalAlign: 'top', marginLeft: 10, display: 'inline'}}/>;
          } else {
            selectedState = <IconUnselected size={26} style={{verticalAlign: 'top', marginLeft: 10, display: 'inline'}}/>;
          }
          
          return (
            <div key={index} className="col m4">
              <div className="option" onClick={() => this.onNetBankingMainChange(item)}>
                <div className="image">
                  <img src={item.icon}/>
                </div>
                {selectedState}
              </div>
            </div>
          )
        });
  
        let others = options.other.map((item, index) => {
          return (<option key={index} value={item.id}>{item.title}</option>);
        });
        
        render = (
          <div className="net-banking">
    
            <label>Select Bank</label>
            <div className="row preferred">
              {mains}
            </div>
    
            <label>Or Select Other Bank</label>
    
            <select onChange={this.onNetBankingOtherChange} value={selectedNetBankingId}>
              <option value={-1}>--Select Bank--</option>
              {others}
            </select>
  
            <div className="action">
              <div className="button" onClick={this.onPayNowClick}>Pay Now</div>
            </div>
          </div>
        );
      } else {
        //show nothing
        
        render = (
          <div className="option-disabled">
            <div className="msg">{option.title} has temporarily been disabled. Please try again later or check out with other payment options.</div>
          </div>
        );
      }
      
      return render;
    }
  }
  
  render() {
    
    let amount;
  
    if(this.props.selectedPackage){
      if(this.props.selectedPackage.type === "USER_DEFINED") {
        amount = this.props.customPrice
      } else {
        amount = this.props.selectedPackage.amount
      }
    }
    
    if(this.props.paymentSuccessful) {
      this.props.dispatch(resetState());
      this.props.history.replace("/success");
    }
    
    
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
              
              <div className="amount">Amount: <span className="value">{CommonUtils.getFormattedAmount(amount)}</span></div>
              
              <div className="content">
                <div className="options">
                  <div className="list">
                    {this.renderOptionsList()}
                  </div>
                  <div className="details">
                    {this.renderOptionDetails()}
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