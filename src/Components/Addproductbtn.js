import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductPopup from "./ProductPopup";

function Addproductbtn({ classname, productid, productname }) {
  const [showPopup, setShowpopup] = useState(false);

  const Loggedin = localStorage.getItem("email_id");
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowpopup(true);
  };

  const handleClosePopup = () => setShowpopup(false);

  return (
    <>
      <button className="btn_1 mx-3 mt-3" onClick={handleShowModal}>
        Add a Product
      </button>

      <ProductPopup
        show={showPopup}
        onHide={handleClosePopup}
        onSubmit={handleClosePopup}
      />
    </>
  );
}

export default Addproductbtn;
