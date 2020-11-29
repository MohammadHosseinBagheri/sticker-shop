import * as types from "../../constant/types";

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TO_CARD:
      console.log(action.payload)
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
export { reducer };
