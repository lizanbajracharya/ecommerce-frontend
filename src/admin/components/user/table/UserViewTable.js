import MaterialTable from "@material-table/core";
import React, { useState } from "react";
import { useUserTable } from "../../../hooks/components/user/table/useUserTable";
import UserDetail from "../form/UserDetail";

const UserViewTable = () => {
  const { filterDataUser, columns } = useUserTable();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (rowdata) => {
    setData(rowdata);
    setOpen(true);
  };
  return (
    <div>
      <MaterialTable
        title=""
        data={filterDataUser}
        columns={columns}
        onRowClick={(event, rowData) => handleOpen(rowData)}
      />
      <UserDetail open={open} handleClose={handleClose} data={data} />
    </div>
  );
};

export default UserViewTable;
