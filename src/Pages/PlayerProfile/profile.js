import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import store from "../../redux/store";
import { useSelector } from "react-redux";
import api from "../../config/api";
import HorizontalBarChart from "../../Components/Charts/HorizontalBarChart";
import PieChart from "../../Components/Charts/PieChart";
import useWindowDimensions from "../../Components/useWindowDimensions";

function PlayerProfile(props) {
  const match = useParams();
  const [playerDetails, setPlayerDetails] = useState({})
  const [pieDetails, setPieDetails] = useState({});
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])
  const [labels1, setLabels1] = useState([])
  const [values1, setValues1] = useState([])
  const [loading, setLoading] = useState(true)
  const { height, width } = useWindowDimensions()

  const fetchPlayerDetails = () => {
    setLoading(true);
    axios
      .get(`${api}/player/profile/${match.id}`)
      .then((res) => {
        console.log(res.data)
        var keys = Object.keys(res.data.analysis)
        setLabels(keys)
        console.log(keys)
        var value = Object.values(res.data.analysis)
        setValues(value)
        setLabels1(res.data.labels)
        setValues1(res.data.values)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    fetchPlayerDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container padding="15px">
      {!loading &&
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <text>Hiiii</text>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <HorizontalBarChart label={labels} value={values} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PieChart label={labels1} value={values1} />
          </Grid>
        </Grid>
      }
    </Grid>
  )
}

export default PlayerProfile