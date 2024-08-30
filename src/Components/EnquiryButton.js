import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalPopup from "./ModalPopup";

function EnquiryButton({ classname, productid, productname }) {
  const [showModal, setShowModal] = useState(false);

  const Loggedin = localStorage.getItem("email_id");
  const navigate = useNavigate();

  const handleShowModal = () => {
    if (Loggedin) {
      setShowModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <button className={classname} onClick={handleShowModal}>
        Enquiry Now
      </button>

      <ModalPopup
        show={showModal}
        onHide={handleCloseModal}
        onSubmit={handleCloseModal}
        productid={productid}
        productname={productname}
      />
    </>
  );
}

export default EnquiryButton;
