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
import { getRejectedEvents } from "../../redux/events/eventActions";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import EventCard from "../../Components/EventCard/EventCard";
import OrganizedEventCard from "../../Components/OrganizedEventCard/OrganizedEventCard";
import Header from "../../Components/Header/header";

function RejectedEvents(props) {
    const callRejectedEvents = useCallback(
        () => store.dispatch(getRejectedEvents()),
        []
    );
    const [fetchedEvents, setFetchedEvents] = useState([]);

    const rejectedLoading = useSelector((state) => state.event.rejectedLoading);

    const rejectedEvents = useSelector((state) => state.event.rejectedEvents);

    useEffect(() => {
        //console.log(RejectedEvents);
        setFetchedEvents(rejectedEvents);
    }, [rejectedEvents]);

    useEffect(() => {
        console.log("Calling Backed Out Events");
        callRejectedEvents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
            <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
                <Grid container>
                    <Header title="Rejected Events" />
                    <Paper
                        elevation={0}
                        style={{
                            marginTop: 15,
                            width: "100%",
                            overflow: "auto",
                            borderBottomWidth: 0,
                        }}
                    >
                        {!rejectedLoading &&
                            fetchedEvents.map((item, index) => (
                                <OrganizedEventCard item={item[0]} index={index} reject={item[1]} />
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

export default RejectedEvents;
