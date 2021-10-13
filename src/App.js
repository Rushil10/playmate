import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import { initializeApp } from "firebase/app";
import Signup2 from "./Pages/Signup2/signup2";
import VerifyOtp from "./Pages/VerifyOtp/verifyOtp";
import themeFile from "./util/theme.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup2 />
            </Route>
            <Route path="/verifyOtp">
              <VerifyOtp />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
