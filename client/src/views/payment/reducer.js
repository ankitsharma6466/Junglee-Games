import {TEST} from "./actions";

export default (state = {
  loader: false,
  errorMessage: "",
  selectedNetBankingId: -1
}, action) => {
  switch (action.type) {
    case "GET_PAYMENT_OPTIONS_PENDING": {
      return {...state, loader: true, errorMessage: ""}
    }
    case "GET_PAYMENT_OPTIONS_SUCCESS": {
      return {...state, paymentOptions: action.payload.options, loader: false, errorMessage: "", selectedOption: action.payload.options[0]}
    }
    case "GET_PAYMENT_OPTIONS_FAILED": {
      return {...state, loader: false, errorMessage: action.payload}
    }
    case "SET_SELECTED_OPTION": {
      return {...state, selectedOption: action.payload}
    }
    case "SET_NET_BANKING_DETAILS": {
      return {...state, selectedNetBankingId: action.payload.optionId, selectedNetBankingType: action.payload.type}
    }
    case "SET_CARD_DETAILS": {
      return {...state, selectedCardDetails: action.payload}
    }
    default: {
      return state;
    }
  }
}