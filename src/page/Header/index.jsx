import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function submit() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  return (
    <header>
      <nav className="navbar">
        <div className="container nav-center">
          <NavLink href="/">
            <img src="./logo.svg" alt="cocktail db logo" className="logo" />
          </NavLink>
          <ul className="nav-links">
            <li>
              <NavLink style={{}} className="link  mi">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"about"}>
                About
              </NavLink>
            </li>

            <li>
              <Link className="btn bhj" onClick={submit}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
