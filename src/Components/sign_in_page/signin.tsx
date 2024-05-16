import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "./signin.css";
import { db } from "../../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [username, setUsername] = useState("");

  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="window">
        <div className="emotes"> (づ｡◕‿‿◕｡)づ </div>
        <div className="signin-text"> SIGN IN </div>
        <input type="text" className="email" placeholder="Email" />
        <input type="text" className="username" placeholder="Username" />
        <input type="text" className="password" placeholder="Password" />
        <input
          type="text"
          className="password"
          placeholder="Re-enter Password"
        />
        <div className="speech-bubble"> Passwords need to match!</div>
        <button className="signin-button" onClick={createUser}>
          Create Account
        </button>
      </div>
    </>
  );
};
