import {TEST} from "./actions";

export default (state = {
  test: ""
}, action) => {
  switch (action.type) {
    case TEST: {
      return {...state, test: action.payload}
    }
    default: {
      return state;
    }
  }
}