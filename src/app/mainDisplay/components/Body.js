import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

export default function Body({ children }) {
  return (
    <>
      <CssBaseline />

      <main>{children}</main>
    </>
  );
}
