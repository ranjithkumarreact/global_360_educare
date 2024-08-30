import React, { useState } from "react";
import Breadcrump from "../breadcrump/Breadcrump";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiurl } from "../Constants";
function Loginpages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let formValid = true;
    let errors = {};

    if (!email) {
      errors.email = "Email is required.";
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
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
        const response = await axios.post(
          apiurl + "schoollogin",
          {
            email_id: email,
            password: password,
          }
        );

        setIsLoading(false);

        if (response.status === 200) {
          // Save user data in localStorage
          localStorage.setItem("email_id", response.data.data.email_id);
          localStorage.setItem("school_id", response.data.data.school_id);
          localStorage.setItem("school_name", response.data.data.school_name);

          // Navigate to the home page
          navigate("/");
          window.location.reload();
        } else {
          alert(
            response.data.message ||
              "Login failed: Please check your credentials."
          );
        }
      } catch (error) {
        console.error(
          "There was an error logging in:",
          error.response || error
        );
        setIsLoading(false);
        alert("Login failed: An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <Breadcrump subname="Login" />
      <section className="pt-5 pb-5 login_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-10 right_col">
              <div className="inner-box">
                <div className="heading_box mb-3">
                  <h4>Login</h4>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div>
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
                          <span style={{ color: "red", fontSize: "12px" }}>
                            {errors.email}
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
                          <span style={{ color: "red", fontSize: "12px" }}>
                            {errors.password}
                          </span>
                        )}
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <input type="checkbox" style={{ width: "auto" }} />
                            <label
                              style={{
                                fontSize: "12px",
                                width: "auto",
                                paddingLeft: "4px",
                              }}
                            >
                              Remember me
                            </label>
                          </div>
                          <span style={{ fontSize: "12px" }}>
                            Forget Password ?
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 text-center">
                        <button
                          type="submit"
                          className="btn_1"
                          disabled={isLoading}
                        >
                          {isLoading ? "Logging in..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loginpages;
