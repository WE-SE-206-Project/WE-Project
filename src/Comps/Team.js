import React from 'react';
import TeamCard from './TeamCard';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles(theme => ({
  teamCard: {
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-10px)'
    }
  }
}))

export default function Team() {
  const classes = style();
  return (
    <div id="team-container-background">
      <div id="team-container">
        <div id="team-bio1">
          <h1>The Amazing Team</h1>
          <p className="f4 light-silver">Our team is very exciting and warm hearted to accept challenges and to perform work.
                </p>
        </div>
        <div id="team" className="mt5">

          <TeamCard
            name="Rana Muhammad Ibrahim"
            designation="Frontend Developer"
            pic="ibrahim"
            fb="https://facebook.com/rmibrahim"
            github="https://github.com/rmi-01"
            insta="https://www.instagram.com/ibrahimm1.0"
            linkdin="https://www.linkedin.com/in/rana-muhammad-ibrahim/"
          />

          <TeamCard
            name="Hamza Shahab"
            designation="Mern stack developer"
            pic="hamza"
            fb="https://www.facebook.com/hamzashahab1610"
            github="https://github.com/hamzashahab1610"
            insta="https://www.instagram.com/hamzashahab1610"
            linkdin="https://www.linkedin.com/in/hamzashahab1610"
          />

          <TeamCard
            name="Zoha Akram"
            designation="System Analyst"
            pic="ibrahim"
            fb="https://www.facebook.com/zoha.akram.10"
            github="https://github.com/ZohaAkram"
            insta="https://www.instagram.com/zohaakram_/"
            linkdin="https://www.linkedin.com/in/zoha-akram-365202197/" />

          <TeamCard
            name="Muhammad Mubeen Rasheed"
            designation="Mern stack developer"
            pic="mubeen"
            fb="https://www.facebook.com/mubeenrasheed001"
            github="https://github.com/mubeeennn"
            insta="https://www.instagram.com/sk.fisker/"
            linkdin="https://us04web.zoom.us/j/71084508100?pwd=WWgyVHd2a2c4TmprcVQ5MWZxd2JQdz09" />
        </div>
        <Paper id="team-lower" className={classes.teamCard}>
          <h1>The Crusaiders team at its beginning</h1>
          <p>Fully motivated team who is always ready to learn and to make user friendly websites.</p>
        </Paper>
      </div>
    </div>


  )
}
