import React from "react";
import { useLocation } from "react-router-dom";
import Categorylists from "../Components/Categorylist/Categorylists";
import Relatedcategories from "../Components/Categorylist/Relatedcategories";
import Breadcrump from "../breadcrump/Breadcrump";
import { useEffect } from "react";
function Categegorydetails() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div>
      <Breadcrump subname="Categoty List" />
      <Categorylists />
      <Relatedcategories />
    </div>
  );
}

export default Categegorydetails;
