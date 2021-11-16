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

function ConfirmEventCard(props) {
  const { height, width } = useWindowDimensions();
  const [rem_players, setRemPlayers] = useState(props.item.rem_players);
  const [joined, setJoined] = useState(false);
  const user = useSelector((state) => state.player.user);

  return (
    <Grid
      container
      borderRadius="15px"
      //marginTop="9px"
      border="0.5px solid #d4d4d4"
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
          <Button
            disabled={joined}
            onClick={() => props.createEvent(props.item)}
            //onClick={joinEvent}
            size="small"
            variant="contained"
          >
            Confirm
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
        props.place &&
        <Grid item xs={12} paddingTop="15px" order={{ xs: 4, sm: 4 }}>
          <Typography >Landmark : {props.place.place_name}</Typography>
        </Grid>
      }
    </Grid>
  );
}

export default ConfirmEventCard;
