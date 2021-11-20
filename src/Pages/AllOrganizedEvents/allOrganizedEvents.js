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
import PlayerCard from "../../Components/PlayerCard/playerCard";
import EventCard from "../../Components/EventCard/EventCard";
import OrganizedEventCard from "../../Components/OrganizedEventCard/OrganizedEventCard";
import Header from "../../Components/Header/header";
import axios from "axios";
import api from "../../config/api";

function AllOrganizedEvents(props) {

    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([]);

    const callOrganizedEvents = () => {
        setLoading(true)
        var playerToken = localStorage.getItem("playerToken");
        var config = {
            headers: { Authorization: `Bearer ${playerToken}` },
            "Content-Type": "application/json",
        };
        axios
            .get(`${api}/event/player/all`, config)
            .then((res) => {
                console.log(res.data);
                setEvents(res.data.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    useEffect(() => {
        console.log("Calling Organized Events!");
        callOrganizedEvents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
            <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
                <Grid container>
                    <Header title="Organized Events" />
                    <Paper
                        elevation={0}
                        style={{
                            marginTop: 15,
                            width: "100%",
                            overflow: "auto",
                            borderBottomWidth: 0,
                        }}
                    >
                        {!loading &&
                            events.map((item, index) => (
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

export default AllOrganizedEvents;
