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

function JoinedPlayerCard(props) {
  const [openRemove, setOpenRemove] = useState(false);
  const [openBackout, setOpenBackout] = useState(false);
  const user = useSelector((state) => state.player.user);
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
          <Avatar sx={{ width: 45, height: 45 }} src={props.item.image} />
        </Grid>
        <Grid item>
          <Grid item xs={12}>
            <Typography variant="h6">{props.item.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">+91 {props.item.contact}</Typography>
          </Grid>
        </Grid>
        {props.organiser && !props.reject && !props.backoutPlayer && (
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
        {user._id && user._id === props.item._id && !props.reject && !props.backoutPlayer && (
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
    </Grid>
  );
}

export default JoinedPlayerCard;
