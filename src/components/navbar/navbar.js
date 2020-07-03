import React from 'react'
import '../css/navbar.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
class Navbar extends React.Component {
    render() {
        return (
            <div id="main-nav">
                <div id="sub-nav">

                    <li id="sub-nav-li"><i class="fas fa-phone-alt"></i><a>Contact us</a></li>
                    <li id="sub-nav-li"><a>About us</a></li>



                </div>

            </div>
        )
    }
}

export default Navbar
