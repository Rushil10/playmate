import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
} from "@mui/material";
import React from "react";
import Select from "react-select";
import sports from "../../Components/ConstantData/sports";
import { useForm, Controller } from "react-hook-form";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { DesktopDatePicker, TimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

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
  const [venue, setVenue] = React.useState();
  const [gmapsLoaded, setGmapsLoaded] = React.useState(false);

  // This is how you do componentDidMount() with React hooks
  React.useEffect(() => {
    window.initMap = () => setGmapsLoaded(true);
    const gmapScriptEl = document.createElement(`script`);
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places&callback=initMap`;
    document
      .querySelector(`body`)
      .insertAdjacentElement(`beforeend`, gmapScriptEl);
  }, []);

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  const handleChangeAddress = (address) => {
    setVenue(address);
  };

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

  return (
    <Grid container marginTop={1} marginLeft={1}>
      <Grid container>
        <Grid marginTop="2.5px" item xs={10} sm={2} md={2}>
          <Typography marginY="dense" variant="h6">
            Select Sport
          </Typography>
        </Grid>
        <Grid item xs={10} sm={4} md={4}>
          <Select
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            value={sport}
            onChange={handleChangeSport}
            options={sports}
          />
        </Grid>
      </Grid>
      <Grid container>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} marginTop="21px">
            <Grid container spacing={2}>
              <Grid item xs={10} sm={4} md={4}>
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
              <Grid item xs={10} sm={4} md={4}>
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
            <Grid item xs={10} sm={4} md={4}>
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
            <Grid item xs={10} sm={4} md={4}>
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
            <Grid item xs={10} sm={4} md={4}>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DesktopDatePicker
                  label="Select Day"
                  inputFormat="D MMMM yyyy"
                  value={day}
                  onChange={handleChangeDay}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid>
              {gmapsLoaded && (
                <PlacesAutocomplete
                  value={venue}
                  onChange={handleChangeAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <input
                        {...getInputProps({
                          placeholder: "Search Places ...",
                          className: "location-search-input",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              )}
            </Grid>
          </Stack>
          <input type="submit" />
        </form>
      </Grid>
    </Grid>
  );
}

export default CreateEvent;
