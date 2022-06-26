import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import UserTable from "../components/user/table/UserTable";
import UserToolbar from "../components/user/table/UserToolbar";
import UserViewTable from "../components/user/table/UserViewTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <>{children}</>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const User = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid container direction="row">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
          }}>
          <Container maxWidth={false}>
            <UserToolbar />
            <Box sx={{ mt: 3 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example">
                <Tab label="Admin" {...a11yProps(0)} />
                <Tab label="User" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <UserViewTable />
            </TabPanel>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default User;
