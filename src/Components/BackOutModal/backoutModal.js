import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import api from "../../config/api";

function BackoutModal(props) {
  const [reason, setReason] = useState("");
  const handleChangeReason = (event) => {
    setReason(event.target.value);
  };

  const onBackout = () => {
    if (reason.length < 1) {
      return;
    }
    var body = {
      eventId: props.eventId,
      playerId: props.player._id,
      backoutReason: reason,
    };
    var playerToken = localStorage.getItem("playerToken");
    var config = {
      headers: { Authorization: `Bearer ${playerToken}` },
      "Content-Type": "application/json",
    };
    axios
      .post(`${api}/booking/backout`, body, config)
      .then(async (response) => {
        console.log(response.data);
        await props.updateOnPlayerRemoval(props.index, props.player._id);
        await props.handleClose();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Grid
        container
        marginTop="15px"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          backgroundColor="white"
          borderRadius="20px"
          padding="15px"
        >
          <Grid item>
            <Typography variant="h6">
              {props.player.name} backing out
            </Typography>
          </Grid>
          <Grid item marginTop="15px">
            <TextField
              multiline
              fullWidth
              rows={5}
              value={reason}
              onChange={handleChangeReason}
              maxRows={5}
              label="Backout Reason"
              variant="outlined"
            />
          </Grid>
          <Grid item marginTop="15px">
            <Button
              onClick={onBackout}
              fullWidth
              size="medium"
              variant="contained"
            >
              Backout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default BackoutModal;
