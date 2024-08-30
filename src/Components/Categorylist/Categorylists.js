import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Mainimg from "../../assets/new-images/student-need-popular-img/main-imge.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import EnquiryButton from "../EnquiryButton";
import { apiurl } from "../../Constants";

const Categorylists = () => {
  const { id: categoryid } = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  const [categoryname, setCategoryname] = useState("");
  const [trending, setTrending] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(apiurl + "product_list", {
          category_id: categoryid,
          limit: 6,
        });
        setAllProducts(response.data.records || []);
        setCategoryname(response.data.category_name);
        console.log(response);
      } catch (error) {
        console.error(error);
        setAllProducts([]);
      }
    };

    fetchProducts();
  }, [categoryid]);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await axios.post(apiurl + "product_list", {
          category_id: categoryid,
          is_latest: true,
          limit: 6,
        });
        setLatestProducts(response.data.records || []);
      } catch (error) {
        console.error(error);
        setLatestProducts([]);
      }
    };

    fetchLatestProducts();
  }, [categoryid]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.post(apiurl + "product_list", {
          category_id: categoryid,
          is_trending: true,
          limit: 6,
        });
        setTrendingProducts(response.data.records || []);
      } catch (error) {
        console.error(error);
        setTrendingProducts([]);
      }
    };

    fetchTrendingProducts();
  }, [categoryid]);

  useEffect(() => {
    const fetchtrending = async () => {
      try {
        const response = await axios.post(apiurl + "productlistLeft");
        setTrending(response.data.records);
      } catch (error) {
        console.log(error``);
      }
    };
    fetchtrending();
  }, []);

  return (
    <div className="full-row bg-white pt-80 pb-40 categories_list">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 px-2 col-lg-4 md-mb-30 mx-auto categorie-product">
            <div className="item">
              <div className="product type-product">
                <div className="product-wrapper">
                  <div className="product-image">
                    <a
                      href="javascript:void(0)"
                      className="text-center category-banner"
                    >
                      <img
                        src={trending.product_list_image}
                        alt="Product Image"
                      />
                    </a>
                  </div>
                  <div className="product-info category-product-info">
                    <h3 className="product-title">
                      <a href="javascript:void(0)">
                        {trending.product_list_title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 right_col">
            <Tabs>
              <TabList>
                <h5 className="mb-0">{categoryname}</h5>
                <div className="tablist_inner_box d-flex">
                  <Tab>All</Tab>
                  <Tab>Trending Products</Tab>
                  <Tab>Latest Products</Tab>
                </div>
              </TabList>

              <TabPanel>
                <div className="products product-style-1 category_list">
                  <div className="row show-hover-area e-title-secondary e-bg-white e-hover-image-zoom icon-hover-primary e-bg-light">
                    {allProducts.length > 0 ? (
                      allProducts.map((item, index) => (
                        <div className="col-lg-4 grid_col" key={index}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <Link to={`/product_details/${item.product_id}`}>
                                <div className="product-image">
                                  <img src={item.image} alt="Product Image" />
                                </div>
                                <div className="product-info product_heading">
                                  <h3 className="product-title text-center">
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
                    ) : (
                      <p>No products found.</p>
                    )}
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="products product-style-1 category_list">
                  <div className="row show-hover-area e-title-secondary e-bg-white e-hover-image-zoom icon-hover-primary e-bg-light">
                    {trendingProducts.length > 0 ? (
                      trendingProducts.map((item, index) => (
                        <div className="col-lg-4 grid_col" key={index}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <Link to={`/product_details/${item.product_id}`}>
                                <div className="product-image">
                                  <img src={item.image} alt="Product Image" />
                                </div>
                                <div className="product-info product_heading">
                                  <h3 className="product-title text-center">
                                    {item.product_name}
                                  </h3>
                                </div>
                              </Link>
                              <div className="enquiry-btn all-kit-enquiry">
                                <EnquiryButton
                                  classname="btn_3"
                                  productid={item.product_id}
                                  productname={item.product_name}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No trending products found.</p>
                    )}
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="products product-style-1 category_list">
                  <div className="row show-hover-area e-title-secondary e-bg-white e-hover-image-zoom icon-hover-primary e-bg-light">
                    {latestProducts.length > 0 ? (
                      latestProducts.map((item, index) => (
                        <div className="col-lg-4 grid_col" key={index}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <Link to={`/product_details/${item.product_id}`}>
                                <div className="product-image">
                                  <img src={item.image} alt="Product Image" />
                                </div>
                                <div className="product-info product_heading">
                                  <h3 className="product-title text-center">
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
                    ) : (
                      <p>No latest products found.</p>
                    )}
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorylists;
