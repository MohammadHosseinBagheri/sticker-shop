import { createContext, useContext, useState } from "react";

export const CategoryState = createContext();
export const CategoryDispatch = createContext();

const CategoryProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState("");
  return (
    <CategoryState.Provider value={state}>
      <CategoryDispatch.Provider value={setState}>
        {children}
      </CategoryDispatch.Provider>
    </CategoryState.Provider>
  );
};

export const useCategoryState = () => useContext(CategoryState);
export const useCategoryDispatch = () => useContext(CategoryDispatch);
export const useCategoryAction = () => {
  const dispatch = useCategoryDispatch();
  const setDate = (data) => {
    dispatch(data);
  };
  return setDate;
};

export default CategoryProvider;
