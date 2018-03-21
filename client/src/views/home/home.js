import React, { Component } from 'react';
import './home.css'
import {showTestMessage} from './actions'
import IconSelected from 'react-icons/lib/md/check-circle';
import IconUnselected from 'react-icons/lib/md/panorama-fish-eye';
import CommonUtils from '../../utils/commonUtils';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(showTestMessage("hello home"))
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
                    <IconSelected size={20} color="#00bb00"/>
                    <span>1. Enter Amount</span>
                  </div>
                </div>
  
                <div className="step">
                  <div className="text">
                    <IconSelected size={20} color="#00bb00"/>
                    <span>1. Enter Amount</span>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="row packages">
                  
                  <div className="col m3">
                    <div className="package">
                      <div className="bonus">
                        <div className="text">Bonus</div>
                        <div className="value">{CommonUtils.getFormattedAmount(1200)}</div>
                      </div>
                      <div className="main">
                        <div className="value">{CommonUtils.getFormattedAmount(2000)}</div>
                        <div className="select">
                          <IconUnselected size={28} color="#cccccc"/>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col m3">
                    <div className="package">
                      <div className="bonus">
                        <div className="text">Bonus</div>
                        <div className="value">{CommonUtils.getFormattedAmount(1200)}</div>
                      </div>
                      <div className="main">
                        <div className="value">{CommonUtils.getFormattedAmount(2000)}</div>
                        <div className="select">
                          <IconSelected size={28} color="#ffffff"/>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col m3">
                    <div className="package">
                      <div className="bonus">
                        <div className="text">Bonus</div>
                        <div className="value">{CommonUtils.getFormattedAmount(1200)}</div>
                      </div>
                      <div className="main">
                        <div className="value">{CommonUtils.getFormattedAmount(2000)}</div>
                        <div className="select">
                          <IconUnselected size={28} color="#cccccc"/>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col m3">
                    <div className="package">
                      <div className="bonus hidden">
                        <div className="text">Bonus</div>
                        <div className="value">{CommonUtils.getFormattedAmount(1200)}</div>
                      </div>
                      <div className="main">
                        <div className="value">{CommonUtils.getFormattedAmount(2000)}</div>
                        <div className="select">
                          <IconUnselected size={28} color="#cccccc"/>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="col m3">
                    <div className="package">
                      <div className="title">
                        Enter Amount
                      </div>
                      <div className="main">
                        <div>
                          <input className="input" type="number" placeholder="Enter Amount"/>
                        </div>
                        <div className="select">
                          <IconUnselected size={28} color="#cccccc"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <div className="promo">
                    <input className="input" type="text" placeholder="Promo Code (Optional)"/>
                  </div>
                  <div className="button">Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}