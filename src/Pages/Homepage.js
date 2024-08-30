import React, { useEffect } from "react";
import Banners from "../Components/Home/Banners";
import NewArrival from "../Components/Home/NewArrival";
import Whatwedo from "../Components/Home/Whatwedo";
import Category from "../Components/Home/Category";
import TopCategory from "../Components/Home/TopCategory";
import Bgimg from "../Components/Home/Bgimg";
import BrandSlider from "../Components/Home/BrandSlider";
import { useLocation } from "react-router-dom";

function HomeConnect() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <div>
      <Banners />
      <NewArrival />
      <Whatwedo />
      <Category />
      <TopCategory />
      <Bgimg />
      <BrandSlider />
    </div>
  );
}

export default HomeConnect;
