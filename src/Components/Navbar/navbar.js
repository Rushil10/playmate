import { AppBar, Button, Toolbar } from "@mui/material";
import React, { Fragment } from "react";
import "./navbar.css";
import logo from "../../images/textLogo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  const authenticated = useSelector((state) => state.player.authenticated);

  React.useEffect(() => {
    console.log(authenticated, "player auth");
  }, [authenticated]);

  const history = useHistory();

  return (
    <AppBar>
      <Toolbar className="navbarStyling" variant="dense">
        <Fragment>
          <div onClick={() => history.push({ pathname: '/' })}>
            <img src={logo} style={{ height: 49 }} />
          </div>
        </Fragment>
        {authenticated ? (
          <Fragment>
            {/* <Button variant="contained" style={{ backgroundColor: 'white' }}>
              Organise
            </Button> */}
          </Fragment>
        ) : (
          <Fragment>
            {/* <Button onClick={() => history.push({ pathname: '/signup' })} color="inherit">Signup</Button>
            <Button onClick={() => history.push({ pathname: '/signup' })} color="inherit">Login</Button> */}
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
