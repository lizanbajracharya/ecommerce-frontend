import MaterialTable from "@material-table/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useOrderTable } from "../../../hooks/components/order/table/useOrderTable";

const OrderTable = () => {
  const { data, columns } = useOrderTable();
  const history = useHistory();
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
          onRowClick={(event, rowData) =>
            history.push(`/admin/orders/${rowData?._id}`)
          }
        />
      </>
    </>
  );
};

export default OrderTable;
