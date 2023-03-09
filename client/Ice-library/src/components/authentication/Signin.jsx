import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BooksContext from "../../functions/Context";
import SigninError from "../alerts/SigninError";
import image from "../../static/img-01.png"
export default function Signin() {
  const history = useNavigate();
  const context = useContext(BooksContext);
  const { setlog, signInerror, setsignInerror } = context;

  const [val, setval] = useState({
    Email: "",
    Password: "",
  });
  const change = (e) => {
    let Name = e.target.name;
    let value = e.target.value;
    setval({ ...val, [Name]: value });
  };
  const Post = async (e) => {
    e.preventDefault();
    const { Email, Password } = val;
    const fetching_user = await fetch("/api/auth/signin", {
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
    console.log(data);
    if (fetching_user.status === 500) {
      setsignInerror(false);
	  history("/login")
    } else {
		history("/")
		setlog(true);
      try {
        const tokenString = JSON.stringify(data.jwt_data);
        localStorage.setItem("key", tokenString);
        console.log("Data stored in local storage.");
        const icecube = localStorage.getItem("key");
        console.log(typeof icecube);
      } catch (error) {
        console.error("Error storing data in local storage:", error);
      }
    }
    
  };
  return (
    <div class="limiter">
    {signInerror === false ? <SigninError /> : null}
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG"/>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Member Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" value={val.Email} onChange={change} name="Email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" onChange={change} value={val.Password} type="password" name="Password" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onClick={Post}>
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="/sign up">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
  );
}
