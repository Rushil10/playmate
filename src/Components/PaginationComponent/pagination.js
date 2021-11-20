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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { green } from "@mui/material/colors";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function PaginationComponent(props) {
  const events = useSelector((state) => state.event.events);
  return (
    <Grid container padding="15px" display="flex" flex={1} justifyContent="center" spacing={2}>
      {
        props.page > 1 &&
        <Grid item>
          <div onClick={props.backward}>
            <ArrowBackIosIcon />
          </div>
        </Grid>
      }
      <Grid item>
        <Avatar sx={{ bgcolor: green[500], height: 29, width: 29 }}>{props.page}</Avatar>
      </Grid>
      {
        events.length >= 15 &&
        <Grid item>
          <div onClick={props.forward}>
            <ArrowForwardIosIcon />
          </div>
        </Grid>
      }
    </Grid>
  )
}

export default PaginationComponent