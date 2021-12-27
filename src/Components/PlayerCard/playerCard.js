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
import { useSelector } from "react-redux";
import useWindowDimensions from "../useWindowDimensions";
import organize from "../../images/organize.png";
import friendship from "../../images/friendship.png";
import profile from "../../images/profile.png";
import cancel from "../../images/cancel.png";
import rejected from "../../images/rejected.png";
import "./playerCard.css";
import { useHistory, useLocation } from "react-router-dom";
import CustomButton from "../CustomButton/customButton";
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from "axios";
import api from "../../config/api";
import NotifyTurnOnModal from "../NotificationModal/NotificationTurnOnModal";

function PlayerCard(props) {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const history = useHistory();
  const authenticated = useSelector((state) => state.player.authenticated);
  const user = useSelector((state) => state.player.user);
  const [loading, setLoading] = useState(true);
  const [organizedActive, setOrganizedActive] = useState(false)
  const [backedActive, setBackedActive] = useState(false)
  const [rejectedActive, setRejectedActive] = useState(false)
  const [joinedActive, setJoinedActive] = useState(false)

  useEffect(() => {
    if (location.pathname === "/organized") {
      setOrganizedActive(true)
    } else if (location.pathname === "/joined") {
      setJoinedActive(true)
    } else if (location.pathname === "/backedOut") {
      setBackedActive(true)
    } else if (location.pathname === "/rejected") {
      setRejectedActive(true)
    } else {
      setOrganizedActive(false)
      setJoinedActive(false)
      setBackedActive(false)
      setRejectedActive(false)
    }
  }, [location])

  const onPressOrganized = () => {
    if (location.pathname !== "/organized") {
      history.push({ pathname: "/organized" });
    }
  };

  const onPressJoined = () => {
    if (location.pathname !== "/joined") {
      history.push({ pathname: "/joined" });
    }
  };

  const onPressBackedOut = () => {
    if (location.pathname !== "/backedOut") {
      history.push({ pathname: "/backedOut" });
    }
  };

  const onPressRejected = () => {
    if (location.pathname !== "/rejected") {
      history.push({ pathname: "/rejected" });
    }
  };

  const onPressPlayer = () => {
    if (location.pathname !== `/player/${user.name}/${user._id}`) {
      history.push({ pathname: `/player/${user.name}/${user._id}` });
    }
  };

  const onPressEvent = () => {
    if (location.pathname !== `/create`) {
      history.push({ pathname: `/create` });
    }
  };

  const goToSignup = () => {
    history.push({ pathname: "/signup" });
  }

  const goToLogin = () => {
    history.push({ pathname: "/login" });
  }

  const sendFcmToken = async (token) => {
    var body = {
      fcmToken: token
    }
    const playerToken = localStorage.playerToken;
    if (playerToken) {
      var config = {
        headers: { Authorization: `Bearer ${playerToken}` },
        "Content-Type": "application/json",
      };
      axios.post(`${api}/player/webFcmToken`, body, config).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err.response)
      })
    }
  }

  const messaging = getMessaging();

  const askForPermission = () => {
    setNotModal(true)
    console.log("Inside asking permission");
    Notification.requestPermission().then(function (permission) {

      getToken(messaging, { vapidKey: 'BMOuBQrCRXIjk_WcLJfbgAjPk4BlXTA1MEcENcSgsaqljXO3zgXgiiiBvC_S-zmWoulyULYHOF_J136Md-TCzNw' }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.log(currentToken)
          sendFcmToken(currentToken)
          // ...
        } else {
          console.log('No registration token available. Request permission to generate one.');
          Notification.requestPermission()
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    });
  }

  const [notModal, setNotModal] = useState(false)
  const closeNotModal = () => {
    setNotModal(false)
  }

  return (
    <div className="user-sticky">
      <NotifyTurnOnModal open={notModal} handleClose={closeNotModal} />
      <Paper /* variant="outlined" */ elevation={2}>
        <Grid conatiner /* backgroundColor="rgba(42,170,138,0.05)" */>
          {authenticated ? (
            <Grid container paddingTop="15px" paddingBottom="15px" spacing={1}>
              <Grid textAlign="center" display="flex" flex={1} justifyContent="center" flexDirection="column" alignItems="center" item xs={4} sm={12}>
                <img
                  alt="user"
                  src={user.image}
                  style={{
                    height: width > 450 ? width / 9 : width / 4.5,
                    width: width > 450 ? width / 9 : width / 4.5,
                    borderRadius: width > 450 ? width / 18 : width / 9,
                    resize: "cover",
                  }}
                />
                <Typography style={{ marginTop: 15 }} variant="h5">{user.name}</Typography>
              </Grid>
              <Grid item xs={8} sm={12}>
                <CustomButton active={organizedActive} title="Organized Events" image={organize} onPress={onPressOrganized} />
                <CustomButton active={joinedActive} title="Joined Events" image={friendship} onPress={onPressJoined} />
                <CustomButton active={backedActive} title="BackedOut Events" image={cancel} onPress={onPressBackedOut} />
                <CustomButton active={rejectedActive} title="Rejected" image={rejected} onPress={onPressRejected} />
                <CustomButton title="My Profile" image={profile} onPress={onPressPlayer} />
              </Grid>
              <Grid item display="flex" flex={1} justifyContent="center" flexDirection="column" alignItems="center" xs={12}>
                <Button onClick={onPressEvent} size="medium" style={{ backgroundColor: '#1da1f2' }}
                  variant="contained">Organise Event</Button>
              </Grid>
            </Grid>
          ) :
            <Grid conatiner padding="15px">
              <Grid item xs={12}>
                <Typography style={{}} variant="h6" >Join To Play</Typography>
                <Typography style={{}} variant="subtitle" >Join and Organize Sports Events. Connect with players and enjoy .</Typography>
              </Grid>

              <Grid container marginTop="9px" spacing={2}>
                <Grid item xs={5} sm={12} md={12} lg={6}>
                  <Button onClick={goToSignup} variant="contained" style={{ backgroundColor: '#1da1f2' }}>Signup</Button>
                </Grid>
                <Grid item xs={5}>
                  <Button onClick={goToLogin} variant="contained" style={{ backgroundColor: '#1da1f2' }}>Login</Button>
                </Grid>
              </Grid>
            </Grid>}
        </Grid>
      </Paper>
      <div style={{ height: 15 }}></div>
      {authenticated && Notification.permission !== "granted" && <Paper elevation={2}>
        <Grid container padding="15px" >
          <Grid item xs={2}>
            <NotificationsOffIcon style={{ height: 35, width: 35 }} />
          </Grid>
          <Grid item xs={10}>
            <Typography>Notifications have been turned Off</Typography>
          </Grid>
          <Grid item xs={12}>
            <div onClick={askForPermission}>
              <text style={{ textDecoration: 'underline' }}>Turn On Notification</text>
            </div>
          </Grid>
        </Grid>
      </Paper>}
    </div>
  );
}

export default PlayerCard;
