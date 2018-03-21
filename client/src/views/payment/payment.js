import React, { Component } from 'react';
import './payment.css'
import {showTestMessage} from './actions'

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
        {this.props.test}
      </div>
    );
  }
}