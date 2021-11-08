import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../config/api";

function EventDetails() {
  const match = useParams();

  const getEventDetails = () => {
    axios
      .get(`${api}/event/${match.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getEventDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h4>{match.id}</h4>
    </div>
  );
}

export default EventDetails;
