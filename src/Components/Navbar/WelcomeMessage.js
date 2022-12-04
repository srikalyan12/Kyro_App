import React from "react";
import Moment from "react-moment";

function WelcomeMessage() {
  return (
    <>
      <div>
        <strong>Good Morning, Adam</strong>
      </div>
      <div className="welcome-date">
        <Moment format="MMMM DD, YYYY"></Moment>
      </div>
    </>
  );
}

export default WelcomeMessage;
