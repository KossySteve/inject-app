import React from "react";
import { Input } from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";
import axios from "axios";
import { formNotValid, apiUrlUsers } from "../../utils/functions";
import { Link } from "react-router-dom";
import "./Login.scss";
import Swal from "sweetalert2";

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    let user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    formNotValid(user)
      ? Swal.fire("Failed to upload, complete form")
      : axios
          .post(apiUrlUsers("login"), user)
          .then((res) => {
            sessionStorage.setItem("authToken", res.data.token);
            props.history.push("/");
          })
          .catch((err) => {
            Swal.fire("Failed to Login, details may be wrong !");
          });
    e.target.reset();
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form form--login">
        <section className="form__container">
          <h2 className="form__subtitles">Login</h2>

          <div className="form__input">
            <Label title="Email" />
            <Input type="email" name="email" placeholder="" />
          </div>

          <div className="form__input">
            <Label title="Password" />
            <Input type="password" name="password" placeholder="" />
          </div>
        </section>
      </div>
      <div className="form__button-box">
        <div className="form__button-left">
          <input
            type="reset"
            value="Cancel"
            className="button button--reset"
            onClick={(e) => e.target.reset()}
          />
        </div>
        <div className="form__button-right">
          <Button title="Submit" />
        </div>
      </div>
      <div className="signup-instruction">
        <h4>
          If you don't have an account, please <Link to="/signup"> SignUp</Link>
        </h4>
      </div>
    </form>
  );
}

export default Login;
