import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  // give Reducers
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  // اگر در حال لود شدن بود این کامپوننت رو نشون بده
  if (loading) {
    return <Loading />;
  }
  // اگر error  برگردوند این کامپوننت رو نشون بده
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="title">
          <h3>featured products</h3>
          <div className="underline"></div>
        </div>
      </div>
      <div className="section-center featured">
        {/* slice برای اینه که بگین چند تا آیتم رو در صفحه مورد نظر نشون بده */}
        {/* key رو باید بر اساس id خود محصول تعریف کنیم */}
        {/* و باید آرگومان map رو به صورت spreaoprator قرار بدیم تا هر چیزی که داره رو نشون بده */}
        {featured.slice(0, 3).map((product) => {
          return <Product key={`/products/${product.id}`} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
