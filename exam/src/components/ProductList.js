import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductList.css"

function ProductList() {
    const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${PRODUCT_MANAGEMENT_API}/products`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                throw err;
            });
    }, [products, id]);

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>#</th>
                        <th style={{textAlign: "center"}}>Tên sản phẩm</th>
                        <th style={{textAlign: "center"}}>Giá(đ)</th>
                        <th style={{textAlign: "center"}}>Tồn kho</th>
                        <th className="button button-creat" style={{textAlign: "center",padding:0}} colSpan={2}>
                        <Link to="/products/add">
                            <button style={{width:200,textAlign: "center"}} className="btn btn-primary" type="button">Thêm sản phẩm</button>
                        </Link>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id} </td>
                            <td><Link to={`/products/${product.id}`}>{product.name}</Link></td>
                            <td>{product.price} </td>   
                            <td>{product.stock} </td>   
                            <td  className="button button-update" style={{textAlign: "center",margin:0}}>
                                <Link to={`/products/edit/${product.id}`}><button class="btn btn-success" type="button">Cập nhật</button></Link> 
                            </td>
                            <td className="button button-delete" style={{textAlign: "center",margin:0}}>
                                <Link to={`/products/delete/${product.id}`}><button class="btn btn-danger" type="button">Xóa</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
}

export default ProductList;

