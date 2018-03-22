import React from 'react';
import { connect } from 'react-redux';
import Payment from './payment'

function mapStateToProps(state) {
  return {
    selectedPackage: state.home.selectedPackage,
    customPrice: state.home.customPrice,
    amount: state.home.amount,
    loader: state.payment.loader,
    errorMessage: state.payment.errorMessage,
    paymentOptions: state.payment.paymentOptions,
    selectedOption: state.payment.selectedOption,
    selectedNetBankingId: state.payment.selectedNetBankingId,
    selectedNetBankingType: state.payment.selectedNetBankingType,
    selectedCardDetails: state.payment.selectedCardDetails,
    paymentSuccessful: state.payment.paymentSuccessful
  }
}

export default connect(mapStateToProps)(Payment);