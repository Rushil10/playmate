import React from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

function Home() {
  const handleClick = () => {};

  const configureCaptcha = () => {
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
  };

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
  },[])

  const onSignInSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    //configureCaptcha();
    const phoneNumber = "+918169846575";
    const appVerifier = window.recaptchaVerifier;
    console.log("hmmmm");
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log('otp has been sent !')
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        console.log('Otp not sent !')
        // Error; SMS not sent
        // ...
      });
  };

  return (
    <div>
      <h4>Hello, The landing page of playmate ! 🧨🎇🧨</h4>
      <button id="sign-in-button" onClick={onSignInSubmit}>Click</button>
    </div>
  );
}

export default Home;
