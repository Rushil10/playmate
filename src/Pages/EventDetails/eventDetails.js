import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventDetailsCard from "../../Components/EventDetailsCard/EventDetailsCard";
import OrganizedEventCard from "../../Components/OrganizedEventCard/OrganizedEventCard";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import api from "../../config/api";

function EventDetails() {
  const match = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  const getEventDetails = () => {
    setLoading(true);
    axios
      .get(`${api}/event/${match.id}`)
      .then((res) => {
        console.log(res);
        setEventDetails(res.data.event);
        setPlayers(res.data.players);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getEventDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
      <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
        <Grid container>
          <Paper
            elevation={0}
            style={{
              marginTop: 15,
              width: "100%",
              overflow: "auto",
              borderBottomWidth: 0,
            }}
          >
            <EventDetailsCard item={eventDetails} />
          </Paper>
        </Grid>
        <Grid container>
          <Grid item marginTop="9px">
            <Typography variant="h6">Joined Players</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        marginTop="15px"
        item
        xs={12}
        sm={4}
        md={2.5}
        order={{ xs: 1, sm: 2 }}
      >
        <PlayerCard />
      </Grid>
    </Grid>
  );
}

export default EventDetails;
