import React from 'react';
import { connect } from 'react-redux';
import Payment from './payment'

function mapStateToProps(state) {
  return {
    selectedPackage: state.home.selectedPackage,
    customPrice: state.home.customPrice,
  }
}

export default connect(mapStateToProps)(Payment);