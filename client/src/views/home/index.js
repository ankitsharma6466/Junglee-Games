import React from 'react';
import { connect } from 'react-redux';
import Home from './home'

function mapStateToProps(state) {
  return {
    packages: state.home.packages,
    loader: state.home.loader,
    errorMessage: state.home.errorMessage,
    promoCode: state.home.promoCode,
    customPrice: state.home.customPrice,
    selectedPackage: state.home.selectedPackage,
  }
}

export default connect(mapStateToProps)(Home);