import React from "react";
import { Route, Routes } from "react-router-dom";
import { WishListProvider } from "../../context/wishlist/WishListContext";
import UserLayout from "../../layouts/user";
import {
  AboutUs,
  Cart,
  Checkout,
  Contact,
  LandingPage,
  MyOrder,
  ProductDetail,
  Profile,
  Shop,
  WhishList,
} from "../../pages";
import { CartProvider } from "../../context/cart";

const UserRoute = () => {
  return (
    <>
    <CartProvider>
    <WishListProvider>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/whishlist" element={<WhishList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      </WishListProvider>
      </CartProvider>
    </>
  );
};

export default UserRoute;
