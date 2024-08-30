import React, { useEffect, useState } from "react";
import { apiurl } from "../../Constants";
import axios from "axios";
import { Link } from "react-router-dom";
import EnquiryButton from "../EnquiryButton";
const Category = () => {
  const [datas, setDatas] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://global360educare.co.in/demo/Apidata/centercategories"
        );

        setDatas(response.data.datas); // Extract and store the 'datas' field
        setCategories(response.data.records); // Extract and store the 'setCategories' field
      } catch (err) {
        console.log(`the Error is ${err}`);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="full-row pt-5 pb-5 home-category-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-7 col-lg-9">
              <div className="text-center mb-40">
                <h3 className="text-center mb-4">Categories</h3>
              </div>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-lg-4 col-md-12">
              <div className="banner-wrapper hover-img-zoom banner-one custom-class-133">
                <div className="banner-image overflow-hidden transation">
                  <img
                    src={`${datas.center_category_image}`}
                    alt="Banner Image"
                  />
                </div>

                <div className="banner-content position-absolute">
                  <div className="text-uppercase text-primary font-500 font-small">
                    {datas.center_category_title}
                  </div>

                  <h3 className="my-2">{datas.center_category_description}</h3>

                  <div className="font-500 sale-upto">
                    <span className="text-secondary">Sale Up To</span>

                    <span className="ms-2">30% Off</span>
                  </div>
                  <EnquiryButton classname="btn_1" />
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-0 coustom-categories-banner-2 e-wrapper-absolute e-hover-image-zoom">
                {categories !== undefined && categories.length > 0
                  ? categories.map((item, index) => (
                      <>
                        <div
                          className="col"
                          key={item.pro_category_id || index}
                        >
                          <div className="product type-product">
                            <Link to={`/category_list/${item.pro_category_id}`}>
                              <div className="product-wrapper">
                                <div className="product-image">
                                  <img
                                    src={`${item.image}`}
                                    alt="Product image"
                                  />
                                </div>

                                <div className="product-info">
                                  <h6 className="product-title m-0">
                                    {item.category_name}
                                  </h6>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
