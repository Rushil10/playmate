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
import useWindowDimensions from "../useWindowDimensions";
import notify from '../../images/notify.gif'

function NotifiedModal(props) {

    const { height, width } = useWindowDimensions()

    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Grid
                container
                marginTop="15px"
                //height={height}
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
                        <img src={notify} style={{ width: width / 2, maxWidth: 125, maxHeight: 125, height: width / 2 }} />
                    </Grid>
                    <Grid item marginTop="5px">
                        <Typography variant="h5">{props.title}</Typography>
                    </Grid>
                    <Grid item marginTop="5px">
                        <Typography>{props.body}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
}

export default NotifiedModal;
