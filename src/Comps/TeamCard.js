import React from 'react';
// import '../css/team.css'

export default function TeamCard(props) {
  return (
    <div id="team-card">
      <img src={require('../Asset/' + props.pic + '.jpeg')} id="profile-pic">
      </img>
      <h3 id="member-name">{props.name}</h3>
      <p>{props.designation}</p>
      <div>
        <i className="fab fa-facebook-f blue pa2 mt2 social-icon"></i>
        <i className="fab fa-instagram orange pa2 mt2 social-icon"></i>
        <i className="fab fa-youtube dark-red mt2 social-icon"></i>
      </div>

    </div>
  )
}
