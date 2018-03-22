export default (state = {
  packages: [],
  loader: false,
  errorMessage: "",
  promoCode: "",
  selectedPackage: null,
}, action) => {
  switch (action.type) {
    case "GET_PACKAGES_PENDING": {
      return {...state, loader: true}
    }
    case "GET_PACKAGES_SUCCESS": {
      return {...state, packages: action.payload.packages, loader: false}
    }
    case "GET_PACKAGES_FAILED": {
      return {...state, errorMessage: action.payload, loader: false}
    }
    case "SET_PROMO_CODE": {
      return {...state, promoCode: action.payload}
    }
    case "SET_CUSTOM_PRICE": {
      return {...state, customPrice: action.payload, amount: action.payload}
    }
    case "SELECT_PACKAGE": {
      return {...state, selectedPackage: action.payload, amount: action.payload.amount}
    }
    default: {
      return state;
    }
  }
}