import React, { Component } from "react";
import { withRouter } from "react-router";
import "./JobsByYou.scss";
import axios from "axios";
import Button from "../Button/Button";
import Table from "../Table/Table";
import Swal from "sweetalert2";
import View from "../../assets/icons/arrow_drop_down-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Del from "../../assets/icons/delete_outline-24px.svg";
import { getReq, apiUrlJobs } from "../../utils/functions";
import Modal from "../Modal/Modal";

export class JobsByYou extends Component {
  state = {
    myJobs: [],
    isLoading: true,
    showApplicantTable: false,
    applicants: [],
  };

  //this.getReq(apiUrl(""), "videos", this.fetchVideoDetails); apiUrlUsers getReq apiUrlJobs
  viewApplicants = (id) => {
    //get users applied to the job
    axios
      .get(`${apiUrlJobs("apply")}/${id}`)
      .then((res) => {
        this.setState({
          applicants: res.data,
          showApplicantTable: true,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  updateJob = (job) => {
    //push to the job to UpdateJob Component to update job
    this.props.history.push("/dashboard/updatejob", [job]);
  };

  deleteJob = (id) => {
    //delete specific job
    console.log("job id", id);
    axios
      .delete(`${apiUrlJobs("")}/${id}`)
      .then((res) => {
        Swal.fire("You deleted this job successfully");
        axios
          .get(`${apiUrlJobs("")}/${this.props.userInfo.id}`)
          .then((res) => {
            this.setState({ myJobs: res.data, isLoading: false });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    // get all jobs posted by specific user
    axios
      .get(`${apiUrlJobs("")}/${this.props.userInfo.id}`)
      .then((res) => {
        this.setState({ myJobs: res.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // componentDidUpdate(prevProps) {
  //   //prevent loop on same props video details as url path changes with clicking of nextVideos link
  //   if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
  //     this.fetchVideoDetails();
  //   }
  // }

  render() {
    console.log(this.props.match)
    return this.state.isLoading ? (
      <div>Jobs are Loading...</div>
    ) : (
      <section className="job-post-container">
        <h2 className="dashboard__heading">Jobs Posted By You</h2>
        {this.state.myJobs.length ? (
          this.state.myJobs.map((job, index) => (
            //include time of posting to database
            <div key={index} className="post">
              <h4 className="post__heading">
                {`${job.position}`} position{" "}
                <span>{`posted for ${job.startDate.substring(0, 10)}`}</span>
              </h4>
              <div className="post__btns">
                <Button
                  className="post__btn"
                  title={<img src={View} className="filterit" />}
                  onClick={() => this.viewApplicants(job.id)}
                />
                <Button
                  className="post__btn"
                  title={<img src={Edit} className="filterit" />}
                  onClick={() => this.updateJob(job)}
                />
                <Button
                  className="post__btn"
                  title={<img src={Del} className="filterit" />}
                  onClick={() => this.deleteJob(job.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <h2 className="post__text">No Jobs Posted...</h2>
        )}
        {this.state.showApplicantTable &&
          (this.state.applicants.length ? (
            <Modal
              closeModal={() =>
                this.setState({
                  showApplicantTable: false,
                })
              }
              content={
                <table className="table">
                  <thead>
                    <tr className="table__row">
                      <th className="table__heading">Applicant</th>
                      <th className="table__heading">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.applicants.map((applicant, index) => (
                      <Table
                        name={applicant.name}
                        email={applicant.email}
                        phone={applicant.phone}
                        linkedInUrl={applicant.linkedInUrl}
                        resumeUrl={applicant.resumeUrl}
                        key={index}
                      />
                    ))}
                  </tbody>
                </table>
              }
            />
          ) : (
            <Modal
              closeModal={() =>
                this.setState({
                  showApplicantTable: false,
                })
              }
              content={<h2>No applicants yet!</h2>}
            />
          ))}
      </section>
    );
  }
}

export default withRouter(JobsByYou);
