import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/cardReducer";

export const CardContextState = createContext();
export const CardContextDispatch = createContext();

let INITIAL_STATE = [];

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <CardContextState.Provider value={state}>
      <CardContextDispatch.Provider value={dispatch}>
        {children}
      </CardContextDispatch.Provider>
    </CardContextState.Provider>
  );
};
export default CardProvider;

const useCardState = () => {
  return useContext(CardContextState);
};

const useCardDispatch = () => {
  return useContext(CardContextDispatch);
};
const useQuantity = () => {
  const state = useCardState();
  const quantity = state?.reduce(
    (total, accumulator) => total + accumulator.quantity,
    0
  );
  return quantity;
};

export { useCardDispatch, useCardState, useQuantity };
