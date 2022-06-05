import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../utils/helpers";

const colorMap = [
  { value: "red", label: "Red" },
  { value: "white", label: "White" },
  { value: "green", label: "Green" },
  { value: "grey", label: "Grey" },
];
const brandMap = [
  { value: "samsung", label: "Samsung" },
  { value: "apple", label: "Apple" },
  { value: "google", label: "Google" },
  { value: "sony", label: "Sony" },
  { value: "microsoft", label: "Microsoft" },
  { value: "nokia", label: "Nokia" },
  { value: "oneplus", label: "OnePlus" },
];

const Filters = ({ setSortValue, setFilterType }) => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);

  const updateFilters = (e) => {
    if (e.target.name === "search") {
      setSearch(e.target.value);
      setFilterType(e.target.name);
      setSortValue(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
      setFilterType(e.target.name);
      setSortValue(e.target.value);
    } else if (e.target.name === "color") {
      setColor(e.target.value);
      setFilterType(e.target.name);
      setSortValue(e.target.value);
    } else {
      setBrand(e.target.value);
      setFilterType(e.target.name);
      setSortValue(e.target.value);
    }
  };

  const clearFilters = (e) => {
    setSortValue();
    setFilterType();
    setBrand("");
    setColor("");
    setPrice(0);
    setSearch("");
  };

  return (
    <Wrapper>
      <div className="content">
        {/* search input */}
        <div className="form-control">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder="search"
            onChange={updateFilters}
            className="search-input"
          />
        </div>
        <div className="form-control">
          <h5>brand</h5>
          <div>
            <select
              name="brand"
              id="brand"
              value={brand}
              onChange={updateFilters}
              className="company">
              <option>Select</option>
              {brandMap.map((c, index) => {
                return (
                  <option key={index} value={c.value}>
                    {c.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-control">
          <h5>color</h5>
          <select
            name="color"
            id="color"
            value={color}
            onChange={updateFilters}
            className="company">
            <option>Select</option>
            {colorMap.map((c, index) => {
              return (
                <option key={index} value={c.value}>
                  {c.label}
                </option>
              );
            })}
          </select>
        </div>
        {/* price */}
        <div className="form-control">
          <h5>price</h5>
          <p className="price">{formatPrice(price)}</p>
          <input
            name="price"
            id="price"
            type={"range"}
            style={{ height: "30px" }}
            onChange={updateFilters}
            min={0}
            max={100000000}
            value={price}
          />
        </div>
        {/* end of price */}
        <button
          type="button"
          id="clearButton"
          className="clear-btn"
          onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
