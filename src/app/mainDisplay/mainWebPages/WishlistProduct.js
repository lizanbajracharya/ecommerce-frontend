import React from "react";
import MaterialTable from "@material-table/core";
import styled from "styled-components";
import { useWishListProductTable } from "../hooks/components/useWishListProductTable";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { useProductToWishlist } from "../hooks/components/useProductToWishlist";
import { useHistory } from "react-router-dom";

const WishlistProduct = () => {
  const { data, columns } = useWishListProductTable();
  const { handleRemove } = useProductToWishlist();
  const history = useHistory();
  const handleRemoveWishlist = (id) => {
    handleRemove(id);
  };
  return (
    <Wrapper>
      <div className="section section-center page">
        <MaterialTable
          title={"Wishlisted Product"}
          data={data?.products}
          columns={columns}
          options={{
            actionsColumnIndex: -1,
            pageSize: 10,
          }}
          actions={[
            {
              icon: () => <BookmarkRemoveIcon id={`removeWishlist`} />,
              tooltip: "Remove",
              onClick: (event, rowData) => handleRemoveWishlist(rowData?._id),
            },
          ]}
          onRowClick={(event, rowData) =>
            history.push(`/products/${rowData?._id}`)
          }
        />
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

export default WishlistProduct;
