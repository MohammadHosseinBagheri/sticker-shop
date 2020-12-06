import * as types from "../../constant/types";

const addToCartAction = (payload) => {
  return {
    type: types.ADD_TO_CARD,
    payload,
  };
};

const removeFromCardAction = (payload) => {
  return {
    type: types.REMOVE_FROM_CARD,
    payload,
  };
};

const deleteCardAction = (payload) => {
  return {
    type: types.DELETE_CARD,
    payload,
  };
};

export { addToCartAction, removeFromCardAction, deleteCardAction };
