import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductAdd() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const [product, setProduct] = useState({});

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  }

  function addProduct() {
    axios
      .post(`${PRODUCT_MANAGEMENT_API}/products`, product)
      .then(res => {
        alert(
          `thêm ${JSON.stringify(
            res.data.name
          )} thành công`
        );
        window.location.href = "/";
      })
      .catch(err => {
        throw err;
      });
  }

  return (
    <div>
      <h1>Thêm sản phẩm</h1>
      <form>
        <div>
          <label for="exampleDataList" class="form-label">Tên sản phẩm</label>
          <input class="form-control" name="name" value={product.name || ""} onChange={handleChange} />
        </div>
        <div>
        <label for="exampleDataList" class="form-label">Giá</label>
          <input class="form-control" name="price" value={product.price || ""} onChange={handleChange} />
        </div>
        <div>
        <label for="exampleDataList" class="form-label">Tồn kho</label>
          <input class="form-control" name="stock" value={product.stock || ""} onChange={handleChange} />
        </div>
        <div>
        <label for="exampleDataList" class="form-label">Mô tả</label>
          <textarea class="form-control" name="description" value={product.description || ""} onChange={handleChange} />
        </div>
        <button class="btn btn-success" type="button" onClick={addProduct}>
          Thêm mới
        </button>&nbsp;
        <Link to="/">
            <button type="button" class="btn btn-danger">Hủy</button>
        </Link>
      </form>
    </div>
  );
}

export default ProductAdd;