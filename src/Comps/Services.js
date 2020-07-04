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
            <h1>Web Development</h1>
          </div>
          <div className="back-text">
            <h1>Web Development</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
            numquam natus excepturi!</p>
            <button type="button">Read more</button>
          </div>
        </article>



        <article className="services-item service-item-white">
          <div className="front-text">
            <CreateIcon className="fa" />
            <h1>Design and Branding</h1>
          </div>
          <div className="back-text">
            <h1>Design and Branding</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
            numquam natus excepturi!</p>
            <button type="button">Read more</button>
          </div>
        </article>



        <article className="services-item service-item-black">
          <div className="front-text">
            <PieChartIcon className="fa" />
            <h1>Analytics</h1>
          </div>
          <div className="back-text">
            <h1>Analytics</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
            numquam natus excepturi!</p>
            <button type="button">Read more</button>
          </div>
        </article>




        <article className="services-item service-item-white">
          <div className="front-text">
            <TrendingUpIcon className="fa" />
            <h1>Ceo and Smm</h1>
          </div>
          <div className="back-text">
            <h1>Ceo and Smm</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
            numquam natus excepturi!</p>
            <button type="button">Read more</button>
          </div>
        </article>

      </div>
      {/* </section> */}
    </div>
  )
}
