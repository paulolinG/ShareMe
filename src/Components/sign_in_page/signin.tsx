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
  const [matchingPasswords, setMatchingPasswords] = useState(true);
  const [securePassword, setSecurePassword] = useState(true);

  const isUsernameAvailable = async () => {
    const documentReference = doc(db, "users", username);
    const documentSnapshot = await getDoc(documentReference);
    if (documentSnapshot.exists()) {
      return false;
    }
    return true;
  };

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
        <input
          type="text"
          className="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          className="username"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          className="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          className="password"
          placeholder="Re-enter Password"
          onChange={(event) => {
            setReenteredPassword(event.target.value);
          }}
        />
        <div
          className={
            "nonmatching-passwords " +
            (password !== "" && password !== reenteredPassword ? "" : "hidden")
          }
        >
          Passwords need to match!
        </div>
        <div
          className={
            "weak-password " +
            (password !== "" && password.length < 10 ? "" : "hidden")
          }
        >
          Password must have 10 characters at least!
        </div>
        <button className="signin-button" onClick={createUser}>
          Create Account
        </button>
        <button className="direct-to-login"> Login </button>
      </div>
    </>
  );
};
