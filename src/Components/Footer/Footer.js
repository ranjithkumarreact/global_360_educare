import React, { useEffect } from "react";
import Logo from "../../assets/new-images/global-360-logo-.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedin, faSquarePinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopCategory } from "../../features/categorySlice";
import { Fetchnewarrivals } from "../../features/newArrivals";

function Footer() {
  const dispatch = useDispatch();

  
  const { topCategory } = useSelector((state) => state.category);
  const { newarrival } = useSelector((state) => state.newarrival);

  useEffect(() => {
    dispatch(fetchTopCategory());
    dispatch(Fetchnewarrivals());
  }, [dispatch]);

  return (
    <div>
      <ScrollToTop smooth component={<FontAwesomeIcon icon={faArrowUp} />} className="scroll icon scroll-top" />
      <footer className="full-row footer-bg bg-secondary p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-widget my-5">
                <div className="footer-logo mb-4">
                  <Link to="/">
                    <img src={Logo} alt="Global 360 Logo" />
                  </Link>
                </div>
                <div className="widget-ecommerce-contact">
                  <div className="text-general text-justify mt-20">
                    Our comprehensive range of products and solutions has been carefully designed to meet the evolving needs of today's learners.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-widget category-widget my-5">
                <h6 className="widget-title mb-sm-4">Top Categories</h6>
                <ul>
                  {topCategory.map((item, index) => (
                    <li key={index}>
                      <Link to={`/category_list/${item.pro_category_id}`}>
                        {item.category_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-widget category-widget my-5">
                <h6 className="widget-title mb-sm-4">New Arrivals</h6>
                <ul>
                  {newarrival?.length > 0 ? (
                    newarrival.map((item, index) => (
                      <li key={index}>
                        <Link to={`/product_details/${item.product_id}`}>
                          {item.product_name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>No new arrivals found.</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="full-row copyright footer-bottom-bg border-top border-general py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="sm-mb-10 d-block">
                © 2024 Global 360 educare All rights reserved
              </span>
            </div>
            <div className="col-md-6">
              <ul className="list-ml-30 d-flex align-items-center justify-content-md-end">
                <li>
                  <a href="javascript:void(0);">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <FontAwesomeIcon icon={faSquarePinterest} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
