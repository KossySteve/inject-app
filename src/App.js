import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Pages/LogIn/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

//export const apiUrl = (end_point) =>`http://localhost:8080/videos/${end_point}?api_key=65464bbf-2db6-4b96-86d5-1bf19bb9249b`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
