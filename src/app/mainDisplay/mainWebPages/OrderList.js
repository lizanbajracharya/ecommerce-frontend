import MaterialTable from "@material-table/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useOrderListTable } from "../hooks/components/order/useOrderListTable";

const OrderList = () => {
  const { data, columns } = useOrderListTable();
  const history = useHistory();
  return (
    <Wrapper>
      <div className="section section-center page">
        <MaterialTable
          title={"Order List"}
          data={data}
          columns={columns}
          options={{
            actionsColumnIndex: -1,
            pageSize: 10,
          }}
          onRowClick={(event, rowData) =>
            history.push(`/order/${rowData?._id}`)
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

export default OrderList;
