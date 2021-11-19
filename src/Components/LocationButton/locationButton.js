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
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import LocationPickerModal from "../LocationPickerModal/LocationPickerModal";
import { useSelector } from "react-redux";

function LocationButton(props) {
  const [open, setOpen] = useState(false)
  const location = useSelector((state) => state.player.location);

  const closeRemove = () => {
    setOpen(false);
  };

  const openRemove = () => {
    setOpen(true);
  };

  return (
    <div onClick={openRemove} style={{ marginLeft: 15, display: "flex", flexDirection: "row", alignItems: 'center' }}>
      <LocationPickerModal open={open} handleClose={closeRemove} />
      <div>
        <Typography style={{ fontSize: 18}} color="white">{location.city}</Typography>
      </div>
      <div>
        <KeyboardArrowDownSharpIcon color="white" style={{ marginLeft: 5, marginTop: 5 }} />
      </div>
    </div>
  )
}

export default LocationButton