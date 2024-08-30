import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faUser,
  faXmark,
  faBars,
  faRightToBracket,
  faRightFromBracket,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/new-images/global-360-logo-.png";
import { Link, useNavigate } from "react-router-dom";
import { apiurl } from "../../Constants";
import axios from "axios";
import SearchAPI from "../SearchAPI";

function Header() {
  const [menuitem, setMenuitem] = useState();

  const username = localStorage.getItem("school_name");
  const useremail = localStorage.getItem("email_id");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuitem = async () => {
      await axios
        .post(apiurl + "menucategories")
        .then((res) => {
          setMenuitem(res.data.records);
        })
        .catch((err) => {
          console.log(`The Error is ${err}`);
        });
    };
    fetchMenuitem();
  }, []);

  // const handleSearchsubmit = (e) => {
  //   e.preventDefault();

  //   if (productsresult.length > 0) {
  //     // Navigate to the first product's detail page
  //     navigate(`/product_details/${productsresult[0].product_id}`);
  //   } else if (categoriesresult.length > 0) {
  //     // Navigate to the first category's list page
  //     navigate(`/category_list/${categoriesresult[0].pro_category_id}`);
  //   } else {
  //     setNoresult("No results found.");
  //   }
  // };

  const [stickyclassName, setStickyclassName] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.getElementById("sidebar").style.opacity = "unset";
    document.getElementById("sidebar").style.left = "0";
  };
  const toggleclosebar = () => {
    document.getElementById("sidebar").style.opacity = "0";
    document.getElementById("sidebar").style.left = "-100%";
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 130
        ? setStickyclassName("sticky-nav")
        : setStickyclassName("");
    }
  };

  const Logout = () => {
    localStorage.removeItem("email_id");
    localStorage.removeItem("school_id");
    localStorage.removeItem("school_name");
    window.location.reload();
    navigate("/");
  };

  var loggedIn = localStorage.getItem("school_id");

  return (
    <div>
      <header className="ecommerce-header">
        <div className="top-header border-0 d-none d-lg-block py-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 sm-mx-none">
                <ul>
                  <li className="d-flex ms-auto align-items-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;&nbsp;{" "}
                    <a
                      href="javascript:void(0);"
                      style={{ textTransform: "lowercase" }}
                    >
                      global360educare@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 d-flex">
                <ul className="top-links d-flex ms-auto align-items-center">
                  <li className="profile-menu">
                    <Link to="/my-account" className="has-dropdown">
                      <FontAwesomeIcon icon={faUser} className="mx-2" />
                      {useremail ? `Welcome, ${username}` : "Account"}
                    </Link>
                    <ul className="dropdown" style={{ width: "200px" }}>
                      {!useremail ? (
                        <>
                          <li style={{ borderTop: "1px solid #fff" }}>
                            <Link to="/login">
                              <FontAwesomeIcon
                                icon={faRightToBracket}
                                style={{ marginRight: "10px" }}
                              />
                              Login
                            </Link>
                          </li>
                          <li style={{ borderTop: "1px solid #fff" }}>
                            <Link to="/register">
                              <FontAwesomeIcon
                                icon={faPencil}
                                style={{ marginRight: "10px" }}
                              />
                              Register
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li style={{ borderTop: "1px solid #fff" }}>
                            <button className="text-white" onClick={Logout}>
                              <Link>
                                <FontAwesomeIcon
                                  icon={faRightFromBracket}
                                  style={{ marginRight: "10px" }}
                                />{" "}
                                Logout
                              </Link>
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`middle-header d-none d-lg-block ${stickyclassName} `}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="h-100 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="nav-logo"
                      src={Logo}
                      alt="Image not found !"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <SearchAPI formclassname="search-line-shape" />
              </div>
              <div className="col-lg-4 account_col">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <ul className="top-links d-flex ms-auto align-items-center">
                    <li className="profile-menu">
                      <Link to="/my-account" className="has-dropdown">
                        <FontAwesomeIcon icon={faUser} className="mx-2" />
                        {useremail ? `Welcome, ${username}` : "Account"}
                      </Link>
                      <ul className="dropdown" style={{ width: "200px" }}>
                        {!useremail ? (
                          <>
                            <li style={{ borderTop: "1px solid #fff" }}>
                              <Link to="/login">
                                <FontAwesomeIcon
                                  icon={faRightToBracket}
                                  style={{ marginRight: "10px" }}
                                />
                                Login
                              </Link>
                            </li>
                            <li style={{ borderTop: "1px solid #fff" }}>
                              <Link to="/register">
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  style={{ marginRight: "10px" }}
                                />
                                Register
                              </Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li style={{ borderTop: "1px solid #fff" }}>
                              <button className="text-white">
                                <Link>
                                  <FontAwesomeIcon
                                    icon={faRightFromBracket}
                                    style={{ marginRight: "10px" }}
                                  />{" "}
                                  Logout
                                </Link>
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav py-3 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg nav-dark nav-primary-hover nav-line-active">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="navbar-toggler-icon flaticon-menu-2 flat-small text-dark"></i>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/">
                          Home
                        </Link>
                      </li>
                      {menuitem !== undefined &&
                        menuitem.length > 0 &&
                        menuitem.map((item) => {
                          return (
                            <>
                              <li className="nav-item dropdown">
                                <Link
                                  className="nav-link"
                                  to={`/category_list/${item.pro_category_id}`}
                                >
                                  {item.category_name}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-sticky bg-white py-10 mobile-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="d-flex align-items-center h-100 md-py-10">
                <Link className="navbar-brand" to="/">
                  <img
                    className="nav-logo"
                    src={Logo}
                    alt="Image not found !"
                  />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="nav-leftpush-overlay">
                <nav
                  className="navbar navbar-expand-lg nav-general nav-primary-hover"
                  style={{ justifyContent: "end" }}
                >
                  <button
                    type="button"
                    className="push-nav-toggle d-lg-none border-0 toogle-btn"
                    onClick={toggleSidebar}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                  <div
                    id="sidebar"
                    className={`navbar-slide-push transation-this ${
                      isSidebarOpen ? "open" : ""
                    }`}
                  >
                    <div className="login-signup  d-flex justify-content-between py-10 px-20 align-items-center">
                      <span>
                        <img src={Logo} alt="logo" />
                      </span>
                      <div
                        className="slide-nav-close"
                        onClick={toggleclosebar}
                        style={{ display: "inline-block" }}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                    <div className="menu-and-category">
                      <div
                        className="tab-content"
                        id="menu-and-categoryContent"
                      >
                        <div
                          className="tab-pane fade show active woocommerce-Tabs-panel woocommerce-Tabs-panel--description"
                          id="pills-push-menu"
                          role="tabpanel"
                          aria-labelledby="pills-push-menu-tab"
                        >
                          <div className="push-navbar">
                            <ul className="navbar-nav">
                              <li onClick={toggleclosebar} className="nav-item">
                                <Link className="nav-link" to="/">
                                  Home
                                </Link>
                              </li>

                              {menuitem !== undefined &&
                                menuitem.length > 0 &&
                                menuitem.map((item) => {
                                  return (
                                    <li
                                      onClick={toggleclosebar}
                                      className="nav-item"
                                    >
                                      <Link
                                        className="nav-link"
                                        to={`/category_list/${item.pro_category_id}`}
                                      >
                                        {item.category_name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              <ul style={{ padding: "30px" }}>
                                <li
                                  onClick={toggleclosebar}
                                  className="nav-item"
                                >
                                  <Link className="nav-link" to="/login">
                                    Login
                                  </Link>
                                </li>
                                <li
                                  onClick={toggleclosebar}
                                  className="nav-item"
                                >
                                  <Link className="nav-link" to="/register">
                                    Register
                                  </Link>
                                </li>
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-12">
              {/* <div className="product-search-one mobile-header-search">
                <form
                  className="form-inline search-pill-shape"
                  action="javascript:void(0);"
                  method="post"
                >
                  <input
                    type="text"
                    className="form-control search-field"
                    name="search"
                    placeholder="Search ..."
                    value={searchname}
                    onChange={(e) => setSearchname(e.target.value)}
                    ref={searchInputRef}
                  />

                  <button type="submit" name="submit" className="search-submit">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </form>

                {(categoriesresult.length > 0 || productsresult.length > 0) && (
                  <div className="search-results-box" ref={dropdownRef}>
                    <ul>
                      {categoriesresult.length > 0 &&
                        categoriesresult.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={`/category_list/${item.pro_category_id}`}
                              style={{ fontSize: "12px" }}
                            >
                              {item.category_name}
                            </Link>
                          </li>
                        ))}
                      {productsresult.length > 0 &&
                        productsresult.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={`/product_details/${item.product_id}`}
                              style={{ fontSize: "12px" }}
                            >
                              {item.product_name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {noresult && (
                  <p style={{ fontSize: "12px", textAlign: "center" }}>
                    {noresult}
                  </p>
                )}
              </div> */}
              <SearchAPI classname="mobile-header-search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
