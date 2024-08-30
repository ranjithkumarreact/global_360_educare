import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Button } from "react-bootstrap";
import { apiurl } from "../../Constants";
import EnquiryButton from "../EnquiryButton";
function Banners() {
  const [datas, setDatas] = useState({});
  const [slider, setSlider] = useState([]);

  const [selectedBanner, setSelectedBanner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(apiurl + "banners");
        setDatas(response.data.datas);
        setSlider(response.data.records);
      } catch (error) {
        console.log(`The Error is ${error}`);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <section className="banner-section">
        <div className="banner-pading-0 full-row pb-5">
          <div className="container">
            <div className="row g-3">
              <div className="col-xl-3 col-md-6 order-xl-1">
                <div className="row row-cols-1 g-3">
                  <div className="col">
                    <div className="banner-wrapper hover-img-zoom banner-one custom-className-127">
                      <div className="banner-image overflow-hidden transation">
                        <img
                          src={`${datas.top_left_banner}`}
                          alt="Banner Image"
                        />
                      </div>
                      <div
                        className="banner-content position-absolute"
                        style={{ top: "0px", left: "0px", padding: "20px" }}
                      >
                        <h4 className="title">{datas.top_left_title}</h4>
                        <p>{datas.top_left_description}</p>

                        <EnquiryButton classname="btn_1" />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="banner-wrapper hover-img-zoom banner-one custom-className-128">
                      <div className="banner-image overflow-hidden transation">
                        <img
                          src={`${datas.bottom_left_banner}`}
                          alt="Banner Image"
                        />
                      </div>
                      <div
                        className="banner-content position-absolute"
                        style={{ top: "0px", left: "0px", padding: "20px" }}
                      >
                        <h4 className="title">{datas.bottom_left_title}</h4>
                        <p>{datas.bottom_left_description}</p>

                        <EnquiryButton classname="btn_1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 order-xl-3">
                <div className="row row-cols-1 g-3">
                  <div className="col">
                    <div className="banner-wrapper hover-img-zoom banner-one custom-className-130">
                      <div className="banner-image overflow-hidden transation">
                        <img
                          src={`${datas.top_right_banner}`}
                          alt="Banner Image"
                        />
                      </div>
                      <div
                        className="banner-content position-absolute"
                        style={{ top: "0px", left: "0px", padding: "20px" }}
                      >
                        <h4 className="title">{datas.top_right_title}</h4>
                        <p>{datas.top_right_description}</p>

                        <EnquiryButton classname="btn_1" />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="banner-wrapper hover-img-zoom banner-one custom-className-131">
                      <div className="banner-image overflow-hidden transation">
                        <img
                          src={`${datas.bottom_right_banner}`}
                          alt="Banner Image"
                        />
                      </div>
                      <div
                        className="banner-content position-absolute"
                        style={{ top: "0px", left: "0px", padding: "20px" }}
                      >
                        <h4 className="title">{datas.bottom_right_title}</h4>
                        <p>{datas.bottom_right_description}</p>

                        <EnquiryButton classname="btn_1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 order-xl-2">
                {/* Main banner carousel */}
                <Slider
                  className="owl-carousel owl-carousel-1 owl-theme banner-carosel-main slider-banner-main"
                  {...settings}
                >
                  {slider &&
                    slider.length > 0 &&
                    slider.map((item, index) => (
                      <div key={index} className="item banner-slider-img">
                        <img src={item.image} alt="Banner Image" />
                        <div className="banner-content position-absolute">
                          <h4 className="title">{item.title}</h4>
                          <p>{item.description}</p>
                          <EnquiryButton classname="btn_1" />
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banners;
