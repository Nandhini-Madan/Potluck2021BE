import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../../contexts/UserContext";
import { Card, Button, CardHeader, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

const Content = () => {

  return (
    <div className="dashboard-content">
      <h1>Your Upcoming Events</h1>

              <Card className="eventCard">
                
                <CardHeader>event name goes here</CardHeader>
                
                <CardTitle className="eventAddress">adress goes here</CardTitle>

                <CardSubtitle className="eventTime">event time will go here</CardSubtitle>

                <CardText className="eventDescription">card title comig</CardText>
                <CardText className="eventDetailsLink">View Event Details</CardText>

              </Card>
            
       
          
        
      <div className="dashboard-pastevents">
      <h1>Your Past Events</h1>
      </div>
    </div>
  );
};

export default Content;