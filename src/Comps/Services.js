import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../css/services.css';
import {
  Typography
} from '@material-ui/core';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import CreateIcon from '@material-ui/icons/Create';
import PieChartIcon from '@material-ui/icons/PieChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const styles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    color: '#fc4a1a',
    marginBottom: theme.spacing(3),
    fontWeight: 'bold'
  }
}))

export default function Services() {
  const classes = styles();
  return (
    <div style={{ marginTop: '-101px', paddingTop: '130px' }} id='services'>
      {/* <section id="services"> */}
      {/* <div id="title"> */}
      {/* <div class="title-text"> */}
      <Typography variant="h3" className={classes.title}>Services</Typography>
      {/* </div> */}
      {/* <div class="title-underline"></div> */}
      {/* </div> */}
      <div className="services-container">

        <article className="services-item service-item-black">
          <div className="front-text">
            <SettingsApplicationsIcon className="fa" />
            <h1>Appointment Booking</h1>
          </div>
          <div className="back-text">
            <h1>Appointment Booking</h1>
            <p>Here we are introducing the online appointment booking system for any system. It will give you 
              lot of easiness and comfort in you busy life routine.
            </p>
            
          </div>
        </article>



        <article className="services-item service-item-white">
          <div className="front-text">
            <CreateIcon className="fa" />
            <h1>Online support</h1>
          </div>
          <div className="back-text">
            <h1>Online support</h1>
            <p>Our team will give you online support through email in order to manage and changing your appointment. </p>
            
          </div>
        </article>



        <article className="services-item service-item-black">
          <div className="front-text">
            <PieChartIcon className="fa" />
            <h1>Feature</h1>
          </div>
          <div className="back-text">
            <h1>Feature</h1>
            <p>We book appointments if any user want to book an appointment while we also book appointment 
              through organization and organization can also control and manage appointments</p>
          </div>
        </article>




        <article className="services-item service-item-white">
          <div className="front-text">
            <TrendingUpIcon className="fa" />
            <h1>Availability</h1>
          </div>
          <div className="back-text">
            <h1>Availability</h1>
            <p>
              Our system is 24x7 available for you to book appointment anytime. Furthermore you can view your
              appointments details.
            </p>
          </div>
        </article>

      </div>
      {/* </section> */}
    </div>
  )
}
