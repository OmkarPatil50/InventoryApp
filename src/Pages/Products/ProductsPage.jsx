import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../..";
import "./ProductsPage.css";

export function ProductsPage() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="main-page">
      <div className="product-page-top-bar">
        <h2 className="page-heading">Products</h2>
        <select
          value={state.filterType}
          name="filter"
          className="select-tag"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_FILTER_TYPE",
              payload: event.target.value
            })
          }
        >
          <option>All Departments</option>
          <option>Kitchen</option>
          <option>Clothing</option>
          <option>Toys</option>
        </select>
        <label htmlFor="checkbox" className="checkbox-top-bar">
          <input
            type="checkbox"
            onChange={(event) =>
              dispatch({
                type: "UPDATE_SHOW_LOW_STOCK",
                payload: event.target.checked
              })
            }
          />
          Low Stock Items
        </label>
        <select
          value={
            state.sortType.charAt(0).toUpperCase() + state.sortType.slice(1)
          }
          className="select-tag"
          name="sort"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_SORT_TYPE",
              payload: event.target.value
            })
          }
        >
          <option>Name</option>
          <option>Price</option>
          <option>Stock</option>
        </select>
        <Link to="/new">
          <button className="btn-new">New</button>
        </Link>
      </div>
      <table className="table-products">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {state.filteredList.map((product) => {
            const {
              id,
              name,
              description,
              price,
              stock,
              supplier,
              imageUrl
            } = product;
            return (
              <tr key={id}>
                <td>
                  <img
                    src={imageUrl}
                    alt="product"
                    className="products-page-img"
                  />
                </td>
                <td>
                  <Link className="link product-name" to={`/products/${id}`}>
                    {name}
                  </Link>
                </td>
                <td>{description}</td>
                <td>${price}</td>
                <td>{stock}</td>
                <td>{supplier}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
