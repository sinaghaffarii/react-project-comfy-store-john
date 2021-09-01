import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  // ------------- for show products
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  // -------------- for fetching products
  filtered_products: [],
  all_products: [],
  // ------------ for sort products (GridView or ListView)
  grid_view: true,
  sort: "lowest-price",
};

// ------------- Create Context
const FilterContext = React.createContext();

// ------------------ Create Provider for Context
export const FilterProvider = ({ children }) => {
  //  --------------- گرفتن محصولات از کانتکس قبلی
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // -------------- اضافه کردن محصولات به اکشن جدید به این صورت
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // مخصولات رو به این صورت با reducer match میکنیم
  useEffect(() => {
    dispatch({type: SORT_PRODUCTS})
  }, [products , state.sort])


// ------------- SHOW PRODUCTS GRID
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  // ---------- SHOW PRODUCTS LIST
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  // ----------------- مقدار داخل SELECT OPTIONS رو برامون استخراج میکنه
  const updateSort = (e) => {
    // for demonstration نمایش
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({type: UPDATE_SORT , payload: value})
  };

 

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
// -------------------- Create Hooks Context
export const useFilterContext = () => {
  return useContext(FilterContext);
};
