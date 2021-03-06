import React from 'react';
import '../css/team.css';
import {
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const style = makeStyles(theme => ({
  icon: {
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.15)'
    }
  }
}))


export default function TeamCard(props) {
  const classes = style();
  return (
    <div id="team-card">
      <img src={require('../Asset/' + props.pic + '.jpeg')} id="profile-pic">
      </img>
      <h3 id="member-name">{props.name}</h3>
      <p>{props.designation}</p>
      <div>
        <a href={props.fb} target="_blank"><IconButton className={classes.icon}><FacebookIcon /></IconButton></a>
        <a href={props.github} target="_blank"><IconButton className={classes.icon}><GitHubIcon /></IconButton></a>
        <a href={props.insta} target="_blank"><IconButton className={classes.icon}><InstagramIcon /></IconButton></a>
        <a href={props.linkdin} target="_blank"><IconButton className={classes.icon}><LinkedInIcon /></IconButton></a>
      </div>

    </div>
  )
}
