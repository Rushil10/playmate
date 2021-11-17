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
import { getBackedOutEvents } from "../../redux/events/eventActions";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import EventCard from "../../Components/EventCard/EventCard";
import OrganizedEventCard from "../../Components/OrganizedEventCard/OrganizedEventCard";
import Header from "../../Components/Header/header";

function BackedOutEvents(props) {
    const callBackedOutEvents = useCallback(
        () => store.dispatch(getBackedOutEvents()),
        []
    );
    const [fetchedEvents, setFetchedEvents] = useState([]);

    const backedOutLoading = useSelector((state) => state.event.backedOutLoading);

    const backedOutEvents = useSelector((state) => state.event.backedOutEvents);

    useEffect(() => {
        //console.log(BackedOutEvents);
        setFetchedEvents(backedOutEvents);
    }, [backedOutEvents]);

    useEffect(() => {
        console.log("Calling Backed Out Events");
        callBackedOutEvents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
            <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
                <Grid container>
                    <Header title="Backed Out Events" />
                    <Paper
                        elevation={0}
                        style={{
                            marginTop: 15,
                            width: "100%",
                            overflow: "auto",
                            borderBottomWidth: 0,
                        }}
                    >
                        {!backedOutLoading &&
                            fetchedEvents.map((item, index) => (
                                <OrganizedEventCard item={item[0]} index={index} backedOut={item[1]} />
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

export default BackedOutEvents;
