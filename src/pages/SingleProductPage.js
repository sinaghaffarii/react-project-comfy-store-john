import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  // useParams برای id محصول بعد از اسلش گفته میشه
  const { id } = useParams();
  // تابع history به ما کمک میکنه تا به صفحه ای که دلمون میخواد کاربر رو انتقال بدیم که اینجا بعد از 3 ثانیه نمایش اررور کاربر رو به صفحه اصلی منتقل میکنه
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    // این همون مقداریه که در provider به value داده بودیم که از هوک خودمون میکشیمش بیرون
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    // اگر error  دریافت کردی بعد از 3 ثانیه برو به صفحه اصلی
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  // اگر محصول در حال لود شدنه کامپوننت لودینگ رو نشون بده
  if (loading) {
    return <Loading />;
  }
  // اگر با error مواجه شدی کامپوننت error رو نشون بده
  if (error) {
    return <Error />;
  }
  // این مقادیر رو از single product useProductContext کشیدیم بیرون
  const {
    id: sku,
    name,
    price,
    images,
    description,
    company,
    stock,
    reviews,
    stars
  } = product;


  return (
    <Wrapper>
    {/* product باعث میشه کامپوننت هیرو بفهمه یه صفحه قبل تر از خودش رو هم باید قبل از اسلش نشون بده */}
      <PageHero title={name} product />
      <div className="page section section-center">
        <Link to="/products" className="btn">
          BACK TO PRODUCTS
        </Link>
        <div className="product-center">
        {/* عکس هارو به وسیله پراپز پاس میدیم به کامپوننت عکس محصول */}
          <ProductImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}/>
            {/* format price for add $ and 000.00 */}
            <span className="price">{formatPrice(price)}</span>
            <p className="desc">{description}</p>
            <div className="info">
              <span>Available :</span>
              {/* اگر از محصول موجود بود این رو نشون بده وگرنه موجود نیست رو نشون بده */}
              <p>{stock > 0 ? "In Stock" : "Out Of Stock"}</p>
            </div>
            <div className="info">
              <span>SKU : </span>
              <p> {sku}</p>
            </div>
            <div className="info">
              <span>Brand :</span>
              <p> {company}</p>
            </div>
            <hr />
            {/* باز اگر محصول موجود بود اجازه اضافه کردن به سبد خرید رو بده */}
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
