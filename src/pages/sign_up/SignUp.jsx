import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { BiHide, BiShow } from "react-icons/bi";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const [formField, setformField] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const auth = getAuth(app);

  const signUp = () => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, formField.email, formField.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setLoader(false);
        setformField({
          email: "",
          password: "",
          confirmPassword: "",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
                <h1>sign up</h1>
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
                  <div className="password relative">
                    <TextField
                      id="confirmPassword"
                      label="confirmPassword"
                      variant="outlined"
                      name="confirmPassword"
                      value={formField.confirmPassword}
                      type={confirmPassword === true ? "text" : "password"}
                      style={{ width: "30vw" }}
                      onChange={onFieldChange}
                    />
                    {confirmPassword === true ? (
                      <BiShow
                        onClick={() => setConfirmPassword(!confirmPassword)}
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
                        onClick={() => setConfirmPassword(!confirmPassword)}
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
                    onClick={signUp}
                    style={{
                      backgroundColor: "#3BB77D",
                      padding: ".7rem 1rem",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "px",
                    }}
                  >
                    sign up
                  </Button>
                  <p className="m-auto">or</p>
                  <Button
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
                    already have an account
                    <b>
                      <Link to="/signin"> sign in</Link>
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

export default SignUp;
