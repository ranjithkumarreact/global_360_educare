import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faKey,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import { apiurl } from "../../Constants";
const Account = () => {
  const navigate = useNavigate();

  const useremail = localStorage.getItem("email_id");
  const school_name = localStorage.getItem("school_name");
  const school_id = localStorage.getItem("school_id");

  const [oldPassword, setOldpassword] = useState("");
  const [newPassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  console.log(oldPassword);
  console.log(newPassword);
  console.log(confirmPassword);

  if (!useremail) {
    navigate("/login");
    return null;
  }

  const firstLetter = useremail.charAt(0).toUpperCase();

  const Logout = () => {
    localStorage.removeItem("email_id");
    localStorage.removeItem("school_id");
    localStorage.removeItem("school_name");
    navigate("/");
  };

  const validatePasswords = () => {
    let errors = {};

    if (!oldPassword) {
      errors.oldPassword = "Current password is required.";
    }

    if (!newPassword) {
      errors.newPassword = "New password is required.";
    } else if (newPassword.length < 8) {
      errors.newPassword = "New password must be at least 8 characters long.";
    }

    if (newPassword !== confirmPassword) {
      errors.confirmPassword = "New password and confirmation do not match.";
    }

    return errors;
  };

  const handleChangepassword = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validatePasswords();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post(
        apiurl + "changepassword_school",
        {
          school_id: school_id,
          oldpassword: oldPassword,
          newpassword: newPassword,
        }
      );
      navigate(0);
    } catch (error) {
      console.log(error);
      // Optionally handle submission error
    }
  };

  return (
    <section className="account-page-section pt-40 pb-40">
      <div className="container">
        <Tabs>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 left_col">
              <div className="inner-box">
                <TabList>
                  <li>
                    <div className="user-profile">
                      <div className="user_profile_img">
                        <div className="avatar_img">{firstLetter}</div>
                      </div>
                      <span className="user-profile-1">
                        <span>{useremail}</span>
                      </span>
                    </div>
                  </li>
                  <Tab>
                    <FontAwesomeIcon icon={faSliders} /> Overview
                  </Tab>
                  <Tab>
                    <FontAwesomeIcon icon={faKey} /> Change Password
                  </Tab>
                  <Tab onClick={Logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Logout
                  </Tab>
                </TabList>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 right_col">
              <div className="inner_box">
                <TabPanel>
                  <h4>
                    Hello &nbsp;
                    {school_name} !
                  </h4>
                  <p>
                    From your account dashboard, you can easily check & Enquiry
                    your Products and edit your password and account details.
                  </p>
                </TabPanel>

                <TabPanel>
                  <h4>Change Password</h4>
                  <div className="form_inner_box change_password mt-3">
                    <form
                      action="javascript:void(0);"
                      onSubmit={handleChangepassword}
                    >
                      <div className="mb-3">
                        <label>
                          Current password{" "}
                          <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="password"
                          placeholder="Current password"
                          value={oldPassword}
                          onChange={(e) => setOldpassword(e.target.value)}
                        />
                        {errors.oldPassword && (
                          <p className="error-text">{errors.oldPassword}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label>
                          New password <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="password"
                          placeholder="New password"
                          value={newPassword}
                          onChange={(e) => setNewpassword(e.target.value)}
                        />
                        {errors.newPassword && (
                          <p className="error-text">{errors.newPassword}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label>
                          Password Confirmation{" "}
                          <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="password"
                          placeholder="Password Confirmation"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && (
                          <p className="error-text">{errors.confirmPassword}</p>
                        )}
                      </div>
                      <div>
                        <button className="btn_1">Change Password</button>
                      </div>
                    </form>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Account;
