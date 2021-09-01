import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // ---------- اگه هیچ محصولی موجود نبود این نوشته رو نشون بده
  if (products.length < 1) {
    return <h5>Sorry, no Products matched your Search...</h5>;
  }

  // اگه gridView مون false بود در حالت لیست محصولاتمون رو نشون بده زیر هم دیگه
  if (grid_view === false) {
    return (
      // product ها رو به وسیله پراپز انتقال میدیم به این کامپوننت
      <ListView products={products} />
    );
  }

  // در انجا هم محصولات رو به وسیله پراپز انتقال میدیم به این کامپوننت
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
