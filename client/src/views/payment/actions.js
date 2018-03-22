import Axios from "axios";

export const getPaymentOptions = () => {
  return dispatch => {
    
    dispatch({type: "GET_PAYMENT_OPTIONS_PENDING"});
  
    Axios.get("http://localhost:8080/api/paymentOptions").then(response => {
      dispatch({type: "GET_PAYMENT_OPTIONS_SUCCESS", payload: response.data});
    }).catch(error => {
      dispatch({type: "GET_PAYMENT_OPTIONS_FAILED", payload: error.message});
    })
  }
};

export const selectOption = (option) => {
  return {
    type: "SET_SELECTED_OPTION",
    payload: option
  }
};

export const setNetbankingDetails = (option) => {
  return {
    type: "SET_NET_BANKING_DETAILS",
    payload: option
  }
};

export const setCardDetails = (details) => {
  return {
    type: "SET_CARD_DETAILS",
    payload: details
  }
};