import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AppContext } from "../..";
import "./NewProductPage.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function NewProductPage() {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    id: uuid(),
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: ""
  });

  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="form-page">
      <form className="new-product-form">
        <h3 className="page-heading">Add New Product</h3>
        <label htmlFor="Department">Department</label>
        <select
          className="select-tag"
          name="form-dept"
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              department: event.target.value
            }));
          }}
        >
          <option>All Departments</option>
          <option>Kitchen</option>
          <option>Clothing</option>
          <option>Toys</option>
        </select>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              name: event.target.value
            }));
          }}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              description: event.target.value
            }));
          }}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              price: event.target.value
            }));
          }}
        />
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              stock: event.target.value
            }));
          }}
        />
        <label htmlFor="sku">SKU</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              sku: event.target.value
            }));
          }}
        />
        <label htmlFor="supplier">Supplier</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              supplier: event.target.value
            }));
          }}
        />
        <label htmlFor="delivered">Delivered</label>
        <input
          type="number"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              delivered: event.target.value
            }));
          }}
        />
        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewProduct(() => ({
              ...newProduct,
              imageUrl: event.target.value
            }));
          }}
        />
        <button
          type="submit"
          className="new-form-btn"
          onClick={() => {
            if (
              newProduct.name &&
              newProduct.description &&
              newProduct.price &&
              newProduct.stock &&
              newProduct.sku &&
              newProduct.supplier &&
              newProduct.delivered &&
              newProduct.imageUrl
            ) {
              dispatch({ type: "ADD_NEW_PRODUCT", payload: newProduct });
              toast.success("Product Added Successfully!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored"
              });
              navigate("/products");
            }
          }}
        >
          Add Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
