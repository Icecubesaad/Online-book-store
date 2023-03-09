import React, { useContext, useState, useEffect } from "react";
import BooksContext from "../functions/Context";

export default function Searchbar() {
  const context = useContext(BooksContext);
  const { optionsChange, search, Items } = context;
  const [searchTerm, setSearchTerm] = useState("");
  const [width, setWidth] = useState("50%");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    Items(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(searchTerm);
    setSearchTerm("");
  };

  const resetSearchTerm = () => {
    setSearchTerm("");
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 700) {
      setWidth("67%");
    } else {
      setWidth("50%");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="Flex_h">
      <div className="Navbar">
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-control mr-sm-2"
            id="inputSearch"
            value={searchTerm}
            onChange={handleInputChange}
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width }}
          />
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            type="submit"
            onClick={resetSearchTerm}
          >
            Search
          </button>
        </form>
      </div>
      <div className="search-items">
        {optionsChange.map((item) => (
          <div id="items" onClick={() => console.log("pp")}>
            {item.Name}
          </div>
        ))}
      </div>
    </div>
  );
}
