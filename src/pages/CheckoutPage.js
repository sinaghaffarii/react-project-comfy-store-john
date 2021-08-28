import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main>
      {/* title props میباشد که برای دریافت داده ای که درون کامپوننت pageHero قراره نشون داده بشه مشخص میکنیم */}
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <h3 className="section">checkout page</h3>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
