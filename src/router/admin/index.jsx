import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/admin";
import { Dashboard } from "../../pages";
import AddCategory from "../../pages/admin/AddCategory";
import CategoryDetails from "../../pages/admin/CategoryDetails";
import CategoryList from "../../pages/admin/CategoryList";
import ProductList from "../../pages/admin/ProductList";
import AddProduct from "../../pages/admin/AddProduct";
import ProductDetail from "../../pages/admin/ProductDetail";
import OrderList from "../../pages/admin/OrderList";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="list" element={<CategoryList />} />
        <Route path="add-list" element={<AddCategory />} />
        <Route path="add-list/:categoryId" element={<CategoryDetails />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="add-product/:productId" element={<ProductDetail />} />
        <Route path="order-list" element={<OrderList />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
