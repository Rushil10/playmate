import { Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import location from "../../images/location.png";
import schedule from "../../images/schedule.png";

function EventCard(props) {
  //console.log(props.item);
  /* additionalAddressInfo: ""
age: 11
createdAt: "2021-10-29T05:01:01.707Z"
currency: "INR"
day: "2021-11-01T05:01:24.000Z"
duration: "2 hours 30 min"
gender: "Male"
location: {type: 'Point', coordinates: Array(2)}
organiserId: "6165ca06687aa666ca0f2327"
price_per_person: 125
rem_players: 7
sport: "Cricket"
timings: "2021-10-29T01:01:24.292Z"
total_players: 21
venue: "Cricket Grnd Open"
__v: 0
_id: "617b806be6a2a45eba9860a2" */
  return (
    /* <Paper borderBottomWidth="0px" borderRadius="15px" elevation={2}> */
    <Grid
      container
      borderRadius="15px"
      marginTop="9px"
      border="0.5px solid #d4d4d4"
      padding="15px"
    >
      <Grid container alignItems="center" spacing={2.5}>
        <Grid item>
          <Typography variant="h6">{props.item.sport}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle">
            ( Avg Age : {props.item.age} )
          </Typography>
        </Grid>
      </Grid>
      <Grid container textAlign="center" alignItems="center">
        <img
          alt="venue"
          src={location}
          style={{ height: 21, width: 21, marginRight: 9 }}
        />
        <Grid item>
          <Typography variant="body1">{props.item.venue}</Typography>
        </Grid>
      </Grid>
      <Grid container textAlign="center" alignItems="center" marginTop="5px">
        <img
          alt="schedule"
          src={schedule}
          style={{ height: 21, width: 21, marginRight: 9 }}
        />
        <Grid item>
          <Typography variant="body1">
            {moment(props.item.day).format("dddd DD MMM ")}
            {moment(props.item.timings).format("h:mm a")}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    /* </Paper> */
  );
}

export default EventCard;
