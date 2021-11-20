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
import { useSelector } from "react-redux";
import useWindowDimensions from "../useWindowDimensions";
import organize from "../../images/organize.png";
import friendship from "../../images/friendship.png";
import profile from "../../images/profile.png";
import cancel from "../../images/cancel.png";
import rejected from "../../images/rejected.png";
import { useHistory, useLocation } from "react-router-dom";
import CustomButton from "../CustomButton/customButton";

function PlayerCardExtra(props) {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const history = useHistory();
  //const user = useSelector((state) => state.player.user);
  const onPressOrganized = () => {
    if (location.pathname !== "/allOrganized") {
      history.push({ pathname: "/allOrganized" });
    }
  };

  const onPressJoined = () => {
    if (location.pathname !== "/allJoined") {
      history.push({ pathname: "/allJoined" });
    }
  };

  const onPressBackedOut = () => {
    if (location.pathname !== "/allBackedOut") {
      history.push({ pathname: "/allBackedOut" });
    }
  };

  const onPressRejected = () => {
    if (location.pathname !== "/allRejected") {
      history.push({ pathname: "/allRejected" });
    }
  };
  return (
    <Paper /* variant="outlined" */ elevation={2}>
      <Grid conatiner /* backgroundColor="rgba(42,170,138,0.05)" */>
        <Grid container marginTop="15px" paddingTop="15px" paddingBottom="15px" spacing={1}>
          <Grid item xs={8} sm={12}>
            <Typography style={{ marginLeft: 15, marginBottom: 9 }}>More Details</Typography>
            <CustomButton title="All Organized Events" image={organize} onPress={onPressOrganized} />
            <CustomButton title="All Joined Events" image={friendship} onPress={onPressJoined} />
            <CustomButton title="All BackedOut Events" image={cancel} onPress={onPressBackedOut} />
            <CustomButton title="All Rejected Events" image={rejected} onPress={onPressRejected} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default PlayerCardExtra