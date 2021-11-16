import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EventCard from "../EventCard/EventCard";
import ConfirmEventCard from "../ConfirmEventCard/confirmEventCard";

function CreateEventConfirmModal(props) {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Grid
        container
        marginTop="15px"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item borderRadius="15px" backgroundColor="white" xs={12} sm={9}>
          <ConfirmEventCard item={props.event} place={props.place} createEvent={props.createEvent} />
        </Grid>
      </Grid>
    </Modal>
  )
}

export default CreateEventConfirmModal