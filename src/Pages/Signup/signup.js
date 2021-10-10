import React from 'react';
import './signup.css';

function Signup() {
    return (
        <div className="main-div" >
            <h2>Be a part of the exclusive PlayMate Community </h2>

            <form className="center">
                <div class="col">
                    <label>
                        <input placeholder="Enter your Name" tabindex="1" />
                    </label>
                </div>

                <div class="col">
                    <label>
                        <input placeholder="Enter your Contact Number" tabindex="3" />
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

    )
}

export default Signup;