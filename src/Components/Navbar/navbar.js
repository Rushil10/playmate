import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Toolbar } from "@mui/material";
import React, { Fragment } from "react";
import "./navbar.css";
import logo from "../../images/textLogo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LocationButton from "../LocationButton/locationButton";
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from "../../redux/player/playerActions";
import store from "../../redux/store";

function Navbar(props) {
  const authenticated = useSelector((state) => state.player.authenticated);

  React.useEffect(() => {
    console.log(authenticated, "player auth");
  }, [authenticated]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const onConfirmLogout = () => {
    store.dispatch(logoutUser())
    localStorage.removeItem('playerToken');
    handleClose()
  }

  const onPressLogout = () => {
    handleClickOpen()
  }

  return (
    <AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Logout
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={onConfirmLogout}>Logout</Button>
        </DialogActions>
      </Dialog>
      <Toolbar className="navbarStyling" variant="dense">
        <Fragment>
          <div onClick={() => history.push({ pathname: '/' })}>
            <img src={logo} style={{ height: 49 }} />
          </div>
        </Fragment>
        <Fragment>
          <div style={{ flex: 1, display: "flex" }}>
            <LocationButton />
          </div>
        </Fragment>
        {authenticated && <div onClick={onPressLogout} >
          <LogoutIcon /></div>}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
