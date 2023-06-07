import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDelete() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`${PRODUCT_MANAGEMENT_API}/products/${id}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }, [id]);


  function removeProduct() {
    if (id) {
        axios
        .delete(`${PRODUCT_MANAGEMENT_API}/products/${id}`)
        .then(res => {
            alert(
                `xóa ${product.name} thành công!!!`
              );
              window.location.href = "/";
        })
        .catch(err => {
          throw err;
        });
    }
  }

  return (
    <div>
      <h1>Xóa sản phẩm</h1>
      <p><b>Tên:</b> {product.name}</p>
      <p><b>Giá:</b> {product.price}</p>
      <p><b>Tồn kho:</b> {product.stock}</p>
      <p><b>Mô tả:</b> {product.description}</p>
      <button class="btn btn-success" type="button" onClick={removeProduct}>
        Xóa
      </button>&nbsp;
      <Link to="/">
        <button class="btn btn-danger">Hủy</button>
      </Link>
    </div>
  );
}

export default ProductDelete;