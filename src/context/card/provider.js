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

const usePrice = () => {
  var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  var arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];

  const fixNumbers = function (str) {
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };
  const state = useCardState();
  const price = state?.reduce((price, item) => {
    const slice1 = item.price.split("٫")[0];
    const slice2 = item.price.split("٫")[1];
    const mergeNumber = slice1 + slice2;
    return price + item.quantity * fixNumbers(mergeNumber.split(" ")[0]);
  }, 0);
  return price;
};

export { useCardDispatch, useCardState, useQuantity, usePrice };
