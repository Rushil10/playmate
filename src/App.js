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
import { setPlayerData } from "./redux/player/playerActions";
import CreateEvent from "./Pages/createEvent/createEvent";
import OrganizedEvents from "./Pages/OrganizedEvents/organizedEvents";
import ProtectedRoute from "./Components/ProtectedRoute";
import EventDetails from "./Pages/EventDetails/eventDetails";
import JoinedEvents from "./Pages/JoinedEvents/joinedEvents";
import BackedOutEvents from "./Pages/BackedOutEvents/backedOutEvents";
import RejectedEvents from "./Pages/RejectedEvents/rejectedEvents";

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
const theme = createTheme(themeFile);

const token = localStorage.playerToken;
if (token) {
  store.dispatch(setPlayerData(token));
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
              <ProtectedRoute path="/joined" component={JoinedEvents} />
              <ProtectedRoute path="/backedOut" component={BackedOutEvents} />
              <ProtectedRoute path="/rejected" component={RejectedEvents} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
