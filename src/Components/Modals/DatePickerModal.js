import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import { Box, Grid, Modal, TextField } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterMoment";
import React from "react";

function DatePickerModal(props) {
  const [value, setValue] = React.useState(new Date());
  var d = new Date();
  d.setDate(d.getDate() - 1);
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      onBackdropClick={props.handleClose}
    >
      <Grid container display="flex" flex={1} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <StaticDatePicker
              displayStaticWrapperAs="mobile"
              label="Date Picker"
              value={props.dateVal}
              onChange={(newValue) => props.changeDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="'Week of' MMM d"
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default DatePickerModal;
