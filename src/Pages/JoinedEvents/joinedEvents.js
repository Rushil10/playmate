import React, { useCallback, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import store from "../../redux/store";
import { useSelector } from "react-redux";
import { getJoinedEvents } from "../../redux/events/eventActions";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import EventCard from "../../Components/EventCard/EventCard";
import OrganizedEventCard from "../../Components/OrganizedEventCard/OrganizedEventCard";
import Header from "../../Components/Header/header";

function JoinedEvents(props) {
  const callJoinedEvents = useCallback(
    () => store.dispatch(getJoinedEvents()),
    []
  );
  const [fetchedEvents, setFetchedEvents] = useState([]);

  const joinedLoading = useSelector((state) => state.event.joinedLoading);

  const joinedEvents = useSelector((state) => state.event.joinedEvents);

  useEffect(() => {
    //console.log(JoinedEvents);
    setFetchedEvents(joinedEvents);
  }, [joinedEvents]);

  useEffect(() => {
    console.log("Calling Joined Events");
    callJoinedEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
      <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
        <Grid container>
          <Header title="Joined Events" />
          <Paper
            elevation={0}
            style={{
              marginTop: 15,
              width: "100%",
              overflow: "auto",
              borderBottomWidth: 0,
            }}
          >
            {!joinedLoading &&
              fetchedEvents.map((item, index) => (
                <OrganizedEventCard item={item} index={index} />
              ))}
          </Paper>
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

export default JoinedEvents;
