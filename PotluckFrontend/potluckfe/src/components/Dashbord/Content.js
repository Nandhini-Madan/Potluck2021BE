import React from "react";
import {useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Content = () => {
const history = useHistory();
  return (
     <div className="home-wrapper">
      <img
        div className="home-image"
        src="https://images.unsplash.com/photo-1467453678174-768ec283a940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80"
        alt=""
      />
      <div className="contentbtn">
      <div className="md-button" onClick={() => history.push("/newevent")}>Create new event</div>
      {/* <div className="md-button" onClick={() => history.push("/upcomingevent")}>Check upcoming event</div> */}
</div>
    </div>
  );
};

export default Content;