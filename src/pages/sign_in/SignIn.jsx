import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { BiHide, BiShow } from "react-icons/bi";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
// import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/loginContext";
import { app } from "../../firebase";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const { SignIn } = useLoginContext();
  const [formField, setformField] = useState({
    email: "",
    password: "",
  });

  let history = useNavigate();
  // const auth = getAuth();
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const signIn = () => {
    setLoader(true);
    signInWithEmailAndPassword(auth, formField.email, formField.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setLoader(false);
        setformField({
          email: "",
          password: "",
          confirmPassword: "",
        });
        localStorage.setItem("isLogin", true);
        SignIn();
        history("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const onFieldChange = (e) => {
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    // console..log(name, value);

    setformField({
      ...formField,
      [name]: value,
    });
    console.log(formField);
  };

  const signWithGoogle = () => {
    setLoader(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setLoader(false);

        localStorage.setItem("isLogin", true);
        SignIn();
        history("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <div className="signin-container">
        <div className="container-fluid">
          <div className="bread-crums border-b-2 mt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">sign in</Link>
                </li>
              </ol>
            </nav>
          </div>
          <div className="form-card flex item-center justify-center relative">
            <div className="sign-card shadow-2xl my-12 p-8">
              <Backdrop
                sx={{
                  color: "#3BB77D",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                  position: "absolute",
                  backgroundColor: "transparent",
                }}
                open={loader}
              >
                {" "}
                <CircularProgress color="inherit" />
              </Backdrop>
              <div className="hd">
                <h1>sign in</h1>
              </div>
              <form>
                <div className="inp-fields mt-8 flex flex-col gap-8 ">
                  <div className="user-name">
                    <TextField
                      id="email"
                      label="email"
                      variant="outlined"
                      name="email"
                      type="email"
                      value={formField.email}
                      style={{ width: "30vw" }}
                      onChange={onFieldChange}
                      className="text"
                    />
                  </div>
                  <div className="password relative">
                    <TextField
                      id="password"
                      label="password"
                      variant="outlined"
                      name="password"
                      value={formField.password}
                      type={showPassword === true ? "text" : "password"}
                      style={{ width: "30vw" }}
                      onChange={onFieldChange}
                      className="text"
                    />
                    {showPassword === true ? (
                      <BiShow
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "3%",
                          fontSize: "1.2rem",
                          transform: "translate(-50%,-50%)",
                        }}
                      />
                    ) : (
                      <BiHide
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "3%",
                          fontSize: "1.2rem",
                          transform: "translate(-50%,-50%)",
                        }}
                      />
                    )}
                  </div>
                  <Button
                    style={{
                      backgroundColor: "#3BB77D",
                      padding: ".7rem 1rem",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "px",
                    }}
                    onClick={signIn}
                  >
                    sign in
                  </Button>
                  <p className="m-auto">or</p>
                  <Button
                    onClick={signWithGoogle}
                    style={{
                      color: "#1a1919",
                      fontWeight: "bold",
                      fontSize: "16px",
                      padding: "1rem",
                      border: "1px solid #ccc",
                    }}
                  >
                    <FcGoogle
                      style={{ fontSize: "2rem", marginRight: ".7rem" }}
                    />
                    sign with google
                  </Button>
                  <p className="m-auto">
                    not have an account
                    <b>
                      <Link to="/signup"> sign up</Link>
                    </b>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
