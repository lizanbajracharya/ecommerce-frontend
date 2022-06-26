import MaterialTable from "@material-table/core";
import React from "react";
import { useOrderTable } from "../../../hooks/components/order/table/useOrderTable";

const OrderTable = () => {
  const { data, columns } = useOrderTable();

  return (
    <>
      <>
        <MaterialTable
          title=""
          data={data}
          columns={columns}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </>
    </>
  );
};

export default OrderTable;
