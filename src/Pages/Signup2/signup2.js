import React, { useState, useMemo } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./signup2.css";
import logo from "../../images/logo.jpg";
import Button from "@mui/material/Button";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { CircularProgress } from "@mui/material";

function Signup() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otpSendLoading, setOtpLoading] = useState(false);

  React.useEffect(() => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  }, []);

  const onSignInSubmit = (e) => {
    //e.preventDefault();
    setOtpLoading(true);
    const auth = getAuth();
    const phoneNumber = "+91" + phone;
    const appVerifier = window.recaptchaVerifier;
    console.log("hmmmm");
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp has been sent !");
        window.confirmationResult = confirmationResult;
        setOtpLoading(false);
        // ...
      })
      .catch((error) => {
        console.log("Otp not sent !");
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

  return (
    <div className="signupContainer">
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
        <div class="Input">
          <input
            onChange={handleChangePhone}
            type="text"
            id="contact"
            class="Input-text"
            placeholder="10 digit Mobile Number"
          ></input>
        </div>
        <div style={{ marginTop: 25 }}>
          <Button
            onClick={onPressSignup}
            color="success"
            fullWidth
            variant="outlined"
            id="sign-in-button"
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
    </div>
  );
}

export default Signup;
