import React from 'react'

import './team.css';
class Teamcard extends React.Component {
    render () {
        return (
            <div id="team-card">
                <img src={this.props.pic} id="profile-pic">
                </img>
                <h3 id="member-name">{this.props.name}</h3>
                <p>{this.props.designation}</p>
                <div>
                    <i className="fab fa-facebook-f blue pa2 mt2 social-icon"></i>
                    <i className="fab fa-instagram orange pa2 mt2 social-icon"></i>
                    <i className="fab fa-youtube dark-red mt2 social-icon"></i>
                </div>
                
            </div>
        )
    }
}

export default Teamcard;
