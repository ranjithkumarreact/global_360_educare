import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EnquiryButton from "../EnquiryButton";
import {
  fetchTopCategory,
  fetchCategoryProducts,
  setCategoryId,
} from "../../features/categorySlice";

const TopCategory = () => {
  const dispatch = useDispatch();
  const { topCategory, categoryProducts, categoryid, status } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(fetchTopCategory());
  }, [dispatch]);

  useEffect(() => {
    if (categoryid) {
      dispatch(fetchCategoryProducts(categoryid));
    }
  }, [dispatch, categoryid]);

  return (
    <section className="full-row pt-5 pb-5 home-topcategory">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-7 col-lg-9">
            <div className="text-center mb-40">
              <h3 className="text-center mb-4">Top Categories</h3>
            </div>
          </div>
        </div>
        <Tabs
          selectedIndex={topCategory.findIndex(
            (category) => category.pro_category_id === categoryid
          )}
          onSelect={(index) =>
            dispatch(setCategoryId(topCategory[index].pro_category_id))
          }
        >
          <TabList>
            {topCategory.map((data,index) => (
              <Tab key={data.pro_category_id || index}>{data.category_name}</Tab>
            ))}
          </TabList>

          {topCategory.map((data) => (
            <TabPanel key={data.pro_category_id}>
              <div className="row">
                {categoryProducts.map((item,index) => (
                  <div
                    className="col-lg-3 col-sm-6 col-md-4"
                    key={item.product_id || index}
                  >
                    <div className="product type-product top-category-add">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <Link to={`/product_details/${item.product_id}`}>
                            <img src={item.image} alt="Product Image" />
                          </Link>
                        </div>
                        <div className="product-info">
                          <Link to={`/product_details/${item.product_id}`}>
                            <h3 className="product-title">
                              {item.product_name}
                            </h3>
                          </Link>
                          <EnquiryButton
                            classname="btn_1 mt-2"
                            productid={item.product_id}
                            productname={item.product_name}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TopCategory;
