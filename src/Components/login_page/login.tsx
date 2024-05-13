import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./login.css";
import { db } from "../../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

/**
 * Returns a react component that represents the login page
 * @returns
 */

export const Login = () => {
  const NO_ANIM = 0;
  const DARK_TO_LIGHT = 1;
  const LIGHT_TO_DARK = 2;
  const LOGIN_FAILED = 1;

  const [Slide, SetSlide] = useState(NO_ANIM);
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [LoginStatus, SetLoginStatus] = useState(0);

  const UserCollection = collection(db, "users");

  const SignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
    } catch (err) {
      console.error(err);
    }
  };

  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const LogOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const RetrieveData = async () => {
    try {
      const documentReference = doc(db, "users", Email);
      const documentSnapshot = await getDoc(documentReference);
      if (!documentSnapshot.exists()) {
        SetLoginStatus(LOGIN_FAILED);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="window dark-theme" slide={Slide}>
        <div className="container-login dark-box" slide={Slide}>
          <h2 className="pointer fade-on-hover"> ( ＾◡＾)っ </h2>
          <button className="login-button fade-on-hover" slide={Slide}>
            LOGIN
          </button>
          <button className="google-login fade-on-hover" slide={Slide}>
            @GOOGLE
          </button>
          <button
            className="login-status fade-on-hover"
            slide={Slide}
            loginStatus={LoginStatus}
          >
            <span className="login-status-placeholder"> ( *・∀・)ノ゛ </span>
            <span className="login-failed"> TRY AGAIN </span>
          </button>
          <div className="username-group">
            <input
              type="text"
              name="Email"
              className="input-field"
              placeholder="Email"
              onChange={(event) => {
                SetEmail(event.target.value);
              }}
            />
          </div>
          <div className="username-icon">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="password-group">
            <input
              type="password"
              name="Password"
              className="input-field"
              placeholder="Password"
              onChange={(event) => {
                SetPassword(event.target.value);
              }}
            />
          </div>
          <div className="password-icon">
            <i className="fa fa-lock" aria-hidden="true"></i>
          </div>
        </div>
        <button className="theme-button dark-box" slide={Slide}>
          <div
            className="switch-dark"
            onClick={() => {
              const NextSlide =
                Slide === DARK_TO_LIGHT ? LIGHT_TO_DARK : DARK_TO_LIGHT;
              SetSlide(NextSlide);
            }}
            slide={Slide}
          ></div>
        </button>
      </div>
    </>
  );
};
