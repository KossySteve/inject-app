import React, { Component } from "react";
import axios from "axios";
import Button from "../Button/Button";
import "./FindJob.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { apiUrlJobs } from "../../utils/functions";

export class FindJob extends Component {
  state = {
    jobs: [],
    isLoading: true,
  };
  submitJobApplication = (id) => {
    //post request for job application using {jobId : id , userId : userInfo.id}
    axios
      .post(apiUrlJobs("apply"), {
        jobId: id,
        userId: this.props.userInfo.id,
      })
      .then((res) => {
        Swal.fire("You have submitted an application for this job");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    //get all posted jobs based on user's position e.g doctor, nurse etc
    axios
      .get(`${apiUrlJobs("position")}/${this.props.userInfo.position}`)
      .then((res) => {
        this.setState({ jobs: res.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.isLoading ? (
      <div>Jobs are Loading...</div>
    ) : (
      <div>
        <h2 className="dashboard__heading">
          {this.state.jobs.length
            ? `Welcome back ! ${this.props.userInfo.name} we have jobs for you`
            : "No available jobs now. Check back later"}
        </h2>
        <div className="dashboard__main-jobs">
          {this.state.jobs.map((job, index) => (
            <div key={job.id} className="dashboard__main-card">
              <div>
                <h4 className="dashboard__main-heading">Job description</h4>
                <h3 className="dashboard__main-text">
                  {`${job.position} is required from the`} <br />{" "}
                  {`${job.startDate.substring(
                    0,
                    10
                  )} to ${job.endDate.substring(0, 10)}`}
                </h3>
                <h3 className="dashboard__main-text">{`${job.description} at`}</h3>
                <h3
                  className="dashboard__main-text"
                  onClick={(e) => window.open(`${job.website}`)}
                >
                  <Link
                    to=""
                    className="dashboard__main-link"
                  >{` ${job.company}`}</Link>
                </h3>
                <h4 className="dashboard__main-heading">Contact</h4>
                <h3 className="dashboard__main-text">{`email: ${job.email} or call: ${job.phone}`}</h3>
                <h4 className="dashboard__main-heading">Location</h4>
                <h3 className="dashboard__main-text">{`${job.address}`}</h3>
                <h4 className="dashboard__main-heading">Pay</h4>
                <h3 className="dashboard__main-text">{`${job.pay}`}</h3>
              </div>
              <div>
                <Button
                  className="apply-btn"
                  title="Apply"
                  onClick={() => this.submitJobApplication(job.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FindJob;
