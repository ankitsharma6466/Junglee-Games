import React from 'react';
import { connect } from 'react-redux';
import Payment from './payment'

function mapStateToProps(state) {
  return {
    test: state.payment.test
  }
}

export default connect(mapStateToProps)(Payment);