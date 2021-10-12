import React, { useState, useMemo } from "react";
import { Grid } from "@mui/material";
import logo from "../../images/logo.jpg";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

const ariaLabel = { "aria-label": "description" };

function Signup() {
  return (
    <Grid
      container
      direction="column"
      style={{ minHeight: "100vh" }}
      alignItems="center"
      textAlign="center"
    >
      <Grid item>
        <img src={logo} />
      </Grid>
      <Grid item>
        <input />
      </Grid>
      <Grid></Grid>
    </Grid>
  );
}

export default Signup;
