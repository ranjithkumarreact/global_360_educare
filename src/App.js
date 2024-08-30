import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage";
import "./assets/css/template.css";
import "./assets/css/all.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/jquery.fancybox.min.css";
import "./assets/css/layerslider.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/category/classic.css";
import "./assets/css/category/cosmetic-store.css";
import "./assets/css/category/default.css";
import "./assets/css/category/electronic.css";
import "./assets/css/category/fatloss.css";
import "./assets/css/category/food-corner.css";
import "./assets/css/category/furniture-store.css";
import "./assets/css/category/grocery-store.css";
import "./assets/css/category/handicruft.css";
import "./assets/css/category/landing-page.css";
import "./assets/css/category/man-fashion.css";
import "./assets/css/category/minimal.css";
import "./assets/css/category/optical-shop.css";
import "./assets/css/category/pet-shop.css";
import "./assets/css/category/watches.css";
import "./assets/css/category/women-fashion.css";
import "./assets/css/Style.css";
import "./assets/css/responsive.css";

import ProductDetail from "./Pages/Productdetailpage";
import Myaccount from "./Pages/Myaccount";
import PrivacyPolicy from "./Components/privacy-policy/PrivacyPolicy";
import Categegorydetails from "./Pages/Categegorydetails";
import Registerpage from "./Pages/Registerpage";
import Loginpages from "./Pages/Loginpages";
import Pagenotfound from "./Pages/Pagenotfound";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// authUtils.js
export const isAuthenticated = () => {
  // Check if token exists in local storage
  return !!localStorage.getItem("school_id");
};

function App() {
  return (
    <>
      <BrowserRouter basename="/demo_react">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
              </>
            }
          />
          <Route
            path="/category_list/:id"
            element={
              <>
                <Categegorydetails />
              </>
            }
          />
          <Route
            path="/product_details/:id"
            element={
              <>
                <ProductDetail />
              </>
            }
          />

          <Route
            path="/my-account"
            element={
              isAuthenticated() ? <Myaccount /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/privacy-policy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Registerpage />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Loginpages />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Pagenotfound />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
