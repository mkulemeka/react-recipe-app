import React from "react";
import { auth } from "../../firebase/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Login = ({ setIsAuth }) => {
  // let navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setIsAuth(true);
        const user = res.user;
        console.log(user);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <>
      <Container>
        <div
          className="d-flex justify-content-center align-items-center w-100"
          style={{ height: "100vh" }}
        >
          <Button onClick={signInWithGoogle}>Log In with Google</Button>
        </div>
      </Container>
    </>
  );
};

export default Login;
