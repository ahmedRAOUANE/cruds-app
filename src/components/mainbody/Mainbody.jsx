import { Routes, Route } from "react-router-dom";

import { Grid } from "@mui/material";

import Home from "../../pages/home/Home";
import Categories from "../../pages/categories/Categories";
import Products from "../../pages/products/Products";
import AddProduct from "../../pages/addProduct/AddProduct";

const Mainbody = () => {
  return (
    <div style={{ padding: "25px" }}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default Mainbody;
