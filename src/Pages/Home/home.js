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
import sports from "../../Components/ConstantData/sports2";
import Select from "react-select";
import { ageGroups } from "../../Components/ConstantData/ageGroups";
import genders from "../../Components/ConstantData/gender";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../Components/useWindowDimensions";
import { SIZE } from "../../Components/ConstantData/apiConstants";
import store from "../../redux/store";
import { getEventsNearMe } from "../../redux/events/eventActions";
import EventCard from "../../Components/EventCard/EventCard";
import organize from "../../images/organize.png";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import ReactPaginate from 'react-paginate';
import Pagination from 'rc-pagination';
import PaginationComponent from "../../Components/PaginationComponent/pagination";
import loadingGif from "../../images/loading.gif"
import noevents from '../../images/noevents.jpg'

function Home() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [dateVal, setDateVal] = useState(new Date());
  const [sport, setSport] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const authenticated = useSelector((state) => state.player.authenticated);
  const user = useSelector((state) => state.player.user);
  const location = useSelector((state) => state.player.location);
  const { height, width } = useWindowDimensions();
  const [page, setPage] = useState(1);
  const [fetchedEvents, setFetchedEvents] = useState([]);

  const callGetEvents = useCallback(
    (filters) => store.dispatch(getEventsNearMe(filters)),
    []
  );

  const loading = useSelector((state) => state.event.loading);

  const events = useSelector((state) => state.event.events);

  useEffect(() => {
    console.log(events);
    setFetchedEvents(events);
  }, [events]);

  const getEventsInLocality = async () => {
    setPage(1)
    setSport('')
    setGender('')
    setAge('')
    setDateVal(new Date())
    var filter = {
      longitude: location.longitude,
      latitude: location.latitude,
      size: SIZE,
      page: 1,
    };
    callGetEvents(filter);
  };

  const getFilterEventsNearMe = async (page, sport, age, gender, dateVal) => {
    var filter = {
      longitude: location.longitude,
      latitude: location.latitude,
      size: SIZE,
      page,
    };
    if (sport) {
      filter.sport = sport.value;
    }
    if (age) {
      filter.age = age.value;
    }
    if (gender) {
      filter.gender = gender.value;
    }
    if (dateVal) {
      filter.day = dateVal;
    }
    console.log(filter, "---------------------------------------");
    callGetEvents(filter);
  };

  useEffect(() => {
    getEventsInLocality();
  }, []);

  useEffect(() => {
    getEventsInLocality()
    console.log("Location Changed")
  }, [location.latitude, location.city, location.longitude])

  const openDate = () => {
    setOpenDatePicker(true);
  };

  const closeDate = () => {
    setOpenDatePicker(false);
  };

  const changeDate = (newValue) => {
    setDateVal(newValue);
    setPage(1)
    getFilterEventsNearMe(1, sport, age, gender, newValue);
    closeDate();
  };

  const handleChangeSport = (selectedOption) => {
    if (selectedOption.value === "Remove") {
      setSport("");
      getFilterEventsNearMe(page, null, age, gender, dateVal);
      return;
    }
    setSport(selectedOption);
    getFilterEventsNearMe(page, selectedOption, age, gender, dateVal);
    console.log(selectedOption);
  };

  const handleChangeAge = (selectedOption) => {
    if (selectedOption.value === "Remove") {
      setAge("");
      getFilterEventsNearMe(page, sport, null, gender, dateVal);
      return;
    }
    setAge(selectedOption);
    getFilterEventsNearMe(page, sport, selectedOption, gender, dateVal);
    console.log(selectedOption);
  };

  const handleChangeGender = (selectedOption) => {
    if (selectedOption.value === "Remove") {
      setGender("");
      getFilterEventsNearMe(page, sport, age, null, dateVal);
      return;
    }
    setGender(selectedOption);
    getFilterEventsNearMe(page, sport, age, selectedOption, dateVal);
    console.log(selectedOption);
  };

  const colourStyles = {
    menuPortal: (base) => ({ ...base, zIndex: 9999, minWidth: "105px" }),
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      border: "0.75px solid #29ab87",
      backgroundColor: "rgba(64,224,208,0.05)",
      borderColor: "#9e9e9e",
      minHeight: "30px",
      height: "30px",
      borderRadius: "25px",
      boxShadow: "none",
      "&:hover": {
        color: "#29ab87",
      },
      fontSize: "14px",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 5px",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#29ab87",
      paddingLeft: "1px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#29ab87",
      fontWeight: "bold",
      fontSize: "14px",
    }),
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
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "30px",
    }),
  };

  const handleForwardPageClick = () => {
    console.log("Pressed")
    var p = page + 1;
    setPage(p);
    getFilterEventsNearMe(p, sport, age, gender, dateVal)
  }

  const handlePageBackwardClick = () => {
    var p = page - 1;
    setPage(p);
    getFilterEventsNearMe(p, sport, age, gender, dateVal)
  }
  return (
    <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
      <DatePickerModal
        dateVal={dateVal}
        changeDate={changeDate}
        open={openDatePicker}
        handleClose={closeDate}
      />
      <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
        <div className="sticky">
          <Grid
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            justifyContent="center"
            container
            paddingBottom="5px"
            borderBottom="0.5px solid #d4d4d4"
          >
            {/* <Grid item paddingTop="5px"> */}
            <div className="dateStyling">
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
            </div>
            {/* </Grid> */}
            <div className="horizontalFilters">
              <Select
                className="someSpaceBetween sportMinWidth"
                styles={colourStyles}
                menuPortalTarget={document.body}
                value={sport}
                placeholder="Sport"
                onChange={handleChangeSport}
                options={sports}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
              <Select
                className="someSpaceBetween ageMinWidth"
                styles={colourStyles}
                menuPortalTarget={document.body}
                value={age}
                placeholder="Age"
                onChange={handleChangeAge}
                options={ageGroups(65)}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
              <Select
                styles={colourStyles}
                menuPortalTarget={document.body}
                className="someSpaceBetween genderMinWidth"
                value={gender}
                placeholder="Gender"
                onChange={handleChangeGender}
                options={genders}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          </Grid>
        </div>
        <Grid container>
          <Paper
            elevation={0}
            style={{
              marginTop: 15,
              width: "100%",
              overflow: "auto",
              borderBottomWidth: 0,
            }}
          >
            {!loading ?
              fetchedEvents.map((item, index) => (
                <EventCard item={item} index={index} />
              ))
              :
              <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, flexDirection: 'column' }}>
                <img src={loadingGif} alt="Loading" />
                <Typography>Loading Events Near You</Typography>
              </div>}
            {
              !loading && fetchedEvents.length > 0 &&
              <PaginationComponent forward={handleForwardPageClick} backward={handlePageBackwardClick} page={page} />
            }
            {
              !loading && fetchedEvents.length === 0 &&
              <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, flexDirection: 'column' }}>
                <img class="removeOverflowX" src={noevents} alt="No Events Near You" />
                <Typography>No Sports Events Near You</Typography>
                <Typography>Organise Now</Typography>
              </div>
            }
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
        <PlayerCard />
      </Grid>
    </Grid>
  );
}

export default Home;
