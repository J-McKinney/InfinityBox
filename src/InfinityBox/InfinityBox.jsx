import React, { Component } from "react";
import "./InfinityBox.css";

class InfinityBox extends Component {
  render() {
    return (
      <div className="infinityWrapper">
        <div className="container">
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
        </div>
      </div>
    );
  }
}

export default InfinityBox;
