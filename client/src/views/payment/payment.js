import React, { Component } from 'react';
import './payment.css'
import {getPaymentOptions, selectOption, setCardDetails, setNetbankingDetails} from './actions'
import IconSelected from 'react-icons/lib/md/check-circle';
import IconUnselected from 'react-icons/lib/md/panorama-fish-eye';
import IconCard from 'react-icons/lib/md/credit-card';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.onNetBankingMainChange = this.onNetBankingMainChange.bind(this);
    this.onNetBankingOtherChange = this.onNetBankingOtherChange.bind(this);
    this.onOptionSelected = this.onOptionSelected.bind(this);
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
              <div className="col m2"/>
              <div className="col m5">
                <label>CVV</label>
                <input className="input" type="number" maxLength={20} placeholder="cvv"/>
              </div>
            </div>
    
            <label>Card Holders Name</label>
            <input className="input" type="text" maxLength={20} placeholder="Name"/>
  
            <div className="action">
              <div className="button">Pay Now</div>
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
            <div className="col m4">
              <div key={index} className="option" onClick={() => this.onNetBankingMainChange(item)}>
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
              <div className="button">Pay Now</div>
            </div>
          </div>
        );
      } else {
        //show nothing
      }
      
      return render;
    }
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