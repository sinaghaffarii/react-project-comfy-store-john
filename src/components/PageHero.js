import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper >
      {/* -----------------------------------برای قست بالایی سایت میباشد که آدرس سایت رو تا اون صفحه ای که توش قرار داریم رو نشون میده */}
      {/* و این title همون props هست که اسم اون صفحه مورد نظر رو نشون میده */}
      <h3 className="section-center">
        <Link to="/">Home</Link>
        {/* اگر props product رو در خودش داشت این عبارت رو هم اضافه کن */}
        {product && <Link to="/products">/ Products</Link>}
        / {title}

      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
