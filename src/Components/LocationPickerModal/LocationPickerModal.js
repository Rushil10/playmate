import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import { alpha, Box, Button, debounce, Grid, Modal, styled, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import mapUrl from "../../config/mapBoxApi";
import useWindowDimensions from "../useWindowDimensions";
import './locationPicker.css'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import store from "../../redux/store";
import { setLocation } from '../../redux/player/playerActions'


function LocationPickerModal(props) {

  const [loc, setLoc] = useState('')
  const [locality, setLocality] = React.useState("");
  const [places, setPlaces] = React.useState([]);
  const [place, setPlace] = React.useState({});
  const [token, setToken] = React.useState("");

  const getPlaces = (locality, token) => {
    var text = locality.replace(" ", "%20");
    axios
      .get(`${mapUrl}/${locality}.json?access_token=${token}`)
      .then((res) => {
        setPlaces(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitLocation = async () => {
    console.log(place)
    localStorage.setItem("city", place.text)
    localStorage.setItem("lat", place.geometry.coordinates[1])
    localStorage.setItem("lon", place.geometry.coordinates[0])
    var loc = {
      longitude: place.geometry.coordinates[0],
      latitude: place.geometry.coordinates[1],
      city: place.text
    }
    store.dispatch(setLocation(loc))
    await props.handleClose()
  }

  const handler = React.useCallback(debounce(getPlaces, 2000), []);

  const callSearch = (text) => {
    console.log(text, "hiii");
  };

  React.useEffect(() => {
    setToken(
      "pk.eyJ1IjoicnVzaDEwIiwiYSI6ImNrbmFsZ2VnYzBrY3gydm9veGZic2RrcDMifQ.g3FCfKRsMhdIhqwxRNv4gQ"
    );
  }, []);

  const handleChangeLocality = (e) => {
    setLocality(e.target.value);
    //console.log(token);
    if (e.target.value.length > 0) {
      //console.log("in if");
      handler(e.target.value, token);
    }
  };

  const onPressPlace = (place) => {
    setPlace(place);
    setLocality(place.text);
    setPlaces([]);
  };

  const { height, width } = useWindowDimensions()

  const getLocationCurrent = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      axios.get(`https://us1.locationiq.com/v1/reverse.php?key=pk.e7c91e218be02fabea9b987697095020&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`).then(res => {
        console.log(res.data)
        var city = res.data.address.city;
        console.log(city)
        localStorage.setItem("city", city)
        localStorage.setItem("lat", position.coords.latitude)
        localStorage.setItem("lon", position.coords.longitude)
        var loc = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          city
        }
        store.dispatch(setLocation(loc))
        props.handleClose()
      }).catch(err => {
        console.log(err)
      })
    });
  }

  return (
    <Modal open={props.open}
      onClose={props.handleClose}
      onBackdropClick={props.handleClose}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={4} minHeight={height}>
          <div style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 15, marginTop: 65, marginLeft: 15, marginRight: 15, padding: 15 }}>
            <TextField
              size="small"
              variant="outlined"
              fullWidth
              label="Search District / Landmark"
              value={locality}
              onChange={handleChangeLocality}
            />
            <div className="search-container">
              {places.map((place) => {
                return (
                  <div
                    role="button"
                    onClick={() => onPressPlace(place)}
                    className="placeContainer"
                  >
                    <h4 className="placeName">{place.text}<text style={{ fontWeight: 'normal' }}> {place.place_name}</text></h4>
                  </div>
                );
              })}
            </div>

            <button onClick={getLocationCurrent} style={{ display: 'flex', background: 'transparent', borderWidth: 0, flexDirection: 'row', alignItems: 'center' }}>
              <GpsFixedIcon style={{ color: '#1da1f2' }} />
              <h6 style={{ marginLeft: 15, fontSize: 16, color: '#1da1f2', padding: 6, margin: 9 }}>Use Current Location</h6>
            </button>

            <div style={{ marginTop: 9 }}>
              <Button onClick={onSubmitLocation} disabled={place.text ? false : true} size="medium" variant="contained" fullWidth>Submit Location</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default LocationPickerModal