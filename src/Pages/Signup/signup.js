import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./signup.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Signup() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    console.log(value);
    setValue(value);
  };

  return (
    <div className="main-div">
      <PhoneInput
          country="IN"
          //placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      <h2>Be a part of the exclusive PlayMate Community </h2>

      <form className="center">
        <div class="col">
          <label>
            <input
              onChange={(val) => setName(val)}
              placeholder="Enter your Name"
              tabindex="1"
            />
          </label>
        </div>
        {/* <Select options={options} value={value} onChange={changeHandler} /> */}
        <div class="col">
          <label>
            <input
              onChange={(val) => setContact(val)}
              placeholder="Enter your Contact Number"
              tabindex="3"
            />
          </label>
        </div>

        {/* <div class="col">
                    <fieldset>
                        <input id="male" type="radio" name="choice1" value="Male" />
                        <label for="male" tabindex="5">Male</label>
                        <input id="female" type="radio" name="choice2" value="Female" />
                        <label for="female" tabindex="6">Female</label>
                        <input id="others" type="radio" name="choice3" value="Others" />
                        <label for="others" tabindex="7">Others</label>
                    </fieldset>
                </div> */}

        <div class="col-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
