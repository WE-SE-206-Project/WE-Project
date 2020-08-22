import React from 'react';
import '../css/aboutus.css';
export class Aboutus extends React.Component{
  render() {
    return (
      <div id="aboutus-container">
          <div className="aboutus-subpart"> 
                <h1>-Vision-</h1>
                <p>To provide quick access to users to book appointment.</p>
          </div>
          <div className="aboutus-subpart">
          <h1>-Mission-</h1>
          <p>Build the app cause no unnecessary usage of time
          and to support around the world bussinesses. </p>
          </div>
          <div className="aboutus-subpart">
                <h1>-Team-</h1>
                <p>Our team is highly motivated to develop multiple projects in order to help others.</p>
          </div>

      </div>
    );
  };
};