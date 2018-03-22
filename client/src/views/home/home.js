import React, { Component } from 'react';
import './home.css'
import { getPackages, setCustomPrice, setPromoCode, selectPackage } from './actions'
import IconPrice from 'react-icons/lib/md/local-offer';
import IconSelected from 'react-icons/lib/md/check-circle';
import IconUnselected from 'react-icons/lib/md/panorama-fish-eye';
import CommonUtils from '../../utils/commonUtils';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.onContinueClick = this.onContinueClick.bind(this);
    this.onCustomPriceChange = this.onCustomPriceChange.bind(this);
    this.onPromoCodeChange = this.onPromoCodeChange.bind(this);
    this.onPackageSelected = this.onPackageSelected.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(getPackages());
  }
  
  onContinueClick() {
    if(!this.props.selectedPackage) {
      alert("Please select a package");
    } else if(this.props.selectedPackage.type === "USER_DEFINED" && (!this.props.customPrice || this.props.customPrice <= 0)){
      alert("Amount Required");
    } else {
      
      //proceed to payment options
      this.props.history.push("/payment");
    }
  }
  
  onPackageSelected(item) {
    console.log(item);
    this.props.dispatch(selectPackage(item));
  }
  
  onPromoCodeChange(e) {
    this.props.dispatch(setPromoCode(e.target.value));
  }
  
  onCustomPriceChange(e) {
    this.props.dispatch(setCustomPrice(e.target.value));
  }
  
  renderPackages() {
    
    let selectedPackage = this.props.selectedPackage.id;
    
    if(this.props.packages && this.props.packages.length > 0) {
  
      return this.props.packages.map((item, index) => {
        
        let selectStateIcon, isSelected;
  
        if(item.id === selectedPackage) {
          selectStateIcon = <IconSelected size={28} color="#ffffff"/>;
          isSelected = true;
        } else {
          selectStateIcon = <IconUnselected size={28} color="#cccccc"/>;
          isSelected = false;
        }
        
        if(item.type === "FIXED") {
          
          let bonusClass = "bonus";
          if(item.bonus <= 0) bonusClass+= " hidden";
          
          return (
            <div key={index} className="col m3">
              <div className="package" onClick={() => {
                this.onPackageSelected(item)
              }}>
                <div className={bonusClass}>
                  <div className="text">Bonus</div>
                  <div className="value">{CommonUtils.getFormattedAmount(item.bonus)}</div>
                </div>
                <div className="main">
                  <div className="value">{CommonUtils.getFormattedAmount(item.amount)}</div>
                  <div className="select">
                    {selectStateIcon}
                  </div>
                </div>
              </div>
            </div>
          );
        }
  
        if(item.type === "USER_DEFINED") {
          return (
            <div key={index} className="col m3">
              <div className="package" onClick={() => {
                this.onPackageSelected(item)
              }}>
                <div className="title">
                  Enter Amount
                </div>
                <div className="main">
                  <div>
                    <input className="input"
                           type="number"
                           placeholder="Enter Amount"
                           onChange={this.onCustomPriceChange} disabled={!isSelected}/>
                  </div>
                  <div className="select">
                    {selectStateIcon}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  }
  
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="block">
            <div className="title-main">Cashier</div>
            <div className="card">
              <div className="stepper">
                <div className="step">
                  <div className="text">
                    <IconPrice size={20} color="#6c1203"/>
                    <span>1. Enter Amount</span>
                  </div>
                </div>
              </div>
              <div className="content">
                
                <div className="row packages">
                  {this.renderPackages()}
                </div>
                
                <div className="actions">
                  <div className="promo">
                    <input className="input" type="text" placeholder="Promo Code (Optional)" onChange={this.onPromoCodeChange}/>
                  </div>
                  <div className="button" onClick={this.onContinueClick}>Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}