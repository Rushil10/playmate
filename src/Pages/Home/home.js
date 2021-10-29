/* eslint-disable react/jsx-no-comment-textnodes */
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
import DatePickerModal from "../../Components/Modals/DatePickerModal";
import "./home.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import moment from "moment";
import sports from "../../Components/ConstantData/sports";
import Select from "react-select";
import { ageGroups } from "../../Components/ConstantData/ageGroups";
import genders from "../../Components/ConstantData/gender";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../Components/useWindowDimensions";
import { SIZE } from "../../Components/ConstantData/apiConstants";
import store from "../../redux/store";
import { getEventsNearMe } from "../../redux/events/eventActions";

function Home() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [dateVal, setDateVal] = useState(new Date());
  const [sport, setSport] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const authenticated = useSelector((state) => state.player.authenticated);
  const user = useSelector((state) => state.player.user);
  const { height, width } = useWindowDimensions();
  const [page, setPage] = useState(1);

  const callGetEvents = useCallback(
    (filters) => store.dispatch(getEventsNearMe(filters)),
    []
  );

  const getEventsInLocality = async () => {
    var filter = {
      longitude: 72.972478,
      latitude: 19.126695,
      size: SIZE,
      page,
    };
    callGetEvents(filter);
  };

  useEffect(() => {
    getEventsInLocality();
  }, []);

  const openDate = () => {
    setOpenDatePicker(true);
  };

  const closeDate = () => {
    setOpenDatePicker(false);
  };

  const changeDate = (newValue) => {
    setDateVal(newValue);
    closeDate();
  };

  const handleChangeSport = (selectedOption) => {
    setSport(selectedOption);
    console.log(selectedOption);
  };

  const handleChangeAge = (selectedOption) => {
    setAge(selectedOption);
    console.log(selectedOption);
  };

  const handleChangeGender = (selectedOption) => {
    if (selectedOption.value === "Remove") {
      setGender("");
      return;
    }
    setGender(selectedOption);
    console.log(selectedOption);
  };

  const colourStyles = {
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    control: (base) => ({
      ...base,
      border: "0.75px solid #29ab87",
      backgroundColor: "rgba(64,224,208,0.05)",
      borderRadius: "25px",
      boxShadow: "none",
      "&:hover": {
        color: "#29ab87",
      },
      /* // This line disable the blue border
      boxShadow: "0.5px solid #29ab87",*/
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#29ab87",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#29ab87",
      fontWeight: "bold",
    }),
    /* control: (styles) => ({
      ...styles,
      backgroundColor: "white",
    }), */
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#29ab87" : "black",
      backgroundColor: state.isSelected ? "rgba(64,224,208,0.05)" : "white",
      fontWeight: state.isSelected ? "bold" : "normal",
      "&:hover": {
        borderColor: "#29ab87",
        color: "#29ab87",
        backgroundColor: "rgba(173, 216, 230,0.15)",
      },
    }),
  };

  return (
    <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
      <DatePickerModal
        dateVal={dateVal}
        changeDate={changeDate}
        open={openDatePicker}
        handleClose={closeDate}
      />
      <Grid
        marginTop="15px"
        item
        xs={12}
        sm={8}
        md={9.5}
        order={{ xs: 2, sm: 1 }}
      >
        <Grid alignItems="center" container spacing={2}>
          <Grid item>
            <button onClick={openDate} className="filterButtonStyle">
              <div className="columnFlex">
                <text className="smallText smallMarginBottom">
                  {moment(dateVal).format("MMM")}
                </text>
                <h4 className="noSpacing darkGreenColor">
                  {moment(dateVal).format("DD ddd")}
                </h4>
              </div>
              <ArrowDropDownIcon style={{ color: "#29ab87" }} />
            </button>
          </Grid>
          <Grid minWidth="150px" item>
            <Select
              styles={colourStyles}
              menuPortalTarget={document.body}
              //styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              value={sport}
              placeholder="Sport"
              onChange={handleChangeSport}
              options={sports}
            />
          </Grid>
          <Grid item>
            <Select
              styles={colourStyles}
              menuPortalTarget={document.body}
              //styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              value={age}
              placeholder="Age"
              onChange={handleChangeAge}
              options={ageGroups(65)}
            />
          </Grid>
          <Grid item>
            <Select
              styles={colourStyles}
              menuPortalTarget={document.body}
              //styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              value={gender}
              placeholder="Gender"
              onChange={handleChangeGender}
              options={genders}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Paper
            elevation={0}
            style={{
              height: "79vh",
              marginTop: 15,
              width: "100%",
              overflow: "auto",
              borderBottomWidth: 0,
            }}
          >
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        marginTop="15px"
        item
        xs={12}
        sm={4}
        md={2.5}
        order={{ xs: 1, sm: 2 }}
      >
        <Paper variant="outlined" elevation={5}>
          <Grid conatiner>
            {authenticated && (
              <Grid
                container
                paddingTop="15px"
                paddingBottom="15px"
                spacing={2}
              >
                <Grid textAlign="center" item xs={4} sm={12}>
                  <img
                    alt="user"
                    src={user.image}
                    style={{
                      height: width / 9,
                      width: width / 9,
                      borderRadius: width / 18,
                      resize: "cover",
                      minWidth: 85,
                      minHeight: 85,
                    }}
                  />
                </Grid>
                <Grid item xs={8} sm={12}>
                  <Grid container>
                    <Grid item xs={0} sm={4}></Grid>
                    <Grid item textAlign="center" xs={0} sm={4}>
                      <Typography variant="h5">{user.name}</Typography>
                    </Grid>
                    <Grid item xs={0} sm={4}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
