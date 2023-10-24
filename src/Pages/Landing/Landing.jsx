import { useContext, useEffect } from "react";
import { AppContext } from "../..";

import "./Landing.css";

export function Landing() {
  const { state, dispatch } = useContext(AppContext);

  const getDashboardData = () => {
    const totalStock = state.productsList.reduce((acc, curr) => {
      return Number(acc) + Number(curr.stock);
    }, 0);
    const totalDelivered = state.productsList.reduce((acc, curr) => {
      return Number(acc) + Number(curr.delivered);
    }, 0);
    const totalLowStock = state.productsList.reduce((acc, curr) => {
      return curr.stock <= 10 ? (acc = Number(acc) + 1) : acc;
    }, 0);

    dispatch({
      type: "UPDATE_DASHBOARD_DATA",
      payload: { totalStock, totalDelivered, totalLowStock }
    });
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="main-page">
      <div className="sub-page">
        <div className="dashboard-card">
          <h3 className="dashboard-card-count-total">
            {state.dashBoardData.totalStock}
          </h3>
          <h3 className="dashboard-card-heading">Total Stock</h3>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-card-count-delivered">
            {state.dashBoardData.totalDelivered}
          </h3>
          <h3 className="dashboard-card-heading">Total Delivered</h3>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-card-count-low">
            {state.dashBoardData.totalLowStock}
          </h3>
          <h3 className="dashboard-card-heading">Low Stock Items</h3>
        </div>
      </div>
    </div>
  );
}
