import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Button } from "../UI/Button";
import { DUMMY_PRODUCTS } from "./Products";

export const ProductDetails = () => {
  const params = useParams();
  const productId = params.productId;
  const currentProduct = DUMMY_PRODUCTS.find(
    (product) => product.id === productId
  );
  if (!currentProduct) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <img src={currentProduct.image} alt={currentProduct.title} />
      <h1>{currentProduct.price}</h1>
      <Button></Button>
      {/* <Button>Next</Button> */}
    </div>
  );
};
