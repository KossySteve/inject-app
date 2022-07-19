import React from "react";
import Button from "../Button/Button";
import "./Profile.scss";

function Profile({ userInfo }) {
  return (
    <div className="dashboard__sidebar">
      <span className="dashboard__sidebar-text--profile">Profile</span>
      <h3 className="dashboard__sidebar-heading">
        <span className="dashboard__sidebar-title">Name:</span>{" "}
        <span className="dashboard__sidebar-text">{` ${userInfo.position} ${userInfo.name}`}</span>
      </h3>
      <h3 className="dashboard__sidebar-heading--email">
        <span className="dashboard__sidebar-title">Email:</span>{" "}
        <span className="dashboard__sidebar-text">{`${userInfo.email}`}</span>
      </h3>
      <h3 className="dashboard__sidebar-heading--position">
        <span className="dashboard__sidebar-title">Position:</span>
        <span className="dashboard__sidebar-text">{`${userInfo.position}`}</span>
      </h3>
      <div className="dashboard__sidebar-box">
        <h3 className="dashboard__sidebar-heading">
          <a
            className="dashboard__sidebar-text--linkedIn"
            onClick={(e) => window.open(`${userInfo.linkedInUrl}`)}
          >
            LinkedIn Profile
          </a>
        </h3>
        <h3 className="dashboard__sidebar-heading--resume">
          <a
            className="dashboard__sidebar-text--resume"
            onClick={(e) => window.open(`${userInfo.resumeUrl}`)}
          >
            Resume
          </a>
        </h3>
      </div>

      <Button className="closebtn" title="Edit" />
    </div>
  );
}

export default Profile;
