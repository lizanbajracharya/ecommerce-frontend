import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import Image from "material-ui-image";
const InvalidPage = () => {
  const paperStyle = {
    padding: 10,
    height: "85vh",
    width: "80vh",
    margin: "20px 0 auto",
    borderRadius: "20px",
  };

  const buttonStyle = {
    margin: "8px 0",
    width: 120,
    borderRadius: 20,
    background: "#cc9900",
  };
  return (
    <div>
      <Grid className="background p2 flex jcc aic">
        <Paper elevation={8} style={paperStyle}>
          <Image src="/Animated_page_not_found (1).svg" aspectRatio={3 / 2} />
          <Button variant="contained" color="primary" style={buttonStyle}>
            Go Back
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default InvalidPage;
