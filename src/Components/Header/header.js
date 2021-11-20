import { Button, Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import React, { useState, useEffect } from "react";

function Header(props) {
  return (
    <Grid container borderBottom="1px solid green">
      <Grid item>
        <Typography variant="h5" style={{ marginTop: 15, marginBottom: 9 }}>{props.title}</Typography>
      </Grid>
    </Grid>
  )
}

export default Header;