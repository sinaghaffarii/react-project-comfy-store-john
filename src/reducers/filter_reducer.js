import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  // ---------------------- ریختن محصولات به آرایه هایی که تو کانتکست تعریفشون کردیم
  if (action.type === LOAD_PRODUCTS) {
    // بالاترین قیمت محصول رو میگیریم و داخل از متغیر میریزیم
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      // بالاترین قیمت محصول که بالا در متغیر ریختیم اینجا به مقدار هایی که به فیلترز دادیم میریزیم
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  // --------- grid نمایش محصولات تو حالت
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  // ---------- list نمایش محصولات تو حالت
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  // --------- مقدار داخل seclect رو برامون استخراج میکنه
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    // ----- sort همون مقداری که از update sort گرفتیم
    const { sort, filtered_products } = state;
    // ------- همه ی محصولات رو میریزیم داخل tempProducts
    let tempProducts = [...filtered_products];
    // اگه برابر با این مقدار بود از ارزون ترین به گرون ترین نشون بده
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    // اگه با این مقداری برابر بود از گرون ترین به ارزون ترین نشون بده
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    // اگه با این مقدار رو برابر شد ترتیب رو از اولین حروف الفبا نشون بده  دقت شود که از localCompare استفاده شده
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    // اگه با این مقدار برابر شد از آخرین حروف الفبا نشون بده تا اولین
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    // حتما در بازگشت تابع هم باید متغیری که تعریف کردیم رو با محصولات match کنیم
    return { ...state, filtered_products: tempProducts };
  }
  // مقادیر وارد شده در اینپوت سرچ رو به کانتست وصل میکنه
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  // --------- FOR CATEGORIES FILTERS
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, price, color, shipping } = state.filters;
    let tempProducts = [...all_products];
    // FILTERING
    // SEARCH
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // CATEGORY
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    // COMPANY
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    // COLORS
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    // PRICE
    tempProducts = tempProducts.filter(product  => product.price <= price)
    // SHIPPING
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    // ---------------
    return { ...state, filtered_products: tempProducts };
  }
  // --------------------
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
