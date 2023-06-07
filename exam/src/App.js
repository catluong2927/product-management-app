import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductDelete from "./components/ProductDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path={`/products/:id`} element={<ProductDetail />} />
        <Route path={"/products/add"} element={<ProductAdd />} />
        <Route path={`/products/edit/:id`} element={<ProductEdit />} />
        <Route path={`/products/delete/:id`} element={<ProductDelete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;