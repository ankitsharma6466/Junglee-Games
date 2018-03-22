import Axios from "axios";

export const getPackages = () => {
  
  return dispatch => {
    dispatch({type: "GET_PACKAGES_PENDING"});
    
    Axios.get("http://localhost:8080/api/packages").then(response => {
      dispatch({type: "GET_PACKAGES_SUCCESS", payload: response.data});
    }).catch(error => {
      dispatch({type: "GET_PACKAGES_FAILED", payload: error.message});
    })
  }
};

export const setPromoCode = (code) => {
  return {
    type: "SET_PROMO_CODE",
    payload: code
  }
};

export const setCustomPrice = (amount) => {
  return {
    type: "SET_CUSTOM_PRICE",
    payload: amount
  }
};

export const selectPackage = (pack) => {
  return {
    type: "SELECT_PACKAGE",
    payload: pack
  }
};