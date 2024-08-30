import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ModalPopup({ show, onHide, onSubmit, productid, productname }) {
  const [schoolName, setSchoolName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [designation, setDesignation] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = {};

    if (!schoolName.trim()) {
      validationErrors.schoolName = "School Name is required";
    }
    if (!contactPersonName.trim()) {
      validationErrors.contactPersonName = "Contact Person Name is required";
    }
    if (!designation.trim()) {
      validationErrors.designation = "Designation is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(); // Call the passed onSubmit function
      // Reset form
      setSchoolName("");
      setContactPersonName("");
      setDesignation("");
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="enquiry_product_model_popup"
    >
      <form>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Product Name: <span>{productname}</span>
          </p>
          <div>
            <div className="mb-3">
              <label>
                School Name <sup className="mandatory_symbol">*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter School Name"
                className="form-label"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                style={{ width: "100%" }}
                autoFocus
              />
              {errors.schoolName && (
                <span style={{ fontSize: "12px", color: "red" }}>
                  {errors.schoolName}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label>
                Contact Person Name <sup className="mandatory_symbol">*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter Contact Person Name"
                className="form-label"
                value={contactPersonName}
                onChange={(e) => setContactPersonName(e.target.value)}
                style={{ width: "100%" }}
                autoFocus
              />
              {errors.contactPersonName && (
                <span style={{ fontSize: "12px", color: "red" }}>
                  {errors.contactPersonName}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label>
                Designation <sup className="mandatory_symbol">*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter Designation"
                className="form-label"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                style={{ width: "100%" }}
                autoFocus
              />
              {errors.designation && (
                <span style={{ fontSize: "12px", color: "red" }}>
                  {errors.designation}
                </span>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn_2" onClick={onHide} type="button">
            Close
          </button>
          <button className="btn_1" onClick={handleSubmit} type="button">
            Submit
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalPopup;
