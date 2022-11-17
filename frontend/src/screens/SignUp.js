import { useRef, useState } from "react";
import { registerUserService } from "../services/index.js";
import "./SignUp.css";

function SignUpScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [createdAccount, setCreatedAccount] = useState(false);

  const createAccountHandler = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await registerUserService({ email, password });
    setCreatedAccount(true);
  };

  if (createdAccount) {
    return <div>Created account</div>;
  }
  return (
    <div className="signup__screen">
      <section>
        <h1>Clon de Instagram</h1>
        <input ref={emailRef} placeholder="Enter your email" />
        <input ref={passwordRef} placeholder="Enter your password" />

        <button onClick={createAccountHandler}>Create Account</button>
      </section>
    </div>
  );
}

export default SignUpScreen;
