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
import './customButton.css'

function CustomButton(props) {
    return (
        <div>
            <Grid className="mainButt" container borderLeft={props.active && "2.5px solid green"} backgroundColor={props.active ? "rgba(50,255,50,0.15)" : null}>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={0} sm={10}>
                    <button
                        onClick={props.onPress}
                        style={{
                            padding: 0,
                            margin: 0,
                            backgroundColor: "transparent",
                            borderWidth: 0,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 7,
                                marginBottom: 7
                            }}
                        >
                            <img
                                alt="friendship"
                                src={props.image}
                                style={{ height: 21.5, width: 21.5, marginRight: 15 }}
                            />
                            <Typography style={{ fontSize: 15 }}>{props.title}</Typography>
                        </div>
                    </button>
                </Grid>
                <Grid item xs={0} sm={1}></Grid>
            </Grid>
        </div>

    )
}

export default CustomButton