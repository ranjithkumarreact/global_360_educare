import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiurl } from "../../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import EnquiryButton from "../EnquiryButton";
const Relatedproducts = () => {
  const [categorylist, setCategorylist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.post(
          apiurl + "allcategories"
        );
        setCategorylist(res.data.records);
      } catch (error) {
        console.log(`The Error is ${error}`);
      }
    };
    fetchCategory();
  }, []);

  const totalPages = Math.ceil(categorylist.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categorylist.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="full-row bg-white pt-40 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-head border-bottom d-flex justify-content-sm-between align-items-sm-end flex-column flex-sm-row">
              <div className="d-flex section-head-side-title xs-mb-10">
                <h4 className="text-dark mb-0">Related Categories</h4>
              </div>
            </div>
          </div>
          <div className="col-12 my-4">
            <div className="equipments wc-tabs-wrapper ps-0 mt-0">
              <div
                className="tab-content icon-hover-primary product-style-2"
                id="pills-tabContent-two"
              >
                <div className="e-hover-shadow-one e-hover-wrapper-absolute e-bg-light">
                  <div className="row g-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {currentItems !== undefined &&
                      currentItems.length > 0 &&
                      currentItems.map((item) => (
                        <div className="col-lg-4" key={item.pro_category_id}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <Link
                                to={`/category_list/${item.pro_category_id}`}
                                className="woocommerce-LoopProduct-link text-center"
                              >
                                <div className="product-image">
                                  <img src={item.image} alt="Product Image" />
                                </div>

                                <div className="product-info allkit-c">
                                  <h3 className="product-title">
                                    <a href="javascript:void(0)">
                                      {item.category_name}
                                    </a>
                                  </h3>
                                </div>
                              </Link>
                              <div className="enquiry-btn all-kit-enquiry">
                                <EnquiryButton classname="btn_3" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div
                className="pagination mt-3"
                style={{ justifyContent: "center" }}
              >
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="page-button prev_button"
                  style={{
                    opacity: currentPage === 1 ? 0.3 : 1,
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`page-button mx-1 pagination_button  ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    style={{
                      opacity: currentPage === index + 1 ? 1 : 0.3,
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="page-button next_button"
                  style={{
                    opacity: currentPage === totalPages ? 0.3 : 1,
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatedproducts;
