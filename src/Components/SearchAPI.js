import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {apiurl} from "../Constants"
function SearchAPI(classname) {
  const [searchname, setSearchname] = useState("");
  const [categoriesresult, setCategoriesResult] = useState([]);
  const [productsresult, setProductsResult] = useState([]);
  const [noresult, setNoresult] = useState("");

  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (searchname.trim() === "") {
      setCategoriesResult([]);
      setProductsResult([]);
      setNoresult("");
      return;
    }

    const searchproduct = async () => {
      try {
        const response = await axios.post(
          apiurl + "product_search",
          { name: searchname }
        );

        if (response.status === 200) {
          const categories = response.data.record_categories || [];
          const products = response.data.record_products || [];

          setCategoriesResult(categories);
          setProductsResult(products);

          if (categories.length === 0 && products.length === 0) {
            setNoresult("No results found.");
          } else {
            setNoresult("");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    searchproduct();
  }, [searchname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setCategoriesResult([]);
        setProductsResult([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`product-search-one flex-grow-1 ${classname}`}>
      <form
        className="form-inline search-line-shape head-search"
        action="javascript:void(0);"
      >
        <input
          type="text"
          className="form-control search-field"
          name="search"
          placeholder="Search ..."
          value={searchname}
          onChange={(e) => setSearchname(e.target.value)}
          ref={searchInputRef}
        />
        <button type="submit" name="submit" className="search-submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      {(categoriesresult.length > 0 || productsresult.length > 0) && (
        <div className="search-results-box" ref={dropdownRef}>
          <ul>
            {categoriesresult.length > 0 &&
              categoriesresult.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/category_list/${item.pro_category_id}`}
                    style={{ fontSize: "12px" }}
                  >
                    {item.category_name}
                  </Link>
                </li>
              ))}
            {productsresult.length > 0 &&
              productsresult.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/product_details/${item.product_id}`}
                    style={{ fontSize: "12px" }}
                  >
                    {item.product_name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
      {noresult && (
        <p style={{ fontSize: "12px", textAlign: "center" }}>{noresult}</p>
      )}
    </div>
  );
}

export default SearchAPI;
