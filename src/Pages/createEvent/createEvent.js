import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
} from "@mui/material";
import React from "react";
import Select from "react-select";
import sports from "../../Components/ConstantData/sports";
import { useForm, Controller } from "react-hook-form";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { DesktopDatePicker, TimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import districts from "../../Components/ConstantData/districts";
import durations from "../../Components/ConstantData/duration";
import axios from "axios";
import { debounce } from "lodash";
import "./createEvent.css";
import mapUrl from "../../config/mapBoxApi";

function CreateEvent(props) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [sport, setSport] = React.useState(sports[0]);
  const [value, setValue] = React.useState(new Date());
  const [day, setDay] = React.useState(new Date());
  const [district, setDistrict] = React.useState("Mumbai");
  const [duration, setDuration] = React.useState("1 hour");
  const [locality, setLocality] = React.useState("");
  const [places, setPlaces] = React.useState([]);
  const [place, setPlace] = React.useState({});
  const [token, setToken] = React.useState("");
  const [additionalAddressInfo, setAdditionalAddressInfo] = React.useState("");

  const getToken = () => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append(
      "client_id",
      "33OkryzDZsKKHZtg80ha1RrkvYDPQFZw3_LrzA5DaNrL9q9bV-kRuwGGXpvbxGer4xj1Ol09sMGh2gxQwYMTQQ=="
    );
    params.append(
      "client_secret",
      "lrFxI-iSEg-flnVjCpxr4hkMN0ot7YbnIFVQ0Uu_Z--ojU8loNyHv5fxtDOWo4VXOV7eGZVDX90FBaHxRZTGQiumojKzI2IO"
    );

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        "https://outpost.mapmyindia.com/api/security/oauth/token",
        params,
        config
      )
      .then((res) => {
        console.log(res.data.access_token);
        setToken(res.data.access_token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

/*   const getPlaces = (locality, token) => {
    console.log("hiii", token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(`/places/search/json?query=${locality}`, config)
      .then((res) => {
        console.log(res.data.suggestedLocations);
        setPlaces(res.data.suggestedLocations);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }; */

  const getPlaces = (locality, token) => {
    axios.get(`${mapUrl}/${locality}.json?worldview=in&access_token=${token}`).then(res => {
      setPlaces(res.data.features)
    }).catch(err => {
      console.log(err)
    })
  }

  const callSearch = (text) => {
    console.log(text, "hiii");
  };

  React.useEffect(() => {
    setToken("pk.eyJ1IjoicnVzaDEwIiwiYSI6ImNrbmFsZ2VnYzBrY3gydm9veGZic2RrcDMifQ.g3FCfKRsMhdIhqwxRNv4gQ")
  }, []);

  const handleChangeDay = (value) => {
    setDay(value);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeSport = (selectedOption) => {
    setSport(selectedOption);
    console.log(selectedOption);
  };

  const handleChangeDistrict = (selectedOption) => {
    setDistrict(selectedOption);
    console.log(selectedOption);
  };

  const handleChangeDuration = (selectedOption) => {
    setDuration(selectedOption);
    console.log(selectedOption);
  };

  const handleChangeAdditionalAddressInfo = (e) => {
    setAdditionalAddressInfo(e.target.value);
  };

  const handler = React.useCallback(debounce(getPlaces, 2000), []);

  const handleChangeLocality = (e) => {
    setLocality(e.target.value);
    console.log(token);
    if (e.target.value.length > 0) {
      console.log("in if");
      handler(e.target.value, token);
    }
  };

  const onPressPlace = (place) => {
    setPlace(place);
    setLocality(place.text);
    setPlaces([]);
  };

  return (
    <Grid container marginTop={1} marginBottom={5} marginLeft={1}>
      <Grid container>
        {/* <Grid marginTop="2.5px" item xs={10} sm={2} md={2}>
          <Typography marginY="dense" variant="h6">
            Select Sport
          </Typography>
        </Grid> */}
        <Grid item xs={10} sm={6} md={4}>
          <Select
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            value={sport}
            placeholder="Select Sport"
            onChange={handleChangeSport}
            options={sports}
          />
        </Grid>
      </Grid>
      <Grid container>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} marginTop="21px">
            <Grid container spacing={2}>
              <Grid item xs={10} sm={5} md={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  label="Total Players"
                  name="totalPlayers"
                  {...register("totalPlayers", {
                    required: "Total Number Of Players Is Required",
                  })}
                  error={Boolean(
                    errors ? errors.totalPlayers && errors.totalPlayers : false
                  )}
                  helperText={errors?.totalPlayers?.message}
                />
              </Grid>
              <Grid item xs={10} sm={5} md={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  label="Players Needed"
                  name="remPlayers"
                  {...register("remPlayers", {
                    required: "Remaining Number Of Players Is Required",
                  })}
                  error={Boolean(
                    errors ? errors.remPlayers && errors.remPlayers : false
                  )}
                  helperText={errors?.remPlayers?.message}
                />
              </Grid>
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
              <TextField
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
                label="Cost Per Person"
                name="price"
                {...register("price", {
                  required: "Price Per Person Is Required",
                })}
                error={Boolean(errors ? errors.price && errors.price : false)}
                helperText={errors?.price?.message}
              />
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <TimePicker
                  size="small"
                  label="Select Timing"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                  label="Select Day"
                  views={["year", "month", "day"]}
                  //inputFormat="D MMMM yyyy"
                  value={day}
                  onChange={handleChangeDay}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            {/* <Grid container >
              <Grid item xs={10} sm={5} md={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  label="Venue Name / Turf Name"
                  name="venue"
                  {...register("venue", {
                    required: "Venue / Turf Name Is Required",
                  })}
                  error={Boolean(errors ? errors.venue && errors.venue : false)}
                  helperText={errors?.venue?.message}
                />
              </Grid>
              <Grid marginLeft="19px" item xs={10} sm={5} md={4}>
                <Select
                  menuPortalTarget={document.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  value={district}
                  placeholder="Select Your District"
                  onChange={handleChangeDistrict}
                  options={districts}
                />
              </Grid>
            </Grid> */}
            <Grid>
              <Grid item xs={10} sm={5} md={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  label="Venue Name / Turf Name"
                  name="venue"
                  {...register("venue", {
                    required: "Venue / Turf Name is Required",
                  })}
                  error={Boolean(errors ? errors.venue && errors.venue : false)}
                  helperText={errors?.venue?.message}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={10} sm={5} md={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  label="Search Locality / Landmark Near Your Venue"
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
                        <h4 className="placeName">{place.text}</h4>
                        <text className="text-search-caption">
                          {place.place_name}
                        </text>
                      </div>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={10} sm={5} md={4}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                label="Additional Address Info (Optional)"
                value={additionalAddressInfo}
                onChange={handleChangeAdditionalAddressInfo}
              />
            </Grid>
            <Grid>
              <Grid item xs={10} sm={5} md={4}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  label="Average Age"
                  name="age"
                  {...register("age", {
                    required: "Average Age is Required",
                  })}
                  error={Boolean(errors ? errors.age && errors.age : false)}
                  helperText={errors?.age?.message}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid item xs={10} sm={5} md={4}>
                <Select
                  menuPortalTarget={document.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  value={duration}
                  placeholder="Select Duration"
                  onChange={handleChangeDuration}
                  options={durations}
                />
              </Grid>
            </Grid>
            <Grid item xs={10} sm={6} md={4}>
              <Button variant="contained" type="submit">
                Organise My Event
              </Button>
            </Grid>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
}

export default CreateEvent;
