import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [userinput, setuserinput] = useState({
    name: "",
    pasword: "",
    firsName: "",
    numberPhone: "",
  });
  function hendlesubmit(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("users")) ?? [];
    localStorage.setItem("users", JSON.stringify([...data, userinput]));
    localStorage.setItem("user", JSON.stringify(true));
    navigate("/layout");
    setuserinput({
      name: "",
      pasword: "",
      firsName: "",
      numberPhone: "",
    });
  }
  return (
    <>
      <div className="container ou1">
        <form className="inout" onSubmit={hendlesubmit}>
          <div className="div orab">
            {" "}
            <p className="sar">Your logo</p>
            <h2 className="sar">Log in</h2>
          </div>
          <div className="orab">
            <p className="tit">User Name</p>
            <input
              onChange={(e) =>
                setuserinput((prev) => ({ ...prev, name: e.target.value }))
              }
              value={userinput.name}
              className="input"
              type="text"
              required
              placeholder="User Name"
            />
            <p className="tit">Password</p>

            <input
              onChange={(e) =>
                setuserinput((prev) => ({ ...prev, pasword: e.target.value }))
              }
              value={userinput.pasword}
              className="input"
              type="password"
              required
              placeholder="Password"
            />
            <p className="tit">Frist Name</p>
            <input
              onChange={(e) =>
                setuserinput((prev) => ({ ...prev, firsName: e.target.value }))
              }
              value={userinput.firsName}
              className="input"
              type="text"
              required
              placeholder="Password"
            />
            <p className="tit">Phone Number</p>
            <input
              onChange={(e) =>
                setuserinput((prev) => ({
                  ...prev,
                  numberPhone: e.target.value,
                }))
              }
              value={userinput.numberPhone}
              className="input"
              type="text"
              required
              placeholder="Password"
            />
          </div>
          <div className="div1">
            <button className="btn" type="submit">
              Sign up now
            </button>
            <Link to={"/"} className="btn btn4" type="submit">
              Enter to Log in
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

export default Signup;
