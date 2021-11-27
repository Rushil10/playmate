import React, { useState, useMemo, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./signup2.css";
import logo from "../../images/logo.jpg";
import Button from "@mui/material/Button";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
} from "firebase/auth";
import { CircularProgress, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";
import { FormLabel } from "@mui/material";
import url from "../../config/api";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setPlayerData } from "../../redux/player/playerActions";
import store from "../../redux/store";

function Signup() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otpSendLoading, setOtpLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [nameerror, setNameerror] = useState(false);
  const [phoneerror, setPhoneerror] = useState(false);
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [invalidotp, setInvalidotp] = useState(false);
  const [recaptcha, setRecaptcha] = useState(null)

  const configureCaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback: (res) => {
        console.log(res, 'hmmmmmmmmm')
      }
    }, auth);
  };

  useEffect(() => {
    configureCaptcha()
  }, [])

  const onSignInSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setNameerror(true);
      return;
    } else {
      setNameerror(false);
    }
    if (phone.length !== 10) {
      setPhoneerror(true);
      return;
    } else {
      setPhoneerror(false);
    }
    setOtpLoading(true);
    const auth = getAuth();
    const phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp has been sent !");
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        setOtpSent(true);
        setOtpLoading(false);
        // ...
      })
      .catch((error) => {
        console.log("Otp not sent !");
        console.log(error);
        // Error; SMS not sent
        // ...
        setOtpLoading(false);
      });
  };

  const onPressSignup = () => {
    setOtpLoading(true);
    console.log("heree");
    console.log(phone);
    console.log(name);
    onSignInSubmit();
  };

  function handleChangeName(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleChangePhone(e) {
    console.log(e.target.value);
    setPhone(e.target.value);
  }

  const verifyOtp = () => {
    setVerifying(true);
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        setInvalidotp(false);
        const user = result.user;
        console.log(user);
        var player = {
          name,
          contact: phone,
        };
        axios
          .post(`${url}/player/signup`, player)
          .then((result) => {
            console.log(result.data);
            localStorage.setItem("playerToken", result.data.token);
            store.dispatch(setPlayerData(result.data.token))
            history.push({ pathname: '/' })
            setVerifying(false);
          })
          .catch((err) => {
            setVerifying(false);
            console.log(err.response.data);
          });
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        setVerifying(false);
        setInvalidotp(true);
      });
  };

  return (
    <div id="signup-container" className="signupContainer">
      {otpSent ? (
        <div className="signupSpace">
          <div className="logoStyle">
            <img src={logo} />
          </div>
          <div className="centerText">
            <h3>Enter verification Code</h3>
          </div>
          <div>
            <OtpInput
              value={otp}
              inputStyle="otpInputStyle"
              onChange={setOtp}
              numInputs={6}
              separator={<span> </span>}
            />
          </div>
          {invalidotp && (
            <div style={{ alignItems: 'center', textAlign: 'center', marginTop: 9 }}>
              <label className="errorLabel">Invalid OTP !</label>
            </div>
          )}
          <div style={{ marginTop: 25 }}>
            <Button
              id="verify-button"
              onClick={verifyOtp}
              color="success"
              fullWidth
              variant="outlined"
              disabled={verifying}
            >
              VERIFY
            </Button>
          </div>
        </div>
      ) : (
        <div className="signupSpace">
          <div className="logoStyle">
            <img src={logo} />
          </div>
          <div class="Input">
            <input
              value={name}
              onChange={handleChangeName}
              type="text"
              id="name"
              class="Input-text"
              placeholder="Your first name"
            ></input>
          </div>
          {nameerror && (
            <div>
              <label className="errorLabel">Name must be valid !</label>
            </div>
          )}
          <div class="Input">
            <input
              onChange={handleChangePhone}
              type="text"
              id="contact"
              class="Input-text"
              placeholder="10 digit Mobile Number"
            ></input>
          </div>
          {phoneerror && (
            <div>
              <label className="errorLabel">
                Enter a valid Contact Number !
              </label>
            </div>
          )}
          <div style={{ marginTop: 15 }} id="recaptcha-container"></div>
          <div style={{ marginTop: 25 }}>
            <Button
              id="sign-in-button"
              onClick={onSignInSubmit}
              color="success"
              fullWidth
              variant="outlined"
              disabled={otpSendLoading}
            >
              SEND OTP
            </Button>
          </div>
          {/* <PhoneInput
          containerClass="phoneContainer"
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        /> */}
        </div>
      )}
    </div>
  );
}

export default Signup;
