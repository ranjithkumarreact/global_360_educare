import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnquiryButton from "../EnquiryButton";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiurl } from "../../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
const RealatedProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: <FontAwesomeIcon icon={faArrowLeftLong} />,
    nextArrow: <FontAwesomeIcon icon={faArrowRightLong} />,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const params = useParams();
  const productid = params.id;

  const [relatedProducts, setRelatedproduts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.post(
          apiurl + "productdetail",
          { product_id: productid }
        );
        setRelatedproduts(response.data.related_products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRelatedProducts();
  }, [productid]);

  return (
    <section className="bg-white pt-40 pb-80 related_products_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head border-bottom d-flex justify-content-sm-between align-items-sm-end flex-column flex-sm-row">
              <div className="d-flex section-head-side-title xs-mb-10">
                <h4 className="text-dark mb-0">Related Products</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <div className="equipments wc-tabs-wrapper ps-0 mt-0">
              <div
                className="tab-content icon-hover-primary product-style-2"
                id="pills-tabContent-two"
              >
                <div className="e-hover-shadow-one e-hover-wrapper-absolute e-bg-light">
                  <Slider className="row g-2" {...settings}>
                    {relatedProducts !== undefined && relatedProducts.length > 0
                      ? relatedProducts.map((item, index) => (
                          <div className="item related-items" key={index}>
                            <div className="product type-product">
                              <div className="product-wrapper">
                                <Link
                                  to={`/product_details/${item.product_id}`}
                                  className="woocommerce-LoopProduct-link text-center"
                                >
                                  <div className="product-image">
                                    <img
                                      src="https://global360educare.co.in/demo/uploads/categories/image-2024_08_19_13_00_33.jpg"
                                      alt={item.title}
                                    />
                                  </div>
                                  <div className="product-info allkit-c">
                                    <h3 className="product-title">
                                      {item.product_name}
                                    </h3>
                                  </div>
                                </Link>
                                <div className="enquiry-btn all-kit-enquiry">
                                  <EnquiryButton
                                    classname="btn_3"
                                    productid={item.product_id}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : null}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealatedProduct;
