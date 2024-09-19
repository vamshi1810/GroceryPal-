import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState();
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
       
      navigate(`/products?q=${event.target.value}&otracker=${'search&otracker1'}=search&marketplace=FLIPKART`);
      setSearchValue("");
    }
  };

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Groceries</a>
          <div>
            <input
              class="form-control mr-sm-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </div>
          <button class="btn btn-outline-success" type="submit">
            Cart
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
