import { Grid } from "@mui/material";
import React from "react";

function EventCard(props) {
  console.log(props.item);
  return (
    <Grid container>
      <h4>{props.item.sport}</h4>
    </Grid>
  );
}

export default EventCard;
