import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { apiurl } from "../../Constants";

import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams } from "react-router-dom";
import EnquiryButton from "../EnquiryButton";
import Addproductbtn from "../Addproductbtn";
const ProductCarousel = () => {
  const carouselPhotos = [
    {
      thumbnail: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-1.png"),
      zoomImage: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-1.png"),
    },
    {
      thumbnail: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-2.png"),
      zoomImage: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-2.png"),
    },
    {
      thumbnail: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-3.png"),
      zoomImage: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-3.png"),
    },
    {
      thumbnail: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-4.png"),
      zoomImage: require("../../assets/new-images/product-detail-img/sports-jerseys-detail-4.png"),
    },
  ];

  const params = useParams();

  const product_id = params.id;

  const [productsDetails, setProductdetails] = useState({});

  useEffect(() => {
    const Productdetails = async () => {
      const response = await axios.post(
        apiurl + "productdetail",
        { product_id: product_id }
      );
      setProductdetails(response.data.records);
    };
    Productdetails();
  }, [product_id]);

  const [mainImage, setMainImage] = useState(carouselPhotos[0].thumbnail);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <section className="products_details_main pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="product-carousel">
              <div className="main-image">
                <img src={mainImage} alt="Main" />
              </div>
              <div
                className="thumbnail-carousel"
                style={{ overflow: "hidden" }}
              >
                <Slider {...settings}>
                  {carouselPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="thumbnail-item"
                      onClick={() => handleThumbnailClick(photo.thumbnail)}
                    >
                      <img
                        src={photo.thumbnail}
                        style={{ width: "60%", margin: "auto" }}
                        alt={`Thumbnail ${photo.id}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="summary entry-summary">
              <div className="summary-inner product-details">
                {productsDetails && productsDetails.product_name ? (
                  <h1 className="product_title entry-title">
                    {productsDetails.product_name}{" "}
                  </h1>
                ) : (
                  <div style={{ color: "red" }}>
                    Product name is not available.
                  </div>
                )}
                <div className="stock-availability in-stock">
                  Estimated Quantity : <span className="site-text-clr">30</span>
                </div>
                <div className="stock-availability in-stock">In Stock</div>
                <div className="product-offers">
                  <ul className="product-offers-list">
                    <li className="product-offer-item">
                      <FontAwesomeIcon icon={faTag} className="mx-2 icons" />{" "}
                      <span className="h6">Special Price</span> Get extra 19%
                      off (price inclusive of discount)
                      <div className="product-term-wrap">
                        <span className="product-term-text bigbazar-ajax-block">
                          T & C{" "}
                        </span>
                      </div>
                    </li>
                    <li className="product-offer-item">
                      <FontAwesomeIcon icon={faTag} className="mx-2 icons" />
                      <span className="h6">Bank Offer</span> 10% instant
                      discount on VISA Cards
                      <div className="product-term-wrap">
                        <span className="product-term-text bigbazar-ajax-block">
                          T & C{" "}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="stock-availability in-stock">Features</div>
                <div className="product-offers">
                  <ul className="product-offers-list">
                    <li className="product-offer-item">
                      <FontAwesomeIcon icon={faTag} className="mx-2 icons" />
                      <span className="h6">Fit :</span> Description of the fit
                      (e.g., regular, slim, athletic)
                    </li>
                    <li className="product-offer-item">
                      <FontAwesomeIcon icon={faTag} className="mx-2 icons" />{" "}
                      <span className="h6">Size Options :</span> Available sizes
                      and a link to the size chart
                    </li>
                    <li className="product-offer-item">
                      <FontAwesomeIcon icon={faTag} className="mx-2 icons" />
                      <span className="h6">Quick-Dry :</span> Fabric dries
                      rapidly after washing or sweating
                    </li>
                  </ul>
                </div>
                <div className="woocommerce-product-details__short-description">
                  {" "}
                  <span>Highlights:</span>
                  <div className="short-description">
                    <ul>
                      <li>Regular Fit.</li>
                      <li>70% cotton, 30% polyester.</li>
                      <li>Easy to wear and versatile as Casual.</li>
                      <li>Machine wash, tumble dry.</li>
                    </ul>
                  </div>
                </div>
                <EnquiryButton
                  classname="btn_3 mt-3"
                  productid={productsDetails.product_id}
                  productname={productsDetails.product_name}
                />
                <Addproductbtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
