import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../..";
import "./DepartmentsPage.css";

export function DepartmentsPage() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="main-page">
      <div className="sub-page">
        <div className="dashboard-card">
          <Link
            className="link"
            to="/products"
            onClick={() =>
              dispatch({
                type: "UPDATE_FILTER_TYPE",
                payload: "Kitchen"
              })
            }
          >
            <h3 className="dashboard-card-heading">Kitchen</h3>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link
            className="link"
            to="/products"
            onClick={() =>
              dispatch({
                type: "UPDATE_FILTER_TYPE",
                payload: "Clothing"
              })
            }
          >
            <h3 className="dashboard-card-heading">Clothing</h3>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link
            className="link"
            to="/products"
            onClick={() =>
              dispatch({
                type: "UPDATE_FILTER_TYPE",
                payload: "Toys"
              })
            }
          >
            <h3 className="dashboard-card-heading">Toys</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
