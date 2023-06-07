import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductEdit() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const {id} = useParams();
  const [product, setProduct] = useState({});


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
  
  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  }

  function editProduct() {
        axios
        .put(`${PRODUCT_MANAGEMENT_API}/products/${id}`, product)
        .then(res => {
        alert(
          `cập nhật ${JSON.stringify(
            res.data.name
          )} thành công!!!`
        );
        window.location.href = "/";
      })
      .catch(err => {
        throw err;
      });
  }

  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      <form >
        <div>
          <label hidden>Id</label>
          <input hidden readOnly name="id" value={product.id || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" id="formGroupExampleInput" name="name" value={product.name || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Giá(đ)</label>
          <input type="text" class="form-control" id="formGroupExampleInput" name="price" value={product.price || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Tồn kho</label>
          <input type="text" class="form-control" id="formGroupExampleInput" name="stock" value={product.stock || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Mô tả</label>
          <textarea type="text" class="form-control" id="formGroupExampleInput" name="description" value={product.description || ""} onChange={handleChange} />
        </div>
        <button class="btn btn-success" type="button" onClick={editProduct}>
          Cập nhật
        </button>&nbsp;
        <Link to="/"><button class="btn btn-danger">
          Hủy
        </button>
        </Link>
        
      </form>
    </div>
  );
}

export default ProductEdit;