import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.scss";
import PostJob from "../../Components/PostJob/PostJob";
import FindJob from "../../Components/FindJob/FindJob";
import Profile from "../../Components/Profile/Profile";
import JobsByYou from "../../Components/JobsByYou/JobsByYou";
import { Switch, Route, Redirect } from "react-router-dom";
import UpdateJob from "../../Components/UpdateJob/UpdateJob";
import { apiUrlUsers } from "../../utils/functions";
import Button from "../../Components/Button/Button";

export class Dashboard extends Component {
  state = {
    userInfo: {},
    isLoading: true,
    showSideBar: false,
  };
  closeSideBar = () => this.setState({ showSideBar: false });
  componentDidMount() {
    //getting token to allow access to dashboard
    let token = sessionStorage.getItem("authToken");
    token
      ? axios
          .get(apiUrlUsers("current"), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            this.setState({
              userInfo: res.data,
              isLoading: false,
            });
          })
      : this.props.history.push("/login");
  }
  render() {
    const path = this.props.match.isExact;
    console.log(path);
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <section>
        <div className="dashboard">
          <div className={`${path ? 'dashboard__main' : 'dashboard__main--jobsbyyou'}`}>
            <Switch>
              <Route
                path="/dashboard"
                exact
                render={() => <FindJob userInfo={this.state.userInfo} />}
              />
              <Route
                path="/dashboard/postjob"
                render={() => <PostJob userInfo={this.state.userInfo} />}
              />
              <Route
                path="/dashboard/jobsbyyou"
                render={() => <JobsByYou userInfo={this.state.userInfo} />}
              />
              <Route
                path="/dashboard/updatejob"
                render={() => <UpdateJob userInfo={this.state.userInfo} />}
              />
              <Redirect from="/dashboard/" to="/dashboard" />
            </Switch>
          </div>
          <div
            className={
              this.state.showSideBar
                ? `dashboard__profile`
                : `dashboard__profile--close`
            }
          >
            <Profile userInfo={this.state.userInfo} />
          </div>
        </div>
        <Button
          className="dashboard__profile-btn"
          title={this.state.showSideBar ? "x" : "☰"}
          onClick={() =>
            this.setState({ showSideBar: !this.state.showSideBar })
          }
        />
      </section>
    );
  }
}

export default Dashboard;
