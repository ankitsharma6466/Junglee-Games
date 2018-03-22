import React from 'react';
import { connect } from 'react-redux';
import Success from './success'

function mapStateToProps(state) {
  return {
    amount: state.home.amount
  }
}

export default connect(mapStateToProps)(Success);