import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const { id } = useParams();
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

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p><b>Tên:</b> {product.name}</p>
      <p><b>Giá:</b> {product.price}</p>
      <p><b>Tồn kho:</b> {product.stock}</p>
      <p><b>Mô tả:</b> {product.description}</p>
      <Link to="/">
        <button className="btn btn-primary" type="button">Danh sách</button>
      </Link>
    </div>
  );
}

export default ProductDetail;