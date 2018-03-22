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

export const resetState = () => {
  return {
    type: "RESET_STATE"
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

export const makePayment = (details) => {
  
  return dispatch => {
    
    dispatch({type: "MAKE_PAYMENT_PENDING"});
    
    Axios.post("http://localhost:8080/api/makePayment", details).then(response => {
      dispatch({type: "MAKE_PAYMENT_SUCCESS", payload: response.data});
    }).catch(error => {
      dispatch({type: "MAKE_PAYMENT_FAILED", payload: error.message});
    })
  };
  
  return {
    type: "MAKE_PAYMENT_PENDING",
    payload: details
  }
};