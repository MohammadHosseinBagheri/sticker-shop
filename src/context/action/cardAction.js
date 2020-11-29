import * as types from "../../constant/types";

const addToCartAction = (payload) => {
  return {
    type: types.ADD_TO_CARD,
    payload: payload,
  };
};

const removeFromCardAction = (payload) => {
  return {
    type: types.REMOVE_FROM_CARD,
    payload: payload,
  };
};

const deleteCardAction = (payload) => {
  return {
    type: types.DELETE_CARD,
  };
};

export { addToCartAction, removeFromCardAction, deleteCardAction };
