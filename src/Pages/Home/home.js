import React, { useState } from "react";
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
} from "@mui/material";
import DatePickerModal from "../../Components/Modals/DatePickerModal";
import "./home.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import moment from "moment";
import sports from "../../Components/ConstantData/sports";
import Select from "react-select";
import { ageGroups } from "../../Components/ConstantData/ageGroups";
import genders from "../../Components/ConstantData/gender";

function Home() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [dateVal, setDateVal] = useState(new Date());
  const [sport, setSport] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

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
      /* // This line disable the blue border
      boxShadow: "0.5px solid #29ab87",*/
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#29ab87",
      fontWeight: "400",
    }),
    /* control: (styles) => ({
      ...styles,
      backgroundColor: "white",
    }), */
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#29ab87" : "black",
      backgroundColor: state.isSelected ? "rgba(64,224,208,0.05)" : "white",
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
      <Grid marginTop="15px" item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
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
          <Grid item>
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
      </Grid>
      <Grid marginTop="15px" item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
        <Paper variant="outlined" elevation={5}>
          <Grid conatiner alignItems="center" justifyContent="center">
            <Grid item alignItems="center" textAlign="center">
              <h4>user</h4>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
