import React, { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Input, { Dropdown, Textarea } from "../Input/Input";
import Label from "../Label/Label";
import { apiUrlJobs, formNotValid } from "../../utils/functions";
import Swal from "sweetalert2";
import { useLocation, useHistory } from "react-router-dom";

function UpdateJob(props) {
  const location = useLocation();
  const history = useHistory();
  //location carries state from edit on posted jobs
  const [jobdetails, setJobdetails] = useState(location.state[0]);

  const handleChange = (e) => {
    setJobdetails({ ...jobdetails, [e.target.name]: e.target.value });
  };

  const handleFormReset = (e) => {
    Object.keys(jobdetails).forEach(key => {
      jobdetails[key] = '';
    });
    setJobdetails({...jobdetails});
    console.log(jobdetails)
  };

  const submitJobEditHandler = (e) => {
    e.preventDefault();
    console.log(jobdetails);
    delete jobdetails.updated_at;
   // delete jobdetails.id;
   // console.log(jobdetails);
    formNotValid(jobdetails)
      ? Swal.fire("Failed to upload, complete details correctly")
      : axios
          .put(apiUrlJobs(location.state[0].id), jobdetails)
          .then((res) => {
            Swal.fire("You updated this job successfully");
            history.push({ pathname: "/dashboard/jobsbyyou" });
          })
          .catch((err) => {
            console.log(err);
          });
  };
  return (
    <div>
      <form onSubmit={submitJobEditHandler}>
        <div className="form">
          <section className="form__container form__container--postjob">
            <h2 className="form__title">Update Job</h2>
            <p className="form__subtitle"></p>
            <div className="form__input">
              <Label title="Company" />
              <Input
                handleChange={handleChange}
                value={jobdetails.company}
                name="company"
              />
            </div>
            <div className="form__input">
              <Label title="Website" />
              <Input
                type="url"
                handleChange={handleChange}
                value={jobdetails.website}
                name="website"
              />
            </div>
            <div className="form__input">
              <Label title="Location" />
              <Input
                handleChange={handleChange}
                value={jobdetails.address}
                name="address"
              />
            </div>
            <div className="form__input">
              <Label title="Start Date" />
              <Input
                type="datetime-local"
                handleChange={handleChange}
                value={jobdetails.startDate}
                name="startDate"
              />
            </div>
            <div className="form__input">
              <Label title="End Date" />
              <Input
                type="datetime-local"
                handleChange={handleChange}
                value={jobdetails.endDate}
                name="endDate"
              />
            </div>
            <div className="form__input">
              <Label title="Contact Email" />
              <Input
                handleChange={handleChange}
                value={jobdetails.email}
                name="email"
              />
            </div>
            <div className="form__input">
              <Label title="Contact Phone" />
              <Input
                handleChange={handleChange}
                value={jobdetails.phone}
                name="phone"
              />
            </div>
            <div className="form__input">
              <Label title="Position" />
              <Dropdown
                items={["Doctor", "Pharmacist", "Nurse", "Care giver"]}
                handleChange={handleChange}
                value={jobdetails.position}
                name="position"
              />
            </div>
            <div className="form__input">
              <Label title="Pay per hr" />
              <Input
                handleChange={handleChange}
                value={jobdetails.pay}
                name="pay"
              />
            </div>

            <div className="form__input">
              <Label title="Job Description" />
              <Textarea
                handleChange={handleChange}
                value={jobdetails.description}
                name="description"
              />
            </div>
          </section>
        </div>
        <div className="form__button-box">
          <div className="form__button-left">
          <input
              type="reset"
              value="Cancel"
              className="button button--reset"
              onClick={handleFormReset}
            />
          </div>
          <div className="form__button-right">
            <Button title="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateJob;
