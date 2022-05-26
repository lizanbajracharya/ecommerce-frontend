import React, { useState } from "react";
import styled from "styled-components";
import { useSortAndFilter } from "../hooks/components/useSortAndFilter";
import { Filters, ProductList, Sort, PageHero } from "../webPagesComponents";
const ProductsPage = () => {
  const [displayType, setDisplayType] = useState(true);
  const [sortValue, setSortValue] = useState();
  const [filterType, setFilterType] = useState();
  const { loading, error, product } = useSortAndFilter(sortValue, filterType);
  const setGridView = () => {
    setDisplayType(true);
  };

  const setListView = () => {
    setDisplayType(false);
  };
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters setSortValue={setSortValue} setFilterType={setFilterType} />
          <div>
            <Sort
              setListView={setListView}
              displayType={displayType}
              setGridView={setGridView}
              setSortValue={setSortValue}
              sortValue={sortValue}
              product={product}
            />
            <ProductList
              displayType={displayType}
              loading={loading}
              error={error}
              product={product}
            />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
