import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import { Box, Grid, /* Modal */ TextField } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterMoment";
import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "19%",
    left: "15px",
    right: "auto",
    bottom: "auto",
    //marginRight: "-50%",
    //transform: "translate(-50%, -50%)",
  },
};

function DatePickerModal(props) {
  const [value, setValue] = React.useState(new Date());
  var d = new Date();
  d.setDate(d.getDate() - 1);
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.handleClose}
      style={customStyles}
    >
      <Grid container>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            label="Week picker"
            value={props.dateVal}
            onChange={(newValue) => props.changeDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="'Week of' MMM d"
          />
        </LocalizationProvider>
      </Grid>
    </Modal>
  );
}

export default DatePickerModal;
