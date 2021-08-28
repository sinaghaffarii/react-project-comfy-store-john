import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

// -------- مقدار هایی که ردیوسر و اکشن رو به هم وصل میکنه تا بتونیم داخل کامپوننت ها ازشون اسفاده کنیم
const initialState = {
  isOpenSidebar: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  // با اسفاده از یوز ردیوسر ، ردیوسر خودمون رو به اکشن وصل میکنیم و مقدار های تعریف شد ه ی خومون رو داخلش میریزیم و به وسیله دیس پتچ استخراجشون میکنیم
  const [state, dispatch] = useReducer(reducer, initialState);

  // برای باز شدم منوی سایدباریمون
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  // برای بسته شدم منوی سایدباریمون
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // اکشن گرفتن دیتا به وسیله ی اکسیوس از یو آر ال بک اند
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  // با هر بار رندر شدن اجرا میشه
  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    // با استفاده از کانتکست اکسن های نوشته شده رو به کامپوننت ارسال میکنیم و حتما باید مقادیر داخل ولیو ریخته شود
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
// با روش زیر و با استفاده از useContext ری اکت میتونیم از این کامپوننت hook استخراج کنیم
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
