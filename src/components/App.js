import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Shops = lazy(() => import("../pages/Shops.jsx"));
const ShoppingCart = lazy(() => import("../pages/ShoppingCart.jsx"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Shops />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
