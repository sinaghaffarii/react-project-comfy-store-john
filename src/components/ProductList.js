import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // ---------- اگه هیچ محصولی موجود نبود این نوشته رو نشون بده
  if (products.length < 1) {
    return (
      <Wrapper>
        <h5>Sorry, no products matched your search...</h5>
      </Wrapper>
    );
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  h5 {
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
`;

export default ProductList;
