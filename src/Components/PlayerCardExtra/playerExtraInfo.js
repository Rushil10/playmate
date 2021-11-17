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
  const onPressOrganized = () => {
    if (location.pathname !== "/allorganized") {
      history.push({ pathname: "/allorganized" });
    }
  };

  const onPressJoined = () => {
    if (location.pathname !== "/alljoined") {
      history.push({ pathname: "/alljoined" });
    }
  };

  const onPressBackedOut = () => {
    if (location.pathname !== "/allbackedOut") {
      history.push({ pathname: "/allbackedOut" });
    }
  };

  const onPressRejected = () => {
    if (location.pathname !== "/allrejected") {
      history.push({ pathname: "/allrejected" });
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