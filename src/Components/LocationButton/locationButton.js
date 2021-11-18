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

function LocationButton(props) {
  const [open, setOpen] = useState(false)

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
        <Typography variant="h6" color="white">Thane</Typography>
      </div>
      <div>
        <KeyboardArrowDownSharpIcon color="white" style={{ marginLeft: 5, marginTop: 5 }} />
      </div>
    </div>
  )
}

export default LocationButton