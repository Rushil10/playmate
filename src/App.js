import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
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

const firebaseConfig = {
  apiKey: "AIzaSyBlz4RUWLWoNRcoqwSXtZCZtvpABQ6eY-k",
  authDomain: "playmate-29949.firebaseapp.com",
  projectId: "playmate-29949",
  storageBucket: "playmate-29949.appspot.com",
  messagingSenderId: "616087980787",
  appId: "1:616087980787:web:3d9110379df7d776268586",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Ldp4FodAAAAAKUxTwqt-1rsvozBKhP8V36NjPDC'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});
const theme = createTheme(themeFile);

const token = localStorage.playerToken;
if (token) {
  store.dispatch(setPlayerData(token));
}

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
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/signup">
                <Signup2 />
              </Route>
              <ProtectedRoute path="/event/:id" component={EventDetails} />
              <ProtectedRoute path="/create" component={CreateEvent} />
              <ProtectedRoute path="/organized" component={OrganizedEvents} />
              <ProtectedRoute path="/allOrganized" component={AllOrganizedEvents} />
              <ProtectedRoute path="/joined" component={JoinedEvents} />
              <ProtectedRoute path="/allJoined" component={AllJoinedEvents} />
              <ProtectedRoute path="/backedOut" component={BackedOutEvents} />
              <ProtectedRoute path="/allBackedOut" component={AllBackedOutEvents} />
              <ProtectedRoute path="/rejected" component={RejectedEvents} />
              <ProtectedRoute path="/allRejected" component={AllRejectedEvents} />
              <ProtectedRoute path="/player/:name/:id" component={PlayerProfile} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
