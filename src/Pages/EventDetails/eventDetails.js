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
import JoinedPlayerCard from "../../Components/JoinedPlayerCard/JoinedPlayerCard";
import OrganizedEventCard from "../../Components/OrganizedEventCard/OrganizedEventCard";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import api from "../../config/api";
import { useSelector } from "react-redux";

function EventDetails() {
  const match = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [isOrganiser, setIsOrganiser] = useState(false);
  const user = useSelector((state) => state.player.user);
  const getEventDetails = () => {
    setLoading(true);
    setIsOrganiser(false);
    axios
      .get(`${api}/event/${match.id}`)
      .then((res) => {
        console.log(res);
        setEventDetails(res.data.event);
        if (user._id && res.data.event.organiserId === user._id) {
          setIsOrganiser(true);
        }
        setPlayers(res.data.players);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const updateOnPlayerRemoval = (index, playerId) => {
    var event = { ...eventDetails };
    var rejects = [];
    if (event.rejectedPlayersId) {
      rejects = [...event.rejectedPlayersId];
    }
    rejects.push(playerId);
    event.rem_players = event.rem_players + 1;
    event.rejectedPlayersId = rejects;
    console.log(event);
    setEventDetails(event);
    var allPlayers = [...players];
    allPlayers.splice(index, 1);
    setPlayers(allPlayers);
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
        <Grid container>
          {players.map((player, index) => (
            <JoinedPlayerCard
              eventId={match.id}
              item={player}
              index={index}
              organiser={isOrganiser}
              updateOnPlayerRemoval={updateOnPlayerRemoval}
            />
          ))}
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
