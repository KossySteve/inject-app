import React from "react";
import { Input, Dropdown } from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";
import "./SignUp.scss";
import axios from "axios";
import { formNotValid, apiUrlUsers } from "../../utils/functions";
import Swal from "sweetalert2";

function SignUp(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target.firstName.value + " " + e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
      position: e.target.position.value,
      linkedInUrl: e.target.linkedInUrl.value,
      resumeUrl: e.target.resumeUrl.value,
    };
    formNotValid(newUser) ||
    e.target.password.value !== e.target.confirmPassword.value
      ? Swal.fire("Failed to upload, complete form correctly")
      : axios
          .post(apiUrlUsers(""), newUser)
          .then((res) => {
            Swal.fire("Your registration on iN-JECT was succesful");
            props.history.push("/login");
          })
          .catch((err) => {
            console.log(err);
          });
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form form--signup">
        <section className="form__container">
          <h2 className="form__title">Sign Up</h2>
          <p className="form__subtitle h3">
            Register to become part of the iN-JECT Community
          </p>
         
          <div className="form__input form__input--pair">
            <div>
            <Label title="First Name" />
            <Input name="firstName" />
            </div>
            <div>
            <Label title="Last Name" />
            <Input name="lastName" />
            </div>
          </div>
          <div className="form__input form__input--pair">
            <div>
              <Label title="Email" />
              <Input type="email" name="email" />
            </div>
            <div>
              <Label title="Phone" />
              <Input name="phone" />
            </div>
          </div>
      
          <div className="form__input">
            <Label title="Position" />
            <Dropdown
              items={["Doctor", "Pharmacist", "Nurse", "Care giver"]}
              name="position"
            />
          </div>
          <div className="form__input form__input--pair">
            <div>
            <Label title="Password" />
            <Input type="password" name="password" />
            </div>
            <div>
            <Label title="Confirm Password" />
            <Input name="confirmPassword" type="password" />
            </div>
          </div>
         
          <div className="form__input">
            <Label title="LinkedIn Url" />
            <Input name="linkedInUrl" />
          </div>
          <div className="form__input">
            <Label title="Resume Link" />
            <Input name="resumeUrl" />
          </div>
        </section>
      </div>
      <div className="form__button-box">
        <div className="form__button-left">
          <Button title="Cancel" />
        </div>
        <div className="form__button-right">
          <Button title="Submit" />
        </div>
      </div>
    </form>
  );
}

export default SignUp;
