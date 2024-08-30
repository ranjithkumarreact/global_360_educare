import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiurl } from "../../Constants";
import EnquiryButton from "../EnquiryButton";
const Bgimg = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .post(apiurl + "footerbanner")
        .then((res) => {
          setData(res.data.records);
        })
        .catch((err) => {
          console.log(`the Error is ${err}`);
        });
    };
    fetchdata();
  }, []);

  return (
    <section>
      <div className="full-row pt-5 pb-5 supply-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner-wrapper hover-img-zoom banner-one custom-class-134">
                <div className="banner-image overflow-hidden transation">
                  <img src={`${data.footer_banner_image}`} alt="Banner Image" />
                </div>
                <div className="banner-content position-absolute xy-center">
                  <h1 className="mb-3">{data.footer_banner_title}</h1>
                  <EnquiryButton classname="btn_1 mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bgimg;
