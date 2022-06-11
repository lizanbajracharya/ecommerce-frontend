import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import AddIcon from "@mui/icons-material/Add";
import { useUserTable } from "../../../hooks/components/user/table/useUserTable";
import UserForm from "../form/UserForm";

const UserTable = () => {
  const { filterData, columns } = useUserTable();

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
        data={filterData}
        columns={columns}
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: () => <AddIcon id="addAdmin" />,
            tooltip: "Add Admin",
            onClick: (event, rowData) => handleOpen(),
            isFreeAction: true,
          },
        ]}
      />
      <UserForm open={open} handleClose={() => handleClose()} />
    </>
  );
};

export default UserTable;
