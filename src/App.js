import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
// ------------- اگر همه ی کامپوننت هارو داخلی index.js بریزیم دیگه نیاز نیست تک به تک فراخوانی کنیم ، مثل مثال زیر داخل پرانتز همشو میتونیم فراخوانی بکنیم
import {
  Home,
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        {/* --------- :id  برای اینه که وقتی روش کلیک شد نسبت به اون آیدی که داره بهمون نشون بده */}
        <Route exact path="/products/:id" children={<SingleProduct />} />
        {/* برای این که سبد خرید رو نشون بده بعد آی دی علامت سوال میذاریم */}
        <Route exact path="/cart:id?">
          <Cart />
        </Route>
        <Route exact path="/authwrapper">
          <AuthWrapper />
        </Route>
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
       
        {/* ستاره در مسیر دهی بابت این میباشد که هر جا صفحه ای رو پیدا نکرد این رو نشون بده */}
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
