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

function CancelEventModal(props) {
    const [reason, setReason] = useState("");
    const handleChangeReason = (event) => {
        setReason(event.target.value);
    };

    const onBackout = () => {
        if (reason.length < 1) {
            return;
        }
        var body = {
            eventId: props.event._id,
            organiserId: props.event.organiserId,
            reason: reason,
        };
        var playerToken = localStorage.getItem("playerToken");
        var config = {
            headers: { Authorization: `Bearer ${playerToken}` },
            "Content-Type": "application/json",
        };
        axios
            .post(`${api}/event/cancel`, body, config)
            .then(async (response) => {
                console.log(response.data);
                await props.updateEvent();
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
                            Cancel Event
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
                            label="Cancellation Reason"
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
                            Cancel Event
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
}

export default CancelEventModal;
