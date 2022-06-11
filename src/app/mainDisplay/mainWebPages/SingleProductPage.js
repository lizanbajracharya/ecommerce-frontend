import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { formatPrice } from "../../../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../webPagesComponents";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGetProductById } from "../hooks/api/useProduct";
const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data, isLoading, isError } = useGetProductById(id);
  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [isError]);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    countInStock: stock,
    rating: stars,
    numReviews: reviews,
    _id: sku,
    brand,
    image,
  } = data;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={image} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {brand?.name}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={data} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
