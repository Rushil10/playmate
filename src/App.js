import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import { initializeApp } from 'firebase/app';
import Signup from "./Pages/Signup/signup";
import Signup2 from './Pages/Signup2/signup2'

const firebaseConfig = {
  apiKey: "AIzaSyBlz4RUWLWoNRcoqwSXtZCZtvpABQ6eY-k",
  authDomain: "playmate-29949.firebaseapp.com",
  projectId: "playmate-29949",
  storageBucket: "playmate-29949.appspot.com",
  messagingSenderId: "616087980787",
  appId: "1:616087980787:web:3d9110379df7d776268586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/signup">
            <Signup />
          </Route> */}
          <Route path="/signup2">
            <Signup2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
