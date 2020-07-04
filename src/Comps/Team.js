import React from 'react';
import TeamCard from './TeamCard'

export default function Team() {
  return (
    <div id="team-container-background">
      <div id="team-container">
        <div id="team-bio1">
          <h1>The Amazing Team</h1>
          <p className="f4 light-silver">Our team is very exciting and warm hearted to accept challenges and to perform work according
          in order to satisfy customers
                </p>
        </div>
        <div id="team" className="mt5">
          <TeamCard name="Rana Muhammad Ibrahim" designation="Mern stack developer" pic="ibrahim" />;
            <TeamCard name="Hamza Shahab" designation="Mern stack developer" pic="hamza" />;
            <TeamCard name="Zoha Akram" designation="Mern stack developer" pic="ibrahim" />;
            <TeamCard name="Muhammad Mubeen Rasheed" designation="Mern stack developer" pic="mubeen" />;
            </div>
        <div id="team-lower" className="mt5 pt5 pb5">
          <h1>We made website building easier for you.</h1>
          <p>I will be the leader of a company that ends up being
                worth billions of dollars, because I got the answers. I understand culture.</p>
        </div>
      </div>
    </div>


  )
}
