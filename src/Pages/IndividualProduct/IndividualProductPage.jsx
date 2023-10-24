import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../..";
import "./IndividualProductPage.css";

export function IndividualProductPage() {
  const { productID } = useParams();

  const { state, dispatch } = useContext(AppContext);

  const getIndividualProduct = () => {
    const product = state.productsList.find(({ id }) => id == productID);
    dispatch({ type: "UPDATE_INDIVIDUAL_PRODUCT", payload: product });
  };

  useEffect(() => {
    getIndividualProduct();
  }, [productID]);
  const {
    department,
    name,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl
  } = state?.individualProduct;
  return (
    <div className="main-page">
      <h3 className="page-heading">{name}</h3>
      <img src={imageUrl} alt="prod" className="individual-product-img" />
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Supplier: {supplier}</p>
      <p>Department: {department}</p>
      <p>SKU: {sku}</p>
      <p>Delivered: {delivered}</p>
      <p>Description: {description}</p>
    </div>
  );
}
