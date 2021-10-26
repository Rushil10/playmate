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

function Home() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [dateVal, setDateVal] = useState(new Date());

  const openDate = () => {
    setOpenDatePicker(true);
  };

  const closeDate = () => {
    setOpenDatePicker(false);
  };

  const changeDate = (newValue) => {
    setDateVal(newValue)
    closeDate()
  }

  return (
    <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
      <DatePickerModal dateVal={dateVal} changeDate={changeDate} open={openDatePicker} handleClose={closeDate} />
      <Grid marginTop="15px" item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
        <Grid container spacing={2}>
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
              <ArrowDropDownIcon style={{color:'#29ab87'}} />
            </button>
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
