import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import { initializeApp } from "firebase/app";
import Signup2 from "./Pages/Signup2/signup2";
import themeFile from "./util/theme.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar/navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setLocation, setPlayerData } from "./redux/player/playerActions";
import CreateEvent from "./Pages/createEvent/createEvent";
import OrganizedEvents from "./Pages/OrganizedEvents/organizedEvents";
import ProtectedRoute from "./Components/ProtectedRoute";
import EventDetails from "./Pages/EventDetails/eventDetails";
import JoinedEvents from "./Pages/JoinedEvents/joinedEvents";
import BackedOutEvents from "./Pages/BackedOutEvents/backedOutEvents";
import RejectedEvents from "./Pages/RejectedEvents/rejectedEvents";
import PlayerProfile from "./Pages/PlayerProfile/profile";
import AllOrganizedEvents from "./Pages/AllOrganizedEvents/allOrganizedEvents";
import AllJoinedEvents from "./Pages/AllJoinedEvents/allJoinedEvents";
import AllBackedOutEvents from "./Components/AllBackedOutEvents/allBackedOutEvents";
import AllRejectedEvents from "./Components/AllRejectedEvents/AllRejectedEvents";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";
import axios from "axios";
import logo192 from '../src/images/logo192.png'
import api from "./config/api";
import { Modal } from "@mui/material";
import React, { useState } from 'react'
import NotifiedModal from "./Components/NotificationReceivedModal/NotificationRecModal";
import Login from "./Pages/Login/login";

const firebaseConfig = {
  apiKey: "AIzaSyAnYnbHmFe2xXZEwtmVAokUxtooq3WnfVU",
  authDomain: "playmate-e51a6.firebaseapp.com",
  projectId: "playmate-e51a6",
  storageBucket: "playmate-e51a6.appspot.com",
  messagingSenderId: "67487967811",
  appId: "1:67487967811:web:d47a13d2ed38bf686302f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const theme = createTheme(themeFile);

const token = localStorage.playerToken;
if (token) {
  store.dispatch(setPlayerData(token));
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

if (Notification.permission !== "granted") {
  //navigator.permissions.query({ name: 'push', userVisibleOnly: true })
  askForPermission()
}

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

const lat = localStorage.lat;
if (lat) {
  console.log(lat)
  const lon = localStorage.lon;
  const city = localStorage.city;
  var loc = {
    latitude: lat,
    longitude: lon,
    city
  }
  console.log(loc)
  store.dispatch(setLocation(loc))
}

function App() {
  const [newNot, setNewNot] = useState(false)
  const [notTile, setNotTitle] = useState('')
  const [notBody, setNotBody] = useState('')
  const changeNot = () => {
    setNewNot(false)
  }
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload.notification);
    // ...
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: logo192,
    };
    setNotTitle(notificationTitle)
    setNotBody(payload.notification.body)
    setNewNot(true)
    // eslint-disable-next-line no-restricted-globals
    /* new Notification(
      notificationTitle,
      notificationOptions
    ); */
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <NotifiedModal open={newNot} handleClose={changeNot} title={notTile} body={notBody} />
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/signup">
                <Signup2 />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/event/:id">
                <EventDetails />
              </Route>
              <Route path="/player/:name/:id">
                <PlayerProfile />
              </Route>
              {/* <ProtectedRoute path="/event/:id" component={EventDetails} /> */}
              <ProtectedRoute path="/create" component={CreateEvent} />
              <ProtectedRoute path="/organized" component={OrganizedEvents} />
              <ProtectedRoute path="/allOrganized" component={AllOrganizedEvents} />
              <ProtectedRoute path="/joined" component={JoinedEvents} />
              <ProtectedRoute path="/allJoined" component={AllJoinedEvents} />
              <ProtectedRoute path="/backedOut" component={BackedOutEvents} />
              <ProtectedRoute path="/allBackedOut" component={AllBackedOutEvents} />
              <ProtectedRoute path="/rejected" component={RejectedEvents} />
              <ProtectedRoute path="/allRejected" component={AllRejectedEvents} />
              {/* <ProtectedRoute path="/player/:name/:id" component={PlayerProfile} /> */}
            </Switch>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
