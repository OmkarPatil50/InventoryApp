import { useEffect, useReducer } from "react";
import { AppContext } from "..";
import { inventoryData } from "../Data/Data";

export function AppContextProvider({ children }) {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "UPDATE_DASHBOARD_DATA": {
        return { ...state, dashBoardData: action.payload };
      }
      case "UPDATE_FILTER_TYPE": {
        return { ...state, filterType: action.payload };
      }
      case "UPDATE_FILTERED_LIST": {
        return { ...state, filteredList: action.payload };
      }
      case "UPDATE_SHOW_LOW_STOCK": {
        return { ...state, isShowLowStock: action.payload };
      }
      case "UPDATE_SORT_TYPE": {
        return { ...state, sortType: action.payload.toLowerCase() };
      }
      case "ADD_NEW_PRODUCT": {
        return {
          ...state,
          productsList: [...state.productsList, action.payload]
        };
      }
      case "UPDATE_INDIVIDUAL_PRODUCT": {
        return { ...state, individualProduct: action.payload };
      }

      default:
        return state;
    }
  };

  const initialValue = {
    productsList: inventoryData,
    filteredList: inventoryData,
    dashBoardData: {
      totalStock: 0,
      totalDelivered: 0,
      totalLowStock: 0
    },
    filterType: "All Departments",
    isShowLowStock: false,
    sortType: "name",
    individualProduct: {
      id: "",
      department: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      sku: "",
      supplier: "",
      delivered: "",
      imageUrl: ""
    }
  };
  const initialize = localStorage.getItem("appState");

  const initializeState = initialize ? JSON.parse(initialize) : initialValue;

  const [state, dispatch] = useReducer(reducerFunction, initializeState);

  useEffect(() => {
    let data = state.productsList;
    if (state.filterType !== "All Departments") {
      data = data.filter(({ department }) => department === state.filterType);
    }
    if (state.filterType === "All Departments") {
      data = state.productsList;
    }
    if (state.isShowLowStock) {
      data = data.filter(({ stock }) => stock <= 10);
    }
    if (state.sortType === "name") {
      data = data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    if (state.sortType === "price") {
      data = data.sort((a, b) => a.price - b.price);
    }
    if (state.sortType === "stock") {
      data = data.sort((a, b) => a.stock - b.stock);
    }

    dispatch({ type: "UPDATE_FILTERED_LIST", payload: data });
  }, [
    state.filterType,
    state.isShowLowStock,
    state.sortType,
    state.productsList
  ]);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
