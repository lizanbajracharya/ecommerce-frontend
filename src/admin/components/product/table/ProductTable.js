import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import { useProductTable } from "../../../hooks/components/product/table/useProductTable";
import ProductForm from "../form/ProductForm";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductForm } from "../../../hooks/components/product/form/useProductForm";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import EditProductForm from "../form/EditProductForm";

const DeleteDialog = ({ open, handleClose, handleSubmit }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this product?"}
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleSubmit} id="yes">
          Yes
        </Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ProductTable = () => {
  const { data, columns } = useProductTable();
  const { handleDelete } = useProductForm();

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [id, setId] = useState();
  const [rowData, setRowData] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenEdit = (row) => {
    setRowData(row);
    setOpenEdit(true);
  };

  const handleOpenDelete = (id) => {
    setId(id);
    setOpenDelete(true);
  };

  const handleSubmit = () => {
    handleDelete(id);
    setOpenDelete(false);
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
            icon: () => (
              <>
                <AddIcon id="addProduct" />
                ADD
              </>
            ),
            tooltip: "Add Product",
            onClick: (event, rowData) => handleOpen(),
            isFreeAction: true,
          },
          {
            icon: () => <EditIcon id="editProduct" />,
            tooltip: "Edit Product",
            onClick: (event, rowData) => handleOpenEdit(rowData),
          },
          {
            icon: () => <DeleteIcon id={`deleteProduct`} />,
            tooltip: "Delete Product",
            onClick: (event, rowData) => handleOpenDelete(rowData?._id),
          },
        ]}
      />
      <ProductForm open={open} handleClose={() => handleClose()} />
      <EditProductForm
        open={openEdit}
        data={rowData}
        handleClose={() => handleCloseEdit()}
      />
      <DeleteDialog
        open={openDelete}
        handleClose={handleCloseDelete}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ProductTable;
