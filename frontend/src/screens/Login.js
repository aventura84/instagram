import { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logInUserService } from "../services";
import "./Login.css";

function LoginScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const token = await logInUserService({ email, password });

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login__screen">
      <label>Email</label>
      <input ref={emailRef} placeholder="Enter your email" />
      <label>Password</label>
      <input ref={passwordRef} placeholder="Enter your password" />
      {error && <p className="error">{error}</p>}
      <button onClick={loginHandler}>Log in my account</button>
    </div>
  );
}

export default LoginScreen;
