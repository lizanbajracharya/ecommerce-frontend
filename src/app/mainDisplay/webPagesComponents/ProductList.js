import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = ({ displayType, loading, error, product }) => {
  if (!loading && product.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search.
      </h5>
    );
  }
  if (loading) {
    return <>...Loading</>;
  }

  if (error) {
    return <>Something occured</>;
  }

  if (displayType === false) {
    return <ListView products={!loading && product} />;
  }
  return <GridView products={!loading && product} />;
};

export default ProductList;
