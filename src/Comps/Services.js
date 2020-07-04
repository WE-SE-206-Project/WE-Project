import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../components/css/services.css';
import {
  Typography
} from '@material-ui/core';

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
      <div class="services-container">

        <article class="services-item service-item-black">
          <div class="front-text">
            <i class="fa fa-cogs"></i>
            <h1>Web Development</h1>
          </div>
          <div class="back-text">
            <h1>Web Development</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
            numquam natus excepturi!</p>
            <button type="button">Read more</button>
          </div>
        </article>



        <article class="services-item service-item-white">
          <div class="front-text">
            <i class="fa fa-pen-square"></i>
            <h1>Design and Branding</h1>
          </div>
          <div class="back-text">
            <h1>Design and Branding</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
            numquam natus excepturi!</p>
            <button type="button">Read more</button>
          </div>
        </article>



        <article class="services-item service-item-black">
          <div class="front-text">
            <i class="fa fa-chart-pie"></i>
            <h1>Analytics</h1>
          </div>
          <div class="back-text">
            <h1>Analytics</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
            numquam natus excepturi!</p>
            <button type="button">Read more</button>
          </div>
        </article>




        <article class="services-item service-item-white">
          <div class="front-text">
            <i class="fa fa-chart-line"></i>
            <h1>Ceo and Smm</h1>
          </div>
          <div class="back-text">
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
