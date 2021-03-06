import * as actionTypes from "../actions/action";
const initialState = {
  result: [],
};
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({
          id: new Date(),
          value: action.result,
        }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.result.filter(
        (result) => result.id !== action.deleteResultId
      );
      return {
        ...state,
        result: updatedArray,
      };
    default:
      return state;
  }
};

export default resultReducer;
