import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Typography } from "@mui/material";
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
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { toast, ToastContainer } from "react-toastify";

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

function EventCard(props) {
  const { height, width } = useWindowDimensions();
  const [rem_players, setRemPlayers] = useState(0);
  const [joined, setJoined] = useState(false);
  const user = useSelector((state) => state.player.user);
  const history = useHistory();

  const events = useSelector((state) => state.event.events);

  useEffect(() => {
    setJoined(false);
    setRemPlayers(props.item.rem_players);
    if (props.item.joinedPlayers && user && user._id) {
      if (props.item.joinedPlayers.includes(user._id)) {
        setJoined(true);
      } else if (user._id === props.item.organiserId) {
        setJoined(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.item._id, events]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const joinEvent = async () => {
    if (props.item.eventStatus === "Cancelled") {
      toast.error("Cannot Join Cancelled Event ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleClose()
      return;
    }
    var body = {
      eventId: props.item._id,
      eventDay: props.item.day,
    };
    var playerToken = localStorage.getItem("playerToken");
    if (playerToken) {
      var config = {
        headers: { Authorization: `Bearer ${playerToken}` },
        "Content-Type": "application/json",
      };
      axios
        .post(`${api}/booking/joinEvent`, body, config)
        .then((res) => {
          if (props.onPressBook) {
            props.onPressBook()
          }
          console.log(res.data);
          setRemPlayers(rem_players - 1);
          handleClose()
          setJoined(true);
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data.error) {
          }
        });
    } else {
      history.push({ pathname: "/signup" });
    }
  };

  return (
    <Grid
      container
      borderRadius="15px"
      marginTop="9px"
      border="0.5px solid #d4d4d4"
      padding="9px"
      paddingLeft="15px"
      paddingBottom="9px"
    >
      <ToastContainer />
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Joining {props.item.sport} Event
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to do this on {moment(props.item.day).format("DD  MMM ")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={joinEvent}>Join</Button>
        </DialogActions>
      </Dialog>
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
            //onClick={joinEvent}
            onClick={handleClickOpen}
            size="small"
            variant="contained"
          >
            {joined
              ? user._id === props.item.organiserId
                ? "Organiser"
                : "Joined"
              : width < 450
                ? "Join"
                : width < 650 && width > 600
                  ? "Join"
                  : "Book My Spot"}
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
    </Grid>
  );
}

export default EventCard;
