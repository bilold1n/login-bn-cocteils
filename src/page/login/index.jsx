import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const userName = useRef();
  const pasword = useRef();
  const naviate = useNavigate();
  const hendlesubmit = (e) => {
    e.preventDefault();

    let inpuy = userName.current.value;
    let pasWord = pasword.current.value;

    const data = JSON.parse(localStorage.getItem("users")) ?? [];
    const userf = data.filter(({ name, pasword }) => {
      return name == inpuy && pasword === pasWord;
    });
    if (userf.length) {
      localStorage.setItem("user", JSON.stringify(true));
      naviate("/layout");
    } else {
      localStorage.setItem("user", JSON.stringify(false));
    }
  };
  return (
    <>
      <div className="container ou">
        <form className="inout" onSubmit={hendlesubmit}>
          <div className="orab title">
            {" "}
            <p className="sar">Your logo</p>
            <h2 className="sar">Log in</h2>
          </div>
          <div className="orab">
            <p className="tit">User Name</p>
            <input
              className="input"
              ref={userName}
              type="text"
              required
              placeholder="User Name"
            />
            <p className="tit">Password</p>

            <input
              className="input"
              ref={pasword}
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="div1">
            <button className="btn" type="submit">
              Log in now
            </button>
            <Link to={"/signup"} className="btn btn4" type="submit">
              Enter to sign up
            </Link>
          </div>
        </form>
        <div className="orab orab7">
          <>Don’t have an account yet? Register for free</>
        </div>
      </div>
    </>
  );
}

export default Login;
