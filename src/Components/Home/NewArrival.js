import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiurl } from "../../Constants";
import EnquiryButton from "../EnquiryButton";
const NewArrival = () => {
  const [newarrivalpro, setNewarrivapro] = useState([]);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    const fetchdatas = async () => {
      await axios
        .post(apiurl + "newarrival")
        .then((res) => {
          setNewarrivapro(res.data.records);
          setDatas(res.data.datas);
        })
        .catch((err) => {
          console.log(`the Error is ${err}`);
        });
    };
    fetchdatas();
  }, []);

  return (
 
      <section className="full-row pt-5 pb-5 new-arrival-home">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-12 top-cont left_col">
                <div className="text-uppercase text-primary font-medium">
                  {datas.new_arrival_title}
                </div>

                <h3 className="my-3">{datas.new_arrival_description}</h3>

                <EnquiryButton classname="btn_1" />
              </div>

              <div className="col-xl-9 col-lg-12 right_col">
                <div className="products product-style-4">
                  <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1 e-title-hover-primary e-hover-image-zoom e-info-center">
                    {newarrivalpro !== undefined && newarrivalpro.length > 0
                      ? newarrivalpro.map((item,index) => {
                          return (
                            <div className="col-sm-6 col-md-6 col-lg-4" key={ item.product_id || index }>
                              <div className="product type-product">
                                <div className="product-wrapper">
                                  <div className="product-image">
                                    <Link
                                      to={`/product_details/${item.product_id}`}
                                    >
                                      <img
                                        src={item.image}
                                        alt="Product Image"
                                      />
                                    </Link>
                                  </div>

                                  <div className="product-info">
                                    <h3 className="product-title">
                                      {item.product_name}
                                    </h3>
                                    <EnquiryButton
                                      classname="btn_1 mt-2"
                                      productid={item.product_id}
                                      productname={item.product_name}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    
  );
};

export default NewArrival;
