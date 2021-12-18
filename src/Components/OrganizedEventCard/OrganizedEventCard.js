import { Button, Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import React, { useState, useEffect } from "react";
import location from "../../images/location.png";
import schedule from "../../images/schedule.png";
import chronometer from "../../images/chronometer.png";
import { getTimeFromDuration } from "../../util/functions";
import useWindowDimensions from "../useWindowDimensions";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import axios from "axios";
import api from "../../config/api";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#0bda51" : "#308fe8",
  },
}));

function OrganizedEventCard(props) {
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
  const { height, width } = useWindowDimensions();
  const [rem_players, setRemPlayers] = useState(0);
  const user = useSelector((state) => state.player.user);
  const history = useHistory();

  const organizedEvents = useSelector((state) => state.event.events);

  useEffect(() => {
    setRemPlayers(props.item.rem_players);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.item._id, organizedEvents]);

  const onPressDetails = () => {
    history.push({ pathname: `/event/${props.item._id}` });
  };

  return (
    <Grid
      container
      borderRadius="15px"
      marginTop="9px"
      border={props.item.eventStatus === "Cancelled" ? "1px solid red" : "1px solid #d4d4d4"}
      padding="9px"
      paddingLeft="15px"
      paddingBottom="9px"
    >
      <Grid container xs={12} md={7} order={{ xs: 1, sm: 1 }}>
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
        <Grid
          container
          textAlign="center"
          alignItems="center"
          marginTop="0px"
          spacing={1}
        >
          <Grid item display="flex" flexDirection="row">
            <img
              alt="venue"
              src={location}
              style={{ height: 21, width: 21, marginRight: 9 }}
            />
            <Typography variant="body1">{props.item.venue}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          textAlign="center"
          alignItems="center"
          marginTop="0px"
          spacing={1}
        >
          <Grid item display="flex" flexDirection="row">
            <img
              alt="schedule"
              src={schedule}
              style={{ height: 21, width: 21, marginRight: 9 }}
            />
            <Typography variant="body1">
              {moment(props.item.day).format("dddd  DD  MMM ")}
            </Typography>
          </Grid>
          <Grid item display="flex" flexDirection="row">
            <img
              alt="schedule"
              src={chronometer}
              style={{ height: 21, width: 21, marginRight: 9 }}
            />
            <Typography variant="body1">
              {moment(props.item.timings).format("h:mm a")} -{" "}
              {getTimeFromDuration(props.item.timings, props.item.duration)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="flex-end"
        justifyContent="flex-end"
        marginTop="5px"
        order={{ xs: 3, sm: 2 }}
        xs={12}
        md={5}
      >
        <Grid item textAlign="center" xs={4} md={7}>
          <Typography style={{ fontSize: 16.5 }} variant="title">
            Price : ₹ {props.item.price_per_person}
          </Typography>
        </Grid>
        <Grid item alignItems="center" textAlign="center" xs={4} md={7}>
          <Button onClick={onPressDetails} size="small" style={{ backgroundColor: props.item.eventStatus === "Cancelled" && "red" }} variant="contained">
            Details
          </Button>
        </Grid>
        <Grid item textAlign="center" xs={4} md={7}>
          <Typography variant="subtitle">({rem_players} spots left)</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        order={{ xs: 2, sm: 3 }}
        xs={12}
        marginTop="9px"
        marginBottom="9px"
      >
        <BorderLinearProgress
          variant="determinate"
          value={
            ((props.item.total_players - rem_players) /
              props.item.total_players) *
            100
          }
        />
      </Grid>
      {
        props.backedOut &&
        <Grid item order={{ xs: 4, sm: 4 }} xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1">
                Reason
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle">
              {props.backedOut.cancellation_reason}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">
              ~ {moment(props.backedOut.cancelledAt).format("DD MMM   hh:mm a")}
            </Typography>
          </Grid>
        </Grid>
      }
      {
        props.reject &&
        <Grid item order={{ xs: 4, sm: 4 }} xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1">
                Reason
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle">
              {props.reject.rejection_reason}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">
              ~ {moment(props.reject.rejectedAt).format("DD MMM   hh:mm a")}
            </Typography>
          </Grid>
        </Grid>
      }
      {
        props.item.eventStatus === "Cancelled" &&
        <Grid container marginBottom="5px">
          <Grid item sm={12}>
            <Typography style={{ fontWeight: 'bold' }}>This Event has been Cancelled</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography>{props.item.cancellationReason}</Typography>
          </Grid>
          <Typography variant="caption">
            ~ {moment(props.item.cancelledAt).format("DD MMM   hh:mm a")}
          </Typography>
        </Grid>
      }
    </Grid>
  );
}

export default OrganizedEventCard;
