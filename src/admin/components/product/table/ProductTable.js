import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import { useProductTable } from "../../../hooks/components/product/table/useProductTable";
import ProductForm from "../form/ProductForm";
import AddIcon from "@mui/icons-material/Add";

const ProductTable = () => {
  const { data, columns } = useProductTable();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <MaterialTable
        title=""
        data={data?.products}
        columns={columns}
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: () => <AddIcon id="addProduct" />,
            tooltip: "Add Product",
            onClick: (event, rowData) => handleOpen(),
            isFreeAction: true,
          },
        ]}
      />
      <ProductForm open={open} handleClose={() => handleClose()} />
    </>
  );
};

export default ProductTable;
