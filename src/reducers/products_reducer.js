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

const products_reducer = (state, action) => {
  // با استفاده از اکشن هایی که نوشتیم و مقادیری که تعریف کردیم در پایین ردیوسر مخصوص خودش رو تعریف میکنیم
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isOpenSidebar: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isOpenSidebar: false };
  }

  // وقتی هنوز داده زو دریافت نکردی loading رو نشون بده
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  // وقتی داده رو با موفقیت دریافت کردی دیگه loading رو نشون نده
  // و روی داده ها فیلتر رو انجام بده هر کدوم featured = true بود رو نشون بده
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    // products رو که در context داره response.data رو دریافت میکنه برابر قرار بده با action.payload
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }

  // اگر پاسخی دریافت نشد loading رو متوقف کن و error رو نشون بده
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  //error   همیشه برای دریافت
  // از عبارت throw استفاده کن
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
