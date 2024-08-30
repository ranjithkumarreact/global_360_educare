import React from "react";
import Productnotfoundimg from "../assets/new-images/page-not-found.jpg";
function Pagenotfound() {
  return (
    <section className="pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-sm-12 d-flex"
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={Productnotfoundimg} style={{ width: "30%" }} alt="" />
            <h4>404 Page Not Found</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pagenotfound;
