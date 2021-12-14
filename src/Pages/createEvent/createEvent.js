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
import kick from "../../images/kick3.jpg";
import "./createEvent.css";
import mapUrl from "../../config/mapBoxApi";
import api from "../../config/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateEventConfirmModal from "../../Components/CreateEventConfirmModal/createEventConfirmModal";
import { useHistory } from "react-router-dom";

function CreateEvent(props) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(sport);
    console.log(day);
    console.log(duration);
    console.log(value);
    console.log(place);
    if (
      !createEventValidation(
        data.remPlayers,
        data.totalPlayers,
        data.age,
        data.price
      )
    ) {
      return;
    }
    var sday;
    var time;
    if (day._d) {
      sday = day._d;
    } else {
      sday = day;
    }
    if (value._d) {
      time = value._d;
    } else {
      time = value;
    }
    var event = {
      total_players: Number(data.totalPlayers),
      rem_players: Number(data.remPlayers),
      price_per_person: Number(data.price),
      venue: data.venue,
      age: Number(data.age),
      timings: time,
      day: sday,
      sport: sport.label,
      location: {
        type: "Point",
        coordinates: [
          place.geometry.coordinates[0],
          place.geometry.coordinates[1],
        ],
      },
      duration: duration.label,
      additionalAddressInfo: additionalAddressInfo,
    };
    setEventDet(event)
    setOpenModal(true)
    //addMyEvent(event);
  };
  const [sport, setSport] = React.useState(sports[0]);
  const [value, setValue] = React.useState(new Date());
  const [day, setDay] = React.useState(new Date());
  const [district, setDistrict] = React.useState("Mumbai");
  const [duration, setDuration] = React.useState("");
  const [locality, setLocality] = React.useState("");
  const [places, setPlaces] = React.useState([]);
  const [place, setPlace] = React.useState({});
  const [token, setToken] = React.useState("");
  const [additionalAddressInfo, setAdditionalAddressInfo] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [eventDet, setEventDet] = React.useState({})

  const closeModal = () => {
    setOpenModal(false)
  }

  function isInt(value) {
    return (
      !isNaN(value) &&
      parseInt(Number(value)) == value &&
      !isNaN(parseInt(value, 10))
    );
  }

  const createEventValidation = (remPlayers, totalPlayers, age, price) => {
    var sday;
    var time;
    if (day._d) {
      sday = day._d;
    } else {
      sday = day;
    }
    if (value._d) {
      time = value._d;
    } else {
      time = value;
    }
    sday.setHours(time.getHours());
    sday.setMinutes(time.getMinutes());
    if (!isInt(remPlayers) || !isInt(totalPlayers)) {
      toast.error("Remaining Players and Total Players must be Integer !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    } else if (!isInt(age)) {
      toast.error("Age must be Integer !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!isInt(price)) {
      toast.error("Price must be Integer !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (sday < new Date()) {
      toast.error("Event must start in future !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    } else if (!duration) {
      toast.error("Select Duration !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    } else if (Number(remPlayers) >= Number(totalPlayers)) {
      toast.error("Remaining Players Cannot Be Greater Than Total Players !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    } else if (!place.geometry) {
      toast.error("Select a locality / landmark from dropdown", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    } else {
      return true;
    }
  };

  const history = useHistory()

  const addMyEvent = async (event) => {
    var playerToken = localStorage.getItem("playerToken");
    var config = {
      headers: { Authorization: `Bearer ${playerToken}` },
      "Content-Type": "application/json",
    };
    axios
      .post(`${api}/event/create`, event, config)
      .then((res) => {
        console.log(res.data);
        toast.success('Event Created ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        closeModal()
        history.push({ pathname: "/" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
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
   const getPlaces = (locality, token) => {
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

  const callSearch = (text) => {
    console.log(text, "hiii");
  };

  React.useEffect(() => {
    setToken(
      "pk.eyJ1IjoicnVzaDEwIiwiYSI6ImNrbmFsZ2VnYzBrY3gydm9veGZic2RrcDMifQ.g3FCfKRsMhdIhqwxRNv4gQ"
    );
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
    <>
      <div className="backgroundImageContainer">
        <img src={kick} className="kickImg" />
      </div>
      <ToastContainer />
      <CreateEventConfirmModal open={openModal} event={eventDet} place={place} createEvent={addMyEvent} handleClose={closeModal} />
      <Grid container marginTop="15px" marginBottom={5} marginLeft={1}>
        <Grid container spacing={2}>
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
          <Grid item xs={10} sm={5} md={4}>
            <Select
              menuPortalTarget={document.body}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              }}
              value={duration}
              placeholder="Select Duration"
              onChange={handleChangeDuration}
              options={durations}
            />
          </Grid>
        </Grid>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          {/* <Stack spacing={3} marginTop="21px"> */}
          <Grid container marginTop="15px" spacing={2}>
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
          <Grid container marginTop="15px" spacing={2}>
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
          <Grid container spacing={2} marginTop="15px">
            <Grid item xs={10} sm={5} md={2}>
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
            <Grid item xs={10} sm={5} md={2}>
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
          </Grid>
          <Grid container marginTop="15px" spacing={2}>
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
            <Grid item xs={10} sm={5} md={4}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                label="Additional Address Info (Google Maps Link)"
                value={additionalAddressInfo}
                onChange={handleChangeAdditionalAddressInfo}
              />
            </Grid>
          </Grid>
          <Grid container marginTop="15px" spacing={2}>
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
          <Grid marginTop="15px" item xs={10} sm={6} md={4}>
            <Button variant="contained" type="submit">
              Organise My Event
            </Button>
          </Grid>
          {/* </Stack> */}
        </form>
      </Grid>
    </>
  );
}

export default CreateEvent;
