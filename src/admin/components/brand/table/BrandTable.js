import MaterialTable from "@material-table/core";
import React, { useState } from "react";
import { useBrandTable } from "../../../hooks/components/brand/table/useBrandTable";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import BrandForm from "../form/BrandForm";
import { useBrandForm } from "../../../hooks/components/brand/form/useBrandForm";

const BrandTable = () => {
  const { data, columns } = useBrandTable();
  const [open, setOpen] = useState(false);
  const { handleDelete } = useBrandForm();
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
        data={data}
        columns={columns}
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: () => <AddIcon id="addBrand" />,
            tooltip: "Add Brand",
            onClick: (event, rowData) => handleOpen(),
            isFreeAction: true,
          },
          {
            icon: () => <DeleteIcon id="deleteBrand" />,
            tooltip: "Delete Brand",
            onClick: (event, rowData) => handleDelete(rowData?._id),
          },
        ]}
      />
      <BrandForm open={open} handleClose={() => handleClose()} />
    </>
  );
};

export default BrandTable;
