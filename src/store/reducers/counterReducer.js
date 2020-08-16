import * as actionTypes from "../actions/action";
const initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.INCREMENT_ADD:
      return {
        ...state,
        count: state.count + action.value,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionTypes.DECREMENT_SUBSTRATION:
      return {
        ...state,
        count: state.count - action.value,
      };
    default:
      return state;
  }
};

export default reducer;
