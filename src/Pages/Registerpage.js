import React, { useState } from "react";
import Breadcrump from "../breadcrump/Breadcrump";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiurl } from "../Constants";

function Registerpage() {
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let formValid = true;
    let errors = {};

    if (!schoolName) {
      errors.schoolName = "School Name is required.";
      formValid = false;
    }

    if (!email) {
      errors.email = "Email ID is required.";
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email ID is invalid.";
      formValid = false;
    }

    if (!mobileNumber) {
      errors.mobileNumber = "Mobile Number is required.";
      formValid = false;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = "Mobile Number must be 10 digits.";
      formValid = false;
    }

    if (!password) {
      errors.password = "Password is required.";
      formValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      formValid = false;
    }

    setErrors(errors);
    return formValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post(apiurl + "schoolregister", {
          school_name: schoolName,
          email_id: email,
          password: password,
          contact_no: mobileNumber,
        });
        setIsLoading(false);

        if (response.status === 200) {
          // Handle success - navigate or show success message
          navigate("/login");
        } else {
          // Handle errors based on response content
          alert("Registration failed: " + response.data.message);
        }
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status === 400) {
          // Handle specific error from the server
          if (error.response.data.message.includes("Email already exists")) {
            alert(
              "The email address is already registered. Please use a different email."
            );
          } else {
            // Generic error message
            alert("Registration failed: " + error.response.data.message);
          }
        } else {
          // Handle network or other unexpected errors
          alert("An unexpected error occurred. Please try again later.");
        }
      }
    }
  };

  return (
    <div>
      <Breadcrump subname="Register" />
      <section className="pt-5 pb-5 register_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-10 right_col">
              <div className="inner-box">
                <div className="heading_box mb-3">
                  <h4>Register</h4>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="mb-2">
                        School Name <sup className="mandatory_symbol">*</sup>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter School Name"
                        style={{ width: "100%" }}
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                      />
                      {errors.schoolName && (
                        <span className="error-text">{errors.schoolName}</span>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="mb-2">
                        Email ID <sup className="mandatory_symbol">*</sup>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Email ID"
                        style={{ width: "100%" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                      />
                      {errors.email && (
                        <span className="error-text">{errors.email}</span>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="mb-2">
                        Mobile Number <sup className="mandatory_symbol">*</sup>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        style={{ width: "100%" }}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        autoFocus
                      />
                      {errors.mobileNumber && (
                        <span className="error-text">
                          {errors.mobileNumber}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="mb-2">
                        Password <sup className="mandatory_symbol">*</sup>
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        style={{ width: "100%" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                      />
                      {errors.password && (
                        <span className="error-text">{errors.password}</span>
                      )}
                    </div>
                    <div className="mb-3 text-center">
                      <button
                        type="submit"
                        className="btn_1"
                        disabled={isLoading}
                      >
                        {isLoading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                  <p style={{ fontSize: "14px" }} className="text-center">
                    Already have an Account?{" "}
                    <Link to="/login" style={{ color: "#0db1b3" }}>
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registerpage;
