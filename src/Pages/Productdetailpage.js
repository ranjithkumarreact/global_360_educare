import React, { useEffect } from "react";
import Productfirstcomponent from "../Components/productdetail/Productfirstcomponent";
import Breadcrump from "../breadcrump/Breadcrump";
import RealatedProduct from "../Components/productdetail/RealatedProduct";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div>
      <Breadcrump subname="Product Details" />
      <Productfirstcomponent />
      <RealatedProduct />
    </div>
  );
};

export default ProductDetail;
