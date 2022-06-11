import MaterialTable from "@material-table/core";
import React, { useState } from "react";
import { useColorTable } from "../../../hooks/components/color/table/useColorTable";
import ColorForm from "../form/ColorForm";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useColorForm } from "../../../hooks/components/color/form/useColorForm";

const ColorTable = () => {
  const { data, columns } = useColorTable();
  const { handleDelete } = useColorForm();
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
        data={data}
        columns={columns}
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: () => <AddIcon id="addColor" />,
            tooltip: "Add Color",
            onClick: (event, rowData) => handleOpen(),
            isFreeAction: true,
          },
          {
            icon: () => <DeleteIcon id="deleteColor" />,
            tooltip: "Delete Color",
            onClick: (event, rowData) => handleDelete(rowData?._id),
          },
        ]}
      />
      <ColorForm open={open} handleClose={() => handleClose()} />
    </>
  );
};

export default ColorTable;
