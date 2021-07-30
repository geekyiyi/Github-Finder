import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;