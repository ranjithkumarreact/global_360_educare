import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Breadcrump = (props) => {
  return (
    <div className="full-row bg-light overlay-dark py-5 breadcrump">
      <div className="container">
        <div className="row text-center text-white">
          <div className="col-12 main-cont">
            <h3 className="mb-2">{props.subname}</h3>
          </div>
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 d-inline-flex bg-transparent p-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item icon">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.subname}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrump;
