import * as types from "../../constant/types";
import { add, remove, deleteItem } from "../../utils/addToCart";

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TO_CARD:
      return add(state, action.payload);
    case types.REMOVE_FROM_CARD:
      return remove(state, action.payload);
    case types.DELETE_CARD:
      return deleteItem(state, action.payload);
    default:
      return state;
  }
};
export { reducer };
