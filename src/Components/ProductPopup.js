import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ProductPopup({ show, onHide, onSubmit }) {
  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [document, setDocument] = useState(null); // Change to handle file objects

  const handleFileChange = (e) => {
    // Get the selected file
    const file = e.target.files[0];
    if (file) {
      setDocument(file); // Set the file object in state
    }
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = {};

    if (!productname.trim()) {
      validationErrors.productname = "Product Name is required";
    }
    if (!description.trim()) {
      validationErrors.description = "Description Name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(); // Call the passed onSubmit function
      // Reset form
      setProductname("");
      setDescription("");
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
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-3">
              <label>
                Product Name <sup className="mandatory_symbol">*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter Product Name "
                className="form-label"
                value={productname}
                onChange={(e) => setProductname(e.target.value)}
                autoFocus
                style={{ width: "100%" }}
              />
              {errors.productname && (
                <span style={{ fontSize: "12px", color: "red" }}>
                  {errors.productname}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label>
                Description <sup className="mandatory_symbol">*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter Description"
                className="form-label"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoFocus
                style={{ width: "100%" }}
              />
              {errors.description && (
                <span style={{ fontSize: "12px", color: "red" }}>
                  {errors.description}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label>
                Upload Doc <sup className="mandatory_symbol">*</sup>
              </label>
              <input
                type="file"
                className="form-label"
                onChange={handleFileChange} // Handle file change
                style={{ width: "100%" }}
              />
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

export default ProductPopup;
