import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import { logInUserService, registerUserService } from "../services/index.js";

function SignUpScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const createAccountHandler = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await registerUserService({ email, password });
    const token = await logInUserService({ email, password });
    login(token);
    navigate("/");
  };

  return (
    <div className="signup__screen">
      <section>
        <input type="email" ref={emailRef} placeholder="Enter your email" />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
        />

        <button onClick={createAccountHandler}>Create Account</button>
      </section>
    </div>
  );
}

export default SignUpScreen;
