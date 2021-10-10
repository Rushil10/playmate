import React, { useState, useMemo } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./signup2.css";
import logo from '../../images/logo.jpg'

function Signup() {
  const [phone, setPhone] = useState("");
  return (
    <div className="signupContainer">
      <div className="signupSpace">
        <div className="logoStyle">
          <img src={logo} />
        </div>
        <div class="Input">
          <input
            type="text"
            id="input"
            class="Input-text"
            placeholder="Your first name"
          ></input>
        </div>
        <PhoneInput
          containerClass="phoneContainer"
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      </div>
    </div>
  );
}

export default Signup;
