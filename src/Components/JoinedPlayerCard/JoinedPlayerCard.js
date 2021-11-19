import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
  Paper,
  Avatar,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RemovePlayerModal from "../RemovePlayerModal/RemovePlayerModal";
import { useSelector } from "react-redux";
import BackoutModal from "../BackOutModal/backoutModal";
import { useHistory, useLocation } from "react-router-dom";
import { compareBackingOutTime, compareBackoutTime } from '../../util/functions'
import moment from "moment";

function JoinedPlayerCard(props) {
  const [openRemove, setOpenRemove] = useState(false);
  const [openBackout, setOpenBackout] = useState(false);
  const user = useSelector((state) => state.player.user);
  const history = useHistory()
  const location = useLocation()
  const closeRemove = () => {
    setOpenRemove(false);
  };

  const openRemoveModal = () => {
    setOpenRemove(true);
  };

  const closeBackout = () => {
    setOpenBackout(false);
  };

  const openBackoutModal = () => {
    setOpenBackout(true);
  };

  const onClickUserImage = () => {
    if (location.pathname !== `/player/${props.item.name}/${props.item._id}`) {
      history.push({ pathname: `/player/${props.item.name}/${props.item._id}` });
    }
  }

  return (
    <Grid
      container
      padding="9px"
      borderRadius="15px"
      border="0.5px solid #d4d4d4"
      marginTop="9px"
    >
      <RemovePlayerModal
        open={openRemove}
        handleClose={closeRemove}
        player={props.item}
        eventId={props.eventId}
        index={props.index}
        updateOnPlayerRemoval={props.updateOnPlayerRemoval}
      />
      <BackoutModal
        open={openBackout}
        handleClose={closeBackout}
        player={props.item}
        eventId={props.eventId}
        index={props.index}
        updateOnPlayerRemoval={props.updateOnPlayerRemoval}
      />
      <Grid container spacing={2}>
        <Grid item marginLeft="9px" marginright="9px">
          <div onClick={onClickUserImage}>
            <Avatar sx={{ width: 45, height: 45 }} src={props.item.image} />
          </div>
        </Grid>
        <Grid item>
          <Grid item xs={12}>
            <Typography variant="h6">{props.item.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">+91 {props.item.contact}</Typography>
          </Grid>
        </Grid>
        {props.organiser && !props.reject && !props.backoutPlayer && compareBackoutTime(props.event.day) && (
          <Grid
            item
            display="flex"
            flex={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button onClick={openRemoveModal} size="small" variant="contained">
              Remove
            </Button>
          </Grid>
        )}
        {user._id && user._id === props.item._id && !props.reject && !props.backoutPlayer && compareBackingOutTime(props.event.day) && (
          <Grid
            item
            display="flex"
            flex={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button onClick={openBackoutModal} size="small" variant="contained">
              Backout
            </Button>
          </Grid>
        )}
      </Grid>
      {
        props.item.requestInfo && props.item.requestInfo.requestType === "Cancelled" && (
          <Grid container padding="9px" paddingBottom="0px">
            <Grid item xs={12}>
              <Typography variant="body1">
                Reason
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle">
                {props.item.requestInfo.cancellation_reason}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                ~ {moment(props.item.requestInfo.cancelledAt).format("DD MMM   hh:mm a")}
              </Typography>
            </Grid>
          </Grid>
        )
      }
      {
        props.item.requestInfo && props.item.requestInfo.requestType === "Rejected" && (
          <Grid container padding="9px" paddingBottom="0px">
            <Grid item xs={12}>
              <Typography variant="body1">
                Reason
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle">
                {props.item.requestInfo.rejection_reason}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                ~ {moment(props.item.requestInfo.rejectedAt).format("DD MMM   hh:mm a")}
              </Typography>
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
}

export default JoinedPlayerCard;
