import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../static/img-01.png"
export default function Signup() {
  const [val, setval] = useState({
    Email: "",
    Password: "",
  });
  const change = (e) => {
    let Name = e.target.name;
    let value = e.target.value;
    setval({ ...val, [Name]: value });
    console.log(Name);
    console.log(value);
  };
  const Post = async (e) => {
    e.preventDefault();
    const { Email, Password } = val;
    const fetching_user = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email,
        Password,
      }),
    });
    const data = await fetching_user.json();
  };
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src={image} alt="IMG" />
          </div>

          <form class="login100-form validate-form">
            <span class="login100-form-title">Sign up</span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input100"
                type="text"
                value={val.Email}
                onChange={change}
                name="Email"
                placeholder="Email"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                class="input100"
                onChange={change}
                value={val.Password}
                type="password"
                name="Password"
                placeholder="Password"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn" onClick={Post}>
                <Link to="/login">Sign up</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
