import React from 'react'
import Navbar from '../navbar/navbar.js'
import '../css/header.css';
import stock from '../stock.jpg';
import Card from '../card/card';
class Header extends React.Component {
    render () {
        return (
            <div id="main-header">
                {/* <img src={stock} id="header-background"/> */}
                <div id="header-nav">
                    <Navbar/>
                </div>
               
                    <div id="card-container"> 
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                <div id="polygon">
                        
                </div>
            </div>
            
        )
    }
}

export default Header;
