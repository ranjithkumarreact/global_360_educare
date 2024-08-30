import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiurl } from "../../Constants";
const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Screens smaller than 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480, // Screens smaller than 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdatas = async () => {
      await axios
        .post(apiurl + "brandslist")
        .then((res) => {
          setData(res.data.records);
        })
        .catch((err) => {
          console.log(`The Error is ${err}`);
        });
    };

    fetchdatas();
  }, []);

  return (
    <section>
      <div className="full-row pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-7 col-lg-9">
              <div className="text-center mb-40">
                <h3 className="text-center mb-4">Brands We Deal</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                className="owl-carousel partner-slider px-sm-5 pb-sm-50"
                {...settings}
                autoplay="true"
              >
                {data !== undefined && data.length > 0
                  ? data.map((item, index) => {
                      return (
                        <div className="item" key={item.pro_brand_id || index}>
                          <img src={item.image} alt="Image not found!" />
                        </div>
                      );
                    })
                  : null}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
